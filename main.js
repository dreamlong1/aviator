import './style.css';
import * as THREE from 'three';

// 调色板：定义整个项目中使用的基础颜色
const Colors = {
    red: 0xf25346,       // 红色，用于敌机、飞机机身等
    white: 0xd8d0d1,     // 白色，用于云朵、发动机等
    brown: 0x59332e,     // 棕色，用于螺旋桨、部分人物外观
    pink: 0xF5986E,      // 粉色/肤色，用于驾驶员的面部
    brownDark: 0x23190f, // 深棕色，用于螺旋桨叶片
    blue: 0x68c3c0,      // 浅蓝色，用于海洋、能量条背景等
};

// ==========================================
// 游戏状态与核心参数管理区
// ==========================================
let game;
let deltaTime = 0; // 帧间时间差，用于平滑动画和物理计算
let newTime = new Date().getTime(); // 当前时间
let oldTime = new Date().getTime(); // 上一帧的时间
// 在 DOM 中操作的 UI 元素引用
let fieldLevel, fieldDistance, fieldEnergy, fieldProgress;
let energyBar, replayMessage, instructionsMessage;

/**
 * 重置/初始化游戏核心参数
 * 包含速度、距离、能量状态、生成间隔等控制游戏循环的数据
 */
function resetGame() {
    game = {
        speed: 0,                         // 当前游戏流转速度
        initSpeed: 0.000525,              // 初始的基础速度（已提速50%）
        baseSpeed: 0.000525,              // 当前级别的基础速度
        targetBaseSpeed: 0.000525,        // 目标基础速度，用于平滑提速
        incrementSpeedByTime: 0.00000375, // 随时间自然增长的速度增量
        incrementSpeedByLevel: 0.0000075, // 每次升级时增加的速度幅度
        distanceForSpeedUpdate: 100,      // 提升速度所需的行驶距离
        speedLastUpdate: 0,               // 上一次更新速度时的距离

        distance: 0,                      // 积累的飞行总距离
        ratioSpeedDistance: 50,           // 速度到距离的具体转换系数
        energy: 100,                      // 飞机的初始能量（满分100）
        ratioSpeedEnergy: 3,              // 速度到能量消耗的转换系数（此版本暂略主动自然消耗）

        level: 1,                         // 当前游戏等级
        levelLastUpdate: 0,               // 上一次升级时的行驶距离
        distanceForLevelUpdate: 1000,     // 升到下一级所需距离

        planeDefaultHeight: 100,          // 飞机的基准Y轴高度
        planeAmpHeight: 80,               // 飞机可以上下移动的振幅
        seaRadius: 600,                   // 海洋圆柱体的半径（影响视角计算）

        coinsSpeed: .5,                   // 金币（能量丸）自身的旋转速度
        ennemiesSpeed: .6,                // 敌机/障碍物的旋转速度
        coinDistanceTolerance: 15,        // 获取金币的有效碰撞判定距离
        coinValue: 3,                     // 吃到一颗金币恢复的能量值
        enemyDistanceTolerance: 10,       // 撞击敌机的有效碰撞判定距离
        enemyValue: 50,                   // 撞到一架敌机扣除的能量值 (50表示两次直接死)

        coinLastSpawn: 0,                 // 上次生成金币是的行驶距离
        distanceForCoinsSpawn: 100,       // 每隔多少距离生成一波金币

        ennemyLastSpawn: 0,               // 上次生成敌机的行驶距离
        distanceForEnnemiesSpawn: 50,     // 每隔多少距离生成一波敌机

        status: "playing",                // 游戏状态："playing" 或 "gameover"
    };
    // 更新界面中距离和等级的显示
    fieldDistance.innerHTML = Math.floor(game.distance);
    fieldLevel.innerHTML = Math.floor(game.level);
    updateEnergy();
}

/**
 * 更新并计算飞行距离、判断是否升级
 * 同时更新 UI 的环形进度条
 */
function updateDistance() {
    game.distance += game.speed * deltaTime * game.ratioSpeedDistance;
    fieldDistance.innerHTML = Math.floor(game.distance);

    // 502 是 svg 环形描边的周长计算（视具体实现而定），此处换算剩余进度的倒退效果
    const d = 502 * (1 - (game.distance % game.distanceForLevelUpdate) / game.distanceForLevelUpdate);
    fieldProgress.setAttribute('stroke-dashoffset', d);

    // 判断是否满足升级条件
    if (Math.floor(game.distance) % game.distanceForLevelUpdate === 0 && Math.floor(game.distance) > game.levelLastUpdate) {
        game.levelLastUpdate = Math.floor(game.distance);
        game.level++;
        fieldLevel.innerHTML = Math.floor(game.level);
        // 提升基础速度，游戏难度增大
        game.targetBaseSpeed = game.initSpeed + game.incrementSpeedByLevel * game.level;
    }
}

