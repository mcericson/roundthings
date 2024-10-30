(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bs="147",Mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ju=0,Zs=1,qu=2,Yc=1,Zu=2,Cr=3,ui=0,Ut=1,un=2,Bn=0,Yi=1,Ks=2,Js=3,Qs=4,jc=5,ii=100,Ku=101,Ju=102,$s=103,el=104,Qu=200,$u=201,ef=202,tf=203,Ss=204,qc=205,nf=206,rf=207,af=208,of=209,sf=210,lf=0,cf=1,uf=2,as=3,ff=4,hf=5,df=6,pf=7,Zc=0,mf=1,gf=2,bn=0,vf=1,_f=2,xf=3,yf=4,bf=5,Kc=300,qi=301,Zi=302,os=303,ss=304,Va=306,ls=1e3,rn=1001,cs=1002,Ct=1003,tl=1004,nl=1005,Dt=1006,Sf=1007,Wa=1008,fi=1009,Mf=1010,wf=1011,Jc=1012,Tf=1013,ai=1014,oi=1015,Ir=1016,Ef=1017,Af=1018,ji=1020,Cf=1021,Df=1022,an=1023,Lf=1024,Pf=1025,si=1026,Ki=1027,Rf=1028,Uf=1029,If=1030,Ff=1031,Of=1033,uo=33776,fo=33777,ho=33778,po=33779,il=35840,rl=35841,al=35842,ol=35843,zf=36196,sl=37492,ll=37496,cl=37808,ul=37809,fl=37810,hl=37811,dl=37812,pl=37813,ml=37814,gl=37815,vl=37816,_l=37817,xl=37818,yl=37819,bl=37820,Sl=37821,Ml=36492,hi=3e3,nt=3001,Nf=3200,Qc=3201,kf=0,Bf=1,cn="srgb",Fr="srgb-linear",mo=7680,Gf=519,wl=35044,Tl="300 es",us=1035;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,o=n.length;i<o;i++)n[i].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],go=Math.PI/180,El=180/Math.PI;function zr(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bt[l&255]+bt[l>>8&255]+bt[l>>16&255]+bt[l>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]).toLowerCase()}function Lt(l,e,t){return Math.max(e,Math.min(t,l))}function Vf(l,e){return(l%e+e)%e}function vo(l,e,t){return(1-t)*l+t*e}function Al(l){return(l&l-1)===0&&l!==0}function fs(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function $r(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function kt(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,o=this.y-e.y;return this.x=i*r-o*n+e.x,this.y=i*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rt{constructor(){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,r,n,i,o,a,s,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=a,u[3]=t,u[4]=i,u[5]=s,u[6]=r,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,o=r[0],a=r[3],s=r[6],c=r[1],u=r[4],f=r[7],h=r[2],d=r[5],g=r[8],m=n[0],p=n[3],_=n[6],M=n[1],b=n[4],y=n[7],x=n[2],C=n[5],P=n[8];return i[0]=o*m+a*M+s*x,i[3]=o*p+a*b+s*C,i[6]=o*_+a*y+s*P,i[1]=c*m+u*M+f*x,i[4]=c*p+u*b+f*C,i[7]=c*_+u*y+f*P,i[2]=h*m+d*M+g*x,i[5]=h*p+d*b+g*C,i[8]=h*_+d*y+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],a=e[5],s=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-r*i*u+r*a*s+n*i*c-n*o*s}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],a=e[5],s=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*s-u*i,d=c*i-o*s,g=t*f+r*h+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(n*c-u*r)*m,e[2]=(a*r-n*o)*m,e[3]=h*m,e[4]=(u*t-n*s)*m,e[5]=(n*i-a*t)*m,e[6]=d*m,e[7]=(r*s-c*t)*m,e[8]=(o*t-r*i)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,o,a){const s=Math.cos(i),c=Math.sin(i);return this.set(r*s,r*c,-r*(s*o+c*a)+o+e,-n*c,n*s,-n*(-c*o+s*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_o.makeScale(e,t)),this}rotate(e){return this.premultiply(_o.makeRotation(-e)),this}translate(e,t){return this.premultiply(_o.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _o=new Rt;function $c(l){for(let e=l.length-1;e>=0;--e)if(l[e]>=65535)return!0;return!1}function Ga(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function li(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Ca(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const xo={[cn]:{[Fr]:li},[Fr]:{[cn]:Ca}},St={legacyMode:!0,get workingColorSpace(){return Fr},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,e,t){if(this.legacyMode||e===t||!e||!t)return l;if(xo[e]&&xo[e][t]!==void 0){const r=xo[e][t];return l.r=r(l.r),l.g=r(l.g),l.b=r(l.b),l}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(l,e){return this.convert(l,this.workingColorSpace,e)},toWorkingColorSpace:function(l,e){return this.convert(l,e,this.workingColorSpace)}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ft={r:0,g:0,b:0},$t={h:0,s:0,l:0},ea={h:0,s:0,l:0};function yo(l,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?l+(e-l)*6*t:t<1/2?e:t<2/3?l+(e-l)*6*(2/3-t):l}function ta(l,e){return e.r=l.r,e.g=l.g,e.b=l.b,e}class Je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=St.workingColorSpace){return this.r=e,this.g=t,this.b=r,St.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=St.workingColorSpace){if(e=Vf(e,1),t=Lt(t,0,1),r=Lt(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,o=2*r-i;this.r=yo(o,i,e+1/3),this.g=yo(o,i,e),this.b=yo(o,i,e-1/3)}return St.toWorkingColorSpace(this,n),this}setStyle(e,t=cn){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,St.toWorkingColorSpace(this,t),r(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,St.toWorkingColorSpace(this,t),r(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const s=parseFloat(i[1])/360,c=parseFloat(i[2])/100,u=parseFloat(i[3])/100;return r(i[4]),this.setHSL(s,c,u,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],o=i.length;if(o===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,St.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,St.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=cn){const r=eu[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return St.fromWorkingColorSpace(ta(this,ft),e),Lt(ft.r*255,0,255)<<16^Lt(ft.g*255,0,255)<<8^Lt(ft.b*255,0,255)<<0}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(ta(this,ft),t);const r=ft.r,n=ft.g,i=ft.b,o=Math.max(r,n,i),a=Math.min(r,n,i);let s,c;const u=(a+o)/2;if(a===o)s=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case r:s=(n-i)/f+(n<i?6:0);break;case n:s=(i-r)/f+2;break;case i:s=(r-n)/f+4;break}s/=6}return e.h=s,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(ta(this,ft),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=cn){return St.fromWorkingColorSpace(ta(this,ft),e),e!==cn?`color(${e} ${ft.r} ${ft.g} ${ft.b})`:`rgb(${ft.r*255|0},${ft.g*255|0},${ft.b*255|0})`}offsetHSL(e,t,r){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=r,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(ea);const r=vo($t.h,ea.h,t),n=vo($t.s,ea.s,t),i=vo($t.l,ea.l,t);return this.setHSL(r,n,i),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Je.NAMES=eu;let Ti;class tu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=Ga("canvas")),Ti.width=e.width,Ti.height=e.height;const r=Ti.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ga("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let o=0;o<i.length;o++)i[o]=li(i[o]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(li(t[r]/255)*255):t[r]=li(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class nu{constructor(e=null){this.isSource=!0,this.uuid=zr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?i.push(bo(n[o].image)):i.push(bo(n[o]))}else i=bo(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function bo(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?tu.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wf=0;class It extends gi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,r=rn,n=rn,i=Dt,o=Wa,a=an,s=fi,c=It.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=zr(),this.name="",this.source=new nu(e),this.mipmaps=[],this.mapping=t,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=s,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Kc;It.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,r=0,n=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n+o[12]*i,this.y=o[1]*t+o[5]*r+o[9]*n+o[13]*i,this.z=o[2]*t+o[6]*r+o[10]*n+o[14]*i,this.w=o[3]*t+o[7]*r+o[11]*n+o[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const s=e.elements,c=s[0],u=s[4],f=s[8],h=s[1],d=s[5],g=s[9],m=s[2],p=s[6],_=s[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(d+1)/2,x=(_+1)/2,C=(u+h)/4,P=(f+m)/4,v=(g+p)/4;return b>y&&b>x?b<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(b),n=C/r,i=P/r):y>x?y<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(y),r=C/n,i=v/n):x<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(x),r=P/i,n=v/i),this.set(r,n,i,t),this}let M=Math.sqrt((p-g)*(p-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-m)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class di extends gi{constructor(e=1,t=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new It(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Dt,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class iu extends It{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hf extends It{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pi{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,o,a){let s=r[n+0],c=r[n+1],u=r[n+2],f=r[n+3];const h=i[o+0],d=i[o+1],g=i[o+2],m=i[o+3];if(a===0){e[t+0]=s,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(f!==m||s!==h||c!==d||u!==g){let p=1-a;const _=s*h+c*d+u*g+f*m,M=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const x=Math.sqrt(b),C=Math.atan2(x,_*M);p=Math.sin(p*C)/x,a=Math.sin(a*C)/x}const y=a*M;if(s=s*p+h*y,c=c*p+d*y,u=u*p+g*y,f=f*p+m*y,p===1-a){const x=1/Math.sqrt(s*s+c*c+u*u+f*f);s*=x,c*=x,u*=x,f*=x}}e[t]=s,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,n,i,o){const a=r[n],s=r[n+1],c=r[n+2],u=r[n+3],f=i[o],h=i[o+1],d=i[o+2],g=i[o+3];return e[t]=a*g+u*f+s*d-c*h,e[t+1]=s*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-s*f,e[t+3]=u*g-a*f-s*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,n=e._y,i=e._z,o=e._order,a=Math.cos,s=Math.sin,c=a(r/2),u=a(n/2),f=a(i/2),h=s(r/2),d=s(n/2),g=s(i/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],o=t[1],a=t[5],s=t[9],c=t[2],u=t[6],f=t[10],h=r+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-s)*d,this._y=(i-c)*d,this._z=(o-n)*d}else if(r>a&&r>f){const d=2*Math.sqrt(1+r-a-f);this._w=(u-s)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(i+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-r-f);this._w=(i-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(s+u)/d}else{const d=2*Math.sqrt(1+f-r-a);this._w=(o-n)/d,this._x=(i+c)/d,this._y=(s+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,o=e._w,a=t._x,s=t._y,c=t._z,u=t._w;return this._x=r*u+o*a+n*c-i*s,this._y=n*u+o*s+i*a-r*c,this._z=i*u+o*c+r*s-n*a,this._w=o*u-r*a-n*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,o=this._w;let a=o*e._w+r*e._x+n*e._y+i*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=r,this._y=n,this._z=i,this;const s=1-a*a;if(s<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(s),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=r*f+this._x*h,this._y=n*f+this._y*h,this._z=i*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(i),r*Math.cos(i),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,o=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*o,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*o,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,o=e.y,a=e.z,s=e.w,c=s*t+o*n-a*r,u=s*r+a*t-i*n,f=s*n+i*r-o*t,h=-i*t-o*r-a*n;return this.x=c*s+h*-i+u*-a-f*-o,this.y=u*s+h*-o+f*-i-c*-a,this.z=f*s+h*-a+c*-o-u*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,o=t.x,a=t.y,s=t.z;return this.x=n*s-i*a,this.y=i*o-r*s,this.z=r*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new j,Cl=new pi;class $i{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,r=1/0,n=1/0,i=-1/0,o=-1/0,a=-1/0;for(let s=0,c=e.length;s<c;s+=3){const u=e[s],f=e[s+1],h=e[s+2];u<t&&(t=u),f<r&&(r=f),h<n&&(n=h),u>i&&(i=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,r,n),this.max.set(i,o,a),this}setFromBufferAttribute(e){let t=1/0,r=1/0,n=1/0,i=-1/0,o=-1/0,a=-1/0;for(let s=0,c=e.count;s<c;s++){const u=e.getX(s),f=e.getY(s),h=e.getZ(s);u<t&&(t=u),f<r&&(r=f),h<n&&(n=h),u>i&&(i=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,r,n),this.max.set(i,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0)if(t&&r.attributes!=null&&r.attributes.position!==void 0){const i=r.attributes.position;for(let o=0,a=i.count;o<a;o++)Xn.fromBufferAttribute(i,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Xn)}else r.boundingBox===null&&r.computeBoundingBox(),Mo.copy(r.boundingBox),Mo.applyMatrix4(e.matrixWorld),this.union(Mo);const n=e.children;for(let i=0,o=n.length;i<o;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),na.subVectors(this.max,Sr),Ei.subVectors(e.a,Sr),Ai.subVectors(e.b,Sr),Ci.subVectors(e.c,Sr),Un.subVectors(Ai,Ei),In.subVectors(Ci,Ai),Yn.subVectors(Ei,Ci);let t=[0,-Un.z,Un.y,0,-In.z,In.y,0,-Yn.z,Yn.y,Un.z,0,-Un.x,In.z,0,-In.x,Yn.z,0,-Yn.x,-Un.y,Un.x,0,-In.y,In.x,0,-Yn.y,Yn.x,0];return!wo(t,Ei,Ai,Ci,na)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,Ei,Ai,Ci,na))?!1:(ia.crossVectors(Un,In),t=[ia.x,ia.y,ia.z],wo(t,Ei,Ai,Ci,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Xn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new j,new j,new j,new j,new j,new j,new j,new j],Xn=new j,Mo=new $i,Ei=new j,Ai=new j,Ci=new j,Un=new j,In=new j,Yn=new j,Sr=new j,na=new j,ia=new j,jn=new j;function wo(l,e,t,r,n){for(let i=0,o=l.length-3;i<=o;i+=3){jn.fromArray(l,i);const a=n.x*Math.abs(jn.x)+n.y*Math.abs(jn.y)+n.z*Math.abs(jn.z),s=e.dot(jn),c=t.dot(jn),u=r.dot(jn);if(Math.max(-Math.max(s,c,u),Math.min(s,c,u))>a)return!1}return!0}const Xf=new $i,Mr=new j,To=new j;class er{constructor(e=new j,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Xf.setFromPoints(e).getCenter(r);let n=0;for(let i=0,o=e.length;i<o;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Mr,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(To)),this.expandByPoint(Mr.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new j,Eo=new j,ra=new j,Fn=new j,Ao=new j,aa=new j,Co=new j;class Ms{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.direction).multiplyScalar(t).add(this.origin),dn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Eo.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Eo);const i=e.distanceTo(t)*.5,o=-this.direction.dot(ra),a=Fn.dot(this.direction),s=-Fn.dot(ra),c=Fn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*s-a,h=o*a-s,g=i*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,d=f*(f+o*h+2*a)+h*(o*f+h+2*s)+c}else h=i,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*s)+c;else h=-i,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*s)+c;else h<=-g?(f=Math.max(0,-(-o*i+a)),h=f>0?-i:Math.min(Math.max(-i,-s),i),d=-f*f+h*(h+2*s)+c):h<=g?(f=0,h=Math.min(Math.max(-i,-s),i),d=h*(h+2*s)+c):(f=Math.max(0,-(o*i+a)),h=f>0?i:Math.min(Math.max(-i,-s),i),d=-f*f+h*(h+2*s)+c);else h=o>0?-i:i,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*s)+c;return r&&r.copy(this.direction).multiplyScalar(f).add(this.origin),n&&n.copy(ra).multiplyScalar(h).add(Eo),d}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const r=dn.dot(this.direction),n=dn.dot(dn)-r*r,i=e.radius*e.radius;if(n>i)return null;const o=Math.sqrt(i-n),a=r-o,s=r+o;return a<0&&s<0?null:a<0?this.at(s,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,o,a,s;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(i=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),r>o||i>n||((i>r||isNaN(r))&&(r=i),(o<n||isNaN(n))&&(n=o),f>=0?(a=(e.min.z-h.z)*f,s=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,s=(e.min.z-h.z)*f),r>s||a>n)||((a>r||r!==r)&&(r=a),(s<n||n!==n)&&(n=s),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,r,n,i){Ao.subVectors(t,e),aa.subVectors(r,e),Co.crossVectors(Ao,aa);let o=this.direction.dot(Co),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,e);const s=a*this.direction.dot(aa.crossVectors(Fn,aa));if(s<0)return null;const c=a*this.direction.dot(Ao.cross(Fn));if(c<0||s+c>o)return null;const u=-a*Fn.dot(Co);return u<0?null:this.at(u/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,r,n,i,o,a,s,c,u,f,h,d,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=n,_[1]=i,_[5]=o,_[9]=a,_[13]=s,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=d,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/Di.setFromMatrixColumn(e,0).length(),i=1/Di.setFromMatrixColumn(e,1).length(),o=1/Di.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,o=Math.cos(r),a=Math.sin(r),s=Math.cos(n),c=Math.sin(n),u=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,m=a*f;t[0]=s*u,t[4]=-s*f,t[8]=c,t[1]=d+g*c,t[5]=h-m*c,t[9]=-a*s,t[2]=m-h*c,t[6]=g+d*c,t[10]=o*s}else if(e.order==="YXZ"){const h=s*u,d=s*f,g=c*u,m=c*f;t[0]=h+m*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=m+h*a,t[10]=o*s}else if(e.order==="ZXY"){const h=s*u,d=s*f,g=c*u,m=c*f;t[0]=h-m*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=m-h*a,t[2]=-o*c,t[6]=a,t[10]=o*s}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,m=a*f;t[0]=s*u,t[4]=g*c-d,t[8]=h*c+m,t[1]=s*f,t[5]=m*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*s,t[10]=o*s}else if(e.order==="YZX"){const h=o*s,d=o*c,g=a*s,m=a*c;t[0]=s*u,t[4]=m-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*s,d=o*c,g=a*s,m=a*c;t[0]=s*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yf,e,jf)}lookAt(e,t,r){const n=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),On.crossVectors(r,Bt),On.lengthSq()===0&&(Math.abs(r.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),On.crossVectors(r,Bt)),On.normalize(),oa.crossVectors(Bt,On),n[0]=On.x,n[4]=oa.x,n[8]=Bt.x,n[1]=On.y,n[5]=oa.y,n[9]=Bt.y,n[2]=On.z,n[6]=oa.z,n[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,o=r[0],a=r[4],s=r[8],c=r[12],u=r[1],f=r[5],h=r[9],d=r[13],g=r[2],m=r[6],p=r[10],_=r[14],M=r[3],b=r[7],y=r[11],x=r[15],C=n[0],P=n[4],v=n[8],E=n[12],U=n[1],K=n[5],F=n[9],I=n[13],D=n[2],W=n[6],H=n[10],te=n[14],Z=n[3],Y=n[7],G=n[11],w=n[15];return i[0]=o*C+a*U+s*D+c*Z,i[4]=o*P+a*K+s*W+c*Y,i[8]=o*v+a*F+s*H+c*G,i[12]=o*E+a*I+s*te+c*w,i[1]=u*C+f*U+h*D+d*Z,i[5]=u*P+f*K+h*W+d*Y,i[9]=u*v+f*F+h*H+d*G,i[13]=u*E+f*I+h*te+d*w,i[2]=g*C+m*U+p*D+_*Z,i[6]=g*P+m*K+p*W+_*Y,i[10]=g*v+m*F+p*H+_*G,i[14]=g*E+m*I+p*te+_*w,i[3]=M*C+b*U+y*D+x*Z,i[7]=M*P+b*K+y*W+x*Y,i[11]=M*v+b*F+y*H+x*G,i[15]=M*E+b*I+y*te+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],o=e[1],a=e[5],s=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+i*s*f-n*c*f-i*a*h+r*c*h+n*a*d-r*s*d)+m*(+t*s*d-t*c*h+i*o*h-n*o*d+n*c*u-i*s*u)+p*(+t*c*f-t*a*d-i*o*f+r*o*d+i*a*u-r*c*u)+_*(-n*a*u-t*s*f+t*a*h+n*o*f-r*o*h+r*s*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],a=e[5],s=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],m=e[13],p=e[14],_=e[15],M=f*p*c-m*h*c+m*s*d-a*p*d-f*s*_+a*h*_,b=g*h*c-u*p*c-g*s*d+o*p*d+u*s*_-o*h*_,y=u*m*c-g*f*c+g*a*d-o*m*d-u*a*_+o*f*_,x=g*f*s-u*m*s-g*a*h+o*m*h+u*a*p-o*f*p,C=t*M+r*b+n*y+i*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=M*P,e[1]=(m*h*i-f*p*i-m*n*d+r*p*d+f*n*_-r*h*_)*P,e[2]=(a*p*i-m*s*i+m*n*c-r*p*c-a*n*_+r*s*_)*P,e[3]=(f*s*i-a*h*i-f*n*c+r*h*c+a*n*d-r*s*d)*P,e[4]=b*P,e[5]=(u*p*i-g*h*i+g*n*d-t*p*d-u*n*_+t*h*_)*P,e[6]=(g*s*i-o*p*i-g*n*c+t*p*c+o*n*_-t*s*_)*P,e[7]=(o*h*i-u*s*i+u*n*c-t*h*c-o*n*d+t*s*d)*P,e[8]=y*P,e[9]=(g*f*i-u*m*i-g*r*d+t*m*d+u*r*_-t*f*_)*P,e[10]=(o*m*i-g*a*i+g*r*c-t*m*c-o*r*_+t*a*_)*P,e[11]=(u*a*i-o*f*i-u*r*c+t*f*c+o*r*d-t*a*d)*P,e[12]=x*P,e[13]=(u*m*n-g*f*n+g*r*h-t*m*h-u*r*p+t*f*p)*P,e[14]=(g*a*n-o*m*n-g*r*s+t*m*s+o*r*p-t*a*p)*P,e[15]=(o*f*n-u*a*n+u*r*s-t*f*s-o*r*h+t*a*h)*P,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,o=e.x,a=e.y,s=e.z,c=i*o,u=i*a;return this.set(c*o+r,c*a-n*s,c*s+n*a,0,c*a+n*s,u*a+r,u*s-n*o,0,c*s-n*a,u*s+n*o,i*s*s+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,o){return this.set(1,r,i,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,o=t._y,a=t._z,s=t._w,c=i+i,u=o+o,f=a+a,h=i*c,d=i*u,g=i*f,m=o*u,p=o*f,_=a*f,M=s*c,b=s*u,y=s*f,x=r.x,C=r.y,P=r.z;return n[0]=(1-(m+_))*x,n[1]=(d+y)*x,n[2]=(g-b)*x,n[3]=0,n[4]=(d-y)*C,n[5]=(1-(h+_))*C,n[6]=(p+M)*C,n[7]=0,n[8]=(g+b)*P,n[9]=(p-M)*P,n[10]=(1-(h+m))*P,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=Di.set(n[0],n[1],n[2]).length();const o=Di.set(n[4],n[5],n[6]).length(),a=Di.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],en.copy(this);const c=1/i,u=1/o,f=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,t.setFromRotationMatrix(en),r.x=i,r.y=o,r.z=a,this}makePerspective(e,t,r,n,i,o){const a=this.elements,s=2*i/(t-e),c=2*i/(r-n),u=(t+e)/(t-e),f=(r+n)/(r-n),h=-(o+i)/(o-i),d=-2*o*i/(o-i);return a[0]=s,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,r,n,i,o){const a=this.elements,s=1/(t-e),c=1/(r-n),u=1/(o-i),f=(t+e)*s,h=(r+n)*c,d=(o+i)*u;return a[0]=2*s,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Di=new j,en=new at,Yf=new j(0,0,0),jf=new j(1,1,1),On=new j,oa=new j,Bt=new j,Dl=new at,Ll=new pi;class Nr{constructor(e=0,t=0,r=0,n=Nr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],o=n[4],a=n[8],s=n[1],c=n[5],u=n[9],f=n[2],h=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(s,i));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Nr.DefaultOrder="XYZ";Nr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qf=0;const Pl=new j,Li=new pi,pn=new at,sa=new j,wr=new j,Zf=new j,Kf=new pi,Rl=new j(1,0,0),Ul=new j(0,1,0),Il=new j(0,0,1),Jf={type:"added"},Fl={type:"removed"};class wt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DefaultUp.clone();const e=new j,t=new Nr,r=new pi,n=new j(1,1,1);function i(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new at},normalMatrix:{value:new Rt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=wt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wt.DefaultMatrixWorldAutoUpdate,this.layers=new ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Ul,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Ul,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?sa.copy(e):sa.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(wr,sa,this.up):pn.lookAt(sa,wr,this.up),this.quaternion.setFromRotationMatrix(pn),n&&(pn.extractRotation(n.matrixWorld),Li.setFromRotationMatrix(pn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Fl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const o=this.children[r].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const i=t[r];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let i=0,o=n.length;i<o;i++){const a=n[i];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function i(a,s){return a[s.uuid]===void 0&&(a[s.uuid]=s.toJSON(e)),s.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const s=a.shapes;if(Array.isArray(s))for(let c=0,u=s.length;c<u;c++){const f=s[c];i(e.shapes,f)}else i(e.shapes,s)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let s=0,c=this.material.length;s<c;s++)a.push(i(e.materials,this.material[s]));n.material=a}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const s=this.animations[a];n.animations.push(i(e.animations,s))}}if(t){const a=o(e.geometries),s=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(r.geometries=a),s.length>0&&(r.materials=s),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function o(a){const s=[];for(const c in a){const u=a[c];delete u.metadata,s.push(u)}return s}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}wt.DefaultUp=new j(0,1,0);wt.DefaultMatrixAutoUpdate=!0;wt.DefaultMatrixWorldAutoUpdate=!0;const tn=new j,mn=new j,Do=new j,gn=new j,Pi=new j,Ri=new j,Ol=new j,Lo=new j,Po=new j,Ro=new j;class _n{constructor(e=new j,t=new j,r=new j){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),tn.subVectors(e,t),n.cross(tn);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){tn.subVectors(n,t),mn.subVectors(r,t),Do.subVectors(e,t);const o=tn.dot(tn),a=tn.dot(mn),s=tn.dot(Do),c=mn.dot(mn),u=mn.dot(Do),f=o*c-a*a;if(f===0)return i.set(-2,-1,-1);const h=1/f,d=(c*s-a*u)*h,g=(o*u-a*s)*h;return i.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,r,n,i,o,a,s){return this.getBarycoord(e,t,r,n,gn),s.set(0,0),s.addScaledVector(i,gn.x),s.addScaledVector(o,gn.y),s.addScaledVector(a,gn.z),s}static isFrontFacing(e,t,r,n){return tn.subVectors(r,t),mn.subVectors(e,t),tn.cross(mn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),tn.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,i){return _n.getUV(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let o,a;Pi.subVectors(n,r),Ri.subVectors(i,r),Lo.subVectors(e,r);const s=Pi.dot(Lo),c=Ri.dot(Lo);if(s<=0&&c<=0)return t.copy(r);Po.subVectors(e,n);const u=Pi.dot(Po),f=Ri.dot(Po);if(u>=0&&f<=u)return t.copy(n);const h=s*f-u*c;if(h<=0&&s>=0&&u<=0)return o=s/(s-u),t.copy(r).addScaledVector(Pi,o);Ro.subVectors(e,i);const d=Pi.dot(Ro),g=Ri.dot(Ro);if(g>=0&&d<=g)return t.copy(i);const m=d*c-s*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(r).addScaledVector(Ri,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Ol.subVectors(i,n),a=(f-u)/(f-u+(d-g)),t.copy(n).addScaledVector(Ol,a);const _=1/(p+m+h);return o=m*_,a=h*_,t.copy(r).addScaledVector(Pi,o).addScaledVector(Ri,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qf=0;class tr extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=Yi,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ss,this.blendDst=qc,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(r.blending=this.blending),this.side!==ui&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function n(i){const o=[];for(const a in i){const s=i[a];delete s.metadata,o.push(s)}return o}if(t){const i=n(e.textures),o=n(e.images);i.length>0&&(r.textures=i),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ws extends tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new j,la=new ke;class Vt{constructor(e,t,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r===!0,this.usage=wl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$r(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$r(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$r(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$r(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),r=kt(r,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),r=kt(r,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class au extends Vt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ou extends Vt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ft extends Vt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let $f=0;const Ht=new at,Uo=new wt,Ui=new j,Gt=new $i,Tr=new $i,gt=new j;class lt extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($c(e)?ou:au)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Rt().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,r){return Ht.makeTranslation(e,t,r),this.applyMatrix4(Ht),this}scale(e,t,r){return Ht.makeScale(e,t,r),this.applyMatrix4(Ht),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const i=e[r];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Gt.setFromBufferAttribute(i),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Gt.min,Tr.min),Gt.expandByPoint(gt),gt.addVectors(Gt.max,Tr.max),Gt.expandByPoint(gt)):(Gt.expandByPoint(Tr.min),Gt.expandByPoint(Tr.max))}Gt.getCenter(r);let n=0;for(let i=0,o=e.count;i<o;i++)gt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(gt));if(t)for(let i=0,o=t.length;i<o;i++){const a=t[i],s=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),s&&(Ui.fromBufferAttribute(e,c),gt.add(Ui)),n=Math.max(n,r.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,i=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));const s=this.getAttribute("tangent").array,c=[],u=[];for(let U=0;U<a;U++)c[U]=new j,u[U]=new j;const f=new j,h=new j,d=new j,g=new ke,m=new ke,p=new ke,_=new j,M=new j;function b(U,K,F){f.fromArray(n,U*3),h.fromArray(n,K*3),d.fromArray(n,F*3),g.fromArray(o,U*2),m.fromArray(o,K*2),p.fromArray(o,F*2),h.sub(f),d.sub(f),m.sub(g),p.sub(g);const I=1/(m.x*p.y-p.x*m.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(I),M.copy(d).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(I),c[U].add(_),c[K].add(_),c[F].add(_),u[U].add(M),u[K].add(M),u[F].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:r.length}]);for(let U=0,K=y.length;U<K;++U){const F=y[U],I=F.start,D=F.count;for(let W=I,H=I+D;W<H;W+=3)b(r[W+0],r[W+1],r[W+2])}const x=new j,C=new j,P=new j,v=new j;function E(U){P.fromArray(i,U*3),v.copy(P);const K=c[U];x.copy(K),x.sub(P.multiplyScalar(P.dot(K))).normalize(),C.crossVectors(v,K);const I=C.dot(u[U])<0?-1:1;s[U*4]=x.x,s[U*4+1]=x.y,s[U*4+2]=x.z,s[U*4+3]=I}for(let U=0,K=y.length;U<K;++U){const F=y[U],I=F.start,D=F.count;for(let W=I,H=I+D;W<H;W+=3)E(r[W+0]),E(r[W+1]),E(r[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,d=r.count;h<d;h++)r.setXYZ(h,0,0,0);const n=new j,i=new j,o=new j,a=new j,s=new j,c=new j,u=new j,f=new j;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,i),f.subVectors(n,i),u.cross(f),a.fromBufferAttribute(r,g),s.fromBufferAttribute(r,m),c.fromBufferAttribute(r,p),a.add(u),s.add(u),c.add(u),r.setXYZ(g,a.x,a.y,a.z),r.setXYZ(m,s.x,s.y,s.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)n.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,i),f.subVectors(n,i),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,s){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(s.length*u);let d=0,g=0;for(let m=0,p=s.length;m<p;m++){a.isInterleavedBufferAttribute?d=s[m]*a.data.stride+a.offset:d=s[m]*u;for(let _=0;_<u;_++)h[g++]=c[d++]}return new Vt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lt,r=this.index.array,n=this.attributes;for(const a in n){const s=n[a],c=e(s,r);t.setAttribute(a,c)}const i=this.morphAttributes;for(const a in i){const s=[],c=i[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,r);s.push(d)}t.morphAttributes[a]=s}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,s=o.length;a<s;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const s=this.parameters;for(const c in s)s[c]!==void 0&&(e[c]=s[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const s in r){const c=r[s];e.data.attributes[s]=c.toJSON(e.data)}const n={};let i=!1;for(const s in this.morphAttributes){const c=this.morphAttributes[s],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(n[s]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],f=i[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const zl=new at,Ii=new Ms,Io=new er,zn=new j,Nn=new j,kn=new j,Fo=new j,Oo=new j,zo=new j,ca=new j,ua=new j,fa=new j,ha=new ke,da=new ke,pa=new ke,No=new j,ma=new j;class vt extends wt{constructor(e=new lt,t=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=n.length;i<o;i++){const a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;if(n===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),Io.copy(r.boundingSphere),Io.applyMatrix4(i),e.ray.intersectsSphere(Io)===!1)||(zl.copy(i).invert(),Ii.copy(e.ray).applyMatrix4(zl),r.boundingBox!==null&&Ii.intersectsBox(r.boundingBox)===!1))return;let o;const a=r.index,s=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative,f=r.attributes.uv,h=r.attributes.uv2,d=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(n))for(let m=0,p=d.length;m<p;m++){const _=d[m],M=n[_.materialIndex],b=Math.max(_.start,g.start),y=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let x=b,C=y;x<C;x+=3){const P=a.getX(x),v=a.getX(x+1),E=a.getX(x+2);o=ga(this,M,e,Ii,s,c,u,f,h,P,v,E),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=m,M=p;_<M;_+=3){const b=a.getX(_),y=a.getX(_+1),x=a.getX(_+2);o=ga(this,n,e,Ii,s,c,u,f,h,b,y,x),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(s!==void 0)if(Array.isArray(n))for(let m=0,p=d.length;m<p;m++){const _=d[m],M=n[_.materialIndex],b=Math.max(_.start,g.start),y=Math.min(s.count,Math.min(_.start+_.count,g.start+g.count));for(let x=b,C=y;x<C;x+=3){const P=x,v=x+1,E=x+2;o=ga(this,M,e,Ii,s,c,u,f,h,P,v,E),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(s.count,g.start+g.count);for(let _=m,M=p;_<M;_+=3){const b=_,y=_+1,x=_+2;o=ga(this,n,e,Ii,s,c,u,f,h,b,y,x),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function eh(l,e,t,r,n,i,o,a){let s;if(e.side===Ut?s=r.intersectTriangle(o,i,n,!0,a):s=r.intersectTriangle(n,i,o,e.side!==un,a),s===null)return null;ma.copy(a),ma.applyMatrix4(l.matrixWorld);const c=t.ray.origin.distanceTo(ma);return c<t.near||c>t.far?null:{distance:c,point:ma.clone(),object:l}}function ga(l,e,t,r,n,i,o,a,s,c,u,f){zn.fromBufferAttribute(n,c),Nn.fromBufferAttribute(n,u),kn.fromBufferAttribute(n,f);const h=l.morphTargetInfluences;if(i&&h){ca.set(0,0,0),ua.set(0,0,0),fa.set(0,0,0);for(let g=0,m=i.length;g<m;g++){const p=h[g],_=i[g];p!==0&&(Fo.fromBufferAttribute(_,c),Oo.fromBufferAttribute(_,u),zo.fromBufferAttribute(_,f),o?(ca.addScaledVector(Fo,p),ua.addScaledVector(Oo,p),fa.addScaledVector(zo,p)):(ca.addScaledVector(Fo.sub(zn),p),ua.addScaledVector(Oo.sub(Nn),p),fa.addScaledVector(zo.sub(kn),p)))}zn.add(ca),Nn.add(ua),kn.add(fa)}l.isSkinnedMesh&&(l.boneTransform(c,zn),l.boneTransform(u,Nn),l.boneTransform(f,kn));const d=eh(l,e,t,r,zn,Nn,kn,No);if(d){a&&(ha.fromBufferAttribute(a,c),da.fromBufferAttribute(a,u),pa.fromBufferAttribute(a,f),d.uv=_n.getUV(No,zn,Nn,kn,ha,da,pa,new ke)),s&&(ha.fromBufferAttribute(s,c),da.fromBufferAttribute(s,u),pa.fromBufferAttribute(s,f),d.uv2=_n.getUV(No,zn,Nn,kn,ha,da,pa,new ke));const g={a:c,b:u,c:f,normal:new j,materialIndex:0};_n.getNormal(zn,Nn,kn,g.normal),d.face=g}return d}class kr extends lt{constructor(e=1,t=1,r=1,n=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:o};const a=this;n=Math.floor(n),i=Math.floor(i),o=Math.floor(o);const s=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,r,t,e,o,i,0),g("z","y","x",1,-1,r,t,-e,o,i,1),g("x","z","y",1,1,e,r,t,n,o,2),g("x","z","y",1,-1,e,r,-t,n,o,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(s),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2));function g(m,p,_,M,b,y,x,C,P,v,E){const U=y/P,K=x/v,F=y/2,I=x/2,D=C/2,W=P+1,H=v+1;let te=0,Z=0;const Y=new j;for(let G=0;G<H;G++){const w=G*K-I;for(let R=0;R<W;R++){const O=R*U-F;Y[m]=O*M,Y[p]=w*b,Y[_]=D,c.push(Y.x,Y.y,Y.z),Y[m]=0,Y[p]=0,Y[_]=C>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(R/P),f.push(1-G/v),te+=1}}for(let G=0;G<v;G++)for(let w=0;w<P;w++){const R=h+w+W*G,O=h+w+W*(G+1),k=h+(w+1)+W*(G+1),B=h+(w+1)+W*G;s.push(R,O,B),s.push(O,k,B),Z+=6}a.addGroup(d,Z,E),d+=Z,h+=te}}static fromJSON(e){return new kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(l){const e={};for(const t in l){e[t]={};for(const r in l[t]){const n=l[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Mt(l){const e={};for(let t=0;t<l.length;t++){const r=Ji(l[t]);for(const n in r)e[n]=r[n]}return e}function th(l){const e=[];for(let t=0;t<l.length;t++)e.push(l[t].clone());return e}function su(l){return l.getRenderTarget()===null&&l.outputEncoding===nt?cn:Fr}const Ha={clone:Ji,merge:Mt};var nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ot extends tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nh,this.fragmentShader=ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=th(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class lu extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends lu{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=El*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return El*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,i,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(go*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const s=o.fullWidth,c=o.fullHeight;i+=o.offsetX*n/s,t-=o.offsetY*r/c,n*=o.width/s,r*=o.height/c}const a=this.filmOffset;a!==0&&(i+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,Oi=1;class rh extends wt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r;const n=new nn(Fi,Oi,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const i=new nn(Fi,Oi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(-1,0,0),this.add(i);const o=new nn(Fi,Oi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new nn(Fi,Oi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const s=new nn(Fi,Oi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(0,0,1),this.add(s);const c=new nn(Fi,Oi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[n,i,o,a,s,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=bn,e.xr.enabled=!1;const d=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,n),e.setRenderTarget(r,1),e.render(t,i),e.setRenderTarget(r,2),e.render(t,o),e.setRenderTarget(r,3),e.render(t,a),e.setRenderTarget(r,4),e.render(t,s),r.texture.generateMipmaps=d,e.setRenderTarget(r,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,r.texture.needsPMREMUpdate=!0}}class cu extends It{constructor(e,t,r,n,i,o,a,s,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qi,super(e,t,r,n,i,o,a,s,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ah extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new cu(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new kr(5,5,5),i=new ot({name:"CubemapFromEquirect",uniforms:Ji(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ut,blending:Bn});i.uniforms.tEquirect.value=t;const o=new vt(n,i),a=t.minFilter;return t.minFilter===Wa&&(t.minFilter=Dt),new rh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,n);e.setRenderTarget(i)}}const ko=new j,oh=new j,sh=new Rt;class Zn{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=ko.subVectors(r,t).cross(oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const r=e.delta(ko),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(r).multiplyScalar(i).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||sh.getNormalMatrix(e),n=this.coplanarPoint(ko).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new er,va=new j;class uu{constructor(e=new Zn,t=new Zn,r=new Zn,n=new Zn,i=new Zn,o=new Zn){this.planes=[e,t,r,n,i,o]}set(e,t,r,n,i,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(n),a[4].copy(i),a[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,n=r[0],i=r[1],o=r[2],a=r[3],s=r[4],c=r[5],u=r[6],f=r[7],h=r[8],d=r[9],g=r[10],m=r[11],p=r[12],_=r[13],M=r[14],b=r[15];return t[0].setComponents(a-n,f-s,m-h,b-p).normalize(),t[1].setComponents(a+n,f+s,m+h,b+p).normalize(),t[2].setComponents(a+i,f+c,m+d,b+_).normalize(),t[3].setComponents(a-i,f-c,m-d,b-_).normalize(),t[4].setComponents(a-o,f-u,m-g,b-M).normalize(),t[5].setComponents(a+o,f+u,m+g,b+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(va.x=n.normal.x>0?e.max.x:e.min.x,va.y=n.normal.y>0?e.max.y:e.min.y,va.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fu(){let l=null,e=!1,t=null,r=null;function n(i,o){t(i,o),r=l.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=l.requestAnimationFrame(n),e=!0)},stop:function(){l.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){l=i}}}function lh(l,e){const t=e.isWebGL2,r=new WeakMap;function n(c,u){const f=c.array,h=c.usage,d=l.createBuffer();l.bindBuffer(u,d),l.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function i(c,u,f){const h=u.array,d=u.updateRange;l.bindBuffer(f,c),d.count===-1?l.bufferSubData(f,0,h):(t?l.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):l.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(l.deleteBuffer(u.buffer),r.delete(c))}function s(c,u){if(c.isGLBufferAttribute){const h=r.get(c);(!h||h.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=r.get(c);f===void 0?r.set(c,n(c,u)):f.version<c.version&&(i(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:s}}class nr extends lt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,o=t/2,a=Math.floor(r),s=Math.floor(n),c=a+1,u=s+1,f=e/a,h=t/s,d=[],g=[],m=[],p=[];for(let _=0;_<u;_++){const M=_*h-o;for(let b=0;b<c;b++){const y=b*f-i;g.push(y,-M,0),m.push(0,0,1),p.push(b/a),p.push(1-_/s)}}for(let _=0;_<s;_++)for(let M=0;M<a;M++){const b=M+c*_,y=M+c*(_+1),x=M+1+c*(_+1),C=M+1+c*_;d.push(b,y,C),d.push(y,x,C)}this.setIndex(d),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(m,3)),this.setAttribute("uv",new Ft(p,2))}static fromJSON(e){return new nr(e.width,e.height,e.widthSegments,e.heightSegments)}}var ch=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,uh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mh="vec3 transformed = vec3( position );",gh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,_h=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,xh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ch=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Dh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Lh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Uh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,Bh=`#ifdef USE_ENVMAP
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
#endif`,Vh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hh=`#ifdef USE_FOG
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
#endif`,Yh=`#ifdef USE_GRADIENTMAP
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
}`,jh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Qh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,$h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,id=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,rd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ad=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ld=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Md=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ud=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,$d=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ep=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,tp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,np=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ip=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,rp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ap=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lp=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,pp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,gp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,wp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ep=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Lp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Rp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,He={alphamap_fragment:ch,alphamap_pars_fragment:uh,alphatest_fragment:fh,alphatest_pars_fragment:hh,aomap_fragment:dh,aomap_pars_fragment:ph,begin_vertex:mh,beginnormal_vertex:gh,bsdfs:vh,iridescence_fragment:_h,bumpmap_pars_fragment:xh,clipping_planes_fragment:yh,clipping_planes_pars_fragment:bh,clipping_planes_pars_vertex:Sh,clipping_planes_vertex:Mh,color_fragment:wh,color_pars_fragment:Th,color_pars_vertex:Eh,color_vertex:Ah,common:Ch,cube_uv_reflection_fragment:Dh,defaultnormal_vertex:Lh,displacementmap_pars_vertex:Ph,displacementmap_vertex:Rh,emissivemap_fragment:Uh,emissivemap_pars_fragment:Ih,encodings_fragment:Fh,encodings_pars_fragment:Oh,envmap_fragment:zh,envmap_common_pars_fragment:Nh,envmap_pars_fragment:kh,envmap_pars_vertex:Bh,envmap_physical_pars_fragment:Qh,envmap_vertex:Gh,fog_vertex:Vh,fog_pars_vertex:Wh,fog_fragment:Hh,fog_pars_fragment:Xh,gradientmap_pars_fragment:Yh,lightmap_fragment:jh,lightmap_pars_fragment:qh,lights_lambert_fragment:Zh,lights_lambert_pars_fragment:Kh,lights_pars_begin:Jh,lights_toon_fragment:$h,lights_toon_pars_fragment:ed,lights_phong_fragment:td,lights_phong_pars_fragment:nd,lights_physical_fragment:id,lights_physical_pars_fragment:rd,lights_fragment_begin:ad,lights_fragment_maps:od,lights_fragment_end:sd,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:fd,map_fragment:hd,map_pars_fragment:dd,map_particle_fragment:pd,map_particle_pars_fragment:md,metalnessmap_fragment:gd,metalnessmap_pars_fragment:vd,morphcolor_vertex:_d,morphnormal_vertex:xd,morphtarget_pars_vertex:yd,morphtarget_vertex:bd,normal_fragment_begin:Sd,normal_fragment_maps:Md,normal_pars_fragment:wd,normal_pars_vertex:Td,normal_vertex:Ed,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Dd,clearcoat_pars_fragment:Ld,iridescence_pars_fragment:Pd,output_fragment:Rd,packing:Ud,premultiplied_alpha_fragment:Id,project_vertex:Fd,dithering_fragment:Od,dithering_pars_fragment:zd,roughnessmap_fragment:Nd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Bd,shadowmap_pars_vertex:Gd,shadowmap_vertex:Vd,shadowmask_pars_fragment:Wd,skinbase_vertex:Hd,skinning_pars_vertex:Xd,skinning_vertex:Yd,skinnormal_vertex:jd,specularmap_fragment:qd,specularmap_pars_fragment:Zd,tonemapping_fragment:Kd,tonemapping_pars_fragment:Jd,transmission_fragment:Qd,transmission_pars_fragment:$d,uv_pars_fragment:ep,uv_pars_vertex:tp,uv_vertex:np,uv2_pars_fragment:ip,uv2_pars_vertex:rp,uv2_vertex:ap,worldpos_vertex:op,background_vert:sp,background_frag:lp,backgroundCube_vert:cp,backgroundCube_frag:up,cube_vert:fp,cube_frag:hp,depth_vert:dp,depth_frag:pp,distanceRGBA_vert:mp,distanceRGBA_frag:gp,equirect_vert:vp,equirect_frag:_p,linedashed_vert:xp,linedashed_frag:yp,meshbasic_vert:bp,meshbasic_frag:Sp,meshlambert_vert:Mp,meshlambert_frag:wp,meshmatcap_vert:Tp,meshmatcap_frag:Ep,meshnormal_vert:Ap,meshnormal_frag:Cp,meshphong_vert:Dp,meshphong_frag:Lp,meshphysical_vert:Pp,meshphysical_frag:Rp,meshtoon_vert:Up,meshtoon_frag:Ip,points_vert:Fp,points_frag:Op,shadow_vert:zp,shadow_frag:Np,sprite_vert:kp,sprite_frag:Bp},Me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Rt},uv2Transform:{value:new Rt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rt}}},Pt={basic:{uniforms:Mt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Mt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Mt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Mt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Mt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Mt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Mt([Me.points,Me.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Mt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Mt([Me.common,Me.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Mt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Mt([Me.sprite,Me.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Mt([Me.common,Me.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Mt([Me.lights,Me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Pt.physical={uniforms:Mt([Pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ke(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const _a={r:0,b:0,g:0};function Gp(l,e,t,r,n,i,o){const a=new Je(0);let s=i===!0?0:1,c,u,f=null,h=0,d=null;function g(p,_){let M=!1,b=_.isScene===!0?_.background:null;b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b));const y=l.xr,x=y.getSession&&y.getSession();x&&x.environmentBlendMode==="additive"&&(b=null),b===null?m(a,s):b&&b.isColor&&(m(b,1),M=!0),(l.autoClear||M)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Va)?(u===void 0&&(u=new vt(new kr(1,1,1),new ot({name:"BackgroundCubeMaterial",uniforms:Ji(Pt.backgroundCube.uniforms),vertexShader:Pt.backgroundCube.vertexShader,fragmentShader:Pt.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(f!==b||h!==b.version||d!==l.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=l.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new vt(new nr(2,2),new ot({name:"BackgroundMaterial",uniforms:Ji(Pt.background.uniforms),vertexShader:Pt.background.vertexShader,fragmentShader:Pt.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==l.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=l.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,_){p.getRGB(_a,su(l)),r.buffers.color.setClear(_a.r,_a.g,_a.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),s=_,m(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(p){s=p,m(a,s)},render:g}}function Vp(l,e,t,r){const n=l.getParameter(34921),i=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||i!==null,a={},s=p(null);let c=s,u=!1;function f(D,W,H,te,Z){let Y=!1;if(o){const G=m(te,H,W);c!==G&&(c=G,d(c.object)),Y=_(D,te,H,Z),Y&&M(D,te,H,Z)}else{const G=W.wireframe===!0;(c.geometry!==te.id||c.program!==H.id||c.wireframe!==G)&&(c.geometry=te.id,c.program=H.id,c.wireframe=G,Y=!0)}Z!==null&&t.update(Z,34963),(Y||u)&&(u=!1,v(D,W,H,te),Z!==null&&l.bindBuffer(34963,t.get(Z).buffer))}function h(){return r.isWebGL2?l.createVertexArray():i.createVertexArrayOES()}function d(D){return r.isWebGL2?l.bindVertexArray(D):i.bindVertexArrayOES(D)}function g(D){return r.isWebGL2?l.deleteVertexArray(D):i.deleteVertexArrayOES(D)}function m(D,W,H){const te=H.wireframe===!0;let Z=a[D.id];Z===void 0&&(Z={},a[D.id]=Z);let Y=Z[W.id];Y===void 0&&(Y={},Z[W.id]=Y);let G=Y[te];return G===void 0&&(G=p(h()),Y[te]=G),G}function p(D){const W=[],H=[],te=[];for(let Z=0;Z<n;Z++)W[Z]=0,H[Z]=0,te[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:H,attributeDivisors:te,object:D,attributes:{},index:null}}function _(D,W,H,te){const Z=c.attributes,Y=W.attributes;let G=0;const w=H.getAttributes();for(const R in w)if(w[R].location>=0){const k=Z[R];let B=Y[R];if(B===void 0&&(R==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),R==="instanceColor"&&D.instanceColor&&(B=D.instanceColor)),k===void 0||k.attribute!==B||B&&k.data!==B.data)return!0;G++}return c.attributesNum!==G||c.index!==te}function M(D,W,H,te){const Z={},Y=W.attributes;let G=0;const w=H.getAttributes();for(const R in w)if(w[R].location>=0){let k=Y[R];k===void 0&&(R==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),R==="instanceColor"&&D.instanceColor&&(k=D.instanceColor));const B={};B.attribute=k,k&&k.data&&(B.data=k.data),Z[R]=B,G++}c.attributes=Z,c.attributesNum=G,c.index=te}function b(){const D=c.newAttributes;for(let W=0,H=D.length;W<H;W++)D[W]=0}function y(D){x(D,0)}function x(D,W){const H=c.newAttributes,te=c.enabledAttributes,Z=c.attributeDivisors;H[D]=1,te[D]===0&&(l.enableVertexAttribArray(D),te[D]=1),Z[D]!==W&&((r.isWebGL2?l:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,W),Z[D]=W)}function C(){const D=c.newAttributes,W=c.enabledAttributes;for(let H=0,te=W.length;H<te;H++)W[H]!==D[H]&&(l.disableVertexAttribArray(H),W[H]=0)}function P(D,W,H,te,Z,Y){r.isWebGL2===!0&&(H===5124||H===5125)?l.vertexAttribIPointer(D,W,H,Z,Y):l.vertexAttribPointer(D,W,H,te,Z,Y)}function v(D,W,H,te){if(r.isWebGL2===!1&&(D.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const Z=te.attributes,Y=H.getAttributes(),G=W.defaultAttributeValues;for(const w in Y){const R=Y[w];if(R.location>=0){let O=Z[w];if(O===void 0&&(w==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),w==="instanceColor"&&D.instanceColor&&(O=D.instanceColor)),O!==void 0){const k=O.normalized,B=O.itemSize,z=t.get(O);if(z===void 0)continue;const ne=z.buffer,Q=z.type,fe=z.bytesPerElement;if(O.isInterleavedBufferAttribute){const le=O.data,de=le.stride,ie=O.offset;if(le.isInstancedInterleavedBuffer){for(let ye=0;ye<R.locationSize;ye++)x(R.location+ye,le.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<R.locationSize;ye++)y(R.location+ye);l.bindBuffer(34962,ne);for(let ye=0;ye<R.locationSize;ye++)P(R.location+ye,B/R.locationSize,Q,k,de*fe,(ie+B/R.locationSize*ye)*fe)}else{if(O.isInstancedBufferAttribute){for(let le=0;le<R.locationSize;le++)x(R.location+le,O.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let le=0;le<R.locationSize;le++)y(R.location+le);l.bindBuffer(34962,ne);for(let le=0;le<R.locationSize;le++)P(R.location+le,B/R.locationSize,Q,k,B*fe,B/R.locationSize*le*fe)}}else if(G!==void 0){const k=G[w];if(k!==void 0)switch(k.length){case 2:l.vertexAttrib2fv(R.location,k);break;case 3:l.vertexAttrib3fv(R.location,k);break;case 4:l.vertexAttrib4fv(R.location,k);break;default:l.vertexAttrib1fv(R.location,k)}}}}C()}function E(){F();for(const D in a){const W=a[D];for(const H in W){const te=W[H];for(const Z in te)g(te[Z].object),delete te[Z];delete W[H]}delete a[D]}}function U(D){if(a[D.id]===void 0)return;const W=a[D.id];for(const H in W){const te=W[H];for(const Z in te)g(te[Z].object),delete te[Z];delete W[H]}delete a[D.id]}function K(D){for(const W in a){const H=a[W];if(H[D.id]===void 0)continue;const te=H[D.id];for(const Z in te)g(te[Z].object),delete te[Z];delete H[D.id]}}function F(){I(),u=!0,c!==s&&(c=s,d(c.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:F,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:U,releaseStatesOfProgram:K,initAttributes:b,enableAttribute:y,disableUnusedAttributes:C}}function Wp(l,e,t,r){const n=r.isWebGL2;let i;function o(c){i=c}function a(c,u){l.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,f){if(f===0)return;let h,d;if(n)h=l,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](i,c,u,f),t.update(u,i,f)}this.setMode=o,this.render=a,this.renderInstances=s}function Hp(l,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=l.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function i(P){if(P==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&l instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&l instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const s=i(a);s!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",s,"instead."),a=s);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=l.getParameter(34930),h=l.getParameter(35660),d=l.getParameter(3379),g=l.getParameter(34076),m=l.getParameter(34921),p=l.getParameter(36347),_=l.getParameter(36348),M=l.getParameter(36349),b=h>0,y=o||e.has("OES_texture_float"),x=b&&y,C=o?l.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:i,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:x,maxSamples:C}}function Xp(l){const e=this;let t=null,r=0,n=!1,i=!1;const o=new Zn,a=new Rt,s={value:null,needsUpdate:!1};this.uniform=s,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){const g=f.length!==0||h||r!==0||n;return n=h,t=u(f,d,0),r=f.length,g},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1,c()},this.setState=function(f,h,d){const g=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,_=l.get(f);if(!n||g===null||g.length===0||i&&!p)i?u(null):c();else{const M=i?0:r,b=M*4;let y=_.clippingState||null;s.value=y,y=u(g,h,b,d);for(let x=0;x!==b;++x)y[x]=t[x];_.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function c(){s.value!==t&&(s.value=t,s.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,d,g){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=s.value,g!==!0||p===null){const _=d+m*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let b=0,y=d;b!==m;++b,y+=4)o.copy(f[b]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}s.value=p,s.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Yp(l){let e=new WeakMap;function t(o,a){return a===os?o.mapping=qi:a===ss&&(o.mapping=Zi),o}function r(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===os||a===ss)if(e.has(o)){const s=e.get(o).texture;return t(s,o.mapping)}else{const s=o.image;if(s&&s.height>0){const c=new ah(s.height/2);return c.fromEquirectangularTexture(l,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class hu extends lu{constructor(e=-1,t=1,r=1,n=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,o=r+e,a=n+t,s=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,o=i+c*this.view.width,a-=u*this.view.offsetY,s=a-u*this.view.height}this.projectionMatrix.makeOrthographic(i,o,a,s,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,Nl=[.125,.215,.35,.446,.526,.582],ri=20,Bo=new hu,kl=new Je;let Go=null;const Kn=(1+Math.sqrt(5))/2,Ni=1/Kn,Bl=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Kn,Ni),new j(0,Kn,-Ni),new j(Ni,0,Kn),new j(-Ni,0,Kn),new j(Kn,Ni,0),new j(-Kn,Ni,0)];class Gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Go=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Go),e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Go=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Ir,format:an,encoding:hi,depthBuffer:!1},n=Vl(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jp(i)),this._blurMaterial=qp(i,e,t)}return n}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,r,n){const a=new nn(90,1,t,r),s=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(kl),u.toneMapping=bn,u.autoClear=!1;const d=new ws({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new vt(new kr,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(kl),m=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(a.up.set(0,s[_],0),a.lookAt(c[_],0,0)):M===1?(a.up.set(0,0,s[_]),a.lookAt(0,c[_],0)):(a.up.set(0,s[_],0),a.lookAt(0,0,c[_]));const b=this._cubeSize;xa(n,M*b,_>2?b:0,b,b),u.setRenderTarget(n),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===qi||e.mapping===Zi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const i=n?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],i),a=i.uniforms;a.envMap.value=e;const s=this._cubeSize;xa(t,0,0,3*s,2*s),r.setRenderTarget(t),r.render(o,Bo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const i=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Bl[(n-1)%Bl.length];this._blur(e,n-1,n,i,o)}t.autoClear=r}_blur(e,t,r,n,i){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,n,"latitudinal",i),this._halfBlur(o,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,o,a){const s=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new vt(this._lodPlanes[n],c),h=c.uniforms,d=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*ri-1),m=i/g,p=isFinite(i)?1+Math.floor(u*m):ri;p>ri&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ri}`);const _=[];let M=0;for(let P=0;P<ri;++P){const v=P/m,E=Math.exp(-v*v/2);_.push(E),P===0?M+=E:P<p&&(M+=2*E)}for(let P=0;P<_.length;P++)_[P]=_[P]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-r;const y=this._sizeLods[n],x=3*y*(n>b-Xi?n-b+Xi:0),C=4*(this._cubeSize-y);xa(t,x,C,3*y,2*y),s.setRenderTarget(t),s.render(f,Bo)}}function jp(l){const e=[],t=[],r=[];let n=l;const i=l-Xi+1+Nl.length;for(let o=0;o<i;o++){const a=Math.pow(2,n);t.push(a);let s=1/a;o>l-Xi?s=Nl[o-l+Xi-1]:o===0&&(s=0),r.push(s);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,m=3,p=2,_=1,M=new Float32Array(m*g*d),b=new Float32Array(p*g*d),y=new Float32Array(_*g*d);for(let C=0;C<d;C++){const P=C%3*2/3-1,v=C>2?0:-1,E=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];M.set(E,m*g*C),b.set(h,p*g*C);const U=[C,C,C,C,C,C];y.set(U,_*g*C)}const x=new lt;x.setAttribute("position",new Vt(M,m)),x.setAttribute("uv",new Vt(b,p)),x.setAttribute("faceIndex",new Vt(y,_)),e.push(x),n>Xi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Vl(l,e,t){const r=new di(l,e,t);return r.texture.mapping=Va,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xa(l,e,t,r,n){l.viewport.set(e,t,r,n),l.scissor.set(e,t,r,n)}function qp(l,e,t){const r=new Float32Array(ri),n=new j(0,1,0);return new ot({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Wl(){return new ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Hl(){return new ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ts(){return`

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
	`}function Zp(l){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture){const s=a.mapping,c=s===os||s===ss,u=s===qi||s===Zi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Gl(l)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&n(f)){t===null&&(t=new Gl(l));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",i),h.texture}else return null}}}return a}function n(a){let s=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&s++;return s===c}function i(a){const s=a.target;s.removeEventListener("dispose",i);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function Kp(l){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=l.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Jp(l,e,t,r){const n={},i=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete n[h.id];const d=i.get(h);d&&(e.remove(d),i.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return n[h.id]===!0||(h.addEventListener("dispose",o),n[h.id]=!0,t.memory.geometries++),h}function s(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const d=f.morphAttributes;for(const g in d){const m=d[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let m=0;if(d!==null){const M=d.array;m=d.version;for(let b=0,y=M.length;b<y;b+=3){const x=M[b+0],C=M[b+1],P=M[b+2];h.push(x,C,C,P,P,x)}}else{const M=g.array;m=g.version;for(let b=0,y=M.length/3-1;b<y;b+=3){const x=b+0,C=b+1,P=b+2;h.push(x,C,C,P,P,x)}}const p=new($c(h)?ou:au)(h,1);p.version=m;const _=i.get(f);_&&e.remove(_),i.set(f,p)}function u(f){const h=i.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return i.get(f)}return{get:a,update:s,getWireframeAttribute:u}}function Qp(l,e,t,r){const n=r.isWebGL2;let i;function o(h){i=h}let a,s;function c(h){a=h.type,s=h.bytesPerElement}function u(h,d){l.drawElements(i,d,a,h*s),t.update(d,i,1)}function f(h,d,g){if(g===0)return;let m,p;if(n)m=l,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](i,d,a,h*s,g),t.update(d,i,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function $p(l){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(i/3);break;case 1:t.lines+=a*(i/2);break;case 3:t.lines+=a*(i-1);break;case 2:t.lines+=a*i;break;case 0:t.points+=a*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function em(l,e){return l[0]-e[0]}function tm(l,e){return Math.abs(e[1])-Math.abs(l[1])}function nm(l,e,t){const r={},n=new Float32Array(8),i=new WeakMap,o=new ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function s(c,u,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let _=i.get(u);if(_===void 0||_.count!==p){let H=function(){D.dispose(),i.delete(u),u.removeEventListener("dispose",H)};var g=H;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let U=0;y===!0&&(U=1),x===!0&&(U=2),C===!0&&(U=3);let K=u.attributes.position.count*U,F=1;K>e.maxTextureSize&&(F=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const I=new Float32Array(K*F*4*p),D=new iu(I,K,F,p);D.type=oi,D.needsUpdate=!0;const W=U*4;for(let te=0;te<p;te++){const Z=P[te],Y=v[te],G=E[te],w=K*F*4*te;for(let R=0;R<Z.count;R++){const O=R*W;y===!0&&(o.fromBufferAttribute(Z,R),I[w+O+0]=o.x,I[w+O+1]=o.y,I[w+O+2]=o.z,I[w+O+3]=0),x===!0&&(o.fromBufferAttribute(Y,R),I[w+O+4]=o.x,I[w+O+5]=o.y,I[w+O+6]=o.z,I[w+O+7]=0),C===!0&&(o.fromBufferAttribute(G,R),I[w+O+8]=o.x,I[w+O+9]=o.y,I[w+O+10]=o.z,I[w+O+11]=G.itemSize===4?o.w:1)}}_={count:p,texture:D,size:new ke(K,F)},i.set(u,_),u.addEventListener("dispose",H)}let M=0;for(let y=0;y<d.length;y++)M+=d[y];const b=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(l,"morphTargetBaseInfluence",b),h.getUniforms().setValue(l,"morphTargetInfluences",d),h.getUniforms().setValue(l,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(l,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let p=r[u.id];if(p===void 0||p.length!==m){p=[];for(let x=0;x<m;x++)p[x]=[x,0];r[u.id]=p}for(let x=0;x<m;x++){const C=p[x];C[0]=x,C[1]=d[x]}p.sort(tm);for(let x=0;x<8;x++)x<m&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(em);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let b=0;for(let x=0;x<8;x++){const C=a[x],P=C[0],v=C[1];P!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+x)!==_[P]&&u.setAttribute("morphTarget"+x,_[P]),M&&u.getAttribute("morphNormal"+x)!==M[P]&&u.setAttribute("morphNormal"+x,M[P]),n[x]=v,b+=v):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),M&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),n[x]=0)}const y=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(l,"morphTargetBaseInfluence",y),h.getUniforms().setValue(l,"morphTargetInfluences",n)}}return{update:s}}function im(l,e,t,r){let n=new WeakMap;function i(s){const c=r.render.frame,u=s.geometry,f=e.get(s,u);return n.get(f)!==c&&(e.update(f),n.set(f,c)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),t.update(s.instanceMatrix,34962),s.instanceColor!==null&&t.update(s.instanceColor,34962)),f}function o(){n=new WeakMap}function a(s){const c=s.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:o}}const du=new It,pu=new iu,mu=new Hf,gu=new cu,Xl=[],Yl=[],jl=new Float32Array(16),ql=new Float32Array(9),Zl=new Float32Array(4);function ir(l,e,t){const r=l[0];if(r<=0||r>0)return l;const n=e*t;let i=Xl[n];if(i===void 0&&(i=new Float32Array(n),Xl[n]=i),e!==0){r.toArray(i,0);for(let o=1,a=0;o!==e;++o)a+=t,l[o].toArray(i,a)}return i}function dt(l,e){if(l.length!==e.length)return!1;for(let t=0,r=l.length;t<r;t++)if(l[t]!==e[t])return!1;return!0}function pt(l,e){for(let t=0,r=e.length;t<r;t++)l[t]=e[t]}function Xa(l,e){let t=Yl[e];t===void 0&&(t=new Int32Array(e),Yl[e]=t);for(let r=0;r!==e;++r)t[r]=l.allocateTextureUnit();return t}function rm(l,e){const t=this.cache;t[0]!==e&&(l.uniform1f(this.addr,e),t[0]=e)}function am(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;l.uniform2fv(this.addr,e),pt(t,e)}}function om(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;l.uniform3fv(this.addr,e),pt(t,e)}}function sm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;l.uniform4fv(this.addr,e),pt(t,e)}}function lm(l,e){const t=this.cache,r=e.elements;if(r===void 0){if(dt(t,e))return;l.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,r))return;Zl.set(r),l.uniformMatrix2fv(this.addr,!1,Zl),pt(t,r)}}function cm(l,e){const t=this.cache,r=e.elements;if(r===void 0){if(dt(t,e))return;l.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,r))return;ql.set(r),l.uniformMatrix3fv(this.addr,!1,ql),pt(t,r)}}function um(l,e){const t=this.cache,r=e.elements;if(r===void 0){if(dt(t,e))return;l.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,r))return;jl.set(r),l.uniformMatrix4fv(this.addr,!1,jl),pt(t,r)}}function fm(l,e){const t=this.cache;t[0]!==e&&(l.uniform1i(this.addr,e),t[0]=e)}function hm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;l.uniform2iv(this.addr,e),pt(t,e)}}function dm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;l.uniform3iv(this.addr,e),pt(t,e)}}function pm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;l.uniform4iv(this.addr,e),pt(t,e)}}function mm(l,e){const t=this.cache;t[0]!==e&&(l.uniform1ui(this.addr,e),t[0]=e)}function gm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;l.uniform2uiv(this.addr,e),pt(t,e)}}function vm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;l.uniform3uiv(this.addr,e),pt(t,e)}}function _m(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;l.uniform4uiv(this.addr,e),pt(t,e)}}function xm(l,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(l.uniform1i(this.addr,n),r[0]=n),t.setTexture2D(e||du,n)}function ym(l,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(l.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||mu,n)}function bm(l,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(l.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||gu,n)}function Sm(l,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(l.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||pu,n)}function Mm(l){switch(l){case 5126:return rm;case 35664:return am;case 35665:return om;case 35666:return sm;case 35674:return lm;case 35675:return cm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return hm;case 35668:case 35672:return dm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return vm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Sm}}function wm(l,e){l.uniform1fv(this.addr,e)}function Tm(l,e){const t=ir(e,this.size,2);l.uniform2fv(this.addr,t)}function Em(l,e){const t=ir(e,this.size,3);l.uniform3fv(this.addr,t)}function Am(l,e){const t=ir(e,this.size,4);l.uniform4fv(this.addr,t)}function Cm(l,e){const t=ir(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,t)}function Dm(l,e){const t=ir(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,t)}function Lm(l,e){const t=ir(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,t)}function Pm(l,e){l.uniform1iv(this.addr,e)}function Rm(l,e){l.uniform2iv(this.addr,e)}function Um(l,e){l.uniform3iv(this.addr,e)}function Im(l,e){l.uniform4iv(this.addr,e)}function Fm(l,e){l.uniform1uiv(this.addr,e)}function Om(l,e){l.uniform2uiv(this.addr,e)}function zm(l,e){l.uniform3uiv(this.addr,e)}function Nm(l,e){l.uniform4uiv(this.addr,e)}function km(l,e,t){const r=this.cache,n=e.length,i=Xa(t,n);dt(r,i)||(l.uniform1iv(this.addr,i),pt(r,i));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||du,i[o])}function Bm(l,e,t){const r=this.cache,n=e.length,i=Xa(t,n);dt(r,i)||(l.uniform1iv(this.addr,i),pt(r,i));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||mu,i[o])}function Gm(l,e,t){const r=this.cache,n=e.length,i=Xa(t,n);dt(r,i)||(l.uniform1iv(this.addr,i),pt(r,i));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||gu,i[o])}function Vm(l,e,t){const r=this.cache,n=e.length,i=Xa(t,n);dt(r,i)||(l.uniform1iv(this.addr,i),pt(r,i));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||pu,i[o])}function Wm(l){switch(l){case 5126:return wm;case 35664:return Tm;case 35665:return Em;case 35666:return Am;case 35674:return Cm;case 35675:return Dm;case 35676:return Lm;case 5124:case 35670:return Pm;case 35667:case 35671:return Rm;case 35668:case 35672:return Um;case 35669:case 35673:return Im;case 5125:return Fm;case 36294:return Om;case 36295:return zm;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Vm}}class Hm{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Mm(t.type)}}class Xm{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=Wm(t.type)}}class Ym{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,o=n.length;i!==o;++i){const a=n[i];a.setValue(e,t[a.id],r)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function Kl(l,e){l.seq.push(e),l.map[e.id]=e}function jm(l,e,t){const r=l.name,n=r.length;for(Vo.lastIndex=0;;){const i=Vo.exec(r),o=Vo.lastIndex;let a=i[1];const s=i[2]==="]",c=i[3];if(s&&(a=a|0),c===void 0||c==="["&&o+2===n){Kl(t,c===void 0?new Hm(a,l,e):new Xm(a,l,e));break}else{let f=t.map[a];f===void 0&&(f=new Ym(a),Kl(t,f)),t=f}}}class Da{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,35718);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),o=e.getUniformLocation(t,i.name);jm(i,o,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,o=t.length;i!==o;++i){const a=t[i],s=r[a.id];s.needsUpdate!==!1&&a.setValue(e,s.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const o=e[n];o.id in t&&r.push(o)}return r}}function Jl(l,e,t){const r=l.createShader(e);return l.shaderSource(r,t),l.compileShader(r),r}let qm=0;function Zm(l,e){const t=l.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let o=n;o<i;o++){const a=o+1;r.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return r.join(`
`)}function Km(l){switch(l){case hi:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function Ql(l,e,t){const r=l.getShaderParameter(e,35713),n=l.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const o=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+Zm(l.getShaderSource(e),o)}else return n}function Jm(l,e){const t=Km(e);return"vec4 "+l+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Qm(l,e){let t;switch(e){case vf:t="Linear";break;case _f:t="Reinhard";break;case xf:t="OptimizedCineon";break;case yf:t="ACESFilmic";break;case bf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+l+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $m(l){return[l.extensionDerivatives||l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dr).join(`
`)}function eg(l){const e=[];for(const t in l){const r=l[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function tg(l,e){const t={},r=l.getProgramParameter(e,35721);for(let n=0;n<r;n++){const i=l.getActiveAttrib(e,n),o=i.name;let a=1;i.type===35674&&(a=2),i.type===35675&&(a=3),i.type===35676&&(a=4),t[o]={type:i.type,location:l.getAttribLocation(e,o),locationSize:a}}return t}function Dr(l){return l!==""}function $l(l,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ec(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function hs(l){return l.replace(ng,ig)}function ig(l,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return hs(t)}const rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(l){return l.replace(rg,ag)}function ag(l,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function nc(l){let e="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function og(l){let e="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF":l.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function sg(l){let e="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case qi:case Zi:e="ENVMAP_TYPE_CUBE";break;case Va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lg(l){let e="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function cg(l){let e="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case Zc:e="ENVMAP_BLENDING_MULTIPLY";break;case mf:e="ENVMAP_BLENDING_MIX";break;case gf:e="ENVMAP_BLENDING_ADD";break}return e}function ug(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function fg(l,e,t,r){const n=l.getContext(),i=t.defines;let o=t.vertexShader,a=t.fragmentShader;const s=og(t),c=sg(t),u=lg(t),f=cg(t),h=ug(t),d=t.isWebGL2?"":$m(t),g=eg(i),m=n.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Dr).join(`
`),p.length>0&&(p+=`
`),_=[d,g].filter(Dr).join(`
`),_.length>0&&(_+=`
`)):(p=[nc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+s:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),_=[d,nc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+s:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?He.tonemapping_pars_fragment:"",t.toneMapping!==bn?Qm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,Jm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),o=hs(o),o=$l(o,t),o=ec(o,t),a=hs(a),a=$l(a,t),a=ec(a,t),o=tc(o),a=tc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=M+p+o,y=M+_+a,x=Jl(n,35633,b),C=Jl(n,35632,y);if(n.attachShader(m,x),n.attachShader(m,C),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),l.debug.checkShaderErrors){const E=n.getProgramInfoLog(m).trim(),U=n.getShaderInfoLog(x).trim(),K=n.getShaderInfoLog(C).trim();let F=!0,I=!0;if(n.getProgramParameter(m,35714)===!1){F=!1;const D=Ql(n,x,"vertex"),W=Ql(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+D+`
`+W)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(U===""||K==="")&&(I=!1);I&&(this.diagnostics={runnable:F,programLog:E,vertexShader:{log:U,prefix:p},fragmentShader:{log:K,prefix:_}})}n.deleteShader(x),n.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new Da(n,m)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=tg(n,m)),v},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=qm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=C,this}let hg=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new pg(e),t.set(e,r)),r}}class pg{constructor(e){this.id=hg++,this.code=e,this.usedTimes=0}}function mg(l,e,t,r,n,i,o){const a=new ru,s=new dg,c=[],u=n.isWebGL2,f=n.logarithmicDepthBuffer,h=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,E,U,K,F){const I=K.fog,D=F.geometry,W=v.isMeshStandardMaterial?K.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||W),te=H&&H.mapping===Va?H.image.height:null,Z=g[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,G=Y!==void 0?Y.length:0;let w=0;D.morphAttributes.position!==void 0&&(w=1),D.morphAttributes.normal!==void 0&&(w=2),D.morphAttributes.color!==void 0&&(w=3);let R,O,k,B;if(Z){const de=Pt[Z];R=de.vertexShader,O=de.fragmentShader}else R=v.vertexShader,O=v.fragmentShader,s.update(v),k=s.getVertexShaderID(v),B=s.getFragmentShaderID(v);const z=l.getRenderTarget(),ne=v.alphaTest>0,Q=v.clearcoat>0,fe=v.iridescence>0;return{isWebGL2:u,shaderID:Z,shaderName:v.type,vertexShader:R,fragmentShader:O,defines:v.defines,customVertexShaderID:k,customFragmentShaderID:B,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:h,outputEncoding:z===null?l.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:hi,map:!!v.map,matcap:!!v.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:te,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Bf,tangentSpaceNormalMap:v.normalMapType===kf,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===nt,clearcoat:Q,clearcoatMap:Q&&!!v.clearcoatMap,clearcoatRoughnessMap:Q&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Q&&!!v.clearcoatNormalMap,iridescence:fe,iridescenceMap:fe&&!!v.iridescenceMap,iridescenceThicknessMap:fe&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Yi,alphaMap:!!v.alphaMap,alphaTest:ne,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:w,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:l.shadowMap.enabled&&U.length>0,shadowMapType:l.shadowMap.type,toneMapping:v.toneMapped?l.toneMapping:bn,physicallyCorrectLights:l.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===un,flipSided:v.side===Ut,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)E.push(U),E.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(_(E,v),M(E,v),E.push(l.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function _(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),v.push(a.mask)}function b(v){const E=g[v.type];let U;if(E){const K=Pt[E];U=Ha.clone(K.uniforms)}else U=v.uniforms;return U}function y(v,E){let U;for(let K=0,F=c.length;K<F;K++){const I=c[K];if(I.cacheKey===E){U=I,++U.usedTimes;break}}return U===void 0&&(U=new fg(l,E,v,i),c.push(U)),U}function x(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function C(v){s.remove(v)}function P(){s.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:y,releaseProgram:x,releaseShaderCache:C,programs:c,dispose:P}}function gg(){let l=new WeakMap;function e(i){let o=l.get(i);return o===void 0&&(o={},l.set(i,o)),o}function t(i){l.delete(i)}function r(i,o,a){l.get(i)[o]=a}function n(){l=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function vg(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function ic(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function rc(){const l=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function o(f,h,d,g,m,p){let _=l[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:m,group:p},l[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=d,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=m,_.group=p),e++,_}function a(f,h,d,g,m,p){const _=o(f,h,d,g,m,p);d.transmission>0?r.push(_):d.transparent===!0?n.push(_):t.push(_)}function s(f,h,d,g,m,p){const _=o(f,h,d,g,m,p);d.transmission>0?r.unshift(_):d.transparent===!0?n.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||vg),r.length>1&&r.sort(h||ic),n.length>1&&n.sort(h||ic)}function u(){for(let f=e,h=l.length;f<h;f++){const d=l[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:a,unshift:s,finish:u,sort:c}}function _g(){let l=new WeakMap;function e(r,n){const i=l.get(r);let o;return i===void 0?(o=new rc,l.set(r,[o])):n>=i.length?(o=new rc,i.push(o)):o=i[n],o}function t(){l=new WeakMap}return{get:e,dispose:t}}function xg(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Je};break;case"SpotLight":t={position:new j,direction:new j,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new j,halfWidth:new j,halfHeight:new j};break}return l[e.id]=t,t}}}function yg(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=t,t}}}let bg=0;function Sg(l,e){return(e.castShadow?2:0)-(l.castShadow?2:0)+(e.map?1:0)-(l.map?1:0)}function Mg(l,e){const t=new xg,r=yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)n.probe.push(new j);const i=new j,o=new at,a=new at;function s(u,f){let h=0,d=0,g=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let m=0,p=0,_=0,M=0,b=0,y=0,x=0,C=0,P=0,v=0;u.sort(Sg);const E=f!==!0?Math.PI:1;for(let K=0,F=u.length;K<F;K++){const I=u[K],D=I.color,W=I.intensity,H=I.distance,te=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=D.r*W*E,d+=D.g*W*E,g+=D.b*W*E;else if(I.isLightProbe)for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],W);else if(I.isDirectionalLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const Y=I.shadow,G=r.get(I);G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=I.shadow.matrix,y++}n.directional[m]=Z,m++}else if(I.isSpotLight){const Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(D).multiplyScalar(W*E),Z.distance=H,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[_]=Z;const Y=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,Y.updateMatrices(I),I.castShadow&&v++),n.spotLightMatrix[_]=Y.matrix,I.castShadow){const G=r.get(I);G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=te,C++}_++}else if(I.isRectAreaLight){const Z=t.get(I);Z.color.copy(D).multiplyScalar(W),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=Z,M++}else if(I.isPointLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*E),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const Y=I.shadow,G=r.get(I);G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=I.shadow.matrix,x++}n.point[p]=Z,p++}else if(I.isHemisphereLight){const Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(W*E),Z.groundColor.copy(I.groundColor).multiplyScalar(W*E),n.hemi[b]=Z,b++}}M>0&&(e.isWebGL2||l.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=g;const U=n.hash;(U.directionalLength!==m||U.pointLength!==p||U.spotLength!==_||U.rectAreaLength!==M||U.hemiLength!==b||U.numDirectionalShadows!==y||U.numPointShadows!==x||U.numSpotShadows!==C||U.numSpotMaps!==P)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=M,n.point.length=p,n.hemi.length=b,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=C+P-v,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=v,U.directionalLength=m,U.pointLength=p,U.spotLength=_,U.rectAreaLength=M,U.hemiLength=b,U.numDirectionalShadows=y,U.numPointShadows=x,U.numSpotShadows=C,U.numSpotMaps=P,n.version=bg++)}function c(u,f){let h=0,d=0,g=0,m=0,p=0;const _=f.matrixWorldInverse;for(let M=0,b=u.length;M<b;M++){const y=u[M];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(_),h++}else if(y.isSpotLight){const x=n.spot[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),d++}else if(y.isHemisphereLight){const x=n.hemi[p];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(_),p++}}}return{setup:s,setupView:c,state:n}}function ac(l,e){const t=new Mg(l,e),r=[],n=[];function i(){r.length=0,n.length=0}function o(f){r.push(f)}function a(f){n.push(f)}function s(f){t.setup(r,f)}function c(f){t.setupView(r,f)}return{init:i,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:s,setupLightsView:c,pushLight:o,pushShadow:a}}function wg(l,e){let t=new WeakMap;function r(i,o=0){const a=t.get(i);let s;return a===void 0?(s=new ac(l,e),t.set(i,[s])):o>=a.length?(s=new ac(l,e),a.push(s)):s=a[o],s}function n(){t=new WeakMap}return{get:r,dispose:n}}class vu extends tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _u extends tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new j,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ag(l,e,t){let r=new uu;const n=new ke,i=new ke,o=new ht,a=new vu({depthPacking:Qc}),s=new _u,c={},u=t.maxTextureSize,f={0:Ut,1:ui,2:un},h=new ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Tg,fragmentShader:Eg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new lt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new vt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc,this.render=function(y,x,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const P=l.getRenderTarget(),v=l.getActiveCubeFace(),E=l.getActiveMipmapLevel(),U=l.state;U.setBlending(Bn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let K=0,F=y.length;K<F;K++){const I=y[K],D=I.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;n.copy(D.mapSize);const W=D.getFrameExtents();if(n.multiply(W),i.copy(D.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/W.x),n.x=i.x*W.x,D.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/W.y),n.y=i.y*W.y,D.mapSize.y=i.y)),D.map===null){const te=this.type!==Cr?{minFilter:Ct,magFilter:Ct}:{};D.map=new di(n.x,n.y,te),D.map.texture.name=I.name+".shadowMap",D.camera.updateProjectionMatrix()}l.setRenderTarget(D.map),l.clear();const H=D.getViewportCount();for(let te=0;te<H;te++){const Z=D.getViewport(te);o.set(i.x*Z.x,i.y*Z.y,i.x*Z.z,i.y*Z.w),U.viewport(o),D.updateMatrices(I,te),r=D.getFrustum(),b(x,C,D.camera,I,this.type)}D.isPointLightShadow!==!0&&this.type===Cr&&_(D,C),D.needsUpdate=!1}p.needsUpdate=!1,l.setRenderTarget(P,v,E)};function _(y,x){const C=e.update(m);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new di(n.x,n.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,l.setRenderTarget(y.mapPass),l.clear(),l.renderBufferDirect(x,null,C,h,m,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,l.setRenderTarget(y.map),l.clear(),l.renderBufferDirect(x,null,C,d,m,null)}function M(y,x,C,P,v,E){let U=null;const K=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(K!==void 0?U=K:U=C.isPointLight===!0?s:a,l.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const F=U.uuid,I=x.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let W=D[I];W===void 0&&(W=U.clone(),D[I]=W),U=W}return U.visible=x.visible,U.wireframe=x.wireframe,E===Cr?U.side=x.shadowSide!==null?x.shadowSide:x.side:U.side=x.shadowSide!==null?x.shadowSide:f[x.side],U.alphaMap=x.alphaMap,U.alphaTest=x.alphaTest,U.map=x.map,U.clipShadows=x.clipShadows,U.clippingPlanes=x.clippingPlanes,U.clipIntersection=x.clipIntersection,U.displacementMap=x.displacementMap,U.displacementScale=x.displacementScale,U.displacementBias=x.displacementBias,U.wireframeLinewidth=x.wireframeLinewidth,U.linewidth=x.linewidth,C.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(C.matrixWorld),U.nearDistance=P,U.farDistance=v),U}function b(y,x,C,P,v){if(y.visible===!1)return;if(y.layers.test(x.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Cr)&&(!y.frustumCulled||r.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const K=e.update(y),F=y.material;if(Array.isArray(F)){const I=K.groups;for(let D=0,W=I.length;D<W;D++){const H=I[D],te=F[H.materialIndex];if(te&&te.visible){const Z=M(y,te,P,C.near,C.far,v);l.renderBufferDirect(C,null,K,Z,y,H)}}}else if(F.visible){const I=M(y,F,P,C.near,C.far,v);l.renderBufferDirect(C,null,K,I,y,null)}}const U=y.children;for(let K=0,F=U.length;K<F;K++)b(U[K],x,C,P,v)}}function Cg(l,e,t){const r=t.isWebGL2;function n(){let N=!1;const J=new ht;let ce=null;const Te=new ht(0,0,0,0);return{setMask:function(Se){ce!==Se&&!N&&(l.colorMask(Se,Se,Se,Se),ce=Se)},setLocked:function(Se){N=Se},setClear:function(Se,Le,Xe,Be,Fe){Fe===!0&&(Se*=Be,Le*=Be,Xe*=Be),J.set(Se,Le,Xe,Be),Te.equals(J)===!1&&(l.clearColor(Se,Le,Xe,Be),Te.copy(J))},reset:function(){N=!1,ce=null,Te.set(-1,0,0,0)}}}function i(){let N=!1,J=null,ce=null,Te=null;return{setTest:function(Se){Se?ne(2929):Q(2929)},setMask:function(Se){J!==Se&&!N&&(l.depthMask(Se),J=Se)},setFunc:function(Se){if(ce!==Se){switch(Se){case lf:l.depthFunc(512);break;case cf:l.depthFunc(519);break;case uf:l.depthFunc(513);break;case as:l.depthFunc(515);break;case ff:l.depthFunc(514);break;case hf:l.depthFunc(518);break;case df:l.depthFunc(516);break;case pf:l.depthFunc(517);break;default:l.depthFunc(515)}ce=Se}},setLocked:function(Se){N=Se},setClear:function(Se){Te!==Se&&(l.clearDepth(Se),Te=Se)},reset:function(){N=!1,J=null,ce=null,Te=null}}}function o(){let N=!1,J=null,ce=null,Te=null,Se=null,Le=null,Xe=null,Be=null,Fe=null;return{setTest:function(Oe){N||(Oe?ne(2960):Q(2960))},setMask:function(Oe){J!==Oe&&!N&&(l.stencilMask(Oe),J=Oe)},setFunc:function(Oe,Qe,Ke){(ce!==Oe||Te!==Qe||Se!==Ke)&&(l.stencilFunc(Oe,Qe,Ke),ce=Oe,Te=Qe,Se=Ke)},setOp:function(Oe,Qe,Ke){(Le!==Oe||Xe!==Qe||Be!==Ke)&&(l.stencilOp(Oe,Qe,Ke),Le=Oe,Xe=Qe,Be=Ke)},setLocked:function(Oe){N=Oe},setClear:function(Oe){Fe!==Oe&&(l.clearStencil(Oe),Fe=Oe)},reset:function(){N=!1,J=null,ce=null,Te=null,Se=null,Le=null,Xe=null,Be=null,Fe=null}}}const a=new n,s=new i,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,m=[],p=null,_=!1,M=null,b=null,y=null,x=null,C=null,P=null,v=null,E=!1,U=null,K=null,F=null,I=null,D=null;const W=l.getParameter(35661);let H=!1,te=0;const Z=l.getParameter(7938);Z.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=te>=1):Z.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=te>=2);let Y=null,G={};const w=l.getParameter(3088),R=l.getParameter(2978),O=new ht().fromArray(w),k=new ht().fromArray(R);function B(N,J,ce){const Te=new Uint8Array(4),Se=l.createTexture();l.bindTexture(N,Se),l.texParameteri(N,10241,9728),l.texParameteri(N,10240,9728);for(let Le=0;Le<ce;Le++)l.texImage2D(J+Le,0,6408,1,1,0,6408,5121,Te);return Se}const z={};z[3553]=B(3553,3553,1),z[34067]=B(34067,34069,6),a.setClear(0,0,0,1),s.setClear(1),c.setClear(0),ne(2929),s.setFunc(as),De(!1),Ue(Zs),ne(2884),Pe(Bn);function ne(N){h[N]!==!0&&(l.enable(N),h[N]=!0)}function Q(N){h[N]!==!1&&(l.disable(N),h[N]=!1)}function fe(N,J){return d[N]!==J?(l.bindFramebuffer(N,J),d[N]=J,r&&(N===36009&&(d[36160]=J),N===36160&&(d[36009]=J)),!0):!1}function le(N,J){let ce=m,Te=!1;if(N)if(ce=g.get(J),ce===void 0&&(ce=[],g.set(J,ce)),N.isWebGLMultipleRenderTargets){const Se=N.texture;if(ce.length!==Se.length||ce[0]!==36064){for(let Le=0,Xe=Se.length;Le<Xe;Le++)ce[Le]=36064+Le;ce.length=Se.length,Te=!0}}else ce[0]!==36064&&(ce[0]=36064,Te=!0);else ce[0]!==1029&&(ce[0]=1029,Te=!0);Te&&(t.isWebGL2?l.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function de(N){return p!==N?(l.useProgram(N),p=N,!0):!1}const ie={[ii]:32774,[Ku]:32778,[Ju]:32779};if(r)ie[$s]=32775,ie[el]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(ie[$s]=N.MIN_EXT,ie[el]=N.MAX_EXT)}const ye={[Qu]:0,[$u]:1,[ef]:768,[Ss]:770,[sf]:776,[af]:774,[nf]:772,[tf]:769,[qc]:771,[of]:775,[rf]:773};function Pe(N,J,ce,Te,Se,Le,Xe,Be){if(N===Bn){_===!0&&(Q(3042),_=!1);return}if(_===!1&&(ne(3042),_=!0),N!==jc){if(N!==M||Be!==E){if((b!==ii||C!==ii)&&(l.blendEquation(32774),b=ii,C=ii),Be)switch(N){case Yi:l.blendFuncSeparate(1,771,1,771);break;case Ks:l.blendFunc(1,1);break;case Js:l.blendFuncSeparate(0,769,0,1);break;case Qs:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Yi:l.blendFuncSeparate(770,771,1,771);break;case Ks:l.blendFunc(770,1);break;case Js:l.blendFuncSeparate(0,769,0,1);break;case Qs:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,x=null,P=null,v=null,M=N,E=Be}return}Se=Se||J,Le=Le||ce,Xe=Xe||Te,(J!==b||Se!==C)&&(l.blendEquationSeparate(ie[J],ie[Se]),b=J,C=Se),(ce!==y||Te!==x||Le!==P||Xe!==v)&&(l.blendFuncSeparate(ye[ce],ye[Te],ye[Le],ye[Xe]),y=ce,x=Te,P=Le,v=Xe),M=N,E=!1}function Ce(N,J){N.side===un?Q(2884):ne(2884);let ce=N.side===Ut;J&&(ce=!ce),De(ce),N.blending===Yi&&N.transparent===!1?Pe(Bn):Pe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),a.setMask(N.colorWrite);const Te=N.stencilWrite;c.setTest(Te),Te&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),be(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(32926):Q(32926)}function De(N){U!==N&&(N?l.frontFace(2304):l.frontFace(2305),U=N)}function Ue(N){N!==ju?(ne(2884),N!==K&&(N===Zs?l.cullFace(1029):N===qu?l.cullFace(1028):l.cullFace(1032))):Q(2884),K=N}function me(N){N!==F&&(H&&l.lineWidth(N),F=N)}function be(N,J,ce){N?(ne(32823),(I!==J||D!==ce)&&(l.polygonOffset(J,ce),I=J,D=ce)):Q(32823)}function Ee(N){N?ne(3089):Q(3089)}function oe(N){N===void 0&&(N=33984+W-1),Y!==N&&(l.activeTexture(N),Y=N)}function T(N,J,ce){ce===void 0&&(Y===null?ce=33984+W-1:ce=Y);let Te=G[ce];Te===void 0&&(Te={type:void 0,texture:void 0},G[ce]=Te),(Te.type!==N||Te.texture!==J)&&(Y!==ce&&(l.activeTexture(ce),Y=ce),l.bindTexture(N,J||z[N]),Te.type=N,Te.texture=J)}function S(){const N=G[Y];N!==void 0&&N.type!==void 0&&(l.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function X(){try{l.compressedTexImage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{l.compressedTexImage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{l.texSubImage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{l.texSubImage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{l.texStorage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{l.texStorage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{l.texImage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{l.texImage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(N){O.equals(N)===!1&&(l.scissor(N.x,N.y,N.z,N.w),O.copy(N))}function ue(N){k.equals(N)===!1&&(l.viewport(N.x,N.y,N.z,N.w),k.copy(N))}function Ae(N,J){let ce=f.get(J);ce===void 0&&(ce=new WeakMap,f.set(J,ce));let Te=ce.get(N);Te===void 0&&(Te=l.getUniformBlockIndex(J,N.name),ce.set(N,Te))}function Re(N,J){const Te=f.get(J).get(N);u.get(N)!==Te&&(l.uniformBlockBinding(J,Te,N.__bindingPointIndex),u.set(N,Te))}function Ne(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),r===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),h={},Y=null,G={},d={},g=new WeakMap,m=[],p=null,_=!1,M=null,b=null,y=null,x=null,C=null,P=null,v=null,E=!1,U=null,K=null,F=null,I=null,D=null,O.set(0,0,l.canvas.width,l.canvas.height),k.set(0,0,l.canvas.width,l.canvas.height),a.reset(),s.reset(),c.reset()}return{buffers:{color:a,depth:s,stencil:c},enable:ne,disable:Q,bindFramebuffer:fe,drawBuffers:le,useProgram:de,setBlending:Pe,setMaterial:Ce,setFlipSided:De,setCullFace:Ue,setLineWidth:me,setPolygonOffset:be,setScissorTest:Ee,activeTexture:oe,bindTexture:T,unbindTexture:S,compressedTexImage2D:X,compressedTexImage3D:ee,texImage2D:xe,texImage3D:he,updateUBOMapping:Ae,uniformBlockBinding:Re,texStorage2D:V,texStorage3D:ge,texSubImage2D:pe,texSubImage3D:re,compressedTexSubImage2D:_e,compressedTexSubImage3D:L,scissor:ve,viewport:ue,reset:Ne}}function Dg(l,e,t,r,n,i,o){const a=n.isWebGL2,s=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,f=n.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,S){return _?new OffscreenCanvas(T,S):Ga("canvas")}function b(T,S,X,ee){let pe=1;if((T.width>ee||T.height>ee)&&(pe=ee/Math.max(T.width,T.height)),pe<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const re=S?fs:Math.floor,_e=re(pe*T.width),L=re(pe*T.height);m===void 0&&(m=M(_e,L));const V=X?M(_e,L):m;return V.width=_e,V.height=L,V.getContext("2d").drawImage(T,0,0,_e,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+_e+"x"+L+")."),V}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return Al(T.width)&&Al(T.height)}function x(T){return a?!1:T.wrapS!==rn||T.wrapT!==rn||T.minFilter!==Ct&&T.minFilter!==Dt}function C(T,S){return T.generateMipmaps&&S&&T.minFilter!==Ct&&T.minFilter!==Dt}function P(T){l.generateMipmap(T)}function v(T,S,X,ee,pe=!1){if(a===!1)return S;if(T!==null){if(l[T]!==void 0)return l[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re=S;return S===6403&&(X===5126&&(re=33326),X===5131&&(re=33325),X===5121&&(re=33321)),S===33319&&(X===5126&&(re=33328),X===5131&&(re=33327),X===5121&&(re=33323)),S===6408&&(X===5126&&(re=34836),X===5131&&(re=34842),X===5121&&(re=ee===nt&&pe===!1?35907:32856),X===32819&&(re=32854),X===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function E(T,S,X){return C(T,X)===!0||T.isFramebufferTexture&&T.minFilter!==Ct&&T.minFilter!==Dt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function U(T){return T===Ct||T===tl||T===nl?9728:9729}function K(T){const S=T.target;S.removeEventListener("dispose",K),I(S),S.isVideoTexture&&g.delete(S)}function F(T){const S=T.target;S.removeEventListener("dispose",F),W(S)}function I(T){const S=r.get(T);if(S.__webglInit===void 0)return;const X=T.source,ee=p.get(X);if(ee){const pe=ee[S.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&D(T),Object.keys(ee).length===0&&p.delete(X)}r.remove(T)}function D(T){const S=r.get(T);l.deleteTexture(S.__webglTexture);const X=T.source,ee=p.get(X);delete ee[S.__cacheKey],o.memory.textures--}function W(T){const S=T.texture,X=r.get(T),ee=r.get(S);if(ee.__webglTexture!==void 0&&(l.deleteTexture(ee.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++)l.deleteFramebuffer(X.__webglFramebuffer[pe]),X.__webglDepthbuffer&&l.deleteRenderbuffer(X.__webglDepthbuffer[pe]);else{if(l.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&l.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&l.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let pe=0;pe<X.__webglColorRenderbuffer.length;pe++)X.__webglColorRenderbuffer[pe]&&l.deleteRenderbuffer(X.__webglColorRenderbuffer[pe]);X.__webglDepthRenderbuffer&&l.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let pe=0,re=S.length;pe<re;pe++){const _e=r.get(S[pe]);_e.__webglTexture&&(l.deleteTexture(_e.__webglTexture),o.memory.textures--),r.remove(S[pe])}r.remove(S),r.remove(T)}let H=0;function te(){H=0}function Z(){const T=H;return T>=s&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s),H+=1,T}function Y(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function G(T,S){const X=r.get(T);if(T.isVideoTexture&&Ee(T),T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(X,T,S);return}}t.bindTexture(3553,X.__webglTexture,33984+S)}function w(T,S){const X=r.get(T);if(T.version>0&&X.__version!==T.version){Q(X,T,S);return}t.bindTexture(35866,X.__webglTexture,33984+S)}function R(T,S){const X=r.get(T);if(T.version>0&&X.__version!==T.version){Q(X,T,S);return}t.bindTexture(32879,X.__webglTexture,33984+S)}function O(T,S){const X=r.get(T);if(T.version>0&&X.__version!==T.version){fe(X,T,S);return}t.bindTexture(34067,X.__webglTexture,33984+S)}const k={[ls]:10497,[rn]:33071,[cs]:33648},B={[Ct]:9728,[tl]:9984,[nl]:9986,[Dt]:9729,[Sf]:9985,[Wa]:9987};function z(T,S,X){if(X?(l.texParameteri(T,10242,k[S.wrapS]),l.texParameteri(T,10243,k[S.wrapT]),(T===32879||T===35866)&&l.texParameteri(T,32882,k[S.wrapR]),l.texParameteri(T,10240,B[S.magFilter]),l.texParameteri(T,10241,B[S.minFilter])):(l.texParameteri(T,10242,33071),l.texParameteri(T,10243,33071),(T===32879||T===35866)&&l.texParameteri(T,32882,33071),(S.wrapS!==rn||S.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(T,10240,U(S.magFilter)),l.texParameteri(T,10241,U(S.minFilter)),S.minFilter!==Ct&&S.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.type===oi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ir&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||r.get(S).__currentAnisotropy)&&(l.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy)}}function ne(T,S){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",K));const ee=S.source;let pe=p.get(ee);pe===void 0&&(pe={},p.set(ee,pe));const re=Y(S);if(re!==T.__cacheKey){pe[re]===void 0&&(pe[re]={texture:l.createTexture(),usedTimes:0},o.memory.textures++,X=!0),pe[re].usedTimes++;const _e=pe[T.__cacheKey];_e!==void 0&&(pe[T.__cacheKey].usedTimes--,_e.usedTimes===0&&D(S)),T.__cacheKey=re,T.__webglTexture=pe[re].texture}return X}function Q(T,S,X){let ee=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=35866),S.isData3DTexture&&(ee=32879);const pe=ne(T,S),re=S.source;t.bindTexture(ee,T.__webglTexture,33984+X);const _e=r.get(re);if(re.version!==_e.__version||pe===!0){t.activeTexture(33984+X),l.pixelStorei(37440,S.flipY),l.pixelStorei(37441,S.premultiplyAlpha),l.pixelStorei(3317,S.unpackAlignment),l.pixelStorei(37443,0);const L=x(S)&&y(S.image)===!1;let V=b(S.image,L,!1,u);V=oe(S,V);const ge=y(V)||a,xe=i.convert(S.format,S.encoding);let he=i.convert(S.type),ve=v(S.internalFormat,xe,he,S.encoding,S.isVideoTexture);z(ee,S,ge);let ue;const Ae=S.mipmaps,Re=a&&S.isVideoTexture!==!0,Ne=_e.__version===void 0||pe===!0,N=E(S,V,ge);if(S.isDepthTexture)ve=6402,a?S.type===oi?ve=36012:S.type===ai?ve=33190:S.type===ji?ve=35056:ve=33189:S.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===si&&ve===6402&&S.type!==Jc&&S.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ai,he=i.convert(S.type)),S.format===Ki&&ve===6402&&(ve=34041,S.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ji,he=i.convert(S.type))),Ne&&(Re?t.texStorage2D(3553,1,ve,V.width,V.height):t.texImage2D(3553,0,ve,V.width,V.height,0,xe,he,null));else if(S.isDataTexture)if(Ae.length>0&&ge){Re&&Ne&&t.texStorage2D(3553,N,ve,Ae[0].width,Ae[0].height);for(let J=0,ce=Ae.length;J<ce;J++)ue=Ae[J],Re?t.texSubImage2D(3553,J,0,0,ue.width,ue.height,xe,he,ue.data):t.texImage2D(3553,J,ve,ue.width,ue.height,0,xe,he,ue.data);S.generateMipmaps=!1}else Re?(Ne&&t.texStorage2D(3553,N,ve,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,xe,he,V.data)):t.texImage2D(3553,0,ve,V.width,V.height,0,xe,he,V.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Re&&Ne&&t.texStorage3D(35866,N,ve,Ae[0].width,Ae[0].height,V.depth);for(let J=0,ce=Ae.length;J<ce;J++)ue=Ae[J],S.format!==an?xe!==null?Re?t.compressedTexSubImage3D(35866,J,0,0,0,ue.width,ue.height,V.depth,xe,ue.data,0,0):t.compressedTexImage3D(35866,J,ve,ue.width,ue.height,V.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage3D(35866,J,0,0,0,ue.width,ue.height,V.depth,xe,he,ue.data):t.texImage3D(35866,J,ve,ue.width,ue.height,V.depth,0,xe,he,ue.data)}else{Re&&Ne&&t.texStorage2D(3553,N,ve,Ae[0].width,Ae[0].height);for(let J=0,ce=Ae.length;J<ce;J++)ue=Ae[J],S.format!==an?xe!==null?Re?t.compressedTexSubImage2D(3553,J,0,0,ue.width,ue.height,xe,ue.data):t.compressedTexImage2D(3553,J,ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage2D(3553,J,0,0,ue.width,ue.height,xe,he,ue.data):t.texImage2D(3553,J,ve,ue.width,ue.height,0,xe,he,ue.data)}else if(S.isDataArrayTexture)Re?(Ne&&t.texStorage3D(35866,N,ve,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,xe,he,V.data)):t.texImage3D(35866,0,ve,V.width,V.height,V.depth,0,xe,he,V.data);else if(S.isData3DTexture)Re?(Ne&&t.texStorage3D(32879,N,ve,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,xe,he,V.data)):t.texImage3D(32879,0,ve,V.width,V.height,V.depth,0,xe,he,V.data);else if(S.isFramebufferTexture){if(Ne)if(Re)t.texStorage2D(3553,N,ve,V.width,V.height);else{let J=V.width,ce=V.height;for(let Te=0;Te<N;Te++)t.texImage2D(3553,Te,ve,J,ce,0,xe,he,null),J>>=1,ce>>=1}}else if(Ae.length>0&&ge){Re&&Ne&&t.texStorage2D(3553,N,ve,Ae[0].width,Ae[0].height);for(let J=0,ce=Ae.length;J<ce;J++)ue=Ae[J],Re?t.texSubImage2D(3553,J,0,0,xe,he,ue):t.texImage2D(3553,J,ve,xe,he,ue);S.generateMipmaps=!1}else Re?(Ne&&t.texStorage2D(3553,N,ve,V.width,V.height),t.texSubImage2D(3553,0,0,0,xe,he,V)):t.texImage2D(3553,0,ve,xe,he,V);C(S,ge)&&P(ee),_e.__version=re.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function fe(T,S,X){if(S.image.length!==6)return;const ee=ne(T,S),pe=S.source;t.bindTexture(34067,T.__webglTexture,33984+X);const re=r.get(pe);if(pe.version!==re.__version||ee===!0){t.activeTexture(33984+X),l.pixelStorei(37440,S.flipY),l.pixelStorei(37441,S.premultiplyAlpha),l.pixelStorei(3317,S.unpackAlignment),l.pixelStorei(37443,0);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,V=[];for(let J=0;J<6;J++)!_e&&!L?V[J]=b(S.image[J],!1,!0,c):V[J]=L?S.image[J].image:S.image[J],V[J]=oe(S,V[J]);const ge=V[0],xe=y(ge)||a,he=i.convert(S.format,S.encoding),ve=i.convert(S.type),ue=v(S.internalFormat,he,ve,S.encoding),Ae=a&&S.isVideoTexture!==!0,Re=re.__version===void 0||ee===!0;let Ne=E(S,ge,xe);z(34067,S,xe);let N;if(_e){Ae&&Re&&t.texStorage2D(34067,Ne,ue,ge.width,ge.height);for(let J=0;J<6;J++){N=V[J].mipmaps;for(let ce=0;ce<N.length;ce++){const Te=N[ce];S.format!==an?he!==null?Ae?t.compressedTexSubImage2D(34069+J,ce,0,0,Te.width,Te.height,he,Te.data):t.compressedTexImage2D(34069+J,ce,ue,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+J,ce,0,0,Te.width,Te.height,he,ve,Te.data):t.texImage2D(34069+J,ce,ue,Te.width,Te.height,0,he,ve,Te.data)}}}else{N=S.mipmaps,Ae&&Re&&(N.length>0&&Ne++,t.texStorage2D(34067,Ne,ue,V[0].width,V[0].height));for(let J=0;J<6;J++)if(L){Ae?t.texSubImage2D(34069+J,0,0,0,V[J].width,V[J].height,he,ve,V[J].data):t.texImage2D(34069+J,0,ue,V[J].width,V[J].height,0,he,ve,V[J].data);for(let ce=0;ce<N.length;ce++){const Se=N[ce].image[J].image;Ae?t.texSubImage2D(34069+J,ce+1,0,0,Se.width,Se.height,he,ve,Se.data):t.texImage2D(34069+J,ce+1,ue,Se.width,Se.height,0,he,ve,Se.data)}}else{Ae?t.texSubImage2D(34069+J,0,0,0,he,ve,V[J]):t.texImage2D(34069+J,0,ue,he,ve,V[J]);for(let ce=0;ce<N.length;ce++){const Te=N[ce];Ae?t.texSubImage2D(34069+J,ce+1,0,0,he,ve,Te.image[J]):t.texImage2D(34069+J,ce+1,ue,he,ve,Te.image[J])}}}C(S,xe)&&P(34067),re.__version=pe.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function le(T,S,X,ee,pe){const re=i.convert(X.format,X.encoding),_e=i.convert(X.type),L=v(X.internalFormat,re,_e,X.encoding);r.get(S).__hasExternalTextures||(pe===32879||pe===35866?t.texImage3D(pe,0,L,S.width,S.height,S.depth,0,re,_e,null):t.texImage2D(pe,0,L,S.width,S.height,0,re,_e,null)),t.bindFramebuffer(36160,T),be(S)?h.framebufferTexture2DMultisampleEXT(36160,ee,pe,r.get(X).__webglTexture,0,me(S)):(pe===3553||pe>=34069&&pe<=34074)&&l.framebufferTexture2D(36160,ee,pe,r.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function de(T,S,X){if(l.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let ee=33189;if(X||be(S)){const pe=S.depthTexture;pe&&pe.isDepthTexture&&(pe.type===oi?ee=36012:pe.type===ai&&(ee=33190));const re=me(S);be(S)?h.renderbufferStorageMultisampleEXT(36161,re,ee,S.width,S.height):l.renderbufferStorageMultisample(36161,re,ee,S.width,S.height)}else l.renderbufferStorage(36161,ee,S.width,S.height);l.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){const ee=me(S);X&&be(S)===!1?l.renderbufferStorageMultisample(36161,ee,35056,S.width,S.height):be(S)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,S.width,S.height):l.renderbufferStorage(36161,34041,S.width,S.height),l.framebufferRenderbuffer(36160,33306,36161,T)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let pe=0;pe<ee.length;pe++){const re=ee[pe],_e=i.convert(re.format,re.encoding),L=i.convert(re.type),V=v(re.internalFormat,_e,L,re.encoding),ge=me(S);X&&be(S)===!1?l.renderbufferStorageMultisample(36161,ge,V,S.width,S.height):be(S)?h.renderbufferStorageMultisampleEXT(36161,ge,V,S.width,S.height):l.renderbufferStorage(36161,V,S.width,S.height)}}l.bindRenderbuffer(36161,null)}function ie(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const ee=r.get(S.depthTexture).__webglTexture,pe=me(S);if(S.depthTexture.format===si)be(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,pe):l.framebufferTexture2D(36160,36096,3553,ee,0);else if(S.depthTexture.format===Ki)be(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,pe):l.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ye(T){const S=r.get(T),X=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ie(S.__webglFramebuffer,T)}else if(X){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=l.createRenderbuffer(),de(S.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=l.createRenderbuffer(),de(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function Pe(T,S,X){const ee=r.get(T);S!==void 0&&le(ee.__webglFramebuffer,T,T.texture,36064,3553),X!==void 0&&ye(T)}function Ce(T){const S=T.texture,X=r.get(T),ee=r.get(S);T.addEventListener("dispose",F),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=l.createTexture()),ee.__version=S.version,o.memory.textures++);const pe=T.isWebGLCubeRenderTarget===!0,re=T.isWebGLMultipleRenderTargets===!0,_e=y(T)||a;if(pe){X.__webglFramebuffer=[];for(let L=0;L<6;L++)X.__webglFramebuffer[L]=l.createFramebuffer()}else{if(X.__webglFramebuffer=l.createFramebuffer(),re)if(n.drawBuffers){const L=T.texture;for(let V=0,ge=L.length;V<ge;V++){const xe=r.get(L[V]);xe.__webglTexture===void 0&&(xe.__webglTexture=l.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&be(T)===!1){const L=re?S:[S];X.__webglMultisampledFramebuffer=l.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let V=0;V<L.length;V++){const ge=L[V];X.__webglColorRenderbuffer[V]=l.createRenderbuffer(),l.bindRenderbuffer(36161,X.__webglColorRenderbuffer[V]);const xe=i.convert(ge.format,ge.encoding),he=i.convert(ge.type),ve=v(ge.internalFormat,xe,he,ge.encoding,T.isXRRenderTarget===!0),ue=me(T);l.renderbufferStorageMultisample(36161,ue,ve,T.width,T.height),l.framebufferRenderbuffer(36160,36064+V,36161,X.__webglColorRenderbuffer[V])}l.bindRenderbuffer(36161,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=l.createRenderbuffer(),de(X.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(pe){t.bindTexture(34067,ee.__webglTexture),z(34067,S,_e);for(let L=0;L<6;L++)le(X.__webglFramebuffer[L],T,S,36064,34069+L);C(S,_e)&&P(34067),t.unbindTexture()}else if(re){const L=T.texture;for(let V=0,ge=L.length;V<ge;V++){const xe=L[V],he=r.get(xe);t.bindTexture(3553,he.__webglTexture),z(3553,xe,_e),le(X.__webglFramebuffer,T,xe,36064+V,3553),C(xe,_e)&&P(3553)}t.unbindTexture()}else{let L=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?L=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,ee.__webglTexture),z(L,S,_e),le(X.__webglFramebuffer,T,S,36064,L),C(S,_e)&&P(L),t.unbindTexture()}T.depthBuffer&&ye(T)}function De(T){const S=y(T)||a,X=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,pe=X.length;ee<pe;ee++){const re=X[ee];if(C(re,S)){const _e=T.isWebGLCubeRenderTarget?34067:3553,L=r.get(re).__webglTexture;t.bindTexture(_e,L),P(_e),t.unbindTexture()}}}function Ue(T){if(a&&T.samples>0&&be(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],X=T.width,ee=T.height;let pe=16384;const re=[],_e=T.stencilBuffer?33306:36096,L=r.get(T),V=T.isWebGLMultipleRenderTargets===!0;if(V)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),l.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){re.push(36064+ge),T.depthBuffer&&re.push(_e);const xe=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(xe===!1&&(T.depthBuffer&&(pe|=256),T.stencilBuffer&&(pe|=1024)),V&&l.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[ge]),xe===!0&&(l.invalidateFramebuffer(36008,[_e]),l.invalidateFramebuffer(36009,[_e])),V){const he=r.get(S[ge]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,he,0)}l.blitFramebuffer(0,0,X,ee,0,0,X,ee,pe,9728),d&&l.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+ge,36161,L.__webglColorRenderbuffer[ge]);const xe=r.get(S[ge]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),l.framebufferTexture2D(36009,36064+ge,3553,xe,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function me(T){return Math.min(f,T.samples)}function be(T){const S=r.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ee(T){const S=o.render.frame;g.get(T)!==S&&(g.set(T,S),T.update())}function oe(T,S){const X=T.encoding,ee=T.format,pe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===us||X!==hi&&(X===nt?a===!1?e.has("EXT_sRGB")===!0&&ee===an?(T.format=us,T.minFilter=Dt,T.generateMipmaps=!1):S=tu.sRGBToLinear(S):(ee!==an||pe!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),S}this.allocateTextureUnit=Z,this.resetTextureUnits=te,this.setTexture2D=G,this.setTexture2DArray=w,this.setTexture3D=R,this.setTextureCube=O,this.rebindTextures=Pe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=le,this.useMultisampledRTT=be}function Lg(l,e,t){const r=t.isWebGL2;function n(i,o=null){let a;if(i===fi)return 5121;if(i===Ef)return 32819;if(i===Af)return 32820;if(i===Mf)return 5120;if(i===wf)return 5122;if(i===Jc)return 5123;if(i===Tf)return 5124;if(i===ai)return 5125;if(i===oi)return 5126;if(i===Ir)return r?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===Cf)return 6406;if(i===an)return 6408;if(i===Lf)return 6409;if(i===Pf)return 6410;if(i===si)return 6402;if(i===Ki)return 34041;if(i===Df)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(i===us)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===Rf)return 6403;if(i===Uf)return 36244;if(i===If)return 33319;if(i===Ff)return 33320;if(i===Of)return 36249;if(i===uo||i===fo||i===ho||i===po)if(o===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===uo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===uo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ho)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===po)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===il||i===rl||i===al||i===ol)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===il)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===al)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ol)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===sl||i===ll)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===sl)return o===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ll)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl||i===vl||i===_l||i===xl||i===yl||i===bl||i===Sl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===cl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ul)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ml)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_l)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ml)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Ml)return o===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return i===ji?r?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):l[i]!==void 0?l[i]:null}return{convert:n}}class Pg extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ya extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rg={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,o=null;const a=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,r),_=this._getHandJoint(c,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return a!==null&&(a.visible=n!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ya;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Ug extends It{constructor(e,t,r,n,i,o,a,s,c,u){if(u=u!==void 0?u:si,u!==si&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===si&&(r=ai),r===void 0&&u===Ki&&(r=ji),super(null,n,i,o,a,s,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=s!==void 0?s:Ct,this.flipY=!1,this.generateMipmaps=!1}}class Ig extends gi{constructor(e,t){super();const r=this;let n=null,i=1,o=null,a="local-floor",s=null,c=null,u=null,f=null,h=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const _=[],M=[],b=new Set,y=new Map,x=new nn;x.layers.enable(1),x.viewport=new ht;const C=new nn;C.layers.enable(2),C.viewport=new ht;const P=[x,C],v=new Pg;v.layers.enable(1),v.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let R=_[w];return R===void 0&&(R=new Wo,_[w]=R),R.getTargetRaySpace()},this.getControllerGrip=function(w){let R=_[w];return R===void 0&&(R=new Wo,_[w]=R),R.getGripSpace()},this.getHand=function(w){let R=_[w];return R===void 0&&(R=new Wo,_[w]=R),R.getHandSpace()};function K(w){const R=M.indexOf(w.inputSource);if(R===-1)return;const O=_[R];O!==void 0&&O.dispatchEvent({type:w.type,data:w.inputSource})}function F(){n.removeEventListener("select",K),n.removeEventListener("selectstart",K),n.removeEventListener("selectend",K),n.removeEventListener("squeeze",K),n.removeEventListener("squeezestart",K),n.removeEventListener("squeezeend",K),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",I);for(let w=0;w<_.length;w++){const R=M[w];R!==null&&(M[w]=null,_[w].disconnect(R))}E=null,U=null,e.setRenderTarget(m),h=null,f=null,u=null,n=null,p=null,G.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){i=w,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){a=w,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s||o},this.setReferenceSpace=function(w){s=w},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return n},this.setSession=async function(w){if(n=w,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",K),n.addEventListener("selectstart",K),n.addEventListener("selectend",K),n.addEventListener("squeeze",K),n.addEventListener("squeezestart",K),n.addEventListener("squeezeend",K),n.addEventListener("end",F),n.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const R={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:i};h=new XRWebGLLayer(n,t,R),n.updateRenderState({baseLayer:h}),p=new di(h.framebufferWidth,h.framebufferHeight,{format:an,type:fi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let R=null,O=null,k=null;g.depth&&(k=g.stencil?35056:33190,R=g.stencil?Ki:si,O=g.stencil?ji:ai);const B={colorFormat:32856,depthFormat:k,scaleFactor:i};u=new XRWebGLBinding(n,t),f=u.createProjectionLayer(B),n.updateRenderState({layers:[f]}),p=new di(f.textureWidth,f.textureHeight,{format:an,type:fi,depthTexture:new Ug(f.textureWidth,f.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const z=e.properties.get(p);z.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),s=null,o=await n.requestReferenceSpace(a),G.setContext(n),G.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function I(w){for(let R=0;R<w.removed.length;R++){const O=w.removed[R],k=M.indexOf(O);k>=0&&(M[k]=null,_[k].disconnect(O))}for(let R=0;R<w.added.length;R++){const O=w.added[R];let k=M.indexOf(O);if(k===-1){for(let z=0;z<_.length;z++)if(z>=M.length){M.push(O),k=z;break}else if(M[z]===null){M[z]=O,k=z;break}if(k===-1)break}const B=_[k];B&&B.connect(O)}}const D=new j,W=new j;function H(w,R,O){D.setFromMatrixPosition(R.matrixWorld),W.setFromMatrixPosition(O.matrixWorld);const k=D.distanceTo(W),B=R.projectionMatrix.elements,z=O.projectionMatrix.elements,ne=B[14]/(B[10]-1),Q=B[14]/(B[10]+1),fe=(B[9]+1)/B[5],le=(B[9]-1)/B[5],de=(B[8]-1)/B[0],ie=(z[8]+1)/z[0],ye=ne*de,Pe=ne*ie,Ce=k/(-de+ie),De=Ce*-de;R.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(De),w.translateZ(Ce),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();const Ue=ne+Ce,me=Q+Ce,be=ye-De,Ee=Pe+(k-De),oe=fe*Q/me*Ue,T=le*Q/me*Ue;w.projectionMatrix.makePerspective(be,Ee,oe,T,Ue,me)}function te(w,R){R===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(R.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(n===null)return;v.near=C.near=x.near=w.near,v.far=C.far=x.far=w.far,(E!==v.near||U!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,U=v.far);const R=w.parent,O=v.cameras;te(v,R);for(let B=0;B<O.length;B++)te(O[B],R);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),w.matrix.copy(v.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale);const k=w.children;for(let B=0,z=k.length;B<z;B++)k[B].updateMatrixWorld(!0);O.length===2?H(v,x,C):v.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(w){f!==null&&(f.fixedFoveation=w),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=w)},this.getPlanes=function(){return b};let Z=null;function Y(w,R){if(c=R.getViewerPose(s||o),d=R,c!==null){const O=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let k=!1;O.length!==v.cameras.length&&(v.cameras.length=0,k=!0);for(let B=0;B<O.length;B++){const z=O[B];let ne=null;if(h!==null)ne=h.getViewport(z);else{const fe=u.getViewSubImage(f,z);ne=fe.viewport,B===0&&(e.setRenderTargetTextures(p,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(p))}let Q=P[B];Q===void 0&&(Q=new nn,Q.layers.enable(B),Q.viewport=new ht,P[B]=Q),Q.matrix.fromArray(z.transform.matrix),Q.projectionMatrix.fromArray(z.projectionMatrix),Q.viewport.set(ne.x,ne.y,ne.width,ne.height),B===0&&v.matrix.copy(Q.matrix),k===!0&&v.cameras.push(Q)}}for(let O=0;O<_.length;O++){const k=M[O],B=_[O];k!==null&&B!==void 0&&B.update(k,R,s||o)}if(Z&&Z(w,R),R.detectedPlanes){r.dispatchEvent({type:"planesdetected",data:R.detectedPlanes});let O=null;for(const k of b)R.detectedPlanes.has(k)||(O===null&&(O=[]),O.push(k));if(O!==null)for(const k of O)b.delete(k),y.delete(k),r.dispatchEvent({type:"planeremoved",data:k});for(const k of R.detectedPlanes)if(!b.has(k))b.add(k),y.set(k,R.lastChangedTime),r.dispatchEvent({type:"planeadded",data:k});else{const B=y.get(k);k.lastChangedTime>B&&(y.set(k,k.lastChangedTime),r.dispatchEvent({type:"planechanged",data:k}))}}d=null}const G=new fu;G.setAnimationLoop(Y),this.setAnimationLoop=function(w){Z=w},this.dispose=function(){}}}function Fg(l,e){function t(m,p){p.color.getRGB(m.fogColor.value,su(l)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,_,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(m,p):p.isMeshToonMaterial?(n(m,p),u(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(n(m,p),d(m,p)):p.isMeshDepthMaterial?n(m,p):p.isMeshDistanceMaterial?(n(m,p),g(m,p)):p.isMeshNormalMaterial?n(m,p):p.isLineBasicMaterial?(i(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,_,M):p.isSpriteMaterial?s(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=l.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function i(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:r}}function Og(l,e,t,r){let n={},i={},o=[];const a=t.isWebGL2?l.getParameter(35375):0;function s(M,b){const y=b.program;r.uniformBlockBinding(M,y)}function c(M,b){let y=n[M.id];y===void 0&&(g(M),y=u(M),n[M.id]=y,M.addEventListener("dispose",p));const x=b.program;r.updateUBOMapping(M,x);const C=e.render.frame;i[M.id]!==C&&(h(M),i[M.id]=C)}function u(M){const b=f();M.__bindingPointIndex=b;const y=l.createBuffer(),x=M.__size,C=M.usage;return l.bindBuffer(35345,y),l.bufferData(35345,x,C),l.bindBuffer(35345,null),l.bindBufferBase(35345,b,y),y}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=n[M.id],y=M.uniforms,x=M.__cache;l.bindBuffer(35345,b);for(let C=0,P=y.length;C<P;C++){const v=y[C];if(d(v,C,x)===!0){const E=v.value,U=v.__offset;typeof E=="number"?(v.__data[0]=E,l.bufferSubData(35345,U,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):E.toArray(v.__data),l.bufferSubData(35345,U,v.__data))}}l.bindBuffer(35345,null)}function d(M,b,y){const x=M.value;if(y[b]===void 0)return typeof x=="number"?y[b]=x:y[b]=x.clone(),!0;if(typeof x=="number"){if(y[b]!==x)return y[b]=x,!0}else{const C=y[b];if(C.equals(x)===!1)return C.copy(x),!0}return!1}function g(M){const b=M.uniforms;let y=0;const x=16;let C=0;for(let P=0,v=b.length;P<v;P++){const E=b[P],U=m(E);if(E.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,P>0){C=y%x;const K=x-C;C!==0&&K-U.boundary<0&&(y+=x-C,E.__offset=y)}y+=U.storage}return C=y%x,C>0&&(y+=x-C),M.__size=y,M.__cache={},this}function m(M){const b=M.value,y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(M){const b=M.target;b.removeEventListener("dispose",p);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),l.deleteBuffer(n[b.id]),delete n[b.id],delete i[b.id]}function _(){for(const M in n)l.deleteBuffer(n[M]);o=[],n={},i={}}return{bind:s,update:c,dispose:_}}function zg(){const l=Ga("canvas");return l.style.display="block",l}function xu(l={}){this.isWebGLRenderer=!0;const e=l.canvas!==void 0?l.canvas:zg(),t=l.context!==void 0?l.context:null,r=l.depth!==void 0?l.depth:!0,n=l.stencil!==void 0?l.stencil:!0,i=l.antialias!==void 0?l.antialias:!1,o=l.premultipliedAlpha!==void 0?l.premultipliedAlpha:!0,a=l.preserveDrawingBuffer!==void 0?l.preserveDrawingBuffer:!1,s=l.powerPreference!==void 0?l.powerPreference:"default",c=l.failIfMajorPerformanceCaveat!==void 0?l.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=l.alpha!==void 0?l.alpha:!1;let f=null,h=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=hi,this.physicallyCorrectLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;const m=this;let p=!1,_=0,M=0,b=null,y=-1,x=null;const C=new ht,P=new ht;let v=null,E=e.width,U=e.height,K=1,F=null,I=null;const D=new ht(0,0,E,U),W=new ht(0,0,E,U);let H=!1;const te=new uu;let Z=!1,Y=!1,G=null;const w=new at,R=new ke,O=new j,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function B(){return b===null?K:1}let z=t;function ne(A,$){for(let ae=0;ae<A.length;ae++){const q=A[ae],se=e.getContext(q,$);if(se!==null)return se}return null}try{const A={alpha:!0,depth:r,stencil:n,antialias:i,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:s,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bs}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),z===null){const $=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&$.shift(),z=ne($,A),z===null)throw ne($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Q,fe,le,de,ie,ye,Pe,Ce,De,Ue,me,be,Ee,oe,T,S,X,ee,pe,re,_e,L,V,ge;function xe(){Q=new Kp(z),fe=new Hp(z,Q,l),Q.init(fe),L=new Lg(z,Q,fe),le=new Cg(z,Q,fe),de=new $p,ie=new gg,ye=new Dg(z,Q,le,ie,fe,L,de),Pe=new Yp(m),Ce=new Zp(m),De=new lh(z,fe),V=new Vp(z,Q,De,fe),Ue=new Jp(z,De,de,V),me=new im(z,Ue,De,de),pe=new nm(z,fe,ye),S=new Xp(ie),be=new mg(m,Pe,Ce,Q,fe,V,S),Ee=new Fg(m,ie),oe=new _g,T=new wg(Q,fe),ee=new Gp(m,Pe,Ce,le,me,u,o),X=new Ag(m,me,fe),ge=new Og(z,de,fe,le),re=new Wp(z,Q,de,fe),_e=new Qp(z,Q,de,fe),de.programs=be.programs,m.capabilities=fe,m.extensions=Q,m.properties=ie,m.renderLists=oe,m.shadowMap=X,m.state=le,m.info=de}xe();const he=new Ig(m,z);this.xr=he,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=Q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(E,U,!1))},this.getSize=function(A){return A.set(E,U)},this.setSize=function(A,$,ae){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=A,U=$,e.width=Math.floor(A*K),e.height=Math.floor($*K),ae!==!1&&(e.style.width=A+"px",e.style.height=$+"px"),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(E*K,U*K).floor()},this.setDrawingBufferSize=function(A,$,ae){E=A,U=$,K=ae,e.width=Math.floor(A*ae),e.height=Math.floor($*ae),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(D)},this.setViewport=function(A,$,ae,q){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,$,ae,q),le.viewport(C.copy(D).multiplyScalar(K).floor())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,$,ae,q){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,$,ae,q),le.scissor(P.copy(W).multiplyScalar(K).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(A){le.setScissorTest(H=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){I=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(A=!0,$=!0,ae=!0){let q=0;A&&(q|=16384),$&&(q|=256),ae&&(q|=1024),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),oe.dispose(),T.dispose(),ie.dispose(),Pe.dispose(),Ce.dispose(),me.dispose(),V.dispose(),ge.dispose(),be.dispose(),he.dispose(),he.removeEventListener("sessionstart",Te),he.removeEventListener("sessionend",Se),G&&(G.dispose(),G=null),Le.stop()};function ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=de.autoReset,$=X.enabled,ae=X.autoUpdate,q=X.needsUpdate,se=X.type;xe(),de.autoReset=A,X.enabled=$,X.autoUpdate=ae,X.needsUpdate=q,X.type=se}function Ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Re(A){const $=A.target;$.removeEventListener("dispose",Re),Ne($)}function Ne(A){N(A),ie.remove(A)}function N(A){const $=ie.get(A).programs;$!==void 0&&($.forEach(function(ae){be.releaseProgram(ae)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,ae,q,se,Ie){$===null&&($=k);const ze=se.isMesh&&se.matrixWorld.determinant()<0,Ge=Ot(A,$,ae,q,se);le.setMaterial(q,ze);let Ve=ae.index,qe=1;q.wireframe===!0&&(Ve=Ue.getWireframeAttribute(ae),qe=2);const Ye=ae.drawRange,Ze=ae.attributes.position;let tt=Ye.start*qe,mt=(Ye.start+Ye.count)*qe;Ie!==null&&(tt=Math.max(tt,Ie.start*qe),mt=Math.min(mt,(Ie.start+Ie.count)*qe)),Ve!==null?(tt=Math.max(tt,0),mt=Math.min(mt,Ve.count)):Ze!=null&&(tt=Math.max(tt,0),mt=Math.min(mt,Ze.count));const zt=mt-tt;if(zt<0||zt===1/0)return;V.setup(se,q,Ge,ae,Ve);let Kt,we=re;if(Ve!==null&&(Kt=De.get(Ve),we=_e,we.setIndex(Kt)),se.isMesh)q.wireframe===!0?(le.setLineWidth(q.wireframeLinewidth*B()),we.setMode(1)):we.setMode(4);else if(se.isLine){let We=q.linewidth;We===void 0&&(We=1),le.setLineWidth(We*B()),se.isLineSegments?we.setMode(1):se.isLineLoop?we.setMode(2):we.setMode(3)}else se.isPoints?we.setMode(0):se.isSprite&&we.setMode(4);if(se.isInstancedMesh)we.renderInstances(tt,zt,se.count);else if(ae.isInstancedBufferGeometry){const We=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,hr=Math.min(ae.instanceCount,We);we.renderInstances(tt,zt,hr)}else we.render(tt,zt)},this.compile=function(A,$){function ae(q,se,Ie){q.transparent===!0&&q.side===un?(q.side=Ut,q.needsUpdate=!0,Ke(q,se,Ie),q.side=ui,q.needsUpdate=!0,Ke(q,se,Ie),q.side=un):Ke(q,se,Ie)}h=T.get(A),h.init(),g.push(h),A.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(h.pushLight(q),q.castShadow&&h.pushShadow(q))}),h.setupLights(m.physicallyCorrectLights),A.traverse(function(q){const se=q.material;if(se)if(Array.isArray(se))for(let Ie=0;Ie<se.length;Ie++){const ze=se[Ie];ae(ze,A,q)}else ae(se,A,q)}),g.pop(),h=null};let J=null;function ce(A){J&&J(A)}function Te(){Le.stop()}function Se(){Le.start()}const Le=new fu;Le.setAnimationLoop(ce),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(A){J=A,he.setAnimationLoop(A),A===null?Le.stop():Le.start()},he.addEventListener("sessionstart",Te),he.addEventListener("sessionend",Se),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera($),$=he.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,$,b),h=T.get(A,g.length),h.init(),g.push(h),w.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),te.setFromProjectionMatrix(w),Y=this.localClippingEnabled,Z=S.init(this.clippingPlanes,Y,$),f=oe.get(A,d.length),f.init(),d.push(f),Xe(A,$,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(F,I),Z===!0&&S.beginShadows();const ae=h.state.shadowsArray;if(X.render(ae,A,$),Z===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,A),h.setupLights(m.physicallyCorrectLights),$.isArrayCamera){const q=$.cameras;for(let se=0,Ie=q.length;se<Ie;se++){const ze=q[se];Be(f,A,ze,ze.viewport)}}else Be(f,A,$);b!==null&&(ye.updateMultisampleRenderTarget(b),ye.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(m,A,$),V.resetDefaultState(),y=-1,x=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function Xe(A,$,ae,q){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){q&&O.setFromMatrixPosition(A.matrixWorld).applyMatrix4(w);const ze=me.update(A),Ge=A.material;Ge.visible&&f.push(A,ze,Ge,ae,O.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==de.render.frame&&(A.skeleton.update(),A.skeleton.frame=de.render.frame),!A.frustumCulled||te.intersectsObject(A))){q&&O.setFromMatrixPosition(A.matrixWorld).applyMatrix4(w);const ze=me.update(A),Ge=A.material;if(Array.isArray(Ge)){const Ve=ze.groups;for(let qe=0,Ye=Ve.length;qe<Ye;qe++){const Ze=Ve[qe],tt=Ge[Ze.materialIndex];tt&&tt.visible&&f.push(A,ze,tt,ae,O.z,Ze)}}else Ge.visible&&f.push(A,ze,Ge,ae,O.z,null)}}const Ie=A.children;for(let ze=0,Ge=Ie.length;ze<Ge;ze++)Xe(Ie[ze],$,ae,q)}function Be(A,$,ae,q){const se=A.opaque,Ie=A.transmissive,ze=A.transparent;h.setupLightsView(ae),Ie.length>0&&Fe(se,$,ae),q&&le.viewport(C.copy(q)),se.length>0&&Oe(se,$,ae),Ie.length>0&&Oe(Ie,$,ae),ze.length>0&&Oe(ze,$,ae),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Fe(A,$,ae){const q=fe.isWebGL2;G===null&&(G=new di(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Ir:fi,minFilter:Wa,samples:q&&i===!0?4:0})),m.getDrawingBufferSize(R),q?G.setSize(R.x,R.y):G.setSize(fs(R.x),fs(R.y));const se=m.getRenderTarget();m.setRenderTarget(G),m.clear();const Ie=m.toneMapping;m.toneMapping=bn,Oe(A,$,ae),m.toneMapping=Ie,ye.updateMultisampleRenderTarget(G),ye.updateRenderTargetMipmap(G),m.setRenderTarget(se)}function Oe(A,$,ae){const q=$.isScene===!0?$.overrideMaterial:null;for(let se=0,Ie=A.length;se<Ie;se++){const ze=A[se],Ge=ze.object,Ve=ze.geometry,qe=q===null?ze.material:q,Ye=ze.group;Ge.layers.test(ae.layers)&&Qe(Ge,$,ae,Ve,qe,Ye)}}function Qe(A,$,ae,q,se,Ie){A.onBeforeRender(m,$,ae,q,se,Ie),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(m,$,ae,q,A,Ie),se.transparent===!0&&se.side===un?(se.side=Ut,se.needsUpdate=!0,m.renderBufferDirect(ae,$,q,se,A,Ie),se.side=ui,se.needsUpdate=!0,m.renderBufferDirect(ae,$,q,se,A,Ie),se.side=un):m.renderBufferDirect(ae,$,q,se,A,Ie),A.onAfterRender(m,$,ae,q,se,Ie)}function Ke(A,$,ae){$.isScene!==!0&&($=k);const q=ie.get(A),se=h.state.lights,Ie=h.state.shadowsArray,ze=se.state.version,Ge=be.getParameters(A,se.state,Ie,$,ae),Ve=be.getProgramCacheKey(Ge);let qe=q.programs;q.environment=A.isMeshStandardMaterial?$.environment:null,q.fog=$.fog,q.envMap=(A.isMeshStandardMaterial?Ce:Pe).get(A.envMap||q.environment),qe===void 0&&(A.addEventListener("dispose",Re),qe=new Map,q.programs=qe);let Ye=qe.get(Ve);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===ze)return it(A,Ge),Ye}else Ge.uniforms=be.getUniforms(A),A.onBuild(ae,Ge,m),A.onBeforeCompile(Ge,m),Ye=be.acquireProgram(Ge,Ve),qe.set(Ve,Ye),q.uniforms=Ge.uniforms;const Ze=q.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=S.uniform),it(A,Ge),q.needsLights=Zt(A),q.lightsStateVersion=ze,q.needsLights&&(Ze.ambientLightColor.value=se.state.ambient,Ze.lightProbe.value=se.state.probe,Ze.directionalLights.value=se.state.directional,Ze.directionalLightShadows.value=se.state.directionalShadow,Ze.spotLights.value=se.state.spot,Ze.spotLightShadows.value=se.state.spotShadow,Ze.rectAreaLights.value=se.state.rectArea,Ze.ltc_1.value=se.state.rectAreaLTC1,Ze.ltc_2.value=se.state.rectAreaLTC2,Ze.pointLights.value=se.state.point,Ze.pointLightShadows.value=se.state.pointShadow,Ze.hemisphereLights.value=se.state.hemi,Ze.directionalShadowMap.value=se.state.directionalShadowMap,Ze.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ze.spotShadowMap.value=se.state.spotShadowMap,Ze.spotLightMatrix.value=se.state.spotLightMatrix,Ze.spotLightMap.value=se.state.spotLightMap,Ze.pointShadowMap.value=se.state.pointShadowMap,Ze.pointShadowMatrix.value=se.state.pointShadowMatrix);const tt=Ye.getUniforms(),mt=Da.seqWithValue(tt.seq,Ze);return q.currentProgram=Ye,q.uniformsList=mt,Ye}function it(A,$){const ae=ie.get(A);ae.outputEncoding=$.outputEncoding,ae.instancing=$.instancing,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function Ot(A,$,ae,q,se){$.isScene!==!0&&($=k),ye.resetTextureUnits();const Ie=$.fog,ze=q.isMeshStandardMaterial?$.environment:null,Ge=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:hi,Ve=(q.isMeshStandardMaterial?Ce:Pe).get(q.envMap||ze),qe=q.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Ye=!!q.normalMap&&!!ae.attributes.tangent,Ze=!!ae.morphAttributes.position,tt=!!ae.morphAttributes.normal,mt=!!ae.morphAttributes.color,zt=q.toneMapped?m.toneMapping:bn,Kt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,we=Kt!==void 0?Kt.length:0,We=ie.get(q),hr=h.state.lights;if(Z===!0&&(Y===!0||A!==x)){const yt=A===x&&q.id===y;S.setState(q,A,yt)}let $e=!1;q.version===We.__version?(We.needsLights&&We.lightsStateVersion!==hr.state.version||We.outputEncoding!==Ge||se.isInstancedMesh&&We.instancing===!1||!se.isInstancedMesh&&We.instancing===!0||se.isSkinnedMesh&&We.skinning===!1||!se.isSkinnedMesh&&We.skinning===!0||We.envMap!==Ve||q.fog===!0&&We.fog!==Ie||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==S.numPlanes||We.numIntersection!==S.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Ye||We.morphTargets!==Ze||We.morphNormals!==tt||We.morphColors!==mt||We.toneMapping!==zt||fe.isWebGL2===!0&&We.morphTargetsCount!==we)&&($e=!0):($e=!0,We.__version=q.version);let Wt=We.currentProgram;$e===!0&&(Wt=Ke(q,$,se));let dr=!1,fn=!1,Cn=!1;const ct=Wt.getUniforms(),sn=We.uniforms;if(le.useProgram(Wt.program)&&(dr=!0,fn=!0,Cn=!0),q.id!==y&&(y=q.id,fn=!0),dr||x!==A){if(ct.setValue(z,"projectionMatrix",A.projectionMatrix),fe.logarithmicDepthBuffer&&ct.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),x!==A&&(x=A,fn=!0,Cn=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const yt=ct.map.cameraPosition;yt!==void 0&&yt.setValue(z,O.setFromMatrixPosition(A.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ct.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||se.isSkinnedMesh)&&ct.setValue(z,"viewMatrix",A.matrixWorldInverse)}if(se.isSkinnedMesh){ct.setOptional(z,se,"bindMatrix"),ct.setOptional(z,se,"bindMatrixInverse");const yt=se.skeleton;yt&&(fe.floatVertexTextures?(yt.boneTexture===null&&yt.computeBoneTexture(),ct.setValue(z,"boneTexture",yt.boneTexture,ye),ct.setValue(z,"boneTextureSize",yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Dn=ae.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0&&fe.isWebGL2===!0)&&pe.update(se,ae,q,Wt),(fn||We.receiveShadow!==se.receiveShadow)&&(We.receiveShadow=se.receiveShadow,ct.setValue(z,"receiveShadow",se.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(sn.envMap.value=Ve,sn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),fn&&(ct.setValue(z,"toneMappingExposure",m.toneMappingExposure),We.needsLights&&on(sn,Cn),Ie&&q.fog===!0&&Ee.refreshFogUniforms(sn,Ie),Ee.refreshMaterialUniforms(sn,q,K,U,G),Da.upload(z,We.uniformsList,sn,ye)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Da.upload(z,We.uniformsList,sn,ye),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ct.setValue(z,"center",se.center),ct.setValue(z,"modelViewMatrix",se.modelViewMatrix),ct.setValue(z,"normalMatrix",se.normalMatrix),ct.setValue(z,"modelMatrix",se.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const yt=q.uniformsGroups;for(let Hn=0,Xr=yt.length;Hn<Xr;Hn++)if(fe.isWebGL2){const Ln=yt[Hn];ge.update(Ln,Wt),ge.bind(Ln,Wt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wt}function on(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function Zt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,$,ae){ie.get(A.texture).__webglTexture=$,ie.get(A.depthTexture).__webglTexture=ae;const q=ie.get(A);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=ae===void 0,q.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,$){const ae=ie.get(A);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(A,$=0,ae=0){b=A,_=$,M=ae;let q=!0,se=null,Ie=!1,ze=!1;if(A){const Ve=ie.get(A);Ve.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),q=!1):Ve.__webglFramebuffer===void 0?ye.setupRenderTarget(A):Ve.__hasExternalTextures&&ye.rebindTextures(A,ie.get(A.texture).__webglTexture,ie.get(A.depthTexture).__webglTexture);const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ze=!0);const Ye=ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(se=Ye[$],Ie=!0):fe.isWebGL2&&A.samples>0&&ye.useMultisampledRTT(A)===!1?se=ie.get(A).__webglMultisampledFramebuffer:se=Ye,C.copy(A.viewport),P.copy(A.scissor),v=A.scissorTest}else C.copy(D).multiplyScalar(K).floor(),P.copy(W).multiplyScalar(K).floor(),v=H;if(le.bindFramebuffer(36160,se)&&fe.drawBuffers&&q&&le.drawBuffers(A,se),le.viewport(C),le.scissor(P),le.setScissorTest(v),Ie){const Ve=ie.get(A.texture);z.framebufferTexture2D(36160,36064,34069+$,Ve.__webglTexture,ae)}else if(ze){const Ve=ie.get(A.texture),qe=$||0;z.framebufferTextureLayer(36160,36064,Ve.__webglTexture,ae||0,qe)}y=-1},this.readRenderTargetPixels=function(A,$,ae,q,se,Ie,ze){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge){le.bindFramebuffer(36160,Ge);try{const Ve=A.texture,qe=Ve.format,Ye=Ve.type;if(qe!==an&&L.convert(qe)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ye===Ir&&(Q.has("EXT_color_buffer_half_float")||fe.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ye!==fi&&L.convert(Ye)!==z.getParameter(35738)&&!(Ye===oi&&(fe.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-q&&ae>=0&&ae<=A.height-se&&z.readPixels($,ae,q,se,L.convert(qe),L.convert(Ye),Ie)}finally{const Ve=b!==null?ie.get(b).__webglFramebuffer:null;le.bindFramebuffer(36160,Ve)}}},this.copyFramebufferToTexture=function(A,$,ae=0){const q=Math.pow(2,-ae),se=Math.floor($.image.width*q),Ie=Math.floor($.image.height*q);ye.setTexture2D($,0),z.copyTexSubImage2D(3553,ae,0,0,A.x,A.y,se,Ie),le.unbindTexture()},this.copyTextureToTexture=function(A,$,ae,q=0){const se=$.image.width,Ie=$.image.height,ze=L.convert(ae.format),Ge=L.convert(ae.type);ye.setTexture2D(ae,0),z.pixelStorei(37440,ae.flipY),z.pixelStorei(37441,ae.premultiplyAlpha),z.pixelStorei(3317,ae.unpackAlignment),$.isDataTexture?z.texSubImage2D(3553,q,A.x,A.y,se,Ie,ze,Ge,$.image.data):$.isCompressedTexture?z.compressedTexSubImage2D(3553,q,A.x,A.y,$.mipmaps[0].width,$.mipmaps[0].height,ze,$.mipmaps[0].data):z.texSubImage2D(3553,q,A.x,A.y,ze,Ge,$.image),q===0&&ae.generateMipmaps&&z.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(A,$,ae,q,se=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=A.max.x-A.min.x+1,ze=A.max.y-A.min.y+1,Ge=A.max.z-A.min.z+1,Ve=L.convert(q.format),qe=L.convert(q.type);let Ye;if(q.isData3DTexture)ye.setTexture3D(q,0),Ye=32879;else if(q.isDataArrayTexture)ye.setTexture2DArray(q,0),Ye=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,q.flipY),z.pixelStorei(37441,q.premultiplyAlpha),z.pixelStorei(3317,q.unpackAlignment);const Ze=z.getParameter(3314),tt=z.getParameter(32878),mt=z.getParameter(3316),zt=z.getParameter(3315),Kt=z.getParameter(32877),we=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;z.pixelStorei(3314,we.width),z.pixelStorei(32878,we.height),z.pixelStorei(3316,A.min.x),z.pixelStorei(3315,A.min.y),z.pixelStorei(32877,A.min.z),ae.isDataTexture||ae.isData3DTexture?z.texSubImage3D(Ye,se,$.x,$.y,$.z,Ie,ze,Ge,Ve,qe,we.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ye,se,$.x,$.y,$.z,Ie,ze,Ge,Ve,we.data)):z.texSubImage3D(Ye,se,$.x,$.y,$.z,Ie,ze,Ge,Ve,qe,we),z.pixelStorei(3314,Ze),z.pixelStorei(32878,tt),z.pixelStorei(3316,mt),z.pixelStorei(3315,zt),z.pixelStorei(32877,Kt),se===0&&q.generateMipmaps&&z.generateMipmap(Ye),le.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ye.setTextureCube(A,0):A.isData3DTexture?ye.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ye.setTexture2DArray(A,0):ye.setTexture2D(A,0),le.unbindTexture()},this.resetState=function(){_=0,M=0,b=null,le.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ng extends xu{}Ng.prototype.isWebGL1Renderer=!0;class kg extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Bg extends Vt{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class mi extends tr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new j,sc=new j,lc=new at,Ho=new Ms,ba=new er;class At extends wt{constructor(e=new lt,t=new mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,i=t.count;n<i;n++)oc.fromBufferAttribute(t,n-1),sc.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=oc.distanceTo(sc);e.setAttribute("lineDistance",new Ft(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Line.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ba.copy(r.boundingSphere),ba.applyMatrix4(n),ba.radius+=i,e.ray.intersectsSphere(ba)===!1)return;lc.copy(n).invert(),Ho.copy(e.ray).applyMatrix4(lc);const a=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=a*a,c=new j,u=new j,f=new j,h=new j,d=this.isLineSegments?2:1,g=r.index,p=r.attributes.position;if(g!==null){const _=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let b=_,y=M-1;b<y;b+=d){const x=g.getX(b),C=g.getX(b+1);if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,C),Ho.distanceSqToSegment(c,u,h,f)>s)continue;h.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(h);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let b=_,y=M-1;b<y;b+=d){if(c.fromBufferAttribute(p,b),u.fromBufferAttribute(p,b+1),Ho.distanceSqToSegment(c,u,h,f)>s)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=n.length;i<o;i++){const a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}}const cc=new j,uc=new j;class Gg extends At{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,i=t.count;n<i;n+=2)cc.fromBufferAttribute(t,n),uc.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+cc.distanceTo(uc);e.setAttribute("lineDistance",new Ft(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vg extends tr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fc=new at,ds=new Ms,Sa=new er,Ma=new j;class hc extends wt{constructor(e=new lt,t=new Vg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sa.copy(r.boundingSphere),Sa.applyMatrix4(n),Sa.radius+=i,e.ray.intersectsSphere(Sa)===!1)return;fc.copy(n).invert(),ds.copy(e.ray).applyMatrix4(fc);const a=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=a*a,c=r.index,f=r.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,m=d;g<m;g++){const p=c.getX(g);Ma.fromBufferAttribute(f,p),dc(Ma,p,s,n,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,m=d;g<m;g++)Ma.fromBufferAttribute(f,g),dc(Ma,g,s,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=n.length;i<o;i++){const a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}}function dc(l,e,t,r,n,i,o){const a=ds.distanceSqToPoint(l);if(a<t){const s=new j;ds.closestPointToPoint(l,s),s.applyMatrix4(r);const c=n.ray.origin.distanceTo(s);if(c<n.near||c>n.far)return;i.push({distance:c,distanceToRay:Math.sqrt(a),point:s,index:e,face:null,object:o})}}class Ya extends lt{constructor(e=1,t=32,r=16,n=0,i=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:i,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const s=Math.min(o+a,Math.PI);let c=0;const u=[],f=new j,h=new j,d=[],g=[],m=[],p=[];for(let _=0;_<=r;_++){const M=[],b=_/r;let y=0;_==0&&o==0?y=.5/t:_==r&&s==Math.PI&&(y=-.5/t);for(let x=0;x<=t;x++){const C=x/t;f.x=-e*Math.cos(n+C*i)*Math.sin(o+b*a),f.y=e*Math.cos(o+b*a),f.z=e*Math.sin(n+C*i)*Math.sin(o+b*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),m.push(h.x,h.y,h.z),p.push(C+y,1-b),M.push(c++)}u.push(M)}for(let _=0;_<r;_++)for(let M=0;M<t;M++){const b=u[_][M+1],y=u[_][M],x=u[_+1][M],C=u[_+1][M+1];(_!==0||o>0)&&d.push(b,y,C),(_!==r-1||s<Math.PI)&&d.push(y,x,C)}this.setIndex(d),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(m,3)),this.setAttribute("uv",new Ft(p,2))}static fromJSON(e){return new Ya(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wg extends lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],r=new Set,n=new j,i=new j;if(e.index!==null){const o=e.attributes.position,a=e.index;let s=e.groups;s.length===0&&(s=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=s.length;c<u;++c){const f=s[c],h=f.start,d=f.count;for(let g=h,m=h+d;g<m;g+=3)for(let p=0;p<3;p++){const _=a.getX(g+p),M=a.getX(g+(p+1)%3);n.fromBufferAttribute(o,_),i.fromBufferAttribute(o,M),pc(n,i,r)===!0&&(t.push(n.x,n.y,n.z),t.push(i.x,i.y,i.z))}}}else{const o=e.attributes.position;for(let a=0,s=o.count/3;a<s;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;n.fromBufferAttribute(o,u),i.fromBufferAttribute(o,f),pc(n,i,r)===!0&&(t.push(n.x,n.y,n.z),t.push(i.x,i.y,i.z))}}this.setAttribute("position",new Ft(t,3))}}}function pc(l,e,t){const r=`${l.x},${l.y},${l.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${l.x},${l.y},${l.z}`;return t.has(r)===!0||t.has(n)===!0?!1:(t.add(r),t.add(n),!0)}class Hg extends lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class mc{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bs);function Xg(){var l=Object.create(null);function e(n,i){var o=n.id,a=n.name,s=n.dependencies;s===void 0&&(s=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!l[o])try{s=s.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=l[h.id].value),h}),c=r("<"+a+">.init",c),u&&(u=r("<"+a+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,s):console.error("worker module init function failed to rehydrate"),l[o]={id:o,value:f,getTransferables:u},i(f)}catch(h){h&&h.noLog||console.error(h),i(h)}}function t(n,i){var o,a=n.id,s=n.args;(!l[a]||typeof l[a].value!="function")&&i(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=l[a]).value.apply(o,s);c&&typeof c.then=="function"?c.then(u,function(f){return i(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){i(f)}function u(f){try{var h=l[a].getTransferables&&l[a].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),i(f,h)}catch(d){console.error(d),i(d)}}}function r(n,i){var o=void 0;self.troikaDefine=function(s){return o=s};var a=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(s){console.error(s)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(n){var i=n.data,o=i.messageId,a=i.action,s=i.data;try{a==="registerModule"&&e(s,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(s,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function Yg(l){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=l.dependencies,r=l.init;t=Array.isArray(t)?t.map(function(i){return i&&i._getInitResult?i._getInitResult():i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var yu=function(){var l=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),l=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return yu=function(){return l},l},jg=0,qg=0,Xo=!1,Pr=Object.create(null),Rr=Object.create(null),ps=Object.create(null);function rr(l){if((!l||typeof l.init!="function")&&!Xo)throw new Error("requires `options.init` function");var e=l.dependencies,t=l.init,r=l.getTransferables,n=l.workerId;if(!yu())return Yg(l);n==null&&(n="#default");var i="workerModule"+ ++jg,o=l.name||i,a=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Xo=!0,c=rr({workerId:n,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+La(c)+`
)}`}),Xo=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function s(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!a){a=gc(n,"registerModule",s.workerModuleData);var f=function(){a=null,Rr[n].delete(f)};(Rr[n]||(Rr[n]=new Set)).add(f)}return a.then(function(h){var d=h.isCallable;if(d)return gc(n,"callModule",{id:i,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return s.workerModuleData={isWorkerModule:!0,id:i,name:o,dependencies:e,init:La(t),getTransferables:r&&La(r)},s}function Zg(l){Rr[l]&&Rr[l].forEach(function(e){e()}),Pr[l]&&(Pr[l].terminate(),delete Pr[l])}function La(l){var e=l.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Kg(l){var e=Pr[l];if(!e){var t=La(Xg);e=Pr[l]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+l.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,o=ps[i];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete ps[i],o(n)}}return e}function gc(l,e,t){return new Promise(function(r,n){var i=++qg;ps[i]=function(o){o.success?r(o.result):n(new Error("Error in worker "+e+" call: "+o.error))},Kg(l).postMessage({messageId:i,action:e,data:t})})}function bu(){var l=function(e){function t(Y,G,w,R,O,k,B,z){var ne=1-B;z.x=ne*ne*Y+2*ne*B*w+B*B*O,z.y=ne*ne*G+2*ne*B*R+B*B*k}function r(Y,G,w,R,O,k,B,z,ne,Q){var fe=1-ne;Q.x=fe*fe*fe*Y+3*fe*fe*ne*w+3*fe*ne*ne*O+ne*ne*ne*B,Q.y=fe*fe*fe*G+3*fe*fe*ne*R+3*fe*ne*ne*k+ne*ne*ne*z}function n(Y,G){for(var w=/([MLQCZ])([^MLQCZ]*)/g,R,O,k,B,z;R=w.exec(Y);){var ne=R[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(Q){return parseFloat(Q)});switch(R[1]){case"M":B=O=ne[0],z=k=ne[1];break;case"L":(ne[0]!==B||ne[1]!==z)&&G("L",B,z,B=ne[0],z=ne[1]);break;case"Q":{G("Q",B,z,B=ne[2],z=ne[3],ne[0],ne[1]);break}case"C":{G("C",B,z,B=ne[4],z=ne[5],ne[0],ne[1],ne[2],ne[3]);break}case"Z":(B!==O||z!==k)&&G("L",B,z,O,k);break}}}function i(Y,G,w){w===void 0&&(w=16);var R={x:0,y:0};n(Y,function(O,k,B,z,ne,Q,fe,le,de){switch(O){case"L":G(k,B,z,ne);break;case"Q":{for(var ie=k,ye=B,Pe=1;Pe<w;Pe++)t(k,B,Q,fe,z,ne,Pe/(w-1),R),G(ie,ye,R.x,R.y),ie=R.x,ye=R.y;break}case"C":{for(var Ce=k,De=B,Ue=1;Ue<w;Ue++)r(k,B,Q,fe,le,de,z,ne,Ue/(w-1),R),G(Ce,De,R.x,R.y),Ce=R.x,De=R.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",s=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(Y,G){var w=Y.getContext?Y.getContext("webgl",c):Y,R=s.get(w);if(!R){let Ce=function(oe){var T=k[oe];if(!T&&(T=k[oe]=w.getExtension(oe),!T))throw new Error(oe+" not supported");return T},De=function(oe,T){var S=w.createShader(T);return w.shaderSource(S,oe),w.compileShader(S),S},Ue=function(oe,T,S,X){if(!B[oe]){var ee={},pe={},re=w.createProgram();w.attachShader(re,De(T,w.VERTEX_SHADER)),w.attachShader(re,De(S,w.FRAGMENT_SHADER)),w.linkProgram(re),B[oe]={program:re,transaction:function(L){w.useProgram(re),L({setUniform:function(ge,xe){for(var he=[],ve=arguments.length-2;ve-- >0;)he[ve]=arguments[ve+2];var ue=pe[xe]||(pe[xe]=w.getUniformLocation(re,xe));w["uniform"+ge].apply(w,[ue].concat(he))},setAttribute:function(ge,xe,he,ve,ue){var Ae=ee[ge];Ae||(Ae=ee[ge]={buf:w.createBuffer(),loc:w.getAttribLocation(re,ge),data:null}),w.bindBuffer(w.ARRAY_BUFFER,Ae.buf),w.vertexAttribPointer(Ae.loc,xe,w.FLOAT,!1,0,0),w.enableVertexAttribArray(Ae.loc),O?w.vertexAttribDivisor(Ae.loc,ve):Ce("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ae.loc,ve),ue!==Ae.data&&(w.bufferData(w.ARRAY_BUFFER,ue,he),Ae.data=ue)}})}}}B[oe].transaction(X)},me=function(oe,T){ne++;try{w.activeTexture(w.TEXTURE0+ne);var S=z[oe];S||(S=z[oe]=w.createTexture(),w.bindTexture(w.TEXTURE_2D,S),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MIN_FILTER,w.NEAREST),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MAG_FILTER,w.NEAREST)),w.bindTexture(w.TEXTURE_2D,S),T(S,ne)}finally{ne--}},be=function(oe,T,S){var X=w.createFramebuffer();Q.push(X),w.bindFramebuffer(w.FRAMEBUFFER,X),w.activeTexture(w.TEXTURE0+T),w.bindTexture(w.TEXTURE_2D,oe),w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,oe,0);try{S(X)}finally{w.deleteFramebuffer(X),w.bindFramebuffer(w.FRAMEBUFFER,Q[--Q.length-1]||null)}},Ee=function(){k={},B={},z={},ne=-1,Q.length=0};var fe=Ce,le=De,de=Ue,ie=me,ye=be,Pe=Ee,O=typeof WebGL2RenderingContext<"u"&&w instanceof WebGL2RenderingContext,k={},B={},z={},ne=-1,Q=[];w.canvas.addEventListener("webglcontextlost",function(oe){Ee(),oe.preventDefault()},!1),s.set(w,R={gl:w,isWebGL2:O,getExtension:Ce,withProgram:Ue,withTexture:me,withTextureFramebuffer:be,handleContextLoss:Ee})}G(R)}function f(Y,G,w,R,O,k,B,z){B===void 0&&(B=15),z===void 0&&(z=null),u(Y,function(ne){var Q=ne.gl,fe=ne.withProgram,le=ne.withTexture;le("copy",function(de,ie){Q.texImage2D(Q.TEXTURE_2D,0,Q.RGBA,O,k,0,Q.RGBA,Q.UNSIGNED_BYTE,G),fe("copy",o,a,function(ye){var Pe=ye.setUniform,Ce=ye.setAttribute;Ce("aUV",2,Q.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Pe("1i","image",ie),Q.bindFramebuffer(Q.FRAMEBUFFER,z||null),Q.disable(Q.BLEND),Q.colorMask(B&8,B&4,B&2,B&1),Q.viewport(w,R,O,k),Q.scissor(w,R,O,k),Q.drawArrays(Q.TRIANGLES,0,3)})})})}function h(Y,G,w){var R=Y.width,O=Y.height;u(Y,function(k){var B=k.gl,z=new Uint8Array(R*O*4);B.readPixels(0,0,R,O,B.RGBA,B.UNSIGNED_BYTE,z),Y.width=G,Y.height=w,f(B,z,0,0,R,O)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(Y,G,w,R,O,k){k===void 0&&(k=1);var B=new Uint8Array(Y*G),z=R[2]-R[0],ne=R[3]-R[1],Q=[];i(w,function(Ce,De,Ue,me){Q.push({x1:Ce,y1:De,x2:Ue,y2:me,minX:Math.min(Ce,Ue),minY:Math.min(De,me),maxX:Math.max(Ce,Ue),maxY:Math.max(De,me)})}),Q.sort(function(Ce,De){return Ce.maxX-De.maxX});for(var fe=0;fe<Y;fe++)for(var le=0;le<G;le++){var de=ye(R[0]+z*(fe+.5)/Y,R[1]+ne*(le+.5)/G),ie=Math.pow(1-Math.abs(de)/O,k)/2;de<0&&(ie=1-ie),ie=Math.max(0,Math.min(255,Math.round(ie*255))),B[le*Y+fe]=ie}return B;function ye(Ce,De){for(var Ue=1/0,me=1/0,be=Q.length;be--;){var Ee=Q[be];if(Ee.maxX+me<=Ce)break;if(Ce+me>Ee.minX&&De-me<Ee.maxY&&De+me>Ee.minY){var oe=_(Ce,De,Ee.x1,Ee.y1,Ee.x2,Ee.y2);oe<Ue&&(Ue=oe,me=Math.sqrt(Ue))}}return Pe(Ce,De)&&(me=-me),me}function Pe(Ce,De){for(var Ue=0,me=Q.length;me--;){var be=Q[me];if(be.maxX<=Ce)break;var Ee=be.y1>De!=be.y2>De&&Ce<(be.x2-be.x1)*(De-be.y1)/(be.y2-be.y1)+be.x1;Ee&&(Ue+=be.y1<be.y2?1:-1)}return Ue!==0}}function m(Y,G,w,R,O,k,B,z,ne,Q){k===void 0&&(k=1),z===void 0&&(z=0),ne===void 0&&(ne=0),Q===void 0&&(Q=0),p(Y,G,w,R,O,k,B,null,z,ne,Q)}function p(Y,G,w,R,O,k,B,z,ne,Q,fe){k===void 0&&(k=1),ne===void 0&&(ne=0),Q===void 0&&(Q=0),fe===void 0&&(fe=0);for(var le=g(Y,G,w,R,O,k),de=new Uint8Array(le.length*4),ie=0;ie<le.length;ie++)de[ie*4+fe]=le[ie];f(B,de,ne,Q,Y,G,1<<3-fe,z)}function _(Y,G,w,R,O,k){var B=O-w,z=k-R,ne=B*B+z*z,Q=ne?Math.max(0,Math.min(1,((Y-w)*B+(G-R)*z)/ne)):0,fe=Y-(w+Q*B),le=G-(R+Q*z);return fe*fe+le*le}var M=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:m,generateIntoFramebuffer:p}),b="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",y="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",x="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",C=new Float32Array([0,0,2,0,0,2]),P=null,v=!1,E={},U=new WeakMap;function K(Y){if(!v&&!W(Y))throw new Error("WebGL generation not supported")}function F(Y,G,w,R,O,k,B){if(k===void 0&&(k=1),B===void 0&&(B=null),!B&&(B=P,!B)){var z=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!z)throw new Error("OffscreenCanvas or DOM canvas not supported");B=P=z.getContext("webgl",{depth:!1})}K(B);var ne=new Uint8Array(Y*G*4);u(B,function(de){var ie=de.gl,ye=de.withTexture,Pe=de.withTextureFramebuffer;ye("readable",function(Ce,De){ie.texImage2D(ie.TEXTURE_2D,0,ie.RGBA,Y,G,0,ie.RGBA,ie.UNSIGNED_BYTE,null),Pe(Ce,De,function(Ue){D(Y,G,w,R,O,k,ie,Ue,0,0,0),ie.readPixels(0,0,Y,G,ie.RGBA,ie.UNSIGNED_BYTE,ne)})})});for(var Q=new Uint8Array(Y*G),fe=0,le=0;fe<ne.length;fe+=4)Q[le++]=ne[fe];return Q}function I(Y,G,w,R,O,k,B,z,ne,Q){k===void 0&&(k=1),z===void 0&&(z=0),ne===void 0&&(ne=0),Q===void 0&&(Q=0),D(Y,G,w,R,O,k,B,null,z,ne,Q)}function D(Y,G,w,R,O,k,B,z,ne,Q,fe){k===void 0&&(k=1),ne===void 0&&(ne=0),Q===void 0&&(Q=0),fe===void 0&&(fe=0),K(B);var le=[];i(w,function(de,ie,ye,Pe){le.push(de,ie,ye,Pe)}),le=new Float32Array(le),u(B,function(de){var ie=de.gl,ye=de.isWebGL2,Pe=de.getExtension,Ce=de.withProgram,De=de.withTexture,Ue=de.withTextureFramebuffer,me=de.handleContextLoss;if(De("rawDistances",function(be,Ee){(Y!==be._lastWidth||G!==be._lastHeight)&&ie.texImage2D(ie.TEXTURE_2D,0,ie.RGBA,be._lastWidth=Y,be._lastHeight=G,0,ie.RGBA,ie.UNSIGNED_BYTE,null),Ce("main",b,y,function(oe){var T=oe.setAttribute,S=oe.setUniform,X=!ye&&Pe("ANGLE_instanced_arrays"),ee=!ye&&Pe("EXT_blend_minmax");T("aUV",2,ie.STATIC_DRAW,0,C),T("aLineSegment",4,ie.DYNAMIC_DRAW,1,le),S.apply(void 0,["4f","uGlyphBounds"].concat(R)),S("1f","uMaxDistance",O),S("1f","uExponent",k),Ue(be,Ee,function(pe){ie.enable(ie.BLEND),ie.colorMask(!0,!0,!0,!0),ie.viewport(0,0,Y,G),ie.scissor(0,0,Y,G),ie.blendFunc(ie.ONE,ie.ONE),ie.blendEquationSeparate(ie.FUNC_ADD,ye?ie.MAX:ee.MAX_EXT),ie.clear(ie.COLOR_BUFFER_BIT),ye?ie.drawArraysInstanced(ie.TRIANGLES,0,3,le.length/4):X.drawArraysInstancedANGLE(ie.TRIANGLES,0,3,le.length/4)})}),Ce("post",o,x,function(oe){oe.setAttribute("aUV",2,ie.STATIC_DRAW,0,C),oe.setUniform("1i","tex",Ee),ie.bindFramebuffer(ie.FRAMEBUFFER,z),ie.disable(ie.BLEND),ie.colorMask(fe===0,fe===1,fe===2,fe===3),ie.viewport(ne,Q,Y,G),ie.scissor(ne,Q,Y,G),ie.drawArrays(ie.TRIANGLES,0,3)})}),ie.isContextLost())throw me(),new Error("webgl context lost")})}function W(Y){var G=!Y||Y===P?E:Y.canvas||Y,w=U.get(G);if(w===void 0){v=!0;var R=null;try{var O=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],k=F(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,Y);w=k&&O.length===k.length&&k.every(function(B,z){return B===O[z]}),w||(R="bad trial run results",console.info(O,k))}catch(B){w=!1,R=B.message}R&&console.warn("WebGL SDF generation not supported:",R),v=!1,U.set(G,w)}return w}var H=Object.freeze({__proto__:null,generate:F,generateIntoCanvas:I,generateIntoFramebuffer:D,isSupported:W});function te(Y,G,w,R,O,k){O===void 0&&(O=Math.max(R[2]-R[0],R[3]-R[1])/2),k===void 0&&(k=1);try{return F.apply(H,arguments)}catch(B){return console.info("WebGL SDF generation failed, falling back to JS",B),g.apply(M,arguments)}}function Z(Y,G,w,R,O,k,B,z,ne,Q){O===void 0&&(O=Math.max(R[2]-R[0],R[3]-R[1])/2),k===void 0&&(k=1),z===void 0&&(z=0),ne===void 0&&(ne=0),Q===void 0&&(Q=0);try{return I.apply(H,arguments)}catch(fe){return console.info("WebGL SDF generation failed, falling back to JS",fe),m.apply(M,arguments)}}return e.forEachPathCommand=n,e.generate=te,e.generateIntoCanvas=Z,e.javascript=M,e.pathToLineSegments=i,e.webgl=H,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return l}function Jg(){var l=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(me,be){r[me]=1<<be+1,n[r[me]]=me}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,o=r.L|r.R|r.AL,a=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,s=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|s,u=null;function f(){if(!u){u=new Map;var me=function(Ee){if(t.hasOwnProperty(Ee)){var oe=0;t[Ee].split(",").forEach(function(T){var S=T.split("+"),X=S[0],ee=S[1];X=parseInt(X,36),ee=ee?parseInt(ee,36):0,u.set(oe+=X,r[Ee]);for(var pe=0;pe<ee;pe++)u.set(++oe,r[Ee])})}};for(var be in t)me(be)}}function h(me){return f(),u.get(me.codePointAt(0))||r.L}function d(me){return n[h(me)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function m(me,be){var Ee=36,oe=0,T=new Map,S=be&&new Map,X;return me.split(",").forEach(function ee(pe){if(pe.indexOf("+")!==-1)for(var re=+pe;re--;)ee(X);else{X=pe;var _e=pe.split(">"),L=_e[0],V=_e[1];L=String.fromCodePoint(oe+=parseInt(L,Ee)),V=String.fromCodePoint(oe+=parseInt(V,Ee)),T.set(L,V),be&&S.set(V,L)}}),{map:T,reverseMap:S}}var p,_,M;function b(){if(!p){var me=m(g.pairs,!0),be=me.map,Ee=me.reverseMap;p=be,_=Ee,M=m(g.canonical,!1).map}}function y(me){return b(),p.get(me)||null}function x(me){return b(),_.get(me)||null}function C(me){return b(),M.get(me)||null}var P=r.L,v=r.R,E=r.EN,U=r.ES,K=r.ET,F=r.AN,I=r.CS,D=r.B,W=r.S,H=r.ON,te=r.BN,Z=r.NSM,Y=r.AL,G=r.LRO,w=r.RLO,R=r.LRE,O=r.RLE,k=r.PDF,B=r.LRI,z=r.RLI,ne=r.FSI,Q=r.PDI;function fe(me,be){for(var Ee=125,oe=new Uint32Array(me.length),T=0;T<me.length;T++)oe[T]=h(me[T]);var S=new Map;function X(Tt,Qt){var Et=oe[Tt];oe[Tt]=Qt,S.set(Et,S.get(Et)-1),Et&a&&S.set(a,S.get(a)-1),S.set(Qt,(S.get(Qt)||0)+1),Qt&a&&S.set(a,(S.get(a)||0)+1)}for(var ee=new Uint8Array(me.length),pe=new Map,re=[],_e=null,L=0;L<me.length;L++)_e||re.push(_e={start:L,end:me.length-1,level:be==="rtl"?1:be==="ltr"?0:js(L,!1)}),oe[L]&D&&(_e.end=L,_e=null);for(var V=O|R|w|G|i|Q|k|D,ge=function(Tt){return Tt+(Tt&1?1:2)},xe=function(Tt){return Tt+(Tt&1?2:1)},he=0;he<re.length;he++){_e=re[he];var ve=[{_level:_e.level,_override:0,_isolate:0}],ue=void 0,Ae=0,Re=0,Ne=0;S.clear();for(var N=_e.start;N<=_e.end;N++){var J=oe[N];if(ue=ve[ve.length-1],S.set(J,(S.get(J)||0)+1),J&a&&S.set(a,(S.get(a)||0)+1),J&V)if(J&(O|R)){ee[N]=ue._level;var ce=(J===O?xe:ge)(ue._level);ce<=Ee&&!Ae&&!Re?ve.push({_level:ce,_override:0,_isolate:0}):Ae||Re++}else if(J&(w|G)){ee[N]=ue._level;var Te=(J===w?xe:ge)(ue._level);Te<=Ee&&!Ae&&!Re?ve.push({_level:Te,_override:J&w?v:P,_isolate:0}):Ae||Re++}else if(J&i){J&ne&&(J=js(N+1,!0)===1?z:B),ee[N]=ue._level,ue._override&&X(N,ue._override);var Se=(J===z?xe:ge)(ue._level);Se<=Ee&&Ae===0&&Re===0?(Ne++,ve.push({_level:Se,_override:0,_isolate:1,_isolInitIndex:N})):Ae++}else if(J&Q){if(Ae>0)Ae--;else if(Ne>0){for(Re=0;!ve[ve.length-1]._isolate;)ve.pop();var Le=ve[ve.length-1]._isolInitIndex;Le!=null&&(pe.set(Le,N),pe.set(N,Le)),ve.pop(),Ne--}ue=ve[ve.length-1],ee[N]=ue._level,ue._override&&X(N,ue._override)}else J&k?(Ae===0&&(Re>0?Re--:!ue._isolate&&ve.length>1&&(ve.pop(),ue=ve[ve.length-1])),ee[N]=ue._level):J&D&&(ee[N]=_e.level);else ee[N]=ue._level,ue._override&&J!==te&&X(N,ue._override)}for(var Xe=[],Be=null,Fe=_e.start;Fe<=_e.end;Fe++){var Oe=oe[Fe];if(!(Oe&s)){var Qe=ee[Fe],Ke=Oe&i,it=Oe===Q;Be&&Qe===Be._level?(Be._end=Fe,Be._endsWithIsolInit=Ke):Xe.push(Be={_start:Fe,_end:Fe,_level:Qe,_startsWithPDI:it,_endsWithIsolInit:Ke})}}for(var Ot=[],on=0;on<Xe.length;on++){var Zt=Xe[on];if(!Zt._startsWithPDI||Zt._startsWithPDI&&!pe.has(Zt._start)){for(var A=[Be=Zt],$=void 0;Be&&Be._endsWithIsolInit&&($=pe.get(Be._end))!=null;)for(var ae=on+1;ae<Xe.length;ae++)if(Xe[ae]._start===$){A.push(Be=Xe[ae]);break}for(var q=[],se=0;se<A.length;se++)for(var Ie=A[se],ze=Ie._start;ze<=Ie._end;ze++)q.push(ze);for(var Ge=ee[q[0]],Ve=_e.level,qe=q[0]-1;qe>=0;qe--)if(!(oe[qe]&s)){Ve=ee[qe];break}var Ye=q[q.length-1],Ze=ee[Ye],tt=_e.level;if(!(oe[Ye]&i)){for(var mt=Ye+1;mt<=_e.end;mt++)if(!(oe[mt]&s)){tt=ee[mt];break}}Ot.push({_seqIndices:q,_sosType:Math.max(Ve,Ge)%2?v:P,_eosType:Math.max(tt,Ze)%2?v:P})}}for(var zt=0;zt<Ot.length;zt++){var Kt=Ot[zt],we=Kt._seqIndices,We=Kt._sosType,hr=Kt._eosType,$e=ee[we[0]]&1?v:P;if(S.get(Z))for(var Wt=0;Wt<we.length;Wt++){var dr=we[Wt];if(oe[dr]&Z){for(var fn=We,Cn=Wt-1;Cn>=0;Cn--)if(!(oe[we[Cn]]&s)){fn=oe[we[Cn]];break}X(dr,fn&(i|Q)?H:fn)}}if(S.get(E))for(var ct=0;ct<we.length;ct++){var sn=we[ct];if(oe[sn]&E)for(var Dn=ct-1;Dn>=-1;Dn--){var yt=Dn===-1?We:oe[we[Dn]];if(yt&o){yt===Y&&X(sn,F);break}}}if(S.get(Y))for(var Hn=0;Hn<we.length;Hn++){var Xr=we[Hn];oe[Xr]&Y&&X(Xr,v)}if(S.get(U)||S.get(I))for(var Ln=1;Ln<we.length-1;Ln++){var Ka=we[Ln];if(oe[Ka]&(U|I)){for(var yi=0,Ja=0,Qa=Ln-1;Qa>=0&&(yi=oe[we[Qa]],!!(yi&s));Qa--);for(var $a=Ln+1;$a<we.length&&(Ja=oe[we[$a]],!!(Ja&s));$a++);yi===Ja&&(oe[Ka]===U?yi===E:yi&(E|F))&&X(Ka,yi)}}if(S.get(E))for(var ln=0;ln<we.length;ln++){var Hu=we[ln];if(oe[Hu]&E){for(var Yr=ln-1;Yr>=0&&oe[we[Yr]]&(K|s);Yr--)X(we[Yr],E);for(ln++;ln<we.length&&oe[we[ln]]&(K|s|E);ln++)oe[we[ln]]!==E&&X(we[ln],E)}}if(S.get(K)||S.get(U)||S.get(I))for(var pr=0;pr<we.length;pr++){var Is=we[pr];if(oe[Is]&(K|U|I)){X(Is,H);for(var jr=pr-1;jr>=0&&oe[we[jr]]&s;jr--)X(we[jr],H);for(var qr=pr+1;qr<we.length&&oe[we[qr]]&s;qr++)X(we[qr],H)}}if(S.get(E))for(var eo=0,Fs=We;eo<we.length;eo++){var Os=we[eo],to=oe[Os];to&E?Fs===P&&X(Os,P):to&o&&(Fs=to)}if(S.get(a)){var mr=v|E|F,zs=mr|P,Zr=[];{for(var bi=[],Si=0;Si<we.length;Si++)if(oe[we[Si]]&a){var gr=me[we[Si]],Ns=void 0;if(y(gr)!==null)if(bi.length<63)bi.push({char:gr,seqIndex:Si});else break;else if((Ns=x(gr))!==null)for(var vr=bi.length-1;vr>=0;vr--){var no=bi[vr].char;if(no===Ns||no===x(C(gr))||y(C(no))===gr){Zr.push([bi[vr].seqIndex,Si]),bi.length=vr;break}}}Zr.sort(function(Tt,Qt){return Tt[0]-Qt[0]})}for(var io=0;io<Zr.length;io++){for(var ks=Zr[io],Kr=ks[0],ro=ks[1],Bs=!1,Jt=0,ao=Kr+1;ao<ro;ao++){var Gs=we[ao];if(oe[Gs]&zs){Bs=!0;var Vs=oe[Gs]&mr?v:P;if(Vs===$e){Jt=Vs;break}}}if(Bs&&!Jt){Jt=We;for(var oo=Kr-1;oo>=0;oo--){var Ws=we[oo];if(oe[Ws]&zs){var Hs=oe[Ws]&mr?v:P;Hs!==$e?Jt=Hs:Jt=$e;break}}}if(Jt){if(oe[we[Kr]]=oe[we[ro]]=Jt,Jt!==$e){for(var _r=Kr+1;_r<we.length;_r++)if(!(oe[we[_r]]&s)){h(me[we[_r]])&Z&&(oe[we[_r]]=Jt);break}}if(Jt!==$e){for(var xr=ro+1;xr<we.length;xr++)if(!(oe[we[xr]]&s)){h(me[we[xr]])&Z&&(oe[we[xr]]=Jt);break}}}}for(var Pn=0;Pn<we.length;Pn++)if(oe[we[Pn]]&a){for(var Xs=Pn,so=Pn,lo=We,yr=Pn-1;yr>=0;yr--)if(oe[we[yr]]&s)Xs=yr;else{lo=oe[we[yr]]&mr?v:P;break}for(var Ys=hr,br=Pn+1;br<we.length;br++)if(oe[we[br]]&(a|s))so=br;else{Ys=oe[we[br]]&mr?v:P;break}for(var co=Xs;co<=so;co++)oe[we[co]]=lo===Ys?lo:$e;Pn=so}}}for(var Nt=_e.start;Nt<=_e.end;Nt++){var Xu=ee[Nt],Jr=oe[Nt];if(Xu&1?Jr&(P|E|F)&&ee[Nt]++:Jr&v?ee[Nt]++:Jr&(F|E)&&(ee[Nt]+=2),Jr&s&&(ee[Nt]=Nt===0?_e.level:ee[Nt-1]),Nt===_e.end||h(me[Nt])&(W|D))for(var Qr=Nt;Qr>=0&&h(me[Qr])&c;Qr--)ee[Qr]=_e.level}}return{levels:ee,paragraphs:re};function js(Tt,Qt){for(var Et=Tt;Et<me.length;Et++){var Rn=oe[Et];if(Rn&(v|Y))return 1;if(Rn&(D|P)||Qt&&Rn===Q)return 0;if(Rn&i){var qs=Yu(Et);Et=qs===-1?me.length:qs}}return 0}function Yu(Tt){for(var Qt=1,Et=Tt+1;Et<me.length;Et++){var Rn=oe[Et];if(Rn&D)break;if(Rn&Q){if(--Qt===0)return Et}else Rn&i&&Qt++}return-1}}var le="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",de;function ie(){if(!de){var me=m(le,!0),be=me.map,Ee=me.reverseMap;Ee.forEach(function(oe,T){be.set(T,oe)}),de=be}}function ye(me){return ie(),de.get(me)||null}function Pe(me,be,Ee,oe){var T=me.length;Ee=Math.max(0,Ee==null?0:+Ee),oe=Math.min(T-1,oe==null?T-1:+oe);for(var S=new Map,X=Ee;X<=oe;X++)if(be[X]&1){var ee=ye(me[X]);ee!==null&&S.set(X,ee)}return S}function Ce(me,be,Ee,oe){var T=me.length;Ee=Math.max(0,Ee==null?0:+Ee),oe=Math.min(T-1,oe==null?T-1:+oe);var S=[];return be.paragraphs.forEach(function(X){var ee=Math.max(Ee,X.start),pe=Math.min(oe,X.end);if(ee<pe){for(var re=be.levels.slice(ee,pe+1),_e=pe;_e>=ee&&h(me[_e])&c;_e--)re[_e]=X.level;for(var L=X.level,V=1/0,ge=0;ge<re.length;ge++){var xe=re[ge];xe>L&&(L=xe),xe<V&&(V=xe|1)}for(var he=L;he>=V;he--)for(var ve=0;ve<re.length;ve++)if(re[ve]>=he){for(var ue=ve;ve+1<re.length&&re[ve+1]>=he;)ve++;ve>ue&&S.push([ue+ee,ve+ee])}}}),S}function De(me,be,Ee,oe){var T=Ue(me,be,Ee,oe),S=[].concat(me);return T.forEach(function(X,ee){S[ee]=(be.levels[X]&1?ye(me[X]):null)||me[X]}),S.join("")}function Ue(me,be,Ee,oe){for(var T=Ce(me,be,Ee,oe),S=[],X=0;X<me.length;X++)S[X]=X;return T.forEach(function(ee){for(var pe=ee[0],re=ee[1],_e=S.slice(pe,re+1),L=_e.length;L--;)S[re-L]=_e[L]}),S}return e.closingToOpeningBracket=x,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=C,e.getEmbeddingLevels=fe,e.getMirroredCharacter=ye,e.getMirroredCharactersMap=Pe,e.getReorderSegments=Ce,e.getReorderedIndices=Ue,e.getReorderedString=De,e.openingToClosingBracket=y,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return l}const Su=/\bvoid\s+main\s*\(\s*\)\s*{/g;function ms(l){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=He[n];return i?ms(i):r}return l.replace(e,t)}const _t=[];for(let l=0;l<256;l++)_t[l]=(l<16?"0":"")+l.toString(16);function Qg(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_t[l&255]+_t[l>>8&255]+_t[l>>16&255]+_t[l>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]).toUpperCase()}const qn=Object.assign||function(){let l=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(l[n]=r[n])}return l},$g=Date.now(),vc=new WeakMap,_c=new Map;let ev=1e10;function gs(l,e){const t=rv(e);let r=vc.get(l);if(r||vc.set(l,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,u){l.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=_c[f];if(!h){const d=tv(this,c,e,t);h=_c[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,qn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-$g}}),this[n]&&this[n](c)},o=function(){return a(e.chained?l:l.clone())},a=function(c){const u=Object.create(c,s);return Object.defineProperty(u,"baseMaterial",{value:l}),Object.defineProperty(u,"id",{value:ev++}),u.uuid=Qg(),u.uniforms=qn({},c.uniforms,e.uniforms),u.defines=qn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=qn({},c.extensions,e.extensions),u._listeners=void 0,u},s={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return l.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return l.copy.call(this,c),!l.isShaderMaterial&&!l.isDerivedMaterial&&(qn(this.extensions,c.extensions),qn(this.defines,c.defines),qn(this.uniforms,Ha.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new l.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=gs(l.isDerivedMaterial?l.getDepthMaterial():new vu({depthPacking:Qc}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=gs(l.isDerivedMaterial?l.getDistanceMaterial():new _u,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),l.dispose.call(this)}}};return r[t]=o,new o}function tv(l,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:o,vertexMainOutro:a,vertexTransform:s,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:g}=r;if(i=i||"",o=o||"",a=a||"",c=c||"",u=u||"",f=f||"",(s||d)&&(e=ms(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=ms(t)),d){let m=d({vertexShader:e,fragmentShader:t});e=m.vertexShader,t=m.fragmentShader}if(h){let m=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(m.push(p),"")),f=`${h}
${m.join(`
`)}
${f}`}if(g){const m=`
uniform float ${g};
`;i=m+i,c=m+c}return s&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${s}
}
`,o=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(m,p,_,M)=>/\battribute\s+vec[23]\s+$/.test(M.substr(0,_))?p:`troika_${p}_${n}`),l.map&&l.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=xc(e,n,i,o,a),t=xc(t,n,c,u,f),{vertexShader:e,fragmentShader:t}}function xc(l,e,t,r,n){return(r||n||t)&&(l=l.replace(Su,`
${t}
void troikaOrigMain${e}() {`),l+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),l}function nv(l,e){return l==="uniforms"?void 0:typeof e=="function"?e.toString():e}let iv=0;const yc=new Map;function rv(l){const e=JSON.stringify(l,nv);let t=yc.get(e);return t==null&&yc.set(e,t=++iv),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function av(){return typeof window>"u"&&(self.window=self),function(l){var e={parse:function(n){var i=e._bin,o=new Uint8Array(n);if(i.readASCII(o,0,4)=="ttcf"){var a=4;i.readUshort(o,a),a+=2,i.readUshort(o,a),a+=2;var s=i.readUint(o,a);a+=4;for(var c=[],u=0;u<s;u++){var f=i.readUint(o,a);a+=4,c.push(e._readFont(o,f))}return c}return[e._readFont(o,0)]},_readFont:function(n,i){var o=e._bin,a=i;o.readFixed(n,i),i+=4;var s=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:a},f={},h=0;h<s;h++){var d=o.readASCII(n,i,4);i+=4,o.readUint(n,i),i+=4;var g=o.readUint(n,i);i+=4;var m=o.readUint(n,i);i+=4,f[d]={offset:g,length:m}}for(h=0;h<c.length;h++){var p=c[h];f[p]&&(u[p.trim()]=e[p.trim()].parse(n,f[p].offset,f[p].length,u))}return u},_tabOffset:function(n,i,o){for(var a=e._bin,s=a.readUshort(n,o+4),c=o+12,u=0;u<s;u++){var f=a.readASCII(n,c,4);c+=4,a.readUint(n,c),c+=4;var h=a.readUint(n,c);if(c+=4,a.readUint(n,c),c+=4,f==i)return h}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,o){for(var a=[],s=0;s<o;s++)a.push(e._bin.readUshort(n,i+2*s));return a},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,o){for(var a="",s=0;s<o;s++)a+=String.fromCharCode(n[i+s]);return a},readUnicode:function(n,i,o){for(var a="",s=0;s<o;s++){var c=n[i++]<<8|n[i++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,o){var a=e._bin._tdec;return a&&i==0&&o==n.length?a.decode(n):e._bin.readASCII(n,i,o)},readBytes:function(n,i,o){for(var a=[],s=0;s<o;s++)a.push(n[i+s]);return a},readASCIIArray:function(n,i,o){for(var a=[],s=0;s<o;s++)a.push(String.fromCharCode(n[i+s]));return a},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,o,a,s){var c=e._bin,u={},f=i;c.readFixed(n,i),i+=4;var h=c.readUshort(n,i);i+=2;var d=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,f+h),u.featureList=e._lctf.readFeatureList(n,f+d),u.lookupList=e._lctf.readLookupList(n,f+g,s),u},e._lctf.readLookupList=function(n,i,o){var a=e._bin,s=i,c=[],u=a.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=a.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,s+h,o);c.push(d)}return c},e._lctf.readLookupTable=function(n,i,o){var a=e._bin,s=i,c={tabs:[]};c.ltype=a.readUshort(n,i),i+=2,c.flag=a.readUshort(n,i),i+=2;var u=a.readUshort(n,i);i+=2;for(var f=c.ltype,h=0;h<u;h++){var d=a.readUshort(n,i);i+=2;var g=o(n,f,s+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,o=0;o<32;o++)n>>>o&1&&i++;return i},e._lctf.readClassDef=function(n,i){var o=e._bin,a=[],s=o.readUshort(n,i);if(i+=2,s==1){var c=o.readUshort(n,i);i+=2;var u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++)a.push(c+f),a.push(c+f),a.push(o.readUshort(n,i)),i+=2}if(s==2){var h=o.readUshort(n,i);for(i+=2,f=0;f<h;f++)a.push(o.readUshort(n,i)),i+=2,a.push(o.readUshort(n,i)),i+=2,a.push(o.readUshort(n,i)),i+=2}return a},e._lctf.getInterval=function(n,i){for(var o=0;o<n.length;o+=3){var a=n[o],s=n[o+1];if(n[o+2],a<=i&&i<=s)return o}return-1},e._lctf.readCoverage=function(n,i){var o=e._bin,a={};a.fmt=o.readUshort(n,i),i+=2;var s=o.readUshort(n,i);return i+=2,a.fmt==1&&(a.tab=o.readUshorts(n,i,s)),a.fmt==2&&(a.tab=o.readUshorts(n,i,3*s)),a},e._lctf.coverageIndex=function(n,i){var o=n.tab;if(n.fmt==1)return o.indexOf(i);if(n.fmt==2){var a=e._lctf.getInterval(o,i);if(a!=-1)return o[a+2]+(i-o[a])}return-1},e._lctf.readFeatureList=function(n,i){var o=e._bin,a=i,s=[],c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readASCII(n,i,4);i+=4;var h=o.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,a+h);d.tag=f.trim(),s.push(d)}return s},e._lctf.readFeatureTable=function(n,i){var o=e._bin,a=i,s={},c=o.readUshort(n,i);i+=2,c>0&&(s.featureParams=a+c);var u=o.readUshort(n,i);i+=2,s.tab=[];for(var f=0;f<u;f++)s.tab.push(o.readUshort(n,i+2*f));return s},e._lctf.readScriptList=function(n,i){var o=e._bin,a=i,s={},c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readASCII(n,i,4);i+=4;var h=o.readUshort(n,i);i+=2,s[f.trim()]=e._lctf.readScriptTable(n,a+h)}return s},e._lctf.readScriptTable=function(n,i){var o=e._bin,a=i,s={},c=o.readUshort(n,i);i+=2,c>0&&(s.default=e._lctf.readLangSysTable(n,a+c));var u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=o.readASCII(n,i,4);i+=4;var d=o.readUshort(n,i);i+=2,s[h.trim()]=e._lctf.readLangSysTable(n,a+d)}return s},e._lctf.readLangSysTable=function(n,i){var o=e._bin,a={};o.readUshort(n,i),i+=2,a.reqFeature=o.readUshort(n,i),i+=2;var s=o.readUshort(n,i);return i+=2,a.features=o.readUshorts(n,i,s),a},e.CFF={},e.CFF.parse=function(n,i,o){var a=e._bin;(n=new Uint8Array(n.buffer,i,o))[i=0],n[++i],n[++i],n[++i],i++;var s=[];i=e.CFF.readIndex(n,i,s);for(var c=[],u=0;u<s.length-1;u++)c.push(a.readASCII(n,i+s[u],s[u+1]-s[u]));i+=s[s.length-1];var f=[];i=e.CFF.readIndex(n,i,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(n,i+f[u],i+f[u+1]));i+=f[f.length-1];var d=h[0],g=[];i=e.CFF.readIndex(n,i,g);var m=[];for(u=0;u<g.length-1;u++)m.push(a.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var p=[];for(u=0;u<g.length-1;u++)p.push(a.readBytes(n,i+g[u],g[u+1]-g[u]));d.CharStrings=p}if(d.ROS){i=d.FDArray;var _=[];for(i=e.CFF.readIndex(n,i,_),d.FDArray=[],u=0;u<_.length-1;u++){var M=e.CFF.readDict(n,i+_[u],i+_[u+1]);e.CFF._readFDict(n,M,m),d.FDArray.push(M)}i+=_[_.length-1],i=d.FDSelect,d.FDSelect=[];var b=n[i];if(i++,b!=3)throw b;var y=a.readUshort(n,i);for(i+=2,u=0;u<y+1;u++)d.FDSelect.push(a.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,m),d},e.CFF._readFDict=function(n,i,o){var a;for(var s in i.Private&&(a=i.Private[1],i.Private=e.CFF.readDict(n,a,a+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,a+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(s)!=-1&&(i[s]=o[i[s]-426+35])},e.CFF.readSubrs=function(n,i,o){var a=e._bin,s=[];i=e.CFF.readIndex(n,i,s);var c,u=s.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var f=0;f<s.length-1;f++)o.Subrs.push(a.readBytes(n,i+s[f],s[f+1]-s[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==i)return o;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,o){e._bin;var a=[".notdef"],s=n[i];if(i++,s!=0)throw"error: unknown encoding format: "+s;var c=n[i];i++;for(var u=0;u<c;u++)a.push(n[i+u]);return a},e.CFF.readCharset=function(n,i,o){var a=e._bin,s=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<o;u++){var f=a.readUshort(n,i);i+=2,s.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;s.length<o;){f=a.readUshort(n,i),i+=2;var h=0;for(c==1?(h=n[i],i++):(h=a.readUshort(n,i),i+=2),u=0;u<=h;u++)s.push(f),f++}}return s},e.CFF.readIndex=function(n,i,o){var a=e._bin,s=a.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<s;u++)o.push(n[i+u]);else if(c==2)for(u=0;u<s;u++)o.push(a.readUshort(n,i+2*u));else if(c==3)for(u=0;u<s;u++)o.push(16777215&a.readUint(n,i+3*u-1));else if(s!=1)throw"unsupported offset size: "+c+", count: "+s;return(i+=s*c)-1},e.CFF.getCharString=function(n,i,o){var a=e._bin,s=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,f=null,h=null;s<=20&&(f=s,u=1),s==12&&(f=100*s+c,u=2),21<=s&&s<=27&&(f=s,u=1),s==28&&(h=a.readShort(n,i+1),u=3),29<=s&&s<=31&&(f=s,u=1),32<=s&&s<=246&&(h=s-139,u=1),247<=s&&s<=250&&(h=256*(s-247)+c+108,u=2),251<=s&&s<=254&&(h=256*-(s-251)-c-108,u=2),s==255&&(h=a.readInt(n,i+1)/65535,u=5),o.val=h??"o"+f,o.size=u},e.CFF.readCharString=function(n,i,o){for(var a=i+o,s=e._bin,c=[];i<a;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,g=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(g=s.readShort(n,i+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=s.readInt(n,i+1)/65535,h=5),c.push(g??"o"+d),i+=h}return c},e.CFF.readDict=function(n,i,o){for(var a=e._bin,s={},c=[];i<o;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,g=null;if(u==28&&(g=a.readShort(n,i+1),h=3),u==29&&(g=a.readInt(n,i+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=a.readInt(n,i+1)/65535,h=5,"unknown number";if(u==30){var m=[];for(h=1;;){var p=n[i+h];h++;var _=p>>4,M=15&p;if(_!=15&&m.push(_),M!=15&&m.push(M),M==15)break}for(var b="",y=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],x=0;x<m.length;x++)b+=y[m[x]];g=parseFloat(b)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(s[d]=c.length==1?c[0]:c,c=[]):c.push(g),i+=h}return s},e.cmap={},e.cmap.parse=function(n,i,o){n=new Uint8Array(n.buffer,i,o),i=0;var a=e._bin,s={};a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2;var u=[];s.tables=[];for(var f=0;f<c;f++){var h=a.readUshort(n,i);i+=2;var d=a.readUshort(n,i);i+=2;var g=a.readUint(n,i);i+=4;var m="p"+h+"e"+d,p=u.indexOf(g);if(p==-1){var _;p=s.tables.length,u.push(g);var M=a.readUshort(n,g);M==0?_=e.cmap.parse0(n,g):M==4?_=e.cmap.parse4(n,g):M==6?_=e.cmap.parse6(n,g):M==12?_=e.cmap.parse12(n,g):console.debug("unknown format: "+M,h,d,g),s.tables.push(_)}if(s[m]!=null)throw"multiple tables for one platform+encoding";s[m]=p}return s},e.cmap.parse0=function(n,i){var o=e._bin,a={};a.format=o.readUshort(n,i),i+=2;var s=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,a.map=[];for(var c=0;c<s-6;c++)a.map.push(n[i+c]);return a},e.cmap.parse4=function(n,i){var o=e._bin,a=i,s={};s.format=o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;var f=u/2;s.searchRange=o.readUshort(n,i),i+=2,s.entrySelector=o.readUshort(n,i),i+=2,s.rangeShift=o.readUshort(n,i),i+=2,s.endCount=o.readUshorts(n,i,f),i+=2*f,i+=2,s.startCount=o.readUshorts(n,i,f),i+=2*f,s.idDelta=[];for(var h=0;h<f;h++)s.idDelta.push(o.readShort(n,i)),i+=2;for(s.idRangeOffset=o.readUshorts(n,i,f),i+=2*f,s.glyphIdArray=[];i<a+c;)s.glyphIdArray.push(o.readUshort(n,i)),i+=2;return s},e.cmap.parse6=function(n,i){var o=e._bin,a={};a.format=o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,a.firstCode=o.readUshort(n,i),i+=2;var s=o.readUshort(n,i);i+=2,a.glyphIdArray=[];for(var c=0;c<s;c++)a.glyphIdArray.push(o.readUshort(n,i)),i+=2;return a},e.cmap.parse12=function(n,i){var o=e._bin,a={};a.format=o.readUshort(n,i),i+=2,i+=2,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4;var s=o.readUint(n,i);i+=4,a.groups=[];for(var c=0;c<s;c++){var u=i+12*c,f=o.readUint(n,u+0),h=o.readUint(n,u+4),d=o.readUint(n,u+8);a.groups.push([f,h,d])}return a},e.glyf={},e.glyf.parse=function(n,i,o,a){for(var s=[],c=0;c<a.maxp.numGlyphs;c++)s.push(null);return s},e.glyf._parseGlyf=function(n,i){var o=e._bin,a=n._data,s=e._tabOffset(a,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=o.readShort(a,s),s+=2,c.xMin=o.readShort(a,s),s+=2,c.yMin=o.readShort(a,s),s+=2,c.xMax=o.readShort(a,s),s+=2,c.yMax=o.readShort(a,s),s+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(a,s)),s+=2;var f=o.readUshort(a,s);if(s+=2,a.length-s<f)return null;c.instructions=o.readBytes(a,s,f),s+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=a[s];if(s++,c.flags.push(d),(8&d)!=0){var g=a[s];s++;for(var m=0;m<g;m++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var p=(2&c.flags[u])!=0,_=(16&c.flags[u])!=0;p?(c.xs.push(_?a[s]:-a[s]),s++):_?c.xs.push(0):(c.xs.push(o.readShort(a,s)),s+=2)}for(c.ys=[],u=0;u<h;u++)p=(4&c.flags[u])!=0,_=(32&c.flags[u])!=0,p?(c.ys.push(_?a[s]:-a[s]),s++):_?c.ys.push(0):(c.ys.push(o.readShort(a,s)),s+=2);var M=0,b=0;for(u=0;u<h;u++)M+=c.xs[u],b+=c.ys[u],c.xs[u]=M,c.ys[u]=b}else{var y;c.parts=[];do{y=o.readUshort(a,s),s+=2;var x={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(x),x.glyphIndex=o.readUshort(a,s),s+=2,1&y){var C=o.readShort(a,s);s+=2;var P=o.readShort(a,s);s+=2}else C=o.readInt8(a,s),s++,P=o.readInt8(a,s),s++;2&y?(x.m.tx=C,x.m.ty=P):(x.p1=C,x.p2=P),8&y?(x.m.a=x.m.d=o.readF2dot14(a,s),s+=2):64&y?(x.m.a=o.readF2dot14(a,s),s+=2,x.m.d=o.readF2dot14(a,s),s+=2):128&y&&(x.m.a=o.readF2dot14(a,s),s+=2,x.m.b=o.readF2dot14(a,s),s+=2,x.m.c=o.readF2dot14(a,s),s+=2,x.m.d=o.readF2dot14(a,s),s+=2)}while(32&y);if(256&y){var v=o.readUshort(a,s);for(s+=2,c.instr=[],u=0;u<v;u++)c.instr.push(a[s]),s++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,o,a){var s=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,s+c)}},e.GPOS={},e.GPOS.parse=function(n,i,o,a){return e._lctf.parse(n,i,o,a,e.GPOS.subt)},e.GPOS.subt=function(n,i,o,a){var s=e._bin,c=o,u={};if(u.fmt=s.readUshort(n,o),o+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var f=s.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,f+c)}if(i==1&&u.fmt==1){var h=s.readUshort(n,o);o+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,o,h))}else if(i==2&&u.fmt>=1&&u.fmt<=2){h=s.readUshort(n,o),o+=2;var d=s.readUshort(n,o);o+=2;var g=e._lctf.numOfOnes(h),m=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=s.readUshort(n,o);o+=2;for(var _=0;_<p;_++){var M=c+s.readUshort(n,o);o+=2;var b=s.readUshort(n,M);M+=2;for(var y=[],x=0;x<b;x++){var C=s.readUshort(n,M);M+=2,h!=0&&(F=e.GPOS.readValueRecord(n,M,h),M+=2*g),d!=0&&(I=e.GPOS.readValueRecord(n,M,d),M+=2*m),y.push({gid2:C,val1:F,val2:I})}u.pairsets.push(y)}}if(u.fmt==2){var P=s.readUshort(n,o);o+=2;var v=s.readUshort(n,o);o+=2;var E=s.readUshort(n,o);o+=2;var U=s.readUshort(n,o);for(o+=2,u.classDef1=e._lctf.readClassDef(n,c+P),u.classDef2=e._lctf.readClassDef(n,c+v),u.matrix=[],_=0;_<E;_++){var K=[];for(x=0;x<U;x++){var F=null,I=null;h!=0&&(F=e.GPOS.readValueRecord(n,o,h),o+=2*g),d!=0&&(I=e.GPOS.readValueRecord(n,o,d),o+=2*m),K.push({val1:F,val2:I})}u.matrix.push(K)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,s.readUshort(n,o)+c),u.baseCoverage=e._lctf.readCoverage(n,s.readUshort(n,o+2)+c),u.markClassCount=s.readUshort(n,o+4),u.markArray=e.GPOS.readMarkArray(n,s.readUshort(n,o+6)+c),u.baseArray=e.GPOS.readBaseArray(n,s.readUshort(n,o+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,s.readUshort(n,o)+c),u.mark2Coverage=e._lctf.readCoverage(n,s.readUshort(n,o+2)+c),u.markClassCount=s.readUshort(n,o+4),u.mark1Array=e.GPOS.readMarkArray(n,s.readUshort(n,o+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,s.readUshort(n,o+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var D=s.readUshort(n,o);o+=2;var W=s.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=D;else if(a.ltype!=D)throw"invalid extension substitution";return e.GPOS.subt(n,a.ltype,c+W)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,o){var a=e._bin,s=[];return s.push(1&o?a.readShort(n,i):0),i+=1&o?2:0,s.push(2&o?a.readShort(n,i):0),i+=2&o?2:0,s.push(4&o?a.readShort(n,i):0),i+=4&o?2:0,s.push(8&o?a.readShort(n,i):0),i+=8&o?2:0,s},e.GPOS.readBaseArray=function(n,i,o){var a=e._bin,s=[],c=i,u=a.readUshort(n,i);i+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<o;d++)h.push(e.GPOS.readAnchorRecord(n,c+a.readUshort(n,i))),i+=2;s.push(h)}return s},e.GPOS.readMarkArray=function(n,i){var o=e._bin,a=[],s=i,c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(n,o.readUshort(n,i+2)+s);f.markClass=o.readUshort(n,i),a.push(f),i+=4}return a},e.GPOS.readAnchorRecord=function(n,i){var o=e._bin,a={};return a.fmt=o.readUshort(n,i),a.x=o.readShort(n,i+2),a.y=o.readShort(n,i+4),a},e.GSUB={},e.GSUB.parse=function(n,i,o,a){return e._lctf.parse(n,i,o,a,e.GSUB.subt)},e.GSUB.subt=function(n,i,o,a){var s=e._bin,c=o,u={};if(u.fmt=s.readUshort(n,o),o+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var f=s.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,c+f)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=s.readShort(n,o),o+=2;else if(u.fmt==2){var h=s.readUshort(n,o);o+=2,u.newg=s.readUshorts(n,o,h),o+=2*u.newg.length}}else if(i==2&&u.fmt==1){h=s.readUshort(n,o),o+=2,u.seqs=[];for(var d=0;d<h;d++){var g=s.readUshort(n,o)+c;o+=2;var m=s.readUshort(n,g);u.seqs.push(s.readUshorts(n,g+2,m))}}else if(i==4)for(u.vals=[],h=s.readUshort(n,o),o+=2,d=0;d<h;d++){var p=s.readUshort(n,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(i==5&&u.fmt==2){if(u.fmt==2){var _=s.readUshort(n,o);o+=2,u.cDef=e._lctf.readClassDef(n,c+_),u.scset=[];var M=s.readUshort(n,o);for(o+=2,d=0;d<M;d++){var b=s.readUshort(n,o);o+=2,u.scset.push(b==0?null:e.GSUB.readSubClassSet(n,c+b))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=s.readUshort(n,o),o+=2;for(var y=[],x=0;x<h;x++)y.push(e._lctf.readCoverage(n,c+s.readUshort(n,o+2*x)));o+=2*h,d==0&&(u.backCvg=y),d==1&&(u.inptCvg=y),d==2&&(u.ahedCvg=y)}h=s.readUshort(n,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,o,h)}}else{if(i==7&&u.fmt==1){var C=s.readUshort(n,o);o+=2;var P=s.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=C;else if(a.ltype!=C)throw"invalid extension substitution";return e.GSUB.subt(n,a.ltype,c+P)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var o=e._bin.readUshort,a=i,s=[],c=o(n,i);i+=2;for(var u=0;u<c;u++){var f=o(n,i);i+=2,s.push(e.GSUB.readSubClassRule(n,a+f))}return s},e.GSUB.readSubClassRule=function(n,i){var o=e._bin.readUshort,a={},s=o(n,i),c=o(n,i+=2);i+=2,a.input=[];for(var u=0;u<s-1;u++)a.input.push(o(n,i)),i+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),a},e.GSUB.readSubstLookupRecords=function(n,i,o){for(var a=e._bin.readUshort,s=[],c=0;c<o;c++)s.push(a(n,i),a(n,i+2)),i+=4;return s},e.GSUB.readChainSubClassSet=function(n,i){var o=e._bin,a=i,s=[],c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2,s.push(e.GSUB.readChainSubClassRule(n,a+f))}return s},e.GSUB.readChainSubClassRule=function(n,i){for(var o=e._bin,a={},s=["backtrack","input","lookahead"],c=0;c<s.length;c++){var u=o.readUshort(n,i);i+=2,c==1&&u--,a[s[c]]=o.readUshorts(n,i,u),i+=2*a[s[c]].length}return u=o.readUshort(n,i),i+=2,a.subst=o.readUshorts(n,i,2*u),i+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(n,i){var o=e._bin,a=i,s=[],c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2,s.push(e.GSUB.readLigature(n,a+f))}return s},e.GSUB.readLigature=function(n,i){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(n,i),i+=2;var s=o.readUshort(n,i);i+=2;for(var c=0;c<s-1;c++)a.chain.push(o.readUshort(n,i)),i+=2;return a},e.head={},e.head.parse=function(n,i,o){var a=e._bin,s={};return a.readFixed(n,i),i+=4,s.fontRevision=a.readFixed(n,i),i+=4,a.readUint(n,i),i+=4,a.readUint(n,i),i+=4,s.flags=a.readUshort(n,i),i+=2,s.unitsPerEm=a.readUshort(n,i),i+=2,s.created=a.readUint64(n,i),i+=8,s.modified=a.readUint64(n,i),i+=8,s.xMin=a.readShort(n,i),i+=2,s.yMin=a.readShort(n,i),i+=2,s.xMax=a.readShort(n,i),i+=2,s.yMax=a.readShort(n,i),i+=2,s.macStyle=a.readUshort(n,i),i+=2,s.lowestRecPPEM=a.readUshort(n,i),i+=2,s.fontDirectionHint=a.readShort(n,i),i+=2,s.indexToLocFormat=a.readShort(n,i),i+=2,s.glyphDataFormat=a.readShort(n,i),i+=2,s},e.hhea={},e.hhea.parse=function(n,i,o){var a=e._bin,s={};return a.readFixed(n,i),i+=4,s.ascender=a.readShort(n,i),i+=2,s.descender=a.readShort(n,i),i+=2,s.lineGap=a.readShort(n,i),i+=2,s.advanceWidthMax=a.readUshort(n,i),i+=2,s.minLeftSideBearing=a.readShort(n,i),i+=2,s.minRightSideBearing=a.readShort(n,i),i+=2,s.xMaxExtent=a.readShort(n,i),i+=2,s.caretSlopeRise=a.readShort(n,i),i+=2,s.caretSlopeRun=a.readShort(n,i),i+=2,s.caretOffset=a.readShort(n,i),i+=2,i+=8,s.metricDataFormat=a.readShort(n,i),i+=2,s.numberOfHMetrics=a.readUshort(n,i),i+=2,s},e.hmtx={},e.hmtx.parse=function(n,i,o,a){for(var s=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<a.maxp.numGlyphs;h++)h<a.hhea.numberOfHMetrics&&(u=s.readUshort(n,i),i+=2,f=s.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(n,i,o,a){var s=e._bin,c=s.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,o,a);var u=s.readUshort(n,i);i+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){i+=2,o=s.readUshort(n,i),i+=2;var d=s.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,f)}return f},e.kern.parseV1=function(n,i,o,a){var s=e._bin;s.readFixed(n,i),i+=4;var c=s.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){s.readUint(n,i),i+=4;var h=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,o){var a=e._bin,s=-1,c=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var f=a.readUshort(n,i);i+=2;var h=a.readUshort(n,i);i+=2;var d=a.readShort(n,i);i+=2,f!=s&&(o.glyph1.push(f),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(h),g.vals.push(d),s=f}return i},e.loca={},e.loca.parse=function(n,i,o,a){var s=e._bin,c=[],u=a.head.indexToLocFormat,f=a.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(s.readUshort(n,i+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(s.readUint(n,i+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,o){var a=e._bin,s={},c=a.readUint(n,i);return i+=4,s.numGlyphs=a.readUshort(n,i),i+=2,c==65536&&(s.maxPoints=a.readUshort(n,i),i+=2,s.maxContours=a.readUshort(n,i),i+=2,s.maxCompositePoints=a.readUshort(n,i),i+=2,s.maxCompositeContours=a.readUshort(n,i),i+=2,s.maxZones=a.readUshort(n,i),i+=2,s.maxTwilightPoints=a.readUshort(n,i),i+=2,s.maxStorage=a.readUshort(n,i),i+=2,s.maxFunctionDefs=a.readUshort(n,i),i+=2,s.maxInstructionDefs=a.readUshort(n,i),i+=2,s.maxStackElements=a.readUshort(n,i),i+=2,s.maxSizeOfInstructions=a.readUshort(n,i),i+=2,s.maxComponentElements=a.readUshort(n,i),i+=2,s.maxComponentDepth=a.readUshort(n,i),i+=2),s},e.name={},e.name.parse=function(n,i,o){var a=e._bin,s={};a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2,a.readUshort(n,i);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=i+=2,d=0;d<c;d++){var g=a.readUshort(n,i);i+=2;var m=a.readUshort(n,i);i+=2;var p=a.readUshort(n,i);i+=2;var _=a.readUshort(n,i);i+=2;var M=a.readUshort(n,i);i+=2;var b=a.readUshort(n,i);i+=2;var y,x=f[_],C=h+12*c+b;if(g==0)y=a.readUnicode(n,C,M/2);else if(g==3&&m==0)y=a.readUnicode(n,C,M/2);else if(m==0)y=a.readASCII(n,C,M);else if(m==1)y=a.readUnicode(n,C,M/2);else if(m==3)y=a.readUnicode(n,C,M/2);else{if(g!=1)throw"unknown encoding "+m+", platformID: "+g;y=a.readASCII(n,C,M),console.debug("reading unknown MAC encoding "+m+" as ASCII")}var P="p"+g+","+p.toString(16);s[P]==null&&(s[P]={}),s[P][x!==void 0?x:_]=y,s[P]._lang=p}for(var v in s)if(s[v].postScriptName!=null&&s[v]._lang==1033)return s[v];for(var v in s)if(s[v].postScriptName!=null&&s[v]._lang==0)return s[v];for(var v in s)if(s[v].postScriptName!=null&&s[v]._lang==3084)return s[v];for(var v in s)if(s[v].postScriptName!=null)return s[v];for(var v in s){u=v;break}return console.debug("returning name table with languageID "+s[u]._lang),s[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,o){var a=e._bin.readUshort(n,i);i+=2;var s={};if(a==0)e["OS/2"].version0(n,i,s);else if(a==1)e["OS/2"].version1(n,i,s);else if(a==2||a==3||a==4)e["OS/2"].version2(n,i,s);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(n,i,s)}return s},e["OS/2"].version0=function(n,i,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(n,i),i+=2,o.usWeightClass=a.readUshort(n,i),i+=2,o.usWidthClass=a.readUshort(n,i),i+=2,o.fsType=a.readUshort(n,i),i+=2,o.ySubscriptXSize=a.readShort(n,i),i+=2,o.ySubscriptYSize=a.readShort(n,i),i+=2,o.ySubscriptXOffset=a.readShort(n,i),i+=2,o.ySubscriptYOffset=a.readShort(n,i),i+=2,o.ySuperscriptXSize=a.readShort(n,i),i+=2,o.ySuperscriptYSize=a.readShort(n,i),i+=2,o.ySuperscriptXOffset=a.readShort(n,i),i+=2,o.ySuperscriptYOffset=a.readShort(n,i),i+=2,o.yStrikeoutSize=a.readShort(n,i),i+=2,o.yStrikeoutPosition=a.readShort(n,i),i+=2,o.sFamilyClass=a.readShort(n,i),i+=2,o.panose=a.readBytes(n,i,10),i+=10,o.ulUnicodeRange1=a.readUint(n,i),i+=4,o.ulUnicodeRange2=a.readUint(n,i),i+=4,o.ulUnicodeRange3=a.readUint(n,i),i+=4,o.ulUnicodeRange4=a.readUint(n,i),i+=4,o.achVendID=[a.readInt8(n,i),a.readInt8(n,i+1),a.readInt8(n,i+2),a.readInt8(n,i+3)],i+=4,o.fsSelection=a.readUshort(n,i),i+=2,o.usFirstCharIndex=a.readUshort(n,i),i+=2,o.usLastCharIndex=a.readUshort(n,i),i+=2,o.sTypoAscender=a.readShort(n,i),i+=2,o.sTypoDescender=a.readShort(n,i),i+=2,o.sTypoLineGap=a.readShort(n,i),i+=2,o.usWinAscent=a.readUshort(n,i),i+=2,o.usWinDescent=a.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,o){var a=e._bin;return i=e["OS/2"].version0(n,i,o),o.ulCodePageRange1=a.readUint(n,i),i+=4,o.ulCodePageRange2=a.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,o){var a=e._bin;return i=e["OS/2"].version1(n,i,o),o.sxHeight=a.readShort(n,i),i+=2,o.sCapHeight=a.readShort(n,i),i+=2,o.usDefault=a.readUshort(n,i),i+=2,o.usBreak=a.readUshort(n,i),i+=2,o.usMaxContext=a.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,o){var a=e._bin;return i=e["OS/2"].version2(n,i,o),o.usLowerOpticalPointSize=a.readUshort(n,i),i+=2,o.usUpperOpticalPointSize=a.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,o){var a=e._bin,s={};return s.version=a.readFixed(n,i),i+=4,s.italicAngle=a.readFixed(n,i),i+=4,s.underlinePosition=a.readShort(n,i),i+=2,s.underlineThickness=a.readShort(n,i),i+=2,s},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var o=n.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var s=o.tables[a];if(s.format==0)return i>=s.map.length?0:s.map[i];if(s.format==4){for(var c=-1,u=0;u<s.endCount.length;u++)if(i<=s.endCount[u]){c=u;break}return c==-1||s.startCount[c]>i?0:65535&(s.idRangeOffset[c]!=0?s.glyphIdArray[i-s.startCount[c]+(s.idRangeOffset[c]>>1)-(s.idRangeOffset.length-c)]:i+s.idDelta[c])}if(s.format==12){if(i>s.groups[s.groups.length-1][1])return 0;for(u=0;u<s.groups.length;u++){var f=s.groups[u];if(f[0]<=i&&i<=f[1])return f[2]+(i-f[0])}return 0}throw"unknown cmap table format "+s.format},e.U.glyphToPath=function(n,i){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var a=n.SVG.entries[i];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),n.SVG.entries[i]=a),a)}if(n.CFF){var s={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=i;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],s,c,u,o)}else n.glyf&&e.U._drawGlyf(i,n,o);return o},e.U._drawGlyf=function(n,i,o){var a=i.glyf[n];a==null&&(a=i.glyf[n]=e.glyf._parseGlyf(i,n)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,i,o))},e.U._simpleGlyph=function(n,i){for(var o=0;o<n.noc;o++){for(var a=o==0?0:n.endPts[o-1]+1,s=n.endPts[o],c=a;c<=s;c++){var u=c==a?s:c-1,f=c==s?a:c+1,h=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[f],m=n.xs[c],p=n.ys[c];if(c==a)if(h){if(!d){e.U.P.moveTo(i,m,p);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+m)/2,(n.ys[u]+p)/2);h?d&&e.U.P.lineTo(i,m,p):g?e.U.P.qcurveTo(i,m,p,n.xs[f],n.ys[f]):e.U.P.qcurveTo(i,m,p,(m+n.xs[f])/2,(p+n.ys[f])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,o){for(var a=0;a<n.parts.length;a++){var s={cmds:[],crds:[]},c=n.parts[a];e.U._drawGlyf(c.glyphIndex,i,s);for(var u=c.m,f=0;f<s.crds.length;f+=2){var h=s.crds[f],d=s.crds[f+1];o.crds.push(h*u.a+d*u.b+u.tx),o.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<s.cmds.length;f++)o.cmds.push(s.cmds[f])}},e.U._getGlyphClass=function(n,i){var o=e._lctf.getInterval(i,n);return o==-1?0:i[o+2]},e.U._applySubs=function(n,i,o,a){for(var s=n.length-i-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,f=o.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,n[i]))!=-1){if(o.ltype==1)n[i],f.fmt==1?n[i]=n[i]+f.delta:n[i]=f.newg[u];else if(o.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var g=h[d],m=g.chain.length;if(!(m>s)){for(var p=!0,_=0,M=0;M<m;M++){for(;n[i+_+(1+M)]==-1;)_++;g.chain[M]!=n[i+_+(1+M)]&&(p=!1)}if(p){for(n[i]=g.nglyph,M=0;M<m+_;M++)n[i+M+1]=-1;break}}}else if(o.ltype==5&&f.fmt==2)for(var b=e._lctf.getInterval(f.cDef,n[i]),y=f.cDef[b+2],x=f.scset[y],C=0;C<x.length;C++){var P=x[C],v=P.input;if(!(v.length>s)){for(p=!0,M=0;M<v.length;M++){var E=e._lctf.getInterval(f.cDef,n[i+1+M]);if(b==-1&&f.cDef[E+2]!=v[M]){p=!1;break}}if(p){var U=P.substLookupRecords;for(d=0;d<U.length;d+=2)U[d],U[d+1]}}}else if(o.ltype==6&&f.fmt==3){if(!e.U._glsCovered(n,f.backCvg,i-f.backCvg.length)||!e.U._glsCovered(n,f.inptCvg,i)||!e.U._glsCovered(n,f.ahedCvg,i+f.inptCvg.length))continue;var K=f.lookupRec;for(C=0;C<K.length;C+=2){b=K[C];var F=a[K[C+1]];e.U._applySubs(n,i+b,F,a)}}}}},e.U._glsCovered=function(n,i,o){for(var a=0;a<i.length;a++)if(e._lctf.coverageIndex(i[a],n[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,o){for(var a={cmds:[],crds:[]},s=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var f=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,h=e.U.glyphToPath(n,u),d=0;d<h.crds.length;d+=2)a.crds.push(h.crds[d]+s),a.crds.push(h.crds[d+1]);for(o&&a.cmds.push(o),d=0;d<h.cmds.length;d++)a.cmds.push(h.cmds[d]);o&&a.cmds.push("X"),s+=n.hmtx.aWidth[u],c<i.length-1&&(s+=e.U.getPairAdjustment(n,u,f))}}return a},e.U.P={},e.U.P.moveTo=function(n,i,o){n.cmds.push("M"),n.crds.push(i,o)},e.U.P.lineTo=function(n,i,o){n.cmds.push("L"),n.crds.push(i,o)},e.U.P.curveTo=function(n,i,o,a,s,c,u){n.cmds.push("C"),n.crds.push(i,o,a,s,c,u)},e.U.P.qcurveTo=function(n,i,o,a,s){n.cmds.push("Q"),n.crds.push(i,o,a,s)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,o,a,s){for(var c=i.stack,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open,g=0,m=i.x,p=i.y,_=0,M=0,b=0,y=0,x=0,C=0,P=0,v=0,E=0,U=0,K={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,K);var F=K.val;if(g+=K.size,F=="o1"||F=="o18")c.length%2!=0&&!f&&(h=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(F=="o3"||F=="o23")c.length%2!=0&&!f&&(h=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(F=="o4")c.length>1&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),d&&e.U.P.closePath(s),p+=c.pop(),e.U.P.moveTo(s,m,p),d=!0;else if(F=="o5")for(;c.length>0;)m+=c.shift(),p+=c.shift(),e.U.P.lineTo(s,m,p);else if(F=="o6"||F=="o7")for(var I=c.length,D=F=="o6",W=0;W<I;W++){var H=c.shift();D?m+=H:p+=H,D=!D,e.U.P.lineTo(s,m,p)}else if(F=="o8"||F=="o24"){I=c.length;for(var te=0;te+6<=I;)_=m+c.shift(),M=p+c.shift(),b=_+c.shift(),y=M+c.shift(),m=b+c.shift(),p=y+c.shift(),e.U.P.curveTo(s,_,M,b,y,m,p),te+=6;F=="o24"&&(m+=c.shift(),p+=c.shift(),e.U.P.lineTo(s,m,p))}else{if(F=="o11")break;if(F=="o1234"||F=="o1235"||F=="o1236"||F=="o1237")F=="o1234"&&(M=p,b=(_=m+c.shift())+c.shift(),U=y=M+c.shift(),C=y,v=p,m=(P=(x=(E=b+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(s,_,M,b,y,E,U),e.U.P.curveTo(s,x,C,P,v,m,p)),F=="o1235"&&(_=m+c.shift(),M=p+c.shift(),b=_+c.shift(),y=M+c.shift(),E=b+c.shift(),U=y+c.shift(),x=E+c.shift(),C=U+c.shift(),P=x+c.shift(),v=C+c.shift(),m=P+c.shift(),p=v+c.shift(),c.shift(),e.U.P.curveTo(s,_,M,b,y,E,U),e.U.P.curveTo(s,x,C,P,v,m,p)),F=="o1236"&&(_=m+c.shift(),M=p+c.shift(),b=_+c.shift(),U=y=M+c.shift(),C=y,P=(x=(E=b+c.shift())+c.shift())+c.shift(),v=C+c.shift(),m=P+c.shift(),e.U.P.curveTo(s,_,M,b,y,E,U),e.U.P.curveTo(s,x,C,P,v,m,p)),F=="o1237"&&(_=m+c.shift(),M=p+c.shift(),b=_+c.shift(),y=M+c.shift(),E=b+c.shift(),U=y+c.shift(),x=E+c.shift(),C=U+c.shift(),P=x+c.shift(),v=C+c.shift(),Math.abs(P-m)>Math.abs(v-p)?m=P+c.shift():p=v+c.shift(),e.U.P.curveTo(s,_,M,b,y,E,U),e.U.P.curveTo(s,x,C,P,v,m,p));else if(F=="o14"){if(c.length>0&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),c.length==4){var Z=c.shift(),Y=c.shift(),G=c.shift(),w=c.shift(),R=e.CFF.glyphBySE(o,G),O=e.CFF.glyphBySE(o,w);e.U._drawCFF(o.CharStrings[R],i,o,a,s),i.x=Z,i.y=Y,e.U._drawCFF(o.CharStrings[O],i,o,a,s)}d&&(e.U.P.closePath(s),d=!1)}else if(F=="o19"||F=="o20")c.length%2!=0&&!f&&(h=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(F=="o21")c.length>2&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),p+=c.pop(),m+=c.pop(),d&&e.U.P.closePath(s),e.U.P.moveTo(s,m,p),d=!0;else if(F=="o22")c.length>1&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),m+=c.pop(),d&&e.U.P.closePath(s),e.U.P.moveTo(s,m,p),d=!0;else if(F=="o25"){for(;c.length>6;)m+=c.shift(),p+=c.shift(),e.U.P.lineTo(s,m,p);_=m+c.shift(),M=p+c.shift(),b=_+c.shift(),y=M+c.shift(),m=b+c.shift(),p=y+c.shift(),e.U.P.curveTo(s,_,M,b,y,m,p)}else if(F=="o26")for(c.length%2&&(m+=c.shift());c.length>0;)_=m,M=p+c.shift(),m=b=_+c.shift(),p=(y=M+c.shift())+c.shift(),e.U.P.curveTo(s,_,M,b,y,m,p);else if(F=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)M=p,b=(_=m+c.shift())+c.shift(),y=M+c.shift(),m=b+c.shift(),p=y,e.U.P.curveTo(s,_,M,b,y,m,p);else if(F=="o10"||F=="o29"){var k=F=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var B=c.pop(),z=k.Subrs[B+k.Bias];i.x=m,i.y=p,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d,e.U._drawCFF(z,i,o,a,s),m=i.x,p=i.y,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open}}else if(F=="o30"||F=="o31"){var ne=c.length,Q=(te=0,F=="o31");for(te+=ne-(I=-3&ne);te<I;)Q?(M=p,b=(_=m+c.shift())+c.shift(),p=(y=M+c.shift())+c.shift(),I-te==5?(m=b+c.shift(),te++):m=b,Q=!1):(_=m,M=p+c.shift(),b=_+c.shift(),y=M+c.shift(),m=b+c.shift(),I-te==5?(p=y+c.shift(),te++):p=y,Q=!0),e.U.P.curveTo(s,_,M,b,y,m,p),te+=4}else{if((F+"").charAt(0)=="o")throw console.debug("Unknown operation: "+F,n),F;c.push(F)}}}i.x=m,i.y=p,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d};var t=e,r={Typr:t};return l.Typr=t,l.default=r,Object.defineProperty(l,"__esModule",{value:!0}),l}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function ov(){return function(l){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(F,I){for(var D=new t(31),W=0;W<31;++W)D[W]=I+=1<<F[W-1];var H=new r(D[30]);for(W=1;W<30;++W)for(var te=D[W];te<D[W+1];++te)H[te]=te-D[W]<<5|W;return[D,H]},s=a(n,2),c=s[0],u=s[1];c[28]=258,u[258]=28;for(var f=a(i,0)[0],h=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var m=function(F,I,D){for(var W=F.length,H=0,te=new t(I);H<W;++H)++te[F[H]-1];var Z,Y=new t(I);for(H=0;H<I;++H)Y[H]=Y[H-1]+te[H-1]<<1;if(D){Z=new t(1<<I);var G=15-I;for(H=0;H<W;++H)if(F[H])for(var w=H<<4|F[H],R=I-F[H],O=Y[F[H]-1]++<<R,k=O|(1<<R)-1;O<=k;++O)Z[h[O]>>>G]=w}else for(Z=new t(W),H=0;H<W;++H)F[H]&&(Z[H]=h[Y[F[H]-1]++]>>>15-F[H]);return Z},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var _=new e(32);for(d=0;d<32;++d)_[d]=5;var M=m(p,9,1),b=m(_,5,1),y=function(F){for(var I=F[0],D=1;D<F.length;++D)F[D]>I&&(I=F[D]);return I},x=function(F,I,D){var W=I/8|0;return(F[W]|F[W+1]<<8)>>(7&I)&D},C=function(F,I){var D=I/8|0;return(F[D]|F[D+1]<<8|F[D+2]<<16)>>(7&I)},P=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],v=function(F,I,D){var W=new Error(I||P[F]);if(W.code=F,Error.captureStackTrace&&Error.captureStackTrace(W,v),!D)throw W;return W},E=function(F,I,D){var W=F.length;if(!W||D&&!D.l&&W<5)return I||new e(0);var H=!I||D,te=!D||D.i;D||(D={}),I||(I=new e(3*W));var Z,Y=function(ue){var Ae=I.length;if(ue>Ae){var Re=new e(Math.max(2*Ae,ue));Re.set(I),I=Re}},G=D.f||0,w=D.p||0,R=D.b||0,O=D.l,k=D.d,B=D.m,z=D.n,ne=8*W;do{if(!O){D.f=G=x(F,w,1);var Q=x(F,w+1,3);if(w+=3,!Q){var fe=F[(Ee=((Z=w)/8|0)+(7&Z&&1)+4)-4]|F[Ee-3]<<8,le=Ee+fe;if(le>W){te&&v(0);break}H&&Y(R+fe),I.set(F.subarray(Ee,le),R),D.b=R+=fe,D.p=w=8*le;continue}if(Q==1)O=M,k=b,B=9,z=5;else if(Q==2){var de=x(F,w,31)+257,ie=x(F,w+10,15)+4,ye=de+x(F,w+5,31)+1;w+=14;for(var Pe=new e(ye),Ce=new e(19),De=0;De<ie;++De)Ce[o[De]]=x(F,w+3*De,7);w+=3*ie;var Ue=y(Ce),me=(1<<Ue)-1,be=m(Ce,Ue,1);for(De=0;De<ye;){var Ee,oe=be[x(F,w,me)];if(w+=15&oe,(Ee=oe>>>4)<16)Pe[De++]=Ee;else{var T=0,S=0;for(Ee==16?(S=3+x(F,w,3),w+=2,T=Pe[De-1]):Ee==17?(S=3+x(F,w,7),w+=3):Ee==18&&(S=11+x(F,w,127),w+=7);S--;)Pe[De++]=T}}var X=Pe.subarray(0,de),ee=Pe.subarray(de);B=y(X),z=y(ee),O=m(X,B,1),k=m(ee,z,1)}else v(1);if(w>ne){te&&v(0);break}}H&&Y(R+131072);for(var pe=(1<<B)-1,re=(1<<z)-1,_e=w;;_e=w){var L=(T=O[C(F,w)&pe])>>>4;if((w+=15&T)>ne){te&&v(0);break}if(T||v(2),L<256)I[R++]=L;else{if(L==256){_e=w,O=null;break}var V=L-254;if(L>264){var ge=n[De=L-257];V=x(F,w,(1<<ge)-1)+c[De],w+=ge}var xe=k[C(F,w)&re],he=xe>>>4;if(xe||v(3),w+=15&xe,ee=f[he],he>3&&(ge=i[he],ee+=C(F,w)&(1<<ge)-1,w+=ge),w>ne){te&&v(0);break}H&&Y(R+131072);for(var ve=R+V;R<ve;R+=4)I[R]=I[R-ee],I[R+1]=I[R+1-ee],I[R+2]=I[R+2-ee],I[R+3]=I[R+3-ee];R=ve}}D.l=O,D.p=_e,D.b=R,O&&(G=1,D.m=B,D.d=k,D.n=z)}while(!G);return R==I.length?I:function(ue,Ae,Re){(Ae==null||Ae<0)&&(Ae=0),(Re==null||Re>ue.length)&&(Re=ue.length);var Ne=new(ue instanceof t?t:ue instanceof r?r:e)(Re-Ae);return Ne.set(ue.subarray(Ae,Re)),Ne}(I,0,R)},U=new e(0),K=typeof TextDecoder<"u"&&new TextDecoder;try{K.decode(U,{stream:!0})}catch{}return l.convert_streams=function(F){var I=new DataView(F),D=0;function W(){var de=I.getUint16(D);return D+=2,de}function H(){var de=I.getUint32(D);return D+=4,de}function te(de){fe.setUint16(le,de),le+=2}function Z(de){fe.setUint32(le,de),le+=4}for(var Y={signature:H(),flavor:H(),length:H(),numTables:W(),reserved:W(),totalSfntSize:H(),majorVersion:W(),minorVersion:W(),metaOffset:H(),metaLength:H(),metaOrigLength:H(),privOffset:H(),privLength:H()},G=0;Math.pow(2,G)<=Y.numTables;)G++;G--;for(var w=16*Math.pow(2,G),R=16*Y.numTables-w,O=12,k=[],B=0;B<Y.numTables;B++)k.push({tag:H(),offset:H(),compLength:H(),origLength:H(),origChecksum:H()}),O+=16;var z,ne=new Uint8Array(12+16*k.length+k.reduce(function(de,ie){return de+ie.origLength+4},0)),Q=ne.buffer,fe=new DataView(Q),le=0;return Z(Y.flavor),te(Y.numTables),te(w),te(G),te(R),k.forEach(function(de){Z(de.tag),Z(de.origChecksum),Z(O),Z(de.origLength),de.outOffset=O,(O+=de.origLength)%4!=0&&(O+=4-O%4)}),k.forEach(function(de){var ie,ye=F.slice(de.offset,de.offset+de.compLength);if(de.compLength!=de.origLength){var Pe=new Uint8Array(de.origLength);ie=new Uint8Array(ye,2),E(ie,Pe)}else Pe=new Uint8Array(ye);ne.set(Pe,de.outOffset);var Ce=0;(O=de.outOffset+de.origLength)%4!=0&&(Ce=4-O%4),ne.set(new Uint8Array(Ce).buffer,de.outOffset+de.origLength),z=O+Ce}),Q.slice(0,z)},Object.defineProperty(l,"__esModule",{value:!0}),l}({}).convert_streams}function sv(l,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,o=4,a=8,s=16,c=32;let u;function f(P){if(!u){const v={R:i,L:n,D:o,C:s,U:c,T:a};u=new Map;for(let E in r){let U=0;r[E].split(",").forEach(K=>{let[F,I]=K.split("+");F=parseInt(F,36),I=I?parseInt(I,36):0,u.set(U+=F,v[E]);for(let D=I;D--;)u.set(++U,v[E])})}}return u.get(P)||c}const h=1,d=2,g=3,m=4,p=[null,"isol","init","fina","medi"];function _(P){const v=new Uint8Array(P.length);let E=c,U=h,K=-1;for(let F=0;F<P.length;F++){const I=P.codePointAt(F);let D=f(I)|0,W=h;D&a||(E&(n|o|s)?D&(i|o|s)?(W=g,(U===h||U===g)&&v[K]++):D&(n|c)&&(U===d||U===m)&&v[K]--:E&(i|c)&&(U===d||U===m)&&v[K]--,U=v[F]=W,E=D,K=F,I>65535&&F++)}return v}function M(P,v){const E=[];for(let K=0;K<v.length;K++){const F=v.codePointAt(K);F>65535&&K++,E.push(l.U.codeToGlyph(P,F))}const U=P.GSUB;if(U){const{lookupList:K,featureList:F}=U;let I;const D=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,W=[];F.forEach(H=>{if(D.test(H.tag))for(let te=0;te<H.tab.length;te++){if(W[H.tab[te]])continue;W[H.tab[te]]=!0;const Z=K[H.tab[te]],Y=/^(isol|init|fina|medi)$/.test(H.tag);Y&&!I&&(I=_(v));for(let G=0;G<E.length;G++)(!I||!Y||p[I[G]]===H.tag)&&l.U._applySubs(E,G,Z,K)}})}return E}function b(P,v){const E=new Int16Array(v.length*3);let U=0;for(;U<v.length;U++){const D=v[U];if(D===-1)continue;E[U*3+2]=P.hmtx.aWidth[D];const W=P.GPOS;if(W){const H=W.lookupList;for(let te=0;te<H.length;te++){const Z=H[te];for(let Y=0;Y<Z.tabs.length;Y++){const G=Z.tabs[Y];if(Z.ltype===1){if(l._lctf.coverageIndex(G.coverage,D)!==-1&&G.pos){I(G.pos,U);break}}else if(Z.ltype===2){let w=null,R=K();if(R!==-1){const O=l._lctf.coverageIndex(G.coverage,v[R]);if(O!==-1){if(G.fmt===1){const k=G.pairsets[O];for(let B=0;B<k.length;B++)k[B].gid2===D&&(w=k[B])}else if(G.fmt===2){const k=l.U._getGlyphClass(v[R],G.classDef1),B=l.U._getGlyphClass(D,G.classDef2);w=G.matrix[k][B]}if(w){w.val1&&I(w.val1,R),w.val2&&I(w.val2,U);break}}}}else if(Z.ltype===4){const w=l._lctf.coverageIndex(G.markCoverage,D);if(w!==-1){const R=K(F),O=R===-1?-1:l._lctf.coverageIndex(G.baseCoverage,v[R]);if(O!==-1){const k=G.markArray[w],B=G.baseArray[O][k.markClass];E[U*3]=B.x-k.x+E[R*3]-E[R*3+2],E[U*3+1]=B.y-k.y+E[R*3+1];break}}}else if(Z.ltype===6){const w=l._lctf.coverageIndex(G.mark1Coverage,D);if(w!==-1){const R=K();if(R!==-1){const O=v[R];if(y(P,O)===3){const k=l._lctf.coverageIndex(G.mark2Coverage,O);if(k!==-1){const B=G.mark1Array[w],z=G.mark2Array[k][B.markClass];E[U*3]=z.x-B.x+E[R*3]-E[R*3+2],E[U*3+1]=z.y-B.y+E[R*3+1];break}}}}}}}}else if(P.kern&&!P.cff){const H=K();if(H!==-1){const te=P.kern.glyph1.indexOf(v[H]);if(te!==-1){const Z=P.kern.rval[te].glyph2.indexOf(D);Z!==-1&&(E[H*3+2]+=P.kern.rval[te].vals[Z])}}}}return E;function K(D){for(let W=U-1;W>=0;W--)if(v[W]!==-1&&(!D||D(v[W])))return W;return-1}function F(D){return y(P,D)===1}function I(D,W){for(let H=0;H<3;H++)E[W*3+H]+=D[H]||0}}function y(P,v){const E=P.GDEF&&P.GDEF.glyphClassDef;return E?l.U._getGlyphClass(v,E):0}function x(...P){for(let v=0;v<P.length;v++)if(typeof P[v]=="number")return P[v]}function C(P){const v=Object.create(null),E=P["OS/2"],U=P.hhea,K=P.head.unitsPerEm,F=x(E&&E.sTypoAscender,U&&U.ascender,K),I={unitsPerEm:K,ascender:F,descender:x(E&&E.sTypoDescender,U&&U.descender,0),capHeight:x(E&&E.sCapHeight,F),xHeight:x(E&&E.sxHeight,F),lineGap:x(E&&E.sTypoLineGap,U&&U.lineGap),supportsCodePoint(D){return l.U.codeToGlyph(P,D)>0},forEachGlyph(D,W,H,te){let Z=0;const Y=1/I.unitsPerEm*W,G=M(P,D);let w=0;const R=b(P,G);return G.forEach((O,k)=>{if(O!==-1){let B=v[O];if(!B){const{cmds:z,crds:ne}=l.U.glyphToPath(P,O);let Q="",fe=0;for(let Pe=0,Ce=z.length;Pe<Ce;Pe++){const De=t[z[Pe]];Q+=z[Pe];for(let Ue=1;Ue<=De;Ue++)Q+=(Ue>1?",":"")+ne[fe++]}let le,de,ie,ye;if(ne.length){le=de=1/0,ie=ye=-1/0;for(let Pe=0,Ce=ne.length;Pe<Ce;Pe+=2){let De=ne[Pe],Ue=ne[Pe+1];De<le&&(le=De),Ue<de&&(de=Ue),De>ie&&(ie=De),Ue>ye&&(ye=Ue)}}else le=ie=de=ye=0;B=v[O]={index:O,advanceWidth:P.hmtx.aWidth[O],xMin:le,yMin:de,xMax:ie,yMax:ye,path:Q}}te.call(null,B,Z+R[k*3]*Y,R[k*3+1]*Y,w),Z+=R[k*3+2]*Y,H&&(Z+=H*W)}w+=D.codePointAt(w)>65535?2:1}),Z}};return I}return function(v){const E=new Uint8Array(v,0,4),U=l._bin.readASCII(E,0,4);if(U==="wOFF")v=e(v);else if(U==="wOF2")throw new Error("woff2 fonts not supported");return C(l.parse(v)[0])}}const lv=rr({name:"Typr Font Parser",dependencies:[av,ov,sv],init(l,e,t){const r=l(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function cv(){return function(l){var e=function(){this.buckets=new Map};e.prototype.add=function(b){var y=b>>5;this.buckets.set(y,(this.buckets.get(y)||0)|1<<(31&b))},e.prototype.has=function(b){var y=this.buckets.get(b>>5);return y!==void 0&&(y&1<<(31&b))!=0},e.prototype.serialize=function(){var b=[];return this.buckets.forEach(function(y,x){b.push((+x).toString(36)+":"+y.toString(36))}),b.join(",")},e.prototype.deserialize=function(b){var y=this;this.buckets.clear(),b.split(",").forEach(function(x){var C=x.split(":");y.buckets.set(parseInt(C[0],36),parseInt(C[1],36))})};var t=Math.pow(2,8),r=t-1,n=~r;function i(b){var y=function(C){return C&n}(b).toString(16),x=function(C){return(C&n)+t-1}(b).toString(16);return"codepoint-index/plane"+(b>>16)+"/"+y+"-"+x+".json"}function o(b,y){var x=b&r,C=y.codePointAt(x/6|0);return((C=(C||48)-48)&1<<x%6)!=0}function a(b,y){var x;(x=b,x.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(C){return C.split("-").map(function(P){return parseInt(P.trim(),16)})})).forEach(function(C){var P=C[0],v=C[1];v===void 0&&(v=P),y(P,v)})}function s(b,y){a(b,function(x,C){for(var P=x;P<=C;P++)y(P)})}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(b){var y=f.get(b);return y||(y=new e,s(b.ranges,function(x){return y.add(x)}),f.set(b,y)),y}var g,m=new Map;function p(b,y,x){return b[y]?y:b[x]?x:function(C){for(var P in C)return P}(b)}function _(b,y){var x=y;if(!b.includes(x)){x=1/0;for(var C=0;C<b.length;C++)Math.abs(b[C]-y)<Math.abs(x-y)&&(x=b[C])}return x}function M(b){return g||(g=new Set,s("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(y){g.add(y)})),g.has(b)}return l.CodePointSet=e,l.clearCache=function(){c={},u={}},l.getFontsForString=function(b,y){y===void 0&&(y={});var x,C=y.lang;C===void 0&&(C=/\p{Script=Hangul}/u.test(x=b)?"ko":/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(x)?"ja":"en");var P=y.category;P===void 0&&(P="sans-serif");var v=y.style;v===void 0&&(v="normal");var E=y.weight;E===void 0&&(E=400);var U=(y.dataUrl||h).replace(/\/$/g,""),K=new Map,F=new Uint8Array(b.length),I={},D={},W=new Array(b.length),H=new Map,te=!1;function Z(w){var R=m.get(w);return R||(R=fetch(U+"/"+w).then(function(O){if(!O.ok)throw new Error(O.statusText);return O.json().then(function(k){if(!Array.isArray(k)||k[0]!==1)throw new Error("Incorrect schema version; need 1, got "+k[0]);return k[1]})}).catch(function(O){if(U!==h)return te||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+U+'", trying default CDN. '+O.message),te=!0),U=h,m.delete(w),Z(w);throw O}),m.set(w,R)),R}for(var Y=function(w){var R=b.codePointAt(w),O=i(R);W[w]=O,c[O]||H.has(O)||H.set(O,Z(O).then(function(k){c[O]=k})),R>65535&&(w++,G=w)},G=0;G<b.length;G++)Y(G);return Promise.all(H.values()).then(function(){H.clear();for(var w=function(O){var k=b.codePointAt(O),B=null,z=c[W[O]],ne=void 0;for(var Q in z){var fe=D[Q];if(fe===void 0&&(fe=D[Q]=new RegExp(Q).test(C||"en")),fe){for(var le in ne=Q,z[Q])if(o(k,z[Q][le])){B=le;break}break}}if(!B){e:for(var de in z)if(de!==ne){for(var ie in z[de])if(o(k,z[de][ie])){B=ie;break e}}}B||(console.debug("No font coverage for U+"+k.toString(16)),B="latin"),W[O]=B,u[B]||H.has(B)||H.set(B,Z("font-meta/"+B+".json").then(function(ye){u[B]=ye})),k>65535&&(O++,R=O)},R=0;R<b.length;R++)w(R);return Promise.all(H.values())}).then(function(){for(var w,R=null,O=0;O<b.length;O++){var k=b.codePointAt(O);if(R&&(M(k)||d(R).has(k)))F[O]=F[O-1];else{R=u[W[O]];var B=I[R.id];if(!B){var z=R.typeforms,ne=p(z,P,"sans-serif"),Q=p(z[ne],v,"normal"),fe=_((w=z[ne])===null||w===void 0?void 0:w[Q],E);B=I[R.id]=U+"/font-files/"+R.id+"/"+ne+"."+Q+"."+fe+".woff"}var le=K.get(B);le==null&&(le=K.size,K.set(B,le)),F[O]=le}k>65535&&(O++,F[O]=F[O-1])}return{fontUrls:Array.from(K.keys()),chars:F}})},Object.defineProperty(l,"__esModule",{value:!0}),l}({})}function uv(l,e){const t=Object.create(null),r=Object.create(null);function n(o,a){const s=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)s(new Error(c.statusText));else if(c.status>0)try{const u=l(c.response);u.src=o,a(u)}catch(u){s(u)}},c.onerror=s,c.send()}catch(c){s(c)}}function i(o,a){let s=t[o];s?a(s):r[o]?r[o].push(a):(r[o]=[a],n(o,c=>{c.src=o,t[o]=c,r[o].forEach(u=>u(c)),delete r[o]}))}return function(o,a,{lang:s,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(o.length),g=[];o.length||M();const m=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(y=>!y.lang||y.lang.test(s)).reverse(),c.length){let P=0;(function v(E=0){for(let U=E,K=o.length;U<K;U++){const F=o.codePointAt(U);if(P===1&&g[d[U-1]].supportsCodePoint(F)||/\s/.test(o[U]))d[U]=d[U-1],P===2&&(p[p.length-1][1]=U);else for(let I=d[U],D=c.length;I<=D;I++)if(I===D){const W=P===2?p[p.length-1]:p[p.length]=[U,U];W[1]=U,P=2}else{d[U]=I;const{src:W,unicodeRange:H}=c[I];if(!H||b(F,H)){const te=t[W];if(!te){i(W,()=>{v(U)});return}if(te.supportsCodePoint(F)){let Z=m.get(te);typeof Z!="number"&&(Z=g.length,g.push(te),m.set(te,Z)),d[U]=Z,P=1;break}}}F>65535&&U+1<K&&(d[U+1]=d[U],U++,P===2&&(p[p.length-1][1]=U))}_()})()}else p.push([0,o.length-1]),_();function _(){if(p.length){const y=p.map(x=>o.substring(x[0],x[1]+1)).join(`
`);e.getFontsForString(y,{lang:s||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:x,chars:C})=>{const P=g.length;let v=0;p.forEach(U=>{for(let K=0,F=U[1]-U[0];K<=F;K++)d[U[0]+K]=C[v++]+P;v++});let E=0;x.forEach((U,K)=>{i(U,F=>{g[K+P]=F,++E===x.length&&M()})})})}else M()}function M(){a({chars:d,fonts:g})}function b(y,x){for(let C=0;C<x.length;C++){const[P,v=P]=x[C];if(P<=y&&y<=v)return!0}return!1}}}const fv=rr({name:"FontResolver",dependencies:[uv,lv,cv],init(l,e,t){return l(e,t())}});function hv(l,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:m,fonts:p,style:_,weight:M,preResolvedFonts:b,unicodeFontsURL:y},x){const C=({chars:P,fonts:v})=>{let E,U;const K=[];for(let F=0;F<P.length;F++)P[F]!==U?(U=P[F],K.push(E={start:F,end:F,fontObj:v[P[F]]})):E.end=F;x(K)};b?C(b):l(g,C,{lang:m,fonts:p,style:_,weight:M,unicodeFontsURL:y})}function a({text:g="",font:m,lang:p,sdfGlyphSize:_=64,fontSize:M=400,fontWeight:b=1,fontStyle:y="normal",letterSpacing:x=0,lineHeight:C="normal",maxWidth:P=1/0,direction:v,textAlign:E="left",textIndent:U=0,whiteSpace:K="normal",overflowWrap:F="normal",anchorX:I=0,anchorY:D=0,metricsOnly:W=!1,unicodeFontsURL:H,preResolvedFonts:te=null,includeCaretPositions:Z=!1,chunkedBoundsSize:Y=8192,colorRanges:G=null},w){const R=f(),O={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),M=+M,x=+x,P=+P,C=C||"normal",U=+U,o({text:g,lang:p,style:y,weight:b,fonts:typeof m=="string"?[{src:m}]:m,unicodeFontsURL:H,preResolvedFonts:te},k=>{O.fontLoad=f()-R;const B=isFinite(P);let z=null,ne=null,Q=null,fe=null,le=null,de=null,ie=null,ye=null,Pe=0,Ce=0,De=K!=="nowrap";const Ue=new Map,me=f();let be=U,Ee=0,oe=new h;const T=[oe];k.forEach(re=>{const{fontObj:_e}=re,{ascender:L,descender:V,unitsPerEm:ge,lineGap:xe,capHeight:he,xHeight:ve}=_e;let ue=Ue.get(_e);if(!ue){const J=M/ge,ce=C==="normal"?(L-V+xe)*J:C*M,Te=(ce-(L-V)*J)/2,Se=Math.min(ce,(L-V)*J),Le=(L+V)/2*J+Se/2;ue={index:Ue.size,src:_e.src,fontObj:_e,fontSizeMult:J,unitsPerEm:ge,ascender:L*J,descender:V*J,capHeight:he*J,xHeight:ve*J,lineHeight:ce,baseline:-Te-L*J,caretTop:Le,caretBottom:Le-Se},Ue.set(_e,ue)}const{fontSizeMult:Ae}=ue,Re=g.slice(re.start,re.end+1);let Ne,N;_e.forEachGlyph(Re,M,x,(J,ce,Te,Se)=>{ce+=Ee,Se+=re.start,Ne=ce,N=J;const Le=g.charAt(Se),Xe=J.advanceWidth*Ae,Be=oe.count;let Fe;if("isEmpty"in J||(J.isWhitespace=!!Le&&new RegExp(n).test(Le),J.canBreakAfter=!!Le&&i.test(Le),J.isEmpty=J.xMin===J.xMax||J.yMin===J.yMax||r.test(Le)),!J.isWhitespace&&!J.isEmpty&&Ce++,De&&B&&!J.isWhitespace&&ce+Xe+be>P&&Be){if(oe.glyphAt(Be-1).glyphObj.canBreakAfter)Fe=new h,be=-ce;else for(let Qe=Be;Qe--;)if(Qe===0&&F==="break-word"){Fe=new h,be=-ce;break}else if(oe.glyphAt(Qe).glyphObj.canBreakAfter){Fe=oe.splitAt(Qe+1);const Ke=Fe.glyphAt(0).x;be-=Ke;for(let it=Fe.count;it--;)Fe.glyphAt(it).x-=Ke;break}Fe&&(oe.isSoftWrapped=!0,oe=Fe,T.push(oe),Pe=P)}let Oe=oe.glyphAt(oe.count);Oe.glyphObj=J,Oe.x=ce+be,Oe.y=Te,Oe.width=Xe,Oe.charIndex=Se,Oe.fontData=ue,Le===`
`&&(oe=new h,T.push(oe),be=-(ce+Xe+x*M)+U)}),Ee=Ne+N.advanceWidth*Ae+x*M});let S=0;T.forEach(re=>{let _e=!0;for(let L=re.count;L--;){const V=re.glyphAt(L);_e&&!V.glyphObj.isWhitespace&&(re.width=V.x+V.width,re.width>Pe&&(Pe=re.width),_e=!1);let{lineHeight:ge,capHeight:xe,xHeight:he,baseline:ve}=V.fontData;ge>re.lineHeight&&(re.lineHeight=ge);const ue=ve-re.baseline;ue<0&&(re.baseline+=ue,re.cap+=ue,re.ex+=ue),re.cap=Math.max(re.cap,re.baseline+xe),re.ex=Math.max(re.ex,re.baseline+he)}re.baseline-=S,re.cap-=S,re.ex-=S,S+=re.lineHeight});let X=0,ee=0;if(I&&(typeof I=="number"?X=-I:typeof I=="string"&&(X=-Pe*(I==="left"?0:I==="center"?.5:I==="right"?1:c(I)))),D&&(typeof D=="number"?ee=-D:typeof D=="string"&&(ee=D==="top"?0:D==="top-baseline"?-T[0].baseline:D==="top-cap"?-T[0].cap:D==="top-ex"?-T[0].ex:D==="middle"?S/2:D==="bottom"?S:D==="bottom-baseline"?-T[T.length-1].baseline:c(D)*S)),!W){const re=e.getEmbeddingLevels(g,v);z=new Uint16Array(Ce),ne=new Uint8Array(Ce),Q=new Float32Array(Ce*2),fe={},ie=[1/0,1/0,-1/0,-1/0],ye=[],Z&&(de=new Float32Array(g.length*4)),G&&(le=new Uint8Array(Ce*3));let _e=0,L=-1,V=-1,ge,xe;if(T.forEach((he,ve)=>{let{count:ue,width:Ae}=he;if(ue>0){let Re=0;for(let Se=ue;Se--&&he.glyphAt(Se).glyphObj.isWhitespace;)Re++;let Ne=0,N=0;if(E==="center")Ne=(Pe-Ae)/2;else if(E==="right")Ne=Pe-Ae;else if(E==="justify"&&he.isSoftWrapped){let Se=0;for(let Le=ue-Re;Le--;)he.glyphAt(Le).glyphObj.isWhitespace&&Se++;N=(Pe-Ae)/Se}if(N||Ne){let Se=0;for(let Le=0;Le<ue;Le++){let Xe=he.glyphAt(Le);const Be=Xe.glyphObj;Xe.x+=Ne+Se,N!==0&&Be.isWhitespace&&Le<ue-Re&&(Se+=N,Xe.width+=N)}}const J=e.getReorderSegments(g,re,he.glyphAt(0).charIndex,he.glyphAt(he.count-1).charIndex);for(let Se=0;Se<J.length;Se++){const[Le,Xe]=J[Se];let Be=1/0,Fe=-1/0;for(let Oe=0;Oe<ue;Oe++)if(he.glyphAt(Oe).charIndex>=Le){let Qe=Oe,Ke=Oe;for(;Ke<ue;Ke++){let it=he.glyphAt(Ke);if(it.charIndex>Xe)break;Ke<ue-Re&&(Be=Math.min(Be,it.x),Fe=Math.max(Fe,it.x+it.width))}for(let it=Qe;it<Ke;it++){const Ot=he.glyphAt(it);Ot.x=Fe-(Ot.x+Ot.width-Be)}break}}let ce;const Te=Se=>ce=Se;for(let Se=0;Se<ue;Se++){const Le=he.glyphAt(Se);ce=Le.glyphObj;const Xe=ce.index,Be=re.levels[Le.charIndex]&1;if(Be){const Fe=e.getMirroredCharacter(g[Le.charIndex]);Fe&&Le.fontData.fontObj.forEachGlyph(Fe,0,0,Te)}if(Z){const{charIndex:Fe,fontData:Oe}=Le,Qe=Le.x+X,Ke=Le.x+Le.width+X;de[Fe*4]=Be?Ke:Qe,de[Fe*4+1]=Be?Qe:Ke,de[Fe*4+2]=he.baseline+Oe.caretBottom+ee,de[Fe*4+3]=he.baseline+Oe.caretTop+ee;const it=Fe-L;it>1&&u(de,L,it),L=Fe}if(G){const{charIndex:Fe}=Le;for(;Fe>V;)V++,G.hasOwnProperty(V)&&(xe=G[V])}if(!ce.isWhitespace&&!ce.isEmpty){const Fe=_e++,{fontSizeMult:Oe,src:Qe,index:Ke}=Le.fontData,it=fe[Qe]||(fe[Qe]={});it[Xe]||(it[Xe]={path:ce.path,pathBounds:[ce.xMin,ce.yMin,ce.xMax,ce.yMax]});const Ot=Le.x+X,on=Le.y+he.baseline+ee;Q[Fe*2]=Ot,Q[Fe*2+1]=on;const Zt=Ot+ce.xMin*Oe,A=on+ce.yMin*Oe,$=Ot+ce.xMax*Oe,ae=on+ce.yMax*Oe;Zt<ie[0]&&(ie[0]=Zt),A<ie[1]&&(ie[1]=A),$>ie[2]&&(ie[2]=$),ae>ie[3]&&(ie[3]=ae),Fe%Y===0&&(ge={start:Fe,end:Fe,rect:[1/0,1/0,-1/0,-1/0]},ye.push(ge)),ge.end++;const q=ge.rect;if(Zt<q[0]&&(q[0]=Zt),A<q[1]&&(q[1]=A),$>q[2]&&(q[2]=$),ae>q[3]&&(q[3]=ae),z[Fe]=Xe,ne[Fe]=Ke,G){const se=Fe*3;le[se]=xe>>16&255,le[se+1]=xe>>8&255,le[se+2]=xe&255}}}}}),de){const he=g.length-L;he>1&&u(de,L,he)}}const pe=[];Ue.forEach(({index:re,src:_e,unitsPerEm:L,ascender:V,descender:ge,lineHeight:xe,capHeight:he,xHeight:ve})=>{pe[re]={src:_e,unitsPerEm:L,ascender:V,descender:ge,lineHeight:xe,capHeight:he,xHeight:ve}}),O.typesetting=f()-me,w({glyphIds:z,glyphFontIndices:ne,glyphPositions:Q,glyphData:fe,fontData:pe,caretPositions:de,glyphColors:le,chunkedBounds:ye,fontSize:M,topBaseline:ee+T[0].baseline,blockBounds:[X,ee-S,X+Pe,ee],visibleBounds:ie,timings:O})})}function s(g,m){a({...g,metricsOnly:!0},p=>{const[_,M,b,y]=p.blockBounds;m({width:b-_,height:y-M})})}function c(g){let m=g.match(/^([\d.]+)%$/),p=m?parseFloat(m[1]):NaN;return isNaN(p)?0:p/100}function u(g,m,p){const _=g[m*4],M=g[m*4+1],b=g[m*4+2],y=g[m*4+3],x=(M-_)/p;for(let C=0;C<p;C++){const P=(m+C)*4;g[P]=_+x*C,g[P+1]=_+x*(C+1),g[P+2]=b,g[P+3]=y}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let m=h.flyweight;return m.data=this.data,m.index=g,m},splitAt(g){let m=new h;return m.data=this.data.splice(g*d.length),m}},h.flyweight=d.reduce((g,m,p,_)=>(Object.defineProperty(g,m,{get(){return this.data[this.index*d.length+p]},set(M){this.data[this.index*d.length+p]=M}}),g),{data:null,index:0}),{typeset:a,measure:s}}const ci=()=>(self.performance||Date).now(),ja=bu();let bc;function dv(l,e,t,r,n,i,o,a,s,c,u=!0){return u?mv(l,e,t,r,n,i,o,a,s,c).then(null,f=>(bc||(console.warn("WebGL SDF generation failed, falling back to JS",f),bc=!0),Mc(l,e,t,r,n,i,o,a,s,c))):Mc(l,e,t,r,n,i,o,a,s,c)}const Pa=[],pv=5;let vs=0;function Mu(){const l=ci();for(;Pa.length&&ci()-l<pv;)Pa.shift()();vs=Pa.length?setTimeout(Mu,0):0}const mv=(...l)=>new Promise((e,t)=>{Pa.push(()=>{const r=ci();try{ja.webgl.generateIntoCanvas(...l),e({timing:ci()-r})}catch(n){t(n)}}),vs||(vs=setTimeout(Mu,0))}),gv=4,vv=2e3,Sc={};let _v=0;function Mc(l,e,t,r,n,i,o,a,s,c){const u="TroikaTextSDFGenerator_JS_"+_v++%gv;let f=Sc[u];return f||(f=Sc[u]={workerModule:rr({name:u,workerId:u,dependencies:[bu,ci],init(h,d){const g=h().javascript.generate;return function(...m){const p=d();return{textureData:g(...m),timing:d()-p}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(l,e,t,r,n,i).then(({textureData:h,timing:d})=>{const g=ci(),m=new Uint8Array(h.length*4);for(let p=0;p<h.length;p++)m[p*4+c]=h[p];return ja.webglUtils.renderImageData(o,m,a,s,l,e,1<<3-c),d+=ci()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{Zg(u)},vv)),{timing:d}})}function xv(l){l._warm||(ja.webgl.isSupported(l),l._warm=!0)}const yv=ja.webglUtils.resizeWebGLCanvasWithoutClearing,Wi={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},bv=new Je;function ki(){return(self.performance||Date).now()}const wc=Object.create(null);function Sv(l,e){l=wv({},l);const t=ki(),{defaultFontURL:r}=Wi,n=[];if(r&&n.push({label:"default",src:Tc(r)}),l.font&&n.push({label:"user",src:Tc(l.font)}),l.font=n,l.text=""+l.text,l.sdfGlyphSize=l.sdfGlyphSize||Wi.sdfGlyphSize,l.unicodeFontsURL=l.unicodeFontsURL||Wi.unicodeFontsURL,l.colorRanges!=null){let h={};for(let d in l.colorRanges)if(l.colorRanges.hasOwnProperty(d)){let g=l.colorRanges[d];typeof g!="number"&&(g=bv.set(g).getHex()),h[d]=g}l.colorRanges=h}Object.freeze(l);const{textureWidth:i,sdfExponent:o}=Wi,{sdfGlyphSize:a}=l,s=i/a*4;let c=wc[a];if(!c){const h=document.createElement("canvas");h.width=i,h.height=a*256/s,c=wc[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:h,sdfTexture:new It(h,void 0,void 0,void 0,Dt,Dt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,Mv(c)}const{sdfTexture:u,sdfCanvas:f}=c;Ev(l).then(h=>{const{glyphIds:d,glyphFontIndices:g,fontData:m,glyphPositions:p,fontSize:_,timings:M}=h,b=[],y=new Float32Array(d.length*4);let x=0,C=0;const P=ki(),v=m.map(I=>{let D=c.glyphsByFont.get(I.src);return D||c.glyphsByFont.set(I.src,D=new Map),D});d.forEach((I,D)=>{const W=g[D],{src:H,unitsPerEm:te}=m[W];let Z=v[W].get(I);if(!Z){const{path:O,pathBounds:k}=h.glyphData[H][I],B=Math.max(k[2]-k[0],k[3]-k[1])/a*(Wi.sdfMargin*a+.5),z=c.glyphCount++,ne=[k[0]-B,k[1]-B,k[2]+B,k[3]+B];v[W].set(I,Z={path:O,atlasIndex:z,sdfViewBox:ne}),b.push(Z)}const{sdfViewBox:Y}=Z,G=p[C++],w=p[C++],R=_/te;y[x++]=G+Y[0]*R,y[x++]=w+Y[1]*R,y[x++]=G+Y[2]*R,y[x++]=w+Y[3]*R,d[D]=Z.atlasIndex}),M.quads=(M.quads||0)+(ki()-P);const E=ki();M.sdf={};const U=f.height,K=Math.ceil(c.glyphCount/s),F=Math.pow(2,Math.ceil(Math.log2(K*a)));F>U&&(console.info(`Increasing SDF texture size ${U}->${F}`),yv(f,i,F),u.dispose()),Promise.all(b.map(I=>wu(I,c,l.gpuAccelerateSDF).then(({timing:D})=>{M.sdf[I.atlasIndex]=D}))).then(()=>{b.length&&!c.contextLost&&(Tu(c),u.needsUpdate=!0),M.sdfTotal=ki()-E,M.total=ki()-t,e(Object.freeze({parameters:l,sdfTexture:u,sdfGlyphSize:a,sdfExponent:o,glyphBounds:y,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{c.contextLost||xv(f)})}function wu({path:l,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},o){if(i)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:s}=Wi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(a/r)*r,h=Math.floor(u/(a/r))*r,d=e%4;return dv(r,r,l,t,c,s,n,f,h,d,o)}function Mv(l){const e=l.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),l.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),l.contextLost=!1;const r=[];l.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(wu(i,l,!0))})}),Promise.all(r).then(()=>{Tu(l),l.sdfTexture.needsUpdate=!0})})}function wv(l,e){for(let t in e)e.hasOwnProperty(t)&&(l[t]=e[t]);return l}let wa;function Tc(l){return wa||(wa=typeof document>"u"?{}:document.createElement("a")),wa.href=l,wa.href}function Tu(l){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=l,{width:r,height:n}=e,i=l.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==r*n*4)&&(o=new Uint8Array(r*n*4),t.image={width:r,height:n,data:o},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,o)}}const Tv=rr({name:"Typesetter",dependencies:[hv,fv,Jg],init(l,e,t){return l(e,t())}}),Ev=rr({name:"Typesetter",dependencies:[Tv],init(l){return function(e){return new Promise(t=>{l.typeset(e,t)})}},getTransferables(l){const e=[];for(let t in l)l[t]&&l[t].buffer&&e.push(l[t].buffer);return e}}),Ec={};function Av(l){let e=Ec[l];if(!e){const t=new nr(1,1,l,l),r=t.clone(),n=t.attributes,i=r.attributes,o=new lt,a=n.uv.count;for(let s=0;s<a;s++)i.position.array[s*3]*=-1,i.normal.array[s*3+2]*=-1;["position","normal","uv"].forEach(s=>{o.setAttribute(s,new Ft([...n[s].array,...i[s].array],n[s].itemSize))}),o.setIndex([...t.index.array,...r.index.array.map(s=>s+a)]),o.translate(.5,.5,0),e=Ec[l]=o}return e}const Cv="aTroikaGlyphBounds",Ac="aTroikaGlyphIndex",Dv="aTroikaGlyphColor";class Lv extends Hg{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new er,this.boundingBox=new $i}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Ut?t/2:0,e===un?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Av(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){Yo(this,Cv,e,4),Yo(this,Ac,t,1),Yo(this,Dv,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:o,max:a,sin:s,cos:c}=Math,u=n/2,f=n*2,h=Math.abs(t),d=e[0]/h,g=e[2]/h,m=i((d+u)/f)!==i((g+u)/f)?-h:o(s(d)*h,s(g)*h),p=i((d-u)/f)!==i((g-u)/f)?h:a(s(d)*h,s(g)*h),_=i((d+n)/f)!==i((g+n)/f)?h*2:a(h-c(d)*h,h-c(g)*h);r.min.set(m,e[1],t<0?-_:0),r.max.set(p,e[3],t<0?0:_)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Ac).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}}function Yo(l,e,t,r){const n=l.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(l.setAttribute(e,new Bg(t,r)),delete l._maxInstanceCount,l.dispose()):n&&l.deleteAttribute(e)}const Pv=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Rv=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Uv=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Iv=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Fv(l){const e=gs(l,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new ke},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ht(0,0,0,0)},uTroikaClipRect:{value:new ht(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new ke},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Je},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Rt},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Pv,vertexTransform:Rv,fragmentDefs:Uv,fragmentColorTransform:Iv,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Su,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Es=new ws({color:16777215,side:un,transparent:!0}),Cc=8421504,Dc=new at,Ta=new j,jo=new j,Er=[],Ov=new j,qo="+x+y";function Lc(l){return Array.isArray(l)?l[0]:l}let Eu=()=>{const l=new vt(new nr(1,1),Es);return Eu=()=>l,l},Au=()=>{const l=new vt(new nr(1,1,32,1),Es);return Au=()=>l,l};const zv={type:"syncstart"},Nv={type:"synccomplete"},Cu=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],kv=Cu.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class yn extends vt{constructor(){const e=new Lv;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Cc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=qo,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(zv),Sv({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(Nv),e&&e()})))}onBeforeRender(e,t,r,n,i,o){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i),i._hadOwnSide=i.hasOwnProperty("side"),this.geometry.setSide(i._actualSide=i.side),i.side=ui}onAfterRender(e,t,r,n,i,o){i._hadOwnSide?i.side=i._actualSide:delete i.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Es.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=Fv(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Lc(this.material).getDepthMaterial()}get customDistanceMaterial(){return Lc(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:a,blockBounds:s}=n;r.uTroikaSDFTexture.value=a,r.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(s),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,f=0,h,d,g,m=0,p=0;if(t){let{outlineWidth:M,outlineOffsetX:b,outlineOffsetY:y,outlineBlur:x,outlineOpacity:C}=this;c=this._parsePercent(M)||0,u=Math.max(0,this._parsePercent(x)||0),h=C,m=this._parsePercent(b)||0,p=this._parsePercent(y)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??Cc),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;r.uTroikaDistanceOffset.value=c,r.uTroikaPositionOffset.value.set(m,p),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=f,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=h??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let _=this.clipRect;if(_&&Array.isArray(_)&&_.length===4)r.uTroikaClipRect.value.fromArray(_);else{const M=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(s[0]-M,s[1]-M,s[2]+M,s[3]+M)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const a=e.hasOwnProperty("color")?e.color:e.color=new Je;(i!==a._input||typeof i=="object")&&a.set(a._input=i)}let o=this.orientation||qo;if(o!==e._orientation){let a=r.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let s=o!==qo&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(s){let[,c,u,f,h]=s;Ta.set(0,0,0)[u]=c==="-"?1:-1,jo.set(0,0,0)[h]=f==="-"?-1:1,Dc.lookAt(Ov,Ta.cross(jo),jo),a.setFromMatrix4(Dc)}else a.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new ke){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new ke){return Ta.copy(e),this.localPositionToTextCoords(this.worldToLocal(Ta),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,o=n?Au():Eu(),a=o.geometry,{position:s,uv:c}=a.attributes;for(let u=0;u<c.count;u++){let f=i[0]+c.getX(u)*(i[2]-i[0]);const h=i[1]+c.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),s.setXYZ(u,f,h,d)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,Er.length=0,o.raycast(e,Er);for(let u=0;u<Er.length;u++)Er[u].object=this,t.push(Er[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,kv.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}Cu.forEach(l=>{const e="_private_"+l;Object.defineProperty(yn.prototype,l,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});Me.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ke(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Pt.line={uniforms:Ha.merge([Me.common,Me.fog,Me.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Bv extends ot{constructor(e){super({type:"LineMaterial",uniforms:Ha.clone(Pt.line.uniforms),vertexShader:Pt.line.vertexShader,fragmentShader:Pt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Bi=new j,Pc=new at,Rc=new at,Uc=new j,Ic=new j;class Gv{constructor(e={}){const t=this;let r,n,i,o;const a={objects:new WeakMap},s=e.element!==void 0?e.element:document.createElement("div");s.style.overflow="hidden",this.domElement=s,this.getSize=function(){return{width:r,height:n}},this.render=function(d,g){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Pc.copy(g.matrixWorldInverse),Rc.multiplyMatrices(g.projectionMatrix,Pc),c(d,d,g),h(d)},this.setSize=function(d,g){r=d,n=g,i=r/2,o=n/2,s.style.width=d+"px",s.style.height=g+"px"};function c(d,g,m){if(d.isCSS2DObject){Bi.setFromMatrixPosition(d.matrixWorld),Bi.applyMatrix4(Rc);const p=d.visible===!0&&Bi.z>=-1&&Bi.z<=1&&d.layers.test(m.layers)===!0;if(d.element.style.display=p===!0?"":"none",p===!0){d.onBeforeRender(t,g,m);const M=d.element;M.style.transform="translate(-50%,-50%) translate("+(Bi.x*i+i)+"px,"+(-Bi.y*o+o)+"px)",M.parentNode!==s&&s.appendChild(M),d.onAfterRender(t,g,m)}const _={distanceToCameraSquared:u(m,d)};a.objects.set(d,_)}for(let p=0,_=d.children.length;p<_;p++)c(d.children[p],g,m)}function u(d,g){return Uc.setFromMatrixPosition(d.matrixWorld),Ic.setFromMatrixPosition(g.matrixWorld),Uc.distanceToSquared(Ic)}function f(d){const g=[];return d.traverse(function(m){m.isCSS2DObject&&g.push(m)}),g}function h(d){const g=f(d).sort(function(p,_){if(p.renderOrder!==_.renderOrder)return _.renderOrder-p.renderOrder;const M=a.objects.get(p).distanceToCameraSquared,b=a.objects.get(_).distanceToCameraSquared;return M-b}),m=g.length;for(let p=0,_=g.length;p<_;p++)g[p].element.style.zIndex=m-p}}}function Vv(l,e=!1){const t=l[0].index!==null,r=new Set(Object.keys(l[0].attributes)),n=new Set(Object.keys(l[0].morphAttributes)),i={},o={},a=l[0].morphTargetsRelative,s=new lt;let c=0;for(let u=0;u<l.length;++u){const f=l[u];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;i[d]===void 0&&(i[d]=[]),i[d].push(f.attributes[d]),h++}if(h!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;s.addGroup(c,d,u),c+=d}}if(t){let u=0;const f=[];for(let h=0;h<l.length;++h){const d=l[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=l[h].attributes.position.count}s.setIndex(f)}for(const u in i){const f=Fc(i[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;s.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;s.morphAttributes=s.morphAttributes||{},s.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let m=0;m<o[u].length;++m)d.push(o[u][m][h]);const g=Fc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;s.morphAttributes[u].push(g)}}return s}function Fc(l){let e,t,r,n=0;for(let a=0;a<l.length;++a){const s=l[a];if(s.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=s.array.constructor),e!==s.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=s.itemSize),t!==s.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;n+=s.array.length}const i=new e(n);let o=0;for(let a=0;a<l.length;++a)i.set(l[a].array,o),o+=l[a].array.length;return new Vt(i,t,r)}const Oc={type:"change"},Zo={type:"start"},zc={type:"end"};class Du extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",oe),this._domElementKeyEvents=L},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Oc),r.update(),i=n.NONE},this.update=function(){const L=new j,V=new pi().setFromUnitVectors(e.up,new j(0,1,0)),ge=V.clone().invert(),xe=new j,he=new pi,ve=2*Math.PI;return function(){const Ae=r.object.position;L.copy(Ae).sub(r.target),L.applyQuaternion(V),a.setFromVector3(L),r.autoRotate&&i===n.NONE&&E(P()),r.enableDamping?(a.theta+=s.theta*r.dampingFactor,a.phi+=s.phi*r.dampingFactor):(a.theta+=s.theta,a.phi+=s.phi);let Re=r.minAzimuthAngle,Ne=r.maxAzimuthAngle;return isFinite(Re)&&isFinite(Ne)&&(Re<-Math.PI?Re+=ve:Re>Math.PI&&(Re-=ve),Ne<-Math.PI?Ne+=ve:Ne>Math.PI&&(Ne-=ve),Re<=Ne?a.theta=Math.max(Re,Math.min(Ne,a.theta)):a.theta=a.theta>(Re+Ne)/2?Math.max(Re,a.theta):Math.min(Ne,a.theta)),a.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(r.minDistance,Math.min(r.maxDistance,a.radius)),r.enableDamping===!0?r.target.addScaledVector(u,r.dampingFactor):r.target.add(u),L.setFromSpherical(a),L.applyQuaternion(ge),Ae.copy(r.target).add(L),r.object.lookAt(r.target),r.enableDamping===!0?(s.theta*=1-r.dampingFactor,s.phi*=1-r.dampingFactor,u.multiplyScalar(1-r.dampingFactor)):(s.set(0,0,0),u.set(0,0,0)),c=1,f||xe.distanceToSquared(r.object.position)>o||8*(1-he.dot(r.object.quaternion))>o?(r.dispatchEvent(Oc),xe.copy(r.object.position),he.copy(r.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",X),r.domElement.removeEventListener("pointerdown",Pe),r.domElement.removeEventListener("pointercancel",Ue),r.domElement.removeEventListener("wheel",Ee),r.domElement.removeEventListener("pointermove",Ce),r.domElement.removeEventListener("pointerup",De),r._domElementKeyEvents!==null&&r._domElementKeyEvents.removeEventListener("keydown",oe)};const r=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=n.NONE;const o=1e-6,a=new mc,s=new mc;let c=1;const u=new j;let f=!1;const h=new ke,d=new ke,g=new ke,m=new ke,p=new ke,_=new ke,M=new ke,b=new ke,y=new ke,x=[],C={};function P(){return 2*Math.PI/60/60*r.autoRotateSpeed}function v(){return Math.pow(.95,r.zoomSpeed)}function E(L){s.theta-=L}function U(L){s.phi-=L}const K=function(){const L=new j;return function(ge,xe){L.setFromMatrixColumn(xe,0),L.multiplyScalar(-ge),u.add(L)}}(),F=function(){const L=new j;return function(ge,xe){r.screenSpacePanning===!0?L.setFromMatrixColumn(xe,1):(L.setFromMatrixColumn(xe,0),L.crossVectors(r.object.up,L)),L.multiplyScalar(ge),u.add(L)}}(),I=function(){const L=new j;return function(ge,xe){const he=r.domElement;if(r.object.isPerspectiveCamera){const ve=r.object.position;L.copy(ve).sub(r.target);let ue=L.length();ue*=Math.tan(r.object.fov/2*Math.PI/180),K(2*ge*ue/he.clientHeight,r.object.matrix),F(2*xe*ue/he.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(K(ge*(r.object.right-r.object.left)/r.object.zoom/he.clientWidth,r.object.matrix),F(xe*(r.object.top-r.object.bottom)/r.object.zoom/he.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function D(L){r.object.isPerspectiveCamera?c/=L:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom*L)),r.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function W(L){r.object.isPerspectiveCamera?c*=L:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/L)),r.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function H(L){h.set(L.clientX,L.clientY)}function te(L){M.set(L.clientX,L.clientY)}function Z(L){m.set(L.clientX,L.clientY)}function Y(L){d.set(L.clientX,L.clientY),g.subVectors(d,h).multiplyScalar(r.rotateSpeed);const V=r.domElement;E(2*Math.PI*g.x/V.clientHeight),U(2*Math.PI*g.y/V.clientHeight),h.copy(d),r.update()}function G(L){b.set(L.clientX,L.clientY),y.subVectors(b,M),y.y>0?D(v()):y.y<0&&W(v()),M.copy(b),r.update()}function w(L){p.set(L.clientX,L.clientY),_.subVectors(p,m).multiplyScalar(r.panSpeed),I(_.x,_.y),m.copy(p),r.update()}function R(L){L.deltaY<0?W(v()):L.deltaY>0&&D(v()),r.update()}function O(L){let V=!1;switch(L.code){case r.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?U(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(0,r.keyPanSpeed),V=!0;break;case r.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?U(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(0,-r.keyPanSpeed),V=!0;break;case r.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?E(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(r.keyPanSpeed,0),V=!0;break;case r.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?E(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(-r.keyPanSpeed,0),V=!0;break}V&&(L.preventDefault(),r.update())}function k(){if(x.length===1)h.set(x[0].pageX,x[0].pageY);else{const L=.5*(x[0].pageX+x[1].pageX),V=.5*(x[0].pageY+x[1].pageY);h.set(L,V)}}function B(){if(x.length===1)m.set(x[0].pageX,x[0].pageY);else{const L=.5*(x[0].pageX+x[1].pageX),V=.5*(x[0].pageY+x[1].pageY);m.set(L,V)}}function z(){const L=x[0].pageX-x[1].pageX,V=x[0].pageY-x[1].pageY,ge=Math.sqrt(L*L+V*V);M.set(0,ge)}function ne(){r.enableZoom&&z(),r.enablePan&&B()}function Q(){r.enableZoom&&z(),r.enableRotate&&k()}function fe(L){if(x.length==1)d.set(L.pageX,L.pageY);else{const ge=_e(L),xe=.5*(L.pageX+ge.x),he=.5*(L.pageY+ge.y);d.set(xe,he)}g.subVectors(d,h).multiplyScalar(r.rotateSpeed);const V=r.domElement;E(2*Math.PI*g.x/V.clientHeight),U(2*Math.PI*g.y/V.clientHeight),h.copy(d)}function le(L){if(x.length===1)p.set(L.pageX,L.pageY);else{const V=_e(L),ge=.5*(L.pageX+V.x),xe=.5*(L.pageY+V.y);p.set(ge,xe)}_.subVectors(p,m).multiplyScalar(r.panSpeed),I(_.x,_.y),m.copy(p)}function de(L){const V=_e(L),ge=L.pageX-V.x,xe=L.pageY-V.y,he=Math.sqrt(ge*ge+xe*xe);b.set(0,he),y.set(0,Math.pow(b.y/M.y,r.zoomSpeed)),D(y.y),M.copy(b)}function ie(L){r.enableZoom&&de(L),r.enablePan&&le(L)}function ye(L){r.enableZoom&&de(L),r.enableRotate&&fe(L)}function Pe(L){r.enabled!==!1&&(x.length===0&&(r.domElement.setPointerCapture(L.pointerId),r.domElement.addEventListener("pointermove",Ce),r.domElement.addEventListener("pointerup",De)),ee(L),L.pointerType==="touch"?T(L):me(L))}function Ce(L){r.enabled!==!1&&(L.pointerType==="touch"?S(L):be(L))}function De(L){pe(L),x.length===0&&(r.domElement.releasePointerCapture(L.pointerId),r.domElement.removeEventListener("pointermove",Ce),r.domElement.removeEventListener("pointerup",De)),r.dispatchEvent(zc),i=n.NONE}function Ue(L){pe(L)}function me(L){let V;switch(L.button){case 0:V=r.mouseButtons.LEFT;break;case 1:V=r.mouseButtons.MIDDLE;break;case 2:V=r.mouseButtons.RIGHT;break;default:V=-1}switch(V){case Mi.DOLLY:if(r.enableZoom===!1)return;te(L),i=n.DOLLY;break;case Mi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(r.enablePan===!1)return;Z(L),i=n.PAN}else{if(r.enableRotate===!1)return;H(L),i=n.ROTATE}break;case Mi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(r.enableRotate===!1)return;H(L),i=n.ROTATE}else{if(r.enablePan===!1)return;Z(L),i=n.PAN}break;default:i=n.NONE}i!==n.NONE&&r.dispatchEvent(Zo)}function be(L){switch(i){case n.ROTATE:if(r.enableRotate===!1)return;Y(L);break;case n.DOLLY:if(r.enableZoom===!1)return;G(L);break;case n.PAN:if(r.enablePan===!1)return;w(L);break}}function Ee(L){r.enabled===!1||r.enableZoom===!1||i!==n.NONE||(L.preventDefault(),r.dispatchEvent(Zo),R(L),r.dispatchEvent(zc))}function oe(L){r.enabled===!1||r.enablePan===!1||O(L)}function T(L){switch(re(L),x.length){case 1:switch(r.touches.ONE){case wi.ROTATE:if(r.enableRotate===!1)return;k(),i=n.TOUCH_ROTATE;break;case wi.PAN:if(r.enablePan===!1)return;B(),i=n.TOUCH_PAN;break;default:i=n.NONE}break;case 2:switch(r.touches.TWO){case wi.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ne(),i=n.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Q(),i=n.TOUCH_DOLLY_ROTATE;break;default:i=n.NONE}break;default:i=n.NONE}i!==n.NONE&&r.dispatchEvent(Zo)}function S(L){switch(re(L),i){case n.TOUCH_ROTATE:if(r.enableRotate===!1)return;fe(L),r.update();break;case n.TOUCH_PAN:if(r.enablePan===!1)return;le(L),r.update();break;case n.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ie(L),r.update();break;case n.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ye(L),r.update();break;default:i=n.NONE}}function X(L){r.enabled!==!1&&L.preventDefault()}function ee(L){x.push(L)}function pe(L){delete C[L.pointerId];for(let V=0;V<x.length;V++)if(x[V].pointerId==L.pointerId){x.splice(V,1);return}}function re(L){let V=C[L.pointerId];V===void 0&&(V=new ke,C[L.pointerId]=V),V.set(L.pageX,L.pageY)}function _e(L){const V=L.pointerId===x[0].pointerId?x[1]:x[0];return C[V.pointerId]}r.domElement.addEventListener("contextmenu",X),r.domElement.addEventListener("pointerdown",Pe),r.domElement.addEventListener("pointercancel",Ue),r.domElement.addEventListener("wheel",Ee,{passive:!1}),this.update()}}var Wv=`#ifdef GL_ES\r
precision mediump float;\r
#endif\r

uniform vec2 u_resolution;\r
uniform float u_time;\r
uniform vec3 light_pos;

uniform float u_height;

varying vec2 vUv;\r
varying vec3 v_normal;\r
varying vec3 v_pos;\r

mat4 projectPlaneXY(vec3 point, vec3 refPoint){

    vec3 n_plane = vec3(0.,0.,1.); 
    vec3 stat = vec3(light_pos.x, light_pos.y, 5000.);
    vec3 p_vector = point - stat;\r
    float t = -(dot(n_plane, (position + p_vector)))/dot(n_plane, p_vector);\r
    \r
    vec3 newPoint = (t*p_vector) + point  ;\r
    vec3 trans = newPoint - stat;

    mat4 transform = mat4(1.0, 0.0, 0.0, 0.0,\r
                          0.0, 1.0, 0.0, 0.0,\r
                          0.0, 0.0, 1.0, 0.0,\r
                          trans.x, trans.y, trans.z , 1.0 );\r

return transform ;\r
} \r

void main(){\r

    v_pos = position;\r
    v_normal = normal;\r
    \r
    gl_PointSize = 100.0;\r
    \r
    float offset = 0.;
    \r

   \r
    mat4 trans_mat = projectPlaneXY(position, light_pos);

    vec4 new_position = trans_mat * vec4((position), 1.0);\r
    vec4 flat_position = vec4(new_position.x, new_position.y, new_position.z , 1.0);

    \r
    gl_Position = projectionMatrix * modelViewMatrix * new_position ;\r
      \r
  }`,qa=`#ifdef GL_ES\r
precision mediump float;\r
#endif\r

uniform vec2 u_resolution;\r
uniform float u_time;\r
uniform vec3 light_pos;\r
uniform float color_val_r;\r
uniform float color_val_g;\r
uniform float color_val_b;\r
uniform float u_height;\r
uniform float cvec_x;\r
uniform float cvec_y;\r
uniform float mouse_angle;\r
uniform bool add_mouseangle;

varying vec2 vUv;\r
varying vec3 v_normal;\r
varying vec3 v_pos;\r

mat4 rotateTransform(float angle, vec3 axis){\r
    

    vec3 n = normalize(axis);\r
    float theta;\r
    if(add_mouseangle)theta = radians(angle*20.)*mouse_angle;\r
    else theta = radians(angle*40.);\r
    float c = cos(theta);\r
    float s = sin(theta);

    mat3 rot;

    rot[0] = (n.xyz *n.x*(1.0-c) + vec3( c, n.z*s, -n.y*s));\r
    rot[1] = n.xyz*n.y*(1.0-c)  + vec3(-n.z*s, c, n.x*s);\r
    rot[2] = n.xyz*n.z*(1.0-c)  + vec3(n.y*s, -n.x*s, c);

    mat4 transform = mat4(rot[0],                   0.0,\r
                          rot[1],                   0.0,\r
                          rot[2],                   0.0,\r
                          0.,    0., 0., 1.0);\r

return transform ;\r
} \r

void main(){\r

    v_pos = position;\r
    v_normal = normal;\r
    \r
    gl_PointSize = 100.0;\r
    \r
    vec3 light_pos_mouse = vec3(light_pos.x - cvec_x, light_pos.y - cvec_y, light_pos.z);\r
    vec3 axis = light_pos - position;

    

   \r
    mat4 trans_mat = rotateTransform( u_time/2., axis);

    vec4 new_position = trans_mat * vec4((position), 1.0);\r
    vec4 flat_position = vec4(new_position.x, new_position.y, new_position.z , 1.0);

    \r
    gl_Position = projectionMatrix * modelViewMatrix * flat_position ;\r
      \r
  }`,As=`#ifdef GL_ES\r
precision mediump float;\r
#endif\r

uniform float color_val_red;\r
uniform float color_val_green;\r
uniform float color_val_blue;\r

void main(){\r

    vec4 color  = vec4(color_val_red/255.0, color_val_green/255.0, color_val_blue/255.0, 1.0);\r
 \r
    gl_FragColor = color;\r
}`,Hv=`#ifdef GL_ES\r
precision mediump float;\r
#endif\r

uniform vec2 u_resolution;

varying vec3 v_pos;\r
varying vec3 v_normal;\r

void main() {

    v_pos = position;\r
    v_normal = normal;\r
    gl_PointSize = u_resolution.x/125.;\r
        \r
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r
      \r
  }`,Xv=`#ifdef GL_ES\r
precision mediump float;\r
#endif\r

uniform float color_val_r;\r
uniform float color_val_g;\r
uniform float color_val_b;\r

void main(){\r

    vec4 color  = vec4(color_val_r/255.0, color_val_g/255.0, color_val_b/255.0, 1.0);\r
 \r
    gl_FragColor = color;\r
}`,Lu=`#ifdef GL_ES\r
precision mediump float;\r
#endif\r

uniform vec2 u_resolution;\r
varying vec3 v_normal;\r
varying vec3 v_pos;\r
uniform vec3 light_pos;\r
uniform float color_val_ra;\r
uniform float color_val_ga;\r
uniform float color_val_ba;\r

vec4 drawPoints( float radius, vec4 color){\r
   

    
    
    float angle = radians(90.);\r
    float dt = dot(gl_PointCoord - .5, gl_PointCoord-.5);\r
    if (dt > radius || dt < radius/4.0) discard;\r
    return color;\r
}

			void main() {

        float rad = .2;\r
        vec4 col_check = vec4(1.,1.,1.,1.0);\r
        vec4 col_set = vec4 (color_val_ra/255.0, color_val_ga/255.0, color_val_ba/255.0, 1.0);\r
					gl_FragColor = drawPoints(rad, col_set);\r
			}`,Br=`#ifdef GL_ES\r
precision mediump float;\r
#endif\r

uniform vec2 u_resolution;\r
varying vec3 v_normal;\r
varying vec3 v_pos;\r
uniform vec3 light_pos;\r
uniform float color_val_r;\r
uniform float color_val_g;\r
uniform float color_val_b;\r

float diffuse(vec3 light_po, vec3 v_nor, vec3 v_po){

    vec3 axis = vec3(0,1,0);\r
    vec3 flipped = reflect(v_nor, axis);
    vec3 normal = normalize(flipped);\r
    vec3 light_dir = normalize(light_po - v_po);\r
    float diff = dot(light_dir, normal  );\r
    return clamp(diff, 0.3, 1.0);

}\r

vec4 circle( vec2 pos, float num_circle, float linew, vec3 col_lines){

    pos.x *= u_resolution.x/u_resolution.y;\r
    \r
    float dist = 0.0;\r
    pos = pos*2.- 1.5 ;\r
    \r
    dist = abs(length((pos) -.5));

    float diff = diffuse(light_pos, v_normal, v_pos)*2.;\r
    float lw = linew/diff;\r
    float field = fract(dist*num_circle );\r
    float triangle = abs(2.0 * field - 1.0);\r
    
    float edge = fwidth(dist)*num_circle;\r
    if(v_pos.z < 1.) lw = lw/3.;\r
    float square = smoothstep((lw/2.0 + edge), lw/2.0 - edge, triangle);\r
    vec3 col0 = col_lines;\r
    vec3 col1 = vec3(1.0);\r
    vec3 col = mix(col1, col0, square);

    vec4 color = vec4(col, 1.0);\r
    

    return color;\r
    

}

void main(){

    vec2 pos = gl_FragCoord.xy/u_resolution.xy/1.25;\r
    vec3 col_set = vec3(color_val_r/255.0, color_val_g/255.0, color_val_b/255.0);\r
    gl_FragColor = circle(pos, 60.0, .4, col_set);\r
}`,Cs=`#ifdef GL_ES\r
precision mediump float;\r
#endif\r

uniform vec2 u_resolution;\r
varying vec3 v_normal;\r
varying vec3 v_pos;\r
uniform vec3 light_pos;\r
uniform float color_val_r;\r
uniform float color_val_g;\r
uniform float color_val_b;\r
uniform float u_height_overall;\r
uniform float u_time;\r
uniform int   color_position;\r
uniform float contour_weight;

float diffuse(vec3 light_po, vec3 v_nor, vec3 v_po){

    vec3 axis = vec3(0,1,0);\r
    vec3 flipped = reflect(v_nor, axis);
    vec3 normal = normalize(flipped);\r
    vec3 light_dir = normalize(light_po - v_po);\r
    float diff = dot(light_dir, normal  );\r
    return clamp(diff, 0.3, 1.0);

}\r

vec4 drawContourY(float vert_pos, vec3 col_lines, float lineWeight, int colorPos ){

    float diff = diffuse(light_pos, v_normal, v_pos)*1.5;\r
    float lw = lineWeight/diff;\r
    float diffClamped = clamp(diff, .8, 1.1);\r
    float num_contour = 250.0;\r
    float grid_dime = (((num_contour/u_height_overall/4.0))/(1.0));
    float fractional_vpos = fract(vert_pos * grid_dime); 
    float triangle = abs(2.0 * fractional_vpos - 1.0);\r
    float derivative_vpos = abs(fwidth(2.*vert_pos - 1.))*grid_dime;
    float col = smoothstep(lw/2.0 -derivative_vpos, lw/2.0+derivative_vpos, triangle); 
    
   \r
    vec3 color0 = vec3(1.0);\r
    vec3 color1 = col_lines;\r
    vec3 colfixed;\r
    if (colorPos == 0) colfixed =  mix(color0, color1,  col);\r
    if (colorPos == 1) colfixed =  mix(color1, color0,  col);

    vec4 color = vec4(colfixed ,1.0);\r
    \r
    return color;\r
}

void main(){\r
    vec2 pos = gl_FragCoord.xy;\r
    vec3 col_set = vec3(color_val_r/255.0, color_val_g/255.0, color_val_b/255.0);\r
    vec4 f_col = drawContourY(v_pos.y, col_set, contour_weight, color_position);\r
   \r
    gl_FragColor = f_col;\r
}`,Pu=`uniform mediump float u_time;\r
uniform mediump float u_height;\r
uniform vec3 u_center;\r
uniform mediump float u_radius;\r
uniform mediump float u_step;\r
uniform mediump float u_angle;\r
varying vec3 v_pos;\r
varying vec3 v_norm;

void main() {\r
    v_pos = position;\r
    v_norm = normal;\r
    gl_PointSize = 10.0;\r
    float ang =  radians(u_time/10.0);\r
    float pX =  position.x * cos(ang) - position.y * sin(ang) ;\r
    float pY =  position.y * cos(ang) + position.x * sin(ang);\r
    float pZ =  cos(ang) * position.z - 1000.0;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pX, pY, pZ, 1.0);\r
}`,Za=`#ifdef GL_ES\r
precision mediump float;\r
#endif\r

uniform vec2 u_resolution;

uniform vec3 light_pos;\r
uniform float color_val_r;\r
uniform float color_val_g;\r
uniform float color_val_b;\r
uniform float u_height;\r
uniform float u_time;\r
uniform float grow_value;\r
uniform vec3 light_posV;\r
uniform float cvec_x;\r
uniform float cvec_y;\r
uniform float mouse_angle;\r
uniform bool add_mouseangle;

varying vec2 vUv;\r
varying vec3 v_normal;\r
varying vec3 v_pos;\r

float diffuse(vec3 light_po, vec3 v_nor, vec3 v_po){

    vec3 axis = vec3(0,1,0);\r
    vec3 flipped = reflect(v_nor, axis);
    vec3 normal = normalize(flipped);\r
    vec3 light_dir = normalize(light_po - v_po);\r
    float diff = dot(light_dir, normal  );\r
    return clamp(diff, 0.5, 1.0);\r
    

}\r

float remap(float value, float sourceMin, float sourceMax, float targetMin, float targetMax ){

    float source = sourceMax - sourceMin;\r
    float target = targetMax - targetMin;\r
    float valueLess = value - sourceMin;

    float newValue  = (target*valueLess/source) + targetMin;\r
    return newValue;\r
}

mat4 rotateTransform(float angle, vec3 axis){\r
    

    vec3 n = normalize(axis);\r
    float theta;\r
    if(add_mouseangle)theta = radians(angle*20.)*mouse_angle;\r
    else theta = radians(angle*20.);\r
    float c = cos(theta);\r
    float s = sin(theta);

    mat3 rot;

    rot[0] = (n.xyz *n.x*(1.0-c) + vec3( c, n.z*s, -n.y*s));\r
    rot[1] = n.xyz*n.y*(1.0-c)  + vec3(-n.z*s, c, n.x*s);\r
    rot[2] = n.xyz*n.z*(1.0-c)  + vec3(n.y*s, -n.x*s, c);

    mat4 transform = mat4(rot[0],                   0.0,\r
                          rot[1],                   0.0,\r
                          rot[2],                   0.0,\r
                          0.,    0., 0., 1.0);\r

return transform ;\r
} \r

mat4 obliqueTransform(float angle, float magnitude, vec3 position, float scale){

    float ang = radians(angle);\r
    \r
    float tangent = tan(ang);

    float trans = tangent * magnitude;

    float xb = position.x;\r
    float yb = position.y;\r
    float zb = position.z;

   

    mat4 transform = mat4( scale,   trans,   0.,  0.,\r
                           0.,   scale,      trans,  0.,\r
                           0.,   0.,      scale,  trans,\r
                           xb, yb,    zb,  1.);\r

   \r
return transform;\r
} \r

void main(){\r

    v_pos = position;\r
    v_normal = normal;\r
    \r
    gl_PointSize =  u_resolution.x/125.;\r
    \r
    float offset = 0.;\r
    vec3 light_pos_mouse = vec3(light_pos.x - cvec_x, light_pos.y - cvec_y, light_pos.z);\r
    vec3 axis = light_pos - position;

   \r
    mat4 trans_mat_rot = rotateTransform( u_time/2., axis);\r
    float clamped_grow = clamp(grow_value, 0.0, 360.0);\r
    float trans_value = sin(u_time)*-.4 ;

    mat4 trans_mat = obliqueTransform(30.+trans_value, 1., position, .25);

    float diff = diffuse(light_posV, v_normal,v_pos); \r
    float mapped = remap(diff, 0.5, 1.0, 1., 1.1);

    vec4 new_position = trans_mat * vec4((position), 1.0);\r
    vec4 flat_position = vec4(new_position.x + offset  ,new_position.y + offset, (new_position.z*trans_value)-1000., 1.0);

    vec4 light_morph = flat_position * trans_mat_rot * mapped;\r
    \r
    gl_Position = projectionMatrix * modelViewMatrix * light_morph;\r
      \r
  }`,Yv=`uniform mediump float u_time;\r
uniform mediump float u_height;\r
uniform vec3 u_center;\r
uniform mediump float u_radius;\r
uniform mediump float u_step;

varying vec3 v_pos;\r
varying vec3 v_normal;\r
void main() {

    \r
    v_normal = normal ;\r
    
    float ang =  radians(u_time*10.0);\r
    float pX =  position.x * cos(ang) - position.y * sin(ang);\r
    float pY =  position.y * cos(ang) + position.x * sin(ang);\r
    float pZ =  cos(ang) * position.z + position.z ;\r
    v_pos = vec3 (pX, pY, pZ);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pX, pY, pZ, 1.);\r
    \r
}`,jv=`uniform mediump float u_time;\r
uniform mediump float u_height;\r
uniform vec3 u_center;\r
uniform mediump float u_radius;\r
uniform mediump float u_step;\r
varying vec3 v_pos;\r
varying vec3 v_norm;

void main() {\r
    v_pos = position;\r
    v_norm = normal;\r
    float ang = radians(u_time);\r
    float pX =  position.z * cos(ang)  - position.x * sin(ang) + 100.0;\r
    float pY =  position.x * cos(ang) + position.z * sin(ang)+ 100.0;\r
    float pZ =  position.y;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pX, pY, pZ, 1.0);\r
    
    \r
}`;class ar{constructor(){this.rotValue=0,this.centerX=0,this.centerY=0,this.factor=0,this.hgt=0,this.pointX=0,this.pointY=0,this.pointZ=0,this.OblAngle=45,this.oblStep=0,this.pointPos=new j(this.pointX,this.pointY,this.pointZ),this.pointsXYZ=[],this.numberPoints=[],this.rotatePoints=[],this.pointCoord=[],this.r=0,this.g=0,this.b=0}getpointCoord(){return this.pointCoord}getRotatePoints(){return this.rotatePoints}getPointsXYZ(){return this.pointsXYZ}updateUniform(e){shadUniform.u_time.value+=e}getPointArray(){return this.numberPoints}getCenter(){return[this.centerX,this.centerY,this.centerZ]}setHorAngleFactor(e){this.factor=e}setMax(e){this.max=e}setProjection(e){this.Projection=e}setRadiusFactor(e){this.RadiusFactor=RadiusFactor}setPolyWeight(e){this.polyWeight=e}updatehorAngle(e){this.horAngle+=e}conicPoints(e,t,r,n,i,o){this.centerX=i[0]*t,this.centerY=i[1]*t*-t,this.centerZ=i[2]+this.centerY,this.r=o[0],this.g=o[1],this.b=o[2];let a=r*2;if(this.coneStep=t,this.Projection=="ThreeD")for(let c=1;c<n;c++){let u=Xt(e*c),f=t*c;this.pointX=(a-f)/a*r*Math.cos(u)+this.centerX,this.pointY=(a-f)/a*r*Math.sin(u)+this.centerY,this.pointZ=f+this.centerZ}if(r>this.max){var s=[this.pointX,this.pointY,this.pointZ];this.conicPoints(e*2,this.coneStep,r/2,n,s,[12,59,101]),this.conicPoints(e-this.factor,this.coneStep,r/3,n,s,[12,59,101]),this.pointPos=new j(this.pointX,this.pointY,this.pointZ),this.pointsXYZ.push(this.pointPos),this.pointCoord.push([this.pointX,this.pointY,this.pointZ]),this.numberPoints.push([this.pointX,this.pointY,this.pointZ])}}spherePoints(e,t,r,n,i,o){this.centerX=i[0],this.centerY=i[1],this.centerZ=i[2],this.r=o[0],this.g=o[1],this.b=o[2];for(let c=1;c<n;c++){let u=Xt(e*c),f=Xt(t*c);if(this.Projection=="ThreeD"&&(this.pointX=Math.cos(u)*r*Math.sin(f)+this.centerX,this.pointY=Math.sin(u)*r*Math.sin(f)+this.centerY,this.pointZ=Math.cos(f)*r+this.centerZ),this.Projection=="Oblique"){this.oblStep+=5e-4,this.OblAngle+=1;let h=Math.cos(u)*r*Math.sin(f)+this.centerX,d=Math.sin(u)*r*Math.sin(f)+this.centerY;var a=Nc([h,d,0],this.OblAngle,this.oblStep);this.pointX=a[0],this.pointY=a[1],this.pointZ=-1e3}}if(r>this.max){var s=[this.pointX,this.pointY,this.pointZ];this.spherePoints(e*2,t,r/2,n,s,[12,59,101]),this.spherePoints(e-this.factor,t,r/3,n,s,[12,59,101]),this.pointPos=new j(this.pointX,this.pointY,this.pointZ),this.pointsXYZ.push(this.pointPos),this.pointCoord.push([this.pointX,this.pointY,this.pointZ]),this.numberPoints.push([this.pointX,this.pointY,this.pointZ])}}torusPoints(e,t,r,n,i,o){this.centerX=i[0],this.centerY=i[1],this.centerZ=i[2],this.r=o[0],this.g=o[1],this.b=o[2],this.hgt=r*3;for(let s=1;s<n;s++){let c=Xt(e/10*s),u=Xt(t*s);this.Projection=="ThreeD"&&(this.pointX=(this.hgt-u)/this.hgt*r*Math.cos(c)+this.centerX,this.pointY=(this.hgt-u)/this.hgt*r*Math.sin(c)+this.centerY,this.pointZ=u)}if(r>this.max){var a=[this.pointX,this.pointY,this.pointZ];this.torusPoints(e*2,t,r/2,n,a,[12,59,101]),this.torusPoints(e-this.factor,t,r/3,n*2,a,[12,59,101]),this.pointPos=new j(this.pointX,this.pointY,this.pointZ),this.pointsXYZ.push(this.pointPos),this.pointCoord.push([this.pointX,this.pointY,this.pointZ]),this.numberPoints.push([this.pointX,this.pointY,this.pointZ])}}torusSphere(e,t,r,n,i,o){this.centerX=i[0],this.centerY=i[1],this.centerZ=i[2],this.r=o[0],this.g=o[1],this.b=o[2],this.hgt=r*3;for(let s=1;s<n;s++){let c=Xt(e/10*s),u=Xt(t*s);this.Projection=="ThreeD"&&(this.pointX=(this.hgt-u)/this.hgt*r*Math.cos(c)+this.centerX,this.pointY=(this.hgt-u)/this.hgt*r*Math.sin(c)+this.centerY,this.pointZ=u)}if(r>this.max){var a=[this.pointX,this.pointY,this.pointZ];this.torusPoints(e*2,t,r/2,n,a,[12,59,101]),this.spherePoints(e-this.factor,t,r/3,n*2,a,[12,59,101]),this.pointPos=new j(this.pointX,this.pointY,this.pointZ),this.pointsXYZ.push(this.pointPos),this.pointCoord.push([this.pointX,this.pointY,this.pointZ]),this.numberPoints.push([this.pointX,this.pointY,this.pointZ])}}conicTorus(e,t,r,n,i,o){this.centerX=i[0],this.centerY=i[1],this.centerZ=i[2],this.r=o[0],this.g=o[1],this.b=o[2],this.hgt=r*40;for(let s=1;s<n;s++){let c=Xt(e/10*s),u=Xt(t*s);this.Projection=="ThreeD"&&(this.pointX=(this.hgt-u)/this.hgt*r*Math.cos(c)+this.centerX,this.pointY=(this.hgt-u)/this.hgt*r*Math.sin(c)+this.centerY,this.pointZ=u)}if(r>this.max){var a=[this.pointX,this.pointY,this.pointZ];this.torusPoints(e*2,t,r/2,n,a,[12,59,101]),this.conicPoints(e-this.factor,t,r/3,n*2,a,[12,59,101]),this.pointPos=new j(this.pointX,this.pointY,this.pointZ),this.pointsXYZ.push(this.pointPos),this.pointCoord.push([this.pointX,this.pointY,this.pointZ]),this.numberPoints.push([this.pointX,this.pointY,this.pointZ])}}sphereCone(e,t,r,n,i,o){this.centerX=i[0],this.centerY=i[1],this.centerZ=i[2],this.r=o[0],this.g=o[1],this.b=o[2];for(let c=1;c<n;c++){let u=Xt(e*c),f=Xt(t*c);if(this.Projection=="ThreeD"&&(this.pointX=Math.cos(u)*r*Math.sin(f)+this.centerX,this.pointY=Math.sin(u)*r*Math.sin(f)+this.centerY,this.pointZ=Math.cos(f)*r+this.centerZ),this.Projection=="Oblique"){this.oblStep+=5e-4,this.OblAngle+=1;let h=Math.cos(u)*r*Math.sin(f)+this.centerX,d=Math.sin(u)*r*Math.sin(f)+this.centerY;var a=Nc([h,d,0],this.OblAngle,this.oblStep);this.pointX=a[0],this.pointY=a[1],this.pointZ=-1e3}}if(r>this.max){var s=[this.pointX,this.pointY,this.pointZ];this.conicPoints(e*2,t,r/2,n,s,[12,59,101]),this.spherePoints(e-this.factor,t,r/3,n,s,[12,59,101]),this.pointPos=new j(this.pointX,this.pointY,this.pointZ),this.pointsXYZ.push(this.pointPos),this.pointCoord.push([this.pointX,this.pointY,this.pointZ]),this.numberPoints.push([this.pointX,this.pointY,this.pointZ])}}}function Xt(l){var e=Math.PI;return l*(e/180)}function Nc(l,e,t){let r=l[0],n=l[1],i=l[2],o=Xt(e);var a=Math.cos(o)*t+r,s=Math.sin(o)*t+n,c=i;return[a,s,c]}var Ru=devicePixelRatio;if(Ru>1)var Vn=1;else var Vn=4;var qv=1,Zv=.3,Kv=!0,Jv=!1,Qv=0,$v=Hr(255,255,255),wn=window.innerHeight,Wn=window.innerHeight;console.log(wn);var e0=1,Uu=1,t0=.5,Qi;Vn>=4?Qi=15:Qi=1e3;var Ea=Uu/Qi*40,rt=Us(360/Qi/2),kc=0,n0=Qi*e0,Ar=0,Bc=0,vi=.4,Ds=9.1,Ls=2,_i=2,st=925,xi=1500,Tn=st/Ds,En=st/Ls,Or=10,Ps=10,Sn=180/Or,Mn=180/Ps,qt=20.5,Yt=Or/1.2+.75,An=st*2.7,vi;var _i,st,xi,Tn,En;var Sn,Mn,qt,Yt,An,vi;var _i,st,xi,Tn,En;var Sn,Mn,qt,Yt,An,vi=.4,Ds=2.1,Ls=2,_i=1.5,st=925,xi=900,Tn=st/Ds,En=st/Ls,Or=20,Ps=20,Sn=360/Or,Mn=360/Ps,qt=0,Yt=st/Or/1,An=st*2.7,vi;var _i,st,xi,Tn,En;var Sn,Mn,qt,Yt,An,vi;var _i,st,xi,Tn,En;var Sn,Mn,qt,Yt,An,vi;var _i,st,xi,Tn,En;var Sn,Mn,qt,Yt,An,Iu=[0,0,0],Ko=75,i0=Hr(0,0,0),_s,Ra,_s=Hr(0,0,0),Ra={r:0,g:0,b:0},Rs=Hr(255,255,255),r0=2;const et={x:0,y:0,z:0},Jn={x:-1e3,y:-1e3,z:1e3},Jo={r:0,g:0,b:0},Gc={x:0,y:0};console.log(devicePixelRatio);const Gn=new xu({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,transparent:!1});Gn.setPixelRatio(window.devicePixelRatio*Vn);Gn.setSize(Wn,wn);document.body.appendChild(Gn.domElement);Gn.antialias=!0;const or=new Gv;or.setSize(Wn,wn);or.domElement.style.position="absolute";or.domElement.style.top="0px";document.body.appendChild(or.domElement);const jt=new kg;jt.background=new Je($v);const xn=new hu(Wn*-1,Wn,wn,wn*-1,-5e3,15e4);xn.zoom=vi;const a0=new Du(xn,Gn.domElement),o0=new Du(xn,or.domElement);var s0=0;xn.position.set(.5,1,1);a0.update();o0.update();const l0=new j(0,0,0),je={add_mouseangle:{value:Kv},grow_value:{value:0},contour_weight:{value:Zv},color_position:{value:qv},dot_scale:{value:new ke(1e-6,1e-9)},u_pixelRatio:{type:"f",value:Ru},u_resolution:{value:new ke(Wn*Vn,wn*Vn)},hatch_density:{value:window.innerWidth/4e3},color_val_red:{value:255},color_val_green:{value:255},color_val_blue:{value:255},color_val_red_ground:{value:0},color_val_green_ground:{value:0},color_val_blue_ground:{value:0},color_val_r:{value:0},color_val_g:{value:0},color_val_b:{value:0},color_val_ra:{value:Ra.r},color_val_ga:{value:Ra.g},color_val_ba:{value:Ra.b},u_time:{type:"f",value:5},u_height_overall:{type:"f",value:st*_i},u_height:{type:"f",value:.2},u_center:{value:l0},u_radius:{type:"f",value:200},u_step:{type:"f",value:1},alpha_value:{type:"f",value:0},screen_scale:{type:"f",value:Qv},vec_x:{type:"f",value:0},vec_y:{type:"f",value:0},center_div:{type:"f",value:4},cvec_x:{type:"f",value:0},cvec_y:{type:"f",value:0},stop_res:{type:"f",value:Uu},mouse_angle:{type:"f",value:0},light_pos:{value:new j(Jn.x,Jn.y,Jn.z)},light_posV:{value:new j(Jn.x,Jn.y,Jn.z)}},Fu=new ot({uniforms:je,fragmentShader:As,vertexShader:Za}),c0=new ot({uniforms:je,fragmentShader:Br,vertexShader:Za}),u0=new ot({uniforms:je,fragmentShader:Cs,vertexShader:jv,transparent:!1}),f0=new ot({uniforms:je,fragmentShader:Br,vertexShader:Yv,transparent:!1}),h0=new ot({uniforms:je,fragmentShader:Br,vertexShader:qa,transparent:!1});new ot({uniforms:je,fragmentShader:As,vertexShader:Pu,transparent:!1});new ot({uniforms:je,fragmentShader:Br,vertexShader:qa,transparent:!1});const sr=new ot({uniforms:je,fragmentShader:Lu,vertexShader:Hv,transparent:!1}),xs=new ot({uniforms:je,fragmentShader:Lu,vertexShader:Za,transparent:!1});sr.blending=jc;sr.blendingEquation=ii;sr.blendSRC=Ss;sr.blendDst=void 0;sr.vertexColors=!0;const Ua=new ot({uniforms:je,fragmentShader:Cs,vertexShader:qa,transparent:!0}),Ou=new ot({uniforms:je,fragmentShader:As,vertexShader:Wv,transparent:!0}),zu=new ot({uniforms:je,fragmentShader:Br,vertexShader:qa});zu.side=Ut;new ot({uniforms:je,fragmentShader:Cs,vertexShader:Pu});new ot({uniforms:je,fragmentShader:Xv,vertexShader:Za});document.querySelector("#btn");const lr=new ar,cr=new ar,ur=new ar,Gr=new ar,Vr=new ar,Wr=new ar;lr.setProjection("ThreeD");cr.setProjection("ThreeD");ur.setProjection("ThreeD");Gr.setProjection("ThreeD");Vr.setProjection("ThreeD");Wr.setProjection("ThreeD");lr.setMax(Tn);cr.setMax(Tn);ur.setMax(Tn);Gr.setMax(En);Vr.setMax(En);Wr.setMax(En);lr.setHorAngleFactor(qt);cr.setHorAngleFactor(qt);ur.setHorAngleFactor(qt);Gr.setHorAngleFactor(qt);Vr.setHorAngleFactor(qt);Wr.setHorAngleFactor(qt);var Gi=[255,255,255];let Vi=[0,0,0];for(let l=0;l<xi;l++)lr.spherePoints(Sn,Yt,st,l,Vi,Gi,!0),cr.spherePoints(Sn,Yt,st*.6,l,Vi,Gi,!0),ur.spherePoints(Sn,Yt,st,l,Vi,Gi,!0),Gr.spherePoints(Mn,Yt,st,l,Vi,Gi,!0),Vr.spherePoints(Mn,Yt,st*.6,l,Vi,Gi,!0),Wr.spherePoints(Mn,Yt,st,l,Vi,Gi,!0);var d0=lr.getPointArray(),p0=cr.getPointArray(),m0=lr.getPointsXYZ(),Hi=cr.getPointsXYZ(),g0=ur.getPointsXYZ(),v0=Gr.getPointsXYZ(),_0=Vr.getPointsXYZ(),x0=Wr.getPointsXYZ();ur.getPointsXYZ();var Vc=[],Wc=[],Hc=[],Qo=new j(et.x,et.y,et.z),Ia=new j(0,An,0),Fa=new j(An,0,0),Oa=new j(0,0,An);const Nu=new mi({color:Rs});new mi({color:Rs});const $o=new mi({color:i0});{Vc.push(Qo,Ia),Wc.push(Qo,Fa),Hc.push(Qo,Oa);var y0=new lt().setFromPoints(Vc),b0=new lt().setFromPoints(Wc),S0=new lt().setFromPoints(Hc),M0=new At(y0,$o),w0=new At(b0,$o),T0=new At(S0,$o),es=new Ya(20,10,10),Lr=new vt(es,Ua),za=new vt(es,Ua),Na=new vt(es,Ua);jt.add(M0,w0,T0);const l=new yn,e=new yn,t=new yn;jt.add(l,e,t,Lr,za,Na)}new yn;var ku=[],Bu=[],ka=[],Ur=[],ys=[],Ba=[];for(let l=0;l<Hi.length;l++)if(l%r0==0||l==0||l==Hi.length-1){var Aa=Hi[l],ts={x:Aa.x,y:Aa.y,z:0},ns=new j(st*-2,Aa.y,ts.z),E0=new j(ts.x,Aa.y,ts.z);ku.push(ns);var A0=[ns,E0];new Bv({color:16777215,linewidth:5,vertexColors:!0,dashed:!1,alphaToCoverage:!0});const e=new lt().setFromPoints(A0);var Xc=new At(e,Nu),C0=new At(e,Fu);Bu.push(Xc,C0),ka[l]=new yn,Ur[l]=new yn,ys[l]=new yn,Ba[l]=new yn,jt.add(Ur[l],Ba[l],ys[l]),jt.add(Xc,ka[l]);var is=l.toString();l%100==0&&rs(ka[l],is,Ko/3,ns,Rs),rs(Ur[l],is,Ko/3,Hi[l],_s),rs(Ba[l],is,Ko/3,Hi[l],_s,xs)}const D0=new lt().setFromPoints(ku);var Gu=new At(D0,Nu);jt.add(Gu);var vn=fr(m0,Iu,1,!0),Qn=fr(Hi,Iu,1,!0),$n=fr(g0,[0,0,0],1,!0),ei=fr(v0,[0,0,0],1,!0),ti=fr(_0,[0,0,0],1,!0),ni=fr(x0,[0,0,0],1,!0);const xt=F0(d0,p0,!1);for(let l=0;l<Ur.length;l++)xt[0].add(Ur[l]),xt[0].add(ys[l]),xt[0].add(Ba[l]),xt[0].add(Bu[l]),xt[0].add(Gu),xt[0].add(ka[l]);for(let l=0;l<xt.length;l++)xt[l].castShadow=!0,xt[l].receiveShadow=!1,jt.add(xt[l]);for(let l=0;l<vn.length;l++)jt.add(vn[l],Qn[l],$n[l],ei[l],ti[l],ni[l]);const L0=new Ya(1e5,20,20,20),Vu=new vt(L0,zu);Vu.receiveShadow=!0;jt.add(Vu);Lr&&(Lr.position.x=Ia.x,Lr.position.y=Ia.y,Lr.position.z=Ia.z,za.position.x=Fa.x,za.position.y=Fa.y,za.position.z=Fa.z,Na.position.x=Oa.x,Na.position.y=Oa.y,Na.position.z=Oa.z);Wu();function Wu(){kc+=1;var l;{requestAnimationFrame(Wu);var l=.45/Qi}if(xn.rotation.z+=l,xn.aspect=window.innerHeight/window.innerHeight,xn.updateProjectionMatrix(),Gn.setSize(Wn,wn),console.log(window.devicePixelRatio),xt){for(let n=0;n<xt.length;n++)xt[n].rotation.x+=rt,xt[n].rotation.y+=rt,xt[n].rotation.z+=rt,xt[n].position.x=et.x,xt[n].position.y=et.y;for(let n=0;n<vn.length;n++)vn[n].rotation.x+=rt,Qn[n].rotation.x+=rt,$n[n].rotation.x+=rt,ei[n].rotation.x+=rt,ti[n].rotation.x+=rt,ni[n].rotation.x+=rt,vn[n].rotation.y+=rt,Qn[n].rotation.y+=rt,$n[n].rotation.y+=rt,ei[n].rotation.y+=rt,ti[n].rotation.y+=rt,ni[n].rotation.y+=rt,vn[n].rotation.z+=rt,Qn[n].rotation.z+=rt,$n[n].rotation.z+=rt,ei[n].rotation.z+=rt,ti[n].rotation.z+=rt,ni[n].rotation.z+=rt,vn[n].position.x=et.x,Qn[n].position.x=et.x,$n[n].position.x=et.x,ei[n].position.x=et.x,ti[n].position.x=et.x,ni[n].position.x=et.x,vn[n].position.y=et.y,Qn[n].position.y=et.y,$n[n].position.y=et.y,ei[n].position.y=et.y,ti[n].position.y=et.y,ni[n].position.y=et.y,vn[n].position.z=et.z,Qn[n].position.z=et.z,$n[n].position.z=et.z,ei[n].position.z=et.z,ti[n].position.z=et.z,ni[n].position.z=et.z;var e=Vn*20}document.addEventListener("mousemove",function(n){var i=P0();je.mouse_angle.value=Math.atan2(i[1],i[0]),je.cvec_x.value=i[0],je.cvec_y.value=i[1]});let t=U0(e);je.vec_x.value=t[0],je.vec_y.value=t[1],je.color_val_r.value-=Ea/2*Jo.r,je.color_val_g.value-=Ea/2*Jo.g,je.color_val_b.value-=Ea/2*Jo.b,je.u_resolution.value.x+=Gc.x,je.u_resolution.value.y+=Gc.y;{var r=z0(Jn,et,kc*t0);je.light_pos.value.x=r[0],je.light_pos.value.y=r[1],je.light_pos.value.z=r[2],je.light_posV.value.x=r[0],je.light_posV.value.y=r[1],je.light_posV.value.z=r[2],Bc+=.01,je.grow_value.value+=Bc/n0}je.u_time.value-=rt,je.center_div.value=R0(je.center_div.value,8,Ea),je.u_height.value+=.5,je.u_height.value>=100&&(je.u_height.value-=1),je.u_radius.value+=.05,or.render(jt,xn),Gn.render(jt,xn),I0(Jv,Gn,720)}function P0(){let l=(event.clientX-(Wn/window.devicePixelRatio+1))*(Wn/75)*Vn,e=-(event.clientY-(wn/window.devicePixelRatio-1))*(wn/75)*Vn;return[l,e]}function R0(l,e,t){return Ar<e&&(Ar+=t),Ar>=e&&(Ar=l),Ar}function U0(l){let e=Us(l),t=Math.cos(e),r=Math.sin(e);return[t,r]}function Hr(l,e,t){return"rgb("+String(l)+","+String(e)+","+String(t)+")"}function I0(l,e,t){if(l==!0){var r=e.domElement.toDataURL({pixelRatio:1},{alpha:!1}).replace("image/png","image/octet-stream");let n=document.createElement("a"),i=s0+=1,o=i.toString().padStart(4,"0")+".png";n.href=r,n.download=o,n.click(),i>=t&&(l=!1)}}function fr(l,e,t,r){let n=Hr(e[0],e[1],e[2]);var i=new lt;if(i.setFromPoints(l),i.computeVertexNormals(),r==!0){new At(i,u0),new At(i,f0),new At(i,Fu);var o=new mi({color:n,linewidth:t}),a=new At(i,h0),s=new hc(i,sr),c=new hc(i,xs);new At(i,xs);var u=new At(i,Ou);return[a,c,s,u]}else var o=new mi({color:n,linewidth:t}),a=new At(i,o);return a}function F0(l,e,t){var r=[];for(let d=0;d<=l.length-1;d++){var n=new lt;if(l[d+1]&&e[d+1]){var i=new Float32Array([l[d][0],l[d][1],l[d][2],l[d+1][0],l[d+1][1],l[d+1][2],e[d+1][0],e[d+1][1],e[d+1][2],e[d][0],e[d][1],e[d][2]]),o=[0,1,2,2,3,0];n.setIndex(o),n.setAttribute("position",new Vt(i,3)),r.push(n)}var a=Vv(r);if(a.computeVertexNormals(),t==!0){var s=new Wg(n),c=new mi({color:0,linewidth:.01}),u=new Gg(s,c);u.material.depthTest=!1,u.material.opacity=1,u.material.transparent=!1,jt.add(u)}}const f=new vt(a,Ua);new vt(a,Ou);const h=new vt(a,c0);return[f,h]}function O0(l,e){let t=l[0],r=l[1],n=l[2],i=e[0],o=e[1],a=e[2],s=(i-t)*(i-t),c=(o-r)*(o-r),u=(a-n)*(a-n),f=s+c+u;return Math.sqrt(f)}function Us(l){var e=Math.PI;return l*(e/180)}function rs(l,e,t,r,n,i){return l.font="/fonts/CAST - Sole Sans Book.otf",l.text="a"+e,l.fontSize=t,l.position.x=r.x,l.position.y=r.y,l.position.z=r.z,l.color=n,l.anchorX="center",l.anchorY="bottom-baseline",i&&(l.material=i),l.sync(),l}function z0(l,e,t){let r=Us(t),n=O0([e.x,e.y,e.x],[l.x,l.y,l.z]),i=r/1,o=Math.cos(r)*Math.sin(i)*n+e.x,a=Math.sin(r)*Math.sin(i)*n+e.y,s=Math.cos(i)*n+e.z;return[o,a,s]}
