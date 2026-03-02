(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ha="183",Nl=0,Va=1,Fl=2,dr=1,Ol=2,Ii=3,Un=0,Dt=1,_n=2,vn=0,mi=1,Ga=2,Ha=3,ka=4,Bl=5,Wn=100,zl=101,Vl=102,Gl=103,Hl=104,kl=200,Wl=201,Xl=202,ql=203,ps=204,ms=205,Yl=206,Kl=207,Zl=208,$l=209,jl=210,Jl=211,Ql=212,ec=213,tc=214,gs=0,_s=1,xs=2,_i=3,vs=4,Ms=5,Ss=6,Es=7,br=0,nc=1,ic=2,sn=0,Ko=1,Zo=2,$o=3,jo=4,Jo=5,Qo=6,el=7,tl=300,Jn=301,xi=302,Lr=303,Ir=304,Ar=306,ys=1e3,xn=1001,Ts=1002,Mt=1003,rc=1004,Xi=1005,bt=1006,Ur=1007,Yn=1008,Ft=1009,nl=1010,il=1011,Ni=1012,ua=1013,ln=1014,nn=1015,Sn=1016,fa=1017,da=1018,Fi=1020,rl=35902,sl=35899,al=1021,ol=1022,Zt=1023,En=1026,Kn=1027,ll=1028,pa=1029,vi=1030,ma=1031,ga=1033,pr=33776,mr=33777,gr=33778,_r=33779,bs=35840,As=35841,ws=35842,Rs=35843,Cs=36196,Ps=37492,Ds=37496,Ls=37488,Is=37489,Us=37490,Ns=37491,Fs=37808,Os=37809,Bs=37810,zs=37811,Vs=37812,Gs=37813,Hs=37814,ks=37815,Ws=37816,Xs=37817,qs=37818,Ys=37819,Ks=37820,Zs=37821,$s=36492,js=36494,Js=36495,Qs=36283,ea=36284,ta=36285,na=36286,sc=3200,_a=0,ac=1,Dn="",Nt="srgb",Mi="srgb-linear",Mr="linear",Ze="srgb",ti=7680,Wa=519,oc=512,lc=513,cc=514,xa=515,hc=516,uc=517,va=518,fc=519,Xa=35044,qa="300 es",rn=2e3,Oi=2001;function dc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pc(){const i=Sr("canvas");return i.style.display="block",i}const Ya={};function Ka(...i){const e="THREE."+i.shift();console.log(e,...i)}function cl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=cl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=cl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Er(...i){const e=i.join(" ");e in Ya||(Ya[e]=!0,Pe(...i))}function mc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const gc={[gs]:_s,[xs]:Ss,[vs]:Es,[_i]:Ms,[_s]:gs,[Ss]:xs,[Es]:vs,[Ms]:_i};class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nr=Math.PI/180,ia=180/Math.PI;function Vi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function _c(i,e){return(i%e+e)%e}function Fr(i,e,t){return(1-t)*i+t*e}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],f=n[r+2],p=n[r+3],h=s[a+0],g=s[a+1],x=s[a+2],T=s[a+3];if(p!==T||c!==h||l!==g||f!==x){let d=c*h+l*g+f*x+p*T;d<0&&(h=-h,g=-g,x=-x,T=-T,d=-d);let u=1-o;if(d<.9995){const M=Math.acos(d),y=Math.sin(M);u=Math.sin(u*M)/y,o=Math.sin(o*M)/y,c=c*u+h*o,l=l*u+g*o,f=f*u+x*o,p=p*u+T*o}else{c=c*u+h*o,l=l*u+g*o,f=f*u+x*o,p=p*u+T*o;const M=1/Math.sqrt(c*c+l*l+f*f+p*p);c*=M,l*=M,f*=M,p*=M}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],f=n[r+3],p=s[a],h=s[a+1],g=s[a+2],x=s[a+3];return e[t]=o*x+f*p+c*g-l*h,e[t+1]=c*x+f*h+l*p-o*g,e[t+2]=l*x+f*g+o*h-c*p,e[t+3]=f*x-o*p-c*h-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(r/2),p=o(s/2),h=c(n/2),g=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=h*f*p+l*g*x,this._y=l*g*p-h*f*x,this._z=l*f*x+h*g*p,this._w=l*f*p-h*g*x;break;case"YXZ":this._x=h*f*p+l*g*x,this._y=l*g*p-h*f*x,this._z=l*f*x-h*g*p,this._w=l*f*p+h*g*x;break;case"ZXY":this._x=h*f*p-l*g*x,this._y=l*g*p+h*f*x,this._z=l*f*x+h*g*p,this._w=l*f*p-h*g*x;break;case"ZYX":this._x=h*f*p-l*g*x,this._y=l*g*p+h*f*x,this._z=l*f*x-h*g*p,this._w=l*f*p+h*g*x;break;case"YZX":this._x=h*f*p+l*g*x,this._y=l*g*p+h*f*x,this._z=l*f*x-h*g*p,this._w=l*f*p-h*g*x;break;case"XZY":this._x=h*f*p-l*g*x,this._y=l*g*p-h*f*x,this._z=l*f*x+h*g*p,this._w=l*f*p+h*g*x;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],p=t[10],h=n+o+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(n>o&&n>p){const g=2*Math.sqrt(1+n-o-p);this._w=(f-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>p){const g=2*Math.sqrt(1+o-n-p);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+p-n-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-n*l,this._z=s*f+a*l+n*c-r*o,this._w=a*f-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),f=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+c*l+a*p-o*f,this.y=n+c*f+o*l-s*p,this.z=r+c*p+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Or.copy(this).projectOnVector(e),this.sub(Or)}reflect(e){return this.sub(Or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new N,Za=new yi;class Ie{constructor(e,t,n,r,s,a,o,c,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],p=n[7],h=n[2],g=n[5],x=n[8],T=r[0],d=r[3],u=r[6],M=r[1],y=r[4],E=r[7],R=r[2],A=r[5],C=r[8];return s[0]=a*T+o*M+c*R,s[3]=a*d+o*y+c*A,s[6]=a*u+o*E+c*C,s[1]=l*T+f*M+p*R,s[4]=l*d+f*y+p*A,s[7]=l*u+f*E+p*C,s[2]=h*T+g*M+x*R,s[5]=h*d+g*y+x*A,s[8]=h*u+g*E+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*s*f+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],p=f*a-o*l,h=o*c-f*s,g=l*s-a*c,x=t*p+n*h+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/x;return e[0]=p*T,e[1]=(r*l-f*n)*T,e[2]=(o*n-r*a)*T,e[3]=h*T,e[4]=(f*t-r*c)*T,e[5]=(r*s-o*t)*T,e[6]=g*T,e[7]=(n*c-l*t)*T,e[8]=(a*t-n*s)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Br.makeScale(e,t)),this}rotate(e){return this.premultiply(Br.makeRotation(-e)),this}translate(e,t){return this.premultiply(Br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Br=new Ie,$a=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ja=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xc(){const i={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ze&&(r.r=Mn(r.r),r.g=Mn(r.g),r.b=Mn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dn?Mr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mi]:{primaries:e,whitePoint:n,transfer:Mr,toXYZ:$a,fromXYZ:ja,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:$a,fromXYZ:ja,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const ke=xc();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class vc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ni===void 0&&(ni=Sr("canvas")),ni.width=e.width,ni.height=e.height;const r=ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mn(t[n]/255)*255):t[n]=Mn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mc=0;class Ma{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zr(r[a].image)):s.push(zr(r[a]))}else s=zr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Sc=0;const Vr=new N;class wt extends Ei{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=xn,r=xn,s=bt,a=Yn,o=Zt,c=Ft,l=wt.DEFAULT_ANISOTROPY,f=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=Vi(),this.name="",this.source=new Ma(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vr).x}get height(){return this.source.getSize(Vr).y}get depth(){return this.source.getSize(Vr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=tl;wt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],f=c[4],p=c[8],h=c[1],g=c[5],x=c[9],T=c[2],d=c[6],u=c[10];if(Math.abs(f-h)<.01&&Math.abs(p-T)<.01&&Math.abs(x-d)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+T)<.1&&Math.abs(x+d)<.1&&Math.abs(l+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,E=(g+1)/2,R=(u+1)/2,A=(f+h)/4,C=(p+T)/4,_=(x+d)/4;return y>E&&y>R?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=A/n,s=C/n):E>R?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=A/r,s=_/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=C/s,r=_/s),this.set(n,r,s,t),this}let M=Math.sqrt((d-x)*(d-x)+(p-T)*(p-T)+(h-f)*(h-f));return Math.abs(M)<.001&&(M=1),this.x=(d-x)/M,this.y=(p-T)/M,this.z=(h-f)/M,this.w=Math.acos((l+g+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ec extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new wt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ma(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class an extends Ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hl extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yc extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rt{constructor(e,t,n,r,s,a,o,c,l,f,p,h,g,x,T,d){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,f,p,h,g,x,T,d)}set(e,t,n,r,s,a,o,c,l,f,p,h,g,x,T,d){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=f,u[10]=p,u[14]=h,u[3]=g,u[7]=x,u[11]=T,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/ii.setFromMatrixColumn(e,0).length(),s=1/ii.setFromMatrixColumn(e,1).length(),a=1/ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*f,g=a*p,x=o*f,T=o*p;t[0]=c*f,t[4]=-c*p,t[8]=l,t[1]=g+x*l,t[5]=h-T*l,t[9]=-o*c,t[2]=T-h*l,t[6]=x+g*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*f,g=c*p,x=l*f,T=l*p;t[0]=h+T*o,t[4]=x*o-g,t[8]=a*l,t[1]=a*p,t[5]=a*f,t[9]=-o,t[2]=g*o-x,t[6]=T+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*f,g=c*p,x=l*f,T=l*p;t[0]=h-T*o,t[4]=-a*p,t[8]=x+g*o,t[1]=g+x*o,t[5]=a*f,t[9]=T-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*f,g=a*p,x=o*f,T=o*p;t[0]=c*f,t[4]=x*l-g,t[8]=h*l+T,t[1]=c*p,t[5]=T*l+h,t[9]=g*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,g=a*l,x=o*c,T=o*l;t[0]=c*f,t[4]=T-h*p,t[8]=x*p+g,t[1]=p,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=g*p+x,t[10]=h-T*p}else if(e.order==="XZY"){const h=a*c,g=a*l,x=o*c,T=o*l;t[0]=c*f,t[4]=-p,t[8]=l*f,t[1]=h*p+T,t[5]=a*f,t[9]=g*p-x,t[2]=x*p-g,t[6]=o*f,t[10]=T*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tc,e,bc)}lookAt(e,t,n){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),bn.crossVectors(n,It),bn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),bn.crossVectors(n,It)),bn.normalize(),qi.crossVectors(It,bn),r[0]=bn.x,r[4]=qi.x,r[8]=It.x,r[1]=bn.y,r[5]=qi.y,r[9]=It.y,r[2]=bn.z,r[6]=qi.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],p=n[5],h=n[9],g=n[13],x=n[2],T=n[6],d=n[10],u=n[14],M=n[3],y=n[7],E=n[11],R=n[15],A=r[0],C=r[4],_=r[8],S=r[12],G=r[1],w=r[5],U=r[9],V=r[13],W=r[2],B=r[6],H=r[10],F=r[14],Q=r[3],$=r[7],he=r[11],me=r[15];return s[0]=a*A+o*G+c*W+l*Q,s[4]=a*C+o*w+c*B+l*$,s[8]=a*_+o*U+c*H+l*he,s[12]=a*S+o*V+c*F+l*me,s[1]=f*A+p*G+h*W+g*Q,s[5]=f*C+p*w+h*B+g*$,s[9]=f*_+p*U+h*H+g*he,s[13]=f*S+p*V+h*F+g*me,s[2]=x*A+T*G+d*W+u*Q,s[6]=x*C+T*w+d*B+u*$,s[10]=x*_+T*U+d*H+u*he,s[14]=x*S+T*V+d*F+u*me,s[3]=M*A+y*G+E*W+R*Q,s[7]=M*C+y*w+E*B+R*$,s[11]=M*_+y*U+E*H+R*he,s[15]=M*S+y*V+E*F+R*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],p=e[6],h=e[10],g=e[14],x=e[3],T=e[7],d=e[11],u=e[15],M=c*g-l*h,y=o*g-l*p,E=o*h-c*p,R=a*g-l*f,A=a*h-c*f,C=a*p-o*f;return t*(T*M-d*y+u*E)-n*(x*M-d*R+u*A)+r*(x*y-T*R+u*C)-s*(x*E-T*A+d*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],p=e[9],h=e[10],g=e[11],x=e[12],T=e[13],d=e[14],u=e[15],M=t*o-n*a,y=t*c-r*a,E=t*l-s*a,R=n*c-r*o,A=n*l-s*o,C=r*l-s*c,_=f*T-p*x,S=f*d-h*x,G=f*u-g*x,w=p*d-h*T,U=p*u-g*T,V=h*u-g*d,W=M*V-y*U+E*w+R*G-A*S+C*_;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/W;return e[0]=(o*V-c*U+l*w)*B,e[1]=(r*U-n*V-s*w)*B,e[2]=(T*C-d*A+u*R)*B,e[3]=(h*A-p*C-g*R)*B,e[4]=(c*G-a*V-l*S)*B,e[5]=(t*V-r*G+s*S)*B,e[6]=(d*E-x*C-u*y)*B,e[7]=(f*C-h*E+g*y)*B,e[8]=(a*U-o*G+l*_)*B,e[9]=(n*G-t*U-s*_)*B,e[10]=(x*A-T*E+u*M)*B,e[11]=(p*E-f*A-g*M)*B,e[12]=(o*S-a*w-c*_)*B,e[13]=(t*w-n*S+r*_)*B,e[14]=(T*y-x*R-d*M)*B,e[15]=(f*R-p*y+h*M)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+n,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,p=o+o,h=s*l,g=s*f,x=s*p,T=a*f,d=a*p,u=o*p,M=c*l,y=c*f,E=c*p,R=n.x,A=n.y,C=n.z;return r[0]=(1-(T+u))*R,r[1]=(g+E)*R,r[2]=(x-y)*R,r[3]=0,r[4]=(g-E)*A,r[5]=(1-(h+u))*A,r[6]=(d+M)*A,r[7]=0,r[8]=(x+y)*C,r[9]=(d-M)*C,r[10]=(1-(h+T))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ii.set(r[0],r[1],r[2]).length();const o=ii.set(r[4],r[5],r[6]).length(),c=ii.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Xt.copy(this);const l=1/a,f=1/o,p=1/c;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=f,Xt.elements[5]*=f,Xt.elements[6]*=f,Xt.elements[8]*=p,Xt.elements[9]*=p,Xt.elements[10]*=p,t.setFromRotationMatrix(Xt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=rn,c=!1){const l=this.elements,f=2*s/(t-e),p=2*s/(n-r),h=(t+e)/(t-e),g=(n+r)/(n-r);let x,T;if(c)x=s/(a-s),T=a*s/(a-s);else if(o===rn)x=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(o===Oi)x=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=rn,c=!1){const l=this.elements,f=2/(t-e),p=2/(n-r),h=-(t+e)/(t-e),g=-(n+r)/(n-r);let x,T;if(c)x=1/(a-s),T=a/(a-s);else if(o===rn)x=-2/(a-s),T=-(a+s)/(a-s);else if(o===Oi)x=-1/(a-s),T=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=x,l[14]=T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ii=new N,Xt=new rt,Tc=new N(0,0,0),bc=new N(1,1,1),bn=new N,qi=new N,It=new N,Ja=new rt,Qa=new yi;class $t{constructor(e=0,t=0,n=0,r=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],p=r[2],h=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ja.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ja,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qa.setFromEuler(this),this.setFromQuaternion(Qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ac=0;const eo=new N,ri=new yi,fn=new rt,Yi=new N,wi=new N,wc=new N,Rc=new yi,to=new N(1,0,0),no=new N(0,1,0),io=new N(0,0,1),ro={type:"added"},Cc={type:"removed"},si={type:"childadded",child:null},Gr={type:"childremoved",child:null};class St extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new N,t=new $t,n=new yi,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ie}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(to,e)}rotateY(e){return this.rotateOnAxis(no,e)}rotateZ(e){return this.rotateOnAxis(io,e)}translateOnAxis(e,t){return eo.copy(e).applyQuaternion(this.quaternion),this.position.add(eo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(to,e)}translateY(e){return this.translateOnAxis(no,e)}translateZ(e){return this.translateOnAxis(io,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yi.copy(e):Yi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(wi,Yi,this.up):fn.lookAt(Yi,wi,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),ri.setFromRotationMatrix(fn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ro),si.child=e,this.dispatchEvent(si),si.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cc),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ro),si.child=e,this.dispatchEvent(si),si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,wc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Rc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),p=a(e.shapes),h=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}St.DEFAULT_UP=new N(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ot extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pc={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const T of e.hand.values()){const d=t.getJointPose(T,n),u=this._getHandJoint(l,T);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const f=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=f.position.distanceTo(p.position),g=.02,x=.005;l.inputState.pinching&&h>g+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=g-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function kr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ke.workingColorSpace){if(e=_c(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=kr(a,s,e+1/3),this.g=kr(a,s,e),this.b=kr(a,s,e-1/3)}return ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=fl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ke.workingToColorSpace(Tt.copy(this),e),Math.round(Ge(Tt.r*255,0,255))*65536+Math.round(Ge(Tt.g*255,0,255))*256+Math.round(Ge(Tt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(Tt.copy(this),t);const n=Tt.r,r=Tt.g,s=Tt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=f<=.5?p/(a+o):p/(2-a-o),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Nt){ke.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,r=Tt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(Ki);const n=Fr(An.h,Ki.h,t),r=Fr(An.s,Ki.s,t),s=Fr(An.l,Ki.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new ze;ze.NAMES=fl;class Sa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new Sa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dc extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qt=new N,dn=new N,Wr=new N,pn=new N,ai=new N,oi=new N,so=new N,Xr=new N,qr=new N,Yr=new N,Kr=new lt,Zr=new lt,$r=new lt;class Kt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qt.subVectors(r,t),dn.subVectors(n,t),Wr.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(dn),c=qt.dot(Wr),l=dn.dot(dn),f=dn.dot(Wr),p=a*l-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,g=(l*c-o*f)*h,x=(a*f-o*c)*h;return s.set(1-g-x,x,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pn.x),c.addScaledVector(a,pn.y),c.addScaledVector(o,pn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Kr.setScalar(0),Zr.setScalar(0),$r.setScalar(0),Kr.fromBufferAttribute(e,t),Zr.fromBufferAttribute(e,n),$r.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kr,s.x),a.addScaledVector(Zr,s.y),a.addScaledVector($r,s.z),a}static isFrontFacing(e,t,n,r){return qt.subVectors(n,t),dn.subVectors(e,t),qt.cross(dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),qt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ai.subVectors(r,n),oi.subVectors(s,n),Xr.subVectors(e,n);const c=ai.dot(Xr),l=oi.dot(Xr);if(c<=0&&l<=0)return t.copy(n);qr.subVectors(e,r);const f=ai.dot(qr),p=oi.dot(qr);if(f>=0&&p<=f)return t.copy(r);const h=c*p-f*l;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(ai,a);Yr.subVectors(e,s);const g=ai.dot(Yr),x=oi.dot(Yr);if(x>=0&&g<=x)return t.copy(s);const T=g*l-c*x;if(T<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(oi,o);const d=f*x-g*p;if(d<=0&&p-f>=0&&g-x>=0)return so.subVectors(s,r),o=(p-f)/(p-f+(g-x)),t.copy(r).addScaledVector(so,o);const u=1/(d+T+h);return a=T*u,o=h*u,t.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(s,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox)),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),$i.subVectors(this.max,Ri),li.subVectors(e.a,Ri),ci.subVectors(e.b,Ri),hi.subVectors(e.c,Ri),wn.subVectors(ci,li),Rn.subVectors(hi,ci),On.subVectors(li,hi);let t=[0,-wn.z,wn.y,0,-Rn.z,Rn.y,0,-On.z,On.y,wn.z,0,-wn.x,Rn.z,0,-Rn.x,On.z,0,-On.x,-wn.y,wn.x,0,-Rn.y,Rn.x,0,-On.y,On.x,0];return!jr(t,li,ci,hi,$i)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,li,ci,hi,$i))?!1:(ji.crossVectors(wn,Rn),t=[ji.x,ji.y,ji.z],jr(t,li,ci,hi,$i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mn=[new N,new N,new N,new N,new N,new N,new N,new N],Yt=new N,Zi=new Gi,li=new N,ci=new N,hi=new N,wn=new N,Rn=new N,On=new N,Ri=new N,$i=new N,ji=new N,Bn=new N;function jr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Bn.fromArray(i,s);const o=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),c=e.dot(Bn),l=t.dot(Bn),f=n.dot(Bn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const ft=new N,Ji=new Ve;let Lc=0;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xa&&(e.usage=this.usage),e}}class dl extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pl extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ic=new Gi,Ci=new N,Jr=new N;class Ea{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ic.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ci,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(Jr)),this.expandByPoint(Ci.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Uc=0;const Bt=new rt,Qr=new St,ui=new N,Ut=new Gi,Pi=new Gi,xt=new N;class jt extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dc(e)?pl:dl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Ut.min,Pi.min),Ut.expandByPoint(xt),xt.addVectors(Ut.max,Pi.max),Ut.expandByPoint(xt)):(Ut.expandByPoint(Pi.min),Ut.expandByPoint(Pi.max))}Ut.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)xt.fromBufferAttribute(o,l),c&&(ui.fromBufferAttribute(e,l),xt.add(ui)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new N,c[_]=new N;const l=new N,f=new N,p=new N,h=new Ve,g=new Ve,x=new Ve,T=new N,d=new N;function u(_,S,G){l.fromBufferAttribute(n,_),f.fromBufferAttribute(n,S),p.fromBufferAttribute(n,G),h.fromBufferAttribute(s,_),g.fromBufferAttribute(s,S),x.fromBufferAttribute(s,G),f.sub(l),p.sub(l),g.sub(h),x.sub(h);const w=1/(g.x*x.y-x.x*g.y);isFinite(w)&&(T.copy(f).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(w),d.copy(p).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(w),o[_].add(T),o[S].add(T),o[G].add(T),c[_].add(d),c[S].add(d),c[G].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,S=M.length;_<S;++_){const G=M[_],w=G.start,U=G.count;for(let V=w,W=w+U;V<W;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new N,E=new N,R=new N,A=new N;function C(_){R.fromBufferAttribute(r,_),A.copy(R);const S=o[_];y.copy(S),y.sub(R.multiplyScalar(R.dot(S))).normalize(),E.crossVectors(A,S);const w=E.dot(c[_])<0?-1:1;a.setXYZW(_,y.x,y.y,y.z,w)}for(let _=0,S=M.length;_<S;++_){const G=M[_],w=G.start,U=G.count;for(let V=w,W=w+U;V<W;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,f=new N,p=new N;if(e)for(let h=0,g=e.count;h<g;h+=3){const x=e.getX(h+0),T=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,T),a.fromBufferAttribute(t,d),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,T),l.fromBufferAttribute(n,d),o.add(f),c.add(f),l.add(f),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,g=t.count;h<g;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,p=o.normalized,h=new l.constructor(c.length*f);let g=0,x=0;for(let T=0,d=c.length;T<d;T++){o.isInterleavedBufferAttribute?g=c[T]*o.data.stride+o.offset:g=c[T]*f;for(let u=0;u<f;u++)h[x++]=l[g++]}return new on(h,f,p)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,p=l.length;f<p;f++){const h=l[f],g=e(h,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let p=0,h=l.length;p<h;p++){const g=l[p];f.push(g.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],p=s[l];for(let h=0,g=p.length;h<g;h++)f.push(p[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Nc=0;class Ti extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=mi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ps,this.blendDst=ms,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ps&&(n.blendSrc=this.blendSrc),this.blendDst!==ms&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gn=new N,es=new N,Qi=new N,Cn=new N,ts=new N,er=new N,ns=new N;class Fc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){es.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(es);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qi),o=Cn.dot(this.direction),c=-Cn.dot(Qi),l=Cn.lengthSq(),f=Math.abs(1-a*a);let p,h,g,x;if(f>0)if(p=a*c-o,h=a*o-c,x=s*f,p>=0)if(h>=-x)if(h<=x){const T=1/f;p*=T,h*=T,g=p*(p+a*h+2*o)+h*(a*p+h+2*c)+l}else h=s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*c)+l;else h=-s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*c)+l;else h<=-x?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-c),s),g=-p*p+h*(h+2*c)+l):h<=x?(p=0,h=Math.min(Math.max(-s,-c),s),g=h*(h+2*c)+l):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-c),s),g=-p*p+h*(h+2*c)+l);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(es).addScaledVector(Qi,h),g}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),r=gn.dot(gn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,r,s){ts.subVectors(t,e),er.subVectors(n,e),ns.crossVectors(ts,er);let a=this.direction.dot(ns),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const c=o*this.direction.dot(er.crossVectors(Cn,er));if(c<0)return null;const l=o*this.direction.dot(ts.cross(Cn));if(l<0||c+l>a)return null;const f=-o*Cn.dot(ns);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ml extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ao=new rt,zn=new Fc,tr=new Ea,oo=new N,nr=new N,ir=new N,rr=new N,is=new N,sr=new N,lo=new N,ar=new N;class Je extends St{constructor(e=new jt,t=new ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){sr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],p=s[c];f!==0&&(is.fromBufferAttribute(p,e),a?sr.addScaledVector(is,f):sr.addScaledVector(is.sub(t),f))}t.add(sr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(tr.containsPoint(zn.origin)===!1&&(zn.intersectSphere(tr,oo)===null||zn.origin.distanceToSquared(oo)>(e.far-e.near)**2))&&(ao.copy(s).invert(),zn.copy(e.ray).applyMatrix4(ao),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,T=h.length;x<T;x++){const d=h[x],u=a[d.materialIndex],M=Math.max(d.start,g.start),y=Math.min(o.count,Math.min(d.start+d.count,g.start+g.count));for(let E=M,R=y;E<R;E+=3){const A=o.getX(E),C=o.getX(E+1),_=o.getX(E+2);r=or(this,u,e,n,l,f,p,A,C,_),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),T=Math.min(o.count,g.start+g.count);for(let d=x,u=T;d<u;d+=3){const M=o.getX(d),y=o.getX(d+1),E=o.getX(d+2);r=or(this,a,e,n,l,f,p,M,y,E),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,T=h.length;x<T;x++){const d=h[x],u=a[d.materialIndex],M=Math.max(d.start,g.start),y=Math.min(c.count,Math.min(d.start+d.count,g.start+g.count));for(let E=M,R=y;E<R;E+=3){const A=E,C=E+1,_=E+2;r=or(this,u,e,n,l,f,p,A,C,_),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),T=Math.min(c.count,g.start+g.count);for(let d=x,u=T;d<u;d+=3){const M=d,y=d+1,E=d+2;r=or(this,a,e,n,l,f,p,M,y,E),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function Oc(i,e,t,n,r,s,a,o){let c;if(e.side===Dt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Un,o),c===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ar);return l<t.near||l>t.far?null:{distance:l,point:ar.clone(),object:i}}function or(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,nr),i.getVertexPosition(c,ir),i.getVertexPosition(l,rr);const f=Oc(i,e,t,n,nr,ir,rr,lo);if(f){const p=new N;Kt.getBarycoord(lo,nr,ir,rr,p),r&&(f.uv=Kt.getInterpolatedAttribute(r,o,c,l,p,new Ve)),s&&(f.uv1=Kt.getInterpolatedAttribute(s,o,c,l,p,new Ve)),a&&(f.normal=Kt.getInterpolatedAttribute(a,o,c,l,p,new N),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new N,materialIndex:0};Kt.getNormal(nr,ir,rr,h.normal),f.face=h,f.barycoord=p}return f}class Bc extends wt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Mt,f=Mt,p,h){super(null,a,o,c,l,f,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rs=new N,zc=new N,Vc=new Ie;class kn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=rs.subVectors(n,t).cross(zc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vc.getNormalMatrix(e),r=this.coplanarPoint(rs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Ea,Gc=new Ve(.5,.5),lr=new N;class ya{constructor(e=new kn,t=new kn,n=new kn,r=new kn,s=new kn,a=new kn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],p=s[5],h=s[6],g=s[7],x=s[8],T=s[9],d=s[10],u=s[11],M=s[12],y=s[13],E=s[14],R=s[15];if(r[0].setComponents(l-a,g-f,u-x,R-M).normalize(),r[1].setComponents(l+a,g+f,u+x,R+M).normalize(),r[2].setComponents(l+o,g+p,u+T,R+y).normalize(),r[3].setComponents(l-o,g-p,u-T,R-y).normalize(),n)r[4].setComponents(c,h,d,E).normalize(),r[5].setComponents(l-c,g-h,u-d,R-E).normalize();else if(r[4].setComponents(l-c,g-h,u-d,R-E).normalize(),t===rn)r[5].setComponents(l+c,g+h,u+d,R+E).normalize();else if(t===Oi)r[5].setComponents(c,h,d,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){Vn.center.set(0,0,0);const t=Gc.distanceTo(e.center);return Vn.radius=.7071067811865476+t,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(lr.x=r.normal.x>0?e.max.x:e.min.x,lr.y=r.normal.y>0?e.max.y:e.min.y,lr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gl extends wt{constructor(e=[],t=Jn,n,r,s,a,o,c,l,f){super(e,t,n,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bi extends wt{constructor(e,t,n=ln,r,s,a,o=Mt,c=Mt,l,f=En,p=1){if(f!==En&&f!==Kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,r,s,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ma(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hc extends Bi{constructor(e,t=ln,n=Jn,r,s,a=Mt,o=Mt,c,l=En){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _l extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dt extends jt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],p=[];let h=0,g=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(p,2));function x(T,d,u,M,y,E,R,A,C,_,S){const G=E/C,w=R/_,U=E/2,V=R/2,W=A/2,B=C+1,H=_+1;let F=0,Q=0;const $=new N;for(let he=0;he<H;he++){const me=he*w-V;for(let fe=0;fe<B;fe++){const Ue=fe*G-U;$[T]=Ue*M,$[d]=me*y,$[u]=W,l.push($.x,$.y,$.z),$[T]=0,$[d]=0,$[u]=A>0?1:-1,f.push($.x,$.y,$.z),p.push(fe/C),p.push(1-he/_),F+=1}}for(let he=0;he<_;he++)for(let me=0;me<C;me++){const fe=h+me+B*he,Ue=h+me+B*(he+1),st=h+(me+1)+B*(he+1),it=h+(me+1)+B*he;c.push(fe,Ue,it),c.push(Ue,st,it),Q+=6}o.addGroup(g,Q,S),g+=Q,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ta extends jt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],h=[],g=[];let x=0;const T=[],d=n/2;let u=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new Rt(p,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(g,2));function M(){const E=new N,R=new N;let A=0;const C=(t-e)/n;for(let _=0;_<=s;_++){const S=[],G=_/s,w=G*(t-e)+e;for(let U=0;U<=r;U++){const V=U/r,W=V*c+o,B=Math.sin(W),H=Math.cos(W);R.x=w*B,R.y=-G*n+d,R.z=w*H,p.push(R.x,R.y,R.z),E.set(B,C,H).normalize(),h.push(E.x,E.y,E.z),g.push(V,1-G),S.push(x++)}T.push(S)}for(let _=0;_<r;_++)for(let S=0;S<s;S++){const G=T[S][_],w=T[S+1][_],U=T[S+1][_+1],V=T[S][_+1];(e>0||S!==0)&&(f.push(G,w,V),A+=3),(t>0||S!==s-1)&&(f.push(w,U,V),A+=3)}l.addGroup(u,A,0),u+=A}function y(E){const R=x,A=new Ve,C=new N;let _=0;const S=E===!0?e:t,G=E===!0?1:-1;for(let U=1;U<=r;U++)p.push(0,d*G,0),h.push(0,G,0),g.push(.5,.5),x++;const w=x;for(let U=0;U<=r;U++){const W=U/r*c+o,B=Math.cos(W),H=Math.sin(W);C.x=S*H,C.y=d*G,C.z=S*B,p.push(C.x,C.y,C.z),h.push(0,G,0),A.x=B*.5+.5,A.y=H*.5*G+.5,g.push(A.x,A.y),x++}for(let U=0;U<r;U++){const V=R+U,W=w+U;E===!0?f.push(W,W+1,V):f.push(W+1,W,V),_+=3}l.addGroup(u,_,E===!0?1:2),u+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ba extends jt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),f(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new N,E=new N,R=new N;for(let A=0;A<t.length;A+=3)g(t[A+0],y),g(t[A+1],E),g(t[A+2],R),c(y,E,R,M)}function c(M,y,E,R){const A=R+1,C=[];for(let _=0;_<=A;_++){C[_]=[];const S=M.clone().lerp(E,_/A),G=y.clone().lerp(E,_/A),w=A-_;for(let U=0;U<=w;U++)U===0&&_===A?C[_][U]=S:C[_][U]=S.clone().lerp(G,U/w)}for(let _=0;_<A;_++)for(let S=0;S<2*(A-_)-1;S++){const G=Math.floor(S/2);S%2===0?(h(C[_][G+1]),h(C[_+1][G]),h(C[_][G])):(h(C[_][G+1]),h(C[_+1][G+1]),h(C[_+1][G]))}}function l(M){const y=new N;for(let E=0;E<s.length;E+=3)y.x=s[E+0],y.y=s[E+1],y.z=s[E+2],y.normalize().multiplyScalar(M),s[E+0]=y.x,s[E+1]=y.y,s[E+2]=y.z}function f(){const M=new N;for(let y=0;y<s.length;y+=3){M.x=s[y+0],M.y=s[y+1],M.z=s[y+2];const E=d(M)/2/Math.PI+.5,R=u(M)/Math.PI+.5;a.push(E,1-R)}x(),p()}function p(){for(let M=0;M<a.length;M+=6){const y=a[M+0],E=a[M+2],R=a[M+4],A=Math.max(y,E,R),C=Math.min(y,E,R);A>.9&&C<.1&&(y<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function g(M,y){const E=M*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function x(){const M=new N,y=new N,E=new N,R=new N,A=new Ve,C=new Ve,_=new Ve;for(let S=0,G=0;S<s.length;S+=9,G+=6){M.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),E.set(s[S+6],s[S+7],s[S+8]),A.set(a[G+0],a[G+1]),C.set(a[G+2],a[G+3]),_.set(a[G+4],a[G+5]),R.copy(M).add(y).add(E).divideScalar(3);const w=d(R);T(A,G+0,M,w),T(C,G+2,y,w),T(_,G+4,E,w)}}function T(M,y,E,R){R<0&&M.x===1&&(a[y]=M.x-1),E.x===0&&E.z===0&&(a[y]=R/2/Math.PI+.5)}function d(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.vertices,e.indices,e.radius,e.detail)}}class wr extends jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,f=c+1,p=e/o,h=t/c,g=[],x=[],T=[],d=[];for(let u=0;u<f;u++){const M=u*h-a;for(let y=0;y<l;y++){const E=y*p-s;x.push(E,-M,0),T.push(0,0,1),d.push(y/o),d.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<o;M++){const y=M+l*u,E=M+l*(u+1),R=M+1+l*(u+1),A=M+1+l*u;g.push(y,E,A),g.push(E,R,A)}this.setIndex(g),this.setAttribute("position",new Rt(x,3)),this.setAttribute("normal",new Rt(T,3)),this.setAttribute("uv",new Rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hi extends ba{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hi(e.radius,e.detail)}}function Si(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=Si(i[t]);for(const r in n)e[r]=n[r]}return e}function kc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const Wc={clone:Si,merge:At};var Xc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xc,this.fragmentShader=qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yc extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gt extends Ti{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=br,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ss extends Ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=br,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kc extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zc extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Aa extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class $c extends Aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const as=new rt,co=new N,ho=new N;class jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Ft,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;co.setFromMatrixPosition(e.matrixWorld),t.position.copy(co),ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ho),t.updateMatrixWorld(),as.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(as,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Oi||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(as)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cr=new N,hr=new yi,Qt=new N;class vl extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cr,hr,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cr,hr,Qt.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(cr,hr,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cr,hr,Qt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new N,uo=new Ve,fo=new Ve;class Ht extends vl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,uo,fo),t.subVectors(fo,uo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wa extends vl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jc extends jc{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qc extends Aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Jc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class eh extends Aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const fi=-90,di=1;class th extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(fi,di,e,t);r.layers=this.layers,this.add(r);const s=new Ht(fi,di,e,t);s.layers=this.layers,this.add(s);const a=new Ht(fi,di,e,t);a.layers=this.layers,this.add(a);const o=new Ht(fi,di,e,t);o.layers=this.layers,this.add(o);const c=new Ht(fi,di,e,t);c.layers=this.layers,this.add(c);const l=new Ht(fi,di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Oi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,h,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class nh extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function po(i,e,t,n){const r=ih(n);switch(t){case al:return i*e;case ll:return i*e/r.components*r.byteLength;case pa:return i*e/r.components*r.byteLength;case vi:return i*e*2/r.components*r.byteLength;case ma:return i*e*2/r.components*r.byteLength;case ol:return i*e*3/r.components*r.byteLength;case Zt:return i*e*4/r.components*r.byteLength;case ga:return i*e*4/r.components*r.byteLength;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gr:case _r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case As:case Rs:return Math.max(i,16)*Math.max(e,8)/4;case bs:case ws:return Math.max(i,8)*Math.max(e,8)/2;case Cs:case Ps:case Ls:case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ds:case Us:case Ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Os:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ks:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ws:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ys:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ks:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Zs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $s:case js:case Js:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qs:case ea:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ta:case na:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ih(i){switch(i){case Ft:case nl:return{byteLength:1,components:1};case Ni:case il:case Sn:return{byteLength:2,components:1};case fa:case da:return{byteLength:2,components:4};case ln:case ua:case nn:return{byteLength:4,components:1};case rl:case sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ha}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ha);function Ml(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function rh(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,f),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const f=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,f);else{p.sort((g,x)=>g.start-x.start);let h=0;for(let g=1;g<p.length;g++){const x=p[h],T=p[g];T.start<=x.start+x.count+1?x.count=Math.max(x.count,T.start+T.count-x.start):(++h,p[h]=T)}p.length=h+1;for(let g=0,x=p.length;g<x;g++){const T=p[g];i.bufferSubData(l,T.start*f.BYTES_PER_ELEMENT,f,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ah=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_h=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Th=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ah=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Rh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ch=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ph=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$h=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ru=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,su=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,au=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ou=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_u=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Su=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Au=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ru=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Du=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Uu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ou=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ku=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ku=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$u=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ju=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ju=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,af=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ff=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ef=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Af=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:sh,alphahash_pars_fragment:ah,alphamap_fragment:oh,alphamap_pars_fragment:lh,alphatest_fragment:ch,alphatest_pars_fragment:hh,aomap_fragment:uh,aomap_pars_fragment:fh,batching_pars_vertex:dh,batching_vertex:ph,begin_vertex:mh,beginnormal_vertex:gh,bsdfs:_h,iridescence_fragment:xh,bumpmap_pars_fragment:vh,clipping_planes_fragment:Mh,clipping_planes_pars_fragment:Sh,clipping_planes_pars_vertex:Eh,clipping_planes_vertex:yh,color_fragment:Th,color_pars_fragment:bh,color_pars_vertex:Ah,color_vertex:wh,common:Rh,cube_uv_reflection_fragment:Ch,defaultnormal_vertex:Ph,displacementmap_pars_vertex:Dh,displacementmap_vertex:Lh,emissivemap_fragment:Ih,emissivemap_pars_fragment:Uh,colorspace_fragment:Nh,colorspace_pars_fragment:Fh,envmap_fragment:Oh,envmap_common_pars_fragment:Bh,envmap_pars_fragment:zh,envmap_pars_vertex:Vh,envmap_physical_pars_fragment:jh,envmap_vertex:Gh,fog_vertex:Hh,fog_pars_vertex:kh,fog_fragment:Wh,fog_pars_fragment:Xh,gradientmap_pars_fragment:qh,lightmap_pars_fragment:Yh,lights_lambert_fragment:Kh,lights_lambert_pars_fragment:Zh,lights_pars_begin:$h,lights_toon_fragment:Jh,lights_toon_pars_fragment:Qh,lights_phong_fragment:eu,lights_phong_pars_fragment:tu,lights_physical_fragment:nu,lights_physical_pars_fragment:iu,lights_fragment_begin:ru,lights_fragment_maps:su,lights_fragment_end:au,logdepthbuf_fragment:ou,logdepthbuf_pars_fragment:lu,logdepthbuf_pars_vertex:cu,logdepthbuf_vertex:hu,map_fragment:uu,map_pars_fragment:fu,map_particle_fragment:du,map_particle_pars_fragment:pu,metalnessmap_fragment:mu,metalnessmap_pars_fragment:gu,morphinstance_vertex:_u,morphcolor_vertex:xu,morphnormal_vertex:vu,morphtarget_pars_vertex:Mu,morphtarget_vertex:Su,normal_fragment_begin:Eu,normal_fragment_maps:yu,normal_pars_fragment:Tu,normal_pars_vertex:bu,normal_vertex:Au,normalmap_pars_fragment:wu,clearcoat_normal_fragment_begin:Ru,clearcoat_normal_fragment_maps:Cu,clearcoat_pars_fragment:Pu,iridescence_pars_fragment:Du,opaque_fragment:Lu,packing:Iu,premultiplied_alpha_fragment:Uu,project_vertex:Nu,dithering_fragment:Fu,dithering_pars_fragment:Ou,roughnessmap_fragment:Bu,roughnessmap_pars_fragment:zu,shadowmap_pars_fragment:Vu,shadowmap_pars_vertex:Gu,shadowmap_vertex:Hu,shadowmask_pars_fragment:ku,skinbase_vertex:Wu,skinning_pars_vertex:Xu,skinning_vertex:qu,skinnormal_vertex:Yu,specularmap_fragment:Ku,specularmap_pars_fragment:Zu,tonemapping_fragment:$u,tonemapping_pars_fragment:ju,transmission_fragment:Ju,transmission_pars_fragment:Qu,uv_pars_fragment:ef,uv_pars_vertex:tf,uv_vertex:nf,worldpos_vertex:rf,background_vert:sf,background_frag:af,backgroundCube_vert:of,backgroundCube_frag:lf,cube_vert:cf,cube_frag:hf,depth_vert:uf,depth_frag:ff,distance_vert:df,distance_frag:pf,equirect_vert:mf,equirect_frag:gf,linedashed_vert:_f,linedashed_frag:xf,meshbasic_vert:vf,meshbasic_frag:Mf,meshlambert_vert:Sf,meshlambert_frag:Ef,meshmatcap_vert:yf,meshmatcap_frag:Tf,meshnormal_vert:bf,meshnormal_frag:Af,meshphong_vert:wf,meshphong_frag:Rf,meshphysical_vert:Cf,meshphysical_frag:Pf,meshtoon_vert:Df,meshtoon_frag:Lf,points_vert:If,points_frag:Uf,shadow_vert:Nf,shadow_frag:Ff,sprite_vert:Of,sprite_frag:Bf},oe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},tn={basic:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:At([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:At([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:At([oe.points,oe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:At([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:At([oe.common,oe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:At([oe.sprite,oe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:At([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:At([oe.lights,oe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};tn.physical={uniforms:At([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ur={r:0,b:0,g:0},Gn=new $t,zf=new rt;function Vf(i,e,t,n,r,s){const a=new ze(0);let o=r===!0?0:1,c,l,f=null,p=0,h=null;function g(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){const E=M.backgroundBlurriness>0;y=e.get(y,E)}return y}function x(M){let y=!1;const E=g(M);E===null?d(a,o):E&&E.isColor&&(d(E,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(M,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===Ar)?(l===void 0&&(l=new Je(new dt(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Si(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Gn.copy(y.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(zf.makeRotationFromEuler(Gn)),l.material.toneMapped=ke.getTransfer(E.colorSpace)!==Ze,(f!==E||p!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=E,p=E.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Je(new wr(2,2),new cn({name:"BackgroundMaterial",uniforms:Si(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ke.getTransfer(E.colorSpace)!==Ze,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||p!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,p=E.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,y){M.getRGB(ur,xl(i)),t.buffers.color.setClear(ur.r,ur.g,ur.b,y,s)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),o=y,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,d(a,o)},render:x,addToRenderList:T,dispose:u}}function Gf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(w,U,V,W,B){let H=!1;const F=p(w,W,V,U);s!==F&&(s=F,l(s.object)),H=g(w,W,V,B),H&&x(w,W,V,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,E(w,U,V,W),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function f(w){return i.deleteVertexArray(w)}function p(w,U,V,W){const B=W.wireframe===!0;let H=n[U.id];H===void 0&&(H={},n[U.id]=H);const F=w.isInstancedMesh===!0?w.id:0;let Q=H[F];Q===void 0&&(Q={},H[F]=Q);let $=Q[V.id];$===void 0&&($={},Q[V.id]=$);let he=$[B];return he===void 0&&(he=h(c()),$[B]=he),he}function h(w){const U=[],V=[],W=[];for(let B=0;B<t;B++)U[B]=0,V[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:W,object:w,attributes:{},index:null}}function g(w,U,V,W){const B=s.attributes,H=U.attributes;let F=0;const Q=V.getAttributes();for(const $ in Q)if(Q[$].location>=0){const me=B[$];let fe=H[$];if(fe===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor)),me===void 0||me.attribute!==fe||fe&&me.data!==fe.data)return!0;F++}return s.attributesNum!==F||s.index!==W}function x(w,U,V,W){const B={},H=U.attributes;let F=0;const Q=V.getAttributes();for(const $ in Q)if(Q[$].location>=0){let me=H[$];me===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(me=w.instanceColor));const fe={};fe.attribute=me,me&&me.data&&(fe.data=me.data),B[$]=fe,F++}s.attributes=B,s.attributesNum=F,s.index=W}function T(){const w=s.newAttributes;for(let U=0,V=w.length;U<V;U++)w[U]=0}function d(w){u(w,0)}function u(w,U){const V=s.newAttributes,W=s.enabledAttributes,B=s.attributeDivisors;V[w]=1,W[w]===0&&(i.enableVertexAttribArray(w),W[w]=1),B[w]!==U&&(i.vertexAttribDivisor(w,U),B[w]=U)}function M(){const w=s.newAttributes,U=s.enabledAttributes;for(let V=0,W=U.length;V<W;V++)U[V]!==w[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function y(w,U,V,W,B,H,F){F===!0?i.vertexAttribIPointer(w,U,V,B,H):i.vertexAttribPointer(w,U,V,W,B,H)}function E(w,U,V,W){T();const B=W.attributes,H=V.getAttributes(),F=U.defaultAttributeValues;for(const Q in H){const $=H[Q];if($.location>=0){let he=B[Q];if(he===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(he=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(he=w.instanceColor)),he!==void 0){const me=he.normalized,fe=he.itemSize,Ue=e.get(he);if(Ue===void 0)continue;const st=Ue.buffer,it=Ue.type,K=Ue.bytesPerElement,ne=it===i.INT||it===i.UNSIGNED_INT||he.gpuType===ua;if(he.isInterleavedBufferAttribute){const ae=he.data,Le=ae.stride,Ae=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Re=0;Re<$.locationSize;Re++)u($.location+Re,ae.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Re=0;Re<$.locationSize;Re++)d($.location+Re);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Re=0;Re<$.locationSize;Re++)y($.location+Re,fe/$.locationSize,it,me,Le*K,(Ae+fe/$.locationSize*Re)*K,ne)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<$.locationSize;ae++)u($.location+ae,he.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<$.locationSize;ae++)d($.location+ae);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ae=0;ae<$.locationSize;ae++)y($.location+ae,fe/$.locationSize,it,me,fe*K,fe/$.locationSize*ae*K,ne)}}else if(F!==void 0){const me=F[Q];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv($.location,me);break;case 3:i.vertexAttrib3fv($.location,me);break;case 4:i.vertexAttrib4fv($.location,me);break;default:i.vertexAttrib1fv($.location,me)}}}}M()}function R(){S();for(const w in n){const U=n[w];for(const V in U){const W=U[V];for(const B in W){const H=W[B];for(const F in H)f(H[F].object),delete H[F];delete W[B]}}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const U=n[w.id];for(const V in U){const W=U[V];for(const B in W){const H=W[B];for(const F in H)f(H[F].object),delete H[F];delete W[B]}}delete n[w.id]}function C(w){for(const U in n){const V=n[U];for(const W in V){const B=V[W];if(B[w.id]===void 0)continue;const H=B[w.id];for(const F in H)f(H[F].object),delete H[F];delete B[w.id]}}}function _(w){for(const U in n){const V=n[U],W=w.isInstancedMesh===!0?w.id:0,B=V[W];if(B!==void 0){for(const H in B){const F=B[H];for(const Q in F)f(F[Q].object),delete F[Q];delete B[H]}delete V[W],Object.keys(V).length===0&&delete n[U]}}}function S(){G(),a=!0,s!==r&&(s=r,l(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:G,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:T,enableAttribute:d,disableUnusedAttributes:M}}function Hf(i,e,t){let n;function r(l){n=l}function s(l,f){i.drawArrays(n,l,f),t.update(f,n,1)}function a(l,f,p){p!==0&&(i.drawArraysInstanced(n,l,f,p),t.update(f,n,p))}function o(l,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x];t.update(g,n,1)}function c(l,f,p,h){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<l.length;x++)a(l[x],f[x],h[x]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,f,0,h,0,p);let x=0;for(let T=0;T<p;T++)x+=f[T]*h[T];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function kf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Zt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ft&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==nn&&!_)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Pe("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:x,maxTextureSize:T,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:E,maxSamples:R,samples:A}}function Wf(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new kn,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||n!==0||r;return r=h,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){t=f(p,h,0)},this.setState=function(p,h,g){const x=p.clippingPlanes,T=p.clipIntersection,d=p.clipShadows,u=i.get(p);if(!r||x===null||x.length===0||s&&!d)s?f(null):l();else{const M=s?0:n,y=M*4;let E=u.clippingState||null;c.value=E,E=f(x,h,y,g);for(let R=0;R!==y;++R)E[R]=t[R];u.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,h,g,x){const T=p!==null?p.length:0;let d=null;if(T!==0){if(d=c.value,x!==!0||d===null){const u=g+T*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(d===null||d.length<u)&&(d=new Float32Array(u));for(let y=0,E=g;y!==T;++y,E+=4)a.copy(p[y]).applyMatrix4(M,o),a.normal.toArray(d,E),d[E+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,d}}const In=4,mo=[.125,.215,.35,.446,.526,.582],Xn=20,Xf=256,Di=new wa,go=new ze;let os=null,ls=0,cs=0,hs=!1;const qf=new N;class _o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=qf}=s;os=this._renderer.getRenderTarget(),ls=this._renderer.getActiveCubeFace(),cs=this._renderer.getActiveMipmapLevel(),hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(os,ls,cs),this._renderer.xr.enabled=hs,e.scissorTest=!1,pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jn||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),os=this._renderer.getRenderTarget(),ls=this._renderer.getActiveCubeFace(),cs=this._renderer.getActiveMipmapLevel(),hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:Sn,format:Zt,colorSpace:Mi,depthBuffer:!1},r=xo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yf(s)),this._blurMaterial=Zf(s,e,t),this._ggxMaterial=Kf(s,e,t)}return r}_compileMaterial(e){const t=new Je(new jt,e);this._renderer.compile(t,Di)}_sceneToCubeUV(e,t,n,r,s){const c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,g=p.toneMapping;p.getClearColor(go),p.toneMapping=sn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new dt,new ml({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,d=T.material;let u=!1;const M=e.background;M?M.isColor&&(d.color.copy(M),e.background=null,u=!0):(d.color.copy(go),u=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[y],s.y,s.z)):E===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[y]));const R=this._cubeSize;pi(r,E*R,y>2?R:0,R,R),p.setRenderTarget(r),u&&p.render(T,c),p.render(e,c)}p.toneMapping=g,p.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Jn||e.mapping===xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;pi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Di)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-f*f),h=0+l*1.25,g=p*h,{_lodMax:x}=this,T=this._sizeLods[n],d=3*T*(n>x-In?n-x+In:0),u=4*(this._cubeSize-T);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=x-t,pi(s,d,u,3*T,2*T),r.setRenderTarget(s),r.render(o,Di),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-n,pi(e,d,u,3*T,2*T),r.setRenderTarget(e),r.render(o,Di)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const f=3,p=this._lodMeshes[r];p.material=l;const h=l.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Xn-1),T=s/x,d=isFinite(s)?1+Math.floor(f*T):Xn;d>Xn&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Xn}`);const u=[];let M=0;for(let C=0;C<Xn;++C){const _=C/T,S=Math.exp(-_*_/2);u.push(S),C===0?M+=S:C<d&&(M+=2*S)}for(let C=0;C<u.length;C++)u[C]=u[C]/M;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=x,h.mipInt.value=y-n;const E=this._sizeLods[r],R=3*E*(r>y-In?r-y+In:0),A=4*(this._cubeSize-E);pi(t,R,A,3*E,2*E),c.setRenderTarget(t),c.render(p,Di)}}function Yf(i){const e=[],t=[],n=[];let r=i;const s=i-In+1+mo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-In?c=mo[a-i+In-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),f=-l,p=1+l,h=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,x=6,T=3,d=2,u=1,M=new Float32Array(T*x*g),y=new Float32Array(d*x*g),E=new Float32Array(u*x*g);for(let A=0;A<g;A++){const C=A%3*2/3-1,_=A>2?0:-1,S=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];M.set(S,T*x*A),y.set(h,d*x*A);const G=[A,A,A,A,A,A];E.set(G,u*x*A)}const R=new jt;R.setAttribute("position",new on(M,T)),R.setAttribute("uv",new on(y,d)),R.setAttribute("faceIndex",new on(E,u)),n.push(new Je(R,null)),r>In&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function xo(i,e,t){const n=new an(i,e,t);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Kf(i,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Zf(i,e,t){const n=new Float32Array(Xn),r=new N(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function vo(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Mo(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Rr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sl extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dt(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:vn});s.uniforms.tEquirect.value=t;const a=new Je(r,s),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=bt),new th(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function $f(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,g=!1){return h==null?null:g?a(h):s(h)}function s(h){if(h&&h.isTexture){const g=h.mapping;if(g===Lr||g===Ir)if(e.has(h)){const x=e.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const T=new Sl(x.height);return T.fromEquirectangularTexture(i,h),e.set(h,T),h.addEventListener("dispose",l),o(T.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const g=h.mapping,x=g===Lr||g===Ir,T=g===Jn||g===xi;if(x||T){let d=t.get(h);const u=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new _o(i)),d=x?n.fromEquirectangular(h,d):n.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),d.texture;if(d!==void 0)return d.texture;{const M=h.image;return x&&M&&M.height>0||T&&M&&c(M)?(n===null&&(n=new _o(i)),d=x?n.fromEquirectangular(h):n.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),h.addEventListener("dispose",f),d.texture):null}}}return h}function o(h,g){return g===Lr?h.mapping=Jn:g===Ir&&(h.mapping=xi),h}function c(h){let g=0;const x=6;for(let T=0;T<x;T++)h[T]!==void 0&&g++;return g===x}function l(h){const g=h.target;g.removeEventListener("dispose",l);const x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function f(h){const g=h.target;g.removeEventListener("dispose",f);const x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function jf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Er("WebGLRenderer: "+n+" extension not supported."),r}}}function Jf(i,e,t,n){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER)}function l(p){const h=[],g=p.index,x=p.attributes.position;let T=0;if(x===void 0)return;if(g!==null){const M=g.array;T=g.version;for(let y=0,E=M.length;y<E;y+=3){const R=M[y+0],A=M[y+1],C=M[y+2];h.push(R,A,A,C,C,R)}}else{const M=x.array;T=x.version;for(let y=0,E=M.length/3-1;y<E;y+=3){const R=y+0,A=y+1,C=y+2;h.push(R,A,A,C,C,R)}}const d=new(x.count>=65535?pl:dl)(h,1);d.version=T;const u=s.get(p);u&&e.remove(u),s.set(p,d)}function f(p){const h=s.get(p);if(h){const g=p.index;g!==null&&h.version<g.version&&l(p)}else l(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:f}}function Qf(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,g){i.drawElements(n,g,s,h*a),t.update(g,n,1)}function l(h,g,x){x!==0&&(i.drawElementsInstanced(n,g,s,h*a,x),t.update(g,n,x))}function f(h,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,h,0,x);let d=0;for(let u=0;u<x;u++)d+=g[u];t.update(d,n,1)}function p(h,g,x,T){if(x===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<h.length;u++)l(h[u]/a,g[u],T[u]);else{d.multiDrawElementsInstancedWEBGL(n,g,0,s,h,0,T,0,x);let u=0;for(let M=0;M<x;M++)u+=g[M]*T[M];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function ed(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function td(i,e,t){const n=new WeakMap,r=new lt;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==p){let G=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",G)};var g=G;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),T===!0&&(E=2),d===!0&&(E=3);let R=o.attributes.position.count*E,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*A*4*p),_=new hl(C,R,A,p);_.type=nn,_.needsUpdate=!0;const S=E*4;for(let w=0;w<p;w++){const U=u[w],V=M[w],W=y[w],B=R*A*4*w;for(let H=0;H<U.count;H++){const F=H*S;x===!0&&(r.fromBufferAttribute(U,H),C[B+F+0]=r.x,C[B+F+1]=r.y,C[B+F+2]=r.z,C[B+F+3]=0),T===!0&&(r.fromBufferAttribute(V,H),C[B+F+4]=r.x,C[B+F+5]=r.y,C[B+F+6]=r.z,C[B+F+7]=0),d===!0&&(r.fromBufferAttribute(W,H),C[B+F+8]=r.x,C[B+F+9]=r.y,C[B+F+10]=r.z,C[B+F+11]=W.itemSize===4?r.w:1)}}h={count:p,texture:_,size:new Ve(R,A)},n.set(o,h),o.addEventListener("dispose",G)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let d=0;d<l.length;d++)x+=l[d];const T=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",T),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function nd(i,e,t,n,r){let s=new WeakMap;function a(l){const f=r.render.frame,p=l.geometry,h=e.get(l,p);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const g=l.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return h}function o(){s=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const id={[Ko]:"LINEAR_TONE_MAPPING",[Zo]:"REINHARD_TONE_MAPPING",[$o]:"CINEON_TONE_MAPPING",[jo]:"ACES_FILMIC_TONE_MAPPING",[Qo]:"AGX_TONE_MAPPING",[el]:"NEUTRAL_TONE_MAPPING",[Jo]:"CUSTOM_TONE_MAPPING"};function rd(i,e,t,n,r){const s=new an(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new an(e,t,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),o=new jt;o.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Rt([0,2,0,0,2,0],2));const c=new Yc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Je(o,c),f=new wa(-1,1,1,-1,0,1);let p=null,h=null,g=!1,x,T=null,d=[],u=!1;this.setSize=function(M,y){s.setSize(M,y),a.setSize(M,y);for(let E=0;E<d.length;E++){const R=d[E];R.setSize&&R.setSize(M,y)}},this.setEffects=function(M){d=M,u=d.length>0&&d[0].isRenderPass===!0;const y=s.width,E=s.height;for(let R=0;R<d.length;R++){const A=d[R];A.setSize&&A.setSize(y,E)}},this.begin=function(M,y){if(g||M.toneMapping===sn&&d.length===0)return!1;if(T=y,y!==null){const E=y.width,R=y.height;(s.width!==E||s.height!==R)&&this.setSize(E,R)}return u===!1&&M.setRenderTarget(s),x=M.toneMapping,M.toneMapping=sn,!0},this.hasRenderPass=function(){return u},this.end=function(M,y){M.toneMapping=x,g=!0;let E=s,R=a;for(let A=0;A<d.length;A++){const C=d[A];if(C.enabled!==!1&&(C.render(M,R,E,y),C.needsSwap!==!1)){const _=E;E=R,R=_}}if(p!==M.outputColorSpace||h!==M.toneMapping){p=M.outputColorSpace,h=M.toneMapping,c.defines={},ke.getTransfer(p)===Ze&&(c.defines.SRGB_TRANSFER="");const A=id[h];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(T),M.render(l,f),T=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const El=new wt,ra=new Bi(1,1),yl=new hl,Tl=new yc,bl=new gl,So=[],Eo=[],yo=new Float32Array(16),To=new Float32Array(9),bo=new Float32Array(4);function bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=So[r];if(s===void 0&&(s=new Float32Array(r),So[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cr(i,e){let t=Eo[e];t===void 0&&(t=new Int32Array(e),Eo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ad(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function cd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;bo.set(n),i.uniformMatrix2fv(this.addr,!1,bo),mt(t,n)}}function hd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;To.set(n),i.uniformMatrix3fv(this.addr,!1,To),mt(t,n)}}function ud(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;yo.set(n),i.uniformMatrix4fv(this.addr,!1,yo),mt(t,n)}}function fd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function gd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function xd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function vd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function Md(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ra.compareFunction=t.isReversedDepthBuffer()?va:xa,s=ra):s=El,t.setTexture2D(e||s,r)}function Sd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Tl,r)}function Ed(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||bl,r)}function yd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||yl,r)}function Td(i){switch(i){case 5126:return sd;case 35664:return ad;case 35665:return od;case 35666:return ld;case 35674:return cd;case 35675:return hd;case 35676:return ud;case 5124:case 35670:return fd;case 35667:case 35671:return dd;case 35668:case 35672:return pd;case 35669:case 35673:return md;case 5125:return gd;case 36294:return _d;case 36295:return xd;case 36296:return vd;case 35678:case 36198:case 36298:case 36306:case 35682:return Md;case 35679:case 36299:case 36307:return Sd;case 35680:case 36300:case 36308:case 36293:return Ed;case 36289:case 36303:case 36311:case 36292:return yd}}function bd(i,e){i.uniform1fv(this.addr,e)}function Ad(i,e){const t=bi(e,this.size,2);i.uniform2fv(this.addr,t)}function wd(i,e){const t=bi(e,this.size,3);i.uniform3fv(this.addr,t)}function Rd(i,e){const t=bi(e,this.size,4);i.uniform4fv(this.addr,t)}function Cd(i,e){const t=bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Pd(i,e){const t=bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dd(i,e){const t=bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ld(i,e){i.uniform1iv(this.addr,e)}function Id(i,e){i.uniform2iv(this.addr,e)}function Ud(i,e){i.uniform3iv(this.addr,e)}function Nd(i,e){i.uniform4iv(this.addr,e)}function Fd(i,e){i.uniform1uiv(this.addr,e)}function Od(i,e){i.uniform2uiv(this.addr,e)}function Bd(i,e){i.uniform3uiv(this.addr,e)}function zd(i,e){i.uniform4uiv(this.addr,e)}function Vd(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ra:a=El;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Gd(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Tl,s[a])}function Hd(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||bl,s[a])}function kd(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||yl,s[a])}function Wd(i){switch(i){case 5126:return bd;case 35664:return Ad;case 35665:return wd;case 35666:return Rd;case 35674:return Cd;case 35675:return Pd;case 35676:return Dd;case 5124:case 35670:return Ld;case 35667:case 35671:return Id;case 35668:case 35672:return Ud;case 35669:case 35673:return Nd;case 5125:return Fd;case 36294:return Od;case 36295:return Bd;case 36296:return zd;case 35678:case 36198:case 36298:case 36306:case 35682:return Vd;case 35679:case 36299:case 36307:return Gd;case 35680:case 36300:case 36308:case 36293:return Hd;case 36289:case 36303:case 36311:case 36292:return kd}}class Xd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Td(t.type)}}class qd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wd(t.type)}}class Yd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const us=/(\w+)(\])?(\[|\.)?/g;function Ao(i,e){i.seq.push(e),i.map[e.id]=e}function Kd(i,e,t){const n=i.name,r=n.length;for(us.lastIndex=0;;){const s=us.exec(n),a=us.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ao(t,l===void 0?new Xd(o,i,e):new qd(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Yd(o),Ao(t,p)),t=p}}}class xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Kd(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function wo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zd=37297;let $d=0;function jd(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ro=new Ie;function Jd(i){ke._getMatrix(Ro,ke.workingColorSpace,i);const e=`mat3( ${Ro.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(i)){case Mr:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Co(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+jd(i.getShaderSource(e),o)}else return s}function Qd(i,e){const t=Jd(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ep={[Ko]:"Linear",[Zo]:"Reinhard",[$o]:"Cineon",[jo]:"ACESFilmic",[Qo]:"AgX",[el]:"Neutral",[Jo]:"Custom"};function tp(i,e){const t=ep[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fr=new N;function np(){ke.getLuminanceCoefficients(fr);const i=fr.x.toFixed(4),e=fr.y.toFixed(4),t=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ip(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ui).join(`
`)}function rp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ui(i){return i!==""}function Po(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Do(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(i){return i.replace(ap,lp)}const op=new Map;function lp(i,e){let t=Ne[e];if(t===void 0){const n=op.get(e);if(n!==void 0)t=Ne[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sa(t)}const cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lo(i){return i.replace(cp,hp)}function hp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Io(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const up={[dr]:"SHADOWMAP_TYPE_PCF",[Ii]:"SHADOWMAP_TYPE_VSM"};function fp(i){return up[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dp={[Jn]:"ENVMAP_TYPE_CUBE",[xi]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE_UV"};function pp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":dp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const mp={[xi]:"ENVMAP_MODE_REFRACTION"};function gp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":mp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _p={[br]:"ENVMAP_BLENDING_MULTIPLY",[nc]:"ENVMAP_BLENDING_MIX",[ic]:"ENVMAP_BLENDING_ADD"};function xp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_p[i.combine]||"ENVMAP_BLENDING_NONE"}function vp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=fp(t),l=pp(t),f=gp(t),p=xp(t),h=vp(t),g=ip(t),x=rp(s),T=r.createProgram();let d,u,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ui).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ui).join(`
`),u.length>0&&(u+=`
`)):(d=[Io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),u=[Io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sn?"#define TONE_MAPPING":"",t.toneMapping!==sn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==sn?tp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Qd("linearToOutputTexel",t.outputColorSpace),np(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),a=sa(a),a=Po(a,t),a=Do(a,t),o=sa(o),o=Po(o,t),o=Do(o,t),a=Lo(a),o=Lo(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",t.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=M+d+a,E=M+u+o,R=wo(r,r.VERTEX_SHADER,y),A=wo(r,r.FRAGMENT_SHADER,E);r.attachShader(T,R),r.attachShader(T,A),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function C(w){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(T)||"",V=r.getShaderInfoLog(R)||"",W=r.getShaderInfoLog(A)||"",B=U.trim(),H=V.trim(),F=W.trim();let Q=!0,$=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,R,A);else{const he=Co(r,R,"vertex"),me=Co(r,A,"fragment");Xe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+he+`
`+me)}else B!==""?Pe("WebGLProgram: Program Info Log:",B):(H===""||F==="")&&($=!1);$&&(w.diagnostics={runnable:Q,programLog:B,vertexShader:{log:H,prefix:d},fragmentShader:{log:F,prefix:u}})}r.deleteShader(R),r.deleteShader(A),_=new xr(r,T),S=sp(r,T)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(T,Zd)),G},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$d++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=R,this.fragmentShader=A,this}let Sp=0;class Ep{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yp(e),t.set(e,n)),n}}class yp{constructor(e){this.id=Sp++,this.code=e,this.usedTimes=0}}function Tp(i,e,t,n,r,s){const a=new ul,o=new Ep,c=new Set,l=[],f=new Map,p=n.logarithmicDepthBuffer;let h=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function T(_,S,G,w,U){const V=w.fog,W=U.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=e.get(_.envMap||B,H),Q=F&&F.mapping===Ar?F.image.height:null,$=g[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=he!==void 0?he.length:0;let fe=0;W.morphAttributes.position!==void 0&&(fe=1),W.morphAttributes.normal!==void 0&&(fe=2),W.morphAttributes.color!==void 0&&(fe=3);let Ue,st,it,K;if($){const Ke=tn[$];Ue=Ke.vertexShader,st=Ke.fragmentShader}else Ue=_.vertexShader,st=_.fragmentShader,o.update(_),it=o.getVertexShaderID(_),K=o.getFragmentShaderID(_);const ne=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),Le=U.isInstancedMesh===!0,Ae=U.isBatchedMesh===!0,Re=!!_.map,gt=!!_.matcap,He=!!F,Ye=!!_.aoMap,Qe=!!_.lightMap,Fe=!!_.bumpMap,ct=!!_.normalMap,P=!!_.displacementMap,ut=!!_.emissiveMap,qe=!!_.metalnessMap,tt=!!_.roughnessMap,Se=_.anisotropy>0,b=_.clearcoat>0,m=_.dispersion>0,L=_.iridescence>0,Y=_.sheen>0,Z=_.transmission>0,q=Se&&!!_.anisotropyMap,ge=b&&!!_.clearcoatMap,re=b&&!!_.clearcoatNormalMap,be=b&&!!_.clearcoatRoughnessMap,we=L&&!!_.iridescenceMap,j=L&&!!_.iridescenceThicknessMap,ee=Y&&!!_.sheenColorMap,_e=Y&&!!_.sheenRoughnessMap,ve=!!_.specularMap,ue=!!_.specularColorMap,Oe=!!_.specularIntensityMap,D=Z&&!!_.transmissionMap,se=Z&&!!_.thicknessMap,te=!!_.gradientMap,pe=!!_.alphaMap,J=_.alphaTest>0,X=!!_.alphaHash,xe=!!_.extensions;let Ce=sn;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const nt={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:st,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&U._colorsTexture!==null,instancing:Le,instancingColor:Le&&U.instanceColor!==null,instancingMorph:Le&&U.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Mi,alphaToCoverage:!!_.alphaToCoverage,map:Re,matcap:gt,envMap:He,envMapMode:He&&F.mapping,envMapCubeUVHeight:Q,aoMap:Ye,lightMap:Qe,bumpMap:Fe,normalMap:ct,displacementMap:P,emissiveMap:ut,normalMapObjectSpace:ct&&_.normalMapType===ac,normalMapTangentSpace:ct&&_.normalMapType===_a,metalnessMap:qe,roughnessMap:tt,anisotropy:Se,anisotropyMap:q,clearcoat:b,clearcoatMap:ge,clearcoatNormalMap:re,clearcoatRoughnessMap:be,dispersion:m,iridescence:L,iridescenceMap:we,iridescenceThicknessMap:j,sheen:Y,sheenColorMap:ee,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:ue,specularIntensityMap:Oe,transmission:Z,transmissionMap:D,thicknessMap:se,gradientMap:te,opaque:_.transparent===!1&&_.blending===mi&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:J,alphaHash:X,combine:_.combine,mapUv:Re&&x(_.map.channel),aoMapUv:Ye&&x(_.aoMap.channel),lightMapUv:Qe&&x(_.lightMap.channel),bumpMapUv:Fe&&x(_.bumpMap.channel),normalMapUv:ct&&x(_.normalMap.channel),displacementMapUv:P&&x(_.displacementMap.channel),emissiveMapUv:ut&&x(_.emissiveMap.channel),metalnessMapUv:qe&&x(_.metalnessMap.channel),roughnessMapUv:tt&&x(_.roughnessMap.channel),anisotropyMapUv:q&&x(_.anisotropyMap.channel),clearcoatMapUv:ge&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(_.sheenRoughnessMap.channel),specularMapUv:ve&&x(_.specularMap.channel),specularColorMapUv:ue&&x(_.specularColorMap.channel),specularIntensityMapUv:Oe&&x(_.specularIntensityMap.channel),transmissionMapUv:D&&x(_.transmissionMap.channel),thicknessMapUv:se&&x(_.thicknessMap.channel),alphaMapUv:pe&&x(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ct||Se),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Re||pe),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||W.attributes.normal===void 0&&ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ae,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Re&&_.map.isVideoTexture===!0&&ke.getTransfer(_.map.colorSpace)===Ze,decodeVideoTextureEmissive:ut&&_.emissiveMap.isVideoTexture===!0&&ke.getTransfer(_.emissiveMap.colorSpace)===Ze,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_n,flipSided:_.side===Dt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&_.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function d(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const G in _.defines)S.push(G),S.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(u(S,_),M(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function u(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){const S=g[_.type];let G;if(S){const w=tn[S];G=Wc.clone(w.uniforms)}else G=_.uniforms;return G}function E(_,S){let G=f.get(S);return G!==void 0?++G.usedTimes:(G=new Mp(i,S,_,r),l.push(G),f.set(S,G)),G}function R(_){if(--_.usedTimes===0){const S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),f.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function C(){o.dispose()}return{getParameters:T,getProgramCacheKey:d,getUniforms:y,acquireProgram:E,releaseProgram:R,releaseShaderCache:A,programs:l,dispose:C}}function bp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Ap(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Uo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function No(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,x,T,d,u){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:g,material:x,materialVariant:a(h),groupOrder:T,renderOrder:h.renderOrder,z:d,group:u},i[e]=M):(M.id=h.id,M.object=h,M.geometry=g,M.material=x,M.materialVariant=a(h),M.groupOrder=T,M.renderOrder=h.renderOrder,M.z=d,M.group=u),e++,M}function c(h,g,x,T,d,u){const M=o(h,g,x,T,d,u);x.transmission>0?n.push(M):x.transparent===!0?r.push(M):t.push(M)}function l(h,g,x,T,d,u){const M=o(h,g,x,T,d,u);x.transmission>0?n.unshift(M):x.transparent===!0?r.unshift(M):t.unshift(M)}function f(h,g){t.length>1&&t.sort(h||Ap),n.length>1&&n.sort(g||Uo),r.length>1&&r.sort(g||Uo)}function p(){for(let h=e,g=i.length;h<g;h++){const x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:p,sort:f}}function wp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new No,i.set(n,[a])):r>=s.length?(a=new No,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Cp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Pp=0;function Dp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lp(i){const e=new Rp,t=Cp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,s=new rt,a=new rt;function o(l){let f=0,p=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let g=0,x=0,T=0,d=0,u=0,M=0,y=0,E=0,R=0,A=0,C=0;l.sort(Dp);for(let S=0,G=l.length;S<G;S++){const w=l[S],U=w.color,V=w.intensity,W=w.distance;let B=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===vi?B=w.shadow.map.texture:B=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)f+=U.r*V,p+=U.g*V,h+=U.b*V;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],V);C++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const F=w.shadow,Q=t.get(w);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=B,n.directionalShadowMatrix[g]=w.shadow.matrix,M++}n.directional[g]=H,g++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(U).multiplyScalar(V),H.distance=W,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[T]=H;const F=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,F.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[T]=F.matrix,w.castShadow){const Q=t.get(w);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,n.spotShadow[T]=Q,n.spotShadowMap[T]=B,E++}T++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(U).multiplyScalar(V),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[d]=H,d++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const F=w.shadow,Q=t.get(w);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,Q.shadowCameraNear=F.camera.near,Q.shadowCameraFar=F.camera.far,n.pointShadow[x]=Q,n.pointShadowMap[x]=B,n.pointShadowMatrix[x]=w.shadow.matrix,y++}n.point[x]=H,x++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(V),H.groundColor.copy(w.groundColor).multiplyScalar(V),n.hemi[u]=H,u++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=h;const _=n.hash;(_.directionalLength!==g||_.pointLength!==x||_.spotLength!==T||_.rectAreaLength!==d||_.hemiLength!==u||_.numDirectionalShadows!==M||_.numPointShadows!==y||_.numSpotShadows!==E||_.numSpotMaps!==R||_.numLightProbes!==C)&&(n.directional.length=g,n.spot.length=T,n.rectArea.length=d,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,_.directionalLength=g,_.pointLength=x,_.spotLength=T,_.rectAreaLength=d,_.hemiLength=u,_.numDirectionalShadows=M,_.numPointShadows=y,_.numSpotShadows=E,_.numSpotMaps=R,_.numLightProbes=C,n.version=Pp++)}function c(l,f){let p=0,h=0,g=0,x=0,T=0;const d=f.matrixWorldInverse;for(let u=0,M=l.length;u<M;u++){const y=l[u];if(y.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),p++}else if(y.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const E=n.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),a.identity(),s.copy(y.matrixWorld),s.premultiply(d),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),h++}else if(y.isHemisphereLight){const E=n.hemi[T];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),T++}}}return{setup:o,setupView:c,state:n}}function Fo(i){const e=new Lp(i),t=[],n=[];function r(f){l.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Ip(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Fo(i),e.set(r,[o])):s>=a.length?(o=new Fo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Up=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Np=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fp=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Op=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Oo=new rt,Li=new N,fs=new N;function Bp(i,e,t){let n=new ya;const r=new Ve,s=new Ve,a=new lt,o=new Kc,c=new Zc,l={},f=t.maxTextureSize,p={[Un]:Dt,[Dt]:Un,[_n]:_n},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Up,fragmentShader:Np}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const x=new jt;x.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Je(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let u=this.type;this.render=function(A,C,_){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;this.type===Ol&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=dr);const S=i.getRenderTarget(),G=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),U=i.state;U.setBlending(vn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=u!==this.type;V&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(B=>B.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,B=A.length;W<B;W++){const H=A[W],F=H.shadow;if(F===void 0){Pe("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Q=F.getFrameExtents();r.multiply(Q),s.copy(F.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Q.x),r.x=s.x*Q.x,F.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Q.y),r.y=s.y*Q.y,F.mapSize.y=s.y));const $=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=$,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ii){if(H.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new an(r.x,r.y,{format:vi,type:Sn,minFilter:bt,magFilter:bt,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new Bi(r.x,r.y,nn),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=En,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Mt,F.map.depthTexture.magFilter=Mt}else H.isPointLight?(F.map=new Sl(r.x),F.map.depthTexture=new Hc(r.x,ln)):(F.map=new an(r.x,r.y),F.map.depthTexture=new Bi(r.x,r.y,ln)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=En,this.type===dr?(F.map.depthTexture.compareFunction=$?va:xa,F.map.depthTexture.minFilter=bt,F.map.depthTexture.magFilter=bt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Mt,F.map.depthTexture.magFilter=Mt);F.camera.updateProjectionMatrix()}const he=F.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<he;me++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,me),i.clear();else{me===0&&(i.setRenderTarget(F.map),i.clear());const fe=F.getViewport(me);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),U.viewport(a)}if(H.isPointLight){const fe=F.camera,Ue=F.matrix,st=H.distance||fe.far;st!==fe.far&&(fe.far=st,fe.updateProjectionMatrix()),Li.setFromMatrixPosition(H.matrixWorld),fe.position.copy(Li),fs.copy(fe.position),fs.add(Fp[me]),fe.up.copy(Op[me]),fe.lookAt(fs),fe.updateMatrixWorld(),Ue.makeTranslation(-Li.x,-Li.y,-Li.z),Oo.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Oo,fe.coordinateSystem,fe.reversedDepth)}else F.updateMatrices(H);n=F.getFrustum(),E(C,_,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===Ii&&M(F,_),F.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(S,G,w)};function M(A,C){const _=e.update(T);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new an(r.x,r.y,{format:vi,type:Sn})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,_,h,T,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,_,g,T,null)}function y(A,C,_,S){let G=null;const w=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)G=w;else if(G=_.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=G.uuid,V=C.uuid;let W=l[U];W===void 0&&(W={},l[U]=W);let B=W[V];B===void 0&&(B=G.clone(),W[V]=B,C.addEventListener("dispose",R)),G=B}if(G.visible=C.visible,G.wireframe=C.wireframe,S===Ii?G.side=C.shadowSide!==null?C.shadowSide:C.side:G.side=C.shadowSide!==null?C.shadowSide:p[C.side],G.alphaMap=C.alphaMap,G.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,G.map=C.map,G.clipShadows=C.clipShadows,G.clippingPlanes=C.clippingPlanes,G.clipIntersection=C.clipIntersection,G.displacementMap=C.displacementMap,G.displacementScale=C.displacementScale,G.displacementBias=C.displacementBias,G.wireframeLinewidth=C.wireframeLinewidth,G.linewidth=C.linewidth,_.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const U=i.properties.get(G);U.light=_}return G}function E(A,C,_,S,G){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&G===Ii)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const V=e.update(A),W=A.material;if(Array.isArray(W)){const B=V.groups;for(let H=0,F=B.length;H<F;H++){const Q=B[H],$=W[Q.materialIndex];if($&&$.visible){const he=y(A,$,S,G);A.onBeforeShadow(i,A,C,_,V,he,Q),i.renderBufferDirect(_,null,V,he,A,Q),A.onAfterShadow(i,A,C,_,V,he,Q)}}}else if(W.visible){const B=y(A,W,S,G);A.onBeforeShadow(i,A,C,_,V,B,null),i.renderBufferDirect(_,null,V,B,A,null),A.onAfterShadow(i,A,C,_,V,B,null)}}const U=A.children;for(let V=0,W=U.length;V<W;V++)E(U[V],C,_,S,G)}function R(A){A.target.removeEventListener("dispose",R);for(const _ in l){const S=l[_],G=A.target.uuid;G in S&&(S[G].dispose(),delete S[G])}}}function zp(i,e){function t(){let D=!1;const se=new lt;let te=null;const pe=new lt(0,0,0,0);return{setMask:function(J){te!==J&&!D&&(i.colorMask(J,J,J,J),te=J)},setLocked:function(J){D=J},setClear:function(J,X,xe,Ce,nt){nt===!0&&(J*=Ce,X*=Ce,xe*=Ce),se.set(J,X,xe,Ce),pe.equals(se)===!1&&(i.clearColor(J,X,xe,Ce),pe.copy(se))},reset:function(){D=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let D=!1,se=!1,te=null,pe=null,J=null;return{setReversed:function(X){if(se!==X){const xe=e.get("EXT_clip_control");X?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),se=X;const Ce=J;J=null,this.setClear(Ce)}},getReversed:function(){return se},setTest:function(X){X?ne(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(X){te!==X&&!D&&(i.depthMask(X),te=X)},setFunc:function(X){if(se&&(X=gc[X]),pe!==X){switch(X){case gs:i.depthFunc(i.NEVER);break;case _s:i.depthFunc(i.ALWAYS);break;case xs:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case vs:i.depthFunc(i.EQUAL);break;case Ms:i.depthFunc(i.GEQUAL);break;case Ss:i.depthFunc(i.GREATER);break;case Es:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=X}},setLocked:function(X){D=X},setClear:function(X){J!==X&&(J=X,se&&(X=1-X),i.clearDepth(X))},reset:function(){D=!1,te=null,pe=null,J=null,se=!1}}}function r(){let D=!1,se=null,te=null,pe=null,J=null,X=null,xe=null,Ce=null,nt=null;return{setTest:function(Ke){D||(Ke?ne(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(Ke){se!==Ke&&!D&&(i.stencilMask(Ke),se=Ke)},setFunc:function(Ke,hn,un){(te!==Ke||pe!==hn||J!==un)&&(i.stencilFunc(Ke,hn,un),te=Ke,pe=hn,J=un)},setOp:function(Ke,hn,un){(X!==Ke||xe!==hn||Ce!==un)&&(i.stencilOp(Ke,hn,un),X=Ke,xe=hn,Ce=un)},setLocked:function(Ke){D=Ke},setClear:function(Ke){nt!==Ke&&(i.clearStencil(Ke),nt=Ke)},reset:function(){D=!1,se=null,te=null,pe=null,J=null,X=null,xe=null,Ce=null,nt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let f={},p={},h=new WeakMap,g=[],x=null,T=!1,d=null,u=null,M=null,y=null,E=null,R=null,A=null,C=new ze(0,0,0),_=0,S=!1,G=null,w=null,U=null,V=null,W=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,F=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=F>=1):Q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=F>=2);let $=null,he={};const me=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Ue=new lt().fromArray(me),st=new lt().fromArray(fe);function it(D,se,te,pe){const J=new Uint8Array(4),X=i.createTexture();i.bindTexture(D,X),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<te;xe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(se+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return X}const K={};K[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(_i),Fe(!1),ct(Va),ne(i.CULL_FACE),Ye(vn);function ne(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function ae(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function Le(D,se){return p[D]!==se?(i.bindFramebuffer(D,se),p[D]=se,D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=se),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Ae(D,se){let te=g,pe=!1;if(D){te=h.get(se),te===void 0&&(te=[],h.set(se,te));const J=D.textures;if(te.length!==J.length||te[0]!==i.COLOR_ATTACHMENT0){for(let X=0,xe=J.length;X<xe;X++)te[X]=i.COLOR_ATTACHMENT0+X;te.length=J.length,pe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,pe=!0);pe&&i.drawBuffers(te)}function Re(D){return x!==D?(i.useProgram(D),x=D,!0):!1}const gt={[Wn]:i.FUNC_ADD,[zl]:i.FUNC_SUBTRACT,[Vl]:i.FUNC_REVERSE_SUBTRACT};gt[Gl]=i.MIN,gt[Hl]=i.MAX;const He={[kl]:i.ZERO,[Wl]:i.ONE,[Xl]:i.SRC_COLOR,[ps]:i.SRC_ALPHA,[jl]:i.SRC_ALPHA_SATURATE,[Zl]:i.DST_COLOR,[Yl]:i.DST_ALPHA,[ql]:i.ONE_MINUS_SRC_COLOR,[ms]:i.ONE_MINUS_SRC_ALPHA,[$l]:i.ONE_MINUS_DST_COLOR,[Kl]:i.ONE_MINUS_DST_ALPHA,[Jl]:i.CONSTANT_COLOR,[Ql]:i.ONE_MINUS_CONSTANT_COLOR,[ec]:i.CONSTANT_ALPHA,[tc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(D,se,te,pe,J,X,xe,Ce,nt,Ke){if(D===vn){T===!0&&(ae(i.BLEND),T=!1);return}if(T===!1&&(ne(i.BLEND),T=!0),D!==Bl){if(D!==d||Ke!==S){if((u!==Wn||E!==Wn)&&(i.blendEquation(i.FUNC_ADD),u=Wn,E=Wn),Ke)switch(D){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.ONE,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ka:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",D);break}else switch(D){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ha:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ka:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",D);break}M=null,y=null,R=null,A=null,C.set(0,0,0),_=0,d=D,S=Ke}return}J=J||se,X=X||te,xe=xe||pe,(se!==u||J!==E)&&(i.blendEquationSeparate(gt[se],gt[J]),u=se,E=J),(te!==M||pe!==y||X!==R||xe!==A)&&(i.blendFuncSeparate(He[te],He[pe],He[X],He[xe]),M=te,y=pe,R=X,A=xe),(Ce.equals(C)===!1||nt!==_)&&(i.blendColor(Ce.r,Ce.g,Ce.b,nt),C.copy(Ce),_=nt),d=D,S=!1}function Qe(D,se){D.side===_n?ae(i.CULL_FACE):ne(i.CULL_FACE);let te=D.side===Dt;se&&(te=!te),Fe(te),D.blending===mi&&D.transparent===!1?Ye(vn):Ye(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){G!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),G=D)}function ct(D){D!==Nl?(ne(i.CULL_FACE),D!==w&&(D===Va?i.cullFace(i.BACK):D===Fl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),w=D}function P(D){D!==U&&(H&&i.lineWidth(D),U=D)}function ut(D,se,te){D?(ne(i.POLYGON_OFFSET_FILL),(V!==se||W!==te)&&(V=se,W=te,a.getReversed()&&(se=-se),i.polygonOffset(se,te))):ae(i.POLYGON_OFFSET_FILL)}function qe(D){D?ne(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function tt(D){D===void 0&&(D=i.TEXTURE0+B-1),$!==D&&(i.activeTexture(D),$=D)}function Se(D,se,te){te===void 0&&($===null?te=i.TEXTURE0+B-1:te=$);let pe=he[te];pe===void 0&&(pe={type:void 0,texture:void 0},he[te]=pe),(pe.type!==D||pe.texture!==se)&&($!==te&&(i.activeTexture(te),$=te),i.bindTexture(D,se||K[D]),pe.type=D,pe.texture=se)}function b(){const D=he[$];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function m(){try{i.compressedTexImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function Y(){try{i.texSubImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function Z(){try{i.texSubImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function re(){try{i.texStorage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function be(){try{i.texStorage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function we(){try{i.texImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function j(){try{i.texImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function ee(D){Ue.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ue.copy(D))}function _e(D){st.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),st.copy(D))}function ve(D,se){let te=l.get(se);te===void 0&&(te=new WeakMap,l.set(se,te));let pe=te.get(D);pe===void 0&&(pe=i.getUniformBlockIndex(se,D.name),te.set(D,pe))}function ue(D,se){const pe=l.get(se).get(D);c.get(se)!==pe&&(i.uniformBlockBinding(se,pe,D.__bindingPointIndex),c.set(se,pe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},$=null,he={},p={},h=new WeakMap,g=[],x=null,T=!1,d=null,u=null,M=null,y=null,E=null,R=null,A=null,C=new ze(0,0,0),_=0,S=!1,G=null,w=null,U=null,V=null,W=null,Ue.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:ae,bindFramebuffer:Le,drawBuffers:Ae,useProgram:Re,setBlending:Ye,setMaterial:Qe,setFlipSided:Fe,setCullFace:ct,setLineWidth:P,setPolygonOffset:ut,setScissorTest:qe,activeTexture:tt,bindTexture:Se,unbindTexture:b,compressedTexImage2D:m,compressedTexImage3D:L,texImage2D:we,texImage3D:j,updateUBOMapping:ve,uniformBlockBinding:ue,texStorage2D:re,texStorage3D:be,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:ge,scissor:ee,viewport:_e,reset:Oe}}function Vp(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,f=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,m){return g?new OffscreenCanvas(b,m):Sr("canvas")}function T(b,m,L){let Y=1;const Z=Se(b);if((Z.width>L||Z.height>L)&&(Y=L/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(Y*Z.width),ge=Math.floor(Y*Z.height);p===void 0&&(p=x(q,ge));const re=m?x(q,ge):p;return re.width=q,re.height=ge,re.getContext("2d").drawImage(b,0,0,q,ge),Pe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+ge+")."),re}else return"data"in b&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function d(b){return b.generateMipmaps}function u(b){i.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(b,m,L,Y,Z=!1){if(b!==null){if(i[b]!==void 0)return i[b];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=m;if(m===i.RED&&(L===i.FLOAT&&(q=i.R32F),L===i.HALF_FLOAT&&(q=i.R16F),L===i.UNSIGNED_BYTE&&(q=i.R8)),m===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.R8UI),L===i.UNSIGNED_SHORT&&(q=i.R16UI),L===i.UNSIGNED_INT&&(q=i.R32UI),L===i.BYTE&&(q=i.R8I),L===i.SHORT&&(q=i.R16I),L===i.INT&&(q=i.R32I)),m===i.RG&&(L===i.FLOAT&&(q=i.RG32F),L===i.HALF_FLOAT&&(q=i.RG16F),L===i.UNSIGNED_BYTE&&(q=i.RG8)),m===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RG8UI),L===i.UNSIGNED_SHORT&&(q=i.RG16UI),L===i.UNSIGNED_INT&&(q=i.RG32UI),L===i.BYTE&&(q=i.RG8I),L===i.SHORT&&(q=i.RG16I),L===i.INT&&(q=i.RG32I)),m===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RGB8UI),L===i.UNSIGNED_SHORT&&(q=i.RGB16UI),L===i.UNSIGNED_INT&&(q=i.RGB32UI),L===i.BYTE&&(q=i.RGB8I),L===i.SHORT&&(q=i.RGB16I),L===i.INT&&(q=i.RGB32I)),m===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),L===i.UNSIGNED_INT&&(q=i.RGBA32UI),L===i.BYTE&&(q=i.RGBA8I),L===i.SHORT&&(q=i.RGBA16I),L===i.INT&&(q=i.RGBA32I)),m===i.RGB&&(L===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),m===i.RGBA){const ge=Z?Mr:ke.getTransfer(Y);L===i.FLOAT&&(q=i.RGBA32F),L===i.HALF_FLOAT&&(q=i.RGBA16F),L===i.UNSIGNED_BYTE&&(q=ge===Ze?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function E(b,m){let L;return b?m===null||m===ln||m===Fi?L=i.DEPTH24_STENCIL8:m===nn?L=i.DEPTH32F_STENCIL8:m===Ni&&(L=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===ln||m===Fi?L=i.DEPTH_COMPONENT24:m===nn?L=i.DEPTH_COMPONENT32F:m===Ni&&(L=i.DEPTH_COMPONENT16),L}function R(b,m){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==Mt&&b.minFilter!==bt?Math.log2(Math.max(m.width,m.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?m.mipmaps.length:1}function A(b){const m=b.target;m.removeEventListener("dispose",A),_(m),m.isVideoTexture&&f.delete(m)}function C(b){const m=b.target;m.removeEventListener("dispose",C),G(m)}function _(b){const m=n.get(b);if(m.__webglInit===void 0)return;const L=b.source,Y=h.get(L);if(Y){const Z=Y[m.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(b),Object.keys(Y).length===0&&h.delete(L)}n.remove(b)}function S(b){const m=n.get(b);i.deleteTexture(m.__webglTexture);const L=b.source,Y=h.get(L);delete Y[m.__cacheKey],a.memory.textures--}function G(b){const m=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(m.__webglFramebuffer[Y]))for(let Z=0;Z<m.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(m.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(m.__webglFramebuffer[Y]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[Y])}else{if(Array.isArray(m.__webglFramebuffer))for(let Y=0;Y<m.__webglFramebuffer.length;Y++)i.deleteFramebuffer(m.__webglFramebuffer[Y]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let Y=0;Y<m.__webglColorRenderbuffer.length;Y++)m.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[Y]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const L=b.textures;for(let Y=0,Z=L.length;Y<Z;Y++){const q=n.get(L[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(L[Y])}n.remove(b)}let w=0;function U(){w=0}function V(){const b=w;return b>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),w+=1,b}function W(b){const m=[];return m.push(b.wrapS),m.push(b.wrapT),m.push(b.wrapR||0),m.push(b.magFilter),m.push(b.minFilter),m.push(b.anisotropy),m.push(b.internalFormat),m.push(b.format),m.push(b.type),m.push(b.generateMipmaps),m.push(b.premultiplyAlpha),m.push(b.flipY),m.push(b.unpackAlignment),m.push(b.colorSpace),m.join()}function B(b,m){const L=n.get(b);if(b.isVideoTexture&&qe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&L.__version!==b.version){const Y=b.image;if(Y===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{K(L,b,m);return}}else b.isExternalTexture&&(L.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+m)}function H(b,m){const L=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){K(L,b,m);return}else b.isExternalTexture&&(L.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+m)}function F(b,m){const L=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){K(L,b,m);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+m)}function Q(b,m){const L=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&L.__version!==b.version){ne(L,b,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+m)}const $={[ys]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[Ts]:i.MIRRORED_REPEAT},he={[Mt]:i.NEAREST,[rc]:i.NEAREST_MIPMAP_NEAREST,[Xi]:i.NEAREST_MIPMAP_LINEAR,[bt]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},me={[oc]:i.NEVER,[fc]:i.ALWAYS,[lc]:i.LESS,[xa]:i.LEQUAL,[cc]:i.EQUAL,[va]:i.GEQUAL,[hc]:i.GREATER,[uc]:i.NOTEQUAL};function fe(b,m){if(m.type===nn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===bt||m.magFilter===Ur||m.magFilter===Xi||m.magFilter===Yn||m.minFilter===bt||m.minFilter===Ur||m.minFilter===Xi||m.minFilter===Yn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,$[m.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,$[m.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,$[m.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,he[m.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,he[m.minFilter]),m.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,me[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Mt||m.minFilter!==Xi&&m.minFilter!==Yn||m.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Ue(b,m){let L=!1;b.__webglInit===void 0&&(b.__webglInit=!0,m.addEventListener("dispose",A));const Y=m.source;let Z=h.get(Y);Z===void 0&&(Z={},h.set(Y,Z));const q=W(m);if(q!==b.__cacheKey){Z[q]===void 0&&(Z[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),Z[q].usedTimes++;const ge=Z[b.__cacheKey];ge!==void 0&&(Z[b.__cacheKey].usedTimes--,ge.usedTimes===0&&S(m)),b.__cacheKey=q,b.__webglTexture=Z[q].texture}return L}function st(b,m,L){return Math.floor(Math.floor(b/L)/m)}function it(b,m,L,Y){const q=b.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,L,Y,m.data);else{q.sort((j,ee)=>j.start-ee.start);let ge=0;for(let j=1;j<q.length;j++){const ee=q[ge],_e=q[j],ve=ee.start+ee.count,ue=st(_e.start,m.width,4),Oe=st(ee.start,m.width,4);_e.start<=ve+1&&ue===Oe&&st(_e.start+_e.count-1,m.width,4)===ue?ee.count=Math.max(ee.count,_e.start+_e.count-ee.start):(++ge,q[ge]=_e)}q.length=ge+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let j=0,ee=q.length;j<ee;j++){const _e=q[j],ve=Math.floor(_e.start/4),ue=Math.ceil(_e.count/4),Oe=ve%m.width,D=Math.floor(ve/m.width),se=ue,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Oe,D,se,te,L,Y,m.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function K(b,m,L){let Y=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=Ue(b,m),q=m.source;t.bindTexture(Y,b.__webglTexture,i.TEXTURE0+L);const ge=n.get(q);if(q.version!==ge.__version||Z===!0){t.activeTexture(i.TEXTURE0+L);const re=ke.getPrimaries(ke.workingColorSpace),be=m.colorSpace===Dn?null:ke.getPrimaries(m.colorSpace),we=m.colorSpace===Dn||re===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let j=T(m.image,!1,r.maxTextureSize);j=tt(m,j);const ee=s.convert(m.format,m.colorSpace),_e=s.convert(m.type);let ve=y(m.internalFormat,ee,_e,m.colorSpace,m.isVideoTexture);fe(Y,m);let ue;const Oe=m.mipmaps,D=m.isVideoTexture!==!0,se=ge.__version===void 0||Z===!0,te=q.dataReady,pe=R(m,j);if(m.isDepthTexture)ve=E(m.format===Kn,m.type),se&&(D?t.texStorage2D(i.TEXTURE_2D,1,ve,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ve,j.width,j.height,0,ee,_e,null));else if(m.isDataTexture)if(Oe.length>0){D&&se&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Oe[0].width,Oe[0].height);for(let J=0,X=Oe.length;J<X;J++)ue=Oe[J],D?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ue.width,ue.height,ee,_e,ue.data):t.texImage2D(i.TEXTURE_2D,J,ve,ue.width,ue.height,0,ee,_e,ue.data);m.generateMipmaps=!1}else D?(se&&t.texStorage2D(i.TEXTURE_2D,pe,ve,j.width,j.height),te&&it(m,j,ee,_e)):t.texImage2D(i.TEXTURE_2D,0,ve,j.width,j.height,0,ee,_e,j.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){D&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,Oe[0].width,Oe[0].height,j.depth);for(let J=0,X=Oe.length;J<X;J++)if(ue=Oe[J],m.format!==Zt)if(ee!==null)if(D){if(te)if(m.layerUpdates.size>0){const xe=po(ue.width,ue.height,m.format,m.type);for(const Ce of m.layerUpdates){const nt=ue.data.subarray(Ce*xe/ue.data.BYTES_PER_ELEMENT,(Ce+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Ce,ue.width,ue.height,1,ee,nt)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,j.depth,ee,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ve,ue.width,ue.height,j.depth,0,ue.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,j.depth,ee,_e,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ve,ue.width,ue.height,j.depth,0,ee,_e,ue.data)}else{D&&se&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Oe[0].width,Oe[0].height);for(let J=0,X=Oe.length;J<X;J++)ue=Oe[J],m.format!==Zt?ee!==null?D?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ue.width,ue.height,ee,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ve,ue.width,ue.height,0,ue.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ue.width,ue.height,ee,_e,ue.data):t.texImage2D(i.TEXTURE_2D,J,ve,ue.width,ue.height,0,ee,_e,ue.data)}else if(m.isDataArrayTexture)if(D){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,j.width,j.height,j.depth),te)if(m.layerUpdates.size>0){const J=po(j.width,j.height,m.format,m.type);for(const X of m.layerUpdates){const xe=j.data.subarray(X*J/j.data.BYTES_PER_ELEMENT,(X+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,j.width,j.height,1,ee,_e,xe)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ee,_e,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,j.width,j.height,j.depth,0,ee,_e,j.data);else if(m.isData3DTexture)D?(se&&t.texStorage3D(i.TEXTURE_3D,pe,ve,j.width,j.height,j.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ee,_e,j.data)):t.texImage3D(i.TEXTURE_3D,0,ve,j.width,j.height,j.depth,0,ee,_e,j.data);else if(m.isFramebufferTexture){if(se)if(D)t.texStorage2D(i.TEXTURE_2D,pe,ve,j.width,j.height);else{let J=j.width,X=j.height;for(let xe=0;xe<pe;xe++)t.texImage2D(i.TEXTURE_2D,xe,ve,J,X,0,ee,_e,null),J>>=1,X>>=1}}else if(Oe.length>0){if(D&&se){const J=Se(Oe[0]);t.texStorage2D(i.TEXTURE_2D,pe,ve,J.width,J.height)}for(let J=0,X=Oe.length;J<X;J++)ue=Oe[J],D?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ee,_e,ue):t.texImage2D(i.TEXTURE_2D,J,ve,ee,_e,ue);m.generateMipmaps=!1}else if(D){if(se){const J=Se(j);t.texStorage2D(i.TEXTURE_2D,pe,ve,J.width,J.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,_e,j)}else t.texImage2D(i.TEXTURE_2D,0,ve,ee,_e,j);d(m)&&u(Y),ge.__version=q.version,m.onUpdate&&m.onUpdate(m)}b.__version=m.version}function ne(b,m,L){if(m.image.length!==6)return;const Y=Ue(b,m),Z=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+L);const q=n.get(Z);if(Z.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+L);const ge=ke.getPrimaries(ke.workingColorSpace),re=m.colorSpace===Dn?null:ke.getPrimaries(m.colorSpace),be=m.colorSpace===Dn||ge===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const we=m.isCompressedTexture||m.image[0].isCompressedTexture,j=m.image[0]&&m.image[0].isDataTexture,ee=[];for(let X=0;X<6;X++)!we&&!j?ee[X]=T(m.image[X],!0,r.maxCubemapSize):ee[X]=j?m.image[X].image:m.image[X],ee[X]=tt(m,ee[X]);const _e=ee[0],ve=s.convert(m.format,m.colorSpace),ue=s.convert(m.type),Oe=y(m.internalFormat,ve,ue,m.colorSpace),D=m.isVideoTexture!==!0,se=q.__version===void 0||Y===!0,te=Z.dataReady;let pe=R(m,_e);fe(i.TEXTURE_CUBE_MAP,m);let J;if(we){D&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Oe,_e.width,_e.height);for(let X=0;X<6;X++){J=ee[X].mipmaps;for(let xe=0;xe<J.length;xe++){const Ce=J[xe];m.format!==Zt?ve!==null?D?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,0,0,Ce.width,Ce.height,ve,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,Oe,Ce.width,Ce.height,0,Ce.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,0,0,Ce.width,Ce.height,ve,ue,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,Oe,Ce.width,Ce.height,0,ve,ue,Ce.data)}}}else{if(J=m.mipmaps,D&&se){J.length>0&&pe++;const X=Se(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Oe,X.width,X.height)}for(let X=0;X<6;X++)if(j){D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ee[X].width,ee[X].height,ve,ue,ee[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Oe,ee[X].width,ee[X].height,0,ve,ue,ee[X].data);for(let xe=0;xe<J.length;xe++){const nt=J[xe].image[X].image;D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,0,0,nt.width,nt.height,ve,ue,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,Oe,nt.width,nt.height,0,ve,ue,nt.data)}}else{D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ve,ue,ee[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Oe,ve,ue,ee[X]);for(let xe=0;xe<J.length;xe++){const Ce=J[xe];D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,0,0,ve,ue,Ce.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,Oe,ve,ue,Ce.image[X])}}}d(m)&&u(i.TEXTURE_CUBE_MAP),q.__version=Z.version,m.onUpdate&&m.onUpdate(m)}b.__version=m.version}function ae(b,m,L,Y,Z,q){const ge=s.convert(L.format,L.colorSpace),re=s.convert(L.type),be=y(L.internalFormat,ge,re,L.colorSpace),we=n.get(m),j=n.get(L);if(j.__renderTarget=m,!we.__hasExternalTextures){const ee=Math.max(1,m.width>>q),_e=Math.max(1,m.height>>q);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,be,ee,_e,m.depth,0,ge,re,null):t.texImage2D(Z,q,be,ee,_e,0,ge,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ut(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,j.__webglTexture,0,P(m)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,j.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(b,m,L){if(i.bindRenderbuffer(i.RENDERBUFFER,b),m.depthBuffer){const Y=m.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,q=E(m.stencilBuffer,Z),ge=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(m),q,m.width,m.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(m),q,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,q,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,b)}else{const Y=m.textures;for(let Z=0;Z<Y.length;Z++){const q=Y[Z],ge=s.convert(q.format,q.colorSpace),re=s.convert(q.type),be=y(q.internalFormat,ge,re,q.colorSpace);ut(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(m),be,m.width,m.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(m),be,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,be,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(b,m,L){const Y=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(m.depthTexture);if(Z.__renderTarget=m,(!Z.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,m.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),fe(i.TEXTURE_CUBE_MAP,m.depthTexture);const we=s.convert(m.depthTexture.format),j=s.convert(m.depthTexture.type);let ee;m.depthTexture.format===En?ee=i.DEPTH_COMPONENT24:m.depthTexture.format===Kn&&(ee=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ee,m.width,m.height,0,we,j,null)}}else B(m.depthTexture,0);const q=Z.__webglTexture,ge=P(m),re=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,be=m.depthTexture.format===Kn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===En)ut(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,re,q,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,be,re,q,0);else if(m.depthTexture.format===Kn)ut(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,re,q,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,be,re,q,0);else throw new Error("Unknown depthTexture format")}function Re(b){const m=n.get(b),L=b.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),Y){const Z=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),m.__depthDisposeCallback=Z}m.__boundDepthTexture=Y}if(b.depthTexture&&!m.__autoAllocateDepthBuffer)if(L)for(let Y=0;Y<6;Y++)Ae(m.__webglFramebuffer[Y],b,Y);else{const Y=b.texture.mipmaps;Y&&Y.length>0?Ae(m.__webglFramebuffer[0],b,0):Ae(m.__webglFramebuffer,b,0)}else if(L){m.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[Y]),m.__webglDepthbuffer[Y]===void 0)m.__webglDepthbuffer[Y]=i.createRenderbuffer(),Le(m.__webglDepthbuffer[Y],b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=m.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,q)}}else{const Y=b.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),Le(m.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(b,m,L){const Y=n.get(b);m!==void 0&&ae(Y.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Re(b)}function He(b){const m=b.texture,L=n.get(b),Y=n.get(m);b.addEventListener("dispose",C);const Z=b.textures,q=b.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=m.version,a.memory.textures++),q){L.__webglFramebuffer=[];for(let re=0;re<6;re++)if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer[re]=[];for(let be=0;be<m.mipmaps.length;be++)L.__webglFramebuffer[re][be]=i.createFramebuffer()}else L.__webglFramebuffer[re]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer=[];for(let re=0;re<m.mipmaps.length;re++)L.__webglFramebuffer[re]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ge)for(let re=0,be=Z.length;re<be;re++){const we=n.get(Z[re]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&ut(b)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const be=Z[re];L.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[re]);const we=s.convert(be.format,be.colorSpace),j=s.convert(be.type),ee=y(be.internalFormat,we,j,be.colorSpace,b.isXRRenderTarget===!0),_e=P(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ee,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,L.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(L.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),fe(i.TEXTURE_CUBE_MAP,m);for(let re=0;re<6;re++)if(m.mipmaps&&m.mipmaps.length>0)for(let be=0;be<m.mipmaps.length;be++)ae(L.__webglFramebuffer[re][be],b,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,be);else ae(L.__webglFramebuffer[re],b,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);d(m)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,be=Z.length;re<be;re++){const we=Z[re],j=n.get(we);let ee=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ee=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,j.__webglTexture),fe(ee,we),ae(L.__webglFramebuffer,b,we,i.COLOR_ATTACHMENT0+re,ee,0),d(we)&&u(ee)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(re=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),fe(re,m),m.mipmaps&&m.mipmaps.length>0)for(let be=0;be<m.mipmaps.length;be++)ae(L.__webglFramebuffer[be],b,m,i.COLOR_ATTACHMENT0,re,be);else ae(L.__webglFramebuffer,b,m,i.COLOR_ATTACHMENT0,re,0);d(m)&&u(re),t.unbindTexture()}b.depthBuffer&&Re(b)}function Ye(b){const m=b.textures;for(let L=0,Y=m.length;L<Y;L++){const Z=m[L];if(d(Z)){const q=M(b),ge=n.get(Z).__webglTexture;t.bindTexture(q,ge),u(q),t.unbindTexture()}}}const Qe=[],Fe=[];function ct(b){if(b.samples>0){if(ut(b)===!1){const m=b.textures,L=b.width,Y=b.height;let Z=i.COLOR_BUFFER_BIT;const q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(b),re=m.length>1;if(re)for(let we=0;we<m.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const be=b.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let we=0;we<m.length;we++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[we]);const j=n.get(m[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,L,Y,0,0,L,Y,Z,i.NEAREST),c===!0&&(Qe.length=0,Fe.length=0,Qe.push(i.COLOR_ATTACHMENT0+we),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Qe.push(q),Fe.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let we=0;we<m.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,ge.__webglColorRenderbuffer[we]);const j=n.get(m[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,j,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const m=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function P(b){return Math.min(r.maxSamples,b.samples)}function ut(b){const m=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function qe(b){const m=a.render.frame;f.get(b)!==m&&(f.set(b,m),b.update())}function tt(b,m){const L=b.colorSpace,Y=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||L!==Mi&&L!==Dn&&(ke.getTransfer(L)===Ze?(Y!==Zt||Z!==Ft)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",L)),m}function Se(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=F,this.setTextureCube=Q,this.rebindTextures=gt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Gp(i,e){function t(n,r=Dn){let s;const a=ke.getTransfer(r);if(n===Ft)return i.UNSIGNED_BYTE;if(n===fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nl)return i.BYTE;if(n===il)return i.SHORT;if(n===Ni)return i.UNSIGNED_SHORT;if(n===ua)return i.INT;if(n===ln)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===al)return i.ALPHA;if(n===ol)return i.RGB;if(n===Zt)return i.RGBA;if(n===En)return i.DEPTH_COMPONENT;if(n===Kn)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===pa)return i.RED_INTEGER;if(n===vi)return i.RG;if(n===ma)return i.RG_INTEGER;if(n===ga)return i.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===_r)if(a===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===pr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===pr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bs||n===As||n===ws||n===Rs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===As)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ws)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cs||n===Ps||n===Ds||n===Ls||n===Is||n===Us||n===Ns)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Cs||n===Ps)return a===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ds)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ls)return s.COMPRESSED_R11_EAC;if(n===Is)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Us)return s.COMPRESSED_RG11_EAC;if(n===Ns)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fs||n===Os||n===Bs||n===zs||n===Vs||n===Gs||n===Hs||n===ks||n===Ws||n===Xs||n===qs||n===Ys||n===Ks||n===Zs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Os)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ks)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ws)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ys)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ks)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$s||n===js||n===Js)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$s)return a===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===js)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Js)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qs||n===ea||n===ta||n===na)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ea)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Hp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new _l(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cn({vertexShader:Hp,fragmentShader:kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xp extends Ei{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,p=null,h=null,g=null,x=null;const T=typeof XRWebGLBinding<"u",d=new Wp,u={},M=t.getContextAttributes();let y=null,E=null;const R=[],A=[],C=new Ve;let _=null;const S=new Ht;S.viewport=new lt;const G=new Ht;G.viewport=new lt;const w=[S,G],U=new nh;let V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=R[K];return ne===void 0&&(ne=new Hr,R[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=R[K];return ne===void 0&&(ne=new Hr,R[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=R[K];return ne===void 0&&(ne=new Hr,R[K]=ne),ne.getHandSpace()};function B(K){const ne=A.indexOf(K.inputSource);if(ne===-1)return;const ae=R[ne];ae!==void 0&&(ae.update(K.inputSource,K.frame,l||a),ae.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",F);for(let K=0;K<R.length;K++){const ne=A[K];ne!==null&&(A[K]=null,R[K].disconnect(ne))}V=null,W=null,d.reset();for(const K in u)delete u[K];e.setRenderTarget(y),g=null,h=null,p=null,r=null,E=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",H),r.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Le=null,Ae=null;M.depth&&(Ae=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=M.stencil?Kn:En,Le=M.stencil?Fi:ln);const Re={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};p=this.getBinding(),h=p.createProjectionLayer(Re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new an(h.textureWidth,h.textureHeight,{format:Zt,type:Ft,depthTexture:new Bi(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new an(g.framebufferWidth,g.framebufferHeight,{format:Zt,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function F(K){for(let ne=0;ne<K.removed.length;ne++){const ae=K.removed[ne],Le=A.indexOf(ae);Le>=0&&(A[Le]=null,R[Le].disconnect(ae))}for(let ne=0;ne<K.added.length;ne++){const ae=K.added[ne];let Le=A.indexOf(ae);if(Le===-1){for(let Re=0;Re<R.length;Re++)if(Re>=A.length){A.push(ae),Le=Re;break}else if(A[Re]===null){A[Re]=ae,Le=Re;break}if(Le===-1)break}const Ae=R[Le];Ae&&Ae.connect(ae)}}const Q=new N,$=new N;function he(K,ne,ae){Q.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(ae.matrixWorld);const Le=Q.distanceTo($),Ae=ne.projectionMatrix.elements,Re=ae.projectionMatrix.elements,gt=Ae[14]/(Ae[10]-1),He=Ae[14]/(Ae[10]+1),Ye=(Ae[9]+1)/Ae[5],Qe=(Ae[9]-1)/Ae[5],Fe=(Ae[8]-1)/Ae[0],ct=(Re[8]+1)/Re[0],P=gt*Fe,ut=gt*ct,qe=Le/(-Fe+ct),tt=qe*-Fe;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(tt),K.translateZ(qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Se=gt+qe,b=He+qe,m=P-tt,L=ut+(Le-tt),Y=Ye*He/b*Se,Z=Qe*He/b*Se;K.projectionMatrix.makePerspective(m,L,Y,Z,Se,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function me(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,ae=K.far;d.texture!==null&&(d.depthNear>0&&(ne=d.depthNear),d.depthFar>0&&(ae=d.depthFar)),U.near=G.near=S.near=ne,U.far=G.far=S.far=ae,(V!==U.near||W!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,W=U.far),U.layers.mask=K.layers.mask|6,S.layers.mask=U.layers.mask&-5,G.layers.mask=U.layers.mask&-3;const Le=K.parent,Ae=U.cameras;me(U,Le);for(let Re=0;Re<Ae.length;Re++)me(Ae[Re],Le);Ae.length===2?he(U,S,G):U.projectionMatrix.copy(S.projectionMatrix),fe(K,U,Le)};function fe(K,ne,ae){ae===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ia*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(U)},this.getCameraTexture=function(K){return u[K]};let Ue=null;function st(K,ne){if(f=ne.getViewerPose(l||a),x=ne,f!==null){const ae=f.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let Le=!1;ae.length!==U.cameras.length&&(U.cameras.length=0,Le=!0);for(let He=0;He<ae.length;He++){const Ye=ae[He];let Qe=null;if(g!==null)Qe=g.getViewport(Ye);else{const ct=p.getViewSubImage(h,Ye);Qe=ct.viewport,He===0&&(e.setRenderTargetTextures(E,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(E))}let Fe=w[He];Fe===void 0&&(Fe=new Ht,Fe.layers.enable(He),Fe.viewport=new lt,w[He]=Fe),Fe.matrix.fromArray(Ye.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ye.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),He===0&&(U.matrix.copy(Fe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Le===!0&&U.cameras.push(Fe)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){p=n.getBinding();const He=p.getDepthInformation(ae[0]);He&&He.isValid&&He.texture&&d.init(He,r.renderState)}if(Ae&&Ae.includes("camera-access")&&T){e.state.unbindTexture(),p=n.getBinding();for(let He=0;He<ae.length;He++){const Ye=ae[He].camera;if(Ye){let Qe=u[Ye];Qe||(Qe=new _l,u[Ye]=Qe);const Fe=p.getCameraImage(Ye);Qe.sourceTexture=Fe}}}}for(let ae=0;ae<R.length;ae++){const Le=A[ae],Ae=R[ae];Le!==null&&Ae!==void 0&&Ae.update(Le,ne,l||a)}Ue&&Ue(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),x=null}const it=new Ml;it.setAnimationLoop(st),this.setAnimationLoop=function(K){Ue=K},this.dispose=function(){}}}const Hn=new $t,qp=new rt;function Yp(i,e){function t(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,xl(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function r(d,u,M,y,E){u.isMeshBasicMaterial?s(d,u):u.isMeshLambertMaterial?(s(d,u),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(d,u),p(d,u)):u.isMeshPhongMaterial?(s(d,u),f(d,u),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(d,u),h(d,u),u.isMeshPhysicalMaterial&&g(d,u,E)):u.isMeshMatcapMaterial?(s(d,u),x(d,u)):u.isMeshDepthMaterial?s(d,u):u.isMeshDistanceMaterial?(s(d,u),T(d,u)):u.isMeshNormalMaterial?s(d,u):u.isLineBasicMaterial?(a(d,u),u.isLineDashedMaterial&&o(d,u)):u.isPointsMaterial?c(d,u,M,y):u.isSpriteMaterial?l(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,t(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===Dt&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,t(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===Dt&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,t(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,t(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const M=e.get(u),y=M.envMap,E=M.envMapRotation;y&&(d.envMap.value=y,Hn.copy(E),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),d.envMapRotation.value.setFromMatrix4(qp.makeRotationFromEuler(Hn)),d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,d.aoMapTransform))}function a(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform))}function o(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function c(d,u,M,y){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*M,d.scale.value=y*.5,u.map&&(d.map.value=u.map,t(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function l(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function f(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function p(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function h(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function g(d,u,M){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Dt&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,u){u.matcap&&(d.matcap.value=u.matcap)}function T(d,u){const M=e.get(u).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Kp(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const E=y.program;n.uniformBlockBinding(M,E)}function l(M,y){let E=r[M.id];E===void 0&&(x(M),E=f(M),r[M.id]=E,M.addEventListener("dispose",d));const R=y.program;n.updateUBOMapping(M,R);const A=e.render.frame;s[M.id]!==A&&(h(M),s[M.id]=A)}function f(M){const y=p();M.__bindingPointIndex=y;const E=i.createBuffer(),R=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=r[M.id],E=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,C=E.length;A<C;A++){const _=Array.isArray(E[A])?E[A]:[E[A]];for(let S=0,G=_.length;S<G;S++){const w=_[S];if(g(w,A,S,R)===!0){const U=w.__offset,V=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let B=0;B<V.length;B++){const H=V[B],F=T(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,U+W,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,y,E,R){const A=M.value,C=y+"_"+E;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const _=R[C];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return R[C]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function x(M){const y=M.uniforms;let E=0;const R=16;for(let C=0,_=y.length;C<_;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let G=0,w=S.length;G<w;G++){const U=S[G],V=Array.isArray(U.value)?U.value:[U.value];for(let W=0,B=V.length;W<B;W++){const H=V[W],F=T(H),Q=E%R,$=Q%F.boundary,he=Q+$;E+=$,he!==0&&R-he<F.storage&&(E+=R-he),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=F.storage}}}const A=E%R;return A>0&&(E+=R-A),M.__size=E,M.__cache={},this}function T(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",M),y}function d(M){const y=M.target;y.removeEventListener("dispose",d);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}const Zp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let en=null;function $p(){return en===null&&(en=new Bc(Zp,16,16,vi,Sn),en.name="DFG_LUT",en.minFilter=bt,en.magFilter=bt,en.wrapS=xn,en.wrapT=xn,en.generateMipmaps=!1,en.needsUpdate=!0),en}class jp{constructor(e={}){const{canvas:t=pc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:g=Ft}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const T=g,d=new Set([ga,ma,pa]),u=new Set([Ft,ln,Ni,Fi,fa,da]),M=new Uint32Array(4),y=new Int32Array(4);let E=null,R=null;const A=[],C=[];let _=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let G=!1;this._outputColorSpace=Nt;let w=0,U=0,V=null,W=-1,B=null;const H=new lt,F=new lt;let Q=null;const $=new ze(0);let he=0,me=t.width,fe=t.height,Ue=1,st=null,it=null;const K=new lt(0,0,me,fe),ne=new lt(0,0,me,fe);let ae=!1;const Le=new ya;let Ae=!1,Re=!1;const gt=new rt,He=new N,Ye=new lt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ct(){return V===null?Ue:1}let P=n;function ut(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ha}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",nt,!1),P===null){const I="webgl2";if(P=ut(I,v),P===null)throw ut(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw Xe("WebGLRenderer: "+v.message),v}let qe,tt,Se,b,m,L,Y,Z,q,ge,re,be,we,j,ee,_e,ve,ue,Oe,D,se,te,pe;function J(){qe=new jf(P),qe.init(),se=new Gp(P,qe),tt=new kf(P,qe,e,se),Se=new zp(P,qe),tt.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),b=new ed(P),m=new bp,L=new Vp(P,qe,Se,m,tt,se,b),Y=new $f(S),Z=new rh(P),te=new Gf(P,Z),q=new Jf(P,Z,b,te),ge=new nd(P,q,Z,te,b),ue=new td(P,tt,L),ee=new Wf(m),re=new Tp(S,Y,qe,tt,te,ee),be=new Yp(S,m),we=new wp,j=new Ip(qe),ve=new Vf(S,Y,Se,ge,x,c),_e=new Bp(S,ge,tt),pe=new Kp(P,b,tt,Se),Oe=new Hf(P,qe,b),D=new Qf(P,qe,b),b.programs=re.programs,S.capabilities=tt,S.extensions=qe,S.properties=m,S.renderLists=we,S.shadowMap=_e,S.state=Se,S.info=b}J(),T!==Ft&&(_=new rd(T,t.width,t.height,r,s));const X=new Xp(S,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const v=qe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=qe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(v){v!==void 0&&(Ue=v,this.setSize(me,fe,!1))},this.getSize=function(v){return v.set(me,fe)},this.setSize=function(v,I,k=!0){if(X.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}me=v,fe=I,t.width=Math.floor(v*Ue),t.height=Math.floor(I*Ue),k===!0&&(t.style.width=v+"px",t.style.height=I+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(me*Ue,fe*Ue).floor()},this.setDrawingBufferSize=function(v,I,k){me=v,fe=I,Ue=k,t.width=Math.floor(v*k),t.height=Math.floor(I*k),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(T===Ft){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(H)},this.getViewport=function(v){return v.copy(K)},this.setViewport=function(v,I,k,z){v.isVector4?K.set(v.x,v.y,v.z,v.w):K.set(v,I,k,z),Se.viewport(H.copy(K).multiplyScalar(Ue).round())},this.getScissor=function(v){return v.copy(ne)},this.setScissor=function(v,I,k,z){v.isVector4?ne.set(v.x,v.y,v.z,v.w):ne.set(v,I,k,z),Se.scissor(F.copy(ne).multiplyScalar(Ue).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(v){Se.setScissorTest(ae=v)},this.setOpaqueSort=function(v){st=v},this.setTransparentSort=function(v){it=v},this.getClearColor=function(v){return v.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,k=!0){let z=0;if(v){let O=!1;if(V!==null){const le=V.texture.format;O=d.has(le)}if(O){const le=V.texture.type,de=u.has(le),ce=ve.getClearColor(),Me=ve.getClearAlpha(),ye=ce.r,De=ce.g,Be=ce.b;de?(M[0]=ye,M[1]=De,M[2]=Be,M[3]=Me,P.clearBufferuiv(P.COLOR,0,M)):(y[0]=ye,y[1]=De,y[2]=Be,y[3]=Me,P.clearBufferiv(P.COLOR,0,y))}else z|=P.COLOR_BUFFER_BIT}I&&(z|=P.DEPTH_BUFFER_BIT),k&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),ve.dispose(),we.dispose(),j.dispose(),m.dispose(),Y.dispose(),ge.dispose(),te.dispose(),pe.dispose(),re.dispose(),X.dispose(),X.removeEventListener("sessionstart",La),X.removeEventListener("sessionend",Ia),Nn.stop()};function xe(v){v.preventDefault(),Ka("WebGLRenderer: Context Lost."),G=!0}function Ce(){Ka("WebGLRenderer: Context Restored."),G=!1;const v=b.autoReset,I=_e.enabled,k=_e.autoUpdate,z=_e.needsUpdate,O=_e.type;J(),b.autoReset=v,_e.enabled=I,_e.autoUpdate=k,_e.needsUpdate=z,_e.type=O}function nt(v){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ke(v){const I=v.target;I.removeEventListener("dispose",Ke),hn(I)}function hn(v){un(v),m.remove(v)}function un(v){const I=m.get(v).programs;I!==void 0&&(I.forEach(function(k){re.releaseProgram(k)}),v.isShaderMaterial&&re.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,k,z,O,le){I===null&&(I=Qe);const de=O.isMesh&&O.matrixWorld.determinant()<0,ce=Cl(v,I,k,z,O);Se.setMaterial(z,de);let Me=k.index,ye=1;if(z.wireframe===!0){if(Me=q.getWireframeAttribute(k),Me===void 0)return;ye=2}const De=k.drawRange,Be=k.attributes.position;let Te=De.start*ye,$e=(De.start+De.count)*ye;le!==null&&(Te=Math.max(Te,le.start*ye),$e=Math.min($e,(le.start+le.count)*ye)),Me!==null?(Te=Math.max(Te,0),$e=Math.min($e,Me.count)):Be!=null&&(Te=Math.max(Te,0),$e=Math.min($e,Be.count));const ht=$e-Te;if(ht<0||ht===1/0)return;te.setup(O,z,ce,k,Me);let ot,je=Oe;if(Me!==null&&(ot=Z.get(Me),je=D,je.setIndex(ot)),O.isMesh)z.wireframe===!0?(Se.setLineWidth(z.wireframeLinewidth*ct()),je.setMode(P.LINES)):je.setMode(P.TRIANGLES);else if(O.isLine){let Et=z.linewidth;Et===void 0&&(Et=1),Se.setLineWidth(Et*ct()),O.isLineSegments?je.setMode(P.LINES):O.isLineLoop?je.setMode(P.LINE_LOOP):je.setMode(P.LINE_STRIP)}else O.isPoints?je.setMode(P.POINTS):O.isSprite&&je.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Er("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Et=O._multiDrawStarts,Ee=O._multiDrawCounts,Lt=O._multiDrawCount,We=Me?Z.get(Me).bytesPerElement:1,Wt=m.get(z).currentProgram.getUniforms();for(let Jt=0;Jt<Lt;Jt++)Wt.setValue(P,"_gl_DrawID",Jt),je.render(Et[Jt]/We,Ee[Jt])}else if(O.isInstancedMesh)je.renderInstances(Te,ht,O.count);else if(k.isInstancedBufferGeometry){const Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ee=Math.min(k.instanceCount,Et);je.renderInstances(Te,ht,Ee)}else je.render(Te,ht)};function Da(v,I,k){v.transparent===!0&&v.side===_n&&v.forceSinglePass===!1?(v.side=Dt,v.needsUpdate=!0,Wi(v,I,k),v.side=Un,v.needsUpdate=!0,Wi(v,I,k),v.side=_n):Wi(v,I,k)}this.compile=function(v,I,k=null){k===null&&(k=v),R=j.get(k),R.init(I),C.push(R),k.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(R.pushLight(O),O.castShadow&&R.pushShadow(O))}),v!==k&&v.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(R.pushLight(O),O.castShadow&&R.pushShadow(O))}),R.setupLights();const z=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const le=O.material;if(le)if(Array.isArray(le))for(let de=0;de<le.length;de++){const ce=le[de];Da(ce,k,O),z.add(ce)}else Da(le,k,O),z.add(le)}),R=C.pop(),z},this.compileAsync=function(v,I,k=null){const z=this.compile(v,I,k);return new Promise(O=>{function le(){if(z.forEach(function(de){m.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){O(v);return}setTimeout(le,10)}qe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Pr=null;function Rl(v){Pr&&Pr(v)}function La(){Nn.stop()}function Ia(){Nn.start()}const Nn=new Ml;Nn.setAnimationLoop(Rl),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(v){Pr=v,X.setAnimationLoop(v),v===null?Nn.stop():Nn.start()},X.addEventListener("sessionstart",La),X.addEventListener("sessionend",Ia),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;const k=X.enabled===!0&&X.isPresenting===!0,z=_!==null&&(V===null||k)&&_.begin(S,V);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,I,V),R=j.get(v,C.length),R.init(I),C.push(R),gt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Le.setFromProjectionMatrix(gt,rn,I.reversedDepth),Re=this.localClippingEnabled,Ae=ee.init(this.clippingPlanes,Re),E=we.get(v,A.length),E.init(),A.push(E),X.enabled===!0&&X.isPresenting===!0){const de=S.xr.getDepthSensingMesh();de!==null&&Dr(de,I,-1/0,S.sortObjects)}Dr(v,I,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(st,it),Fe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Fe&&ve.addToRenderList(E,v),this.info.render.frame++,Ae===!0&&ee.beginShadows();const O=R.state.shadowsArray;if(_e.render(O,v,I),Ae===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&_.hasRenderPass())===!1){const de=E.opaque,ce=E.transmissive;if(R.setupLights(),I.isArrayCamera){const Me=I.cameras;if(ce.length>0)for(let ye=0,De=Me.length;ye<De;ye++){const Be=Me[ye];Na(de,ce,v,Be)}Fe&&ve.render(v);for(let ye=0,De=Me.length;ye<De;ye++){const Be=Me[ye];Ua(E,v,Be,Be.viewport)}}else ce.length>0&&Na(de,ce,v,I),Fe&&ve.render(v),Ua(E,v,I)}V!==null&&U===0&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),z&&_.end(S),v.isScene===!0&&v.onAfterRender(S,v,I),te.resetDefaultState(),W=-1,B=null,C.pop(),C.length>0?(R=C[C.length-1],Ae===!0&&ee.setGlobalState(S.clippingPlanes,R.state.camera)):R=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function Dr(v,I,k,z){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)R.pushLight(v),v.castShadow&&R.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Le.intersectsSprite(v)){z&&Ye.setFromMatrixPosition(v.matrixWorld).applyMatrix4(gt);const de=ge.update(v),ce=v.material;ce.visible&&E.push(v,de,ce,k,Ye.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Le.intersectsObject(v))){const de=ge.update(v),ce=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ye.copy(v.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ye.copy(de.boundingSphere.center)),Ye.applyMatrix4(v.matrixWorld).applyMatrix4(gt)),Array.isArray(ce)){const Me=de.groups;for(let ye=0,De=Me.length;ye<De;ye++){const Be=Me[ye],Te=ce[Be.materialIndex];Te&&Te.visible&&E.push(v,de,Te,k,Ye.z,Be)}}else ce.visible&&E.push(v,de,ce,k,Ye.z,null)}}const le=v.children;for(let de=0,ce=le.length;de<ce;de++)Dr(le[de],I,k,z)}function Ua(v,I,k,z){const{opaque:O,transmissive:le,transparent:de}=v;R.setupLightsView(k),Ae===!0&&ee.setGlobalState(S.clippingPlanes,k),z&&Se.viewport(H.copy(z)),O.length>0&&ki(O,I,k),le.length>0&&ki(le,I,k),de.length>0&&ki(de,I,k),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Na(v,I,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[z.id]===void 0){const Te=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[z.id]=new an(1,1,{generateMipmaps:!0,type:Te?Sn:Ft,minFilter:Yn,samples:Math.max(4,tt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const le=R.state.transmissionRenderTarget[z.id],de=z.viewport||H;le.setSize(de.z*S.transmissionResolutionScale,de.w*S.transmissionResolutionScale);const ce=S.getRenderTarget(),Me=S.getActiveCubeFace(),ye=S.getActiveMipmapLevel();S.setRenderTarget(le),S.getClearColor($),he=S.getClearAlpha(),he<1&&S.setClearColor(16777215,.5),S.clear(),Fe&&ve.render(k);const De=S.toneMapping;S.toneMapping=sn;const Be=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),R.setupLightsView(z),Ae===!0&&ee.setGlobalState(S.clippingPlanes,z),ki(v,k,z),L.updateMultisampleRenderTarget(le),L.updateRenderTargetMipmap(le),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let $e=0,ht=I.length;$e<ht;$e++){const ot=I[$e],{object:je,geometry:Et,material:Ee,group:Lt}=ot;if(Ee.side===_n&&je.layers.test(z.layers)){const We=Ee.side;Ee.side=Dt,Ee.needsUpdate=!0,Fa(je,k,z,Et,Ee,Lt),Ee.side=We,Ee.needsUpdate=!0,Te=!0}}Te===!0&&(L.updateMultisampleRenderTarget(le),L.updateRenderTargetMipmap(le))}S.setRenderTarget(ce,Me,ye),S.setClearColor($,he),Be!==void 0&&(z.viewport=Be),S.toneMapping=De}function ki(v,I,k){const z=I.isScene===!0?I.overrideMaterial:null;for(let O=0,le=v.length;O<le;O++){const de=v[O],{object:ce,geometry:Me,group:ye}=de;let De=de.material;De.allowOverride===!0&&z!==null&&(De=z),ce.layers.test(k.layers)&&Fa(ce,I,k,Me,De,ye)}}function Fa(v,I,k,z,O,le){v.onBeforeRender(S,I,k,z,O,le),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(S,I,k,z,v,le),O.transparent===!0&&O.side===_n&&O.forceSinglePass===!1?(O.side=Dt,O.needsUpdate=!0,S.renderBufferDirect(k,I,z,O,v,le),O.side=Un,O.needsUpdate=!0,S.renderBufferDirect(k,I,z,O,v,le),O.side=_n):S.renderBufferDirect(k,I,z,O,v,le),v.onAfterRender(S,I,k,z,O,le)}function Wi(v,I,k){I.isScene!==!0&&(I=Qe);const z=m.get(v),O=R.state.lights,le=R.state.shadowsArray,de=O.state.version,ce=re.getParameters(v,O.state,le,I,k),Me=re.getProgramCacheKey(ce);let ye=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;const De=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=Y.get(v.envMap||z.environment,De),z.envMapRotation=z.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,ye===void 0&&(v.addEventListener("dispose",Ke),ye=new Map,z.programs=ye);let Be=ye.get(Me);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===de)return Ba(v,ce),Be}else ce.uniforms=re.getUniforms(v),v.onBeforeCompile(ce,S),Be=re.acquireProgram(ce,Me),ye.set(Me,Be),z.uniforms=ce.uniforms;const Te=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Te.clippingPlanes=ee.uniform),Ba(v,ce),z.needsLights=Dl(v),z.lightsStateVersion=de,z.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Be,z.uniformsList=null,Be}function Oa(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=xr.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Ba(v,I){const k=m.get(v);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Cl(v,I,k,z,O){I.isScene!==!0&&(I=Qe),L.resetTextureUnits();const le=I.fog,de=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,ce=V===null?S.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Mi,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,ye=Y.get(z.envMap||de,Me),De=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!k.morphAttributes.position,$e=!!k.morphAttributes.normal,ht=!!k.morphAttributes.color;let ot=sn;z.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ot=S.toneMapping);const je=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Et=je!==void 0?je.length:0,Ee=m.get(z),Lt=R.state.lights;if(Ae===!0&&(Re===!0||v!==B)){const _t=v===B&&z.id===W;ee.setState(z,v,_t)}let We=!1;z.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Lt.state.version||Ee.outputColorSpace!==ce||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isBatchedMesh&&Ee.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ee.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==ye||z.fog===!0&&Ee.fog!==le||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ee.numPlanes||Ee.numIntersection!==ee.numIntersection)||Ee.vertexAlphas!==De||Ee.vertexTangents!==Be||Ee.morphTargets!==Te||Ee.morphNormals!==$e||Ee.morphColors!==ht||Ee.toneMapping!==ot||Ee.morphTargetsCount!==Et)&&(We=!0):(We=!0,Ee.__version=z.version);let Wt=Ee.currentProgram;We===!0&&(Wt=Wi(z,I,O));let Jt=!1,Fn=!1,Qn=!1;const et=Wt.getUniforms(),vt=Ee.uniforms;if(Se.useProgram(Wt.program)&&(Jt=!0,Fn=!0,Qn=!0),z.id!==W&&(W=z.id,Fn=!0),Jt||B!==v){Se.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),et.setValue(P,"projectionMatrix",v.projectionMatrix),et.setValue(P,"viewMatrix",v.matrixWorldInverse);const Tn=et.map.cameraPosition;Tn!==void 0&&Tn.setValue(P,He.setFromMatrixPosition(v.matrixWorld)),tt.logarithmicDepthBuffer&&et.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&et.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),B!==v&&(B=v,Fn=!0,Qn=!0)}if(Ee.needsLights&&(Lt.state.directionalShadowMap.length>0&&et.setValue(P,"directionalShadowMap",Lt.state.directionalShadowMap,L),Lt.state.spotShadowMap.length>0&&et.setValue(P,"spotShadowMap",Lt.state.spotShadowMap,L),Lt.state.pointShadowMap.length>0&&et.setValue(P,"pointShadowMap",Lt.state.pointShadowMap,L)),O.isSkinnedMesh){et.setOptional(P,O,"bindMatrix"),et.setOptional(P,O,"bindMatrixInverse");const _t=O.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),et.setValue(P,"boneTexture",_t.boneTexture,L))}O.isBatchedMesh&&(et.setOptional(P,O,"batchingTexture"),et.setValue(P,"batchingTexture",O._matricesTexture,L),et.setOptional(P,O,"batchingIdTexture"),et.setValue(P,"batchingIdTexture",O._indirectTexture,L),et.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&et.setValue(P,"batchingColorTexture",O._colorsTexture,L));const yn=k.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&ue.update(O,k,Wt),(Fn||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,et.setValue(P,"receiveShadow",O.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(vt.envMapIntensity.value=I.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=$p()),Fn&&(et.setValue(P,"toneMappingExposure",S.toneMappingExposure),Ee.needsLights&&Pl(vt,Qn),le&&z.fog===!0&&be.refreshFogUniforms(vt,le),be.refreshMaterialUniforms(vt,z,Ue,fe,R.state.transmissionRenderTarget[v.id]),xr.upload(P,Oa(Ee),vt,L)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xr.upload(P,Oa(Ee),vt,L),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&et.setValue(P,"center",O.center),et.setValue(P,"modelViewMatrix",O.modelViewMatrix),et.setValue(P,"normalMatrix",O.normalMatrix),et.setValue(P,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const _t=z.uniformsGroups;for(let Tn=0,ei=_t.length;Tn<ei;Tn++){const za=_t[Tn];pe.update(za,Wt),pe.bind(za,Wt)}}return Wt}function Pl(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Dl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(v,I,k){const z=m.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),m.get(v.texture).__webglTexture=I,m.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const k=m.get(v);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};const Ll=P.createFramebuffer();this.setRenderTarget=function(v,I=0,k=0){V=v,w=I,U=k;let z=null,O=!1,le=!1;if(v){const ce=m.get(v);if(ce.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(P.FRAMEBUFFER,ce.__webglFramebuffer),H.copy(v.viewport),F.copy(v.scissor),Q=v.scissorTest,Se.viewport(H),Se.scissor(F),Se.setScissorTest(Q),W=-1;return}else if(ce.__webglFramebuffer===void 0)L.setupRenderTarget(v);else if(ce.__hasExternalTextures)L.rebindTextures(v,m.get(v.texture).__webglTexture,m.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const De=v.depthTexture;if(ce.__boundDepthTexture!==De){if(De!==null&&m.has(De)&&(v.width!==De.image.width||v.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(v)}}const Me=v.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(le=!0);const ye=m.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ye[I])?z=ye[I][k]:z=ye[I],O=!0):v.samples>0&&L.useMultisampledRTT(v)===!1?z=m.get(v).__webglMultisampledFramebuffer:Array.isArray(ye)?z=ye[k]:z=ye,H.copy(v.viewport),F.copy(v.scissor),Q=v.scissorTest}else H.copy(K).multiplyScalar(Ue).floor(),F.copy(ne).multiplyScalar(Ue).floor(),Q=ae;if(k!==0&&(z=Ll),Se.bindFramebuffer(P.FRAMEBUFFER,z)&&Se.drawBuffers(v,z),Se.viewport(H),Se.scissor(F),Se.setScissorTest(Q),O){const ce=m.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,ce.__webglTexture,k)}else if(le){const ce=I;for(let Me=0;Me<v.textures.length;Me++){const ye=m.get(v.textures[Me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Me,ye.__webglTexture,k,ce)}}else if(v!==null&&k!==0){const ce=m.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ce.__webglTexture,k)}W=-1},this.readRenderTargetPixels=function(v,I,k,z,O,le,de,ce=0){if(!(v&&v.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=m.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){Se.bindFramebuffer(P.FRAMEBUFFER,Me);try{const ye=v.textures[ce],De=ye.format,Be=ye.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ce),!tt.textureFormatReadable(De)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Be)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-z&&k>=0&&k<=v.height-O&&P.readPixels(I,k,z,O,se.convert(De),se.convert(Be),le)}finally{const ye=V!==null?m.get(V).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(v,I,k,z,O,le,de,ce=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=m.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me)if(I>=0&&I<=v.width-z&&k>=0&&k<=v.height-O){Se.bindFramebuffer(P.FRAMEBUFFER,Me);const ye=v.textures[ce],De=ye.format,Be=ye.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ce),!tt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),P.readPixels(I,k,z,O,se.convert(De),se.convert(Be),0);const $e=V!==null?m.get(V).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,$e);const ht=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await mc(P,ht,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le),P.deleteBuffer(Te),P.deleteSync(ht),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,k=0){const z=Math.pow(2,-k),O=Math.floor(v.image.width*z),le=Math.floor(v.image.height*z),de=I!==null?I.x:0,ce=I!==null?I.y:0;L.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,de,ce,O,le),Se.unbindTexture()};const Il=P.createFramebuffer(),Ul=P.createFramebuffer();this.copyTextureToTexture=function(v,I,k=null,z=null,O=0,le=0){let de,ce,Me,ye,De,Be,Te,$e,ht;const ot=v.isCompressedTexture?v.mipmaps[le]:v.image;if(k!==null)de=k.max.x-k.min.x,ce=k.max.y-k.min.y,Me=k.isBox3?k.max.z-k.min.z:1,ye=k.min.x,De=k.min.y,Be=k.isBox3?k.min.z:0;else{const vt=Math.pow(2,-O);de=Math.floor(ot.width*vt),ce=Math.floor(ot.height*vt),v.isDataArrayTexture?Me=ot.depth:v.isData3DTexture?Me=Math.floor(ot.depth*vt):Me=1,ye=0,De=0,Be=0}z!==null?(Te=z.x,$e=z.y,ht=z.z):(Te=0,$e=0,ht=0);const je=se.convert(I.format),Et=se.convert(I.type);let Ee;I.isData3DTexture?(L.setTexture3D(I,0),Ee=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(L.setTexture2DArray(I,0),Ee=P.TEXTURE_2D_ARRAY):(L.setTexture2D(I,0),Ee=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Lt=P.getParameter(P.UNPACK_ROW_LENGTH),We=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Wt=P.getParameter(P.UNPACK_SKIP_PIXELS),Jt=P.getParameter(P.UNPACK_SKIP_ROWS),Fn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,De),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be);const Qn=v.isDataArrayTexture||v.isData3DTexture,et=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const vt=m.get(v),yn=m.get(I),_t=m.get(vt.__renderTarget),Tn=m.get(yn.__renderTarget);Se.bindFramebuffer(P.READ_FRAMEBUFFER,_t.__webglFramebuffer),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let ei=0;ei<Me;ei++)Qn&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,m.get(v).__webglTexture,O,Be+ei),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,m.get(I).__webglTexture,le,ht+ei)),P.blitFramebuffer(ye,De,de,ce,Te,$e,de,ce,P.DEPTH_BUFFER_BIT,P.NEAREST);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||m.has(v)){const vt=m.get(v),yn=m.get(I);Se.bindFramebuffer(P.READ_FRAMEBUFFER,Il),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ul);for(let _t=0;_t<Me;_t++)Qn?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.__webglTexture,O,Be+_t):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,O),et?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yn.__webglTexture,le,ht+_t):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yn.__webglTexture,le),O!==0?P.blitFramebuffer(ye,De,de,ce,Te,$e,de,ce,P.COLOR_BUFFER_BIT,P.NEAREST):et?P.copyTexSubImage3D(Ee,le,Te,$e,ht+_t,ye,De,de,ce):P.copyTexSubImage2D(Ee,le,Te,$e,ye,De,de,ce);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else et?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(Ee,le,Te,$e,ht,de,ce,Me,je,Et,ot.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,le,Te,$e,ht,de,ce,Me,je,ot.data):P.texSubImage3D(Ee,le,Te,$e,ht,de,ce,Me,je,Et,ot):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,le,Te,$e,de,ce,je,Et,ot.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,le,Te,$e,ot.width,ot.height,je,ot.data):P.texSubImage2D(P.TEXTURE_2D,le,Te,$e,de,ce,je,Et,ot);P.pixelStorei(P.UNPACK_ROW_LENGTH,Lt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,We),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fn),le===0&&I.generateMipmaps&&P.generateMipmap(Ee),Se.unbindTexture()},this.initRenderTarget=function(v){m.get(v).__webglFramebuffer===void 0&&L.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?L.setTextureCube(v,0):v.isData3DTexture?L.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?L.setTexture2DArray(v,0):L.setTexture2D(v,0),Se.unbindTexture()},this.resetState=function(){w=0,U=0,V=null,Se.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}}const Pt={red:15881030,white:14209233,brown:5845806,pink:16095342,brownDark:2300175,blue:6865856};let ie,Vt=0,ds=new Date().getTime(),Bo=new Date().getTime(),Ra,Ca,Al,aa,oa,la;function zo(){ie={speed:0,initSpeed:525e-6,baseSpeed:525e-6,targetBaseSpeed:525e-6,incrementSpeedByTime:375e-8,incrementSpeedByLevel:75e-7,distanceForSpeedUpdate:100,speedLastUpdate:0,distance:0,ratioSpeedDistance:50,energy:100,ratioSpeedEnergy:3,level:1,levelLastUpdate:0,distanceForLevelUpdate:1e3,planeDefaultHeight:100,planeAmpHeight:80,seaRadius:600,coinsSpeed:.5,ennemiesSpeed:.6,coinDistanceTolerance:15,coinValue:3,enemyDistanceTolerance:10,enemyValue:50,coinLastSpawn:0,distanceForCoinsSpawn:100,ennemyLastSpawn:0,distanceForEnnemiesSpawn:50,status:"playing"},Ca.innerHTML=Math.floor(ie.distance),Ra.innerHTML=Math.floor(ie.level),Pa()}function Jp(){ie.distance+=ie.speed*Vt*ie.ratioSpeedDistance,Ca.innerHTML=Math.floor(ie.distance);const i=502*(1-ie.distance%ie.distanceForLevelUpdate/ie.distanceForLevelUpdate);Al.setAttribute("stroke-dashoffset",i),Math.floor(ie.distance)%ie.distanceForLevelUpdate===0&&Math.floor(ie.distance)>ie.levelLastUpdate&&(ie.levelLastUpdate=Math.floor(ie.distance),ie.level++,Ra.innerHTML=Math.floor(ie.level),ie.targetBaseSpeed=ie.initSpeed+ie.incrementSpeedByLevel*ie.level)}function Pa(){ie.energy=Math.max(0,ie.energy),aa.style.right=100-ie.energy+"%",aa.style.backgroundColor=ie.energy<50?"#f25346":"#68c3c0",ie.energy<=0&&(ie.status="gameover",oa.style.display="block",la.style.display="none")}function Qp(){ie.energy+=ie.coinValue,ie.energy=Math.min(ie.energy,100),Pa()}function em(){ie.energy-=ie.enemyValue,ie.energy=Math.max(0,ie.energy),Pa()}let kt,Zn,Vo,Go,Ho,ko,$n,jn,qn,Wo;function tm(){$n=window.innerHeight,jn=window.innerWidth,kt=new Dc,kt.fog=new Sa(16243114,100,950),Go=jn/$n,Vo=60,Ho=1,ko=1e4,Zn=new Ht(Vo,Go,Ho,ko),Zn.position.x=0,Zn.position.z=200,Zn.position.y=100,qn=new jp({alpha:!0,antialias:!0}),qn.setSize(jn,$n),qn.shadowMap.enabled=!0,qn.outputColorSpace=Nt,Wo=document.getElementById("world"),Wo.appendChild(qn.domElement),window.addEventListener("resize",nm,!1)}function nm(){$n=window.innerHeight,jn=window.innerWidth,qn.setSize(jn,$n),Zn.aspect=jn/$n,Zn.updateProjectionMatrix()}let Xo,zt,qo;function im(){Xo=new $c(11184810,0,.9*Math.PI),zt=new Qc(16777215,.9*Math.PI),zt.position.set(150,350,350),zt.castShadow=!0,zt.shadow.camera.left=-400,zt.shadow.camera.right=400,zt.shadow.camera.top=400,zt.shadow.camera.bottom=-400,zt.shadow.camera.near=1,zt.shadow.camera.far=1e3,zt.shadow.mapSize.width=2048,zt.shadow.mapSize.height=2048,qo=new eh(14452852,.5*Math.PI),kt.add(Xo),kt.add(zt),kt.add(qo)}class rm{constructor(){const e=new Ta(600,600,800,40,10);e.applyMatrix4(new rt().makeRotationX(-Math.PI/2));const t=e.attributes.position;this.waves=[];for(let r=0;r<t.count;r++)this.waves.push({x:t.getX(r),y:t.getY(r),z:t.getZ(r),ang:Math.random()*Math.PI*2,amp:5+Math.random()*15,speed:.016+Math.random()*.032});const n=new Gt({color:Pt.blue,transparent:!0,opacity:.8,flatShading:!0});this.mesh=new Je(e,n),this.mesh.receiveShadow=!0}moveWaves(){const e=this.mesh.geometry.attributes.position;for(let t=0;t<e.count;t++){const n=this.waves[t];e.setX(t,n.x+Math.cos(n.ang)*n.amp),e.setY(t,n.y+Math.sin(n.ang)*n.amp),n.ang+=n.speed}e.needsUpdate=!0}}let Ln,at,yr,Tr,zi,vr;function sm(){Ln=new rm,Ln.mesh.position.y=-ie.seaRadius,kt.add(Ln.mesh)}class am{constructor(){this.mesh=new Ot;const e=new dt(20,20,20),t=new Gt({color:Pt.white,flatShading:!0}),n=3+Math.floor(Math.random()*3);for(let r=0;r<n;r++){const s=new Je(e,t);s.position.x=r*15,s.position.y=Math.random()*10,s.position.z=Math.random()*10,s.rotation.z=Math.random()*Math.PI*2,s.rotation.y=Math.random()*Math.PI*2;const a=.1+Math.random()*.9;s.scale.set(a,a,a),s.castShadow=!0,s.receiveShadow=!0,this.mesh.add(s)}}}class om{constructor(){this.mesh=new Ot,this.nClouds=20;const e=Math.PI*2/this.nClouds;for(let t=0;t<this.nClouds;t++){const n=new am,r=e*t,s=750+Math.random()*200;n.mesh.position.y=Math.sin(r)*s,n.mesh.position.x=Math.cos(r)*s,n.mesh.rotation.z=r+Math.PI/2,n.mesh.position.z=-400-Math.random()*400;const a=1+Math.random()*2;n.mesh.scale.set(a,a,a),this.mesh.add(n.mesh)}}}function lm(){vr=new om,vr.mesh.position.y=-600,kt.add(vr.mesh)}class cm{constructor(){this.mesh=new Ot,this.mesh.name="pilot",this.angleHairs=0;const e=new dt(15,15,15),t=new Gt({color:Pt.brown,flatShading:!0}),n=new Je(e,t);n.position.set(2,-12,0),this.mesh.add(n);const r=new dt(10,10,10),s=new ss({color:Pt.pink,flatShading:!0}),a=new Je(r,s);this.mesh.add(a);const o=new dt(4,4,4),c=new ss({color:Pt.brown,flatShading:!0}),l=new Je(o,c);l.geometry.applyMatrix4(new rt().makeTranslation(0,2,0));const f=new Ot;this.hairsTop=new Ot;for(let S=0;S<12;S++){const G=l.clone(),w=S%3,U=Math.floor(S/3);G.position.set(-4+U*4,0,-4+w*4),this.hairsTop.add(G)}f.add(this.hairsTop);const p=new dt(12,4,2);p.applyMatrix4(new rt().makeTranslation(-6,0,0));const h=new Je(p,c),g=h.clone();h.position.set(8,-2,6),g.position.set(8,-2,-6),f.add(h),f.add(g);const x=new dt(2,8,10),T=new Je(x,c);T.position.set(-1,-4,0),f.add(T),f.position.set(-5,5,0),this.mesh.add(f);const d=new dt(5,5,5),u=new ss({color:Pt.brown,flatShading:!0}),M=new Je(d,u);M.position.set(6,0,3);const y=M.clone();y.position.z=-M.position.z;const E=new dt(11,1,11),R=new Je(E,u);this.mesh.add(M,y,R);const A=new dt(2,3,2),C=new Je(A,s);C.position.set(0,0,-6);const _=C.clone();_.position.set(0,0,6),this.mesh.add(C,_)}updateHairs(){const e=this.hairsTop.children;for(let t=0;t<e.length;t++)e[t].scale.y=.75+Math.cos(this.angleHairs+t/3)*.25;this.angleHairs+=.16}}class hm{constructor(){const e=new Hi(8,2),t=new Gt({color:Pt.red,flatShading:!0});this.mesh=new Je(e,t),this.mesh.castShadow=!0,this.angle=0,this.dist=0}}class um{constructor(){this.mesh=new Ot,this.ennemiesInUse=[]}spawnEnnemies(){const e=ie.level;for(let t=0;t<e;t++){const n=new hm;this.ennemiesInUse.push(n),n.angle=-(t*.1),n.dist=ie.seaRadius+ie.planeDefaultHeight+(-1+Math.random()*2)*(ie.planeAmpHeight-20),n.mesh.position.y=-ie.seaRadius+Math.sin(n.angle)*n.dist,n.mesh.position.x=Math.cos(n.angle)*n.dist,this.mesh.add(n.mesh)}}rotateEnnemies(){for(let e=0;e<this.ennemiesInUse.length;e++){const t=this.ennemiesInUse[e];t.angle+=ie.speed*Vt*ie.ennemiesSpeed,t.angle>Math.PI*2&&(t.angle-=Math.PI*2),t.mesh.position.y=-ie.seaRadius+Math.sin(t.angle)*t.dist,t.mesh.position.x=Math.cos(t.angle)*t.dist,t.mesh.rotation.z+=Math.random()*.1,t.mesh.rotation.y+=Math.random()*.1,at.mesh.position.clone().sub(t.mesh.position.clone()).length()<ie.enemyDistanceTolerance?(zi.spawnParticles(t.mesh.position.clone(),15,Pt.red,3),em(),this.mesh.remove(t.mesh),this.ennemiesInUse.splice(e,1),e--):t.angle>Math.PI&&(this.mesh.remove(t.mesh),this.ennemiesInUse.splice(e,1),e--)}}}class fm{constructor(){const e=new Hi(5,0),t=new Gt({color:39321,transparent:!0,opacity:.9,flatShading:!0});this.mesh=new Je(e,t),this.mesh.castShadow=!0,this.angle=0,this.dist=0}}class dm{constructor(){this.mesh=new Ot,this.coinsInUse=[]}spawnCoins(){const e=1+Math.floor(Math.random()*10),t=ie.seaRadius+ie.planeDefaultHeight+(-1+Math.random()*2)*(ie.planeAmpHeight-20),n=10+Math.round(Math.random()*10);for(let r=0;r<e;r++){const s=new fm;this.coinsInUse.push(s),s.angle=-(r*.02),s.dist=t+Math.cos(r*.5)*n,s.mesh.position.y=-ie.seaRadius+Math.sin(s.angle)*s.dist,s.mesh.position.x=Math.cos(s.angle)*s.dist,this.mesh.add(s.mesh)}}rotateCoins(){for(let e=0;e<this.coinsInUse.length;e++){const t=this.coinsInUse[e];t.angle+=ie.speed*Vt*ie.coinsSpeed,t.angle>Math.PI*2&&(t.angle-=Math.PI*2),t.mesh.position.y=-ie.seaRadius+Math.sin(t.angle)*t.dist,t.mesh.position.x=Math.cos(t.angle)*t.dist,t.mesh.rotation.z+=Math.random()*.1,t.mesh.rotation.y+=Math.random()*.1,at.mesh.position.clone().sub(t.mesh.position.clone()).length()<ie.coinDistanceTolerance?(zi.spawnParticles(t.mesh.position.clone(),5,39321,.8),Qp(),this.mesh.remove(t.mesh),this.coinsInUse.splice(e,1),e--):t.angle>Math.PI&&(this.mesh.remove(t.mesh),this.coinsInUse.splice(e,1),e--)}}}class pm{constructor(){const e=new Hi(3,0),t=new Gt({color:39321,flatShading:!0});this.mesh=new Je(e,t)}explode(e,t,n){this.mesh.material.color=new ze(t),this.mesh.material.needsUpdate=!0,this.mesh.scale.set(n,n,n);const r=e.x+(-1+Math.random()*2)*50,s=e.y+(-1+Math.random()*2)*50,a=.6+Math.random()*.2;this.targetPos=new N(r,s,e.z),this.progress=0,this.speed=a*.05}}class mm{constructor(){this.mesh=new Ot,this.particlesInUse=[]}spawnParticles(e,t,n,r){for(let s=0;s<t;s++){const a=new pm;a.mesh.position.copy(e),a.explode(e,n,r),this.mesh.add(a.mesh),this.particlesInUse.push(a)}}updateParticles(){for(let e=0;e<this.particlesInUse.length;e++){const t=this.particlesInUse[e];t.progress+=t.speed,t.progress>=1?(this.mesh.remove(t.mesh),this.particlesInUse.splice(e,1),e--):(t.mesh.position.x+=(t.targetPos.x-t.mesh.position.x)*.1,t.mesh.position.y+=(t.targetPos.y-t.mesh.position.y)*.1,t.mesh.scale.set(Math.max(0,t.mesh.scale.x-.1),Math.max(0,t.mesh.scale.y-.1),Math.max(0,t.mesh.scale.z-.1)))}}}class gm{constructor(){this.mesh=new Ot;const e=new dt(80,50,50,1,1,1),t=e.attributes.position;for(let y=0;y<t.count;y++)t.getX(y)<0&&(t.setY(y,t.getY(y)===25?15:5),t.setZ(y,t.getZ(y)===25?5:-5));e.computeVertexNormals();const n=new Gt({color:Pt.red,flatShading:!0}),r=new Je(e,n);r.castShadow=!0,r.receiveShadow=!0,this.mesh.add(r);const s=new dt(20,50,50,1,1,1),a=new Gt({color:Pt.white,flatShading:!0}),o=new Je(s,a);o.position.x=40,o.castShadow=!0,o.receiveShadow=!0,this.mesh.add(o);const c=new dt(15,20,5,1,1,1),l=new Gt({color:Pt.red,flatShading:!0}),f=new Je(c,l);f.position.set(-35,25,0),f.castShadow=!0,f.receiveShadow=!0,this.mesh.add(f);const p=new dt(40,8,150,1,1,1),h=new Gt({color:Pt.red,flatShading:!0}),g=new Je(p,h);g.castShadow=!0,g.receiveShadow=!0,this.mesh.add(g);const x=new dt(20,10,10,1,1,1),T=new Gt({color:Pt.brown,flatShading:!0});this.propeller=new Je(x,T),this.propeller.castShadow=!0,this.propeller.receiveShadow=!0;const d=new dt(1,100,20,1,1,1),u=new Gt({color:Pt.brownDark,flatShading:!0}),M=new Je(d,u);M.position.set(8,0,0),M.castShadow=!0,M.receiveShadow=!0,this.propeller.add(M),this.propeller.position.set(50,0,0),this.mesh.add(this.propeller),this.pilot=new cm,this.pilot.mesh.position.set(-10,27,0),this.mesh.add(this.pilot.mesh)}}function _m(){at=new gm,at.mesh.scale.set(.25,.25,.25),at.mesh.position.y=100,kt.add(at.mesh)}let ca={x:0,y:0};function xm(i){const e=-1+i.clientX/jn*2,t=1-i.clientY/$n*2;ca={x:e,y:t}}function Yo(i,e,t,n,r){const s=Math.max(Math.min(i,t),e),a=t-e,o=(s-e)/a,c=r-n;return n+o*c}function vm(){const i=Yo(ca.y,-.75,.75,25,175),e=Yo(ca.x,-.75,.75,-100,100);at.mesh.position.y+=(i-at.mesh.position.y)*.1,at.mesh.position.x+=(e-at.mesh.position.x)*.1,at.mesh.rotation.z=(i-at.mesh.position.y)*.0128,at.mesh.rotation.x=(at.mesh.position.y-i)*.0064,at.propeller.rotation.x+=.1}function wl(){ds=new Date().getTime(),Vt=ds-Bo,Bo=ds,ie.status==="playing"?(ie.speed=Math.max(ie.speed,ie.baseSpeed),Jp(),ie.baseSpeed+=(ie.targetBaseSpeed-ie.baseSpeed)*Vt*.02,ie.speed+=(ie.targetBaseSpeed-ie.speed)*Vt*.02,Ln.mesh.rotation.z+=ie.speed*Vt,Ln.mesh.rotation.z>2*Math.PI&&(Ln.mesh.rotation.z-=2*Math.PI),vr.mesh.rotation.z+=ie.speed*Vt*.7,Math.floor(ie.distance)%ie.distanceForCoinsSpawn===0&&Math.floor(ie.distance)>ie.coinLastSpawn&&(ie.coinLastSpawn=Math.floor(ie.distance),Tr.spawnCoins()),Math.floor(ie.distance)%ie.distanceForEnnemiesSpawn===0&&Math.floor(ie.distance)>ie.ennemyLastSpawn&&(ie.ennemyLastSpawn=Math.floor(ie.distance),yr.spawnEnnemies()),Tr.rotateCoins(),yr.rotateEnnemies(),vm()):ie.status==="gameover"&&(ie.speed*=.99,at.mesh.rotation.z+=(-Math.PI/2-at.mesh.rotation.z)*2e-4*Vt,at.mesh.rotation.x+=3e-4*Vt,at.mesh.position.y-=.1*Vt,Ln.mesh.rotation.z+=ie.speed*Vt),Ln.moveWaves(),at.pilot.updateHairs(),zi.updateParticles(),qn.render(kt,Zn),requestAnimationFrame(wl)}function Mm(){Ca=document.getElementById("distValue"),document.getElementById("energyValue"),aa=document.getElementById("energyBar"),Ra=document.getElementById("levelValue"),Al=document.getElementById("levelCircleStroke"),oa=document.getElementById("replayMessage"),la=document.getElementById("instructions"),zo(),tm(),im(),_m(),sm(),lm(),yr=new um,kt.add(yr.mesh),Tr=new dm,kt.add(Tr.mesh),zi=new mm,kt.add(zi.mesh),document.addEventListener("mousemove",xm,!1),document.addEventListener("mousedown",function(){ie.status==="gameover"&&(zo(),at.mesh.position.y=100,at.mesh.position.x=0,at.mesh.rotation.z=0,at.mesh.rotation.x=0,oa.style.display="none",la.style.display="block")},!1),wl()}window.addEventListener("load",Mm,!1);