/**
 * 更新当前剩余能量并在前端界面展示
 * 若能量耗尽则触发游戏结束逻辑
 */
function updateEnergy() {
    game.energy = Math.max(0, game.energy);
    // 能量条通过 right 属性挤压长度来模拟消耗
    energyBar.style.right = (100 - game.energy) + "%";
    // 能量过低时变色（由蓝变红）
    energyBar.style.backgroundColor = (game.energy < 50) ? "#f25346" : "#68c3c0";

    // 死亡判断
    if (game.energy <= 0) {
        game.status = "gameover";
        replayMessage.style.display = 'block';
        instructionsMessage.style.display = 'none';
    }
}

/**
 * 吃掉金币时增加能量
 */
function addEnergy() {
    game.energy += game.coinValue;
    game.energy = Math.min(game.energy, 100);
    updateEnergy();
}

/**
 * 撞击障碍物时扣减能量
 */
function removeEnergy() {
    game.energy -= game.enemyValue;
    game.energy = Math.max(0, game.energy);
    updateEnergy();
}

// 三维世界的全局核心对象：场景、相机、渲染器等
let scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH, renderer, container;

/**
 * 初始化 Three.js 场景框架
 */
function createScene() {
    // 拿到浏览器可视窗口的尺寸
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    // 创建空场景并添加线性雾来营造隐约的远方天空效果
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

    // 建立透视相机
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 10000;
    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

    // 定位相机位姿。将相机往后抬、往上拉一些
    camera.position.x = 0;
    camera.position.z = 200;
    camera.position.y = 100;

    // 创建渲染器：开启透明度、抗锯齿支持
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true; // 允许阴影渲染

    // **核心修复：** 强行将输出色彩空间设为 Linear SRGB，以匹对旧版基于线性的明艳卡通感
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // 挂载到 DOM 里
    container = document.getElementById('world');
    container.appendChild(renderer.domElement);

    // 监听响应式缩放
    window.addEventListener('resize', handleWindowResize, false);
}

/**
 * 响应浏览器缩放，调整相机比例以防变形
 */
function handleWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}

// 常见光照类型
let hemisphereLight, shadowLight, ambientLight;

/**
 * 创建灯光照亮场景
 */
function createLights() {
    // 半球光，产生从天空向地面的渐变色光
    hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9 * Math.PI);
    // 定向光（模拟太阳），产生投影
    shadowLight = new THREE.DirectionalLight(0xffffff, 0.9 * Math.PI);
    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;

    // 定义生成阴影的相机范围，能有效提高渲染阴影的清晰度
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;
    shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;

    // 环境光，把处于背光面死黑的阴影提亮，稍微泛出温暖色泽
    ambientLight = new THREE.AmbientLight(0xdc8874, 0.5 * Math.PI);

    // 齐齐添加到场景内
    scene.add(hemisphereLight);
    scene.add(shadowLight);
    scene.add(ambientLight);
}

// ==========================================
// 游戏内具体的三维元素模型类定义：大海、云、天空等
// ==========================================

/**
 * 海洋类，使用一个旋转的圆柱体模拟无限滚动的大海，并带波浪形变动效
 */
class Sea {
    constructor() {
        const geom = new THREE.CylinderGeometry(600, 600, 800, 40, 10);
        // 让圆柱体横置
        geom.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

        const positions = geom.attributes.position;
        // 保存用于计算波浪的数据数组
        this.waves = [];

        // 给每个顶点赋予一个随机的速度和偏离角等基础信息
        for (let i = 0; i < positions.count; i++) {
            this.waves.push({
                x: positions.getX(i),
                y: positions.getY(i),
                z: positions.getZ(i),
                ang: Math.random() * Math.PI * 2,
                amp: 5 + Math.random() * 15, // 振幅，波纹幅度
                speed: 0.016 + Math.random() * 0.032 // 移动速率
            });
        }

        // 大海材质
        const mat = new THREE.MeshPhongMaterial({
            color: Colors.blue,
            transparent: true,
            opacity: 0.8,
            flatShading: true, // 使用平直阴影（低多边形风格的灵魂）
        });

        this.mesh = new THREE.Mesh(geom, mat);
        this.mesh.receiveShadow = true;
    }

