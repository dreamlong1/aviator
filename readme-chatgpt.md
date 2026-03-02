# TheAviatorModern 项目文档

## 1. 项目概述

`TheAviatorModern` 是一个基于 `Three.js` 的 3D 飞行躲避类网页小游戏，使用 `Vite` 进行本地开发与构建。  
玩家通过鼠标控制飞机移动，目标是在飞行过程中尽量避开红色障碍物并收集蓝色能量道具，延长生存时间并提升分数。

## 2. 技术栈

- 前端构建：`Vite`
- 3D 渲染：`Three.js`
- 样式：原生 `CSS`
- 语言：`JavaScript (ES Module)`

## 3. 本地运行

### 环境要求

- 安装 Node.js（建议使用当前 LTS 版本）
- 安装 npm

### 安装依赖

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

启动后在浏览器中打开终端输出的本地地址（默认通常是 `http://localhost:5173`）。

## 4. 打包与预览

### 构建生产包

```bash
npm run build
```

构建产物会输出到 `dist/` 目录。

### 本地预览生产包

```bash
npm run preview
```

## 5. 玩法说明

- 鼠标移动：控制飞机在屏幕中上下左右平滑飞行。
- 蓝色道具：拾取后恢复能量。
- 红色障碍：碰撞后损失大量能量。
- 能量为 0：游戏结束，点击鼠标可重新开始。
- 距离增长后会自动升级，难度逐步提高。

## 6. 核心机制说明

- 使用 `requestAnimationFrame` 驱动主循环。
- 通过 `deltaTime` 统一不同设备帧率下的运动速度。
- 海洋与天空采用旋转/顶点扰动营造“持续前进”的飞行感。
- 敌人与道具采用批量生成与回收逻辑，降低无效对象堆积。
- 通过向量距离判断碰撞（飞机与道具/障碍物）。

## 7. 目录结构（关键文件）

```text
TheAviatorModern/
├─ index.html           # 页面入口与 HUD UI 结构
├─ main.js              # 游戏主逻辑（场景、模型、碰撞、循环、交互）
├─ style.css            # 游戏界面与 HUD 样式
├─ package.json         # 脚本与依赖
├─ dist/                # 构建输出目录
└─ src/
   ├─ main.js           # Vite 默认模板文件（当前未作为主入口）
   └─ style.css         # Vite 默认模板样式（当前未作为主样式）
```

## 8. 当前脚本说明

`package.json` 中可用脚本：

- `npm run dev`：启动开发服务器
- `npm run build`：构建生产版本
- `npm run preview`：预览构建结果

## 9. 可继续优化方向

- 增加键盘或触摸控制（移动端适配）。
- 加入音效与背景音乐。
- 增加暂停、最高分存档、难度模式等系统。
- 拆分 `main.js`（模型、系统、UI、配置）以提高可维护性。

