(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function pa(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const np="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ip=pa(np);function Vu(t){return!!t||t===""}function ma(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Re(i)?op(i):ma(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Re(t))return t;if(_e(t))return t}}const rp=/;(?![^(]*\))/g,sp=/:(.+)/;function op(t){const e={};return t.split(rp).forEach(n=>{if(n){const i=n.split(sp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ga(t){let e="";if(Re(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const i=ga(t[n]);i&&(e+=i+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const go=t=>Re(t)?t:t==null?"":z(t)||_e(t)&&(t.toString===Gu||!V(t.toString))?JSON.stringify(t,qu,2):String(t),qu=(t,e)=>e&&e.__v_isRef?qu(t,e.value):Bn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Yu(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!z(e)&&!Qu(e)?String(e):e,fe={},$n=[],st=()=>{},ap=()=>!1,lp=/^on[^a-z]/,vs=t=>lp.test(t),_a=t=>t.startsWith("onUpdate:"),$e=Object.assign,va=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cp=Object.prototype.hasOwnProperty,X=(t,e)=>cp.call(t,e),z=Array.isArray,Bn=t=>ys(t)==="[object Map]",Yu=t=>ys(t)==="[object Set]",V=t=>typeof t=="function",Re=t=>typeof t=="string",ya=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Ku=t=>_e(t)&&V(t.then)&&V(t.catch),Gu=Object.prototype.toString,ys=t=>Gu.call(t),up=t=>ys(t).slice(8,-1),Qu=t=>ys(t)==="[object Object]",ba=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hr=pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fp=/-(\w)/g,wt=bs(t=>t.replace(fp,(e,n)=>n?n.toUpperCase():"")),dp=/\B([A-Z])/g,ci=bs(t=>t.replace(dp,"-$1").toLowerCase()),Es=bs(t=>t.charAt(0).toUpperCase()+t.slice(1)),qs=bs(t=>t?`on${Es(t)}`:""),$i=(t,e)=>!Object.is(t,e),Ys=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},zr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hp=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $l;const pp=()=>$l||($l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let mt;class mp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&mt&&(this.parent=mt,this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=mt;try{return mt=this,e()}finally{mt=n}}}on(){mt=this}off(){mt=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function gp(t,e=mt){e&&e.active&&e.effects.push(t)}const Ea=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xu=t=>(t.w&Xt)>0,Ju=t=>(t.n&Xt)>0,_p=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Xt},vp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Xu(r)&&!Ju(r)?r.delete(t):e[n++]=r,r.w&=~Xt,r.n&=~Xt}e.length=n}},_o=new WeakMap;let Si=0,Xt=1;const vo=30;let Ze;const pn=Symbol(""),yo=Symbol("");class wa{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,gp(this,i)}run(){if(!this.active)return this.fn();let e=Ze,n=Vt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ze,Ze=this,Vt=!0,Xt=1<<++Si,Si<=vo?_p(this):Bl(this),this.fn()}finally{Si<=vo&&vp(this),Xt=1<<--Si,Ze=this.parent,Vt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ze===this?this.deferStop=!0:this.active&&(Bl(this),this.onStop&&this.onStop(),this.active=!1)}}function Bl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Vt=!0;const Zu=[];function ui(){Zu.push(Vt),Vt=!1}function fi(){const t=Zu.pop();Vt=t===void 0?!0:t}function Ye(t,e,n){if(Vt&&Ze){let i=_o.get(t);i||_o.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Ea()),ef(r)}}function ef(t,e){let n=!1;Si<=vo?Ju(t)||(t.n|=Xt,n=!Xu(t)):n=!t.has(Ze),n&&(t.add(Ze),Ze.deps.push(t))}function Rt(t,e,n,i,r,s){const o=_o.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?ba(n)&&a.push(o.get("length")):(a.push(o.get(pn)),Bn(t)&&a.push(o.get(yo)));break;case"delete":z(t)||(a.push(o.get(pn)),Bn(t)&&a.push(o.get(yo)));break;case"set":Bn(t)&&a.push(o.get(pn));break}if(a.length===1)a[0]&&bo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);bo(Ea(l))}}function bo(t,e){const n=z(t)?t:[...t];for(const i of n)i.computed&&Ul(i);for(const i of n)i.computed||Ul(i)}function Ul(t,e){(t!==Ze||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const yp=pa("__proto__,__v_isRef,__isVue"),tf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ya)),bp=Ca(),Ep=Ca(!1,!0),wp=Ca(!0),Wl=Cp();function Cp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ee(this);for(let s=0,o=this.length;s<o;s++)Ye(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(ee)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ui();const i=ee(this)[e].apply(this,n);return fi(),i}}),t}function Ca(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?$p:af:e?of:sf).get(i))return i;const o=z(i);if(!t&&o&&X(Wl,r))return Reflect.get(Wl,r,s);const a=Reflect.get(i,r,s);return(ya(r)?tf.has(r):yp(r))||(t||Ye(i,"get",r),e)?a:Le(a)?o&&ba(r)?a:a.value:_e(a)?t?lf(a):ar(a):a}}const xp=nf(),Ip=nf(!0);function nf(t=!1){return function(n,i,r,s){let o=n[i];if(Xn(o)&&Le(o)&&!Le(r))return!1;if(!t&&(!Vr(r)&&!Xn(r)&&(o=ee(o),r=ee(r)),!z(n)&&Le(o)&&!Le(r)))return o.value=r,!0;const a=z(n)&&ba(i)?Number(i)<n.length:X(n,i),l=Reflect.set(n,i,r,s);return n===ee(s)&&(a?$i(r,o)&&Rt(n,"set",i,r):Rt(n,"add",i,r)),l}}function Sp(t,e){const n=X(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Rt(t,"delete",e,void 0),i}function Tp(t,e){const n=Reflect.has(t,e);return(!ya(e)||!tf.has(e))&&Ye(t,"has",e),n}function Ap(t){return Ye(t,"iterate",z(t)?"length":pn),Reflect.ownKeys(t)}const rf={get:bp,set:xp,deleteProperty:Sp,has:Tp,ownKeys:Ap},kp={get:wp,set(t,e){return!0},deleteProperty(t,e){return!0}},Np=$e({},rf,{get:Ep,set:Ip}),xa=t=>t,ws=t=>Reflect.getPrototypeOf(t);function br(t,e,n=!1,i=!1){t=t.__v_raw;const r=ee(t),s=ee(e);n||(e!==s&&Ye(r,"get",e),Ye(r,"get",s));const{has:o}=ws(r),a=i?xa:n?Ta:Bi;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Er(t,e=!1){const n=this.__v_raw,i=ee(n),r=ee(t);return e||(t!==r&&Ye(i,"has",t),Ye(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function wr(t,e=!1){return t=t.__v_raw,!e&&Ye(ee(t),"iterate",pn),Reflect.get(t,"size",t)}function jl(t){t=ee(t);const e=ee(this);return ws(e).has.call(e,t)||(e.add(t),Rt(e,"add",t,t)),this}function zl(t,e){e=ee(e);const n=ee(this),{has:i,get:r}=ws(n);let s=i.call(n,t);s||(t=ee(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?$i(e,o)&&Rt(n,"set",t,e):Rt(n,"add",t,e),this}function Vl(t){const e=ee(this),{has:n,get:i}=ws(e);let r=n.call(e,t);r||(t=ee(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Rt(e,"delete",t,void 0),s}function ql(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&Rt(t,"clear",void 0,void 0),n}function Cr(t,e){return function(i,r){const s=this,o=s.__v_raw,a=ee(o),l=e?xa:t?Ta:Bi;return!t&&Ye(a,"iterate",pn),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function xr(t,e,n){return function(...i){const r=this.__v_raw,s=ee(r),o=Bn(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?xa:e?Ta:Bi;return!e&&Ye(s,"iterate",l?yo:pn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function $t(t){return function(...e){return t==="delete"?!1:this}}function Rp(){const t={get(s){return br(this,s)},get size(){return wr(this)},has:Er,add:jl,set:zl,delete:Vl,clear:ql,forEach:Cr(!1,!1)},e={get(s){return br(this,s,!1,!0)},get size(){return wr(this)},has:Er,add:jl,set:zl,delete:Vl,clear:ql,forEach:Cr(!1,!0)},n={get(s){return br(this,s,!0)},get size(){return wr(this,!0)},has(s){return Er.call(this,s,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:Cr(!0,!1)},i={get(s){return br(this,s,!0,!0)},get size(){return wr(this,!0)},has(s){return Er.call(this,s,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:Cr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=xr(s,!1,!1),n[s]=xr(s,!0,!1),e[s]=xr(s,!1,!0),i[s]=xr(s,!0,!0)}),[t,n,e,i]}const[Pp,Op,Mp,Dp]=Rp();function Ia(t,e){const n=e?t?Dp:Mp:t?Op:Pp;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(X(n,r)&&r in i?n:i,r,s)}const Lp={get:Ia(!1,!1)},Fp={get:Ia(!1,!0)},Hp={get:Ia(!0,!1)},sf=new WeakMap,of=new WeakMap,af=new WeakMap,$p=new WeakMap;function Bp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Up(t){return t.__v_skip||!Object.isExtensible(t)?0:Bp(up(t))}function ar(t){return Xn(t)?t:Sa(t,!1,rf,Lp,sf)}function Wp(t){return Sa(t,!1,Np,Fp,of)}function lf(t){return Sa(t,!0,kp,Hp,af)}function Sa(t,e,n,i,r){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Up(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Un(t){return Xn(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function Xn(t){return!!(t&&t.__v_isReadonly)}function Vr(t){return!!(t&&t.__v_isShallow)}function cf(t){return Un(t)||Xn(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function uf(t){return zr(t,"__v_skip",!0),t}const Bi=t=>_e(t)?ar(t):t,Ta=t=>_e(t)?lf(t):t;function ff(t){Vt&&Ze&&(t=ee(t),ef(t.dep||(t.dep=Ea())))}function df(t,e){t=ee(t),t.dep&&bo(t.dep)}function Le(t){return!!(t&&t.__v_isRef===!0)}function jp(t){return hf(t,!1)}function zp(t){return hf(t,!0)}function hf(t,e){return Le(t)?t:new Vp(t,e)}class Vp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:Bi(e)}get value(){return ff(this),this._value}set value(e){const n=this.__v_isShallow||Vr(e)||Xn(e);e=n?e:ee(e),$i(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Bi(e),df(this))}}function Wn(t){return Le(t)?t.value:t}const qp={get:(t,e,n)=>Wn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Le(r)&&!Le(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function pf(t){return Un(t)?t:new Proxy(t,qp)}var mf;class Yp{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[mf]=!1,this._dirty=!0,this.effect=new wa(e,()=>{this._dirty||(this._dirty=!0,df(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ee(this);return ff(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}mf="__v_isReadonly";function Kp(t,e,n=!1){let i,r;const s=V(t);return s?(i=t,r=st):(i=t.get,r=t.set),new Yp(i,r,s||!r,n)}function qt(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Cs(s,e,n)}return r}function ot(t,e,n,i){if(V(t)){const s=qt(t,e,n,i);return s&&Ku(s)&&s.catch(o=>{Cs(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(ot(t[s],e,n,i));return r}function Cs(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){qt(l,null,10,[t,o,a]);return}}Gp(t,n,r,i)}function Gp(t,e,n,i=!0){console.error(t)}let Ui=!1,Eo=!1;const De=[];let vt=0;const jn=[];let Tt=null,cn=0;const gf=Promise.resolve();let Aa=null;function _f(t){const e=Aa||gf;return t?e.then(this?t.bind(this):t):e}function Qp(t){let e=vt+1,n=De.length;for(;e<n;){const i=e+n>>>1;Wi(De[i])<t?e=i+1:n=i}return e}function ka(t){(!De.length||!De.includes(t,Ui&&t.allowRecurse?vt+1:vt))&&(t.id==null?De.push(t):De.splice(Qp(t.id),0,t),vf())}function vf(){!Ui&&!Eo&&(Eo=!0,Aa=gf.then(bf))}function Xp(t){const e=De.indexOf(t);e>vt&&De.splice(e,1)}function Jp(t){z(t)?jn.push(...t):(!Tt||!Tt.includes(t,t.allowRecurse?cn+1:cn))&&jn.push(t),vf()}function Yl(t,e=Ui?vt+1:0){for(;e<De.length;e++){const n=De[e];n&&n.pre&&(De.splice(e,1),e--,n())}}function yf(t){if(jn.length){const e=[...new Set(jn)];if(jn.length=0,Tt){Tt.push(...e);return}for(Tt=e,Tt.sort((n,i)=>Wi(n)-Wi(i)),cn=0;cn<Tt.length;cn++)Tt[cn]();Tt=null,cn=0}}const Wi=t=>t.id==null?1/0:t.id,Zp=(t,e)=>{const n=Wi(t)-Wi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function bf(t){Eo=!1,Ui=!0,De.sort(Zp);const e=st;try{for(vt=0;vt<De.length;vt++){const n=De[vt];n&&n.active!==!1&&qt(n,null,14)}}finally{vt=0,De.length=0,yf(),Ui=!1,Aa=null,(De.length||jn.length)&&bf()}}function em(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||fe;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||fe;d&&(r=n.map(p=>p.trim())),f&&(r=n.map(hp))}let a,l=i[a=qs(e)]||i[a=qs(wt(e))];!l&&s&&(l=i[a=qs(ci(e))]),l&&ot(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ot(c,t,6,r)}}function Ef(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!V(t)){const l=c=>{const u=Ef(c,e,!0);u&&(a=!0,$e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(_e(t)&&i.set(t,null),null):(z(s)?s.forEach(l=>o[l]=null):$e(o,s),_e(t)&&i.set(t,o),o)}function xs(t,e){return!t||!vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,ci(e))||X(t,e))}let yt=null,wf=null;function qr(t){const e=yt;return yt=t,wf=t&&t.type.__scopeId||null,e}function tm(t,e=yt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&ic(-1);const s=qr(e),o=t(...r);return qr(s),i._d&&ic(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Ks(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:_,inheritAttrs:S}=t;let x,v;const w=qr(t);try{if(n.shapeFlag&4){const B=r||i;x=_t(u.call(B,B,f,s,p,d,_)),v=l}else{const B=e;x=_t(B.length>1?B(s,{attrs:l,slots:a,emit:c}):B(s,null)),v=e.props?l:nm(l)}}catch(B){ki.length=0,Cs(B,t,1),x=Ee(_n)}let O=x;if(v&&S!==!1){const B=Object.keys(v),{shapeFlag:Q}=O;B.length&&Q&7&&(o&&B.some(_a)&&(v=im(v,o)),O=Jn(O,v))}return n.dirs&&(O=Jn(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),x=O,qr(w),x}const nm=t=>{let e;for(const n in t)(n==="class"||n==="style"||vs(n))&&((e||(e={}))[n]=t[n]);return e},im=(t,e)=>{const n={};for(const i in t)(!_a(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function rm(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Kl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!xs(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Kl(i,o,c):!0:!!o;return!1}function Kl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!xs(n,s))return!0}return!1}function sm({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const om=t=>t.__isSuspense;function am(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Jp(t)}function $r(t,e){if(Oe){let n=Oe.provides;const i=Oe.parent&&Oe.parent.provides;i===n&&(n=Oe.provides=Object.create(i)),n[t]=e}}function Yt(t,e,n=!1){const i=Oe||yt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&V(e)?e.call(i.proxy):e}}const Gl={};function Ai(t,e,n){return Cf(t,e,n)}function Cf(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=fe){const a=Oe;let l,c=!1,u=!1;if(Le(t)?(l=()=>t.value,c=Vr(t)):Un(t)?(l=()=>t,i=!0):z(t)?(u=!0,c=t.some(v=>Un(v)||Vr(v)),l=()=>t.map(v=>{if(Le(v))return v.value;if(Un(v))return Dn(v);if(V(v))return qt(v,a,2)})):V(t)?e?l=()=>qt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),ot(t,a,3,[d])}:l=st,e&&i){const v=l;l=()=>Dn(v())}let f,d=v=>{f=x.onStop=()=>{qt(v,a,4)}};if(zi)return d=st,e?n&&ot(e,a,3,[l(),u?[]:void 0,d]):l(),st;let p=u?[]:Gl;const _=()=>{if(!!x.active)if(e){const v=x.run();(i||c||(u?v.some((w,O)=>$i(w,p[O])):$i(v,p)))&&(f&&f(),ot(e,a,3,[v,p===Gl?void 0:p,d]),p=v)}else x.run()};_.allowRecurse=!!e;let S;r==="sync"?S=_:r==="post"?S=()=>Ue(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),S=()=>ka(_));const x=new wa(l,S);return e?n?_():p=x.run():r==="post"?Ue(x.run.bind(x),a&&a.suspense):x.run(),()=>{x.stop(),a&&a.scope&&va(a.scope.effects,x)}}function lm(t,e,n){const i=this.proxy,r=Re(t)?t.includes(".")?xf(i,t):()=>i[t]:t.bind(i,i);let s;V(e)?s=e:(s=e.handler,n=e);const o=Oe;Zn(this);const a=Cf(r,s.bind(i),n);return o?Zn(o):mn(),a}function xf(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Dn(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Le(t))Dn(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Dn(t[n],e);else if(Yu(t)||Bn(t))t.forEach(n=>{Dn(n,e)});else if(Qu(t))for(const n in t)Dn(t[n],e);return t}function lr(t){return V(t)?{setup:t,name:t.name}:t}const Br=t=>!!t.type.__asyncLoader,If=t=>t.type.__isKeepAlive;function cm(t,e){Sf(t,"a",e)}function um(t,e){Sf(t,"da",e)}function Sf(t,e,n=Oe){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Is(e,i,n),n){let r=n.parent;for(;r&&r.parent;)If(r.parent.vnode)&&fm(i,e,n,r),r=r.parent}}function fm(t,e,n,i){const r=Is(e,t,i,!0);Tf(()=>{va(i[e],r)},n)}function Is(t,e,n=Oe,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ui(),Zn(n);const a=ot(e,n,t,o);return mn(),fi(),a});return i?r.unshift(s):r.push(s),s}}const Lt=t=>(e,n=Oe)=>(!zi||t==="sp")&&Is(t,e,n),dm=Lt("bm"),hm=Lt("m"),pm=Lt("bu"),mm=Lt("u"),gm=Lt("bum"),Tf=Lt("um"),_m=Lt("sp"),vm=Lt("rtg"),ym=Lt("rtc");function bm(t,e=Oe){Is("ec",t,e)}function rn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ui(),ot(l,n,8,[t.el,a,t,e]),fi())}}const Af="components";function zn(t,e){return wm(Af,t,!0,e)||t}const Em=Symbol();function wm(t,e,n=!0,i=!1){const r=yt||Oe;if(r){const s=r.type;if(t===Af){const a=tg(s,!1);if(a&&(a===e||a===wt(e)||a===Es(wt(e))))return s}const o=Ql(r[t]||s[t],e)||Ql(r.appContext[t],e);return!o&&i?s:o}}function Ql(t,e){return t&&(t[e]||t[wt(e)]||t[Es(wt(e))])}function Cm(t,e,n,i){let r;const s=n&&n[i];if(z(t)||Re(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(_e(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const wo=t=>t?$f(t)?Ma(t)||t.proxy:wo(t.parent):null,Yr=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wo(t.parent),$root:t=>wo(t.root),$emit:t=>t.emit,$options:t=>Na(t),$forceUpdate:t=>t.f||(t.f=()=>ka(t.update)),$nextTick:t=>t.n||(t.n=_f.bind(t.proxy)),$watch:t=>lm.bind(t)}),xm={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(i!==fe&&X(i,e))return o[e]=1,i[e];if(r!==fe&&X(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,s[e];if(n!==fe&&X(n,e))return o[e]=4,n[e];Co&&(o[e]=0)}}const u=Yr[e];let f,d;if(u)return e==="$attrs"&&Ye(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==fe&&X(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,X(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==fe&&X(r,e)?(r[e]=n,!0):i!==fe&&X(i,e)?(i[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==fe&&X(t,o)||e!==fe&&X(e,o)||(a=s[0])&&X(a,o)||X(i,o)||X(Yr,o)||X(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Co=!0;function Im(t){const e=Na(t),n=t.proxy,i=t.ctx;Co=!1,e.beforeCreate&&Xl(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:S,deactivated:x,beforeDestroy:v,beforeUnmount:w,destroyed:O,unmounted:B,render:Q,renderTracked:ge,renderTriggered:Ce,errorCaptured:ut,serverPrefetch:xe,expose:ft,inheritAttrs:xt,components:Xe,directives:Tn,filters:An}=e;if(c&&Sm(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ae in o){const re=o[ae];V(re)&&(i[ae]=re.bind(n))}if(r){const ae=r.call(n,n);_e(ae)&&(t.data=ar(ae))}if(Co=!0,s)for(const ae in s){const re=s[ae],ze=V(re)?re.bind(n,n):V(re.get)?re.get.bind(n,n):st,Nn=!V(re)&&V(re.set)?re.set.bind(n):st,It=ve({get:ze,set:Nn});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>It.value,set:dt=>It.value=dt})}if(a)for(const ae in a)kf(a[ae],i,n,ae);if(l){const ae=V(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(re=>{$r(re,ae[re])})}u&&Xl(u,t,"c");function Ie(ae,re){z(re)?re.forEach(ze=>ae(ze.bind(n))):re&&ae(re.bind(n))}if(Ie(dm,f),Ie(hm,d),Ie(pm,p),Ie(mm,_),Ie(cm,S),Ie(um,x),Ie(bm,ut),Ie(ym,ge),Ie(vm,Ce),Ie(gm,w),Ie(Tf,B),Ie(_m,xe),z(ft))if(ft.length){const ae=t.exposed||(t.exposed={});ft.forEach(re=>{Object.defineProperty(ae,re,{get:()=>n[re],set:ze=>n[re]=ze})})}else t.exposed||(t.exposed={});Q&&t.render===st&&(t.render=Q),xt!=null&&(t.inheritAttrs=xt),Xe&&(t.components=Xe),Tn&&(t.directives=Tn)}function Sm(t,e,n=st,i=!1){z(t)&&(t=xo(t));for(const r in t){const s=t[r];let o;_e(s)?"default"in s?o=Yt(s.from||r,s.default,!0):o=Yt(s.from||r):o=Yt(s),Le(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Xl(t,e,n){ot(z(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function kf(t,e,n,i){const r=i.includes(".")?xf(n,i):()=>n[i];if(Re(t)){const s=e[t];V(s)&&Ai(r,s)}else if(V(t))Ai(r,t.bind(n));else if(_e(t))if(z(t))t.forEach(s=>kf(s,e,n,i));else{const s=V(t.handler)?t.handler.bind(n):e[t.handler];V(s)&&Ai(r,s,t)}}function Na(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Kr(l,c,o,!0)),Kr(l,e,o)),_e(e)&&s.set(e,l),l}function Kr(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Kr(t,s,n,!0),r&&r.forEach(o=>Kr(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Tm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tm={data:Jl,props:on,emits:on,methods:on,computed:on,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:on,directives:on,watch:km,provide:Jl,inject:Am};function Jl(t,e){return e?t?function(){return $e(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Am(t,e){return on(xo(t),xo(e))}function xo(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Fe(t,e){return t?[...new Set([].concat(t,e))]:e}function on(t,e){return t?$e($e(Object.create(null),t),e):e}function km(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const i in e)n[i]=Fe(t[i],e[i]);return n}function Nm(t,e,n,i=!1){const r={},s={};zr(s,Ss,1),t.propsDefaults=Object.create(null),Nf(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Wp(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Rm(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ee(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(xs(t.emitsOptions,d))continue;const p=e[d];if(l)if(X(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const _=wt(d);r[_]=Io(l,a,_,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Nf(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!X(e,f)&&((u=ci(f))===f||!X(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Io(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!X(e,f)&&!0)&&(delete s[f],c=!0)}c&&Rt(t,"set","$attrs")}function Nf(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Hr(l))continue;const c=e[l];let u;r&&X(r,u=wt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:xs(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ee(n),c=a||fe;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Io(r,l,f,c[f],t,!X(c,f))}}return o}function Io(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&V(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Zn(r),i=c[n]=l.call(null,e),mn())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ci(n))&&(i=!0))}return i}function Rf(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!V(t)){const u=f=>{l=!0;const[d,p]=Rf(f,e,!0);$e(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return _e(t)&&i.set(t,$n),$n;if(z(s))for(let u=0;u<s.length;u++){const f=wt(s[u]);Zl(f)&&(o[f]=fe)}else if(s)for(const u in s){const f=wt(u);if(Zl(f)){const d=s[u],p=o[f]=z(d)||V(d)?{type:d}:d;if(p){const _=nc(Boolean,p.type),S=nc(String,p.type);p[0]=_>-1,p[1]=S<0||_<S,(_>-1||X(p,"default"))&&a.push(f)}}}const c=[o,a];return _e(t)&&i.set(t,c),c}function Zl(t){return t[0]!=="$"}function ec(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function tc(t,e){return ec(t)===ec(e)}function nc(t,e){return z(e)?e.findIndex(n=>tc(n,t)):V(e)&&tc(e,t)?0:-1}const Pf=t=>t[0]==="_"||t==="$stable",Ra=t=>z(t)?t.map(_t):[_t(t)],Pm=(t,e,n)=>{if(e._n)return e;const i=tm((...r)=>Ra(e(...r)),n);return i._c=!1,i},Of=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Pf(r))continue;const s=t[r];if(V(s))e[r]=Pm(r,s,i);else if(s!=null){const o=Ra(s);e[r]=()=>o}}},Mf=(t,e)=>{const n=Ra(e);t.slots.default=()=>n},Om=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),zr(e,"_",n)):Of(e,t.slots={})}else t.slots={},e&&Mf(t,e);zr(t.slots,Ss,1)},Mm=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=fe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:($e(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Of(e,r)),o=e}else e&&(Mf(t,e),o={default:1});if(s)for(const a in r)!Pf(a)&&!(a in o)&&delete r[a]};function Df(){return{app:null,config:{isNativeTag:ap,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dm=0;function Lm(t,e){return function(i,r=null){V(i)||(i=Object.assign({},i)),r!=null&&!_e(r)&&(r=null);const s=Df(),o=new Set;let a=!1;const l=s.app={_uid:Dm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ig,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(l,...u)):V(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=Ee(i,r);return d.appContext=s,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Ma(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function So(t,e,n,i,r=!1){if(z(t)){t.forEach((d,p)=>So(d,e&&(z(e)?e[p]:e),n,i,r));return}if(Br(i)&&!r)return;const s=i.shapeFlag&4?Ma(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===fe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,X(f,c)&&(f[c]=null)):Le(c)&&(c.value=null)),V(l))qt(l,a,12,[o,u]);else{const d=Re(l),p=Le(l);if(d||p){const _=()=>{if(t.f){const S=d?u[l]:l.value;r?z(S)&&va(S,s):z(S)?S.includes(s)||S.push(s):d?(u[l]=[s],X(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,X(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Ue(_,n)):_()}}}const Ue=am;function Fm(t){return Hm(t)}function Hm(t,e){const n=pp();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=st,cloneNode:_,insertStaticContent:S}=t,x=(h,m,g,E=null,b=null,A=null,R=!1,T=null,k=!!m.dynamicChildren)=>{if(h===m)return;h&&!yi(h,m)&&(E=F(h),Ge(h,b,A,!0),h=null),m.patchFlag===-2&&(k=!1,m.dynamicChildren=null);const{type:C,ref:H,shapeFlag:M}=m;switch(C){case Pa:v(h,m,g,E);break;case _n:w(h,m,g,E);break;case Gs:h==null&&O(m,g,E,R);break;case gt:Tn(h,m,g,E,b,A,R,T,k);break;default:M&1?ge(h,m,g,E,b,A,R,T,k):M&6?An(h,m,g,E,b,A,R,T,k):(M&64||M&128)&&C.process(h,m,g,E,b,A,R,T,k,le)}H!=null&&b&&So(H,h&&h.ref,A,m||h,!m)},v=(h,m,g,E)=>{if(h==null)i(m.el=a(m.children),g,E);else{const b=m.el=h.el;m.children!==h.children&&c(b,m.children)}},w=(h,m,g,E)=>{h==null?i(m.el=l(m.children||""),g,E):m.el=h.el},O=(h,m,g,E)=>{[h.el,h.anchor]=S(h.children,m,g,E,h.el,h.anchor)},B=({el:h,anchor:m},g,E)=>{let b;for(;h&&h!==m;)b=d(h),i(h,g,E),h=b;i(m,g,E)},Q=({el:h,anchor:m})=>{let g;for(;h&&h!==m;)g=d(h),r(h),h=g;r(m)},ge=(h,m,g,E,b,A,R,T,k)=>{R=R||m.type==="svg",h==null?Ce(m,g,E,b,A,R,T,k):ft(h,m,b,A,R,T,k)},Ce=(h,m,g,E,b,A,R,T)=>{let k,C;const{type:H,props:M,shapeFlag:$,transition:W,patchFlag:J,dirs:se}=h;if(h.el&&_!==void 0&&J===-1)k=h.el=_(h.el);else{if(k=h.el=o(h.type,A,M&&M.is,M),$&8?u(k,h.children):$&16&&xe(h.children,k,null,E,b,A&&H!=="foreignObject",R,T),se&&rn(h,null,E,"created"),M){for(const he in M)he!=="value"&&!Hr(he)&&s(k,he,null,M[he],A,h.children,E,b,N);"value"in M&&s(k,"value",null,M.value),(C=M.onVnodeBeforeMount)&&pt(C,E,h)}ut(k,h,h.scopeId,R,E)}se&&rn(h,null,E,"beforeMount");const oe=(!b||b&&!b.pendingBranch)&&W&&!W.persisted;oe&&W.beforeEnter(k),i(k,m,g),((C=M&&M.onVnodeMounted)||oe||se)&&Ue(()=>{C&&pt(C,E,h),oe&&W.enter(k),se&&rn(h,null,E,"mounted")},b)},ut=(h,m,g,E,b)=>{if(g&&p(h,g),E)for(let A=0;A<E.length;A++)p(h,E[A]);if(b){let A=b.subTree;if(m===A){const R=b.vnode;ut(h,R,R.scopeId,R.slotScopeIds,b.parent)}}},xe=(h,m,g,E,b,A,R,T,k=0)=>{for(let C=k;C<h.length;C++){const H=h[C]=T?Wt(h[C]):_t(h[C]);x(null,H,m,g,E,b,A,R,T)}},ft=(h,m,g,E,b,A,R)=>{const T=m.el=h.el;let{patchFlag:k,dynamicChildren:C,dirs:H}=m;k|=h.patchFlag&16;const M=h.props||fe,$=m.props||fe;let W;g&&sn(g,!1),(W=$.onVnodeBeforeUpdate)&&pt(W,g,m,h),H&&rn(m,h,g,"beforeUpdate"),g&&sn(g,!0);const J=b&&m.type!=="foreignObject";if(C?xt(h.dynamicChildren,C,T,g,E,J,A):R||ze(h,m,T,null,g,E,J,A,!1),k>0){if(k&16)Xe(T,m,M,$,g,E,b);else if(k&2&&M.class!==$.class&&s(T,"class",null,$.class,b),k&4&&s(T,"style",M.style,$.style,b),k&8){const se=m.dynamicProps;for(let oe=0;oe<se.length;oe++){const he=se[oe],Je=M[he],Rn=$[he];(Rn!==Je||he==="value")&&s(T,he,Je,Rn,b,h.children,g,E,N)}}k&1&&h.children!==m.children&&u(T,m.children)}else!R&&C==null&&Xe(T,m,M,$,g,E,b);((W=$.onVnodeUpdated)||H)&&Ue(()=>{W&&pt(W,g,m,h),H&&rn(m,h,g,"updated")},E)},xt=(h,m,g,E,b,A,R)=>{for(let T=0;T<m.length;T++){const k=h[T],C=m[T],H=k.el&&(k.type===gt||!yi(k,C)||k.shapeFlag&70)?f(k.el):g;x(k,C,H,null,E,b,A,R,!0)}},Xe=(h,m,g,E,b,A,R)=>{if(g!==E){for(const T in E){if(Hr(T))continue;const k=E[T],C=g[T];k!==C&&T!=="value"&&s(h,T,C,k,R,m.children,b,A,N)}if(g!==fe)for(const T in g)!Hr(T)&&!(T in E)&&s(h,T,g[T],null,R,m.children,b,A,N);"value"in E&&s(h,"value",g.value,E.value)}},Tn=(h,m,g,E,b,A,R,T,k)=>{const C=m.el=h?h.el:a(""),H=m.anchor=h?h.anchor:a("");let{patchFlag:M,dynamicChildren:$,slotScopeIds:W}=m;W&&(T=T?T.concat(W):W),h==null?(i(C,g,E),i(H,g,E),xe(m.children,g,H,b,A,R,T,k)):M>0&&M&64&&$&&h.dynamicChildren?(xt(h.dynamicChildren,$,g,b,A,R,T),(m.key!=null||b&&m===b.subTree)&&Lf(h,m,!0)):ze(h,m,g,H,b,A,R,T,k)},An=(h,m,g,E,b,A,R,T,k)=>{m.slotScopeIds=T,h==null?m.shapeFlag&512?b.ctx.activate(m,g,E,R,k):kn(m,g,E,b,A,R,k):Ie(h,m,k)},kn=(h,m,g,E,b,A,R)=>{const T=h.component=Qm(h,E,b);if(If(h)&&(T.ctx.renderer=le),Xm(T),T.asyncDep){if(b&&b.registerDep(T,ae),!h.el){const k=T.subTree=Ee(_n);w(null,k,m,g)}return}ae(T,h,m,g,b,A,R)},Ie=(h,m,g)=>{const E=m.component=h.component;if(rm(h,m,g))if(E.asyncDep&&!E.asyncResolved){re(E,m,g);return}else E.next=m,Xp(E.update),E.update();else m.el=h.el,E.vnode=m},ae=(h,m,g,E,b,A,R)=>{const T=()=>{if(h.isMounted){let{next:H,bu:M,u:$,parent:W,vnode:J}=h,se=H,oe;sn(h,!1),H?(H.el=J.el,re(h,H,R)):H=J,M&&Ys(M),(oe=H.props&&H.props.onVnodeBeforeUpdate)&&pt(oe,W,H,J),sn(h,!0);const he=Ks(h),Je=h.subTree;h.subTree=he,x(Je,he,f(Je.el),F(Je),h,b,A),H.el=he.el,se===null&&sm(h,he.el),$&&Ue($,b),(oe=H.props&&H.props.onVnodeUpdated)&&Ue(()=>pt(oe,W,H,J),b)}else{let H;const{el:M,props:$}=m,{bm:W,m:J,parent:se}=h,oe=Br(m);if(sn(h,!1),W&&Ys(W),!oe&&(H=$&&$.onVnodeBeforeMount)&&pt(H,se,m),sn(h,!0),M&&j){const he=()=>{h.subTree=Ks(h),j(M,h.subTree,h,b,null)};oe?m.type.__asyncLoader().then(()=>!h.isUnmounted&&he()):he()}else{const he=h.subTree=Ks(h);x(null,he,g,E,h,b,A),m.el=he.el}if(J&&Ue(J,b),!oe&&(H=$&&$.onVnodeMounted)){const he=m;Ue(()=>pt(H,se,he),b)}(m.shapeFlag&256||se&&Br(se.vnode)&&se.vnode.shapeFlag&256)&&h.a&&Ue(h.a,b),h.isMounted=!0,m=g=E=null}},k=h.effect=new wa(T,()=>ka(C),h.scope),C=h.update=()=>k.run();C.id=h.uid,sn(h,!0),C()},re=(h,m,g)=>{m.component=h;const E=h.vnode.props;h.vnode=m,h.next=null,Rm(h,m.props,E,g),Mm(h,m.children,g),ui(),Yl(),fi()},ze=(h,m,g,E,b,A,R,T,k=!1)=>{const C=h&&h.children,H=h?h.shapeFlag:0,M=m.children,{patchFlag:$,shapeFlag:W}=m;if($>0){if($&128){It(C,M,g,E,b,A,R,T,k);return}else if($&256){Nn(C,M,g,E,b,A,R,T,k);return}}W&8?(H&16&&N(C,b,A),M!==C&&u(g,M)):H&16?W&16?It(C,M,g,E,b,A,R,T,k):N(C,b,A,!0):(H&8&&u(g,""),W&16&&xe(M,g,E,b,A,R,T,k))},Nn=(h,m,g,E,b,A,R,T,k)=>{h=h||$n,m=m||$n;const C=h.length,H=m.length,M=Math.min(C,H);let $;for($=0;$<M;$++){const W=m[$]=k?Wt(m[$]):_t(m[$]);x(h[$],W,g,null,b,A,R,T,k)}C>H?N(h,b,A,!0,!1,M):xe(m,g,E,b,A,R,T,k,M)},It=(h,m,g,E,b,A,R,T,k)=>{let C=0;const H=m.length;let M=h.length-1,$=H-1;for(;C<=M&&C<=$;){const W=h[C],J=m[C]=k?Wt(m[C]):_t(m[C]);if(yi(W,J))x(W,J,g,null,b,A,R,T,k);else break;C++}for(;C<=M&&C<=$;){const W=h[M],J=m[$]=k?Wt(m[$]):_t(m[$]);if(yi(W,J))x(W,J,g,null,b,A,R,T,k);else break;M--,$--}if(C>M){if(C<=$){const W=$+1,J=W<H?m[W].el:E;for(;C<=$;)x(null,m[C]=k?Wt(m[C]):_t(m[C]),g,J,b,A,R,T,k),C++}}else if(C>$)for(;C<=M;)Ge(h[C],b,A,!0),C++;else{const W=C,J=C,se=new Map;for(C=J;C<=$;C++){const Ve=m[C]=k?Wt(m[C]):_t(m[C]);Ve.key!=null&&se.set(Ve.key,C)}let oe,he=0;const Je=$-J+1;let Rn=!1,Ll=0;const vi=new Array(Je);for(C=0;C<Je;C++)vi[C]=0;for(C=W;C<=M;C++){const Ve=h[C];if(he>=Je){Ge(Ve,b,A,!0);continue}let ht;if(Ve.key!=null)ht=se.get(Ve.key);else for(oe=J;oe<=$;oe++)if(vi[oe-J]===0&&yi(Ve,m[oe])){ht=oe;break}ht===void 0?Ge(Ve,b,A,!0):(vi[ht-J]=C+1,ht>=Ll?Ll=ht:Rn=!0,x(Ve,m[ht],g,null,b,A,R,T,k),he++)}const Fl=Rn?$m(vi):$n;for(oe=Fl.length-1,C=Je-1;C>=0;C--){const Ve=J+C,ht=m[Ve],Hl=Ve+1<H?m[Ve+1].el:E;vi[C]===0?x(null,ht,g,Hl,b,A,R,T,k):Rn&&(oe<0||C!==Fl[oe]?dt(ht,g,Hl,2):oe--)}}},dt=(h,m,g,E,b=null)=>{const{el:A,type:R,transition:T,children:k,shapeFlag:C}=h;if(C&6){dt(h.component.subTree,m,g,E);return}if(C&128){h.suspense.move(m,g,E);return}if(C&64){R.move(h,m,g,le);return}if(R===gt){i(A,m,g);for(let M=0;M<k.length;M++)dt(k[M],m,g,E);i(h.anchor,m,g);return}if(R===Gs){B(h,m,g);return}if(E!==2&&C&1&&T)if(E===0)T.beforeEnter(A),i(A,m,g),Ue(()=>T.enter(A),b);else{const{leave:M,delayLeave:$,afterLeave:W}=T,J=()=>i(A,m,g),se=()=>{M(A,()=>{J(),W&&W()})};$?$(A,J,se):se()}else i(A,m,g)},Ge=(h,m,g,E=!1,b=!1)=>{const{type:A,props:R,ref:T,children:k,dynamicChildren:C,shapeFlag:H,patchFlag:M,dirs:$}=h;if(T!=null&&So(T,null,g,h,!0),H&256){m.ctx.deactivate(h);return}const W=H&1&&$,J=!Br(h);let se;if(J&&(se=R&&R.onVnodeBeforeUnmount)&&pt(se,m,h),H&6)L(h.component,g,E);else{if(H&128){h.suspense.unmount(g,E);return}W&&rn(h,null,m,"beforeUnmount"),H&64?h.type.remove(h,m,g,b,le,E):C&&(A!==gt||M>0&&M&64)?N(C,m,g,!1,!0):(A===gt&&M&384||!b&&H&16)&&N(k,m,g),E&&_i(h)}(J&&(se=R&&R.onVnodeUnmounted)||W)&&Ue(()=>{se&&pt(se,m,h),W&&rn(h,null,m,"unmounted")},g)},_i=h=>{const{type:m,el:g,anchor:E,transition:b}=h;if(m===gt){y(g,E);return}if(m===Gs){Q(h);return}const A=()=>{r(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(h.shapeFlag&1&&b&&!b.persisted){const{leave:R,delayLeave:T}=b,k=()=>R(g,A);T?T(h.el,A,k):k()}else A()},y=(h,m)=>{let g;for(;h!==m;)g=d(h),r(h),h=g;r(m)},L=(h,m,g)=>{const{bum:E,scope:b,update:A,subTree:R,um:T}=h;E&&Ys(E),b.stop(),A&&(A.active=!1,Ge(R,h,m,g)),T&&Ue(T,m),Ue(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},N=(h,m,g,E=!1,b=!1,A=0)=>{for(let R=A;R<h.length;R++)Ge(h[R],m,g,E,b)},F=h=>h.shapeFlag&6?F(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),te=(h,m,g)=>{h==null?m._vnode&&Ge(m._vnode,null,null,!0):x(m._vnode||null,h,m,null,null,null,g),Yl(),yf(),m._vnode=h},le={p:x,um:Ge,m:dt,r:_i,mt:kn,mc:xe,pc:ze,pbc:xt,n:F,o:t};let q,j;return e&&([q,j]=e(le)),{render:te,hydrate:q,createApp:Lm(te,q)}}function sn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lf(t,e,n=!1){const i=t.children,r=e.children;if(z(i)&&z(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Wt(r[s]),a.el=o.el),n||Lf(o,a))}}function $m(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Bm=t=>t.__isTeleport,gt=Symbol(void 0),Pa=Symbol(void 0),_n=Symbol(void 0),Gs=Symbol(void 0),ki=[];let nt=null;function bt(t=!1){ki.push(nt=t?null:[])}function Um(){ki.pop(),nt=ki[ki.length-1]||null}let ji=1;function ic(t){ji+=t}function Ff(t){return t.dynamicChildren=ji>0?nt||$n:null,Um(),ji>0&&nt&&nt.push(t),t}function At(t,e,n,i,r,s){return Ff(qe(t,e,n,i,r,s,!0))}function Wm(t,e,n,i,r){return Ff(Ee(t,e,n,i,r,!0))}function To(t){return t?t.__v_isVNode===!0:!1}function yi(t,e){return t.type===e.type&&t.key===e.key}const Ss="__vInternal",Hf=({key:t})=>t!=null?t:null,Ur=({ref:t,ref_key:e,ref_for:n})=>t!=null?Re(t)||Le(t)||V(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function qe(t,e=null,n=null,i=0,r=null,s=t===gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hf(e),ref:e&&Ur(e),scopeId:wf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Oa(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Re(n)?8:16),ji>0&&!o&&nt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nt.push(l),l}const Ee=jm;function jm(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Em)&&(t=_n),To(t)){const a=Jn(t,e,!0);return n&&Oa(a,n),ji>0&&!s&&nt&&(a.shapeFlag&6?nt[nt.indexOf(t)]=a:nt.push(a)),a.patchFlag|=-2,a}if(ng(t)&&(t=t.__vccOpts),e){e=zm(e);let{class:a,style:l}=e;a&&!Re(a)&&(e.class=ga(a)),_e(l)&&(cf(l)&&!z(l)&&(l=$e({},l)),e.style=ma(l))}const o=Re(t)?1:om(t)?128:Bm(t)?64:_e(t)?4:V(t)?2:0;return qe(t,e,n,i,r,o,s,!0)}function zm(t){return t?cf(t)||Ss in t?$e({},t):t:null}function Jn(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?Ym(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Hf(a),ref:e&&e.ref?n&&r?z(r)?r.concat(Ur(e)):[r,Ur(e)]:Ur(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jn(t.ssContent),ssFallback:t.ssFallback&&Jn(t.ssFallback),el:t.el,anchor:t.anchor}}function Vm(t=" ",e=0){return Ee(Pa,null,t,e)}function qm(t="",e=!1){return e?(bt(),Wm(_n,null,t)):Ee(_n,null,t)}function _t(t){return t==null||typeof t=="boolean"?Ee(_n):z(t)?Ee(gt,null,t.slice()):typeof t=="object"?Wt(t):Ee(Pa,null,String(t))}function Wt(t){return t.el===null||t.memo?t:Jn(t)}function Oa(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Oa(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ss in e)?e._ctx=yt:r===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),i&64?(n=16,e=[Vm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ym(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ga([e.class,i.class]));else if(r==="style")e.style=ma([e.style,i.style]);else if(vs(r)){const s=e[r],o=i[r];o&&s!==o&&!(z(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function pt(t,e,n,i=null){ot(t,e,7,[n,i])}const Km=Df();let Gm=0;function Qm(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Km,s={uid:Gm++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rf(i,r),emitsOptions:Ef(i,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=em.bind(null,s),t.ce&&t.ce(s),s}let Oe=null;const Zn=t=>{Oe=t,t.scope.on()},mn=()=>{Oe&&Oe.scope.off(),Oe=null};function $f(t){return t.vnode.shapeFlag&4}let zi=!1;function Xm(t,e=!1){zi=e;const{props:n,children:i}=t.vnode,r=$f(t);Nm(t,n,r,e),Om(t,i);const s=r?Jm(t,e):void 0;return zi=!1,s}function Jm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=uf(new Proxy(t.ctx,xm));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?eg(t):null;Zn(t),ui();const s=qt(i,t,0,[t.props,r]);if(fi(),mn(),Ku(s)){if(s.then(mn,mn),e)return s.then(o=>{rc(t,o,e)}).catch(o=>{Cs(o,t,0)});t.asyncDep=s}else rc(t,s,e)}else Bf(t,e)}function rc(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=pf(e)),Bf(t,n)}let sc;function Bf(t,e,n){const i=t.type;if(!t.render){if(!e&&sc&&!i.render){const r=i.template||Na(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=$e($e({isCustomElement:s,delimiters:a},o),l);i.render=sc(r,c)}}t.render=i.render||st}Zn(t),ui(),Im(t),fi(),mn()}function Zm(t){return new Proxy(t.attrs,{get(e,n){return Ye(t,"get","$attrs"),e[n]}})}function eg(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=Zm(t))},slots:t.slots,emit:t.emit,expose:e}}function Ma(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(pf(uf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Yr)return Yr[n](t)}}))}function tg(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function ng(t){return V(t)&&"__vccOpts"in t}const ve=(t,e)=>Kp(t,e,zi);function Ts(t,e,n){const i=arguments.length;return i===2?_e(e)&&!z(e)?To(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&To(n)&&(n=[n]),Ee(t,e,n))}const ig="3.2.39",rg="http://www.w3.org/2000/svg",un=typeof document<"u"?document:null,oc=un&&un.createElement("template"),sg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?un.createElementNS(rg,t):un.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>un.createTextNode(t),createComment:t=>un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{oc.innerHTML=i?`<svg>${t}</svg>`:t;const a=oc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function og(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ag(t,e,n){const i=t.style,r=Re(n);if(n&&!r){for(const s in n)Ao(i,s,n[s]);if(e&&!Re(e))for(const s in e)n[s]==null&&Ao(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const ac=/\s*!important$/;function Ao(t,e,n){if(z(n))n.forEach(i=>Ao(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=lg(t,e);ac.test(n)?t.setProperty(ci(i),n.replace(ac,""),"important"):t[i]=n}}const lc=["Webkit","Moz","ms"],Qs={};function lg(t,e){const n=Qs[e];if(n)return n;let i=wt(e);if(i!=="filter"&&i in t)return Qs[e]=i;i=Es(i);for(let r=0;r<lc.length;r++){const s=lc[r]+i;if(s in t)return Qs[e]=s}return e}const cc="http://www.w3.org/1999/xlink";function cg(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(cc,e.slice(6,e.length)):t.setAttributeNS(cc,e,n);else{const s=ip(e);n==null||s&&!Vu(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function ug(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Vu(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Uf,fg]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ko=0;const dg=Promise.resolve(),hg=()=>{ko=0},pg=()=>ko||(dg.then(hg),ko=Uf());function mg(t,e,n,i){t.addEventListener(e,n,i)}function gg(t,e,n,i){t.removeEventListener(e,n,i)}function _g(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=vg(e);if(i){const c=s[e]=yg(i,r);mg(t,a,c,l)}else o&&(gg(t,a,o,l),s[e]=void 0)}}const uc=/(?:Once|Passive|Capture)$/;function vg(t){let e;if(uc.test(t)){e={};let i;for(;i=t.match(uc);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ci(t.slice(2)),e]}function yg(t,e){const n=i=>{const r=i.timeStamp||Uf();(fg||r>=n.attached-1)&&ot(bg(i,n.value),e,5,[i])};return n.value=t,n.attached=pg(),n}function bg(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const fc=/^on[a-z]/,Eg=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?og(t,i,r):e==="style"?ag(t,n,i):vs(e)?_a(e)||_g(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wg(t,e,i,r))?ug(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),cg(t,e,i,r))};function wg(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&fc.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||fc.test(e)&&Re(n)?!1:e in t}const Cg=$e({patchProp:Eg},sg);let dc;function xg(){return dc||(dc=Fm(Cg))}const Ig=(...t)=>{const e=xg().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Sg(i);if(!r)return;const s=e._component;!V(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Sg(t){return Re(t)?document.querySelector(t):t}const cr=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Tg={name:"Header",props:{count:Number}},Ag={class:"header"},kg=qe("h1",{class:"title"},"Habit Tracker",-1),Ng={class:"count"};function Rg(t,e,n,i,r,s){const o=zn("font-awesome-icon");return bt(),At("header",Ag,[Ee(o,{icon:"fa-solid fa-leaf",class:"header-icon"}),kg,qe("p",Ng,go(n.count),1)])}const Pg=cr(Tg,[["render",Rg]]);const Og={name:"HabitAddForm",data(){return{habit:""}},methods:{addHabit(t){t.preventDefault(),this.$emit("add",this.$refs.habit.value),this.$refs.habit.value=""}}},Mg={class:"add-form",type:"text",required:"",placeholder:"Enter Your Habit",ref:"habit"},Dg=qe("button",{type:"submit",class:"add-button"},"Add",-1);function Lg(t,e,n,i,r,s){return bt(),At("form",{class:"add-form-container",onSubmit:e[0]||(e[0]=(...o)=>s.addHabit&&s.addHabit(...o))},[qe("input",Mg,null,512),Dg],32)}const Fg=cr(Og,[["render",Lg]]);const Hg={name:"Habit",props:{id:Number,name:String,count:Number},methods:{deleteHabit(t){this.$emit("delete",t)},increment(t){this.$emit("increase",t)},decrement(t){this.$emit("decrease",t)}}},$g={class:"habit"},Bg={class:"count"};function Ug(t,e,n,i,r,s){const o=zn("font-awesome-icon");return bt(),At("div",null,[qe("span",$g,go(n.name),1),qe("span",Bg,go(n.count),1),qe("button",{class:"icon-button",onClick:e[0]||(e[0]=a=>s.increment(n.id))},[Ee(o,{class:"icon plus-icon",icon:"fa-solid fa-square-plus"})]),qe("button",{class:"icon-button",onClick:e[1]||(e[1]=a=>s.decrement(n.id))},[Ee(o,{class:"icon minus-icon",icon:"fa-solid fa-square-minus"})]),qe("button",{class:"icon-button",onClick:e[2]||(e[2]=a=>s.deleteHabit(n.id))},[Ee(o,{class:"icon delete-icon",icon:"fa-solid fa-trash"})])])}const Wg=cr(Hg,[["render",Ug]]);const jg={name:"Habits",components:{Habit:Wg},props:{habits:Array},methods:{onDelete(t){this.$emit("delete",t)},onIncrease(t){this.$emit("increase",t)},onDecrease(t){this.$emit("decrease",t)}},computed:{count(){return this.habits.length===0}}},zg={class:"habit-list"},Vg={key:0};function qg(t,e,n,i,r,s){const o=zn("Habit");return bt(),At("div",null,[(bt(!0),At(gt,null,Cm(n.habits,a=>(bt(),At("div",zg,[Ee(o,{id:a.id,name:a.name,count:a.count,onDelete:s.onDelete,onIncrease:s.onIncrease,onDecrease:s.onDecrease},null,8,["id","name","count","onDelete","onIncrease","onDecrease"])]))),256)),s.count?(bt(),At("p",Vg,"there's no habits")):qm("",!0)])}const Yg=cr(jg,[["render",qg],["__scopeId","data-v-dc290885"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw di(e)},di=function(t){return new Error("Firebase Database ("+Wf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Kg=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),i.push(n[u],n[f],n[d],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw Error();const d=s<<2|a>>4;if(i.push(d),c!==64){const p=a<<4&240|c>>2;if(i.push(p),f!==64){const _=c<<6&192|f;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},zf=function(t){const e=jf(t);return Da.encodeByteArray(e,!0)},Gr=function(t){return zf(t).replace(/\./g,"")},No=function(t){try{return Da.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t){return Vf(void 0,t)}function Vf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Qg(n)||(t[n]=Vf(t[n],e[n]));return t}function Qg(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xg())}function Jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yf(){return Wf.NODE_ADMIN===!0}function Zg(){return typeof indexedDB=="object"}function e_(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function t_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=()=>t_().__FIREBASE_DEFAULTS__,i_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},r_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&No(t[1]);return e&&JSON.parse(e)},Kf=()=>{try{return n_()||i_()||r_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},s_=t=>{var e,n;return(n=(e=Kf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},o_=t=>{const e=s_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},a_=()=>{var t;return(t=Kf())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gr(JSON.stringify(n)),Gr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="FirebaseError";class fr extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=c_,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gf.prototype.create)}}class Gf{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?u_(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new fr(r,a,i)}}function u_(t,e){return t.replace(f_,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const f_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){return JSON.parse(t)}function Ne(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Vi(No(s[0])||""),n=Vi(No(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},d_=function(t){const e=Qf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},h_=function(t){const e=Qf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ei(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function hc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qr(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Ro(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(pc(s)&&pc(o)){if(!Ro(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function pc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function As(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,I(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ks=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t){return t&&t._delegate?t._delegate:t}class qi{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ur;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(y_(e))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=an){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=an){return this.instances.has(e)}getOptions(e=an){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:v_(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=an){return this.component?this.component.multipleInstances?e:an:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function v_(t){return t===an?void 0:t}function y_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new __(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const E_={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},w_=ue.INFO,C_={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},x_=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=C_[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xf{constructor(e){this.name=e,this._logLevel=w_,this._logHandler=x_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?E_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const I_=(t,e)=>e.some(n=>t instanceof n);let mc,gc;function S_(){return mc||(mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T_(){return gc||(gc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jf=new WeakMap,Po=new WeakMap,Zf=new WeakMap,Xs=new WeakMap,La=new WeakMap;function A_(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kt(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jf.set(n,t)}).catch(()=>{}),La.set(e,t),e}function k_(t){if(Po.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Po.set(t,e)}let Oo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Po.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function N_(t){Oo=t(Oo)}function R_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Js(this),e,...n);return Zf.set(i,e.sort?e.sort():[e]),Kt(i)}:T_().includes(t)?function(...e){return t.apply(Js(this),e),Kt(Jf.get(this))}:function(...e){return Kt(t.apply(Js(this),e))}}function P_(t){return typeof t=="function"?R_(t):(t instanceof IDBTransaction&&k_(t),I_(t,S_())?new Proxy(t,Oo):t)}function Kt(t){if(t instanceof IDBRequest)return A_(t);if(Xs.has(t))return Xs.get(t);const e=P_(t);return e!==t&&(Xs.set(t,e),La.set(e,t)),e}const Js=t=>La.get(t);function O_(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Kt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Kt(o.result),l.oldVersion,l.newVersion,Kt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const M_=["get","getKey","getAll","getAllKeys","count"],D_=["put","add","delete","clear"],Zs=new Map;function _c(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zs.get(e))return Zs.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=D_.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||M_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Zs.set(e,s),s}N_(t=>({...t,get:(e,n,i)=>_c(e,n)||t.get(e,n,i),has:(e,n)=>!!_c(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(F_(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function F_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mo="@firebase/app",vc="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new Xf("@firebase/app"),H_="@firebase/app-compat",$_="@firebase/analytics-compat",B_="@firebase/analytics",U_="@firebase/app-check-compat",W_="@firebase/app-check",j_="@firebase/auth",z_="@firebase/auth-compat",V_="@firebase/database",q_="@firebase/database-compat",Y_="@firebase/functions",K_="@firebase/functions-compat",G_="@firebase/installations",Q_="@firebase/installations-compat",X_="@firebase/messaging",J_="@firebase/messaging-compat",Z_="@firebase/performance",ev="@firebase/performance-compat",tv="@firebase/remote-config",nv="@firebase/remote-config-compat",iv="@firebase/storage",rv="@firebase/storage-compat",sv="@firebase/firestore",ov="@firebase/firestore-compat",av="firebase",lv="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="[DEFAULT]",cv={[Mo]:"fire-core",[H_]:"fire-core-compat",[B_]:"fire-analytics",[$_]:"fire-analytics-compat",[W_]:"fire-app-check",[U_]:"fire-app-check-compat",[j_]:"fire-auth",[z_]:"fire-auth-compat",[V_]:"fire-rtdb",[q_]:"fire-rtdb-compat",[Y_]:"fire-fn",[K_]:"fire-fn-compat",[G_]:"fire-iid",[Q_]:"fire-iid-compat",[X_]:"fire-fcm",[J_]:"fire-fcm-compat",[Z_]:"fire-perf",[ev]:"fire-perf-compat",[tv]:"fire-rc",[nv]:"fire-rc-compat",[iv]:"fire-gcs",[rv]:"fire-gcs-compat",[sv]:"fire-fst",[ov]:"fire-fst-compat","fire-js":"fire-js",[av]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Map,Lo=new Map;function uv(t,e){try{t.container.addComponent(e)}catch(n){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jr(t){const e=t.name;if(Lo.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;Lo.set(e,t);for(const n of Xr.values())uv(n,t);return!0}function fv(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new Gf("app","Firebase",dv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=lv;function ed(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Do,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Gt.create("bad-app-name",{appName:String(r)});if(n||(n=a_()),!n)throw Gt.create("no-options");const s=Xr.get(r);if(s){if(Ro(n,s.options)&&Ro(i,s.config))return s;throw Gt.create("duplicate-app",{appName:r})}const o=new b_(r);for(const l of Lo.values())o.addComponent(l);const a=new hv(n,i,o);return Xr.set(r,a),a}function mv(t=Do){const e=Xr.get(t);if(!e&&t===Do)return ed();if(!e)throw Gt.create("no-app",{appName:t});return e}function Vn(t,e,n){var i;let r=(i=cv[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(a.join(" "));return}Jr(new qi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="firebase-heartbeat-database",_v=1,Yi="firebase-heartbeat-store";let eo=null;function td(){return eo||(eo=O_(gv,_v,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yi)}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),eo}async function vv(t){var e;try{return(await td()).transaction(Yi).objectStore(Yi).get(nd(t))}catch(n){if(n instanceof fr)vn.warn(n.message);else{const i=Gt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});vn.warn(i.message)}}}async function yc(t,e){var n;try{const r=(await td()).transaction(Yi,"readwrite");return await r.objectStore(Yi).put(e,nd(t)),r.done}catch(i){if(i instanceof fr)vn.warn(i.message);else{const r=Gt.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});vn.warn(r.message)}}}function nd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=1024,bv=30*24*60*60*1e3;class Ev{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cv(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=bv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bc(),{heartbeatsToSend:n,unsentEntries:i}=wv(this._heartbeatsCache.heartbeats),r=Gr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function bc(){return new Date().toISOString().substring(0,10)}function wv(t,e=yv){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Ec(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ec(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Cv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zg()?e_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ec(t){return Gr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t){Jr(new qi("platform-logger",e=>new L_(e),"PRIVATE")),Jr(new qi("heartbeat",e=>new Ev(e),"PRIVATE")),Vn(Mo,vc,t),Vn(Mo,vc,"esm2017"),Vn("fire-js","")}xv("");var Iv="firebase",Sv="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(Iv,Sv,"app");const wc="@firebase/database",Cc="0.13.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id="";function Tv(t){id=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ne(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Vi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Av(e)}}catch{}return new kv},fn=rd("localStorage"),Fo=rd("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Xf("@firebase/database"),Nv=function(){let t=1;return function(){return t++}}(),sd=function(t){const e=g_(t),n=new m_;n.update(e);const i=n.digest();return Da.encodeByteArray(i)},hr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=hr.apply(null,i):typeof i=="object"?e+=Ne(i):e+=i,e+=" "}return e};let gn=null,xc=!0;const Rv=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(qn.logLevel=ue.VERBOSE,gn=qn.log.bind(qn),e&&Fo.set("logging_enabled",!0)):typeof t=="function"?gn=t:(gn=null,Fo.remove("logging_enabled"))},Pe=function(...t){if(xc===!0&&(xc=!1,gn===null&&Fo.get("logging_enabled")===!0&&Rv(!0)),gn){const e=hr.apply(null,t);gn(e)}},pr=function(t){return function(...e){Pe(t,...e)}},Ho=function(...t){const e="FIREBASE INTERNAL ERROR: "+hr(...t);qn.error(e)},Pt=function(...t){const e=`FIREBASE FATAL ERROR: ${hr(...t)}`;throw qn.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+hr(...t);qn.warn(e)},Pv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Fa=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ov=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ti="[MIN_NAME]",yn="[MAX_NAME]",In=function(t,e){if(t===e)return 0;if(t===ti||e===yn)return-1;if(e===ti||t===yn)return 1;{const n=Ic(t),i=Ic(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Mv=function(t,e){return t===e?0:t<e?-1:1},bi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ne(e))},Ha=function(t){if(typeof t!="object"||t===null)return Ne(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ne(e[i]),n+=":",n+=Ha(t[e[i]]);return n+="}",n},od=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ad=function(t){I(!Fa(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Dv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Lv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Fv(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Hv=new RegExp("^-?(0*)\\d{1,10}$"),$v=-2147483648,Bv=2147483647,Ic=function(t){if(Hv.test(t)){const e=Number(t);if(e>=$v&&e<=Bv)return e}return null},hi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},Uv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ni=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class Yn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="5",ld="v",cd="s",ud="r",fd="f",dd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hd="ls",pd="p",$o="ac",md="websocket",gd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function zv(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vd(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let i;if(e===md)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===gd)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zv(t)&&(n.ns=t.namespace);const r=[];return Me(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(){this.counters_={}}incrementCounter(e,n=1){Ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Gg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to={},no={};function Ba(t){const e=t.toString();return to[e]||(to[e]=new Vv),to[e]}function qv(t,e){const n=t.toString();return no[n]||(no[n]=e()),no[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&hi(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="start",Kv="close",Gv="pLPCommand",Qv="pRTLPCB",yd="id",bd="pw",Ed="ser",Xv="cb",Jv="seg",Zv="ts",ey="d",ty="dframe",wd=1870,Cd=30,ny=wd-Cd,iy=25e3,ry=3e4;class Ln{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pr(e),this.stats_=Ba(n),this.urlFn=l=>(this.appCheckToken&&(l[$o]=this.appCheckToken),vd(n,gd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Yv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ry)),Ov(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ua((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sc)this.id=a,this.password=l;else if(o===Kv)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Sc]="t",i[Ed]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Xv]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ld]=$a,this.transportSessionId&&(i[cd]=this.transportSessionId),this.lastSessionId&&(i[hd]=this.lastSessionId),this.applicationId&&(i[pd]=this.applicationId),this.appCheckToken&&(i[$o]=this.appCheckToken),typeof location<"u"&&location.hostname&&dd.test(location.hostname)&&(i[ud]=fd);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ln.forceAllow_=!0}static forceDisallow(){Ln.forceDisallow_=!0}static isAvailable(){return Ln.forceAllow_?!0:!Ln.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Dv()&&!Lv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=zf(n),r=od(i,ny);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[ty]="t",i[yd]=e,i[bd]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ne(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ua{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nv(),window[Gv+this.uniqueCallbackIdentifier]=e,window[Qv+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ua.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Pe("frame writing exception"),a.stack&&Pe(a.stack),Pe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yd]=this.myID,e[bd]=this.myPW,e[Ed]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cd+i.length<=wd;){const o=this.pendingSegs.shift();i=i+"&"+Jv+r+"="+o.seg+"&"+Zv+r+"="+o.ts+"&"+ey+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(iy)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=16384,oy=45e3;let Zr=null;typeof MozWebSocket<"u"?Zr=MozWebSocket:typeof WebSocket<"u"&&(Zr=WebSocket);class et{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pr(this.connId),this.stats_=Ba(n),this.connURL=et.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[ld]=$a,typeof location<"u"&&location.hostname&&dd.test(location.hostname)&&(o[ud]=fd),n&&(o[cd]=n),i&&(o[hd]=i),r&&(o[$o]=r),s&&(o[pd]=s),vd(e,md,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fn.set("previous_websocket_failure",!0);try{let i;Yf(),this.mySock=new Zr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Zr!==null&&!et.forceDisallow_}static previouslyFailed(){return fn.isInMemoryStorage||fn.get("previous_websocket_failure")===!0}markConnectionHealthy(){fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Vi(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=od(n,sy);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}et.responsesRequiredToBeHealthy=2;et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ln,et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=et&&et.isAvailable();let i=n&&!et.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[et];else{const r=this.transports_=[];for(const s of Ki.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Ki.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ki.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=6e4,ly=5e3,cy=10*1024,uy=100*1024,io="t",Tc="d",fy="s",Ac="r",dy="e",kc="o",Nc="a",Rc="n",Pc="p",hy="h";class py{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pr("c:"+this.id+":"),this.transportManager_=new Ki(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ni(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(io in e){const n=e[io];n===Nc?this.upgradeIfSecondaryHealthy_():n===Ac?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===kc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=bi("t",e),i=bi("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=bi("t",e),i=bi("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=bi(io,e);if(Tc in e){const i=e[Tc];if(n===hy)this.onHandshake_(i);else if(n===Rc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fy?this.onConnectionShutdown_(i):n===Ac?this.onReset_(i):n===dy?Ho("Server Error: "+i):n===kc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ho("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$a!==i&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ni(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ay))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ni(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ly))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Id{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new es}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=32,Mc=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ie("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Jt(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function Wa(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function my(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Gi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Sd(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function be(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ie)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new ie(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function We(t,e){const n=Y(t),i=Y(e);if(n===null)return e;if(n===i)return We(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gy(t,e){const n=Gi(t,0),i=Gi(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=In(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function ja(t,e){if(Jt(t)!==Jt(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Qe(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Jt(t)>Jt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class _y{constructor(e,n){this.errorPrefix_=n,this.parts_=Gi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ks(this.parts_[i]);Td(this)}}function vy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ks(e),Td(t)}function yy(t){const e=t.parts_.pop();t.byteLength_-=ks(e),t.parts_.length>0&&(t.byteLength_-=1)}function Td(t){if(t.byteLength_>Mc)throw new Error(t.errorPrefix_+"has a key path longer than "+Mc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Oc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Oc+") or object contains a cycle "+ln(t))}function ln(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends Id{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new za}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=1e3,by=60*5*1e3,Dc=30*1e3,Ey=1.3,wy=3e4,Cy="server_kill",Lc=3;class Nt extends xd{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Nt.nextPersistentConnectionId_++,this.log_=pr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ei,this.maxReconnectDelay_=by,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Yf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");za.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&es.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Ne(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new ur,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Nt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ct(e,"w")){const i=ei(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||h_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=d_(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ne(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ho("Unrecognized action received from server: "+Ne(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wy&&(this.reconnectDelay_=Ei),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ey)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Nt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Pe("getToken() completed but was canceled"):(Pe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new py(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{He(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Cy)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&He(f),l())}}}interrupt(e){Pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hc(this.interruptReasons_)&&(this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Ha(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new ie(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lc&&(this.reconnectDelay_=Dc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+id.replace(/\./g,"-")]=1,qf()?e["framework.cordova"]=1:Jg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=es.getInstance().currentlyOnline();return hc(this.interruptReasons_)&&e}}Nt.nextPersistentConnectionId_=0;Nt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new K(ti,e),r=new K(ti,n);return this.compare(i,r)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ir;class Ad extends Ns{static get __EMPTY_NODE(){return Ir}static set __EMPTY_NODE(e){Ir=e}compare(e,n){return In(e.name,n.name)}isDefinedOn(e){throw di("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(yn,Ir)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Ir)}toString(){return".key"}}const Kn=new Ad;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ae{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Ae.RED,this.left=r!=null?r:je.EMPTY_NODE,this.right=s!=null?s:je.EMPTY_NODE}copy(e,n,i,r,s){return new Ae(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ae.RED=!0;Ae.BLACK=!1;class xy{copy(e,n,i,r,s){return this}insert(e,n,i){return new Ae(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class je{constructor(e,n=je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ae.BLACK,null,null))}remove(e){return new je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ae.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Sr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Sr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Sr(this.root_,null,this.comparator_,!0,e)}}je.EMPTY_NODE=new xy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t,e){return In(t.name,e.name)}function Va(t,e){return In(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo;function Sy(t){Bo=t}const kd=function(t){return typeof t=="number"?"number:"+ad(t):"string:"+t},Nd=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ct(e,".sv"),"Priority must be a string or number.")}else I(t===Bo||t.isEmpty(),"priority of unexpected type.");I(t===Bo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nd(this.priorityNode_)}static set __childrenNodeConstructor(e){Fc=e}static get __childrenNodeConstructor(){return Fc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:Y(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Y(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||Jt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kd(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ad(this.value_):e+=this.value_,this.lazyHash_=sd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=Te.VALUE_TYPE_ORDER.indexOf(n),s=Te.VALUE_TYPE_ORDER.indexOf(i);return I(r>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rd,Pd;function Ty(t){Rd=t}function Ay(t){Pd=t}class ky extends Ns{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?In(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(yn,new Te("[PRIORITY-POST]",Pd))}makePost(e,n){const i=Rd(e);return new K(n,new Te("[PRIORITY-POST]",i))}toString(){return".priority"}}const we=new ky;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=Math.log(2);class Ry{constructor(e){const n=s=>parseInt(Math.log(s)/Ny,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ts=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new Ae(d,f.node,Ae.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=r(l,p),S=r(p+1,c);return f=t[p],d=n?n(f):f,new Ae(d,f.node,Ae.BLACK,_,S)}},s=function(l){let c=null,u=null,f=t.length;const d=function(_,S){const x=f-_,v=f;f-=_;const w=r(x+1,v),O=t[x],B=n?n(O):O;p(new Ae(B,O.node,S,null,w))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const S=l.nextBitIsOne(),x=Math.pow(2,l.count-(_+1));S?d(x,Ae.BLACK):(d(x,Ae.BLACK),d(x,Ae.RED))}return u},o=new Ry(t.length),a=s(o);return new je(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro;const Pn={};class kt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Pn&&we,"ChildrenNode.ts has not been loaded"),ro=ro||new kt({".priority":Pn},{".priority":we}),ro}get(e){const n=ei(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof je?n:null}hasIndex(e){return Ct(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Kn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(K.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=ts(i,e.getCompare()):a=Pn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new kt(u,c)}addToIndexes(e,n){const i=Qr(this.indexes_,(r,s)=>{const o=ei(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),r===Pn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(K.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ts(a,o.getCompare())}else return Pn;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new K(e.name,a))),l.insert(e,e.node)}});return new kt(i,this.indexSet_)}removeFromIndexes(e,n){const i=Qr(this.indexes_,r=>{if(r===Pn)return r;{const s=n.get(e.name);return s?r.remove(new K(e.name,s)):r}});return new kt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class U{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Nd(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wi||(wi=new U(new je(Va),null,kt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wi}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wi:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(de(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new K(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?wi:this.priorityNode_;return new U(r,o,s)}}updateChild(e,n){const i=Y(e);if(i===null)return n;{I(Y(e)!==".priority"||Jt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(de(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(we,(o,a)=>{n[o]=a.val(e),i++,s&&U.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kd(this.getPriority().val())+":"),this.forEachChild(we,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":sd(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new K(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,K.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mr?-1:0}withIndex(e){if(e===Kn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Kn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(we),r=n.getIterator(we);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kn?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Py extends U{constructor(){super(new je(Va),U.EMPTY_NODE,kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const mr=new Py;Object.defineProperties(K,{MIN:{value:new K(ti,U.EMPTY_NODE)},MAX:{value:new K(yn,mr)}});Ad.__EMPTY_NODE=U.EMPTY_NODE;Te.__childrenNodeConstructor=U;Sy(mr);Ay(mr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=!0;function ke(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,ke(e))}if(!(t instanceof Array)&&Oy){const n=[];let i=!1;if(Me(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ke(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new K(o,l)))}}),n.length===0)return U.EMPTY_NODE;const s=ts(n,Iy,o=>o.name,Va);if(i){const o=ts(n,we.getCompare());return new U(s,ke(e),new kt({".priority":o},{".priority":we}))}else return new U(s,ke(e),kt.Default)}else{let n=U.EMPTY_NODE;return Me(t,(i,r)=>{if(Ct(t,i)&&i.substring(0,1)!=="."){const s=ke(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(ke(e))}}Ty(ke);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My extends Ns{constructor(e){super(),this.indexPath_=e,I(!G(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?In(e.name,n.name):s}makePost(e,n){const i=ke(e),r=U.EMPTY_NODE.updateChild(this.indexPath_,i);return new K(n,r)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,mr);return new K(yn,e)}toString(){return Gi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy extends Ns{compare(e,n){const i=e.node.compareTo(n.node);return i===0?In(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const i=ke(e);return new K(n,i)}toString(){return".value"}}const Ly=new Dy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){return{type:"value",snapshotNode:t}}function ni(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Fy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Qi(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ni(n,i)):o.trackChildChange(Xi(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(we,(r,s)=>{n.hasChild(r)||i.trackChildChange(Qi(r,s))}),n.isLeafNode()||n.forEachChild(we,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(Xi(r,s,o))}else i.trackChildChange(ni(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.indexedFilter_=new qa(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ji.getStartPost_(e),this.endPost_=Ji.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,s,o){return this.matches(new K(n,i))||(i=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=U.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(U.EMPTY_NODE);const s=this;return n.forEachChild(we,(o,a)=>{s.matches(new K(o,a))||(r=r.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.rangedFilter_=new Ji(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new K(n,i))||(i=U.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=U.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(U.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(d,p)=>f(p,d)}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const f=l.getNext();!u&&a(s,f)<=0&&(u=!0),u&&c<this.limit_&&a(f,o)<=0?c++:r=r.updateImmediateChild(f.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,p)=>f(p,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new K(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!i.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Xi(n,i,f)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(Qi(n,f));const S=a.updateImmediateChild(n,U.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(ni(d.name,d.node)),S.updateImmediateChild(d.name,d.node)):S}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Qi(c.name,c.node)),s.trackChildChange(ni(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,U.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=we}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ti}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:yn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===we}copy(){const e=new Ya;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $y(t){return t.loadsAllData()?new qa(t.getIndex()):t.hasLimit()?new Hy(t):new Ji(t)}function Hc(t){const e={};if(t.isDefault())return e;let n;return t.index_===we?n="$priority":t.index_===Ly?n="$value":t.index_===Kn?n="$key":(I(t.index_ instanceof My,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ne(n),t.startSet_&&(e.startAt=Ne(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ne(t.indexStartName_))),t.endSet_&&(e.endAt=Ne(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ne(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $c(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==we&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends xd{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=pr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ns.getListenId_(e,i),a={};this.listens_[o]=a;const l=Hc(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,i),ei(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const i=ns.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Hc(e._queryParams),i=e._path.toString(),r=new ur;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+p_(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Vi(a.responseText)}catch{He("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(){return{value:null,children:new Map}}function Md(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Y(e);t.children.has(i)||t.children.set(i,is());const r=t.children.get(i);e=de(e),Md(r,e,n)}}function Uo(t,e,n){t.value!==null?n(e,t.value):Uy(t,(i,r)=>{const s=new ie(e.toString()+"/"+i);Uo(r,s,n)})}function Uy(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=10*1e3,jy=30*1e3,zy=5*60*1e3;class Vy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Wy(e);const i=Bc+(jy-Bc)*Math.random();Ni(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Me(e,(r,s)=>{s>0&&Ct(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Ni(this.reportStats_.bind(this),Math.floor(Math.random()*2*zy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function Ka(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ga(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qa(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=it.ACK_USER_WRITE,this.source=Ka()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new rs(Z(),n,this.revert)}}else return I(Y(this.path)===e,"operationForChild called for unrelated child."),new rs(de(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.source=e,this.path=n,this.type=it.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Zi(this.source,Z()):new Zi(this.source,de(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=it.OVERWRITE}operationForChild(e){return G(this.path)?new bn(this.source,Z(),this.snap.getImmediateChild(e)):new bn(this.source,de(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=it.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new bn(this.source,Z(),n.value):new ii(this.source,Z(),n)}else return I(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ii(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yy(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Fy(o.childName,o.snapshotNode))}),Ci(t,r,"child_removed",e,i,n),Ci(t,r,"child_added",e,i,n),Ci(t,r,"child_moved",s,i,n),Ci(t,r,"child_changed",e,i,n),Ci(t,r,"value",e,i,n),r}function Ci(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Gy(t,a,l)),o.forEach(a=>{const l=Ky(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Ky(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Gy(t,e,n){if(e.childName==null||n.childName==null)throw di("Should only compare child_ events.");const i=new K(e.childName,e.snapshotNode),r=new K(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t,e){return{eventCache:t,serverCache:e}}function Ri(t,e,n,i){return Rs(new En(e,n,i),t.serverCache)}function Dd(t,e,n,i){return Rs(t.eventCache,new En(e,n,i))}function Wo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function wn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so;const Qy=()=>(so||(so=new je(Mv)),so);class ce{constructor(e,n=Qy()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return Me(e,(i,r)=>{n=n.set(new ie(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(G(e))return null;{const i=Y(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(de(e),n);return s!=null?{path:be(new ie(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=Y(e),i=this.children.get(n);return i!==null?i.subtree(de(e)):new ce(null)}}set(e,n){if(G(e))return new ce(n,this.children);{const i=Y(e),s=(this.children.get(i)||new ce(null)).set(de(e),n),o=this.children.insert(i,s);return new ce(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=Y(e),i=this.children.get(n);if(i){const r=i.remove(de(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new ce(null):new ce(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=Y(e),i=this.children.get(n);return i?i.get(de(e)):null}}setTree(e,n){if(G(e))return n;{const i=Y(e),s=(this.children.get(i)||new ce(null)).setTree(de(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ce(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(be(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(G(e))return null;{const s=Y(e),o=this.children.get(s);return o?o.findOnPath_(de(e),be(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,i){if(G(e))return this;{this.value&&i(n,this.value);const r=Y(e),s=this.children.get(r);return s?s.foreachOnPath_(de(e),be(n,r),i):new ce(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(be(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.writeTree_=e}static empty(){return new at(new ce(null))}}function Pi(t,e,n){if(G(e))return new at(new ce(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=We(r,e);return s=s.updateChild(o,n),new at(t.writeTree_.set(r,s))}else{const r=new ce(n),s=t.writeTree_.setTree(e,r);return new at(s)}}}function jo(t,e,n){let i=t;return Me(n,(r,s)=>{i=Pi(i,be(e,r),s)}),i}function Uc(t,e){if(G(e))return at.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new at(n)}}function zo(t,e){return Sn(t,e)!=null}function Sn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(We(n.path,e)):null}function Wc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(we,(i,r)=>{e.push(new K(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new K(i,r.value))}),e}function Qt(t,e){if(G(e))return t;{const n=Sn(t,e);return n!=null?new at(new ce(n)):new at(t.writeTree_.subtree(e))}}function Vo(t){return t.writeTree_.isEmpty()}function ri(t,e){return Ld(Z(),t.writeTree_,e)}function Ld(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=Ld(be(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(be(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(t,e){return Bd(e,t)}function Xy(t,e,n,i,r){I(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Pi(t.visibleWrites,e,n)),t.lastWriteId=i}function Jy(t,e,n,i){I(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=jo(t.visibleWrites,e,n),t.lastWriteId=i}function Zy(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function eb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&tb(a,i.path)?r=!1:Qe(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return nb(t),!0;if(i.snap)t.visibleWrites=Uc(t.visibleWrites,i.path);else{const a=i.children;Me(a,l=>{t.visibleWrites=Uc(t.visibleWrites,be(i.path,l))})}return!0}else return!1}function tb(t,e){if(t.snap)return Qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qe(be(t.path,n),e))return!0;return!1}function nb(t){t.visibleWrites=Fd(t.allWrites,ib,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ib(t){return t.visible}function Fd(t,e,n){let i=at.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Qe(n,o)?(a=We(n,o),i=Pi(i,a,s.snap)):Qe(o,n)&&(a=We(o,n),i=Pi(i,Z(),s.snap.getChild(a)));else if(s.children){if(Qe(n,o))a=We(n,o),i=jo(i,a,s.children);else if(Qe(o,n))if(a=We(o,n),G(a))i=jo(i,Z(),s.children);else{const l=ei(s.children,Y(a));if(l){const c=l.getChild(de(a));i=Pi(i,Z(),c)}}}else throw di("WriteRecord should have .snap or .children")}}return i}function Hd(t,e,n,i,r){if(!i&&!r){const s=Sn(t.visibleWrites,e);if(s!=null)return s;{const o=Qt(t.visibleWrites,e);if(Vo(o))return n;if(n==null&&!zo(o,Z()))return null;{const a=n||U.EMPTY_NODE;return ri(o,a)}}}else{const s=Qt(t.visibleWrites,e);if(!r&&Vo(s))return n;if(!r&&n==null&&!zo(s,Z()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Qe(c.path,e)||Qe(e,c.path))},a=Fd(t.allWrites,o,e),l=n||U.EMPTY_NODE;return ri(a,l)}}}function rb(t,e,n){let i=U.EMPTY_NODE;const r=Sn(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(we,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Qt(t.visibleWrites,e);return n.forEachChild(we,(o,a)=>{const l=ri(Qt(s,new ie(o)),a);i=i.updateImmediateChild(o,l)}),Wc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Qt(t.visibleWrites,e);return Wc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function sb(t,e,n,i,r){I(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=be(e,n);if(zo(t.visibleWrites,s))return null;{const o=Qt(t.visibleWrites,s);return Vo(o)?r.getChild(n):ri(o,r.getChild(n))}}function ob(t,e,n,i){const r=be(e,n),s=Sn(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Qt(t.visibleWrites,r);return ri(o,i.getNode().getImmediateChild(n))}else return null}function ab(t,e){return Sn(t.visibleWrites,e)}function lb(t,e,n,i,r,s,o){let a;const l=Qt(t.visibleWrites,e),c=Sn(l,Z());if(c!=null)a=c;else if(n!=null)a=ri(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=d.getNext();for(;p&&u.length<r;)f(p,i)!==0&&u.push(p),p=d.getNext();return u}else return[]}function cb(){return{visibleWrites:at.empty(),allWrites:[],lastWriteId:-1}}function ss(t,e,n,i){return Hd(t.writeTree,t.treePath,e,n,i)}function Ja(t,e){return rb(t.writeTree,t.treePath,e)}function jc(t,e,n,i){return sb(t.writeTree,t.treePath,e,n,i)}function os(t,e){return ab(t.writeTree,be(t.treePath,e))}function ub(t,e,n,i,r,s){return lb(t.writeTree,t.treePath,e,n,i,r,s)}function Za(t,e,n){return ob(t.writeTree,t.treePath,e,n)}function $d(t,e){return Bd(be(t.treePath,e),t.writeTree)}function Bd(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Xi(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,Qi(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,ni(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Xi(i,e.snapshotNode,r.oldSnap));else throw di("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Ud=new db;class el{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new En(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Za(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:wn(this.viewCache_),s=ub(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(t){return{filter:t}}function pb(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function mb(t,e,n,i,r){const s=new fb;let o,a;if(n.type===it.OVERWRITE){const c=n;c.source.fromUser?o=qo(t,e,c.path,c.snap,i,r,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=as(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===it.MERGE){const c=n;c.source.fromUser?o=_b(t,e,c.path,c.children,i,r,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Yo(t,e,c.path,c.children,i,r,a,s))}else if(n.type===it.ACK_USER_WRITE){const c=n;c.revert?o=bb(t,e,c.path,i,r,s):o=vb(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===it.LISTEN_COMPLETE)o=yb(t,e,n.path,i,s);else throw di("Unknown operation type: "+n.type);const l=s.getChanges();return gb(e,o,l),{viewCache:o,changes:l}}function gb(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Wo(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Od(Wo(e)))}}function Wd(t,e,n,i,r,s){const o=e.eventCache;if(os(i,n)!=null)return e;{let a,l;if(G(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=wn(e),u=c instanceof U?c:U.EMPTY_NODE,f=Ja(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=ss(i,wn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Y(n);if(c===".priority"){I(Jt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=jc(i,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=de(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=jc(i,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=Za(i,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,r,s):a=o.getNode()}}return Ri(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function as(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(G(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=Y(n);if(!l.isCompleteForPath(n)&&Jt(n)>1)return e;const _=de(n),x=l.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),p,x,_,Ud,null)}const f=Dd(e,c,l.isFullyInitialized()||G(n),u.filtersNodes()),d=new el(r,f,s);return Wd(t,f,n,r,d,a)}function qo(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new el(r,e,s);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Ri(e,c,!0,t.filter.filtersNodes());else{const f=Y(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Ri(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=de(n),p=a.getNode().getImmediateChild(f);let _;if(G(d))_=i;else{const S=u.getCompleteChild(f);S!=null?Wa(d)===".priority"&&S.getChild(Sd(d)).isEmpty()?_=S:_=S.updateChild(d,i):_=U.EMPTY_NODE}if(p.equals(_))l=e;else{const S=t.filter.updateChild(a.getNode(),f,_,d,u,o);l=Ri(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function zc(t,e){return t.eventCache.isCompleteForChild(e)}function _b(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=be(n,l);zc(e,Y(u))&&(a=qo(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=be(n,l);zc(e,Y(u))||(a=qo(t,a,u,c,r,s,o))}),a}function Vc(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Yo(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;G(n)?c=i:c=new ce(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),_=Vc(t,p,d);l=as(t,l,new ie(f),_,r,s,o,a)}}),c.children.inorderTraversal((f,d)=>{const p=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!p){const _=e.serverCache.getNode().getImmediateChild(f),S=Vc(t,_,d);l=as(t,l,new ie(f),S,r,s,o,a)}}),l}function vb(t,e,n,i,r,s,o){if(os(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return as(t,e,n,l.getNode().getChild(n),r,s,a,o);if(G(n)){let c=new ce(null);return l.getNode().forEachChild(Kn,(u,f)=>{c=c.set(new ie(u),f)}),Yo(t,e,n,c,r,s,a,o)}else return e}else{let c=new ce(null);return i.foreach((u,f)=>{const d=be(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Yo(t,e,n,c,r,s,a,o)}}function yb(t,e,n,i,r){const s=e.serverCache,o=Dd(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return Wd(t,o,n,i,Ud,r)}function bb(t,e,n,i,r,s){let o;if(os(i,n)!=null)return e;{const a=new el(i,e,r),l=e.eventCache.getNode();let c;if(G(n)||Y(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ss(i,wn(e));else{const f=e.serverCache.getNode();I(f instanceof U,"serverChildren would be complete if leaf node"),u=Ja(i,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Y(n);let f=Za(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,de(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,U.EMPTY_NODE,de(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ss(i,wn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||os(i,Z())!=null,Ri(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new qa(i.getIndex()),s=$y(i);this.processor_=hb(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(U.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(U.EMPTY_NODE,a.getNode(),null),u=new En(l,o.isFullyInitialized(),r.filtersNodes()),f=new En(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Rs(f,u),this.eventGenerator_=new qy(this.query_)}get query(){return this.query_}}function wb(t){return t.viewCache_.serverCache.getNode()}function Cb(t,e){const n=wn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function qc(t){return t.eventRegistrations_.length===0}function xb(t,e){t.eventRegistrations_.push(e)}function Yc(t,e,n){const i=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function Kc(t,e,n,i){e.type===it.MERGE&&e.source.queryId!==null&&(I(wn(t.viewCache_),"We should always have a full cache before handling merges"),I(Wo(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=mb(t.processor_,r,e,n,i);return pb(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,jd(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Ib(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(we,(s,o)=>{i.push(ni(s,o))}),n.isFullyInitialized()&&i.push(Od(n.getNode())),jd(t,i,n.getNode(),e)}function jd(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return Yy(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls;class Sb{constructor(){this.views=new Map}}function Tb(t){I(!ls,"__referenceConstructor has already been defined"),ls=t}function Ab(){return I(ls,"Reference.ts has not been loaded"),ls}function kb(t){return t.views.size===0}function tl(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return I(s!=null,"SyncTree gave us an op for an invalid query."),Kc(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Kc(o,e,n,i));return s}}function Nb(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ss(n,r?i:null),l=!1;a?l=!0:i instanceof U?(a=Ja(n,i),l=!1):(a=U.EMPTY_NODE,l=!1);const c=Rs(new En(a,l,!1),new En(i,r,!1));return new Eb(e,c)}return o}function Rb(t,e,n,i,r,s){const o=Nb(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xb(o,n),Ib(o,n)}function Pb(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Zt(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Yc(c,n,i)),qc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Yc(l,n,i)),qc(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Zt(t)&&s.push(new(Ab())(e._repo,e._path)),{removed:s,events:o}}function zd(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Gn(t,e){let n=null;for(const i of t.views.values())n=n||Cb(i,e);return n}function Vd(t,e){if(e._queryParams.loadsAllData())return Ps(t);{const i=e._queryIdentifier;return t.views.get(i)}}function qd(t,e){return Vd(t,e)!=null}function Zt(t){return Ps(t)!=null}function Ps(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs;function Ob(t){I(!cs,"__referenceConstructor has already been defined"),cs=t}function Mb(){return I(cs,"Reference.ts has not been loaded"),cs}let Db=1;class Gc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=cb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yd(t,e,n,i,r){return Xy(t.pendingWriteTree_,e,n,i,r),r?pi(t,new bn(Ka(),e,n)):[]}function Lb(t,e,n,i){Jy(t.pendingWriteTree_,e,n,i);const r=ce.fromObject(n);return pi(t,new ii(Ka(),e,r))}function zt(t,e,n=!1){const i=Zy(t.pendingWriteTree_,e);if(eb(t.pendingWriteTree_,e)){let s=new ce(null);return i.snap!=null?s=s.set(Z(),!0):Me(i.children,o=>{s=s.set(new ie(o),!0)}),pi(t,new rs(i.path,s,n))}else return[]}function Os(t,e,n){return pi(t,new bn(Ga(),e,n))}function Fb(t,e,n){const i=ce.fromObject(n);return pi(t,new ii(Ga(),e,i))}function Hb(t,e){return pi(t,new Zi(Ga(),e))}function $b(t,e,n){const i=il(t,n);if(i){const r=rl(i),s=r.path,o=r.queryId,a=We(s,e),l=new Zi(Qa(o),a);return sl(t,s,l)}else return[]}function Ko(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||qd(o,e))){const l=Pb(o,e,n,i);kb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,p)=>Zt(p));if(u&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=Wb(d);for(let _=0;_<p.length;++_){const S=p[_],x=S.query,v=Qd(t,S);t.listenProvider_.startListening(Oi(x),us(t,x),v.hashFn,v.onComplete)}}}!f&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Oi(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Ms(d));t.listenProvider_.stopListening(Oi(d),p)}))}jb(t,c)}return a}function Bb(t,e,n,i){const r=il(t,i);if(r!=null){const s=rl(r),o=s.path,a=s.queryId,l=We(o,e),c=new bn(Qa(a),l,n);return sl(t,o,c)}else return[]}function Ub(t,e,n,i){const r=il(t,i);if(r){const s=rl(r),o=s.path,a=s.queryId,l=We(o,e),c=ce.fromObject(n),u=new ii(Qa(a),l,c);return sl(t,o,u)}else return[]}function Qc(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(d,p)=>{const _=We(d,r);s=s||Gn(p,_),o=o||Zt(p)});let a=t.syncPointTree_.get(r);a?(o=o||Zt(a),s=s||Gn(a,Z())):(a=new Sb,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=U.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,_)=>{const S=Gn(_,Z());S&&(s=s.updateImmediateChild(p,S))}));const c=qd(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ms(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=zb();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=Xa(t.pendingWriteTree_,r);let f=Rb(a,e,n,u,s,l);if(!c&&!o&&!i){const d=Vd(a,e);f=f.concat(Vb(t,e,d))}return f}function nl(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=We(o,e),c=Gn(a,l);if(c)return c});return Hd(r,e,s,n,!0)}function pi(t,e){return Kd(e,t.syncPointTree_,null,Xa(t.pendingWriteTree_,Z()))}function Kd(t,e,n,i){if(G(t.path))return Gd(t,e,n,i);{const r=e.get(Z());n==null&&r!=null&&(n=Gn(r,Z()));let s=[];const o=Y(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=$d(i,o);s=s.concat(Kd(a,l,c,u))}return r&&(s=s.concat(tl(r,t,i,n))),s}}function Gd(t,e,n,i){const r=e.get(Z());n==null&&r!=null&&(n=Gn(r,Z()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=$d(i,o),u=t.operationForChild(o);u&&(s=s.concat(Gd(u,a,l,c)))}),r&&(s=s.concat(tl(r,t,i,n))),s}function Qd(t,e){const n=e.query,i=us(t,n);return{hashFn:()=>(wb(e)||U.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?$b(t,n._path,i):Hb(t,n._path);{const s=Fv(r,n);return Ko(t,n,null,s)}}}}function us(t,e){const n=Ms(e);return t.queryToTagMap.get(n)}function Ms(t){return t._path.toString()+"$"+t._queryIdentifier}function il(t,e){return t.tagToQueryMap.get(e)}function rl(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function sl(t,e,n){const i=t.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const r=Xa(t.pendingWriteTree_,e);return tl(i,n,r,null)}function Wb(t){return t.fold((e,n,i)=>{if(n&&Zt(n))return[Ps(n)];{let r=[];return n&&(r=zd(n)),Me(i,(s,o)=>{r=r.concat(o)}),r}})}function Oi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Mb())(t._repo,t._path):t}function jb(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=Ms(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function zb(){return Db++}function Vb(t,e,n){const i=e._path,r=us(t,e),s=Qd(t,n),o=t.listenProvider_.startListening(Oi(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)I(!Zt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!G(c)&&u&&Zt(u))return[Ps(u).query];{let d=[];return u&&(d=d.concat(zd(u).map(p=>p.query))),Me(f,(p,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Oi(u),us(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ol(n)}node(){return this.node_}}class al{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new al(this.syncTree_,n)}node(){return nl(this.syncTree_,this.path_)}}const qb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xc=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Yb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Kb(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Yb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Kb=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const r=e.node();if(I(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},Xd=function(t,e,n,i){return ll(e,new al(n,t),i)},Jd=function(t,e,n){return ll(t,new ol(e),n)};function ll(t,e,n){const i=t.getPriority().val(),r=Xc(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Xc(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Te(a,ke(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Te(r))),o.forEachChild(we,(a,l)=>{const c=ll(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ul(t,e){let n=e instanceof ie?e:new ie(e),i=t,r=Y(n);for(;r!==null;){const s=ei(i.node.children,r)||{children:{},childCount:0};i=new cl(r,i,s),n=de(n),r=Y(n)}return i}function mi(t){return t.node.value}function Zd(t,e){t.node.value=e,Go(t)}function eh(t){return t.node.childCount>0}function Gb(t){return mi(t)===void 0&&!eh(t)}function Ds(t,e){Me(t.node.children,(n,i)=>{e(new cl(n,t,i))})}function th(t,e,n,i){n&&!i&&e(t),Ds(t,r=>{th(r,e,!0,i)}),n&&i&&e(t)}function Qb(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function gr(t){return new ie(t.parent===null?t.name:gr(t.parent)+"/"+t.name)}function Go(t){t.parent!==null&&Xb(t.parent,t.name,t)}function Xb(t,e,n){const i=Gb(n),r=Ct(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Go(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Go(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=/[\[\].#$\/\u0000-\u001F\u007F]/,Zb=/[\[\].#$\u0000-\u001F\u007F]/,oo=10*1024*1024,fl=function(t){return typeof t=="string"&&t.length!==0&&!Jb.test(t)},nh=function(t){return typeof t=="string"&&t.length!==0&&!Zb.test(t)},e0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),nh(t)},t0=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Fa(t)||t&&typeof t=="object"&&Ct(t,".sv")},n0=function(t,e,n,i){i&&e===void 0||Ls(As(t,"value"),e,n)},Ls=function(t,e,n){const i=n instanceof ie?new _y(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ln(i));if(typeof e=="function")throw new Error(t+"contains a function "+ln(i)+" with contents = "+e.toString());if(Fa(e))throw new Error(t+"contains "+e.toString()+" "+ln(i));if(typeof e=="string"&&e.length>oo/3&&ks(e)>oo)throw new Error(t+"contains a string greater than "+oo+" utf8 bytes "+ln(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Me(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!fl(o)))throw new Error(t+" contains an invalid key ("+o+") "+ln(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vy(i,o),Ls(t,a,i),yy(i)}),r&&s)throw new Error(t+' contains ".value" child '+ln(i)+" in addition to actual children.")}},i0=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=Gi(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!fl(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gy);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&Qe(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},r0=function(t,e,n,i){if(i&&e===void 0)return;const r=As(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];Me(e,(o,a)=>{const l=new ie(o);if(Ls(r,a,be(n,l)),Wa(l)===".priority"&&!t0(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),i0(r,s)},ih=function(t,e,n,i){if(!(i&&n===void 0)&&!nh(n))throw new Error(As(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},s0=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ih(t,e,n,i)},rh=function(t,e){if(Y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},o0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!e0(n))throw new Error(As(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fs(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!ja(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function sh(t,e,n){Fs(t,n),oh(t,i=>ja(i,e))}function lt(t,e,n){Fs(t,n),oh(t,i=>Qe(i,e)||Qe(e,i))}function oh(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(l0(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function l0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();gn&&Pe("event: "+n.toString()),hi(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="repo_interrupt",u0=25;class f0{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new a0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=is(),this.transactionQueueTree_=new cl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function d0(t,e,n){if(t.stats_=Ba(t.repoInfo_),t.forceRestClient_||Uv())t.server_=new ns(t.repoInfo_,(i,r,s,o)=>{Jc(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Zc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Nt(t.repoInfo_,e,(i,r,s,o)=>{Jc(t,i,r,s,o)},i=>{Zc(t,i)},i=>{p0(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=qv(t.repoInfo_,()=>new Vy(t.stats_,t.server_)),t.infoData_=new By,t.infoSyncTree_=new Gc({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Os(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),dl(t,"connected",!1),t.serverSyncTree_=new Gc({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);lt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function h0(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Hs(t){return qb({timestamp:h0(t)})}function Jc(t,e,n,i,r){t.dataUpdateCount++;const s=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Qr(n,c=>ke(c));o=Ub(t.serverSyncTree_,s,l,r)}else{const l=ke(n);o=Bb(t.serverSyncTree_,s,l,r)}else if(i){const l=Qr(n,c=>ke(c));o=Fb(t.serverSyncTree_,s,l)}else{const l=ke(n);o=Os(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=si(t,s)),lt(t.eventQueue_,a,o)}function Zc(t,e){dl(t,"connected",e),e===!1&&_0(t)}function p0(t,e){Me(e,(n,i)=>{dl(t,n,i)})}function dl(t,e,n){const i=new ie("/.info/"+e),r=ke(n);t.infoData_.updateSnapshot(i,r);const s=Os(t.infoSyncTree_,i,r);lt(t.eventQueue_,i,s)}function hl(t){return t.nextWriteId_++}function m0(t,e,n,i,r){$s(t,"set",{path:e.toString(),value:n,priority:i});const s=Hs(t),o=ke(n,i),a=nl(t.serverSyncTree_,e),l=Jd(o,a,s),c=hl(t),u=Yd(t.serverSyncTree_,e,l,c,!0);Fs(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const _=d==="ok";_||He("set at "+e+" failed: "+d);const S=zt(t.serverSyncTree_,c,!_);lt(t.eventQueue_,e,S),Qo(t,r,d,p)});const f=ml(t,e);si(t,f),lt(t.eventQueue_,f,[])}function g0(t,e,n,i){$s(t,"update",{path:e.toString(),value:n});let r=!0;const s=Hs(t),o={};if(Me(n,(a,l)=>{r=!1,o[a]=Xd(be(e,a),ke(l),t.serverSyncTree_,s)}),r)Pe("update() called with empty data.  Don't do anything."),Qo(t,i,"ok",void 0);else{const a=hl(t),l=Lb(t.serverSyncTree_,e,o,a);Fs(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const f=c==="ok";f||He("update at "+e+" failed: "+c);const d=zt(t.serverSyncTree_,a,!f),p=d.length>0?si(t,e):e;lt(t.eventQueue_,p,d),Qo(t,i,c,u)}),Me(n,c=>{const u=ml(t,be(e,c));si(t,u)}),lt(t.eventQueue_,e,[])}}function _0(t){$s(t,"onDisconnectEvents");const e=Hs(t),n=is();Uo(t.onDisconnect_,Z(),(r,s)=>{const o=Xd(r,s,t.serverSyncTree_,e);Md(n,r,o)});let i=[];Uo(n,Z(),(r,s)=>{i=i.concat(Os(t.serverSyncTree_,r,s));const o=ml(t,r);si(t,o)}),t.onDisconnect_=is(),lt(t.eventQueue_,Z(),i)}function v0(t,e,n){let i;Y(e._path)===".info"?i=Qc(t.infoSyncTree_,e,n):i=Qc(t.serverSyncTree_,e,n),sh(t.eventQueue_,e._path,i)}function eu(t,e,n){let i;Y(e._path)===".info"?i=Ko(t.infoSyncTree_,e,n):i=Ko(t.serverSyncTree_,e,n),sh(t.eventQueue_,e._path,i)}function y0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(c0)}function $s(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pe(n,...e)}function Qo(t,e,n,i){e&&hi(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function ah(t,e,n){return nl(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function pl(t,e=t.transactionQueueTree_){if(e||Bs(t,e),mi(e)){const n=ch(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&b0(t,gr(e),n)}else eh(e)&&Ds(e,n=>{pl(t,n)})}function b0(t,e,n){const i=n.map(c=>c.currentWriteId),r=ah(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=We(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{$s(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(zt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Bs(t,ul(t.transactionQueueTree_,e)),pl(t,t.transactionQueueTree_),lt(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)hi(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{He("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}si(t,e)}},o)}function si(t,e){const n=lh(t,e),i=gr(n),r=ch(t,n);return E0(t,r,i),i}function E0(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=We(n,l.path);let u=!1,f;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,r=r.concat(zt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=u0)u=!0,f="maxretry",r=r.concat(zt(t.serverSyncTree_,l.currentWriteId,!0));else{const d=ah(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Ls("transaction failed: Data returned ",p,l.path);let _=ke(p);typeof p=="object"&&p!=null&&Ct(p,".priority")||(_=_.updatePriority(d.getPriority()));const x=l.currentWriteId,v=Hs(t),w=Jd(_,d,v);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=w,l.currentWriteId=hl(t),o.splice(o.indexOf(x),1),r=r.concat(Yd(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),r=r.concat(zt(t.serverSyncTree_,x,!0))}else u=!0,f="nodata",r=r.concat(zt(t.serverSyncTree_,l.currentWriteId,!0))}lt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}Bs(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)hi(i[a]);pl(t,t.transactionQueueTree_)}function lh(t,e){let n,i=t.transactionQueueTree_;for(n=Y(e);n!==null&&mi(i)===void 0;)i=ul(i,n),e=de(e),n=Y(e);return i}function ch(t,e){const n=[];return uh(t,e,n),n.sort((i,r)=>i.order-r.order),n}function uh(t,e,n){const i=mi(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ds(e,r=>{uh(t,r,n)})}function Bs(t,e){const n=mi(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Zd(e,n.length>0?n:void 0)}Ds(e,i=>{Bs(t,i)})}function ml(t,e){const n=gr(lh(t,e)),i=ul(t.transactionQueueTree_,e);return Qb(i,r=>{ao(t,r)}),ao(t,i),th(i,r=>{ao(t,r)}),n}function ao(t,e){const n=mi(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(zt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Zd(e,void 0):n.length=s+1,lt(t.eventQueue_,gr(e),r);for(let o=0;o<i.length;o++)hi(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function C0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const tu=function(t,e){const n=x0(t),i=n.namespace;n.domain==="firebase.com"&&Pt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Pt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Pv();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _d(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new ie(n.pathString)}},x0=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(r=w0(t.substring(u,f)));const d=C0(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ne(this.snapshot.exportVal())}}class dh{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return G(this._path)?null:Wa(this._path)}get ref(){return new Ft(this._repo,this._path)}get _queryIdentifier(){const e=$c(this._queryParams),n=Ha(e);return n==="{}"?"default":n}get _queryObject(){return $c(this._queryParams)}isEqual(e){if(e=dr(e),!(e instanceof gl))return!1;const n=this._repo===e._repo,i=ja(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+my(this._path)}}class Ft extends gl{constructor(e,n){super(e,n,new Ya,!1)}get parent(){const e=Sd(this._path);return e===null?null:new Ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class er{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),i=fs(this.ref,e);return new er(this._node.getChild(n),i,we)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new er(r,fs(this.ref,i),we)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Tr(t,e){return t=dr(t),t._checkNotDeleted("ref"),e!==void 0?fs(t._root,e):t._root}function fs(t,e){return t=dr(t),Y(t._path)===null?s0("child","path",e,!1):ih("child","path",e,!1),new Ft(t._repo,be(t._path,e))}function S0(t){return rh("remove",t._path),hh(t,null)}function hh(t,e){t=dr(t),rh("set",t._path),n0("set",e,t._path,!1);const n=new ur;return m0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function T0(t,e){r0("update",e,t._path,!1);const n=new ur;return g0(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class _l{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new fh("value",this,new er(e.snapshotNode,new Ft(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dh(this,e,n):null}matches(e){return e instanceof _l?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class vl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dh(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const i=fs(new Ft(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new fh(e.type,this,new er(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof vl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function A0(t,e,n,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const l=n,c=(u,f)=>{eu(t._repo,t,a),l(u,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new I0(n,s||void 0),a=e==="value"?new _l(o):new vl(e,o);return v0(t._repo,t,a),()=>eu(t._repo,t,a)}function k0(t,e,n,i){return A0(t,"value",e,n,i)}Tb(Ft);Ob(Ft);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="FIREBASE_DATABASE_EMULATOR_HOST",Xo={};let R0=!1;function P0(t,e,n,i){t.repoInfo_=new _d(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function O0(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Pt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=tu(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[N0]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=tu(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Yn(Yn.OWNER):new jv(t.name,t.options,e);o0("Invalid Firebase Database URL",o),G(o.path)||Pt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=D0(a,t,u,new Wv(t.name,n));return new L0(f,t)}function M0(t,e){const n=Xo[e];(!n||n[t.key]!==t)&&Pt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),y0(t),delete n[t.key]}function D0(t,e,n,i){let r=Xo[e.name];r||(r={},Xo[e.name]=r);let s=r[t.toURLString()];return s&&Pt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new f0(t,R0,n,i),r[t.toURLString()]=s,s}class L0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(d0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ft(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(M0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pt("Cannot call "+e+" on a deleted database.")}}function F0(t=mv(),e){const n=fv(t,"database").getImmediate({identifier:e}),i=o_("database");return i&&H0(n,...i),n}function H0(t,e,n,i={}){t=dr(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Pt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Pt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Yn(Yn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:l_(i.mockUserToken,t.app.options.projectId);s=new Yn(o)}P0(r,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){Tv(pv),Jr(new qi("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return O0(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Vn(wc,Cc,t),Vn(wc,Cc,"esm2017")}Nt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$0();const B0={apiKey:"AIzaSyA-Xr5fWGM2ncSAZlZJFPzztDQyBOtM0ng",authDomain:"habit-tracker-9cd55.firebaseapp.com",projectId:"habit-tracker-9cd55",storageBucket:"habit-tracker-9cd55.appspot.com",messagingSenderId:"58026690492",appId:"1:58026690492:web:475a912009baa9cc92cdb9",measurementId:"G-ZF9N4L9RS3"},U0=ed(B0),Ar=F0(U0);class xi{static getHabits(e){k0(Tr(Ar,"habits"),n=>{n.exists()?e(Object.values(n.val())):e([])})}static addHabit(e){return hh(Tr(Ar,`habits/${e.id}`),e)}static deleteHabit(e){const n=Tr(Ar,`habits/${e}`);return S0(n)}static countHabit(e,n){const i=Tr(Ar,`habits/${e}`);return T0(i,n)}}const W0={name:"Main",components:{Habits:Yg,HabitAddForm:Fg,Header:Pg},data(){return{habits:[]}},mounted(){const t=e=>this.habits=e;xi.getHabits(t)},methods:{addHabit(t){const e={id:Date.now(),name:t,count:0};xi.addHabit(e).then(()=>console.log("add")).catch(n=>console.log(n))},deleteHabit(t){xi.deleteHabit(t).then(()=>console.log("delete")).catch(e=>console.log(e))},incrementHabit(t){let e;this.habits.map(n=>{n.id===t&&(e={...n,count:n.count+1})}),xi.countHabit(t,e).then(()=>console.log("increase")).catch(n=>console.log(n))},decrementHabit(t){let e;this.habits.map(n=>{n.id===t&&(e={...n,count:n.count>0?n.count-1:0})}),xi.countHabit(t,e).then(()=>console.log("decrease")).catch(n=>console.log(n))}},computed:{count(){return this.habits.length}}},j0={class:"container"},z0={class:"header-container"},V0={class:"wrap"};function q0(t,e,n,i,r,s){const o=zn("Header"),a=zn("HabitAddForm"),l=zn("Habits");return bt(),At("div",j0,[qe("header",z0,[Ee(o,{count:s.count},null,8,["count"])]),Ee(a,{onAdd:s.addHabit},null,8,["onAdd"]),qe("main",V0,[Ee(l,{habits:r.habits,onDelete:s.deleteHabit,onIncrease:s.incrementHabit,onDecrease:s.decrementHabit},null,8,["habits","onDelete","onIncrease","onDecrease"])])])}const ph=cr(W0,[["render",q0],["__scopeId","data-v-b8e3a670"]]),Y0={__name:"App",setup(t){return(e,n)=>(bt(),At("div",null,[Ee(ph)]))}};/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Mn=typeof window<"u";function K0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function lo(t,e){const n={};for(const i in e){const r=e[i];n[i]=ct(r)?r.map(t):t(r)}return n}const Mi=()=>{},ct=Array.isArray,G0=/\/$/,Q0=t=>t.replace(G0,"");function co(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=eE(i!=null?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function X0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function nu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function J0(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&oi(e.matched[i],n.matched[r])&&mh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function oi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Z0(t[n],e[n]))return!1;return!0}function Z0(t,e){return ct(t)?iu(t,e):ct(e)?iu(e,t):t===e}function iu(t,e){return ct(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function eE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var tr;(function(t){t.pop="pop",t.push="push"})(tr||(tr={}));var Di;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Di||(Di={}));function tE(t){if(!t)if(Mn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Q0(t)}const nE=/^[^#]+#/;function iE(t,e){return t.replace(nE,"#")+e}function rE(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Us=()=>({left:window.pageXOffset,top:window.pageYOffset});function sE(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=rE(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ru(t,e){return(history.state?history.state.position-e:-1)+t}const Jo=new Map;function oE(t,e){Jo.set(t,e)}function aE(t){const e=Jo.get(t);return Jo.delete(t),e}let lE=()=>location.protocol+"//"+location.host;function gh(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),nu(l,"")}return nu(n,t)+i+r}function cE(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=gh(t,location),_=n.value,S=e.value;let x=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}x=S?d.position-S.position:0}else i(p);r.forEach(v=>{v(n.value,_,{delta:x,type:tr.pop,direction:x?x>0?Di.forward:Di.back:Di.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(ne({},d.state,{scroll:Us()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function su(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Us():null}}function uE(t){const{history:e,location:n}=window,i={value:gh(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:lE()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ne({},e.state,su(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ne({},r.value,e.state,{forward:l,scroll:Us()});s(u.current,u,!0);const f=ne({},su(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function fE(t){t=tE(t);const e=uE(t),n=cE(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ne({location:"",base:t,go:i,createHref:iE.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function dE(t){return typeof t=="string"||t&&typeof t=="object"}function _h(t){return typeof t=="string"||typeof t=="symbol"}const Bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vh=Symbol("");var ou;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ou||(ou={}));function ai(t,e){return ne(new Error,{type:t,[vh]:!0},e)}function St(t,e){return t instanceof Error&&vh in t&&(e==null||!!(t.type&e))}const au="[^/]+?",hE={sensitive:!1,strict:!1,start:!0,end:!0},pE=/[.+*?^${}()[\]/\\]/g;function mE(t,e){const n=ne({},hE,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(pE,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:S,optional:x,regexp:v}=d;s.push({name:_,repeatable:S,optional:x});const w=v||au;if(w!==au){p+=10;try{new RegExp(`(${w})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${_}" (${w}): `+B.message)}}let O=S?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(O=x&&c.length<2?`(?:/${O})`:"/"+O),x&&(O+="?"),r+=O,p+=20,x&&(p+=-8),S&&(p+=-20),w===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=s[d-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:S,optional:x}=p,v=_ in c?c[_]:"";if(ct(v)&&!S)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const w=ct(v)?v.join("/"):v;if(!w)if(x)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function gE(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function _E(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=gE(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(lu(i))return 1;if(lu(r))return-1}return r.length-i.length}function lu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vE={type:0,value:""},yE=/[a-zA-Z0-9_]/;function bE(t){if(!t)return[[]];if(t==="/")return[[vE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:yE.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function EE(t,e,n){const i=mE(bE(t.path),n),r=ne(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function wE(t,e){const n=[],i=new Map;e=fu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,d){const p=!d,_=CE(u);_.aliasOf=d&&d.record;const S=fu(e,u),x=[_];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of O)x.push(ne({},_,{components:d?d.record.components:_.components,path:B,aliasOf:d?d.record:_}))}let v,w;for(const O of x){const{path:B}=O;if(f&&B[0]!=="/"){const Q=f.record.path,ge=Q[Q.length-1]==="/"?"":"/";O.path=f.record.path+(B&&ge+B)}if(v=EE(O,f,S),d?d.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),p&&u.name&&!uu(v)&&o(u.name)),_.children){const Q=_.children;for(let ge=0;ge<Q.length;ge++)s(Q[ge],v,d&&d.children[ge])}d=d||v,l(v)}return w?()=>{o(w)}:Mi}function o(u){if(_h(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&_E(u,n[f])>=0&&(u.record.path!==n[f].record.path||!yh(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!uu(u)&&i.set(u.record.name,u)}function c(u,f){let d,p={},_,S;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw ai(1,{location:u});S=d.record.name,p=ne(cu(f.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&cu(u.params,d.keys.map(w=>w.name))),_=d.stringify(p)}else if("path"in u)_=u.path,d=n.find(w=>w.re.test(_)),d&&(p=d.parse(_),S=d.record.name);else{if(d=f.name?i.get(f.name):n.find(w=>w.re.test(f.path)),!d)throw ai(1,{location:u,currentLocation:f});S=d.record.name,p=ne({},f.params,u.params),_=d.stringify(p)}const x=[];let v=d;for(;v;)x.unshift(v.record),v=v.parent;return{name:S,path:_,params:p,matched:x,meta:IE(x)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function cu(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function CE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:xE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function xE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function uu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function IE(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function fu(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function yh(t,e){return e.children.some(n=>n===t||yh(t,n))}const bh=/#/g,SE=/&/g,TE=/\//g,AE=/=/g,kE=/\?/g,Eh=/\+/g,NE=/%5B/g,RE=/%5D/g,wh=/%5E/g,PE=/%60/g,Ch=/%7B/g,OE=/%7C/g,xh=/%7D/g,ME=/%20/g;function yl(t){return encodeURI(""+t).replace(OE,"|").replace(NE,"[").replace(RE,"]")}function DE(t){return yl(t).replace(Ch,"{").replace(xh,"}").replace(wh,"^")}function Zo(t){return yl(t).replace(Eh,"%2B").replace(ME,"+").replace(bh,"%23").replace(SE,"%26").replace(PE,"`").replace(Ch,"{").replace(xh,"}").replace(wh,"^")}function LE(t){return Zo(t).replace(AE,"%3D")}function FE(t){return yl(t).replace(bh,"%23").replace(kE,"%3F")}function HE(t){return t==null?"":FE(t).replace(TE,"%2F")}function ds(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $E(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Eh," "),o=s.indexOf("="),a=ds(o<0?s:s.slice(0,o)),l=o<0?null:ds(s.slice(o+1));if(a in e){let c=e[a];ct(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function du(t){let e="";for(let n in t){const i=t[n];if(n=LE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ct(i)?i.map(s=>s&&Zo(s)):[i&&Zo(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function BE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ct(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const UE=Symbol(""),hu=Symbol(""),bl=Symbol(""),Ih=Symbol(""),ea=Symbol("");function Ii(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function jt(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(ai(4,{from:n,to:e})):f instanceof Error?a(f):dE(f)?a(ai(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function uo(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(WE(a)){const c=(a.__vccOpts||a)[e];c&&r.push(jt(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=K0(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&jt(d,n,i,s,o)()}))}}return r}function WE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pu(t){const e=Yt(bl),n=Yt(Ih),i=ve(()=>e.resolve(Wn(t.to))),r=ve(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(oi.bind(null,u));if(d>-1)return d;const p=mu(l[c-2]);return c>1&&mu(u)===p&&f[f.length-1].path!==p?f.findIndex(oi.bind(null,l[c-2])):d}),s=ve(()=>r.value>-1&&qE(n.params,i.value.params)),o=ve(()=>r.value>-1&&r.value===n.matched.length-1&&mh(n.params,i.value.params));function a(l={}){return VE(l)?e[Wn(t.replace)?"replace":"push"](Wn(t.to)).catch(Mi):Promise.resolve()}return{route:i,href:ve(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const jE=lr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pu,setup(t,{slots:e}){const n=ar(pu(t)),{options:i}=Yt(bl),r=ve(()=>({[gu(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[gu(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Ts("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),zE=jE;function VE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qE(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!ct(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function mu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gu=(t,e,n)=>t!=null?t:e!=null?e:n,YE=lr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Yt(ea),r=ve(()=>t.route||i.value),s=Yt(hu,0),o=ve(()=>{let c=Wn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ve(()=>r.value.matched[o.value]);$r(hu,ve(()=>o.value+1)),$r(UE,a),$r(ea,r);const l=jp();return Ai(()=>[l.value,a.value,t.name],([c,u,f],[d,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!oi(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return _u(n.default,{Component:d,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,x=Ts(d,ne({},_,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return _u(n.default,{Component:x,route:c})||x}}});function _u(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const KE=YE;function GE(t){const e=wE(t.routes,t),n=t.parseQuery||$E,i=t.stringifyQuery||du,r=t.history,s=Ii(),o=Ii(),a=Ii(),l=zp(Bt);let c=Bt;Mn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=lo.bind(null,y=>""+y),f=lo.bind(null,HE),d=lo.bind(null,ds);function p(y,L){let N,F;return _h(y)?(N=e.getRecordMatcher(y),F=L):F=y,e.addRoute(F,N)}function _(y){const L=e.getRecordMatcher(y);L&&e.removeRoute(L)}function S(){return e.getRoutes().map(y=>y.record)}function x(y){return!!e.getRecordMatcher(y)}function v(y,L){if(L=ne({},L||l.value),typeof y=="string"){const j=co(n,y,L.path),h=e.resolve({path:j.path},L),m=r.createHref(j.fullPath);return ne(j,h,{params:d(h.params),hash:ds(j.hash),redirectedFrom:void 0,href:m})}let N;if("path"in y)N=ne({},y,{path:co(n,y.path,L.path).path});else{const j=ne({},y.params);for(const h in j)j[h]==null&&delete j[h];N=ne({},y,{params:f(y.params)}),L.params=f(L.params)}const F=e.resolve(N,L),te=y.hash||"";F.params=u(d(F.params));const le=X0(i,ne({},y,{hash:DE(te),path:F.path})),q=r.createHref(le);return ne({fullPath:le,hash:te,query:i===du?BE(y.query):y.query||{}},F,{redirectedFrom:void 0,href:q})}function w(y){return typeof y=="string"?co(n,y,l.value.path):ne({},y)}function O(y,L){if(c!==y)return ai(8,{from:L,to:y})}function B(y){return Ce(y)}function Q(y){return B(ne(w(y),{replace:!0}))}function ge(y){const L=y.matched[y.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let F=typeof N=="function"?N(y):N;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=w(F):{path:F},F.params={}),ne({query:y.query,hash:y.hash,params:"path"in F?{}:y.params},F)}}function Ce(y,L){const N=c=v(y),F=l.value,te=y.state,le=y.force,q=y.replace===!0,j=ge(N);if(j)return Ce(ne(w(j),{state:typeof j=="object"?ne({},te,j.state):te,force:le,replace:q}),L||N);const h=N;h.redirectedFrom=L;let m;return!le&&J0(i,F,N)&&(m=ai(16,{to:h,from:F}),Nn(F,F,!0,!1)),(m?Promise.resolve(m):xe(h,F)).catch(g=>St(g)?St(g,2)?g:ze(g):ae(g,h,F)).then(g=>{if(g){if(St(g,2))return Ce(ne({replace:q},w(g.to),{state:typeof g.to=="object"?ne({},te,g.to.state):te,force:le}),L||h)}else g=xt(h,F,!0,q,te);return ft(h,F,g),g})}function ut(y,L){const N=O(y,L);return N?Promise.reject(N):Promise.resolve()}function xe(y,L){let N;const[F,te,le]=QE(y,L);N=uo(F.reverse(),"beforeRouteLeave",y,L);for(const j of F)j.leaveGuards.forEach(h=>{N.push(jt(h,y,L))});const q=ut.bind(null,y,L);return N.push(q),On(N).then(()=>{N=[];for(const j of s.list())N.push(jt(j,y,L));return N.push(q),On(N)}).then(()=>{N=uo(te,"beforeRouteUpdate",y,L);for(const j of te)j.updateGuards.forEach(h=>{N.push(jt(h,y,L))});return N.push(q),On(N)}).then(()=>{N=[];for(const j of y.matched)if(j.beforeEnter&&!L.matched.includes(j))if(ct(j.beforeEnter))for(const h of j.beforeEnter)N.push(jt(h,y,L));else N.push(jt(j.beforeEnter,y,L));return N.push(q),On(N)}).then(()=>(y.matched.forEach(j=>j.enterCallbacks={}),N=uo(le,"beforeRouteEnter",y,L),N.push(q),On(N))).then(()=>{N=[];for(const j of o.list())N.push(jt(j,y,L));return N.push(q),On(N)}).catch(j=>St(j,8)?j:Promise.reject(j))}function ft(y,L,N){for(const F of a.list())F(y,L,N)}function xt(y,L,N,F,te){const le=O(y,L);if(le)return le;const q=L===Bt,j=Mn?history.state:{};N&&(F||q?r.replace(y.fullPath,ne({scroll:q&&j&&j.scroll},te)):r.push(y.fullPath,te)),l.value=y,Nn(y,L,N,q),ze()}let Xe;function Tn(){Xe||(Xe=r.listen((y,L,N)=>{if(!_i.listening)return;const F=v(y),te=ge(F);if(te){Ce(ne(te,{replace:!0}),F).catch(Mi);return}c=F;const le=l.value;Mn&&oE(ru(le.fullPath,N.delta),Us()),xe(F,le).catch(q=>St(q,12)?q:St(q,2)?(Ce(q.to,F).then(j=>{St(j,20)&&!N.delta&&N.type===tr.pop&&r.go(-1,!1)}).catch(Mi),Promise.reject()):(N.delta&&r.go(-N.delta,!1),ae(q,F,le))).then(q=>{q=q||xt(F,le,!1),q&&(N.delta&&!St(q,8)?r.go(-N.delta,!1):N.type===tr.pop&&St(q,20)&&r.go(-1,!1)),ft(F,le,q)}).catch(Mi)}))}let An=Ii(),kn=Ii(),Ie;function ae(y,L,N){ze(y);const F=kn.list();return F.length?F.forEach(te=>te(y,L,N)):console.error(y),Promise.reject(y)}function re(){return Ie&&l.value!==Bt?Promise.resolve():new Promise((y,L)=>{An.add([y,L])})}function ze(y){return Ie||(Ie=!y,Tn(),An.list().forEach(([L,N])=>y?N(y):L()),An.reset()),y}function Nn(y,L,N,F){const{scrollBehavior:te}=t;if(!Mn||!te)return Promise.resolve();const le=!N&&aE(ru(y.fullPath,0))||(F||!N)&&history.state&&history.state.scroll||null;return _f().then(()=>te(y,L,le)).then(q=>q&&sE(q)).catch(q=>ae(q,y,L))}const It=y=>r.go(y);let dt;const Ge=new Set,_i={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,hasRoute:x,getRoutes:S,resolve:v,options:t,push:B,replace:Q,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:kn.add,isReady:re,install(y){const L=this;y.component("RouterLink",zE),y.component("RouterView",KE),y.config.globalProperties.$router=L,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Wn(l)}),Mn&&!dt&&l.value===Bt&&(dt=!0,B(r.location).catch(te=>{}));const N={};for(const te in Bt)N[te]=ve(()=>l.value[te]);y.provide(bl,L),y.provide(Ih,ar(N)),y.provide(ea,l);const F=y.unmount;Ge.add(y),y.unmount=function(){Ge.delete(y),Ge.size<1&&(c=Bt,Xe&&Xe(),Xe=null,l.value=Bt,dt=!1,Ie=!1),F()}}};return _i}function On(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function QE(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>oi(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>oi(c,l))||r.push(l))}return[n,i,r]}const XE=GE({history:fE("/"),routes:[{path:"/",name:"main",component:ph}]});function vu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vu(Object(n),!0).forEach(function(i){Se(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vu(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function hs(t){return hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hs(t)}function JE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yu(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ZE(t,e,n){return e&&yu(t.prototype,e),n&&yu(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Se(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function El(t,e){return tw(t)||iw(t,e)||Sh(t,e)||sw()}function _r(t){return ew(t)||nw(t)||Sh(t)||rw()}function ew(t){if(Array.isArray(t))return ta(t)}function tw(t){if(Array.isArray(t))return t}function nw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function iw(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function Sh(t,e){if(!!t){if(typeof t=="string")return ta(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ta(t,e)}}function ta(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function rw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bu=function(){},wl={},Th={},Ah=null,kh={mark:bu,measure:bu};try{typeof window<"u"&&(wl=window),typeof document<"u"&&(Th=document),typeof MutationObserver<"u"&&(Ah=MutationObserver),typeof performance<"u"&&(kh=performance)}catch{}var ow=wl.navigator||{},Eu=ow.userAgent,wu=Eu===void 0?"":Eu,en=wl,me=Th,Cu=Ah,kr=kh;en.document;var Ht=!!me.documentElement&&!!me.head&&typeof me.addEventListener=="function"&&typeof me.createElement=="function",Nh=~wu.indexOf("MSIE")||~wu.indexOf("Trident/"),Nr,Rr,Pr,Or,Mr,Ot="___FONT_AWESOME___",na=16,Rh="fa",Ph="svg-inline--fa",Cn="data-fa-i2svg",ia="data-fa-pseudo-element",aw="data-fa-pseudo-element-pending",Cl="data-prefix",xl="data-icon",xu="fontawesome-i2svg",lw="async",cw=["HTML","HEAD","STYLE","SCRIPT"],Oh=function(){try{return!0}catch{return!1}}(),pe="classic",ye="sharp",Il=[pe,ye];function vr(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[pe]}})}var nr=vr((Nr={},Se(Nr,pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Se(Nr,ye,{fa:"solid",fass:"solid","fa-solid":"solid"}),Nr)),ir=vr((Rr={},Se(Rr,pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Se(Rr,ye,{solid:"fass"}),Rr)),rr=vr((Pr={},Se(Pr,pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Se(Pr,ye,{fass:"fa-solid"}),Pr)),uw=vr((Or={},Se(Or,pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Se(Or,ye,{"fa-solid":"fass"}),Or)),fw=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Mh="fa-layers-text",dw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,hw=vr((Mr={},Se(Mr,pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Se(Mr,ye,{900:"fass"}),Mr)),Dh=[1,2,3,4,5,6,7,8,9,10],pw=Dh.concat([11,12,13,14,15,16,17,18,19,20]),mw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sr=new Set;Object.keys(ir[pe]).map(sr.add.bind(sr));Object.keys(ir[ye]).map(sr.add.bind(sr));var gw=[].concat(Il,_r(sr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",dn.GROUP,dn.SWAP_OPACITY,dn.PRIMARY,dn.SECONDARY]).concat(Dh.map(function(t){return"".concat(t,"x")})).concat(pw.map(function(t){return"w-".concat(t)})),Li=en.FontAwesomeConfig||{};function _w(t){var e=me.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function vw(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(me&&typeof me.querySelector=="function"){var yw=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];yw.forEach(function(t){var e=El(t,2),n=e[0],i=e[1],r=vw(_w(n));r!=null&&(Li[i]=r)})}var Lh={styleDefault:"solid",familyDefault:"classic",cssPrefix:Rh,replacementClass:Ph,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Li.familyPrefix&&(Li.cssPrefix=Li.familyPrefix);var li=P(P({},Lh),Li);li.autoReplaceSvg||(li.observeMutations=!1);var D={};Object.keys(Lh).forEach(function(t){Object.defineProperty(D,t,{enumerable:!0,set:function(n){li[t]=n,Fi.forEach(function(i){return i(D)})},get:function(){return li[t]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(e){li.cssPrefix=e,Fi.forEach(function(n){return n(D)})},get:function(){return li.cssPrefix}});en.FontAwesomeConfig=D;var Fi=[];function bw(t){return Fi.push(t),function(){Fi.splice(Fi.indexOf(t),1)}}var Ut=na,Et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ew(t){if(!(!t||!Ht)){var e=me.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=me.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return me.head.insertBefore(e,i),t}}var ww="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function or(){for(var t=12,e="";t-- >0;)e+=ww[Math.random()*62|0];return e}function gi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Sl(t){return t.classList?gi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Fh(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Cw(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Fh(t[n]),'" ')},"").trim()}function Ws(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Tl(t){return t.size!==Et.size||t.x!==Et.x||t.y!==Et.y||t.rotate!==Et.rotate||t.flipX||t.flipY}function xw(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Iw(t){var e=t.transform,n=t.width,i=n===void 0?na:n,r=t.height,s=r===void 0?na:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Nh?l+="translate(".concat(e.x/Ut-i/2,"em, ").concat(e.y/Ut-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Ut,"em), calc(-50% + ").concat(e.y/Ut,"em)) "):l+="translate(".concat(e.x/Ut,"em, ").concat(e.y/Ut,"em) "),l+="scale(".concat(e.size/Ut*(e.flipX?-1:1),", ").concat(e.size/Ut*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Sw=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Hh(){var t=Rh,e=Ph,n=D.cssPrefix,i=D.replacementClass,r=Sw;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var Iu=!1;function fo(){D.autoAddCss&&!Iu&&(Ew(Hh()),Iu=!0)}var Tw={mixout:function(){return{dom:{css:Hh,insertCss:fo}}},hooks:function(){return{beforeDOMElementCreation:function(){fo()},beforeI2svg:function(){fo()}}}},Mt=en||{};Mt[Ot]||(Mt[Ot]={});Mt[Ot].styles||(Mt[Ot].styles={});Mt[Ot].hooks||(Mt[Ot].hooks={});Mt[Ot].shims||(Mt[Ot].shims=[]);var rt=Mt[Ot],$h=[],Aw=function t(){me.removeEventListener("DOMContentLoaded",t),ps=1,$h.map(function(e){return e()})},ps=!1;Ht&&(ps=(me.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(me.readyState),ps||me.addEventListener("DOMContentLoaded",Aw));function kw(t){!Ht||(ps?setTimeout(t,0):$h.push(t))}function yr(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?Fh(t):"<".concat(e," ").concat(Cw(i),">").concat(s.map(yr).join(""),"</").concat(e,">")}function Su(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Nw=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},ho=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?Nw(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function Rw(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ra(t){var e=Rw(t);return e.length===1?e[0].toString(16):null}function Pw(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Tu(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function sa(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Tu(e);typeof rt.hooks.addPack=="function"&&!r?rt.hooks.addPack(t,Tu(e)):rt.styles[t]=P(P({},rt.styles[t]||{}),s),t==="fas"&&sa("fa",e)}var Dr,Lr,Fr,Fn=rt.styles,Ow=rt.shims,Mw=(Dr={},Se(Dr,pe,Object.values(rr[pe])),Se(Dr,ye,Object.values(rr[ye])),Dr),Al=null,Bh={},Uh={},Wh={},jh={},zh={},Dw=(Lr={},Se(Lr,pe,Object.keys(nr[pe])),Se(Lr,ye,Object.keys(nr[ye])),Lr);function Lw(t){return~gw.indexOf(t)}function Fw(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!Lw(r)?r:null}var Vh=function(){var e=function(s){return ho(Fn,function(o,a,l){return o[l]=ho(a,s,{}),o},{})};Bh=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),Uh=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),zh=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in Fn||D.autoFetchSvg,i=ho(Ow,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});Wh=i.names,jh=i.unicodes,Al=js(D.styleDefault,{family:D.familyDefault})};bw(function(t){Al=js(t.styleDefault,{family:D.familyDefault})});Vh();function kl(t,e){return(Bh[t]||{})[e]}function Hw(t,e){return(Uh[t]||{})[e]}function hn(t,e){return(zh[t]||{})[e]}function qh(t){return Wh[t]||{prefix:null,iconName:null}}function $w(t){var e=jh[t],n=kl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tn(){return Al}var Nl=function(){return{prefix:null,iconName:null,rest:[]}};function js(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?pe:n,r=nr[i][t],s=ir[i][t]||ir[i][r],o=t in rt.styles?t:null;return s||o||null}var Au=(Fr={},Se(Fr,pe,Object.keys(rr[pe])),Se(Fr,ye,Object.keys(rr[ye])),Fr);function zs(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},Se(e,pe,"".concat(D.cssPrefix,"-").concat(pe)),Se(e,ye,"".concat(D.cssPrefix,"-").concat(ye)),e),o=null,a=pe;(t.includes(s[pe])||t.some(function(c){return Au[pe].includes(c)}))&&(a=pe),(t.includes(s[ye])||t.some(function(c){return Au[ye].includes(c)}))&&(a=ye);var l=t.reduce(function(c,u){var f=Fw(D.cssPrefix,u);if(Fn[u]?(u=Mw[a].includes(u)?uw[a][u]:u,o=u,c.prefix=u):Dw[a].indexOf(u)>-1?(o=u,c.prefix=js(u,{family:a})):f?c.iconName=f:u!==D.replacementClass&&u!==s[pe]&&u!==s[ye]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var d=o==="fa"?qh(c.iconName):{},p=hn(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!Fn.far&&Fn.fas&&!D.autoFetchSvg&&(c.prefix="fas")}return c},Nl());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ye&&(Fn.fass||D.autoFetchSvg)&&(l.prefix="fass",l.iconName=hn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=tn()||"fas"),l}var Bw=function(){function t(){JE(this,t),this.definitions={}}return ZE(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=P(P({},n.definitions[a]||{}),o[a]),sa(a,o[a]);var l=rr[pe][a];l&&sa(l,o[a]),Vh()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),ku=[],Hn={},Qn={},Uw=Object.keys(Qn);function Ww(t,e){var n=e.mixoutsTo;return ku=t,Hn={},Object.keys(Qn).forEach(function(i){Uw.indexOf(i)===-1&&delete Qn[i]}),ku.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),hs(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){Hn[o]||(Hn[o]=[]),Hn[o].push(s[o])})}i.provides&&i.provides(Qn)}),n}function oa(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=Hn[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function xn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Hn[t]||[];r.forEach(function(s){s.apply(null,n)})}function Dt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Qn[t]?Qn[t].apply(null,e):void 0}function aa(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||tn();if(!!e)return e=hn(n,e)||e,Su(Yh.definitions,n,e)||Su(rt.styles,n,e)}var Yh=new Bw,jw=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,xn("noAuto")},zw={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ht?(xn("beforeI2svg",e),Dt("pseudoElements2svg",e),Dt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,kw(function(){qw({autoReplaceSvgRoot:n}),xn("watch",e)})}},Vw={icon:function(e){if(e===null)return null;if(hs(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:hn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=js(e[0]);return{prefix:i,iconName:hn(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(D.cssPrefix,"-"))>-1||e.match(fw))){var r=zs(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||tn(),iconName:hn(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=tn();return{prefix:s,iconName:hn(s,e)||e}}}},Ke={noAuto:jw,config:D,dom:zw,parse:Vw,library:Yh,findIconDefinition:aa,toHtml:yr},qw=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?me:n;(Object.keys(rt.styles).length>0||D.autoFetchSvg)&&Ht&&D.autoReplaceSvg&&Ke.dom.i2svg({node:i})};function Vs(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return yr(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Ht){var i=me.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function Yw(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(Tl(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=Ws(P(P({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Kw(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(D.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},r),{},{id:o}),children:i}]}]}function Rl(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,_=i.found?i:n,S=_.width,x=_.height,v=r==="fak",w=[D.replacementClass,s?"".concat(D.cssPrefix,"-").concat(s):""].filter(function(xe){return f.classes.indexOf(xe)===-1}).filter(function(xe){return xe!==""||!!xe}).concat(f.classes).join(" "),O={children:[],attributes:P(P({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(x)})},B=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(S/x*16*.0625,"em")}:{};p&&(O.attributes[Cn]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||or())},children:[l]}),delete O.attributes.title);var Q=P(P({},O),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:P(P({},B),f.styles)}),ge=i.found&&n.found?Dt("generateAbstractMask",Q)||{children:[],attributes:{}}:Dt("generateAbstractIcon",Q)||{children:[],attributes:{}},Ce=ge.children,ut=ge.attributes;return Q.children=Ce,Q.attributes=ut,a?Kw(Q):Yw(Q)}function Nu(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=P(P(P({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Cn]="");var u=P({},o.styles);Tl(r)&&(u.transform=Iw({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=Ws(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function Gw(t){var e=t.content,n=t.title,i=t.extra,r=P(P(P({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=Ws(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var po=rt.styles;function la(t){var e=t[0],n=t[1],i=t.slice(4),r=El(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(dn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(dn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(dn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var Qw={found:!1,width:512,height:512};function Xw(t,e){!Oh&&!D.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ca(t,e){var n=e;return e==="fa"&&D.styleDefault!==null&&(e=tn()),new Promise(function(i,r){if(Dt("missingIconAbstract"),n==="fa"){var s=qh(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&po[e]&&po[e][t]){var o=po[e][t];return i(la(o))}Xw(t,e),i(P(P({},Qw),{},{icon:D.showMissingIcons&&t?Dt("missingIconAbstract")||{}:{}}))})}var Ru=function(){},ua=D.measurePerformance&&kr&&kr.mark&&kr.measure?kr:{mark:Ru,measure:Ru},Ti='FA "6.2.0"',Jw=function(e){return ua.mark("".concat(Ti," ").concat(e," begins")),function(){return Kh(e)}},Kh=function(e){ua.mark("".concat(Ti," ").concat(e," ends")),ua.measure("".concat(Ti," ").concat(e),"".concat(Ti," ").concat(e," begins"),"".concat(Ti," ").concat(e," ends"))},Pl={begin:Jw,end:Kh},Wr=function(){};function Pu(t){var e=t.getAttribute?t.getAttribute(Cn):null;return typeof e=="string"}function Zw(t){var e=t.getAttribute?t.getAttribute(Cl):null,n=t.getAttribute?t.getAttribute(xl):null;return e&&n}function eC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(D.replacementClass)}function tC(){if(D.autoReplaceSvg===!0)return jr.replace;var t=jr[D.autoReplaceSvg];return t||jr.replace}function nC(t){return me.createElementNS("http://www.w3.org/2000/svg",t)}function iC(t){return me.createElement(t)}function Gh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?nC:iC:n;if(typeof t=="string")return me.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(Gh(o,{ceFn:i}))}),r}function rC(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var jr={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Gh(r),n)}),n.getAttribute(Cn)===null&&D.keepOriginalSource){var i=me.createComment(rC(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Sl(n).indexOf(D.replacementClass))return jr.replace(e);var r=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===D.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return yr(a)}).join(`
`);n.setAttribute(Cn,""),n.innerHTML=o}};function Ou(t){t()}function Qh(t,e){var n=typeof e=="function"?e:Wr;if(t.length===0)n();else{var i=Ou;D.mutateApproach===lw&&(i=en.requestAnimationFrame||Ou),i(function(){var r=tC(),s=Pl.begin("mutate");t.map(r),s(),n()})}}var Ol=!1;function Xh(){Ol=!0}function fa(){Ol=!1}var ms=null;function Mu(t){if(!!Cu&&!!D.observeMutations){var e=t.treeCallback,n=e===void 0?Wr:e,i=t.nodeCallback,r=i===void 0?Wr:i,s=t.pseudoElementsCallback,o=s===void 0?Wr:s,a=t.observeMutationsRoot,l=a===void 0?me:a;ms=new Cu(function(c){if(!Ol){var u=tn();gi(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Pu(f.addedNodes[0])&&(D.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&D.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Pu(f.target)&&~mw.indexOf(f.attributeName))if(f.attributeName==="class"&&Zw(f.target)){var d=zs(Sl(f.target)),p=d.prefix,_=d.iconName;f.target.setAttribute(Cl,p||u),_&&f.target.setAttribute(xl,_)}else eC(f.target)&&r(f.target)})}}),Ht&&ms.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sC(){!ms||ms.disconnect()}function oC(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function aC(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=zs(Sl(t));return r.prefix||(r.prefix=tn()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=Hw(r.prefix,t.innerText)||kl(r.prefix,ra(t.innerText))),!r.iconName&&D.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function lC(t){var e=gi(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return D.autoA11y&&(n?e["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(i||or()):(e["aria-hidden"]="true",e.focusable="false")),e}function cC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Du(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=aC(t),i=n.iconName,r=n.prefix,s=n.rest,o=lC(t),a=oa("parseNodeAttributes",{},t),l=e.styleParser?oC(t):[];return P({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var uC=rt.styles;function Jh(t){var e=D.autoReplaceSvg==="nest"?Du(t,{styleParser:!1}):Du(t);return~e.extra.classes.indexOf(Mh)?Dt("generateLayersText",t,e):Dt("generateSvgReplacementMutation",t,e)}var nn=new Set;Il.map(function(t){nn.add("fa-".concat(t))});Object.keys(nr[pe]).map(nn.add.bind(nn));Object.keys(nr[ye]).map(nn.add.bind(nn));nn=_r(nn);function Lu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ht)return Promise.resolve();var n=me.documentElement.classList,i=function(f){return n.add("".concat(xu,"-").concat(f))},r=function(f){return n.remove("".concat(xu,"-").concat(f))},s=D.autoFetchSvg?nn:Il.map(function(u){return"fa-".concat(u)}).concat(Object.keys(uC));s.includes("fa")||s.push("fa");var o=[".".concat(Mh,":not([").concat(Cn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Cn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=gi(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Pl.begin("onTree"),c=a.reduce(function(u,f){try{var d=Jh(f);d&&u.push(d)}catch(p){Oh||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){Qh(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function fC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jh(t).then(function(n){n&&Qh([n],e)})}function dC(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:aa(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:aa(r||{})),t(i,P(P({},n),{},{mask:r}))}}var hC=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?Et:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,p=n.titleId,_=p===void 0?null:p,S=n.classes,x=S===void 0?[]:S,v=n.attributes,w=v===void 0?{}:v,O=n.styles,B=O===void 0?{}:O;if(!!e){var Q=e.prefix,ge=e.iconName,Ce=e.icon;return Vs(P({type:"icon"},e),function(){return xn("beforeDOMElementCreation",{iconDefinition:e,params:n}),D.autoA11y&&(d?w["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(_||or()):(w["aria-hidden"]="true",w.focusable="false")),Rl({icons:{main:la(Ce),mask:l?la(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Q,iconName:ge,transform:P(P({},Et),r),symbol:o,title:d,maskId:u,titleId:_,extra:{attributes:w,styles:B,classes:x}})})}},pC={mixout:function(){return{icon:dC(hC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Lu,n.nodeCallback=fC,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?me:i,s=n.callback,o=s===void 0?function(){}:s;return Lu(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,d=i.extra;return new Promise(function(p,_){Promise.all([ca(r,a),u.iconName?ca(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var x=El(S,2),v=x[0],w=x[1];p([n,Rl({icons:{main:v,mask:w},prefix:a,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Ws(a);l.length>0&&(r.style=l);var c;return Tl(o)&&(c=Dt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},mC={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Vs({type:"layer"},function(){xn("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(_r(s)).join(" ")},children:o}]})}}}},gC={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return Vs({type:"counter",content:n},function(){return xn("beforeDOMElementCreation",{content:n,params:i}),Gw({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(_r(a))}})})}}}},_C={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?Et:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,d=i.styles,p=d===void 0?{}:d;return Vs({type:"text",content:n},function(){return xn("beforeDOMElementCreation",{content:n,params:i}),Nu({content:n,transform:P(P({},Et),s),title:a,extra:{attributes:f,styles:p,classes:["".concat(D.cssPrefix,"-layers-text")].concat(_r(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(Nh){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return D.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Nu({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},vC=new RegExp('"',"ug"),Fu=[1105920,1112319];function yC(t){var e=t.replace(vC,""),n=Pw(e,0),i=n>=Fu[0]&&n<=Fu[1],r=e.length===2?e[0]===e[1]:!1;return{value:ra(r?e[0]:e),isSecondary:i||r}}function Hu(t,e){var n="".concat(aw).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=gi(t.children),o=s.filter(function(Ce){return Ce.getAttribute(ia)===e})[0],a=en.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(dw),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ye:pe,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ir[d][l[2].toLowerCase()]:hw[d][c],_=yC(f),S=_.value,x=_.isSecondary,v=l[0].startsWith("FontAwesome"),w=kl(p,S),O=w;if(v){var B=$w(S);B.iconName&&B.prefix&&(w=B.iconName,p=B.prefix)}if(w&&!x&&(!o||o.getAttribute(Cl)!==p||o.getAttribute(xl)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var Q=cC(),ge=Q.extra;ge.attributes[ia]=e,ca(w,p).then(function(Ce){var ut=Rl(P(P({},Q),{},{icons:{main:Ce,mask:Nl()},prefix:p,iconName:O,extra:ge,watchable:!0})),xe=me.createElement("svg");e==="::before"?t.insertBefore(xe,t.firstChild):t.appendChild(xe),xe.outerHTML=ut.map(function(ft){return yr(ft)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function bC(t){return Promise.all([Hu(t,"::before"),Hu(t,"::after")])}function EC(t){return t.parentNode!==document.head&&!~cw.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ia)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function $u(t){if(!!Ht)return new Promise(function(e,n){var i=gi(t.querySelectorAll("*")).filter(EC).map(bC),r=Pl.begin("searchPseudoElements");Xh(),Promise.all(i).then(function(){r(),fa(),e()}).catch(function(){r(),fa(),n()})})}var wC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=$u,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?me:i;D.searchPseudoElements&&$u(r)}}},Bu=!1,CC={mixout:function(){return{dom:{unwatch:function(){Xh(),Bu=!0}}}},hooks:function(){return{bootstrap:function(){Mu(oa("mutationObserverCallbacks",{}))},noAuto:function(){sC()},watch:function(n){var i=n.observeMutationsRoot;Bu?fa():Mu(oa("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Uu=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},xC={mixout:function(){return{parse:{transform:function(n){return Uu(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Uu(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:d};return{tag:"g",attributes:P({},p.outer),children:[{tag:"g",attributes:P({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:P(P({},i.icon.attributes),p.path)}]}]}}}},mo={x:0,y:0,width:"100%",height:"100%"};function Wu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function IC(t){return t.tag==="g"?t.children:[t]}var SC={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?zs(r.split(" ").map(function(o){return o.trim()})):Nl();return s.prefix||(s.prefix=tn()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,d=o.icon,p=xw({transform:l,containerWidth:f,iconWidth:c}),_={tag:"rect",attributes:P(P({},mo),{},{fill:"white"})},S=u.children?{children:u.children.map(Wu)}:{},x={tag:"g",attributes:P({},p.inner),children:[Wu(P({tag:u.tag,attributes:P(P({},u.attributes),p.path)},S))]},v={tag:"g",attributes:P({},p.outer),children:[x]},w="mask-".concat(a||or()),O="clip-".concat(a||or()),B={tag:"mask",attributes:P(P({},mo),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,v]},Q={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:IC(d)},B]};return i.push(Q,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},mo)}),{children:i,attributes:r}}}},TC={provides:function(e){var n=!1;en.matchMedia&&(n=en.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:P(P({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:P(P({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:P(P({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:P(P({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:P(P({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},AC={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},kC=[Tw,pC,mC,gC,_C,wC,CC,xC,SC,TC,AC];Ww(kC,{mixoutsTo:Ke});Ke.noAuto;var Zh=Ke.config,NC=Ke.library;Ke.dom;var gs=Ke.parse;Ke.findIconDefinition;Ke.toHtml;var RC=Ke.icon;Ke.layer;var PC=Ke.text;Ke.counter;function ju(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function tt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ju(Object(n),!0).forEach(function(i){Be(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ju(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function _s(t){return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_s(t)}function Be(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function OC(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function MC(t,e){if(t==null)return{};var n=OC(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function da(t){return DC(t)||LC(t)||FC(t)||HC()}function DC(t){if(Array.isArray(t))return ha(t)}function LC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function FC(t,e){if(!!t){if(typeof t=="string")return ha(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ha(t,e)}}function ha(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function HC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ep={exports:{}};(function(t){(function(e){var n=function(v,w,O){if(!c(w)||f(w)||d(w)||p(w)||l(w))return w;var B,Q=0,ge=0;if(u(w))for(B=[],ge=w.length;Q<ge;Q++)B.push(n(v,w[Q],O));else{B={};for(var Ce in w)Object.prototype.hasOwnProperty.call(w,Ce)&&(B[v(Ce,O)]=n(v,w[Ce],O))}return B},i=function(v,w){w=w||{};var O=w.separator||"_",B=w.split||/(?=[A-Z])/;return v.split(B).join(O)},r=function(v){return _(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(w,O){return O?O.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var w=r(v);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(v,w){return i(v,w).toLowerCase()},a=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},f=function(v){return a.call(v)=="[object Date]"},d=function(v){return a.call(v)=="[object RegExp]"},p=function(v){return a.call(v)=="[object Boolean]"},_=function(v){return v=v-0,v===v},S=function(v,w){var O=w&&"process"in w?w.process:w;return typeof O!="function"?v:function(B,Q){return O(B,v,Q)}},x={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,w){return n(S(r,w),v)},decamelizeKeys:function(v,w){return n(S(o,w),v,w)},pascalizeKeys:function(v,w){return n(S(s,w),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=x:e.humps=x})($C)})(ep);var BC=ep.exports,UC=["class","style"];function WC(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=BC.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function jC(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ml(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return Ml(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=jC(u);break;case"style":l.style=WC(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=MC(n,UC);return Ts(t.tag,tt(tt(tt({},e),{},{class:r.class,style:tt(tt({},r.style),o)},r.attrs),a),i)}var tp=!1;try{tp=!0}catch{}function zC(){if(!tp&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Hi(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Be({},t,e):{}}function VC(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Be(e,"fa-".concat(t.size),t.size!==null),Be(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Be(e,"fa-pull-".concat(t.pull),t.pull!==null),Be(e,"fa-swap-opacity",t.swapOpacity),Be(e,"fa-bounce",t.bounce),Be(e,"fa-shake",t.shake),Be(e,"fa-beat",t.beat),Be(e,"fa-fade",t.fade),Be(e,"fa-beat-fade",t.beatFade),Be(e,"fa-flash",t.flash),Be(e,"fa-spin-pulse",t.spinPulse),Be(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function zu(t){if(t&&_s(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(gs.icon)return gs.icon(t);if(t===null)return null;if(_s(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var qC=lr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=ve(function(){return zu(e.icon)}),s=ve(function(){return Hi("classes",VC(e))}),o=ve(function(){return Hi("transform",typeof e.transform=="string"?gs.transform(e.transform):e.transform)}),a=ve(function(){return Hi("mask",zu(e.mask))}),l=ve(function(){return RC(r.value,tt(tt(tt(tt({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Ai(l,function(u){if(!u)return zC("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=ve(function(){return l.value?Ml(l.value.abstract[0],{},i):null});return function(){return c.value}}});lr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=Zh.familyPrefix,s=ve(function(){return["".concat(r,"-layers")].concat(da(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return Ts("div",{class:s.value},i.default?i.default():[])}}});lr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=Zh.familyPrefix,s=ve(function(){return Hi("classes",[].concat(da(e.counter?["".concat(r,"-layers-counter")]:[]),da(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=ve(function(){return Hi("transform",typeof e.transform=="string"?gs.transform(e.transform):e.transform)}),a=ve(function(){var c=PC(e.value.toString(),tt(tt({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=ve(function(){return Ml(a.value,{},i)});return function(){return l.value}}});var YC={prefix:"fas",iconName:"square-minus",icon:[448,512,[61767,"minus-square"],"f146","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},KC={prefix:"fas",iconName:"square-plus",icon:[448,512,[61846,"plus-square"],"f0fe","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},GC={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"]},QC={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]};NC.add(GC,KC,QC,YC);const Dl=Ig(Y0);Dl.use(XE);Dl.component("font-awesome-icon",qC);Dl.mount("#app");