    // 更新海的波纹（在循环帧中频繁调用）
    moveWaves() {
        const positions = this.mesh.geometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
            const vprops = this.waves[i];
            // 用三角函数实时更新顶点偏离
            positions.setX(i, vprops.x + Math.cos(vprops.ang) * vprops.amp);
            positions.setY(i, vprops.y + Math.sin(vprops.ang) * vprops.amp);
            vprops.ang += vprops.speed;
        }
        // 指示顶点需要重新传入着色器，发生渲染更新
        positions.needsUpdate = true;
    }
}

// 存放所有模型的全局引用
let sea, airplane, ennemiesHolder, coinsHolder, particlesHolder, sky;

function createSea() {
    sea = new Sea();
    // 往下平移大半径距离，让上端表面恰好处于视线水平线上方一点处
    sea.mesh.position.y = -game.seaRadius;
    scene.add(sea.mesh);
}

/**
 * 云朵类，由几个随机组合排列的简易方块组成一朵云
 */
class Cloud {
    constructor() {
        this.mesh = new THREE.Group();
        const geom = new THREE.BoxGeometry(20, 20, 20);
        const mat = new THREE.MeshPhongMaterial({ color: Colors.white, flatShading: true });
        // 随机产生3..6块组成一个大云
        const nBlocs = 3 + Math.floor(Math.random() * 3);

        for (let i = 0; i < nBlocs; i++) {
            const m = new THREE.Mesh(geom, mat);
            m.position.x = i * 15;
            m.position.y = Math.random() * 10;
            m.position.z = Math.random() * 10;
            m.rotation.z = Math.random() * Math.PI * 2;
            m.rotation.y = Math.random() * Math.PI * 2;
            const s = 0.1 + Math.random() * 0.9;
            m.scale.set(s, s, s);
            m.castShadow = true; // 云层可以向下投射阴影
            m.receiveShadow = true;
            this.mesh.add(m);
        }
    }
}

/**
 * 完整天空类，包裹在场景的最背景深处，存放众多散乱的云
 */
class Sky {
    constructor() {
        this.mesh = new THREE.Group();
        this.nClouds = 20;
        // 把20朵云按等角排在一个环圈上
        const stepAngle = Math.PI * 2 / this.nClouds;
        for (let i = 0; i < this.nClouds; i++) {
            const c = new Cloud();
            const a = stepAngle * i;
            const h = 750 + Math.random() * 200; // 让它们的半径忽前忽后
            // 把每个云利用极角公式摆成环状
            c.mesh.position.y = Math.sin(a) * h;
            c.mesh.position.x = Math.cos(a) * h;
            c.mesh.rotation.z = a + Math.PI / 2;
            c.mesh.position.z = -400 - Math.random() * 400; // 通通放远点（Z轴纵深处理）
            const s = 1 + Math.random() * 2;
            c.mesh.scale.set(s, s, s);
            this.mesh.add(c.mesh);
        }
    }
}

function createSky() {
    sky = new Sky();
    sky.mesh.position.y = -600;
    scene.add(sky.mesh);
}

/**
 * 驾驶员（飞行员小人）模型构建类
 */
