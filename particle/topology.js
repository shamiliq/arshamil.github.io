!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports._vantaEffect=t():e._vantaEffect=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function i(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(o,s,function(t){return e[t]}.bind(null,s));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=14)}({0:function(e,t,i){"use strict";function o(e,t){for(let i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function s(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600}i.d(t,"c",(function(){return o})),i.d(t,"e",(function(){return s})),i.d(t,"i",(function(){return n})),i.d(t,"h",(function(){return r})),i.d(t,"g",(function(){return h})),i.d(t,"f",(function(){return a})),i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return u})),i.d(t,"d",(function(){return l})),Number.prototype.clamp=function(e,t){return Math.min(Math.max(this,e),t)};const n=e=>e[Math.floor(Math.random()*e.length)];function r(e,t){return null==e&&(e=0),null==t&&(t=1),e+Math.random()*(t-e)}function h(e,t){return null==e&&(e=0),null==t&&(t=1),Math.floor(e+Math.random()*(t-e+1))}const a=e=>document.querySelector(e),c=e=>"number"==typeof e?"#"+("00000"+e.toString(16)).slice(-6):e,u=(e,t=1)=>{const i=c(e),o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),s=o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null;return"rgba("+s.r+","+s.g+","+s.b+","+t+")"},l=e=>.299*e.r+.587*e.g+.114*e.b},1:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var o=i(0);const s="object"==typeof window;let n=s&&window.THREE||{};s&&!window.VANTA&&(window.VANTA={});const r=s&&window.VANTA||{};r.register=(e,t)=>r[e]=e=>new t(e),r.version="0.5.4";const h=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};r.VantaBase=class{constructor(e={}){if(!s)return!1;if(r.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this),this.options=Object(o.c)({},this.defaultOptions),(e instanceof HTMLElement||"string"==typeof e)&&(e={el:e}),Object(o.c)(this.options,e),this.options.THREE&&(n=this.options.THREE),this.el=this.options.el,null==this.el)h('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const e=this.el;if(this.el=Object(o.f)(e),!this.el)return void h("Cannot find element",e)}let t,i;for(t=0;t<this.el.children.length;t++)i=this.el.children[t],"static"===getComputedStyle(i).position&&(i.style.position="relative"),"auto"===getComputedStyle(i).zIndex&&(i.style.zIndex=1);"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative"),this.initThree(),this.setSize();try{this.init()}catch(e){return h("Init error",e),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=Object(o.a)(this.options.backgroundColor)))}const a=window.addEventListener;a("resize",this.resize),this.resize(),this.animationLoop(),a("scroll",this.windowMouseMoveWrapper),a("mousemove",this.windowMouseMoveWrapper),a("touchstart",this.windowTouchWrapper),a("touchmove",this.windowTouchWrapper)}setOptions(e={}){Object(o.c)(this.options,e)}applyCanvasStyles(e,t={}){Object(o.c)(e.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object(o.c)(e.style,t),e.classList.add("vanta-canvas")}initThree(){n.WebGLRenderer?(this.renderer=new n.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new n.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}windowMouseMoveWrapper(e){const t=this.getCanvasElement();if(!t)return!1;const i=t.getBoundingClientRect(),o=e.clientX-i.left,s=e.clientY-i.top;o>=0&&s>=0&&o<=i.width&&s<=i.height&&(this.mouseX=o,this.mouseY=s,this.options.mouseEase||this.triggerMouseMove(o,s))}windowTouchWrapper(e){if(1===e.touches.length){const t=this.getCanvasElement();if(!t)return!1;const i=t.getBoundingClientRect(),o=e.touches[0].clientX-i.left,s=e.touches[0].clientY-i.top;o>=0&&s>=0&&o<=i.width&&s<=i.height&&(this.mouseX=o,this.mouseY=s,this.options.mouseEase||this.triggerMouseMove(o,s))}}triggerMouseMove(e,t){this.uniforms&&(this.uniforms.u_mouse.value.x=e/this.scale,this.uniforms.u_mouse.value.y=t/this.scale);const i=e/this.width,o=t/this.height;"function"==typeof this.onMouseMove&&this.onMouseMove(i,o)}setSize(){this.scale||(this.scale=1),Object(o.e)()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=this.el.offsetWidth||window.innerWidth,this.height=this.el.offsetHeight||window.innerHeight}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,"function"==typeof this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),"function"==typeof this.onResize&&this.onResize()}isOnScreen(){const e=this.el.offsetHeight,t=this.el.getBoundingClientRect(),i=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,o=t.top+i;return o-window.innerHeight<=i&&i<=o+e}animationLoop(){return this.t||(this.t=0),this.t+=1,this.t2||(this.t2=0),this.t2+=this.options.speed||1,this.uniforms&&(this.uniforms.u_time.value=.016667*this.t2),this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX=this.mouseEaseX+.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY=this.mouseEaseY+.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&("function"==typeof this.onUpdate&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);"function"==typeof this.onRestart&&this.onRestart(),this.init()}init(){"function"==typeof this.onInit&&this.onInit()}destroy(){"function"==typeof this.onDestroy&&this.onDestroy();const e=window.removeEventListener;e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper),e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper),e("resize",this.resize),window.cancelAnimationFrame(this.req),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null)}},t.b=r.VantaBase},14:function(e,t,i){"use strict";i.r(t);var o=i(3),s=i(0);let n="object"==typeof window&&window.p5;class r extends o.b{static initClass(){this.prototype.p5=!0,this.prototype.defaultOptions={color:9016910,backgroundColor:8738}}constructor(e){n=e.p5||n,super(e)}onInit(){const e=this;new n((function(t){let i=e.width,o=e.height,r=100,h=10,a=.003,c=.1,u=(i+2*r)/h,l=(o+2*r)/h,d=[],p=4500,f=[],m=0;function w(e,i,o){let s=0,n=1,r=t.createVector(0,0),h=t.createVector(0,0);for(let a=0;a<100;a++){let c=a/100*t.TAU,u=t.createVector(e+t.cos(c)*o,i+t.sin(c)*o),l=t.noise(u.x,u.y);l>s&&(s=l,r.x=u.x,r.y=u.y),l<n&&(n=l,h.x=u.x,h.y=u.y)}let a=t.createVector(h.x-r.x,h.y-r.y);return a.normalize().mult(s-n),a}function y(e,i){return e=t.constrain(e,0,t.width+2*r),i=t.constrain(i,0,t.height+2*r),d[t.floor(i/h)][t.floor(e/h)]}function g(e,t){return(e%t+t)%t}t.setup=function(){e.initP5(t),t.smooth(),t.noStroke(),function(){for(let e=0;e<p;e++){let i=t.random(t.width+2*r),o=t.random(t.height+2*r);f.push({prev:t.createVector(i,o),pos:t.createVector(i,o),vel:t.createVector(0,0),acc:t.createVector(0,0),col:t.random(255),seed:e})}}(),function(){for(let e=0;e<l;e++){let t=[];for(let i=0;i<u;i++)t.push(w(i*a,e*a,c));d.push(t)}}()},t.draw=function(){t.translate(-r,-r),function(){for(let e=0;e<p;e++){let i=f[e],o=y(i.pos.x,i.pos.y);i.prev.x=i.pos.x,i.prev.y=i.pos.y,i.pos.x=g(i.pos.x+i.vel.x,t.width+2*r),i.pos.y=g(i.pos.y+i.vel.y,t.height+2*r),i.vel.add(i.acc).normalize().mult(2.2),i.acc=t.createVector(0,0),i.acc.add(o).mult(3)}}(),function(){t.strokeWeight(1),t.stroke(Object(s.b)(e.options.color,.05));for(let e=0;e<f.length;e++)n.Vector.dist(f[e].prev,f[e].pos)<10&&t.line(f[e].prev.x,f[e].prev.y,f[e].pos.x,f[e].pos.y)}(),m+=.002}}))}}r.initClass(),t.default=o.a.register("TOPOLOGY",r)},3:function(e,t,i){"use strict";i.d(t,"b",(function(){return r}));var o=i(1),s=i(0);i.d(t,"a",(function(){return o.a}));let n="object"==typeof window&&window.p5;class r extends o.b{constructor(e){n=e.p5||n,super(e),this.mode="p5"}initP5(e){const t=this,i=e.createCanvas(t.width,t.height);i.parent(t.el),t.applyCanvasStyles(e.canvas,{background:Object(s.a)(t.options.backgroundColor)}),t.p5renderer=i,t.p5canvas=e.canvas,t.p5=e}restart(){this.p5&&"object"==typeof this.p5&&this.p5.remove(),super.restart()}destroy(){this.p5&&"object"==typeof this.p5&&this.p5.remove(),super.destroy()}resize(){super.resize(),this.p5&&this.p5.resizeCanvas&&this.p5.resizeCanvas(this.width,this.height)}}}})}));