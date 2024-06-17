(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();var Rt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nt(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Pt={exports:{}};(function(i,e){(function(t,r){i.exports=r()})(Rt,function(){var t=1e3,r=6e4,s=36e5,n="millisecond",o="second",h="minute",a="hour",b="day",_="week",f="month",x="quarter",E="year",R="date",m="Invalid Date",P=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,W=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,j={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(p){var d=["th","st","nd","rd"],c=p%100;return"["+p+(d[(c-20)%10]||d[c]||d[0])+"]"}},M=function(p,d,c){var u=String(p);return!u||u.length>=d?p:""+Array(d+1-u.length).join(c)+p},$e={s:M,z:function(p){var d=-p.utcOffset(),c=Math.abs(d),u=Math.floor(c/60),l=c%60;return(d<=0?"+":"-")+M(u,2,"0")+":"+M(l,2,"0")},m:function p(d,c){if(d.date()<c.date())return-p(c,d);var u=12*(c.year()-d.year())+(c.month()-d.month()),l=d.clone().add(u,f),g=c-l<0,y=d.clone().add(u+(g?-1:1),f);return+(-(u+(c-l)/(g?l-y:y-l))||0)},a:function(p){return p<0?Math.ceil(p)||0:Math.floor(p)},p:function(p){return{M:f,y:E,w:_,d:b,D:R,h:a,m:h,s:o,ms:n,Q:x}[p]||String(p||"").toLowerCase().replace(/s$/,"")},u:function(p){return p===void 0}},q="en",U={};U[q]=j;var G="$isDayjsObject",ae=function(p){return p instanceof we||!(!p||!p[G])},z=function p(d,c,u){var l;if(!d)return q;if(typeof d=="string"){var g=d.toLowerCase();U[g]&&(l=g),c&&(U[g]=c,l=g);var y=d.split("-");if(!l&&y.length>1)return p(y[0])}else{var w=d.name;U[w]=d,l=w}return!u&&l&&(q=l),l||!u&&q},k=function(p,d){if(ae(p))return p.clone();var c=typeof d=="object"?d:{};return c.date=p,c.args=arguments,new we(c)},$=$e;$.l=z,$.i=ae,$.w=function(p,d){return k(p,{locale:d.$L,utc:d.$u,x:d.$x,$offset:d.$offset})};var we=function(){function p(c){this.$L=z(c.locale,null,!0),this.parse(c),this.$x=this.$x||c.x||{},this[G]=!0}var d=p.prototype;return d.parse=function(c){this.$d=function(u){var l=u.date,g=u.utc;if(l===null)return new Date(NaN);if($.u(l))return new Date;if(l instanceof Date)return new Date(l);if(typeof l=="string"&&!/Z$/i.test(l)){var y=l.match(P);if(y){var w=y[2]-1||0,A=(y[7]||"0").substring(0,3);return g?new Date(Date.UTC(y[1],w,y[3]||1,y[4]||0,y[5]||0,y[6]||0,A)):new Date(y[1],w,y[3]||1,y[4]||0,y[5]||0,y[6]||0,A)}}return new Date(l)}(c),this.init()},d.init=function(){var c=this.$d;this.$y=c.getFullYear(),this.$M=c.getMonth(),this.$D=c.getDate(),this.$W=c.getDay(),this.$H=c.getHours(),this.$m=c.getMinutes(),this.$s=c.getSeconds(),this.$ms=c.getMilliseconds()},d.$utils=function(){return $},d.isValid=function(){return this.$d.toString()!==m},d.isSame=function(c,u){var l=k(c);return this.startOf(u)<=l&&l<=this.endOf(u)},d.isAfter=function(c,u){return k(c)<this.startOf(u)},d.isBefore=function(c,u){return this.endOf(u)<k(c)},d.$g=function(c,u,l){return $.u(c)?this[u]:this.set(l,c)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(c,u){var l=this,g=!!$.u(u)||u,y=$.p(c),w=function(J,N){var V=$.w(l.$u?Date.UTC(l.$y,N,J):new Date(l.$y,N,J),l);return g?V:V.endOf(b)},A=function(J,N){return $.w(l.toDate()[J].apply(l.toDate("s"),(g?[0,0,0,0]:[23,59,59,999]).slice(N)),l)},T=this.$W,C=this.$M,B=this.$D,ee="set"+(this.$u?"UTC":"");switch(y){case E:return g?w(1,0):w(31,11);case f:return g?w(1,C):w(0,C+1);case _:var K=this.$locale().weekStart||0,ce=(T<K?T+7:T)-K;return w(g?B-ce:B+(6-ce),C);case b:case R:return A(ee+"Hours",0);case a:return A(ee+"Minutes",1);case h:return A(ee+"Seconds",2);case o:return A(ee+"Milliseconds",3);default:return this.clone()}},d.endOf=function(c){return this.startOf(c,!1)},d.$set=function(c,u){var l,g=$.p(c),y="set"+(this.$u?"UTC":""),w=(l={},l[b]=y+"Date",l[R]=y+"Date",l[f]=y+"Month",l[E]=y+"FullYear",l[a]=y+"Hours",l[h]=y+"Minutes",l[o]=y+"Seconds",l[n]=y+"Milliseconds",l)[g],A=g===b?this.$D+(u-this.$W):u;if(g===f||g===E){var T=this.clone().set(R,1);T.$d[w](A),T.init(),this.$d=T.set(R,Math.min(this.$D,T.daysInMonth())).$d}else w&&this.$d[w](A);return this.init(),this},d.set=function(c,u){return this.clone().$set(c,u)},d.get=function(c){return this[$.p(c)]()},d.add=function(c,u){var l,g=this;c=Number(c);var y=$.p(u),w=function(C){var B=k(g);return $.w(B.date(B.date()+Math.round(C*c)),g)};if(y===f)return this.set(f,this.$M+c);if(y===E)return this.set(E,this.$y+c);if(y===b)return w(1);if(y===_)return w(7);var A=(l={},l[h]=r,l[a]=s,l[o]=t,l)[y]||1,T=this.$d.getTime()+c*A;return $.w(T,this)},d.subtract=function(c,u){return this.add(-1*c,u)},d.format=function(c){var u=this,l=this.$locale();if(!this.isValid())return l.invalidDate||m;var g=c||"YYYY-MM-DDTHH:mm:ssZ",y=$.z(this),w=this.$H,A=this.$m,T=this.$M,C=l.weekdays,B=l.months,ee=l.meridiem,K=function(N,V,he,Ae){return N&&(N[V]||N(u,g))||he[V].slice(0,Ae)},ce=function(N){return $.s(w%12||12,N,"0")},J=ee||function(N,V,he){var Ae=N<12?"AM":"PM";return he?Ae.toLowerCase():Ae};return g.replace(W,function(N,V){return V||function(he){switch(he){case"YY":return String(u.$y).slice(-2);case"YYYY":return $.s(u.$y,4,"0");case"M":return T+1;case"MM":return $.s(T+1,2,"0");case"MMM":return K(l.monthsShort,T,B,3);case"MMMM":return K(B,T);case"D":return u.$D;case"DD":return $.s(u.$D,2,"0");case"d":return String(u.$W);case"dd":return K(l.weekdaysMin,u.$W,C,2);case"ddd":return K(l.weekdaysShort,u.$W,C,3);case"dddd":return C[u.$W];case"H":return String(w);case"HH":return $.s(w,2,"0");case"h":return ce(1);case"hh":return ce(2);case"a":return J(w,A,!0);case"A":return J(w,A,!1);case"m":return String(A);case"mm":return $.s(A,2,"0");case"s":return String(u.$s);case"ss":return $.s(u.$s,2,"0");case"SSS":return $.s(u.$ms,3,"0");case"Z":return y}return null}(N)||y.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(c,u,l){var g,y=this,w=$.p(u),A=k(c),T=(A.utcOffset()-this.utcOffset())*r,C=this-A,B=function(){return $.m(y,A)};switch(w){case E:g=B()/12;break;case f:g=B();break;case x:g=B()/3;break;case _:g=(C-T)/6048e5;break;case b:g=(C-T)/864e5;break;case a:g=C/s;break;case h:g=C/r;break;case o:g=C/t;break;default:g=C}return l?g:$.a(g)},d.daysInMonth=function(){return this.endOf(f).$D},d.$locale=function(){return U[this.$L]},d.locale=function(c,u){if(!c)return this.$L;var l=this.clone(),g=z(c,u,!0);return g&&(l.$L=g),l},d.clone=function(){return $.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},p}(),ct=we.prototype;return k.prototype=ct,[["$ms",n],["$s",o],["$m",h],["$H",a],["$W",b],["$M",f],["$y",E],["$D",R]].forEach(function(p){ct[p[1]]=function(d){return this.$g(d,p[0],p[1])}}),k.extend=function(p,d){return p.$i||(p(d,we,k),p.$i=!0),k},k.locale=z,k.isDayjs=ae,k.unix=function(p){return k(1e3*p)},k.en=U[q],k.Ls=U,k.p={},k})})(Pt);var rr=Pt.exports;const Oe=Nt(rr);var Mt={exports:{}};(function(i,e){(function(t,r){i.exports=r()})(Rt,function(){var t="minute",r=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(n,o,h){var a=o.prototype;h.utc=function(m){var P={date:m,utc:!0,args:arguments};return new o(P)},a.utc=function(m){var P=h(this.toDate(),{locale:this.$L,utc:!0});return m?P.add(this.utcOffset(),t):P},a.local=function(){return h(this.toDate(),{locale:this.$L,utc:!1})};var b=a.parse;a.parse=function(m){m.utc&&(this.$u=!0),this.$utils().u(m.$offset)||(this.$offset=m.$offset),b.call(this,m)};var _=a.init;a.init=function(){if(this.$u){var m=this.$d;this.$y=m.getUTCFullYear(),this.$M=m.getUTCMonth(),this.$D=m.getUTCDate(),this.$W=m.getUTCDay(),this.$H=m.getUTCHours(),this.$m=m.getUTCMinutes(),this.$s=m.getUTCSeconds(),this.$ms=m.getUTCMilliseconds()}else _.call(this)};var f=a.utcOffset;a.utcOffset=function(m,P){var W=this.$utils().u;if(W(m))return this.$u?0:W(this.$offset)?f.call(this):this.$offset;if(typeof m=="string"&&(m=function(q){q===void 0&&(q="");var U=q.match(r);if(!U)return null;var G=(""+U[0]).match(s)||["-",0,0],ae=G[0],z=60*+G[1]+ +G[2];return z===0?0:ae==="+"?z:-z}(m),m===null))return this;var j=Math.abs(m)<=16?60*m:m,M=this;if(P)return M.$offset=j,M.$u=m===0,M;if(m!==0){var $e=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(M=this.local().add(j+$e,t)).$offset=j,M.$x.$localOffset=$e}else M=this.utc();return M};var x=a.format;a.format=function(m){var P=m||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return x.call(this,P)},a.valueOf=function(){var m=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*m},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var E=a.toDate;a.toDate=function(m){return m==="s"&&this.$offset?h(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():E.call(this)};var R=a.diff;a.diff=function(m,P,W){if(m&&this.$u===m.$u)return R.call(this,m,P,W);var j=this.local(),M=h(m).local();return R.call(j,M,P,W)}}})})(Mt);var ir=Mt.exports;const sr=Nt(ir);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=globalThis,Ze=Ce.ShadowRoot&&(Ce.ShadyCSS===void 0||Ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ge=Symbol(),ht=new WeakMap;let Bt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ze&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ht.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ht.set(t,e))}return e}toString(){return this.cssText}};const nr=i=>new Bt(typeof i=="string"?i:i+"",void 0,Ge),Dt=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,s,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[n+1],i[0]);return new Bt(t,i,Ge)},or=(i,e)=>{if(Ze)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=Ce.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}},lt=Ze?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return nr(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ar,defineProperty:cr,getOwnPropertyDescriptor:hr,getOwnPropertyNames:lr,getOwnPropertySymbols:dr,getPrototypeOf:ur}=Object,Y=globalThis,dt=Y.trustedTypes,fr=dt?dt.emptyScript:"",Ie=Y.reactiveElementPolyfillSupport,pe=(i,e)=>i,Me={toAttribute(i,e){switch(e){case Boolean:i=i?fr:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},et=(i,e)=>!ar(i,e),ut={attribute:!0,type:String,converter:Me,reflect:!1,hasChanged:et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Y.litPropertyMetadata??(Y.litPropertyMetadata=new WeakMap);class te extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ut){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&cr(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:n}=hr(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const h=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,h,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ut}static _$Ei(){if(this.hasOwnProperty(pe("elementProperties")))return;const e=ur(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(pe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(pe("properties"))){const t=this.properties,r=[...lr(t),...dr(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(lt(s))}else e!==void 0&&t.push(lt(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return or(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var n;const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const o=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:Me).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=r.getPropertyOptions(s),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Me;this._$Em=s,this[s]=h.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??et)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}te.elementStyles=[],te.shadowRootOptions={mode:"open"},te[pe("elementProperties")]=new Map,te[pe("finalized")]=new Map,Ie==null||Ie({ReactiveElement:te}),(Y.reactiveElementVersions??(Y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=globalThis,Be=me.trustedTypes,ft=Be?Be.createPolicy("lit-html",{createHTML:i=>i}):void 0,Lt="$lit$",F=`lit$${(Math.random()+"").slice(9)}$`,Ut="?"+F,pr=`<${Ut}>`,Z=document,ye=()=>Z.createComment(""),be=i=>i===null||typeof i!="object"&&typeof i!="function",It=Array.isArray,mr=i=>It(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",He=`[ 	
\f\r]`,le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,mt=/>/g,X=RegExp(`>|${He}(?:([^\\s"'>=/]+)(${He}*=${He}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,yt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,gr=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),yr=gr(1),ie=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),bt=new WeakMap,Q=Z.createTreeWalker(Z,129);function qt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ft!==void 0?ft.createHTML(e):e}const br=(i,e)=>{const t=i.length-1,r=[];let s,n=e===2?"<svg>":"",o=le;for(let h=0;h<t;h++){const a=i[h];let b,_,f=-1,x=0;for(;x<a.length&&(o.lastIndex=x,_=o.exec(a),_!==null);)x=o.lastIndex,o===le?_[1]==="!--"?o=pt:_[1]!==void 0?o=mt:_[2]!==void 0?(Ht.test(_[2])&&(s=RegExp("</"+_[2],"g")),o=X):_[3]!==void 0&&(o=X):o===X?_[0]===">"?(o=s??le,f=-1):_[1]===void 0?f=-2:(f=o.lastIndex-_[2].length,b=_[1],o=_[3]===void 0?X:_[3]==='"'?yt:gt):o===yt||o===gt?o=X:o===pt||o===mt?o=le:(o=X,s=void 0);const E=o===X&&i[h+1].startsWith("/>")?" ":"";n+=o===le?a+pr:f>=0?(r.push(b),a.slice(0,f)+Lt+a.slice(f)+F+E):a+F+(f===-2?h:E)}return[qt(i,n+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};class ve{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let n=0,o=0;const h=e.length-1,a=this.parts,[b,_]=br(e,t);if(this.el=ve.createElement(b,r),Q.currentNode=this.el.content,t===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=Q.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(Lt)){const x=_[o++],E=s.getAttribute(f).split(F),R=/([.?@])?(.*)/.exec(x);a.push({type:1,index:n,name:R[2],strings:E,ctor:R[1]==="."?_r:R[1]==="?"?$r:R[1]==="@"?wr:De}),s.removeAttribute(f)}else f.startsWith(F)&&(a.push({type:6,index:n}),s.removeAttribute(f));if(Ht.test(s.tagName)){const f=s.textContent.split(F),x=f.length-1;if(x>0){s.textContent=Be?Be.emptyScript:"";for(let E=0;E<x;E++)s.append(f[E],ye()),Q.nextNode(),a.push({type:2,index:++n});s.append(f[x],ye())}}}else if(s.nodeType===8)if(s.data===Ut)a.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(F,f+1))!==-1;)a.push({type:7,index:n}),f+=F.length-1}n++}}static createElement(e,t){const r=Z.createElement("template");return r.innerHTML=e,r}}function se(i,e,t=i,r){var o,h;if(e===ie)return e;let s=r!==void 0?(o=t._$Co)==null?void 0:o[r]:t._$Cl;const n=be(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),n===void 0?s=void 0:(s=new n(i),s._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=s:t._$Cl=s),s!==void 0&&(e=se(i,s._$AS(i,e.values),s,r)),e}class vr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??Z).importNode(t,!0);Q.currentNode=s;let n=Q.nextNode(),o=0,h=0,a=r[0];for(;a!==void 0;){if(o===a.index){let b;a.type===2?b=new _e(n,n.nextSibling,this,e):a.type===1?b=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(b=new Ar(n,this,e)),this._$AV.push(b),a=r[++h]}o!==(a==null?void 0:a.index)&&(n=Q.nextNode(),o++)}return Q.currentNode=Z,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class _e{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=se(this,e,t),be(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==ie&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):mr(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==O&&be(this._$AH)?this._$AA.nextSibling.data=e:this.T(Z.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ve.createElement(qt(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new vr(s,this),h=o.u(this.options);o.p(t),this.T(h),this._$AH=o}}_$AC(e){let t=bt.get(e.strings);return t===void 0&&bt.set(e.strings,t=new ve(e)),t}k(e){It(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const n of e)s===t.length?t.push(r=new _e(this.S(ye()),this.S(ye()),this,this.options)):r=t[s],r._$AI(n),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class De{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=O}_$AI(e,t=this,r,s){const n=this.strings;let o=!1;if(n===void 0)e=se(this,e,t,0),o=!be(e)||e!==this._$AH&&e!==ie,o&&(this._$AH=e);else{const h=e;let a,b;for(e=n[0],a=0;a<n.length-1;a++)b=se(this,h[r+a],t,a),b===ie&&(b=this._$AH[a]),o||(o=!be(b)||b!==this._$AH[a]),b===O?e=O:e!==O&&(e+=(b??"")+n[a+1]),this._$AH[a]=b}o&&!s&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class _r extends De{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}}class $r extends De{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}}class wr extends De{constructor(e,t,r,s,n){super(e,t,r,s,n),this.type=5}_$AI(e,t=this){if((e=se(this,e,t,0)??O)===ie)return;const r=this._$AH,s=e===O&&r!==O||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==O&&(r===O||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ar{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){se(this,e)}}const qe=me.litHtmlPolyfillSupport;qe==null||qe(ve,_e),(me.litHtmlVersions??(me.litHtmlVersions=[])).push("3.1.2");const xr=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let s=r._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=s=new _e(e.insertBefore(ye(),n),n,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ge extends te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ie}}var Ct;ge._$litElement$=!0,ge.finalized=!0,(Ct=globalThis.litElementHydrateSupport)==null||Ct.call(globalThis,{LitElement:ge});const ze=globalThis.litElementPolyfillSupport;ze==null||ze({LitElement:ge});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sr=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Er={attribute:!0,type:String,converter:Me,reflect:!1,hasChanged:et},kr=(i=Er,e,t)=>{const{kind:r,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,i),r==="accessor"){const{name:o}=t;return{set(h){const a=e.get.call(this);e.set.call(this,h),this.requestUpdate(o,a,i)},init(h){return h!==void 0&&this.P(o,void 0,i),h}}}if(r==="setter"){const{name:o}=t;return function(h){const a=this[o];e.call(this,h),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+r)};function tt(i){return(e,t)=>typeof t=="object"?kr(i,e,t):((r,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(s,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Tr(i){return tt({...i,state:!0,attribute:!1})}const H=Object.create(null);H.open="0";H.close="1";H.ping="2";H.pong="3";H.message="4";H.upgrade="5";H.noop="6";const Re=Object.create(null);Object.keys(H).forEach(i=>{Re[H[i]]=i});const Ye={type:"error",data:"parser error"},zt=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Vt=typeof ArrayBuffer=="function",Ft=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,rt=({type:i,data:e},t,r)=>zt&&e instanceof Blob?t?r(e):vt(e,r):Vt&&(e instanceof ArrayBuffer||Ft(e))?t?r(e):vt(new Blob([e]),r):r(H[i]+(e||"")),vt=(i,e)=>{const t=new FileReader;return t.onload=function(){const r=t.result.split(",")[1];e("b"+(r||""))},t.readAsDataURL(i)};function _t(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let Ve;function Or(i,e){if(zt&&i.data instanceof Blob)return i.data.arrayBuffer().then(_t).then(e);if(Vt&&(i.data instanceof ArrayBuffer||Ft(i.data)))return e(_t(i.data));rt(i,!1,t=>{Ve||(Ve=new TextEncoder),e(Ve.encode(t))})}const $t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ue=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<$t.length;i++)ue[$t.charCodeAt(i)]=i;const Cr=i=>{let e=i.length*.75,t=i.length,r,s=0,n,o,h,a;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);const b=new ArrayBuffer(e),_=new Uint8Array(b);for(r=0;r<t;r+=4)n=ue[i.charCodeAt(r)],o=ue[i.charCodeAt(r+1)],h=ue[i.charCodeAt(r+2)],a=ue[i.charCodeAt(r+3)],_[s++]=n<<2|o>>4,_[s++]=(o&15)<<4|h>>2,_[s++]=(h&3)<<6|a&63;return b},Rr=typeof ArrayBuffer=="function",it=(i,e)=>{if(typeof i!="string")return{type:"message",data:Yt(i,e)};const t=i.charAt(0);return t==="b"?{type:"message",data:Nr(i.substring(1),e)}:Re[t]?i.length>1?{type:Re[t],data:i.substring(1)}:{type:Re[t]}:Ye},Nr=(i,e)=>{if(Rr){const t=Cr(i);return Yt(t,e)}else return{base64:!0,data:i}},Yt=(i,e)=>{switch(e){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},Wt="",Pr=(i,e)=>{const t=i.length,r=new Array(t);let s=0;i.forEach((n,o)=>{rt(n,!1,h=>{r[o]=h,++s===t&&e(r.join(Wt))})})},Mr=(i,e)=>{const t=i.split(Wt),r=[];for(let s=0;s<t.length;s++){const n=it(t[s],e);if(r.push(n),n.type==="error")break}return r};function Br(){return new TransformStream({transform(i,e){Or(i,t=>{const r=t.length;let s;if(r<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,r);else if(r<65536){s=new Uint8Array(3);const n=new DataView(s.buffer);n.setUint8(0,126),n.setUint16(1,r)}else{s=new Uint8Array(9);const n=new DataView(s.buffer);n.setUint8(0,127),n.setBigUint64(1,BigInt(r))}i.data&&typeof i.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}let Fe;function xe(i){return i.reduce((e,t)=>e+t.length,0)}function Se(i,e){if(i[0].length===e)return i.shift();const t=new Uint8Array(e);let r=0;for(let s=0;s<e;s++)t[s]=i[0][r++],r===i[0].length&&(i.shift(),r=0);return i.length&&r<i[0].length&&(i[0]=i[0].slice(r)),t}function Dr(i,e){Fe||(Fe=new TextDecoder);const t=[];let r=0,s=-1,n=!1;return new TransformStream({transform(o,h){for(t.push(o);;){if(r===0){if(xe(t)<1)break;const a=Se(t,1);n=(a[0]&128)===128,s=a[0]&127,s<126?r=3:s===126?r=1:r=2}else if(r===1){if(xe(t)<2)break;const a=Se(t,2);s=new DataView(a.buffer,a.byteOffset,a.length).getUint16(0),r=3}else if(r===2){if(xe(t)<8)break;const a=Se(t,8),b=new DataView(a.buffer,a.byteOffset,a.length),_=b.getUint32(0);if(_>Math.pow(2,21)-1){h.enqueue(Ye);break}s=_*Math.pow(2,32)+b.getUint32(4),r=3}else{if(xe(t)<s)break;const a=Se(t,s);h.enqueue(it(n?a:Fe.decode(a),e)),r=0}if(s===0||s>i){h.enqueue(Ye);break}}}})}const jt=4;function S(i){if(i)return Lr(i)}function Lr(i){for(var e in S.prototype)i[e]=S.prototype[e];return i}S.prototype.on=S.prototype.addEventListener=function(i,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(e),this};S.prototype.once=function(i,e){function t(){this.off(i,t),e.apply(this,arguments)}return t.fn=e,this.on(i,t),this};S.prototype.off=S.prototype.removeListener=S.prototype.removeAllListeners=S.prototype.removeEventListener=function(i,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+i];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var r,s=0;s<t.length;s++)if(r=t[s],r===e||r.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+i],this};S.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+i],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,s=t.length;r<s;++r)t[r].apply(this,e)}return this};S.prototype.emitReserved=S.prototype.emit;S.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};S.prototype.hasListeners=function(i){return!!this.listeners(i).length};const D=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function Kt(i,...e){return e.reduce((t,r)=>(i.hasOwnProperty(r)&&(t[r]=i[r]),t),{})}const Ur=D.setTimeout,Ir=D.clearTimeout;function Le(i,e){e.useNativeTimers?(i.setTimeoutFn=Ur.bind(D),i.clearTimeoutFn=Ir.bind(D)):(i.setTimeoutFn=D.setTimeout.bind(D),i.clearTimeoutFn=D.clearTimeout.bind(D))}const Hr=1.33;function qr(i){return typeof i=="string"?zr(i):Math.ceil((i.byteLength||i.size)*Hr)}function zr(i){let e=0,t=0;for(let r=0,s=i.length;r<s;r++)e=i.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}function Vr(i){let e="";for(let t in i)i.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(i[t]));return e}function Fr(i){let e={},t=i.split("&");for(let r=0,s=t.length;r<s;r++){let n=t[r].split("=");e[decodeURIComponent(n[0])]=decodeURIComponent(n[1])}return e}class Yr extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class st extends S{constructor(e){super(),this.writable=!1,Le(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,r){return super.emitReserved("error",new Yr(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=it(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=Vr(e);return t.length?"?"+t:""}}const Jt="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),We=64,Wr={};let wt=0,Ee=0,At;function xt(i){let e="";do e=Jt[i%We]+e,i=Math.floor(i/We);while(i>0);return e}function Xt(){const i=xt(+new Date);return i!==At?(wt=0,At=i):i+"."+xt(wt++)}for(;Ee<We;Ee++)Wr[Jt[Ee]]=Ee;let Qt=!1;try{Qt=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const jr=Qt;function Zt(i){const e=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||jr))return new XMLHttpRequest}catch{}if(!e)try{return new D[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function Kr(){}const Jr=function(){return new Zt({xdomain:!1}).responseType!=null}();class Xr extends st{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const r=location.protocol==="https:";let s=location.port;s||(s=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}const t=e&&e.forceBase64;this.supportsBinary=Jr&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Mr(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Pr(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Xt()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new I(this.uri(),e)}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(s,n)=>{this.onError("xhr post error",s,n)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}}class I extends S{constructor(e,t){super(),Le(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=Kt(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const r=this.xhr=new Zt(t);try{r.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let s in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(s)&&r.setRequestHeader(s,this.opts.extraHeaders[s])}}catch{}if(this.method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(r.timeout=this.opts.requestTimeout),r.onreadystatechange=()=>{var s;r.readyState===3&&((s=this.opts.cookieJar)===null||s===void 0||s.parseCookies(r)),r.readyState===4&&(r.status===200||r.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof r.status=="number"?r.status:0)},0))},r.send(this.data)}catch(s){this.setTimeoutFn(()=>{this.onError(s)},0);return}typeof document<"u"&&(this.index=I.requestsCount++,I.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=Kr,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete I.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}I.requestsCount=0;I.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",St);else if(typeof addEventListener=="function"){const i="onpagehide"in D?"pagehide":"unload";addEventListener(i,St,!1)}}function St(){for(let i in I.requests)I.requests.hasOwnProperty(i)&&I.requests[i].abort()}const nt=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),ke=D.WebSocket||D.MozWebSocket,Et=!0,Qr="arraybuffer",kt=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Zr extends st{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,r=kt?{}:Kt(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=Et&&!kt?t?new ke(e,t):new ke(e):new ke(e,t,r)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],s=t===e.length-1;rt(r,this.supportsBinary,n=>{const o={};try{Et&&this.ws.send(n)}catch{}s&&nt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Xt()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!ke}}class Gr extends st{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=Dr(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(t).getReader(),s=Br();s.readable.pipeTo(e.writable),this.writer=s.writable.getWriter();const n=()=>{r.read().then(({done:h,value:a})=>{h||(this.onPacket(a),n())}).catch(h=>{})};n();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],s=t===e.length-1;this.writer.write(r).then(()=>{s&&nt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const ei={websocket:Zr,webtransport:Gr,polling:Xr},ti=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ri=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function je(i){if(i.length>2e3)throw"URI too long";const e=i,t=i.indexOf("["),r=i.indexOf("]");t!=-1&&r!=-1&&(i=i.substring(0,t)+i.substring(t,r).replace(/:/g,";")+i.substring(r,i.length));let s=ti.exec(i||""),n={},o=14;for(;o--;)n[ri[o]]=s[o]||"";return t!=-1&&r!=-1&&(n.source=e,n.host=n.host.substring(1,n.host.length-1).replace(/;/g,":"),n.authority=n.authority.replace("[","").replace("]","").replace(/;/g,":"),n.ipv6uri=!0),n.pathNames=ii(n,n.path),n.queryKey=si(n,n.query),n}function ii(i,e){const t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function si(i,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,s,n){s&&(t[s]=n)}),t}let Gt=class re extends S{constructor(e,t={}){super(),this.binaryType=Qr,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=je(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=je(t.host).host),Le(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Fr(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=jt,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new ei[e](r)}open(){let e;if(this.opts.rememberUpgrade&&re.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),r=!1;re.priorWebsocketSuccess=!1;const s=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",f=>{if(!r)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;re.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(_(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const x=new Error("probe error");x.transport=t.name,this.emitReserved("upgradeError",x)}}))};function n(){r||(r=!0,_(),t.close(),t=null)}const o=f=>{const x=new Error("probe error: "+f);x.transport=t.name,n(),this.emitReserved("upgradeError",x)};function h(){o("transport closed")}function a(){o("socket closed")}function b(f){t&&f.name!==t.name&&n()}const _=()=>{t.removeListener("open",s),t.removeListener("error",o),t.removeListener("close",h),this.off("close",a),this.off("upgrading",b)};t.once("open",s),t.once("error",o),t.once("close",h),this.once("close",a),this.once("upgrading",b),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||t.open()},200):t.open()}onOpen(){if(this.readyState="open",re.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){const s=this.writeBuffer[r].data;if(s&&(t+=qr(s)),r>0&&t>this.maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}write(e,t,r){return this.sendPacket("message",e,t,r),this}send(e,t,r){return this.sendPacket("message",e,t,r),this}sendPacket(e,t,r,s){if(typeof t=="function"&&(s=t,t=void 0),typeof r=="function"&&(s=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const n={type:e,data:t,options:r};this.emitReserved("packetCreate",n),this.writeBuffer.push(n),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}onError(e){re.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let r=0;const s=e.length;for(;r<s;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}};Gt.protocol=jt;function ni(i,e="",t){let r=i;t=t||typeof location<"u"&&location,i==null&&(i=t.protocol+"//"+t.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=t.protocol+i:i=t.host+i),/^(https?|wss?):\/\//.test(i)||(typeof t<"u"?i=t.protocol+"//"+i:i="https://"+i),r=je(i)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const n=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+n+":"+r.port+e,r.href=r.protocol+"://"+n+(t&&t.port===r.port?"":":"+r.port),r}const oi=typeof ArrayBuffer=="function",ai=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,er=Object.prototype.toString,ci=typeof Blob=="function"||typeof Blob<"u"&&er.call(Blob)==="[object BlobConstructor]",hi=typeof File=="function"||typeof File<"u"&&er.call(File)==="[object FileConstructor]";function ot(i){return oi&&(i instanceof ArrayBuffer||ai(i))||ci&&i instanceof Blob||hi&&i instanceof File}function Ne(i,e){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let t=0,r=i.length;t<r;t++)if(Ne(i[t]))return!0;return!1}if(ot(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return Ne(i.toJSON(),!0);for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&Ne(i[t]))return!0;return!1}function li(i){const e=[],t=i.data,r=i;return r.data=Ke(t,e),r.attachments=e.length,{packet:r,buffers:e}}function Ke(i,e){if(!i)return i;if(ot(i)){const t={_placeholder:!0,num:e.length};return e.push(i),t}else if(Array.isArray(i)){const t=new Array(i.length);for(let r=0;r<i.length;r++)t[r]=Ke(i[r],e);return t}else if(typeof i=="object"&&!(i instanceof Date)){const t={};for(const r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=Ke(i[r],e));return t}return i}function di(i,e){return i.data=Je(i.data,e),delete i.attachments,i}function Je(i,e){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<e.length)return e[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let t=0;t<i.length;t++)i[t]=Je(i[t],e);else if(typeof i=="object")for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&(i[t]=Je(i[t],e));return i}const ui=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],fi=5;var v;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(v||(v={}));class pi{constructor(e){this.replacer=e}encode(e){return(e.type===v.EVENT||e.type===v.ACK)&&Ne(e)?this.encodeAsBinary({type:e.type===v.EVENT?v.BINARY_EVENT:v.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===v.BINARY_EVENT||e.type===v.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=li(e),r=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(r),s}}function Tt(i){return Object.prototype.toString.call(i)==="[object Object]"}class at extends S{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===v.BINARY_EVENT;r||t.type===v.BINARY_ACK?(t.type=r?v.EVENT:v.ACK,this.reconstructor=new mi(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(ot(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(v[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===v.BINARY_EVENT||r.type===v.BINARY_ACK){const n=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(n,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");r.attachments=Number(o)}if(e.charAt(t+1)==="/"){const n=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(n,t)}else r.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const n=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}r.id=Number(e.substring(n,t+1))}if(e.charAt(++t)){const n=this.tryParse(e.substr(t));if(at.isPayloadValid(r.type,n))r.data=n;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case v.CONNECT:return Tt(t);case v.DISCONNECT:return t===void 0;case v.CONNECT_ERROR:return typeof t=="string"||Tt(t);case v.EVENT:case v.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&ui.indexOf(t[0])===-1);case v.ACK:case v.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class mi{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=di(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const gi=Object.freeze(Object.defineProperty({__proto__:null,Decoder:at,Encoder:pi,get PacketType(){return v},protocol:fi},Symbol.toStringTag,{value:"Module"}));function L(i,e,t){return i.on(e,t),function(){i.off(e,t)}}const yi=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class tr extends S{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[L(e,"open",this.onopen.bind(this)),L(e,"packet",this.onpacket.bind(this)),L(e,"error",this.onerror.bind(this)),L(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(yi.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const r={type:v.EVENT,data:t};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,h=t.pop();this._registerAckCallback(o,h),r.id=o}const s=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!s||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(e,t){var r;const s=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const n=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},s);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(n),t.apply(this,[null,...o])}}emitWithAck(e,...t){const r=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((s,n)=>{t.push((o,h)=>r?o?n(o):s(h):s(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...n)=>r!==this._queue[0]?void 0:(s!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...n)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:v.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case v.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case v.EVENT:case v.BINARY_EVENT:this.onevent(e);break;case v.ACK:case v.BINARY_ACK:this.onack(e);break;case v.DISCONNECT:this.ondisconnect();break;case v.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(...s){r||(r=!0,t.packet({type:v.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:v.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function oe(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}oe.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*i);i=Math.floor(e*10)&1?i+t:i-t}return Math.min(i,this.max)|0};oe.prototype.reset=function(){this.attempts=0};oe.prototype.setMin=function(i){this.ms=i};oe.prototype.setMax=function(i){this.max=i};oe.prototype.setJitter=function(i){this.jitter=i};class Xe extends S{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Le(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new oe({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||gi;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Gt(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const s=L(t,"open",function(){r.onopen(),e&&e()}),n=h=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",h),e?e(h):this.maybeReconnectOnOpen()},o=L(t,"error",n);if(this._timeout!==!1){const h=this._timeout,a=this.setTimeoutFn(()=>{s(),n(new Error("timeout")),t.close()},h);this.opts.autoUnref&&a.unref(),this.subs.push(()=>{this.clearTimeoutFn(a)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(L(e,"ping",this.onping.bind(this)),L(e,"data",this.ondata.bind(this)),L(e,"error",this.onerror.bind(this)),L(e,"close",this.onclose.bind(this)),L(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){nt(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new tr(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t)if(this.nsps[r].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const de={};function Pe(i,e){typeof i=="object"&&(e=i,i=void 0),e=e||{};const t=ni(i,e.path||"/socket.io"),r=t.source,s=t.id,n=t.path,o=de[s]&&n in de[s].nsps,h=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let a;return h?a=new Xe(r,e):(de[s]||(de[s]=new Xe(r,e)),a=de[s]),t.query&&!e.query&&(e.query=t.queryKey),a.socket(t.path,e)}Object.assign(Pe,{Manager:Xe,Socket:tr,io:Pe,connect:Pe});const fe=Pe(`${window.location.host}`,{extraHeaders:{token:"secret_token"}}),Te={getTimerSet:i=>`${i}/timer-set`,getTimerStopped:i=>`${i}/timer-stopped`};var Qe=(i=>(i.TIMER_START="timer-start",i.TIMER_STOP="timer-stop",i))(Qe||{});const Ot=i=>{fe.emit("timer-action",i)},bi=Dt`
::backdrop,:root {
    --sans-font: -apple-system,BlinkMacSystemFont,"Avenir Next",Avenir,"Nimbus Sans L",Roboto,"Noto Sans","Segoe UI",Arial,Helvetica,"Helvetica Neue",sans-serif;
    --mono-font: Consolas,Menlo,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    --standard-border-radius: 5px;
    --bg: #fff;
    --accent-bg: #f5f7ff;
    --text: #212121;
    --text-light: #585858;
    --border: #898EA4;
    --accent: #0d47a1;
    --code: #d81b60;
    --preformatted: #444;
    --marked: #ffdd33;
    --disabled: #efefef
}

@media (prefers-color-scheme: dark) {
    ::backdrop,:root {
        color-scheme:dark;
        --bg: #212121;
        --accent-bg: #2b2b2b;
        --text: #dcdcdc;
        --text-light: #ababab;
        --accent: #ffb300;
        --code: #f06292;
        --preformatted: #ccc;
        --disabled: #111
    }

    img,video {
        opacity: .8
    }
}

*,:after,:before {
    box-sizing: border-box
}

input,progress,select,textarea {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none
}

html {
    font-family: var(--sans-font);
    scroll-behavior: smooth
}

body {
    color: var(--text);
    background-color: var(--bg);
    font-size: 1.15rem;
    line-height: 1.5;
    display: grid;
    grid-template-columns: 1fr min(45rem,90%) 1fr;
    margin: 0
}

body>* {
    grid-column: 2
}

body>header {
    background-color: var(--accent-bg);
    border-bottom: 1px solid var(--border);
    text-align: center;
    padding: 0 .5rem 2rem;
    grid-column: 1/-1
}

body>header h1 {
    max-width: 1200px;
    margin: 1rem auto
}

body>header p {
    max-width: 40rem;
    margin: 1rem auto
}

main {
    padding-top: 1.5rem
}

body>footer {
    margin-top: 4rem;
    padding: 2rem 1rem 1.5rem;
    color: var(--text-light);
    font-size: .9rem;
    text-align: center;
    border-top: 1px solid var(--border)
}

h1 {
    font-size: 3rem
}

h2 {
    font-size: 2.6rem;
    margin-top: 3rem
}

h3 {
    font-size: 2rem;
    margin-top: 3rem
}

h4 {
    font-size: 1.44rem
}

h5 {
    font-size: 1.15rem
}

h6 {
    font-size: .96rem
}

h1,h2,h3,h4,h5,h6,p {
    overflow-wrap: break-word
}

h1,h2,h3 {
    line-height: 1.1
}

@media only screen and (max-width: 720px) {
    h1 {
        font-size:2.5rem
    }

    h2 {
        font-size: 2.1rem
    }

    h3 {
        font-size: 1.75rem
    }

    h4 {
        font-size: 1.25rem
    }
}

a,a:visited {
    color: var(--accent)
}

a:hover {
    text-decoration: none
}

[role=button],button,input[type=button],input[type=reset],input[type=submit],label[type=button] {
    border: none;
    border-radius: var(--standard-border-radius);
    background-color: var(--accent);
    font-size: 1rem;
    color: var(--bg);
    padding: .7rem .9rem;
    margin: .5rem 0;
    font-family: inherit
}

[role=button][aria-disabled=true],button[disabled],input[type=button][disabled],input[type=checkbox][disabled],input[type=radio][disabled],input[type=reset][disabled],input[type=submit][disabled],select[disabled] {
    cursor: not-allowed
}

button[disabled],input:disabled,select:disabled,textarea:disabled {
    cursor: not-allowed;
    background-color: var(--disabled);
    color: var(--text-light)
}

input[type=range] {
    padding: 0
}

abbr[title] {
    cursor: help;
    text-decoration-line: underline;
    text-decoration-style: dotted
}

[role=button]:not([aria-disabled=true]):hover,button:enabled:hover,input[type=button]:enabled:hover,input[type=reset]:enabled:hover,input[type=submit]:enabled:hover,label[type=button]:hover {
    filter: brightness(1.4);
    cursor: pointer
}

button:focus-visible:where(:enabled,[role=button]:not([aria-disabled=true])),input:enabled:focus-visible:where([type=submit],[type=reset],[type=button]) {
    outline: 2px solid var(--accent);
    outline-offset: 1px
}

header>nav {
    font-size: 1rem;
    line-height: 2;
    padding: 1rem 0 0
}

header>nav ol,header>nav ul {
    align-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0
}

header>nav ol li,header>nav ul li {
    display: inline-block
}

header>nav a,header>nav a:visited {
    margin: 0 .5rem 1rem;
    border: 1px solid var(--border);
    border-radius: var(--standard-border-radius);
    color: var(--text);
    display: inline-block;
    padding: .1rem 1rem;
    text-decoration: none
}

header>nav a.current,header>nav a:hover {
    border-color: var(--accent);
    color: var(--accent);
    cursor: pointer
}

@media only screen and (max-width: 720px) {
    header>nav a {
        border:none;
        padding: 0;
        text-decoration: underline;
        line-height: 1
    }
}

aside,details,pre,progress {
    background-color: var(--accent-bg);
    border: 1px solid var(--border);
    border-radius: var(--standard-border-radius);
    margin-bottom: 1rem
}

aside {
    font-size: 1rem;
    width: 30%;
    padding: 0 15px;
    margin-inline-start:15px;float: right
}

[dir=rtl] aside {
    float: left
}

@media only screen and (max-width: 720px) {
    aside {
        width:100%;
        float: none;
        margin-inline-start:0}
}

article,dialog,fieldset {
    border: 1px solid var(--border);
    padding: 1rem;
    border-radius: var(--standard-border-radius);
    margin-bottom: 1rem
}

article h2:first-child,section h2:first-child {
    margin-top: 1rem
}

section {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 2rem 1rem;
    margin: 3rem 0
}

section+section,section:first-child {
    border-top: 0;
    padding-top: 0
}

section:last-child {
    border-bottom: 0;
    padding-bottom: 0
}

details {
    padding: .7rem 1rem
}

summary {
    cursor: pointer;
    font-weight: 700;
    padding: .7rem 1rem;
    margin: -.7rem -1rem;
    word-break: break-all
}

details[open]>summary+* {
    margin-top: 0
}

details[open]>summary {
    margin-bottom: .5rem
}

details[open]>:last-child {
    margin-bottom: 0
}

table {
    border-collapse: collapse;
    margin: 1.5rem 0
}

td,th {
    border: 1px solid var(--border);
    text-align: start;
    padding: .5rem
}

th {
    background-color: var(--accent-bg);
    font-weight: 700
}

tr:nth-child(2n) {
    background-color: var(--accent-bg)
}

table caption {
    font-weight: 700;
    margin-bottom: .5rem
}

input,select,textarea {
    font-size: inherit;
    font-family: inherit;
    padding: .5rem;
    margin-bottom: .5rem;
    color: var(--text);
    background-color: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--standard-border-radius);
    box-shadow: none;
    max-width: 100%;
    display: inline-block
}

label {
    display: block
}

textarea:not([cols]) {
    width: 100%
}

select:not([multiple]) {
    background-image: linear-gradient(45deg,transparent 49%,var(--text) 51%),linear-gradient(135deg,var(--text) 51%,transparent 49%);
    background-position: calc(100% - 15px),calc(100% - 10px);
    background-size: 5px 5px,5px 5px;
    background-repeat: no-repeat;
    padding-inline-end:25px}

[dir=rtl] select:not([multiple]) {
    background-position: 10px,15px
}

input[type=checkbox],input[type=radio] {
    vertical-align: middle;
    position: relative;
    width: min-content
}

input[type=checkbox]+label,input[type=radio]+label {
    display: inline-block
}

input[type=radio] {
    border-radius: 100%
}

input[type=checkbox]:checked,input[type=radio]:checked {
    background-color: var(--accent)
}

input[type=checkbox]:checked:after {
    content: " ";
    width: .18em;
    height: .32em;
    border-radius: 0;
    position: absolute;
    top: .05em;
    left: .17em;
    background-color: transparent;
    border-right: solid var(--bg) .08em;
    border-bottom: solid var(--bg) .08em;
    font-size: 1.8em;
    transform: rotate(45deg)
}

input[type=radio]:checked:after {
    content: " ";
    width: .25em;
    height: .25em;
    border-radius: 100%;
    position: absolute;
    top: .125em;
    background-color: var(--bg);
    left: .125em;
    font-size: 32px
}

@media only screen and (max-width: 720px) {
    input,select,textarea {
        width:100%
    }
}

input[type=color] {
    height: 2.5rem;
    padding: .2rem
}

input[type=file] {
    border: 0
}

hr {
    border: none;
    height: 1px;
    background: var(--border);
    margin: 1rem auto
}

mark {
    padding: 2px 5px;
    border-radius: var(--standard-border-radius);
    background-color: var(--marked);
    color: #000
}

img,video {
    max-width: 100%;
    height: auto;
    border-radius: var(--standard-border-radius)
}

figure {
    margin: 0;
    display: block;
    overflow-x: auto
}

figcaption {
    text-align: center;
    font-size: .9rem;
    color: var(--text-light);
    margin-bottom: 1rem
}

blockquote {
    margin-inline-start:2rem;margin-inline-end:0;margin-block:2rem;padding: .4rem .8rem;
    border-inline-start:.35rem solid var(--accent);color: var(--text-light);
    font-style: italic
}

cite {
    font-size: .9rem;
    color: var(--text-light);
    font-style: normal
}

dt {
    color: var(--text-light)
}

code,kbd,pre,pre span,samp {
    font-family: var(--mono-font);
    color: var(--code)
}

kbd {
    color: var(--preformatted);
    border: 1px solid var(--preformatted);
    border-bottom: 3px solid var(--preformatted);
    border-radius: var(--standard-border-radius);
    padding: .1rem .4rem
}

pre {
    padding: 1rem 1.4rem;
    max-width: 100%;
    overflow: auto;
    color: var(--preformatted)
}

pre code {
    color: var(--preformatted);
    background: 0 0;
    margin: 0;
    padding: 0
}

progress {
    width: 100%
}

progress:indeterminate {
    background-color: var(--accent-bg)
}

progress::-webkit-progress-bar {
    border-radius: var(--standard-border-radius);
    background-color: var(--accent-bg)
}

progress::-webkit-progress-value {
    border-radius: var(--standard-border-radius);
    background-color: var(--accent)
}

progress::-moz-progress-bar {
    border-radius: var(--standard-border-radius);
    background-color: var(--accent);
    transition-property: width;
    transition-duration: .3s
}

progress:indeterminate::-moz-progress-bar {
    background-color: var(--accent-bg)
}

dialog {
    max-width: 40rem;
    margin: auto
}

dialog::backdrop {
    background-color: var(--bg);
    opacity: .8
}

@media only screen and (max-width: 720px) {
    dialog {
        max-width:100%;
        margin: auto 1em
    }
}

.button,.button:visited {
    display: inline-block;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    background: var(--accent);
    font-size: 1rem;
    color: var(--bg);
    padding: .7rem .9rem;
    margin: .5rem 0
}

.button:focus,.button:hover {
    filter: brightness(1.4);
    cursor: pointer
}

.notice {
    background: var(--accent-bg);
    border: 2px solid var(--border);
    border-radius: 5px;
    padding: 1.5rem;
    margin: 2rem 0
}

body {
    --card-border-color: #E1E2E6
}

header {
    height: fit-content
}

@media (prefers-color-scheme: dark) {
    body {
        --card-border-color: #4d4d4d
    }
}

.card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    border-color: var(--card-border-color);
    border-width: 1px;
    border-style: solid;
    box-shadow: 0 1px 2px #0000000d;
    padding: 32px
}

.timer-formatted {
    font-weight: 700;
    font-size: 2.25em;
    line-height: 2.5em
}
`;var vi=Object.defineProperty,_i=Object.getOwnPropertyDescriptor,Ue=(i,e,t,r)=>{for(var s=r>1?void 0:r?_i(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&vi(e,t,s),s};let ne=class extends ge{constructor(){super(...arguments),this.interval=null,this.startTime="",this.formattedTimer="--:--:--",this.timerId="room/user1/main_timer",this.shortTimerId="main_timer",this.handleTimerSet=i=>{this.interval&&clearInterval(this.interval),this.startTime=i,this.interval=setInterval(()=>{this.formattedTimer=this.formatTimer(i)},500)},this.handleTimerStopped=i=>{this.interval&&clearInterval(this.interval),this.formattedTimer=this.formatTimer(this.startTime,i)},this.handleStart=()=>{Ot({type:Qe.TIMER_START,id:this.shortTimerId})},this.handleStop=()=>{Ot({type:Qe.TIMER_STOP,id:this.shortTimerId})}}formatTimer(i,e=""){const t=(e?Oe(e):Oe()).diff(i,"second");return Oe.unix(t).utc().format("HH:mm:ss")}connectedCallback(){super.connectedCallback(),fe.on(Te.getTimerSet(this.timerId),this.handleTimerSet),fe.on(Te.getTimerStopped(this.timerId),this.handleTimerStopped)}disconnectedCallback(){super.disconnectedCallback(),fe.off(Te.getTimerSet(this.timerId),this.handleTimerSet),fe.off(Te.getTimerStopped(this.timerId),this.handleTimerStopped)}render(){return yr`
        <div class="card">
            <div class="timer-formatted">${this.formattedTimer}</div>
            <div>
                <button id="startButton" @click=${this.handleStart}>Start</button>
                <button id="stopButton" @click=${this.handleStop}>Stop</button>
            </div>
        </div>
        `}};ne.styles=[bi,Dt`

       .card {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 8px;
            border-color: var(--card-border-color);
            border-width: 1px;
            border-style: solid;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            padding: 32px;
        }

        .timer-formatted {
            font-weight: 700;
            font-size: 2.25em;
            line-height: 2.5em;
        }

    `];Ue([Tr()],ne.prototype,"formattedTimer",2);Ue([tt()],ne.prototype,"timerId",2);Ue([tt()],ne.prototype,"shortTimerId",2);ne=Ue([Sr("timer-card")],ne);Oe.extend(sr);