class Pilot {
    constructor() {
        this.mesh = new THREE.Group();
        this.mesh.name = "pilot";
        this.angleHairs = 0; // 控制头发随风摆动

        // 身体
        const bodyGeom = new THREE.BoxGeometry(15, 15, 15);
        const bodyMat = new THREE.MeshPhongMaterial({ color: Colors.brown, flatShading: true });
        const body = new THREE.Mesh(bodyGeom, bodyMat);
        body.position.set(2, -12, 0);
        this.mesh.add(body);

        // 脸
        const faceGeom = new THREE.BoxGeometry(10, 10, 10);
        const faceMat = new THREE.MeshLambertMaterial({ color: Colors.pink, flatShading: true });
        const face = new THREE.Mesh(faceGeom, faceMat);
        this.mesh.add(face);

        // ==== 创建各种各样的毛发/头发特征 ====
        const hairGeom = new THREE.BoxGeometry(4, 4, 4);
        const hairMat = new THREE.MeshLambertMaterial({ color: Colors.brown, flatShading: true });
        const hair = new THREE.Mesh(hairGeom, hairMat);
        // 上移底座中心，使得之后应用 scale 动画时只往上长
        hair.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 2, 0));

        const hairs = new THREE.Group();
        this.hairsTop = new THREE.Group(); // 单独把顶前部的头发分出来拿去做飘移动画

        // 顶部的卷发
        for (let i = 0; i < 12; i++) {
            const h = hair.clone();
            const col = i % 3;
            const row = Math.floor(i / 3);
            h.position.set(-4 + row * 4, 0, -4 + col * 4);
            this.hairsTop.add(h);
        }
        hairs.add(this.hairsTop);

        // 两侧头发
        const hairSideGeom = new THREE.BoxGeometry(12, 4, 2);
        hairSideGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(-6, 0, 0));
        const hairSideR = new THREE.Mesh(hairSideGeom, hairMat);
        const hairSideL = hairSideR.clone();
        hairSideR.position.set(8, -2, 6);
        hairSideL.position.set(8, -2, -6);
        hairs.add(hairSideR);
        hairs.add(hairSideL);

        // 脑后的短发
        const hairBackGeom = new THREE.BoxGeometry(2, 8, 10);
        const hairBack = new THREE.Mesh(hairBackGeom, hairMat);
        hairBack.position.set(-1, -4, 0);
        hairs.add(hairBack);
        hairs.position.set(-5, 5, 0);
        this.mesh.add(hairs);

        // 防风飞行镜
        const glassGeom = new THREE.BoxGeometry(5, 5, 5);
        const glassMat = new THREE.MeshLambertMaterial({ color: Colors.brown, flatShading: true });
        const glassR = new THREE.Mesh(glassGeom, glassMat);
        glassR.position.set(6, 0, 3);
        const glassL = glassR.clone();
        glassL.position.z = -glassR.position.z;
        const glassAGeom = new THREE.BoxGeometry(11, 1, 11);
        const glassA = new THREE.Mesh(glassAGeom, glassMat);
        this.mesh.add(glassR, glassL, glassA);

        // 两个小耳朵
        const earGeom = new THREE.BoxGeometry(2, 3, 2);
        const earL = new THREE.Mesh(earGeom, faceMat);
        earL.position.set(0, 0, -6);
        const earR = earL.clone();
        earR.position.set(0, 0, 6);
        this.mesh.add(earL, earR);
    }

    /**
     * 更新飞行员头发飘逸的特效，用余弦值给发簇赋予拉伸动作
     */
    updateHairs() {
        const hairs = this.hairsTop.children;
        for (let i = 0; i < hairs.length; i++) {
            hairs[i].scale.y = 0.75 + Math.cos(this.angleHairs + i / 3) * 0.25;
        }
        this.angleHairs += 0.16;
    }
}

/**
 * 单个敌机/障碍物的类对象，呈现小红色四面体几何体
 */
class Ennemy {
    constructor() {
        const geom = new THREE.TetrahedronGeometry(8, 2); // 构建红色小障碍物
        const mat = new THREE.MeshPhongMaterial({ color: Colors.red, flatShading: true });
        this.mesh = new THREE.Mesh(geom, mat);
        this.mesh.castShadow = true;
        this.angle = 0; // 存记录在大海轮盘中的极角
        this.dist = 0;  // 存距离海圆心的距离
    }
}

/**
 * 敌机的聚合器及队列管理类
 * 负责批量生成、销毁与检测敌机与英雄飞机的碰撞
 */
class EnnemiesHolder {
    constructor() {
        this.mesh = new THREE.Group();
        this.ennemiesInUse = [];
    }

    // 在游戏距离达到生成阈值时召唤一排敌机
    spawnEnnemies() {
        const nEnnemies = game.level; // 随关卡增多数量加大
        for (let i = 0; i < nEnnemies; i++) {
            const ennemy = new Ennemy();
            this.ennemiesInUse.push(ennemy);

            // 计算这个独立敌机被放置的角度、振幅高度等坐标
            ennemy.angle = -(i * 0.1);
            ennemy.dist = game.seaRadius + game.planeDefaultHeight + (-1 + Math.random() * 2) * (game.planeAmpHeight - 20);

            // 从极坐标转回世界直角坐标系赋予模型
            ennemy.mesh.position.y = -game.seaRadius + Math.sin(ennemy.angle) * ennemy.dist;
            ennemy.mesh.position.x = Math.cos(ennemy.angle) * ennemy.dist;
            this.mesh.add(ennemy.mesh);
        }
    }

    // 由于海在自转，挂靠在海体周围的独立对象阵列也需要自行跟随环境轮盘旋转，模拟飞行迫降感
    rotateEnnemies() {
        for (let i = 0; i < this.ennemiesInUse.length; i++) {
            const ennemy = this.ennemiesInUse[i];
            // 以一定比重乘上时钟因子角速度计算位移
            ennemy.angle += game.speed * deltaTime * game.ennemiesSpeed;
            if (ennemy.angle > Math.PI * 2) ennemy.angle -= Math.PI * 2;

            ennemy.mesh.position.y = -game.seaRadius + Math.sin(ennemy.angle) * ennemy.dist;
            ennemy.mesh.position.x = Math.cos(ennemy.angle) * ennemy.dist;
            // 随便带点自转动画防死板
            ennemy.mesh.rotation.z += Math.random() * 0.1;
            ennemy.mesh.rotation.y += Math.random() * 0.1;

            // ===== 核心碰撞检测逻辑 =====
            // 取当前敌机位置和飞机位置坐标做向量减法，然后取长度即得两者世界空间距离
            const diffPos = airplane.mesh.position.clone().sub(ennemy.mesh.position.clone());
            if (diffPos.length() < game.enemyDistanceTolerance) {
                // 如果近在咫尺，判定相撞：
                // 1. 爆裂红色特效粒子
                particlesHolder.spawnParticles(ennemy.mesh.position.clone(), 15, Colors.red, 3);
                // 2. 扣血
                removeEnergy();
                // 3. 将这个倒霉的圆锥踢除网格
                this.mesh.remove(ennemy.mesh);
                this.ennemiesInUse.splice(i, 1);
                i--;
            } else if (ennemy.angle > Math.PI) {
                // 如果已经转出视角（或者被地球踩在了脚底下），为了性能剔除不可见物体
                this.mesh.remove(ennemy.mesh);
                this.ennemiesInUse.splice(i, 1);
                i--;
            }
        }
    }
}

/**
 * 道具金币（或者叫能量药丸）模型，蓝色八面体
 */
class Coin {
    constructor() {
        const geom = new THREE.TetrahedronGeometry(5, 0);
        const mat = new THREE.MeshPhongMaterial({
            color: 0x009999,
            transparent: true,
            opacity: 0.9,
            flatShading: true,
        });
        this.mesh = new THREE.Mesh(geom, mat);
        this.mesh.castShadow = true;
        this.angle = 0;
        this.dist = 0;
    }
}

/**
 * 收集物品（金币/药丸）集合生成与管理处理类
 * 与 Ennemies 逻辑极为相似
 */
class CoinsHolder {
    constructor() {
        this.mesh = new THREE.Group();
        this.coinsInUse = [];
    }

    spawnCoins() {
        // 创建一组波浪形式排布的金币簇
        const nCoins = 1 + Math.floor(Math.random() * 10);
        const d = game.seaRadius + game.planeDefaultHeight + (-1 + Math.random() * 2) * (game.planeAmpHeight - 20);
        const amplitude = 10 + Math.round(Math.random() * 10);
        for (let i = 0; i < nCoins; i++) {
            const coin = new Coin();
            this.coinsInUse.push(coin);
            coin.angle = -(i * 0.02);
            coin.dist = d + Math.cos(i * 0.5) * amplitude; // Math.cos 给一条随性的小波浪轨道
            coin.mesh.position.y = -game.seaRadius + Math.sin(coin.angle) * coin.dist;
            coin.mesh.position.x = Math.cos(coin.angle) * coin.dist;
            this.mesh.add(coin.mesh);
        }
    }

    rotateCoins() {
        for (let i = 0; i < this.coinsInUse.length; i++) {
            const coin = this.coinsInUse[i];
            coin.angle += game.speed * deltaTime * game.coinsSpeed;
            if (coin.angle > Math.PI * 2) coin.angle -= Math.PI * 2;

            coin.mesh.position.y = -game.seaRadius + Math.sin(coin.angle) * coin.dist;
            coin.mesh.position.x = Math.cos(coin.angle) * coin.dist;
            coin.mesh.rotation.z += Math.random() * 0.1;
            coin.mesh.rotation.y += Math.random() * 0.1;

            const diffPos = airplane.mesh.position.clone().sub(coin.mesh.position.clone());
            if (diffPos.length() < game.coinDistanceTolerance) {
                // 如果距离极度靠近视为已触碰吃下
                particlesHolder.spawnParticles(coin.mesh.position.clone(), 5, 0x009999, 0.8);
                addEnergy();
                this.mesh.remove(coin.mesh);
                this.coinsInUse.splice(i, 1);
                i--;
            } else if (coin.angle > Math.PI) {
                // 出界回收
                this.mesh.remove(coin.mesh);
                this.coinsInUse.splice(i, 1);
                i--;
            }
        }
    }
}

/**
 * 单颗特效发散粒子对象
 */
class Particle {
    constructor() {
        const geom = new THREE.TetrahedronGeometry(3, 0);
        const mat = new THREE.MeshPhongMaterial({ color: 0x009999, flatShading: true });
        this.mesh = new THREE.Mesh(geom, mat);
    }

    // 接收从爆点触发四散飘落目标的生命周期与目的地计算
    explode(pos, color, scale) {
        this.mesh.material.color = new THREE.Color(color);
        this.mesh.material.needsUpdate = true;
        this.mesh.scale.set(scale, scale, scale);
        // 让粒子在一个中心四周随机乱跑
        const targetX = pos.x + (-1 + Math.random() * 2) * 50;
        const targetY = pos.y + (-1 + Math.random() * 2) * 50;
        const speed = 0.6 + Math.random() * 0.2;
        this.targetPos = new THREE.Vector3(targetX, targetY, pos.z);
        this.progress = 0; // 动画进度 0 -> 1.0 (销毁)
        this.speed = speed * 0.05;
    }
}

/**
 * 粒子爆破容器，提供碰撞反馈时的碎屑飞舞效果管理
 */
class ParticlesHolder {
    constructor() {
        this.mesh = new THREE.Group();
        this.particlesInUse = [];
    }

    // 在指定坐标位置喷洒指定色块等屑状粒子群
    spawnParticles(pos, density, color, scale) {
        for (let i = 0; i < density; i++) {
            const particle = new Particle();
            particle.mesh.position.copy(pos);
            particle.explode(pos, color, scale);
            this.mesh.add(particle.mesh);
            this.particlesInUse.push(particle);
        }
    }

    // 在系统内部更新粒子的趋向移动及体积缩小衰减
    updateParticles() {
        for (let i = 0; i < this.particlesInUse.length; i++) {
            const p = this.particlesInUse[i];
            p.progress += p.speed;

            if (p.progress >= 1) {
                // 超过生命进度将其消亡
                this.mesh.remove(p.mesh);
                this.particlesInUse.splice(i, 1);
                i--;
            } else {
                // 以逼近插值计算飞向爆炸残渣预定的边缘目标点
                p.mesh.position.x += (p.targetPos.x - p.mesh.position.x) * 0.1;
                p.mesh.position.y += (p.targetPos.y - p.mesh.position.y) * 0.1;
                // 同时自身缓慢变小，像是溶解消隐了
                p.mesh.scale.set(
                    Math.max(0, p.mesh.scale.x - 0.1),
                    Math.max(0, p.mesh.scale.y - 0.1),
                    Math.max(0, p.mesh.scale.z - 0.1)
                );
            }
        }
    }
}

/**
 * 最核心的主角——红色的帅气双翼机模型搭建
 */
class AirPlane {
    constructor() {
        this.mesh = new THREE.Group();

        // ======= 舱壳部分 =======
        const geomCockpit = new THREE.BoxGeometry(80, 50, 50, 1, 1, 1);
        const positions = geomCockpit.attributes.position;
        // 把船舱变成前端宽窄、后端收紧的效果：针对顶端特定向背侧的顶点做纵深削减和高度缩短
        for (let i = 0; i < positions.count; i++) {
            if (positions.getX(i) < 0) {
                positions.setY(i, positions.getY(i) === 25 ? 15 : 5);
                positions.setZ(i, positions.getZ(i) === 25 ? 5 : -5);
            }
        }
        geomCockpit.computeVertexNormals();

        const matCockpit = new THREE.MeshPhongMaterial({ color: Colors.red, flatShading: true });
        const cockpit = new THREE.Mesh(geomCockpit, matCockpit);
        cockpit.castShadow = true;
        cockpit.receiveShadow = true;
        this.mesh.add(cockpit);

        // ======= 发动机（白色圆柱头结构） =======
        const geomEngine = new THREE.BoxGeometry(20, 50, 50, 1, 1, 1);
        const matEngine = new THREE.MeshPhongMaterial({ color: Colors.white, flatShading: true });
        const engine = new THREE.Mesh(geomEngine, matEngine);
        engine.position.x = 40;
        engine.castShadow = true;
        engine.receiveShadow = true;
        this.mesh.add(engine);

        // ======= 尾翼 =======
        const geomTailPlane = new THREE.BoxGeometry(15, 20, 5, 1, 1, 1);
        const matTailPlane = new THREE.MeshPhongMaterial({ color: Colors.red, flatShading: true });
        const tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane);
        tailPlane.position.set(-35, 25, 0);
        tailPlane.castShadow = true;
        tailPlane.receiveShadow = true;
        this.mesh.add(tailPlane);

        // ======= 侧主大翼 =======
        const geomSideWing = new THREE.BoxGeometry(40, 8, 150, 1, 1, 1);
        const matSideWing = new THREE.MeshPhongMaterial({ color: Colors.red, flatShading: true });
        const sideWing = new THREE.Mesh(geomSideWing, matSideWing);
        sideWing.castShadow = true;
        sideWing.receiveShadow = true;
        this.mesh.add(sideWing);

        // ======= 螺旋桨总成 =======
        const geomPropeller = new THREE.BoxGeometry(20, 10, 10, 1, 1, 1);
        const matPropeller = new THREE.MeshPhongMaterial({ color: Colors.brown, flatShading: true });
        this.propeller = new THREE.Mesh(geomPropeller, matPropeller);
        this.propeller.castShadow = true;
        this.propeller.receiveShadow = true;

        const geomBlade = new THREE.BoxGeometry(1, 100, 20, 1, 1, 1);
        const matBlade = new THREE.MeshPhongMaterial({ color: Colors.brownDark, flatShading: true });
        const blade = new THREE.Mesh(geomBlade, matBlade);
        blade.position.set(8, 0, 0);
        blade.castShadow = true;
        blade.receiveShadow = true;

        // 桨叶塞入浆轴中组合成桨整体结构，并把总成放在引擎最前面
        this.propeller.add(blade);
        this.propeller.position.set(50, 0, 0);
        this.mesh.add(this.propeller);

        // ======= 加入飞行员小人 =======
        this.pilot = new Pilot();
        this.pilot.mesh.position.set(-10, 27, 0);
        this.mesh.add(this.pilot.mesh);
    }
}

/**
 * 实例化装配红色小飞机
 */
function createPlane() {
    airplane = new AirPlane();
    airplane.mesh.scale.set(0.25, 0.25, 0.25);
    airplane.mesh.position.y = 100;
    scene.add(airplane.mesh);
}

// 追踪鼠标的位置信息
let mousePos = { x: 0, y: 0 };

/**
 * 捕获鼠标光标移入位置事件
 */
function handleMouseMove(event) {
    // 将普通屏幕坐标换算映射为基于中心的标准化归一坐标池 [-1, 1] 区间
    const tx = -1 + (event.clientX / WIDTH) * 2;
    const ty = 1 - (event.clientY / HEIGHT) * 2;
    mousePos = { x: tx, y: ty };
}

/**
 * 协助映射不同区间比值的简易插值重映射换算函数
 */
function normalize(v, vmin, vmax, tmin, tmax) {
    const nv = Math.max(Math.min(v, vmax), vmin);
    const dv = vmax - vmin;
    const pc = (nv - vmin) / dv;
    const dt = tmax - tmin;
    return tmin + (pc * dt);
}

/**
 * 使红翼飞机响应并朝向鼠标悬停的追踪位置进行平滑的阻尼位移与翻背姿势
 */
function updatePlane() {
    // 先把标准化 [-1, 1] 的光标转换回三维立体世界的允许范围内 (高度 25 ~ 175, 进深/左右 -100 ~ 100)
    const targetY = normalize(mousePos.y, -0.75, 0.75, 25, 175);
    const targetX = normalize(mousePos.x, -0.75, 0.75, -100, 100);

    // 更新位置时采用与距离比例乘 0.1 缓动追踪（而非生硬贴住瞬移）
    airplane.mesh.position.y += (targetY - airplane.mesh.position.y) * 0.1;
    airplane.mesh.position.x += (targetX - airplane.mesh.position.x) * 0.1;

    // 当向上起飞或侧身时，倾斜其车身和翅膀的角度产生气动姿态拟真感
    airplane.mesh.rotation.z = (targetY - airplane.mesh.position.y) * 0.0128;
    airplane.mesh.rotation.x = (airplane.mesh.position.y - targetY) * 0.0064;

    // 不论什么情况，飞在天上引擎桨叶都要不慌不忙转动不能停
    airplane.propeller.rotation.x += 0.1;
}

/**
 * RequestAnimationFrame 引擎的全局生命周期心跳函数（主渲染与逻辑刷新更新帧入口）
 */
function loop() {
    // 捕获真实耗时的时间间隔
    newTime = new Date().getTime();
    deltaTime = newTime - oldTime;
    oldTime = newTime;

    if (game.status === "playing") {
        // 更新总体基础速度设定
        game.speed = Math.max(game.speed, game.baseSpeed);

        // 飞行记录里程和难度增加考核刷新
        updateDistance();

        // 持续微调平滑提升实际的基础游戏速度
        game.baseSpeed += (game.targetBaseSpeed - game.baseSpeed) * deltaTime * 0.02;
        game.speed += (game.targetBaseSpeed - game.speed) * deltaTime * 0.02;

        // 【环境流转】让大海绕圆旋转带动世界飞行的假象：因为飞机X主轴不动，只能地球轮转
        sea.mesh.rotation.z += game.speed * deltaTime;
        if (sea.mesh.rotation.z > 2 * Math.PI) sea.mesh.rotation.z -= 2 * Math.PI;

        // 【背景流转】天空中飘零零散散的云彩层
        sky.mesh.rotation.z += game.speed * deltaTime * 0.7; // 转慢点

        // 一旦跨越指定距离即触发生成新批敌方和回血药丸
        if (Math.floor(game.distance) % game.distanceForCoinsSpawn === 0 && Math.floor(game.distance) > game.coinLastSpawn) {
            game.coinLastSpawn = Math.floor(game.distance);
            coinsHolder.spawnCoins();
        }

        if (Math.floor(game.distance) % game.distanceForEnnemiesSpawn === 0 && Math.floor(game.distance) > game.ennemyLastSpawn) {
            game.ennemyLastSpawn = Math.floor(game.distance);
            ennemiesHolder.spawnEnnemies();
        }

        // 通知两个控制器旋转这些道具，并在函数当中检查他们有没有互相撞破头皮
        coinsHolder.rotateCoins();
        ennemiesHolder.rotateEnnemies();

        // 最后别忘拉住这架追着你光标跑的小飞机
        updatePlane();
    } else if (game.status === "gameover") {
        // ========= GameOver 悲惨收场演出阶段 =========
        game.speed *= 0.99; // 各物体飞掠速度停摆
        // 飞机像被重击或者失去悬停控制一般直接栽跟头，失速并且直线滚落海底深渊
        airplane.mesh.rotation.z += (-Math.PI / 2 - airplane.mesh.rotation.z) * 0.0002 * deltaTime;
        airplane.mesh.rotation.x += 0.0003 * deltaTime;
        airplane.mesh.position.y -= 0.1 * deltaTime;

        // 即使失事坠落，地球(海面)惯性运转还要保持缓缓流逝
        sea.mesh.rotation.z += game.speed * deltaTime;
    }

    // 这些特效装饰物无论玩家生死都要坚强刷新，保持最后体面动感：
    sea.moveWaves();         // 呼啸的海面浪花形变不停
    airplane.pilot.updateHairs(); // 就算挂了只要有风头可乱
    particlesHolder.updateParticles(); // 刚撞出来没跑完的火花给个余音完结它罢！

    // 正式执行 3D 大象印画，推送到屏幕 Canvas 里！
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
}

/**
 * 系统入口与全局统筹装载
 */
function init() {
    // 捕获对应呈现游戏交互数据的几个前端骨架元素
    fieldDistance = document.getElementById("distValue");
    fieldEnergy = document.getElementById("energyValue");
    energyBar = document.getElementById("energyBar");
    fieldLevel = document.getElementById("levelValue");
    fieldProgress = document.getElementById("levelCircleStroke");
    replayMessage = document.getElementById("replayMessage");
    instructionsMessage = document.getElementById("instructions");

    // 数据充要重置重置
    resetGame();

    // 建立 3D 组件环境
    createScene();
    createLights();

    // 放入各大活着的元素网格大图并赋予各自逻辑控制器
    createPlane();
    createSea();
    createSky();

    ennemiesHolder = new EnnemiesHolder();
    scene.add(ennemiesHolder.mesh);
    coinsHolder = new CoinsHolder();
    scene.add(coinsHolder.mesh);
    particlesHolder = new ParticlesHolder();
    scene.add(particlesHolder.mesh);

    // 全局绑定交互捕获行为感知
    document.addEventListener('mousemove', handleMouseMove, false);

    // 提供 Game Over 下点按浏览器随意区域的重开大局机会
    document.addEventListener('mousedown', function () {
        if (game.status === "gameover") {
            resetGame(); // 满血复生清空死人履历

            // 老伙计小红飞机重新摆定在天空中
            airplane.mesh.position.y = 100;
            airplane.mesh.position.x = 0;
            airplane.mesh.rotation.z = 0;
            airplane.mesh.rotation.x = 0;

            // 提示界面文字交替
            replayMessage.style.display = 'none';
            instructionsMessage.style.display = 'block';
        }
    }, false);

    // 放飞机起飞！
    loop();
}

// 文档准备好那一刻接管并启动一切
window.addEventListener('load', init, false);
