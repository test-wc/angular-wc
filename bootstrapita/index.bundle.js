/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),t=new WeakMap;let a=class{constructor(o,r,t){if(this._$cssResult$=!0,t!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this.t=r}get styleSheet(){let o=this.o;const l=this.t;if(r&&void 0===o){const r=void 0!==l&&1===l.length;r&&(o=t.get(l)),void 0===o&&((this.o=o=new CSSStyleSheet).replaceSync(this.cssText),r&&t.set(l,o))}return o}toString(){return this.cssText}};const e=(o,...r)=>{const t=1===o.length?o[0]:r.reduce(((r,l,t)=>r+(o=>{if(!0===o._$cssResult$)return o.cssText;if("number"==typeof o)return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+o[t+1]),o[0]);return new a(t,o,l)},n=r?o=>o:o=>o instanceof CSSStyleSheet?(o=>{let r="";for(const l of o.cssRules)r+=l.cssText;return(o=>new a("string"==typeof o?o:o+"",void 0,l))(r)})(o):o
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:b,getOwnPropertyDescriptor:d,getOwnPropertyNames:i,getOwnPropertySymbols:m,getPrototypeOf:p}=Object,s=globalThis,h=s.trustedTypes,g=h?h.emptyScript:"",u=s.reactiveElementPolyfillSupport,y=(o,r)=>o,f={toAttribute(o,r){switch(r){case Boolean:o=o?g:null;break;case Object:case Array:o=null==o?o:JSON.stringify(o)}return o},fromAttribute(o,r){let l=o;switch(r){case Boolean:l=null!==o;break;case Number:l=null===o?null:Number(o);break;case Object:case Array:try{l=JSON.parse(o)}catch(o){l=null}}return l}},k=(o,r)=>!c(o,r),x={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),s.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(o){this._$Ei(),(this.l??=[]).push(o)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(o,r=x){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(o,r),!r.noAccessor){const l=Symbol(),t=this.getPropertyDescriptor(o,l,r);void 0!==t&&b(this.prototype,o,t)}}static getPropertyDescriptor(o,r,l){const{get:t,set:a}=d(this.prototype,o)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return t?.call(this)},set(r){const e=t?.call(this);a.call(this,r),this.requestUpdate(o,e,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)??x}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const o=p(this);o.finalize(),void 0!==o.l&&(this.l=[...o.l]),this.elementProperties=new Map(o.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const o=this.properties,r=[...i(o),...m(o)];for(const l of r)this.createProperty(l,o[l])}const o=this[Symbol.metadata];if(null!==o){const r=litPropertyMetadata.get(o);if(void 0!==r)for(const[o,l]of r)this.elementProperties.set(o,l)}this._$Eh=new Map;for(const[o,r]of this.elementProperties){const l=this._$Eu(o,r);void 0!==l&&this._$Eh.set(l,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(o){const r=[];if(Array.isArray(o)){const l=new Set(o.flat(1/0).reverse());for(const o of l)r.unshift(n(o))}else void 0!==o&&r.push(n(o));return r}static _$Eu(o,r){const l=r.attribute;return!1===l?void 0:"string"==typeof l?l:"string"==typeof o?o.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((o=>this.enableUpdating=o)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((o=>o(this)))}addController(o){(this._$EO??=new Set).add(o),void 0!==this.renderRoot&&this.isConnected&&o.hostConnected?.()}removeController(o){this._$EO?.delete(o)}_$E_(){const o=new Map,r=this.constructor.elementProperties;for(const l of r.keys())this.hasOwnProperty(l)&&(o.set(l,this[l]),delete this[l]);o.size>0&&(this._$Ep=o)}createRenderRoot(){const l=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((l,t)=>{if(r)l.adoptedStyleSheets=t.map((o=>o instanceof CSSStyleSheet?o:o.styleSheet));else for(const r of t){const t=document.createElement("style"),a=o.litNonce;void 0!==a&&t.setAttribute("nonce",a),t.textContent=r.cssText,l.appendChild(t)}})(l,this.constructor.elementStyles),l}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((o=>o.hostConnected?.()))}enableUpdating(o){}disconnectedCallback(){this._$EO?.forEach((o=>o.hostDisconnected?.()))}attributeChangedCallback(o,r,l){this._$AK(o,l)}_$EC(o,r){const l=this.constructor.elementProperties.get(o),t=this.constructor._$Eu(o,l);if(void 0!==t&&!0===l.reflect){const a=(void 0!==l.converter?.toAttribute?l.converter:f).toAttribute(r,l.type);this._$Em=o,null==a?this.removeAttribute(t):this.setAttribute(t,a),this._$Em=null}}_$AK(o,r){const l=this.constructor,t=l._$Eh.get(o);if(void 0!==t&&this._$Em!==t){const o=l.getPropertyOptions(t),a="function"==typeof o.converter?{fromAttribute:o.converter}:void 0!==o.converter?.fromAttribute?o.converter:f;this._$Em=t,this[t]=a.fromAttribute(r,o.type),this._$Em=null}}requestUpdate(o,r,l){if(void 0!==o){if(l??=this.constructor.getPropertyOptions(o),!(l.hasChanged??k)(this[o],r))return;this.P(o,r,l)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(o,r,l){this._$AL.has(o)||this._$AL.set(o,r),!0===l.reflect&&this._$Em!==o&&(this._$Ej??=new Set).add(o)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const o=this.scheduleUpdate();return null!=o&&await o,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,l]of o)!0!==l.wrapped||this._$AL.has(r)||void 0===this[r]||this.P(r,this[r],l)}let o=!1;const r=this._$AL;try{o=this.shouldUpdate(r),o?(this.willUpdate(r),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(r)):this._$EU()}catch(r){throw o=!1,this._$EU(),r}o&&this._$AE(r)}willUpdate(o){}_$AE(o){this._$EO?.forEach((o=>o.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(o)),this.updated(o)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(o){return!0}update(o){this._$Ej&&=this._$Ej.forEach((o=>this._$EC(o,this[o]))),this._$EU()}updated(o){}firstUpdated(o){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,u?.({ReactiveElement:w}),(s.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const v=globalThis,z=v.trustedTypes,$=z?z.createPolicy("lit-html",{createHTML:o=>o}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+E,C=`<${A}>`,_=document,U=()=>_.createComment(""),T=o=>null===o||"object"!=typeof o&&"function"!=typeof o,L=Array.isArray,M="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,B=/>/g,j=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,O=/"/g,I=/^(?:script|style|textarea|title)$/i,D=(o=>(r,...l)=>({_$litType$:o,strings:r,values:l}))(1),Y=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),V=new WeakMap,W=_.createTreeWalker(_,129);function Z(o,r){if(!L(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(r):r}const J=(o,r)=>{const l=o.length-1,t=[];let a,e=2===r?"<svg>":3===r?"<math>":"",n=N;for(let r=0;r<l;r++){const l=o[r];let c,b,d=-1,i=0;for(;i<l.length&&(n.lastIndex=i,b=n.exec(l),null!==b);)i=n.lastIndex,n===N?"!--"===b[1]?n=R:void 0!==b[1]?n=B:void 0!==b[2]?(I.test(b[2])&&(a=RegExp("</"+b[2],"g")),n=j):void 0!==b[3]&&(n=j):n===j?">"===b[0]?(n=a??N,d=-1):void 0===b[1]?d=-2:(d=n.lastIndex-b[2].length,c=b[1],n=void 0===b[3]?j:'"'===b[3]?O:P):n===O||n===P?n=j:n===R||n===B?n=N:(n=j,a=void 0);const m=n===j&&o[r+1].startsWith("/>")?" ":"";e+=n===N?l+C:d>=0?(t.push(c),l.slice(0,d)+S+l.slice(d)+E+m):l+E+(-2===d?r:m)}return[Z(o,e+(o[l]||"<?>")+(2===r?"</svg>":3===r?"</math>":"")),t]};class X{constructor({strings:o,_$litType$:r},l){let t;this.parts=[];let a=0,e=0;const n=o.length-1,c=this.parts,[b,d]=J(o,r);if(this.el=X.createElement(b,l),W.currentNode=this.el.content,2===r||3===r){const o=this.el.content.firstChild;o.replaceWith(...o.childNodes)}for(;null!==(t=W.nextNode())&&c.length<n;){if(1===t.nodeType){if(t.hasAttributes())for(const o of t.getAttributeNames())if(o.endsWith(S)){const r=d[e++],l=t.getAttribute(o).split(E),n=/([.?@])?(.*)/.exec(r);c.push({type:1,index:a,name:n[2],strings:l,ctor:"."===n[1]?Q:"?"===n[1]?oo:"@"===n[1]?ro:G}),t.removeAttribute(o)}else o.startsWith(E)&&(c.push({type:6,index:a}),t.removeAttribute(o));if(I.test(t.tagName)){const o=t.textContent.split(E),r=o.length-1;if(r>0){t.textContent=z?z.emptyScript:"";for(let l=0;l<r;l++)t.append(o[l],U()),W.nextNode(),c.push({type:2,index:++a});t.append(o[r],U())}}}else if(8===t.nodeType)if(t.data===A)c.push({type:2,index:a});else{let o=-1;for(;-1!==(o=t.data.indexOf(E,o+1));)c.push({type:7,index:a}),o+=E.length-1}a++}}static createElement(o,r){const l=_.createElement("template");return l.innerHTML=o,l}}function q(o,r,l=o,t){if(r===Y)return r;let a=void 0!==t?l._$Co?.[t]:l._$Cl;const e=T(r)?void 0:r._$litDirective$;return a?.constructor!==e&&(a?._$AO?.(!1),void 0===e?a=void 0:(a=new e(o),a._$AT(o,l,t)),void 0!==t?(l._$Co??=[])[t]=a:l._$Cl=a),void 0!==a&&(r=q(o,a._$AS(o,r.values),a,t)),r}class F{constructor(o,r){this._$AV=[],this._$AN=void 0,this._$AD=o,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(o){const{el:{content:r},parts:l}=this._$AD,t=(o?.creationScope??_).importNode(r,!0);W.currentNode=t;let a=W.nextNode(),e=0,n=0,c=l[0];for(;void 0!==c;){if(e===c.index){let r;2===c.type?r=new K(a,a.nextSibling,this,o):1===c.type?r=new c.ctor(a,c.name,c.strings,this,o):6===c.type&&(r=new lo(a,this,o)),this._$AV.push(r),c=l[++n]}e!==c?.index&&(a=W.nextNode(),e++)}return W.currentNode=_,t}p(o){let r=0;for(const l of this._$AV)void 0!==l&&(void 0!==l.strings?(l._$AI(o,l,r),r+=l.strings.length-2):l._$AI(o[r])),r++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(o,r,l,t){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=o,this._$AB=r,this._$AM=l,this.options=t,this._$Cv=t?.isConnected??!0}get parentNode(){let o=this._$AA.parentNode;const r=this._$AM;return void 0!==r&&11===o?.nodeType&&(o=r.parentNode),o}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(o,r=this){o=q(this,o,r),T(o)?o===H||null==o||""===o?(this._$AH!==H&&this._$AR(),this._$AH=H):o!==this._$AH&&o!==Y&&this._(o):void 0!==o._$litType$?this.$(o):void 0!==o.nodeType?this.T(o):(o=>L(o)||"function"==typeof o?.[Symbol.iterator])(o)?this.k(o):this._(o)}O(o){return this._$AA.parentNode.insertBefore(o,this._$AB)}T(o){this._$AH!==o&&(this._$AR(),this._$AH=this.O(o))}_(o){this._$AH!==H&&T(this._$AH)?this._$AA.nextSibling.data=o:this.T(_.createTextNode(o)),this._$AH=o}$(o){const{values:r,_$litType$:l}=o,t="number"==typeof l?this._$AC(o):(void 0===l.el&&(l.el=X.createElement(Z(l.h,l.h[0]),this.options)),l);if(this._$AH?._$AD===t)this._$AH.p(r);else{const o=new F(t,this),l=o.u(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(o){let r=V.get(o.strings);return void 0===r&&V.set(o.strings,r=new X(o)),r}k(o){L(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let l,t=0;for(const a of o)t===r.length?r.push(l=new K(this.O(U()),this.O(U()),this,this.options)):l=r[t],l._$AI(a),t++;t<r.length&&(this._$AR(l&&l._$AB.nextSibling,t),r.length=t)}_$AR(o=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);o&&o!==this._$AB;){const r=o.nextSibling;o.remove(),o=r}}setConnected(o){void 0===this._$AM&&(this._$Cv=o,this._$AP?.(o))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(o,r,l,t,a){this.type=1,this._$AH=H,this._$AN=void 0,this.element=o,this.name=r,this._$AM=t,this.options=a,l.length>2||""!==l[0]||""!==l[1]?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=H}_$AI(o,r=this,l,t){const a=this.strings;let e=!1;if(void 0===a)o=q(this,o,r,0),e=!T(o)||o!==this._$AH&&o!==Y,e&&(this._$AH=o);else{const t=o;let n,c;for(o=a[0],n=0;n<a.length-1;n++)c=q(this,t[l+n],r,n),c===Y&&(c=this._$AH[n]),e||=!T(c)||c!==this._$AH[n],c===H?o=H:o!==H&&(o+=(c??"")+a[n+1]),this._$AH[n]=c}e&&!t&&this.j(o)}j(o){o===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,o??"")}}class Q extends G{constructor(){super(...arguments),this.type=3}j(o){this.element[this.name]=o===H?void 0:o}}class oo extends G{constructor(){super(...arguments),this.type=4}j(o){this.element.toggleAttribute(this.name,!!o&&o!==H)}}class ro extends G{constructor(o,r,l,t,a){super(o,r,l,t,a),this.type=5}_$AI(o,r=this){if((o=q(this,o,r,0)??H)===Y)return;const l=this._$AH,t=o===H&&l!==H||o.capture!==l.capture||o.once!==l.once||o.passive!==l.passive,a=o!==H&&(l===H||t);t&&this.element.removeEventListener(this.name,this,l),a&&this.element.addEventListener(this.name,this,o),this._$AH=o}handleEvent(o){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,o):this._$AH.handleEvent(o)}}class lo{constructor(o,r,l){this.element=o,this.type=6,this._$AN=void 0,this._$AM=r,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(o){q(this,o)}}const to=v.litHtmlPolyfillSupport;to?.(X,K),(v.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ao extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const o=super.createRenderRoot();return this.renderOptions.renderBefore??=o.firstChild,o}update(o){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(o),this._$Do=((o,r,l)=>{const t=l?.renderBefore??r;let a=t._$litPart$;if(void 0===a){const o=l?.renderBefore??null;t._$litPart$=a=new K(r.insertBefore(U(),o),o,void 0,l??{})}return a._$AI(o),a})(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}ao._$litElement$=!0,ao.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ao});const eo=globalThis.litElementPolyfillSupport;eo?.({LitElement:ao}),(globalThis.litElementVersions??=[]).push("4.1.1");class no extends ao{_composeClass(...o){let r="";return o.forEach((function(o){r+=" "+o})),r.trim()}}var co=e`/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** NEUTRAL 1 ****************************************/
/***************************** NEUTRAL 2 ****************************************/
/***************************** NEUTRAL 2 / 3 ****************************************/
.primary-bg {
  background-color: #0d6efd !important;
}

.primary-color {
  color: #0d6efd !important;
}

.primary-border-color {
  border-color: #0d6efd !important;
}
.primary-border-color.border {
  border-color: #0d6efd !important;
}

.white-bg {
  background-color: #fff !important;
}

.white-color {
  color: #fff !important;
}

.white-border-color- {
  border-color: #fff !important;
}
.white-border-color-.border {
  border-color: #fff !important;
}

.primary-bg-a1 {
  background-color: hsl(210, 92.523364486%, 86.625%) !important;
}

.primary-color-a1 {
  color: hsl(210, 92.523364486%, 86.625%) !important;
}

.primary-border-color-a1 {
  border-color: hsl(210, 92.523364486%, 86.625%) !important;
}
.primary-border-color-a1.border {
  border-color: hsl(210, 92.523364486%, 86.625%) !important;
}

.primary-bg-a2 {
  background-color: hsl(211, 82.7586206897%, 76.8%) !important;
}

.primary-color-a2 {
  color: hsl(211, 82.7586206897%, 76.8%) !important;
}

.primary-border-color-a2 {
  border-color: hsl(211, 82.7586206897%, 76.8%) !important;
}
.primary-border-color-a2.border {
  border-color: hsl(211, 82.7586206897%, 76.8%) !important;
}

.primary-bg-a3 {
  background-color: hsl(210, 75.975975976%, 66.7%) !important;
}

.primary-color-a3 {
  color: hsl(210, 75.975975976%, 66.7%) !important;
}

.primary-border-color-a3 {
  border-color: hsl(210, 75.975975976%, 66.7%) !important;
}
.primary-border-color-a3.border {
  border-color: hsl(210, 75.975975976%, 66.7%) !important;
}

.primary-bg-a4 {
  background-color: hsl(210, 71.9626168224%, 57.2%) !important;
}

.primary-color-a4 {
  color: hsl(210, 71.9626168224%, 57.2%) !important;
}

.primary-border-color-a4 {
  border-color: hsl(210, 71.9626168224%, 57.2%) !important;
}
.primary-border-color-a4.border {
  border-color: hsl(210, 71.9626168224%, 57.2%) !important;
}

.primary-bg-a5 {
  background-color: hsl(210, 73.9130434783%, 48.3%) !important;
}

.primary-color-a5 {
  color: hsl(210, 73.9130434783%, 48.3%) !important;
}

.primary-border-color-a5 {
  border-color: hsl(210, 73.9130434783%, 48.3%) !important;
}
.primary-border-color-a5.border {
  border-color: hsl(210, 73.9130434783%, 48.3%) !important;
}

.primary-bg-a6 {
  background-color: hsl(210, 100%, 40%) !important;
}

.primary-color-a6 {
  color: hsl(210, 100%, 40%) !important;
}

.primary-border-color-a6 {
  border-color: hsl(210, 100%, 40%) !important;
}
.primary-border-color-a6.border {
  border-color: hsl(210, 100%, 40%) !important;
}

.primary-bg-a7 {
  background-color: hsl(210, 100%, 35%) !important;
}

.primary-color-a7 {
  color: hsl(210, 100%, 35%) !important;
}

.primary-border-color-a7 {
  border-color: hsl(210, 100%, 35%) !important;
}
.primary-border-color-a7.border {
  border-color: hsl(210, 100%, 35%) !important;
}

.primary-bg-a8 {
  background-color: hsl(210, 100%, 30%) !important;
}

.primary-color-a8 {
  color: hsl(210, 100%, 30%) !important;
}

.primary-border-color-a8 {
  border-color: hsl(210, 100%, 30%) !important;
}
.primary-border-color-a8.border {
  border-color: hsl(210, 100%, 30%) !important;
}

.primary-bg-a9 {
  background-color: hsl(210, 100%, 25%) !important;
}

.primary-color-a9 {
  color: hsl(210, 100%, 25%) !important;
}

.primary-border-color-a9 {
  border-color: hsl(210, 100%, 25%) !important;
}
.primary-border-color-a9.border {
  border-color: hsl(210, 100%, 25%) !important;
}

.primary-bg-a10 {
  background-color: hsl(210, 100%, 20%) !important;
}

.primary-color-a10 {
  color: hsl(210, 100%, 20%) !important;
}

.primary-border-color-a10 {
  border-color: hsl(210, 100%, 20%) !important;
}
.primary-border-color-a10.border {
  border-color: hsl(210, 100%, 20%) !important;
}

.primary-bg-a11 {
  background-color: hsl(210, 100%, 15%) !important;
}

.primary-color-a11 {
  color: hsl(210, 100%, 15%) !important;
}

.primary-border-color-a11 {
  border-color: hsl(210, 100%, 15%) !important;
}
.primary-border-color-a11.border {
  border-color: hsl(210, 100%, 15%) !important;
}

.primary-bg-a12 {
  background-color: hsl(210, 100%, 10%) !important;
}

.primary-color-a12 {
  color: hsl(210, 100%, 10%) !important;
}

.primary-border-color-a12 {
  border-color: hsl(210, 100%, 10%) !important;
}
.primary-border-color-a12.border {
  border-color: hsl(210, 100%, 10%) !important;
}

.primary-bg-b1 {
  background-color: hsl(210, 100%, 40%) !important;
}

.primary-color-b1 {
  color: hsl(210, 100%, 40%) !important;
}

.primary-border-color-b1 {
  border-color: hsl(210, 100%, 40%) !important;
}
.primary-border-color-b1.border {
  border-color: hsl(210, 100%, 40%) !important;
}

.primary-bg-b2 {
  background-color: hsl(210, 81.8181818182%, 38.5%) !important;
}

.primary-color-b2 {
  color: hsl(210, 81.8181818182%, 38.5%) !important;
}

.primary-border-color-b2 {
  border-color: hsl(210, 81.8181818182%, 38.5%) !important;
}
.primary-border-color-b2.border {
  border-color: hsl(210, 81.8181818182%, 38.5%) !important;
}

.primary-bg-b3 {
  background-color: hsl(210, 66.6666666667%, 36%) !important;
}

.primary-color-b3 {
  color: hsl(210, 66.6666666667%, 36%) !important;
}

.primary-border-color-b3 {
  border-color: hsl(210, 66.6666666667%, 36%) !important;
}
.primary-border-color-b3.border {
  border-color: hsl(210, 66.6666666667%, 36%) !important;
}

.primary-bg-b4 {
  background-color: hsl(210, 53.8461538462%, 32.5%) !important;
}

.primary-color-b4 {
  color: hsl(210, 53.8461538462%, 32.5%) !important;
}

.primary-border-color-b4 {
  border-color: hsl(210, 53.8461538462%, 32.5%) !important;
}
.primary-border-color-b4.border {
  border-color: hsl(210, 53.8461538462%, 32.5%) !important;
}

.primary-bg-b5 {
  background-color: hsl(210, 42.8571428571%, 28%) !important;
}

.primary-color-b5 {
  color: hsl(210, 42.8571428571%, 28%) !important;
}

.primary-border-color-b5 {
  border-color: hsl(210, 42.8571428571%, 28%) !important;
}
.primary-border-color-b5.border {
  border-color: hsl(210, 42.8571428571%, 28%) !important;
}

.primary-bg-b6 {
  background-color: hsl(210, 33.3333333333%, 22.5%) !important;
}

.primary-color-b6 {
  color: hsl(210, 33.3333333333%, 22.5%) !important;
}

.primary-border-color-b6 {
  border-color: hsl(210, 33.3333333333%, 22.5%) !important;
}
.primary-border-color-b6.border {
  border-color: hsl(210, 33.3333333333%, 22.5%) !important;
}

.primary-bg-b7 {
  background-color: hsl(210, 25%, 16%) !important;
}

.primary-color-b7 {
  color: hsl(210, 25%, 16%) !important;
}

.primary-border-color-b7 {
  border-color: hsl(210, 25%, 16%) !important;
}
.primary-border-color-b7.border {
  border-color: hsl(210, 25%, 16%) !important;
}

.primary-bg-b8 {
  background-color: hsl(210, 17.6470588235%, 8.5%) !important;
}

.primary-color-b8 {
  color: hsl(210, 17.6470588235%, 8.5%) !important;
}

.primary-border-color-b8 {
  border-color: hsl(210, 17.6470588235%, 8.5%) !important;
}
.primary-border-color-b8.border {
  border-color: hsl(210, 17.6470588235%, 8.5%) !important;
}

.primary-bg-c1 {
  background-color: hsl(210, 54.5454545455%, 91.2%) !important;
}

.primary-color-c1 {
  color: hsl(210, 54.5454545455%, 91.2%) !important;
}

.primary-border-color-c1 {
  border-color: hsl(210, 54.5454545455%, 91.2%) !important;
}
.primary-border-color-c1.border {
  border-color: hsl(210, 54.5454545455%, 91.2%) !important;
}

.primary-bg-c2 {
  background-color: hsl(210, 70.5882352941%, 86.4%) !important;
}

.primary-color-c2 {
  color: hsl(210, 70.5882352941%, 86.4%) !important;
}

.primary-border-color-c2 {
  border-color: hsl(210, 70.5882352941%, 86.4%) !important;
}
.primary-border-color-c2.border {
  border-color: hsl(210, 70.5882352941%, 86.4%) !important;
}

.primary-bg-c3 {
  background-color: hsl(210, 78.2608695652%, 81.6%) !important;
}

.primary-color-c3 {
  color: hsl(210, 78.2608695652%, 81.6%) !important;
}

.primary-border-color-c3 {
  border-color: hsl(210, 78.2608695652%, 81.6%) !important;
}
.primary-border-color-c3.border {
  border-color: hsl(210, 78.2608695652%, 81.6%) !important;
}

.primary-bg-c4 {
  background-color: hsl(210, 82.7586206897%, 76.8%) !important;
}

.primary-color-c4 {
  color: hsl(210, 82.7586206897%, 76.8%) !important;
}

.primary-border-color-c4 {
  border-color: hsl(210, 82.7586206897%, 76.8%) !important;
}
.primary-border-color-c4.border {
  border-color: hsl(210, 82.7586206897%, 76.8%) !important;
}

.primary-bg-c5 {
  background-color: hsl(210, 85.7142857143%, 72%) !important;
}

.primary-color-c5 {
  color: hsl(210, 85.7142857143%, 72%) !important;
}

.primary-border-color-c5 {
  border-color: hsl(210, 85.7142857143%, 72%) !important;
}
.primary-border-color-c5.border {
  border-color: hsl(210, 85.7142857143%, 72%) !important;
}

.primary-bg-c6 {
  background-color: hsl(210, 87.8048780488%, 67.2%) !important;
}

.primary-color-c6 {
  color: hsl(210, 87.8048780488%, 67.2%) !important;
}

.primary-border-color-c6 {
  border-color: hsl(210, 87.8048780488%, 67.2%) !important;
}
.primary-border-color-c6.border {
  border-color: hsl(210, 87.8048780488%, 67.2%) !important;
}

.primary-bg-c7 {
  background-color: hsl(210, 89.3617021277%, 62.4%) !important;
}

.primary-color-c7 {
  color: hsl(210, 89.3617021277%, 62.4%) !important;
}

.primary-border-color-c7 {
  border-color: hsl(210, 89.3617021277%, 62.4%) !important;
}
.primary-border-color-c7.border {
  border-color: hsl(210, 89.3617021277%, 62.4%) !important;
}

.primary-bg-c8 {
  background-color: hsl(210, 90.5660377358%, 57.6%) !important;
}

.primary-color-c8 {
  color: hsl(210, 90.5660377358%, 57.6%) !important;
}

.primary-border-color-c8 {
  border-color: hsl(210, 90.5660377358%, 57.6%) !important;
}
.primary-border-color-c8.border {
  border-color: hsl(210, 90.5660377358%, 57.6%) !important;
}

.primary-bg-c9 {
  background-color: hsl(210, 91.5254237288%, 52.8%) !important;
}

.primary-color-c9 {
  color: hsl(210, 91.5254237288%, 52.8%) !important;
}

.primary-border-color-c9 {
  border-color: hsl(210, 91.5254237288%, 52.8%) !important;
}
.primary-border-color-c9.border {
  border-color: hsl(210, 91.5254237288%, 52.8%) !important;
}

.primary-bg-c10 {
  background-color: hsl(210, 100%, 48%) !important;
}

.primary-color-c10 {
  color: hsl(210, 100%, 48%) !important;
}

.primary-border-color-c10 {
  border-color: hsl(210, 100%, 48%) !important;
}
.primary-border-color-c10.border {
  border-color: hsl(210, 100%, 48%) !important;
}

.primary-bg-c11 {
  background-color: hsl(210, 100%, 44%) !important;
}

.primary-color-c11 {
  color: hsl(210, 100%, 44%) !important;
}

.primary-border-color-c11 {
  border-color: hsl(210, 100%, 44%) !important;
}
.primary-border-color-c11.border {
  border-color: hsl(210, 100%, 44%) !important;
}

.primary-bg-c12 {
  background-color: hsl(210, 100%, 40%) !important;
}

.primary-color-c12 {
  color: hsl(210, 100%, 40%) !important;
}

.primary-border-color-c12 {
  border-color: hsl(210, 100%, 40%) !important;
}
.primary-border-color-c12.border {
  border-color: hsl(210, 100%, 40%) !important;
}

.analogue-1-bg {
  background-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-color {
  color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-border-color- {
  border-color: hsl(243, 100%, 57.5%) !important;
}
.analogue-1-border-color-.border {
  border-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-bg-a1 {
  background-color: hsl(243, 100%, 95%) !important;
}

.analogue-1-color-a1 {
  color: hsl(243, 100%, 95%) !important;
}

.analogue-1-border-color-a1 {
  border-color: hsl(243, 100%, 95%) !important;
}
.analogue-1-border-color-a1.border {
  border-color: hsl(243, 100%, 95%) !important;
}

.analogue-1-bg-a2 {
  background-color: hsl(243, 75%, 84%) !important;
}

.analogue-1-color-a2 {
  color: hsl(243, 75%, 84%) !important;
}

.analogue-1-border-color-a2 {
  border-color: hsl(243, 75%, 84%) !important;
}
.analogue-1-border-color-a2.border {
  border-color: hsl(243, 75%, 84%) !important;
}

.analogue-1-bg-a3 {
  background-color: hsl(243, 69.696969697%, 73.6%) !important;
}

.analogue-1-color-a3 {
  color: hsl(243, 69.696969697%, 73.6%) !important;
}

.analogue-1-border-color-a3 {
  border-color: hsl(243, 69.696969697%, 73.6%) !important;
}
.analogue-1-border-color-a3.border {
  border-color: hsl(243, 69.696969697%, 73.6%) !important;
}

.analogue-1-bg-a4 {
  background-color: hsl(243, 66.8508287293%, 63.8%) !important;
}

.analogue-1-color-a4 {
  color: hsl(243, 66.8508287293%, 63.8%) !important;
}

.analogue-1-border-color-a4 {
  border-color: hsl(243, 66.8508287293%, 63.8%) !important;
}
.analogue-1-border-color-a4.border {
  border-color: hsl(243, 66.8508287293%, 63.8%) !important;
}

.analogue-1-bg-a5 {
  background-color: hsl(243, 64.7577092511%, 54.6%) !important;
}

.analogue-1-color-a5 {
  color: hsl(243, 64.7577092511%, 54.6%) !important;
}

.analogue-1-border-color-a5 {
  border-color: hsl(243, 64.7577092511%, 54.6%) !important;
}
.analogue-1-border-color-a5.border {
  border-color: hsl(243, 64.7577092511%, 54.6%) !important;
}

.analogue-1-bg-a6 {
  background-color: hsl(243, 73.9130434783%, 46%) !important;
}

.analogue-1-color-a6 {
  color: hsl(243, 73.9130434783%, 46%) !important;
}

.analogue-1-border-color-a6 {
  border-color: hsl(243, 73.9130434783%, 46%) !important;
}
.analogue-1-border-color-a6.border {
  border-color: hsl(243, 73.9130434783%, 46%) !important;
}

.analogue-1-bg-a7 {
  background-color: hsl(243, 73.9130434783%, 40.25%) !important;
}

.analogue-1-color-a7 {
  color: hsl(243, 73.9130434783%, 40.25%) !important;
}

.analogue-1-border-color-a7 {
  border-color: hsl(243, 73.9130434783%, 40.25%) !important;
}
.analogue-1-border-color-a7.border {
  border-color: hsl(243, 73.9130434783%, 40.25%) !important;
}

.analogue-1-bg-a8 {
  background-color: hsl(243, 73.9130434783%, 34.5%) !important;
}

.analogue-1-color-a8 {
  color: hsl(243, 73.9130434783%, 34.5%) !important;
}

.analogue-1-border-color-a8 {
  border-color: hsl(243, 73.9130434783%, 34.5%) !important;
}
.analogue-1-border-color-a8.border {
  border-color: hsl(243, 73.9130434783%, 34.5%) !important;
}

.analogue-1-bg-a9 {
  background-color: hsl(243, 73.9130434783%, 28.75%) !important;
}

.analogue-1-color-a9 {
  color: hsl(243, 73.9130434783%, 28.75%) !important;
}

.analogue-1-border-color-a9 {
  border-color: hsl(243, 73.9130434783%, 28.75%) !important;
}
.analogue-1-border-color-a9.border {
  border-color: hsl(243, 73.9130434783%, 28.75%) !important;
}

.analogue-1-bg-a10 {
  background-color: hsl(243, 73.9130434783%, 23%) !important;
}

.analogue-1-color-a10 {
  color: hsl(243, 73.9130434783%, 23%) !important;
}

.analogue-1-border-color-a10 {
  border-color: hsl(243, 73.9130434783%, 23%) !important;
}
.analogue-1-border-color-a10.border {
  border-color: hsl(243, 73.9130434783%, 23%) !important;
}

.analogue-1-bg-a11 {
  background-color: hsl(243, 73.9130434783%, 17.25%) !important;
}

.analogue-1-color-a11 {
  color: hsl(243, 73.9130434783%, 17.25%) !important;
}

.analogue-1-border-color-a11 {
  border-color: hsl(243, 73.9130434783%, 17.25%) !important;
}
.analogue-1-border-color-a11.border {
  border-color: hsl(243, 73.9130434783%, 17.25%) !important;
}

.analogue-1-bg-a12 {
  background-color: hsl(243, 73.9130434783%, 11.5%) !important;
}

.analogue-1-color-a12 {
  color: hsl(243, 73.9130434783%, 11.5%) !important;
}

.analogue-1-border-color-a12 {
  border-color: hsl(243, 73.9130434783%, 11.5%) !important;
}
.analogue-1-border-color-a12.border {
  border-color: hsl(243, 73.9130434783%, 11.5%) !important;
}

.analogue-2-bg {
  background-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-color {
  color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-border-color- {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}
.analogue-2-border-color-.border {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-bg-a1 {
  background-color: hsl(178, 100%, 90%) !important;
}

.analogue-2-color-a1 {
  color: hsl(178, 100%, 90%) !important;
}

.analogue-2-border-color-a1 {
  border-color: hsl(178, 100%, 90%) !important;
}
.analogue-2-border-color-a1.border {
  border-color: hsl(178, 100%, 90%) !important;
}

.analogue-2-bg-a2 {
  background-color: hsl(178, 80.7692307692%, 79.2%) !important;
}

.analogue-2-color-a2 {
  color: hsl(178, 80.7692307692%, 79.2%) !important;
}

.analogue-2-border-color-a2 {
  border-color: hsl(178, 80.7692307692%, 79.2%) !important;
}
.analogue-2-border-color-a2.border {
  border-color: hsl(178, 80.7692307692%, 79.2%) !important;
}

.analogue-2-bg-a3 {
  background-color: hsl(178, 74.1935483871%, 69%) !important;
}

.analogue-2-color-a3 {
  color: hsl(178, 74.1935483871%, 69%) !important;
}

.analogue-2-border-color-a3 {
  border-color: hsl(178, 74.1935483871%, 69%) !important;
}
.analogue-2-border-color-a3.border {
  border-color: hsl(178, 74.1935483871%, 69%) !important;
}

.analogue-2-bg-a4 {
  background-color: hsl(178, 70.4433497537%, 59.4%) !important;
}

.analogue-2-color-a4 {
  color: hsl(178, 70.4433497537%, 59.4%) !important;
}

.analogue-2-border-color-a4 {
  border-color: hsl(178, 70.4433497537%, 59.4%) !important;
}
.analogue-2-border-color-a4.border {
  border-color: hsl(178, 70.4433497537%, 59.4%) !important;
}

.analogue-2-bg-a5 {
  background-color: hsl(178, 67.7419354839%, 50.4%) !important;
}

.analogue-2-color-a5 {
  color: hsl(178, 67.7419354839%, 50.4%) !important;
}

.analogue-2-border-color-a5 {
  border-color: hsl(178, 67.7419354839%, 50.4%) !important;
}
.analogue-2-border-color-a5.border {
  border-color: hsl(178, 67.7419354839%, 50.4%) !important;
}

.analogue-2-bg-a6 {
  background-color: hsl(178, 90.4761904762%, 42%) !important;
}

.analogue-2-color-a6 {
  color: hsl(178, 90.4761904762%, 42%) !important;
}

.analogue-2-border-color-a6 {
  border-color: hsl(178, 90.4761904762%, 42%) !important;
}
.analogue-2-border-color-a6.border {
  border-color: hsl(178, 90.4761904762%, 42%) !important;
}

.analogue-2-bg-a7 {
  background-color: hsl(178, 90.4761904762%, 36.75%) !important;
}

.analogue-2-color-a7 {
  color: hsl(178, 90.4761904762%, 36.75%) !important;
}

.analogue-2-border-color-a7 {
  border-color: hsl(178, 90.4761904762%, 36.75%) !important;
}
.analogue-2-border-color-a7.border {
  border-color: hsl(178, 90.4761904762%, 36.75%) !important;
}

.analogue-2-bg-a8 {
  background-color: hsl(178, 90.4761904762%, 31.5%) !important;
}

.analogue-2-color-a8 {
  color: hsl(178, 90.4761904762%, 31.5%) !important;
}

.analogue-2-border-color-a8 {
  border-color: hsl(178, 90.4761904762%, 31.5%) !important;
}
.analogue-2-border-color-a8.border {
  border-color: hsl(178, 90.4761904762%, 31.5%) !important;
}

.analogue-2-bg-a9 {
  background-color: hsl(178, 90.4761904762%, 26.25%) !important;
}

.analogue-2-color-a9 {
  color: hsl(178, 90.4761904762%, 26.25%) !important;
}

.analogue-2-border-color-a9 {
  border-color: hsl(178, 90.4761904762%, 26.25%) !important;
}
.analogue-2-border-color-a9.border {
  border-color: hsl(178, 90.4761904762%, 26.25%) !important;
}

.analogue-2-bg-a10 {
  background-color: hsl(178, 90.4761904762%, 21%) !important;
}

.analogue-2-color-a10 {
  color: hsl(178, 90.4761904762%, 21%) !important;
}

.analogue-2-border-color-a10 {
  border-color: hsl(178, 90.4761904762%, 21%) !important;
}
.analogue-2-border-color-a10.border {
  border-color: hsl(178, 90.4761904762%, 21%) !important;
}

.analogue-2-bg-a11 {
  background-color: hsl(178, 90.4761904762%, 15.75%) !important;
}

.analogue-2-color-a11 {
  color: hsl(178, 90.4761904762%, 15.75%) !important;
}

.analogue-2-border-color-a11 {
  border-color: hsl(178, 90.4761904762%, 15.75%) !important;
}
.analogue-2-border-color-a11.border {
  border-color: hsl(178, 90.4761904762%, 15.75%) !important;
}

.analogue-2-bg-a12 {
  background-color: hsl(178, 90.4761904762%, 10.5%) !important;
}

.analogue-2-color-a12 {
  color: hsl(178, 90.4761904762%, 10.5%) !important;
}

.analogue-2-border-color-a12 {
  border-color: hsl(178, 90.4761904762%, 10.5%) !important;
}
.analogue-2-border-color-a12.border {
  border-color: hsl(178, 90.4761904762%, 10.5%) !important;
}

.complementary-1-bg {
  background-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-color {
  color: hsl(36, 100%, 50%) !important;
}

.complementary-1-border-color- {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}
.complementary-1-border-color-.border {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-bg-a1 {
  background-color: hsl(351, 100%, 99.5%) !important;
}

.complementary-1-color-a1 {
  color: hsl(351, 100%, 99.5%) !important;
}

.complementary-1-border-color-a1 {
  border-color: hsl(351, 100%, 99.5%) !important;
}
.complementary-1-border-color-a1.border {
  border-color: hsl(351, 100%, 99.5%) !important;
}

.complementary-1-bg-a2 {
  background-color: hsl(351, 64.2857142857%, 88.8%) !important;
}

.complementary-1-color-a2 {
  color: hsl(351, 64.2857142857%, 88.8%) !important;
}

.complementary-1-border-color-a2 {
  border-color: hsl(351, 64.2857142857%, 88.8%) !important;
}
.complementary-1-border-color-a2.border {
  border-color: hsl(351, 64.2857142857%, 88.8%) !important;
}

.complementary-1-bg-a3 {
  background-color: hsl(351, 63.3027522936%, 78.2%) !important;
}

.complementary-1-color-a3 {
  color: hsl(351, 63.3027522936%, 78.2%) !important;
}

.complementary-1-border-color-a3 {
  border-color: hsl(351, 63.3027522936%, 78.2%) !important;
}
.complementary-1-border-color-a3.border {
  border-color: hsl(351, 63.3027522936%, 78.2%) !important;
}

.complementary-1-bg-a4 {
  background-color: hsl(351, 62.2641509434%, 68.2%) !important;
}

.complementary-1-color-a4 {
  color: hsl(351, 62.2641509434%, 68.2%) !important;
}

.complementary-1-border-color-a4 {
  border-color: hsl(351, 62.2641509434%, 68.2%) !important;
}
.complementary-1-border-color-a4.border {
  border-color: hsl(351, 62.2641509434%, 68.2%) !important;
}

.complementary-1-bg-a5 {
  background-color: hsl(351, 61.1650485437%, 58.8%) !important;
}

.complementary-1-color-a5 {
  color: hsl(351, 61.1650485437%, 58.8%) !important;
}

.complementary-1-border-color-a5 {
  border-color: hsl(351, 61.1650485437%, 58.8%) !important;
}
.complementary-1-border-color-a5.border {
  border-color: hsl(351, 61.1650485437%, 58.8%) !important;
}

.complementary-1-bg-a6 {
  background-color: hsl(351, 60%, 50%) !important;
}

.complementary-1-color-a6 {
  color: hsl(351, 60%, 50%) !important;
}

.complementary-1-border-color-a6 {
  border-color: hsl(351, 60%, 50%) !important;
}
.complementary-1-border-color-a6.border {
  border-color: hsl(351, 60%, 50%) !important;
}

.complementary-1-bg-a7 {
  background-color: hsl(351, 60%, 43.75%) !important;
}

.complementary-1-color-a7 {
  color: hsl(351, 60%, 43.75%) !important;
}

.complementary-1-border-color-a7 {
  border-color: hsl(351, 60%, 43.75%) !important;
}
.complementary-1-border-color-a7.border {
  border-color: hsl(351, 60%, 43.75%) !important;
}

.complementary-1-bg-a8 {
  background-color: hsl(351, 60%, 37.5%) !important;
}

.complementary-1-color-a8 {
  color: hsl(351, 60%, 37.5%) !important;
}

.complementary-1-border-color-a8 {
  border-color: hsl(351, 60%, 37.5%) !important;
}
.complementary-1-border-color-a8.border {
  border-color: hsl(351, 60%, 37.5%) !important;
}

.complementary-1-bg-a9 {
  background-color: hsl(351, 60%, 31.25%) !important;
}

.complementary-1-color-a9 {
  color: hsl(351, 60%, 31.25%) !important;
}

.complementary-1-border-color-a9 {
  border-color: hsl(351, 60%, 31.25%) !important;
}
.complementary-1-border-color-a9.border {
  border-color: hsl(351, 60%, 31.25%) !important;
}

.complementary-1-bg-a10 {
  background-color: hsl(351, 60%, 25%) !important;
}

.complementary-1-color-a10 {
  color: hsl(351, 60%, 25%) !important;
}

.complementary-1-border-color-a10 {
  border-color: hsl(351, 60%, 25%) !important;
}
.complementary-1-border-color-a10.border {
  border-color: hsl(351, 60%, 25%) !important;
}

.complementary-1-bg-a11 {
  background-color: hsl(351, 60%, 18.75%) !important;
}

.complementary-1-color-a11 {
  color: hsl(351, 60%, 18.75%) !important;
}

.complementary-1-border-color-a11 {
  border-color: hsl(351, 60%, 18.75%) !important;
}
.complementary-1-border-color-a11.border {
  border-color: hsl(351, 60%, 18.75%) !important;
}

.complementary-1-bg-a12 {
  background-color: hsl(351, 60%, 12.5%) !important;
}

.complementary-1-color-a12 {
  color: hsl(351, 60%, 12.5%) !important;
}

.complementary-1-border-color-a12 {
  border-color: hsl(351, 60%, 12.5%) !important;
}
.complementary-1-border-color-a12.border {
  border-color: hsl(351, 60%, 12.5%) !important;
}

.complementary-2-bg {
  background-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-color {
  color: hsl(36, 100%, 50%) !important;
}

.complementary-2-border-color- {
  border-color: hsl(36, 100%, 50%) !important;
}
.complementary-2-border-color-.border {
  border-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-bg-a1 {
  background-color: hsl(36, 100%, 87.5%) !important;
}

.complementary-2-color-a1 {
  color: hsl(36, 100%, 87.5%) !important;
}

.complementary-2-border-color-a1 {
  border-color: hsl(36, 100%, 87.5%) !important;
}
.complementary-2-border-color-a1.border {
  border-color: hsl(36, 100%, 87.5%) !important;
}

.complementary-2-bg-a2 {
  background-color: hsl(36, 82.7586206897%, 76.8%) !important;
}

.complementary-2-color-a2 {
  color: hsl(36, 82.7586206897%, 76.8%) !important;
}

.complementary-2-border-color-a2 {
  border-color: hsl(36, 82.7586206897%, 76.8%) !important;
}
.complementary-2-border-color-a2.border {
  border-color: hsl(36, 82.7586206897%, 76.8%) !important;
}

.complementary-2-bg-a3 {
  background-color: hsl(36, 75.975975976%, 66.7%) !important;
}

.complementary-2-color-a3 {
  color: hsl(36, 75.975975976%, 66.7%) !important;
}

.complementary-2-border-color-a3 {
  border-color: hsl(36, 75.975975976%, 66.7%) !important;
}
.complementary-2-border-color-a3.border {
  border-color: hsl(36, 75.975975976%, 66.7%) !important;
}

.complementary-2-bg-a4 {
  background-color: hsl(36, 71.9626168224%, 57.2%) !important;
}

.complementary-2-color-a4 {
  color: hsl(36, 71.9626168224%, 57.2%) !important;
}

.complementary-2-border-color-a4 {
  border-color: hsl(36, 71.9626168224%, 57.2%) !important;
}
.complementary-2-border-color-a4.border {
  border-color: hsl(36, 71.9626168224%, 57.2%) !important;
}

.complementary-2-bg-a5 {
  background-color: hsl(36, 73.9130434783%, 48.3%) !important;
}

.complementary-2-color-a5 {
  color: hsl(36, 73.9130434783%, 48.3%) !important;
}

.complementary-2-border-color-a5 {
  border-color: hsl(36, 73.9130434783%, 48.3%) !important;
}
.complementary-2-border-color-a5.border {
  border-color: hsl(36, 73.9130434783%, 48.3%) !important;
}

.complementary-2-bg-a6 {
  background-color: hsl(36, 100%, 40%) !important;
}

.complementary-2-color-a6 {
  color: hsl(36, 100%, 40%) !important;
}

.complementary-2-border-color-a6 {
  border-color: hsl(36, 100%, 40%) !important;
}
.complementary-2-border-color-a6.border {
  border-color: hsl(36, 100%, 40%) !important;
}

.complementary-2-bg-a7 {
  background-color: hsl(36, 100%, 35%) !important;
}

.complementary-2-color-a7 {
  color: hsl(36, 100%, 35%) !important;
}

.complementary-2-border-color-a7 {
  border-color: hsl(36, 100%, 35%) !important;
}
.complementary-2-border-color-a7.border {
  border-color: hsl(36, 100%, 35%) !important;
}

.complementary-2-bg-a8 {
  background-color: hsl(36, 100%, 30%) !important;
}

.complementary-2-color-a8 {
  color: hsl(36, 100%, 30%) !important;
}

.complementary-2-border-color-a8 {
  border-color: hsl(36, 100%, 30%) !important;
}
.complementary-2-border-color-a8.border {
  border-color: hsl(36, 100%, 30%) !important;
}

.complementary-2-bg-a9 {
  background-color: hsl(36, 100%, 25%) !important;
}

.complementary-2-color-a9 {
  color: hsl(36, 100%, 25%) !important;
}

.complementary-2-border-color-a9 {
  border-color: hsl(36, 100%, 25%) !important;
}
.complementary-2-border-color-a9.border {
  border-color: hsl(36, 100%, 25%) !important;
}

.complementary-2-bg-a10 {
  background-color: hsl(36, 100%, 20%) !important;
}

.complementary-2-color-a10 {
  color: hsl(36, 100%, 20%) !important;
}

.complementary-2-border-color-a10 {
  border-color: hsl(36, 100%, 20%) !important;
}
.complementary-2-border-color-a10.border {
  border-color: hsl(36, 100%, 20%) !important;
}

.complementary-2-bg-a11 {
  background-color: hsl(36, 100%, 15%) !important;
}

.complementary-2-color-a11 {
  color: hsl(36, 100%, 15%) !important;
}

.complementary-2-border-color-a11 {
  border-color: hsl(36, 100%, 15%) !important;
}
.complementary-2-border-color-a11.border {
  border-color: hsl(36, 100%, 15%) !important;
}

.complementary-2-bg-a12 {
  background-color: hsl(36, 100%, 10%) !important;
}

.complementary-2-color-a12 {
  color: hsl(36, 100%, 10%) !important;
}

.complementary-2-border-color-a12 {
  border-color: hsl(36, 100%, 10%) !important;
}
.complementary-2-border-color-a12.border {
  border-color: hsl(36, 100%, 10%) !important;
}

.complementary-3-bg {
  background-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-color {
  color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-border-color- {
  border-color: hsl(159, 100%, 40.5%) !important;
}
.complementary-3-border-color-.border {
  border-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-bg-a1 {
  background-color: hsl(159, 100%, 87.5%) !important;
}

.complementary-3-color-a1 {
  color: hsl(159, 100%, 87.5%) !important;
}

.complementary-3-border-color-a1 {
  border-color: hsl(159, 100%, 87.5%) !important;
}
.complementary-3-border-color-a1.border {
  border-color: hsl(159, 100%, 87.5%) !important;
}

.complementary-3-bg-a2 {
  background-color: hsl(159, 82.7586206897%, 76.8%) !important;
}

.complementary-3-color-a2 {
  color: hsl(159, 82.7586206897%, 76.8%) !important;
}

.complementary-3-border-color-a2 {
  border-color: hsl(159, 82.7586206897%, 76.8%) !important;
}
.complementary-3-border-color-a2.border {
  border-color: hsl(159, 82.7586206897%, 76.8%) !important;
}

.complementary-3-bg-a3 {
  background-color: hsl(159, 75.975975976%, 66.7%) !important;
}

.complementary-3-color-a3 {
  color: hsl(159, 75.975975976%, 66.7%) !important;
}

.complementary-3-border-color-a3 {
  border-color: hsl(159, 75.975975976%, 66.7%) !important;
}
.complementary-3-border-color-a3.border {
  border-color: hsl(159, 75.975975976%, 66.7%) !important;
}

.complementary-3-bg-a4 {
  background-color: hsl(159, 71.9626168224%, 57.2%) !important;
}

.complementary-3-color-a4 {
  color: hsl(159, 71.9626168224%, 57.2%) !important;
}

.complementary-3-border-color-a4 {
  border-color: hsl(159, 71.9626168224%, 57.2%) !important;
}
.complementary-3-border-color-a4.border {
  border-color: hsl(159, 71.9626168224%, 57.2%) !important;
}

.complementary-3-bg-a5 {
  background-color: hsl(159, 73.9130434783%, 48.3%) !important;
}

.complementary-3-color-a5 {
  color: hsl(159, 73.9130434783%, 48.3%) !important;
}

.complementary-3-border-color-a5 {
  border-color: hsl(159, 73.9130434783%, 48.3%) !important;
}
.complementary-3-border-color-a5.border {
  border-color: hsl(159, 73.9130434783%, 48.3%) !important;
}

.complementary-3-bg-a6 {
  background-color: hsl(159, 100%, 40%) !important;
}

.complementary-3-color-a6 {
  color: hsl(159, 100%, 40%) !important;
}

.complementary-3-border-color-a6 {
  border-color: hsl(159, 100%, 40%) !important;
}
.complementary-3-border-color-a6.border {
  border-color: hsl(159, 100%, 40%) !important;
}

.complementary-3-bg-a7 {
  background-color: hsl(159, 100%, 35%) !important;
}

.complementary-3-color-a7 {
  color: hsl(159, 100%, 35%) !important;
}

.complementary-3-border-color-a7 {
  border-color: hsl(159, 100%, 35%) !important;
}
.complementary-3-border-color-a7.border {
  border-color: hsl(159, 100%, 35%) !important;
}

.complementary-3-bg-a8 {
  background-color: hsl(159, 100%, 30%) !important;
}

.complementary-3-color-a8 {
  color: hsl(159, 100%, 30%) !important;
}

.complementary-3-border-color-a8 {
  border-color: hsl(159, 100%, 30%) !important;
}
.complementary-3-border-color-a8.border {
  border-color: hsl(159, 100%, 30%) !important;
}

.complementary-3-bg-a9 {
  background-color: hsl(159, 100%, 25%) !important;
}

.complementary-3-color-a9 {
  color: hsl(159, 100%, 25%) !important;
}

.complementary-3-border-color-a9 {
  border-color: hsl(159, 100%, 25%) !important;
}
.complementary-3-border-color-a9.border {
  border-color: hsl(159, 100%, 25%) !important;
}

.complementary-3-bg-a10 {
  background-color: hsl(159, 100%, 20%) !important;
}

.complementary-3-color-a10 {
  color: hsl(159, 100%, 20%) !important;
}

.complementary-3-border-color-a10 {
  border-color: hsl(159, 100%, 20%) !important;
}
.complementary-3-border-color-a10.border {
  border-color: hsl(159, 100%, 20%) !important;
}

.complementary-3-bg-a11 {
  background-color: hsl(159, 100%, 15%) !important;
}

.complementary-3-color-a11 {
  color: hsl(159, 100%, 15%) !important;
}

.complementary-3-border-color-a11 {
  border-color: hsl(159, 100%, 15%) !important;
}
.complementary-3-border-color-a11.border {
  border-color: hsl(159, 100%, 15%) !important;
}

.complementary-3-bg-a12 {
  background-color: hsl(159, 100%, 10%) !important;
}

.complementary-3-color-a12 {
  color: hsl(159, 100%, 10%) !important;
}

.complementary-3-border-color-a12 {
  border-color: hsl(159, 100%, 10%) !important;
}
.complementary-3-border-color-a12.border {
  border-color: hsl(159, 100%, 10%) !important;
}

.analogue-1-bg-b1 {
  background-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-color-b1 {
  color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-border-color-b1 {
  border-color: hsl(243, 100%, 57.5%) !important;
}
.analogue-1-border-color-b1.border {
  border-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-bg-b2 {
  background-color: hsl(243, 77.1428571429%, 56.25%) !important;
}

.analogue-1-color-b2 {
  color: hsl(243, 77.1428571429%, 56.25%) !important;
}

.analogue-1-border-color-b2 {
  border-color: hsl(243, 77.1428571429%, 56.25%) !important;
}
.analogue-1-border-color-b2.border {
  border-color: hsl(243, 77.1428571429%, 56.25%) !important;
}

.analogue-1-bg-b3 {
  background-color: hsl(243, 56.5217391304%, 54%) !important;
}

.analogue-1-color-b3 {
  color: hsl(243, 56.5217391304%, 54%) !important;
}

.analogue-1-border-color-b3 {
  border-color: hsl(243, 56.5217391304%, 54%) !important;
}
.analogue-1-border-color-b3.border {
  border-color: hsl(243, 56.5217391304%, 54%) !important;
}

.analogue-1-bg-b4 {
  background-color: hsl(243, 39.0862944162%, 50.75%) !important;
}

.analogue-1-color-b4 {
  color: hsl(243, 39.0862944162%, 50.75%) !important;
}

.analogue-1-border-color-b4 {
  border-color: hsl(243, 39.0862944162%, 50.75%) !important;
}
.analogue-1-border-color-b4.border {
  border-color: hsl(243, 39.0862944162%, 50.75%) !important;
}

.analogue-1-bg-b5 {
  background-color: hsl(243, 29.0322580645%, 46.5%) !important;
}

.analogue-1-color-b5 {
  color: hsl(243, 29.0322580645%, 46.5%) !important;
}

.analogue-1-border-color-b5 {
  border-color: hsl(243, 29.0322580645%, 46.5%) !important;
}
.analogue-1-border-color-b5.border {
  border-color: hsl(243, 29.0322580645%, 46.5%) !important;
}

.analogue-1-bg-b6 {
  background-color: hsl(243, 21.2121212121%, 41.25%) !important;
}

.analogue-1-color-b6 {
  color: hsl(243, 21.2121212121%, 41.25%) !important;
}

.analogue-1-border-color-b6 {
  border-color: hsl(243, 21.2121212121%, 41.25%) !important;
}
.analogue-1-border-color-b6.border {
  border-color: hsl(243, 21.2121212121%, 41.25%) !important;
}

.analogue-1-bg-b7 {
  background-color: hsl(243, 14.2857142857%, 35%) !important;
}

.analogue-1-color-b7 {
  color: hsl(243, 14.2857142857%, 35%) !important;
}

.analogue-1-border-color-b7 {
  border-color: hsl(243, 14.2857142857%, 35%) !important;
}
.analogue-1-border-color-b7.border {
  border-color: hsl(243, 14.2857142857%, 35%) !important;
}

.analogue-1-bg-b8 {
  background-color: hsl(243, 8.1081081081%, 27.75%) !important;
}

.analogue-1-color-b8 {
  color: hsl(243, 8.1081081081%, 27.75%) !important;
}

.analogue-1-border-color-b8 {
  border-color: hsl(243, 8.1081081081%, 27.75%) !important;
}
.analogue-1-border-color-b8.border {
  border-color: hsl(243, 8.1081081081%, 27.75%) !important;
}

.analogue-2-bg-b1 {
  background-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-color-b1 {
  color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-border-color-b1 {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}
.analogue-2-border-color-b1.border {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-bg-b2 {
  background-color: hsl(178, 73.9130434783%, 43.125%) !important;
}

.analogue-2-color-b2 {
  color: hsl(178, 73.9130434783%, 43.125%) !important;
}

.analogue-2-border-color-b2 {
  border-color: hsl(178, 73.9130434783%, 43.125%) !important;
}
.analogue-2-border-color-b2.border {
  border-color: hsl(178, 73.9130434783%, 43.125%) !important;
}

.analogue-2-bg-b3 {
  background-color: hsl(178, 60%, 40.625%) !important;
}

.analogue-2-color-b3 {
  color: hsl(178, 60%, 40.625%) !important;
}

.analogue-2-border-color-b3 {
  border-color: hsl(178, 60%, 40.625%) !important;
}
.analogue-2-border-color-b3.border {
  border-color: hsl(178, 60%, 40.625%) !important;
}

.analogue-2-bg-b4 {
  background-color: hsl(178, 48.1481481481%, 37.125%) !important;
}

.analogue-2-color-b4 {
  color: hsl(178, 48.1481481481%, 37.125%) !important;
}

.analogue-2-border-color-b4 {
  border-color: hsl(178, 48.1481481481%, 37.125%) !important;
}
.analogue-2-border-color-b4.border {
  border-color: hsl(178, 48.1481481481%, 37.125%) !important;
}

.analogue-2-bg-b5 {
  background-color: hsl(178, 37.9310344828%, 32.625%) !important;
}

.analogue-2-color-b5 {
  color: hsl(178, 37.9310344828%, 32.625%) !important;
}

.analogue-2-border-color-b5 {
  border-color: hsl(178, 37.9310344828%, 32.625%) !important;
}
.analogue-2-border-color-b5.border {
  border-color: hsl(178, 37.9310344828%, 32.625%) !important;
}

.analogue-2-bg-b6 {
  background-color: hsl(178, 29.0322580645%, 27.125%) !important;
}

.analogue-2-color-b6 {
  color: hsl(178, 29.0322580645%, 27.125%) !important;
}

.analogue-2-border-color-b6 {
  border-color: hsl(178, 29.0322580645%, 27.125%) !important;
}
.analogue-2-border-color-b6.border {
  border-color: hsl(178, 29.0322580645%, 27.125%) !important;
}

.analogue-2-bg-b7 {
  background-color: hsl(178, 21.2121212121%, 20.625%) !important;
}

.analogue-2-color-b7 {
  color: hsl(178, 21.2121212121%, 20.625%) !important;
}

.analogue-2-border-color-b7 {
  border-color: hsl(178, 21.2121212121%, 20.625%) !important;
}
.analogue-2-border-color-b7.border {
  border-color: hsl(178, 21.2121212121%, 20.625%) !important;
}

.analogue-2-bg-b8 {
  background-color: hsl(178, 14.2857142857%, 13.125%) !important;
}

.analogue-2-color-b8 {
  color: hsl(178, 14.2857142857%, 13.125%) !important;
}

.analogue-2-border-color-b8 {
  border-color: hsl(178, 14.2857142857%, 13.125%) !important;
}
.analogue-2-border-color-b8.border {
  border-color: hsl(178, 14.2857142857%, 13.125%) !important;
}

.complementary-1-bg-b1 {
  background-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-color-b1 {
  color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-border-color-b1 {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}
.complementary-1-border-color-b1.border {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-bg-b2 {
  background-color: hsl(351, 68.5039370079%, 58.725%) !important;
}

.complementary-1-color-b2 {
  color: hsl(351, 68.5039370079%, 58.725%) !important;
}

.complementary-1-border-color-b2 {
  border-color: hsl(351, 68.5039370079%, 58.725%) !important;
}
.complementary-1-border-color-b2.border {
  border-color: hsl(351, 68.5039370079%, 58.725%) !important;
}

.complementary-1-bg-b3 {
  background-color: hsl(351, 47.9343520091%, 55.825%) !important;
}

.complementary-1-color-b3 {
  color: hsl(351, 47.9343520091%, 55.825%) !important;
}

.complementary-1-border-color-b3 {
  border-color: hsl(351, 47.9343520091%, 55.825%) !important;
}
.complementary-1-border-color-b3.border {
  border-color: hsl(351, 47.9343520091%, 55.825%) !important;
}

.complementary-1-bg-b4 {
  background-color: hsl(351, 31.3572542902%, 51.925%) !important;
}

.complementary-1-color-b4 {
  color: hsl(351, 31.3572542902%, 51.925%) !important;
}

.complementary-1-border-color-b4 {
  border-color: hsl(351, 31.3572542902%, 51.925%) !important;
}
.complementary-1-border-color-b4.border {
  border-color: hsl(351, 31.3572542902%, 51.925%) !important;
}

.complementary-1-bg-b5 {
  background-color: hsl(351, 21.2121212121%, 47.025%) !important;
}

.complementary-1-color-b5 {
  color: hsl(351, 21.2121212121%, 47.025%) !important;
}

.complementary-1-border-color-b5 {
  border-color: hsl(351, 21.2121212121%, 47.025%) !important;
}
.complementary-1-border-color-b5.border {
  border-color: hsl(351, 21.2121212121%, 47.025%) !important;
}

.complementary-1-bg-b6 {
  background-color: hsl(351, 14.2857142857%, 41.125%) !important;
}

.complementary-1-color-b6 {
  color: hsl(351, 14.2857142857%, 41.125%) !important;
}

.complementary-1-border-color-b6 {
  border-color: hsl(351, 14.2857142857%, 41.125%) !important;
}
.complementary-1-border-color-b6.border {
  border-color: hsl(351, 14.2857142857%, 41.125%) !important;
}

.complementary-1-bg-b7 {
  background-color: hsl(351, 8.1081081081%, 34.225%) !important;
}

.complementary-1-color-b7 {
  color: hsl(351, 8.1081081081%, 34.225%) !important;
}

.complementary-1-border-color-b7 {
  border-color: hsl(351, 8.1081081081%, 34.225%) !important;
}
.complementary-1-border-color-b7.border {
  border-color: hsl(351, 8.1081081081%, 34.225%) !important;
}

.complementary-1-bg-b8 {
  background-color: hsl(351, 2.5641025641%, 26.325%) !important;
}

.complementary-1-color-b8 {
  color: hsl(351, 2.5641025641%, 26.325%) !important;
}

.complementary-1-border-color-b8 {
  border-color: hsl(351, 2.5641025641%, 26.325%) !important;
}
.complementary-1-border-color-b8.border {
  border-color: hsl(351, 2.5641025641%, 26.325%) !important;
}

.complementary-2-bg-b1 {
  background-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-color-b1 {
  color: hsl(36, 100%, 50%) !important;
}

.complementary-2-border-color-b1 {
  border-color: hsl(36, 100%, 50%) !important;
}
.complementary-2-border-color-b1.border {
  border-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-bg-b2 {
  background-color: hsl(36, 81.8181818182%, 49.5%) !important;
}

.complementary-2-color-b2 {
  color: hsl(36, 81.8181818182%, 49.5%) !important;
}

.complementary-2-border-color-b2 {
  border-color: hsl(36, 81.8181818182%, 49.5%) !important;
}
.complementary-2-border-color-b2.border {
  border-color: hsl(36, 81.8181818182%, 49.5%) !important;
}

.complementary-2-bg-b3 {
  background-color: hsl(36, 66.6666666667%, 48%) !important;
}

.complementary-2-color-b3 {
  color: hsl(36, 66.6666666667%, 48%) !important;
}

.complementary-2-border-color-b3 {
  border-color: hsl(36, 66.6666666667%, 48%) !important;
}
.complementary-2-border-color-b3.border {
  border-color: hsl(36, 66.6666666667%, 48%) !important;
}

.complementary-2-bg-b4 {
  background-color: hsl(36, 53.8461538462%, 45.5%) !important;
}

.complementary-2-color-b4 {
  color: hsl(36, 53.8461538462%, 45.5%) !important;
}

.complementary-2-border-color-b4 {
  border-color: hsl(36, 53.8461538462%, 45.5%) !important;
}
.complementary-2-border-color-b4.border {
  border-color: hsl(36, 53.8461538462%, 45.5%) !important;
}

.complementary-2-bg-b5 {
  background-color: hsl(36, 42.8571428571%, 42%) !important;
}

.complementary-2-color-b5 {
  color: hsl(36, 42.8571428571%, 42%) !important;
}

.complementary-2-border-color-b5 {
  border-color: hsl(36, 42.8571428571%, 42%) !important;
}
.complementary-2-border-color-b5.border {
  border-color: hsl(36, 42.8571428571%, 42%) !important;
}

.complementary-2-bg-b6 {
  background-color: hsl(36, 33.3333333333%, 37.5%) !important;
}

.complementary-2-color-b6 {
  color: hsl(36, 33.3333333333%, 37.5%) !important;
}

.complementary-2-border-color-b6 {
  border-color: hsl(36, 33.3333333333%, 37.5%) !important;
}
.complementary-2-border-color-b6.border {
  border-color: hsl(36, 33.3333333333%, 37.5%) !important;
}

.complementary-2-bg-b7 {
  background-color: hsl(36, 25%, 32%) !important;
}

.complementary-2-color-b7 {
  color: hsl(36, 25%, 32%) !important;
}

.complementary-2-border-color-b7 {
  border-color: hsl(36, 25%, 32%) !important;
}
.complementary-2-border-color-b7.border {
  border-color: hsl(36, 25%, 32%) !important;
}

.complementary-2-bg-b8 {
  background-color: hsl(36, 17.6470588235%, 25.5%) !important;
}

.complementary-2-color-b8 {
  color: hsl(36, 17.6470588235%, 25.5%) !important;
}

.complementary-2-border-color-b8 {
  border-color: hsl(36, 17.6470588235%, 25.5%) !important;
}
.complementary-2-border-color-b8.border {
  border-color: hsl(36, 17.6470588235%, 25.5%) !important;
}

.complementary-3-bg-b1 {
  background-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-color-b1 {
  color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-border-color-b1 {
  border-color: hsl(159, 100%, 40.5%) !important;
}
.complementary-3-border-color-b1.border {
  border-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-bg-b2 {
  background-color: hsl(159, 81.8181818182%, 39.05%) !important;
}

.complementary-3-color-b2 {
  color: hsl(159, 81.8181818182%, 39.05%) !important;
}

.complementary-3-border-color-b2 {
  border-color: hsl(159, 81.8181818182%, 39.05%) !important;
}
.complementary-3-border-color-b2.border {
  border-color: hsl(159, 81.8181818182%, 39.05%) !important;
}

.complementary-3-bg-b3 {
  background-color: hsl(159, 66.6666666667%, 36.6%) !important;
}

.complementary-3-color-b3 {
  color: hsl(159, 66.6666666667%, 36.6%) !important;
}

.complementary-3-border-color-b3 {
  border-color: hsl(159, 66.6666666667%, 36.6%) !important;
}
.complementary-3-border-color-b3.border {
  border-color: hsl(159, 66.6666666667%, 36.6%) !important;
}

.complementary-3-bg-b4 {
  background-color: hsl(159, 53.8461538462%, 33.15%) !important;
}

.complementary-3-color-b4 {
  color: hsl(159, 53.8461538462%, 33.15%) !important;
}

.complementary-3-border-color-b4 {
  border-color: hsl(159, 53.8461538462%, 33.15%) !important;
}
.complementary-3-border-color-b4.border {
  border-color: hsl(159, 53.8461538462%, 33.15%) !important;
}

.complementary-3-bg-b5 {
  background-color: hsl(159, 42.8571428571%, 28.7%) !important;
}

.complementary-3-color-b5 {
  color: hsl(159, 42.8571428571%, 28.7%) !important;
}

.complementary-3-border-color-b5 {
  border-color: hsl(159, 42.8571428571%, 28.7%) !important;
}
.complementary-3-border-color-b5.border {
  border-color: hsl(159, 42.8571428571%, 28.7%) !important;
}

.complementary-3-bg-b6 {
  background-color: hsl(159, 33.3333333333%, 23.25%) !important;
}

.complementary-3-color-b6 {
  color: hsl(159, 33.3333333333%, 23.25%) !important;
}

.complementary-3-border-color-b6 {
  border-color: hsl(159, 33.3333333333%, 23.25%) !important;
}
.complementary-3-border-color-b6.border {
  border-color: hsl(159, 33.3333333333%, 23.25%) !important;
}

.complementary-3-bg-b7 {
  background-color: hsl(159, 25%, 16.8%) !important;
}

.complementary-3-color-b7 {
  color: hsl(159, 25%, 16.8%) !important;
}

.complementary-3-border-color-b7 {
  border-color: hsl(159, 25%, 16.8%) !important;
}
.complementary-3-border-color-b7.border {
  border-color: hsl(159, 25%, 16.8%) !important;
}

.complementary-3-bg-b8 {
  background-color: hsl(159, 17.6470588235%, 9.35%) !important;
}

.complementary-3-color-b8 {
  color: hsl(159, 17.6470588235%, 9.35%) !important;
}

.complementary-3-border-color-b8 {
  border-color: hsl(159, 17.6470588235%, 9.35%) !important;
}
.complementary-3-border-color-b8.border {
  border-color: hsl(159, 17.6470588235%, 9.35%) !important;
}

.neutral-1-bg {
  background-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-color {
  color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-border-color- {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}
.neutral-1-border-color-.border {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-bg-a1 {
  background-color: hsl(210, 6.2290689886%, 92.535%) !important;
}

.neutral-1-color-a1 {
  color: hsl(210, 6.2290689886%, 92.535%) !important;
}

.neutral-1-border-color-a1 {
  border-color: hsl(210, 6.2290689886%, 92.535%) !important;
}
.neutral-1-border-color-a1.border {
  border-color: hsl(210, 6.2290689886%, 92.535%) !important;
}

.neutral-1-bg-a2 {
  background-color: hsl(210, 2.9799029799%, 85.57%) !important;
}

.neutral-1-color-a2 {
  color: hsl(210, 2.9799029799%, 85.57%) !important;
}

.neutral-1-border-color-a2 {
  border-color: hsl(210, 2.9799029799%, 85.57%) !important;
}
.neutral-1-border-color-a2.border {
  border-color: hsl(210, 2.9799029799%, 85.57%) !important;
}

.neutral-1-bg-a3 {
  background-color: hsl(210, 3.6255162919%, 78.21%) !important;
}

.neutral-1-color-a3 {
  color: hsl(210, 3.6255162919%, 78.21%) !important;
}

.neutral-1-border-color-a3 {
  border-color: hsl(210, 3.6255162919%, 78.21%) !important;
}
.neutral-1-border-color-a3.border {
  border-color: hsl(210, 3.6255162919%, 78.21%) !important;
}

.neutral-1-bg-a4 {
  background-color: hsl(210, 7.1618037135%, 69.84%) !important;
}

.neutral-1-color-a4 {
  color: hsl(210, 7.1618037135%, 69.84%) !important;
}

.neutral-1-border-color-a4 {
  border-color: hsl(210, 7.1618037135%, 69.84%) !important;
}
.neutral-1-border-color-a4.border {
  border-color: hsl(210, 7.1618037135%, 69.84%) !important;
}

.neutral-1-bg-a5 {
  background-color: hsl(210, 8.4967320261%, 61.75%) !important;
}

.neutral-1-color-a5 {
  color: hsl(210, 8.4967320261%, 61.75%) !important;
}

.neutral-1-border-color-a5 {
  border-color: hsl(210, 8.4967320261%, 61.75%) !important;
}
.neutral-1-border-color-a5.border {
  border-color: hsl(210, 8.4967320261%, 61.75%) !important;
}

.neutral-1-bg-a6 {
  background-color: hsl(210, 12.1338912134%, 52.2%) !important;
}

.neutral-1-color-a6 {
  color: hsl(210, 12.1338912134%, 52.2%) !important;
}

.neutral-1-border-color-a6 {
  border-color: hsl(210, 12.1338912134%, 52.2%) !important;
}
.neutral-1-border-color-a6.border {
  border-color: hsl(210, 12.1338912134%, 52.2%) !important;
}

.neutral-1-bg-a7 {
  background-color: hsl(210, 17.6470588235%, 43.35%) !important;
}

.neutral-1-color-a7 {
  color: hsl(210, 17.6470588235%, 43.35%) !important;
}

.neutral-1-border-color-a7 {
  border-color: hsl(210, 17.6470588235%, 43.35%) !important;
}
.neutral-1-border-color-a7.border {
  border-color: hsl(210, 17.6470588235%, 43.35%) !important;
}

.neutral-1-bg-a8 {
  background-color: hsl(210, 25%, 35.2%) !important;
}

.neutral-1-color-a8 {
  color: hsl(210, 25%, 35.2%) !important;
}

.neutral-1-border-color-a8 {
  border-color: hsl(210, 25%, 35.2%) !important;
}
.neutral-1-border-color-a8.border {
  border-color: hsl(210, 25%, 35.2%) !important;
}

.neutral-1-bg-a9 {
  background-color: hsl(210, 33.3333333333%, 27.75%) !important;
}

.neutral-1-color-a9 {
  color: hsl(210, 33.3333333333%, 27.75%) !important;
}

.neutral-1-border-color-a9 {
  border-color: hsl(210, 33.3333333333%, 27.75%) !important;
}
.neutral-1-border-color-a9.border {
  border-color: hsl(210, 33.3333333333%, 27.75%) !important;
}

.neutral-1-bg-a10 {
  background-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-color-a10 {
  color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-border-color-a10 {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}
.neutral-1-border-color-a10.border {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-2-bg {
  background-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-color {
  color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-border-color- {
  border-color: hsl(210, 32.2033898305%, 92.625%);
}

.neutral-2-bg-b1 {
  background-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-color-b1 {
  color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-border-color-b1 {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}
.neutral-2-border-color-b1.border {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-bg-b2 {
  background-color: hsl(210, 9.0909090909%, 78%) !important;
}

.neutral-2-color-b2 {
  color: hsl(210, 9.0909090909%, 78%) !important;
}

.neutral-2-border-color-b2 {
  border-color: hsl(210, 9.0909090909%, 78%) !important;
}
.neutral-2-border-color-b2.border {
  border-color: hsl(210, 9.0909090909%, 78%) !important;
}

.neutral-2-bg-b3 {
  background-color: hsl(210, 4.4368600683%, 63.375%) !important;
}

.neutral-2-color-b3 {
  color: hsl(210, 4.4368600683%, 63.375%) !important;
}

.neutral-2-border-color-b3 {
  border-color: hsl(210, 4.4368600683%, 63.375%) !important;
}
.neutral-2-border-color-b3.border {
  border-color: hsl(210, 4.4368600683%, 63.375%) !important;
}

.neutral-2-bg-b4 {
  background-color: hsl(210, 2.5641025641%, 48.75%) !important;
}

.neutral-2-color-b4 {
  color: hsl(210, 2.5641025641%, 48.75%) !important;
}

.neutral-2-border-color-b4 {
  border-color: hsl(210, 2.5641025641%, 48.75%) !important;
}
.neutral-2-border-color-b4.border {
  border-color: hsl(210, 2.5641025641%, 48.75%) !important;
}

.neutral-2-bg-b5 {
  background-color: hsl(210, 2.0408163265%, 34.3%) !important;
}

.neutral-2-color-b5 {
  color: hsl(210, 2.0408163265%, 34.3%) !important;
}

.neutral-2-border-color-b5 {
  border-color: hsl(210, 2.0408163265%, 34.3%) !important;
}
.neutral-2-border-color-b5.border {
  border-color: hsl(210, 2.0408163265%, 34.3%) !important;
}

.neutral-2-bg-b6 {
  background-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-color-b6 {
  color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-border-color-b6 {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}
.neutral-2-border-color-b6.border {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-bg-b7 {
  background-color: hsl(210, 4.7120418848%, 4.775%) !important;
}

.neutral-2-color-b7 {
  color: hsl(210, 4.7120418848%, 4.775%) !important;
}

.neutral-2-border-color-b7 {
  border-color: hsl(210, 4.7120418848%, 4.775%) !important;
}
.neutral-2-border-color-b7.border {
  border-color: hsl(210, 4.7120418848%, 4.775%) !important;
}

.neutral-2-bg-a1 {
  background-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-color-a1 {
  color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-border-color-a1 {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}
.neutral-2-border-color-a1.border {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-bg-a2 {
  background-color: hsl(210, 13.7931034483%, 76.8%) !important;
}

.neutral-2-color-a2 {
  color: hsl(210, 13.7931034483%, 76.8%) !important;
}

.neutral-2-border-color-a2 {
  border-color: hsl(210, 13.7931034483%, 76.8%) !important;
}
.neutral-2-border-color-a2.border {
  border-color: hsl(210, 13.7931034483%, 76.8%) !important;
}

.neutral-2-bg-a3 {
  background-color: hsl(210, 6.103286385%, 62.725%) !important;
}

.neutral-2-color-a3 {
  color: hsl(210, 6.103286385%, 62.725%) !important;
}

.neutral-2-border-color-a3 {
  border-color: hsl(210, 6.103286385%, 62.725%) !important;
}
.neutral-2-border-color-a3.border {
  border-color: hsl(210, 6.103286385%, 62.725%) !important;
}

.neutral-2-bg-a4 {
  background-color: hsl(210, 3.6269430052%, 48.25%) !important;
}

.neutral-2-color-a4 {
  color: hsl(210, 3.6269430052%, 48.25%) !important;
}

.neutral-2-border-color-a4 {
  border-color: hsl(210, 3.6269430052%, 48.25%) !important;
}
.neutral-2-border-color-a4.border {
  border-color: hsl(210, 3.6269430052%, 48.25%) !important;
}

.neutral-2-bg-a5 {
  background-color: hsl(210, 3.6269430052%, 33.775%) !important;
}

.neutral-2-color-a5 {
  color: hsl(210, 3.6269430052%, 33.775%) !important;
}

.neutral-2-border-color-a5 {
  border-color: hsl(210, 3.6269430052%, 33.775%) !important;
}
.neutral-2-border-color-a5.border {
  border-color: hsl(210, 3.6269430052%, 33.775%) !important;
}

.neutral-2-bg-a6 {
  background-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-color-a6 {
  color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-border-color-a6 {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}
.neutral-2-border-color-a6.border {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-bg-a7 {
  background-color: hsl(210, 4.7120418848%, 9.55%) !important;
}

.neutral-2-color-a7 {
  color: hsl(210, 4.7120418848%, 9.55%) !important;
}

.neutral-2-border-color-a7 {
  border-color: hsl(210, 4.7120418848%, 9.55%) !important;
}
.neutral-2-border-color-a7.border {
  border-color: hsl(210, 4.7120418848%, 9.55%) !important;
}

.lightgrey-bg-a1 {
  background-color: hsl(210, 3%, 85%) !important;
}

.lightgrey-color-a1 {
  color: hsl(210, 3%, 85%) !important;
}

.lightgrey-border-color-a1 {
  border-color: hsl(210, 3%, 85%) !important;
}
.lightgrey-border-color-a1.border {
  border-color: hsl(210, 3%, 85%) !important;
}

.lightgrey-bg-a2 {
  background-color: #edf5fc !important;
}

.lightgrey-color-a2 {
  color: #edf5fc !important;
}

.lightgrey-border-color-a2 {
  border-color: #edf5fc !important;
}
.lightgrey-border-color-a2.border {
  border-color: #edf5fc !important;
}

.lightgrey-bg-a3 {
  background-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-color-a3 {
  color: hsl(210, 62%, 97%) !important;
}

.lightgrey-border-color-a3 {
  border-color: hsl(210, 62%, 97%) !important;
}
.lightgrey-border-color-a3.border {
  border-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-bg-a4 {
  background-color: #f5f9fc !important;
}

.lightgrey-color-a4 {
  color: #f5f9fc !important;
}

.lightgrey-border-color-a4 {
  border-color: #f5f9fc !important;
}
.lightgrey-border-color-a4.border {
  border-color: #f5f9fc !important;
}

.lightgrey-bg-b1 {
  background-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-color-b1 {
  color: hsl(210, 62%, 97%) !important;
}

.lightgrey-border-color-b1 {
  border-color: hsl(210, 62%, 97%) !important;
}
.lightgrey-border-color-b1.border {
  border-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-bg-b2 {
  background-color: #ebf2fa !important;
}

.lightgrey-color-b2 {
  color: #ebf2fa !important;
}

.lightgrey-border-color-b2 {
  border-color: #ebf2fa !important;
}
.lightgrey-border-color-b2.border {
  border-color: #ebf2fa !important;
}

.lightgrey-bg-b3 {
  background-color: #edf4fa !important;
}

.lightgrey-color-b3 {
  color: #edf4fa !important;
}

.lightgrey-border-color-b3 {
  border-color: #edf4fa !important;
}
.lightgrey-border-color-b3.border {
  border-color: #edf4fa !important;
}

.lightgrey-bg-b4 {
  background-color: #f2f6fa !important;
}

.lightgrey-color-b4 {
  color: #f2f6fa !important;
}

.lightgrey-border-color-b4 {
  border-color: #f2f6fa !important;
}
.lightgrey-border-color-b4.border {
  border-color: #f2f6fa !important;
}

.lightgrey-bg-c1 {
  background-color: #f7f9fa !important;
}

.lightgrey-color-c1 {
  color: #f7f9fa !important;
}

.lightgrey-border-color-c1 {
  border-color: #f7f9fa !important;
}
.lightgrey-border-color-c1.border {
  border-color: #f7f9fa !important;
}

.lightgrey-bg-c2 {
  background-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-color-c2 {
  color: hsl(210, 62%, 97%) !important;
}

.lightgrey-border-color-c2 {
  border-color: hsl(210, 62%, 97%) !important;
}
.lightgrey-border-color-c2.border {
  border-color: hsl(210, 62%, 97%) !important;
}

:focus:not(.focus--mouse) {
  border-color: #fd7e14 !important;
  box-shadow: 0 0 0 2px #fd7e14 !important;
  outline: none !important;
}

[tabindex="-1"]:focus:not(:focus-visible) {
  box-shadow: none;
}

.focus--mouse:not(.btn) {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

.icon {
  width: 32px;
  height: 32px;
  vertical-align: middle;
}
.icon.icon-padded {
  padding: 8px;
}
.icon.icon-xs {
  width: 16px;
  height: 16px;
}
.icon.icon-xs.icon-padded {
  padding: 4px;
}
.icon.icon-sm {
  width: 24px;
  height: 24px;
}
.icon.icon-sm.icon-padded {
  padding: 6px;
}
.icon.icon-lg {
  width: 48px;
  height: 48px;
}
.icon.icon-lg.icon-padded {
  padding: 12px;
}
.icon.icon-xl {
  width: 64px;
  height: 64px;
}
.icon.icon-xl.icon-padded {
  padding: 16px;
}

.icon-primary {
  fill: #0d6efd !important;
}

.icon-secondary {
  fill: #6c757d !important;
}

.icon-success {
  fill: #198754 !important;
}

.icon-info {
  fill: #0dcaf0 !important;
}

.icon-warning {
  fill: #ffc107 !important;
}

.icon-danger {
  fill: #dc3545 !important;
}

.icon-light {
  fill: #f8f9fa !important;
}

.icon-dark {
  fill: #212529 !important;
}

.icon-black {
  fill: #000 !important;
}

.icon-white {
  fill: #fff !important;
}

.icon-100 {
  fill: #f8f9fa !important;
}

.icon-200 {
  fill: #e9ecef !important;
}

.icon-300 {
  fill: #dee2e6 !important;
}

.icon-400 {
  fill: #ced4da !important;
}

.icon-500 {
  fill: #adb5bd !important;
}

.icon-600 {
  fill: #6c757d !important;
}

.icon-700 {
  fill: #495057 !important;
}

.icon-800 {
  fill: #343a40 !important;
}

.icon-900 {
  fill: #212529 !important;
}`;class bo extends no{static styles=co;static properties={name:"",type:"primary",background:""};render(){return D`
      <svg class="icon icon-${this.type} ${this.background?"bg-"+this.background:""}"><use href="/bootstrap-italia/svg/sprites.svg#${this.name}"></use></svg>
    `}}customElements.define("bsi-icon",bo);for(var io,mo=[],po=0;po<256;++po)mo.push((po+256).toString(16).slice(1));var so=new Uint8Array(16);function ho(){if(!io&&!(io="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return io(so)}var go={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function uo(o,r,l){if(go.randomUUID&&!r&&!o)return go.randomUUID();var t=(o=o||{}).random||(o.rng||ho)();return t[6]=15&t[6]|64,t[8]=63&t[8]|128,function(o,r=0){return(mo[o[r+0]]+mo[o[r+1]]+mo[o[r+2]]+mo[o[r+3]]+"-"+mo[o[r+4]]+mo[o[r+5]]+"-"+mo[o[r+6]]+mo[o[r+7]]+"-"+mo[o[r+8]]+mo[o[r+9]]+"-"+mo[o[r+10]]+mo[o[r+11]]+mo[o[r+12]]+mo[o[r+13]]+mo[o[r+14]]+mo[o[r+15]]).toLowerCase()}(t)}let yo=!1,fo=[];class ko{constructor(o,r){this.id=o,this._callback=r}dispose(){xo(this.id)}_execute(o){this._callback(o)}}const xo=o=>{fo=fo.filter((r=>r.id!==o))};var wo=e`/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** NEUTRAL 1 ****************************************/
/***************************** NEUTRAL 2 ****************************************/
/***************************** NEUTRAL 2 / 3 ****************************************/
.primary-bg {
  background-color: #0d6efd !important;
}

.primary-color {
  color: #0d6efd !important;
}

.primary-border-color {
  border-color: #0d6efd !important;
}
.primary-border-color.border {
  border-color: #0d6efd !important;
}

.white-bg {
  background-color: #fff !important;
}

.white-color {
  color: #fff !important;
}

.white-border-color- {
  border-color: #fff !important;
}
.white-border-color-.border {
  border-color: #fff !important;
}

.primary-bg-a1 {
  background-color: hsl(210, 92.523364486%, 86.625%) !important;
}

.primary-color-a1 {
  color: hsl(210, 92.523364486%, 86.625%) !important;
}

.primary-border-color-a1 {
  border-color: hsl(210, 92.523364486%, 86.625%) !important;
}
.primary-border-color-a1.border {
  border-color: hsl(210, 92.523364486%, 86.625%) !important;
}

.primary-bg-a2 {
  background-color: hsl(211, 82.7586206897%, 76.8%) !important;
}

.primary-color-a2 {
  color: hsl(211, 82.7586206897%, 76.8%) !important;
}

.primary-border-color-a2 {
  border-color: hsl(211, 82.7586206897%, 76.8%) !important;
}
.primary-border-color-a2.border {
  border-color: hsl(211, 82.7586206897%, 76.8%) !important;
}

.primary-bg-a3 {
  background-color: hsl(210, 75.975975976%, 66.7%) !important;
}

.primary-color-a3 {
  color: hsl(210, 75.975975976%, 66.7%) !important;
}

.primary-border-color-a3 {
  border-color: hsl(210, 75.975975976%, 66.7%) !important;
}
.primary-border-color-a3.border {
  border-color: hsl(210, 75.975975976%, 66.7%) !important;
}

.primary-bg-a4 {
  background-color: hsl(210, 71.9626168224%, 57.2%) !important;
}

.primary-color-a4 {
  color: hsl(210, 71.9626168224%, 57.2%) !important;
}

.primary-border-color-a4 {
  border-color: hsl(210, 71.9626168224%, 57.2%) !important;
}
.primary-border-color-a4.border {
  border-color: hsl(210, 71.9626168224%, 57.2%) !important;
}

.primary-bg-a5 {
  background-color: hsl(210, 73.9130434783%, 48.3%) !important;
}

.primary-color-a5 {
  color: hsl(210, 73.9130434783%, 48.3%) !important;
}

.primary-border-color-a5 {
  border-color: hsl(210, 73.9130434783%, 48.3%) !important;
}
.primary-border-color-a5.border {
  border-color: hsl(210, 73.9130434783%, 48.3%) !important;
}

.primary-bg-a6 {
  background-color: hsl(210, 100%, 40%) !important;
}

.primary-color-a6 {
  color: hsl(210, 100%, 40%) !important;
}

.primary-border-color-a6 {
  border-color: hsl(210, 100%, 40%) !important;
}
.primary-border-color-a6.border {
  border-color: hsl(210, 100%, 40%) !important;
}

.primary-bg-a7 {
  background-color: hsl(210, 100%, 35%) !important;
}

.primary-color-a7 {
  color: hsl(210, 100%, 35%) !important;
}

.primary-border-color-a7 {
  border-color: hsl(210, 100%, 35%) !important;
}
.primary-border-color-a7.border {
  border-color: hsl(210, 100%, 35%) !important;
}

.primary-bg-a8 {
  background-color: hsl(210, 100%, 30%) !important;
}

.primary-color-a8 {
  color: hsl(210, 100%, 30%) !important;
}

.primary-border-color-a8 {
  border-color: hsl(210, 100%, 30%) !important;
}
.primary-border-color-a8.border {
  border-color: hsl(210, 100%, 30%) !important;
}

.primary-bg-a9 {
  background-color: hsl(210, 100%, 25%) !important;
}

.primary-color-a9 {
  color: hsl(210, 100%, 25%) !important;
}

.primary-border-color-a9 {
  border-color: hsl(210, 100%, 25%) !important;
}
.primary-border-color-a9.border {
  border-color: hsl(210, 100%, 25%) !important;
}

.primary-bg-a10 {
  background-color: hsl(210, 100%, 20%) !important;
}

.primary-color-a10 {
  color: hsl(210, 100%, 20%) !important;
}

.primary-border-color-a10 {
  border-color: hsl(210, 100%, 20%) !important;
}
.primary-border-color-a10.border {
  border-color: hsl(210, 100%, 20%) !important;
}

.primary-bg-a11 {
  background-color: hsl(210, 100%, 15%) !important;
}

.primary-color-a11 {
  color: hsl(210, 100%, 15%) !important;
}

.primary-border-color-a11 {
  border-color: hsl(210, 100%, 15%) !important;
}
.primary-border-color-a11.border {
  border-color: hsl(210, 100%, 15%) !important;
}

.primary-bg-a12 {
  background-color: hsl(210, 100%, 10%) !important;
}

.primary-color-a12 {
  color: hsl(210, 100%, 10%) !important;
}

.primary-border-color-a12 {
  border-color: hsl(210, 100%, 10%) !important;
}
.primary-border-color-a12.border {
  border-color: hsl(210, 100%, 10%) !important;
}

.primary-bg-b1 {
  background-color: hsl(210, 100%, 40%) !important;
}

.primary-color-b1 {
  color: hsl(210, 100%, 40%) !important;
}

.primary-border-color-b1 {
  border-color: hsl(210, 100%, 40%) !important;
}
.primary-border-color-b1.border {
  border-color: hsl(210, 100%, 40%) !important;
}

.primary-bg-b2 {
  background-color: hsl(210, 81.8181818182%, 38.5%) !important;
}

.primary-color-b2 {
  color: hsl(210, 81.8181818182%, 38.5%) !important;
}

.primary-border-color-b2 {
  border-color: hsl(210, 81.8181818182%, 38.5%) !important;
}
.primary-border-color-b2.border {
  border-color: hsl(210, 81.8181818182%, 38.5%) !important;
}

.primary-bg-b3 {
  background-color: hsl(210, 66.6666666667%, 36%) !important;
}

.primary-color-b3 {
  color: hsl(210, 66.6666666667%, 36%) !important;
}

.primary-border-color-b3 {
  border-color: hsl(210, 66.6666666667%, 36%) !important;
}
.primary-border-color-b3.border {
  border-color: hsl(210, 66.6666666667%, 36%) !important;
}

.primary-bg-b4 {
  background-color: hsl(210, 53.8461538462%, 32.5%) !important;
}

.primary-color-b4 {
  color: hsl(210, 53.8461538462%, 32.5%) !important;
}

.primary-border-color-b4 {
  border-color: hsl(210, 53.8461538462%, 32.5%) !important;
}
.primary-border-color-b4.border {
  border-color: hsl(210, 53.8461538462%, 32.5%) !important;
}

.primary-bg-b5 {
  background-color: hsl(210, 42.8571428571%, 28%) !important;
}

.primary-color-b5 {
  color: hsl(210, 42.8571428571%, 28%) !important;
}

.primary-border-color-b5 {
  border-color: hsl(210, 42.8571428571%, 28%) !important;
}
.primary-border-color-b5.border {
  border-color: hsl(210, 42.8571428571%, 28%) !important;
}

.primary-bg-b6 {
  background-color: hsl(210, 33.3333333333%, 22.5%) !important;
}

.primary-color-b6 {
  color: hsl(210, 33.3333333333%, 22.5%) !important;
}

.primary-border-color-b6 {
  border-color: hsl(210, 33.3333333333%, 22.5%) !important;
}
.primary-border-color-b6.border {
  border-color: hsl(210, 33.3333333333%, 22.5%) !important;
}

.primary-bg-b7 {
  background-color: hsl(210, 25%, 16%) !important;
}

.primary-color-b7 {
  color: hsl(210, 25%, 16%) !important;
}

.primary-border-color-b7 {
  border-color: hsl(210, 25%, 16%) !important;
}
.primary-border-color-b7.border {
  border-color: hsl(210, 25%, 16%) !important;
}

.primary-bg-b8 {
  background-color: hsl(210, 17.6470588235%, 8.5%) !important;
}

.primary-color-b8 {
  color: hsl(210, 17.6470588235%, 8.5%) !important;
}

.primary-border-color-b8 {
  border-color: hsl(210, 17.6470588235%, 8.5%) !important;
}
.primary-border-color-b8.border {
  border-color: hsl(210, 17.6470588235%, 8.5%) !important;
}

.primary-bg-c1 {
  background-color: hsl(210, 54.5454545455%, 91.2%) !important;
}

.primary-color-c1 {
  color: hsl(210, 54.5454545455%, 91.2%) !important;
}

.primary-border-color-c1 {
  border-color: hsl(210, 54.5454545455%, 91.2%) !important;
}
.primary-border-color-c1.border {
  border-color: hsl(210, 54.5454545455%, 91.2%) !important;
}

.primary-bg-c2 {
  background-color: hsl(210, 70.5882352941%, 86.4%) !important;
}

.primary-color-c2 {
  color: hsl(210, 70.5882352941%, 86.4%) !important;
}

.primary-border-color-c2 {
  border-color: hsl(210, 70.5882352941%, 86.4%) !important;
}
.primary-border-color-c2.border {
  border-color: hsl(210, 70.5882352941%, 86.4%) !important;
}

.primary-bg-c3 {
  background-color: hsl(210, 78.2608695652%, 81.6%) !important;
}

.primary-color-c3 {
  color: hsl(210, 78.2608695652%, 81.6%) !important;
}

.primary-border-color-c3 {
  border-color: hsl(210, 78.2608695652%, 81.6%) !important;
}
.primary-border-color-c3.border {
  border-color: hsl(210, 78.2608695652%, 81.6%) !important;
}

.primary-bg-c4 {
  background-color: hsl(210, 82.7586206897%, 76.8%) !important;
}

.primary-color-c4 {
  color: hsl(210, 82.7586206897%, 76.8%) !important;
}

.primary-border-color-c4 {
  border-color: hsl(210, 82.7586206897%, 76.8%) !important;
}
.primary-border-color-c4.border {
  border-color: hsl(210, 82.7586206897%, 76.8%) !important;
}

.primary-bg-c5 {
  background-color: hsl(210, 85.7142857143%, 72%) !important;
}

.primary-color-c5 {
  color: hsl(210, 85.7142857143%, 72%) !important;
}

.primary-border-color-c5 {
  border-color: hsl(210, 85.7142857143%, 72%) !important;
}
.primary-border-color-c5.border {
  border-color: hsl(210, 85.7142857143%, 72%) !important;
}

.primary-bg-c6 {
  background-color: hsl(210, 87.8048780488%, 67.2%) !important;
}

.primary-color-c6 {
  color: hsl(210, 87.8048780488%, 67.2%) !important;
}

.primary-border-color-c6 {
  border-color: hsl(210, 87.8048780488%, 67.2%) !important;
}
.primary-border-color-c6.border {
  border-color: hsl(210, 87.8048780488%, 67.2%) !important;
}

.primary-bg-c7 {
  background-color: hsl(210, 89.3617021277%, 62.4%) !important;
}

.primary-color-c7 {
  color: hsl(210, 89.3617021277%, 62.4%) !important;
}

.primary-border-color-c7 {
  border-color: hsl(210, 89.3617021277%, 62.4%) !important;
}
.primary-border-color-c7.border {
  border-color: hsl(210, 89.3617021277%, 62.4%) !important;
}

.primary-bg-c8 {
  background-color: hsl(210, 90.5660377358%, 57.6%) !important;
}

.primary-color-c8 {
  color: hsl(210, 90.5660377358%, 57.6%) !important;
}

.primary-border-color-c8 {
  border-color: hsl(210, 90.5660377358%, 57.6%) !important;
}
.primary-border-color-c8.border {
  border-color: hsl(210, 90.5660377358%, 57.6%) !important;
}

.primary-bg-c9 {
  background-color: hsl(210, 91.5254237288%, 52.8%) !important;
}

.primary-color-c9 {
  color: hsl(210, 91.5254237288%, 52.8%) !important;
}

.primary-border-color-c9 {
  border-color: hsl(210, 91.5254237288%, 52.8%) !important;
}
.primary-border-color-c9.border {
  border-color: hsl(210, 91.5254237288%, 52.8%) !important;
}

.primary-bg-c10 {
  background-color: hsl(210, 100%, 48%) !important;
}

.primary-color-c10 {
  color: hsl(210, 100%, 48%) !important;
}

.primary-border-color-c10 {
  border-color: hsl(210, 100%, 48%) !important;
}
.primary-border-color-c10.border {
  border-color: hsl(210, 100%, 48%) !important;
}

.primary-bg-c11 {
  background-color: hsl(210, 100%, 44%) !important;
}

.primary-color-c11 {
  color: hsl(210, 100%, 44%) !important;
}

.primary-border-color-c11 {
  border-color: hsl(210, 100%, 44%) !important;
}
.primary-border-color-c11.border {
  border-color: hsl(210, 100%, 44%) !important;
}

.primary-bg-c12 {
  background-color: hsl(210, 100%, 40%) !important;
}

.primary-color-c12 {
  color: hsl(210, 100%, 40%) !important;
}

.primary-border-color-c12 {
  border-color: hsl(210, 100%, 40%) !important;
}
.primary-border-color-c12.border {
  border-color: hsl(210, 100%, 40%) !important;
}

.analogue-1-bg {
  background-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-color {
  color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-border-color- {
  border-color: hsl(243, 100%, 57.5%) !important;
}
.analogue-1-border-color-.border {
  border-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-bg-a1 {
  background-color: hsl(243, 100%, 95%) !important;
}

.analogue-1-color-a1 {
  color: hsl(243, 100%, 95%) !important;
}

.analogue-1-border-color-a1 {
  border-color: hsl(243, 100%, 95%) !important;
}
.analogue-1-border-color-a1.border {
  border-color: hsl(243, 100%, 95%) !important;
}

.analogue-1-bg-a2 {
  background-color: hsl(243, 75%, 84%) !important;
}

.analogue-1-color-a2 {
  color: hsl(243, 75%, 84%) !important;
}

.analogue-1-border-color-a2 {
  border-color: hsl(243, 75%, 84%) !important;
}
.analogue-1-border-color-a2.border {
  border-color: hsl(243, 75%, 84%) !important;
}

.analogue-1-bg-a3 {
  background-color: hsl(243, 69.696969697%, 73.6%) !important;
}

.analogue-1-color-a3 {
  color: hsl(243, 69.696969697%, 73.6%) !important;
}

.analogue-1-border-color-a3 {
  border-color: hsl(243, 69.696969697%, 73.6%) !important;
}
.analogue-1-border-color-a3.border {
  border-color: hsl(243, 69.696969697%, 73.6%) !important;
}

.analogue-1-bg-a4 {
  background-color: hsl(243, 66.8508287293%, 63.8%) !important;
}

.analogue-1-color-a4 {
  color: hsl(243, 66.8508287293%, 63.8%) !important;
}

.analogue-1-border-color-a4 {
  border-color: hsl(243, 66.8508287293%, 63.8%) !important;
}
.analogue-1-border-color-a4.border {
  border-color: hsl(243, 66.8508287293%, 63.8%) !important;
}

.analogue-1-bg-a5 {
  background-color: hsl(243, 64.7577092511%, 54.6%) !important;
}

.analogue-1-color-a5 {
  color: hsl(243, 64.7577092511%, 54.6%) !important;
}

.analogue-1-border-color-a5 {
  border-color: hsl(243, 64.7577092511%, 54.6%) !important;
}
.analogue-1-border-color-a5.border {
  border-color: hsl(243, 64.7577092511%, 54.6%) !important;
}

.analogue-1-bg-a6 {
  background-color: hsl(243, 73.9130434783%, 46%) !important;
}

.analogue-1-color-a6 {
  color: hsl(243, 73.9130434783%, 46%) !important;
}

.analogue-1-border-color-a6 {
  border-color: hsl(243, 73.9130434783%, 46%) !important;
}
.analogue-1-border-color-a6.border {
  border-color: hsl(243, 73.9130434783%, 46%) !important;
}

.analogue-1-bg-a7 {
  background-color: hsl(243, 73.9130434783%, 40.25%) !important;
}

.analogue-1-color-a7 {
  color: hsl(243, 73.9130434783%, 40.25%) !important;
}

.analogue-1-border-color-a7 {
  border-color: hsl(243, 73.9130434783%, 40.25%) !important;
}
.analogue-1-border-color-a7.border {
  border-color: hsl(243, 73.9130434783%, 40.25%) !important;
}

.analogue-1-bg-a8 {
  background-color: hsl(243, 73.9130434783%, 34.5%) !important;
}

.analogue-1-color-a8 {
  color: hsl(243, 73.9130434783%, 34.5%) !important;
}

.analogue-1-border-color-a8 {
  border-color: hsl(243, 73.9130434783%, 34.5%) !important;
}
.analogue-1-border-color-a8.border {
  border-color: hsl(243, 73.9130434783%, 34.5%) !important;
}

.analogue-1-bg-a9 {
  background-color: hsl(243, 73.9130434783%, 28.75%) !important;
}

.analogue-1-color-a9 {
  color: hsl(243, 73.9130434783%, 28.75%) !important;
}

.analogue-1-border-color-a9 {
  border-color: hsl(243, 73.9130434783%, 28.75%) !important;
}
.analogue-1-border-color-a9.border {
  border-color: hsl(243, 73.9130434783%, 28.75%) !important;
}

.analogue-1-bg-a10 {
  background-color: hsl(243, 73.9130434783%, 23%) !important;
}

.analogue-1-color-a10 {
  color: hsl(243, 73.9130434783%, 23%) !important;
}

.analogue-1-border-color-a10 {
  border-color: hsl(243, 73.9130434783%, 23%) !important;
}
.analogue-1-border-color-a10.border {
  border-color: hsl(243, 73.9130434783%, 23%) !important;
}

.analogue-1-bg-a11 {
  background-color: hsl(243, 73.9130434783%, 17.25%) !important;
}

.analogue-1-color-a11 {
  color: hsl(243, 73.9130434783%, 17.25%) !important;
}

.analogue-1-border-color-a11 {
  border-color: hsl(243, 73.9130434783%, 17.25%) !important;
}
.analogue-1-border-color-a11.border {
  border-color: hsl(243, 73.9130434783%, 17.25%) !important;
}

.analogue-1-bg-a12 {
  background-color: hsl(243, 73.9130434783%, 11.5%) !important;
}

.analogue-1-color-a12 {
  color: hsl(243, 73.9130434783%, 11.5%) !important;
}

.analogue-1-border-color-a12 {
  border-color: hsl(243, 73.9130434783%, 11.5%) !important;
}
.analogue-1-border-color-a12.border {
  border-color: hsl(243, 73.9130434783%, 11.5%) !important;
}

.analogue-2-bg {
  background-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-color {
  color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-border-color- {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}
.analogue-2-border-color-.border {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-bg-a1 {
  background-color: hsl(178, 100%, 90%) !important;
}

.analogue-2-color-a1 {
  color: hsl(178, 100%, 90%) !important;
}

.analogue-2-border-color-a1 {
  border-color: hsl(178, 100%, 90%) !important;
}
.analogue-2-border-color-a1.border {
  border-color: hsl(178, 100%, 90%) !important;
}

.analogue-2-bg-a2 {
  background-color: hsl(178, 80.7692307692%, 79.2%) !important;
}

.analogue-2-color-a2 {
  color: hsl(178, 80.7692307692%, 79.2%) !important;
}

.analogue-2-border-color-a2 {
  border-color: hsl(178, 80.7692307692%, 79.2%) !important;
}
.analogue-2-border-color-a2.border {
  border-color: hsl(178, 80.7692307692%, 79.2%) !important;
}

.analogue-2-bg-a3 {
  background-color: hsl(178, 74.1935483871%, 69%) !important;
}

.analogue-2-color-a3 {
  color: hsl(178, 74.1935483871%, 69%) !important;
}

.analogue-2-border-color-a3 {
  border-color: hsl(178, 74.1935483871%, 69%) !important;
}
.analogue-2-border-color-a3.border {
  border-color: hsl(178, 74.1935483871%, 69%) !important;
}

.analogue-2-bg-a4 {
  background-color: hsl(178, 70.4433497537%, 59.4%) !important;
}

.analogue-2-color-a4 {
  color: hsl(178, 70.4433497537%, 59.4%) !important;
}

.analogue-2-border-color-a4 {
  border-color: hsl(178, 70.4433497537%, 59.4%) !important;
}
.analogue-2-border-color-a4.border {
  border-color: hsl(178, 70.4433497537%, 59.4%) !important;
}

.analogue-2-bg-a5 {
  background-color: hsl(178, 67.7419354839%, 50.4%) !important;
}

.analogue-2-color-a5 {
  color: hsl(178, 67.7419354839%, 50.4%) !important;
}

.analogue-2-border-color-a5 {
  border-color: hsl(178, 67.7419354839%, 50.4%) !important;
}
.analogue-2-border-color-a5.border {
  border-color: hsl(178, 67.7419354839%, 50.4%) !important;
}

.analogue-2-bg-a6 {
  background-color: hsl(178, 90.4761904762%, 42%) !important;
}

.analogue-2-color-a6 {
  color: hsl(178, 90.4761904762%, 42%) !important;
}

.analogue-2-border-color-a6 {
  border-color: hsl(178, 90.4761904762%, 42%) !important;
}
.analogue-2-border-color-a6.border {
  border-color: hsl(178, 90.4761904762%, 42%) !important;
}

.analogue-2-bg-a7 {
  background-color: hsl(178, 90.4761904762%, 36.75%) !important;
}

.analogue-2-color-a7 {
  color: hsl(178, 90.4761904762%, 36.75%) !important;
}

.analogue-2-border-color-a7 {
  border-color: hsl(178, 90.4761904762%, 36.75%) !important;
}
.analogue-2-border-color-a7.border {
  border-color: hsl(178, 90.4761904762%, 36.75%) !important;
}

.analogue-2-bg-a8 {
  background-color: hsl(178, 90.4761904762%, 31.5%) !important;
}

.analogue-2-color-a8 {
  color: hsl(178, 90.4761904762%, 31.5%) !important;
}

.analogue-2-border-color-a8 {
  border-color: hsl(178, 90.4761904762%, 31.5%) !important;
}
.analogue-2-border-color-a8.border {
  border-color: hsl(178, 90.4761904762%, 31.5%) !important;
}

.analogue-2-bg-a9 {
  background-color: hsl(178, 90.4761904762%, 26.25%) !important;
}

.analogue-2-color-a9 {
  color: hsl(178, 90.4761904762%, 26.25%) !important;
}

.analogue-2-border-color-a9 {
  border-color: hsl(178, 90.4761904762%, 26.25%) !important;
}
.analogue-2-border-color-a9.border {
  border-color: hsl(178, 90.4761904762%, 26.25%) !important;
}

.analogue-2-bg-a10 {
  background-color: hsl(178, 90.4761904762%, 21%) !important;
}

.analogue-2-color-a10 {
  color: hsl(178, 90.4761904762%, 21%) !important;
}

.analogue-2-border-color-a10 {
  border-color: hsl(178, 90.4761904762%, 21%) !important;
}
.analogue-2-border-color-a10.border {
  border-color: hsl(178, 90.4761904762%, 21%) !important;
}

.analogue-2-bg-a11 {
  background-color: hsl(178, 90.4761904762%, 15.75%) !important;
}

.analogue-2-color-a11 {
  color: hsl(178, 90.4761904762%, 15.75%) !important;
}

.analogue-2-border-color-a11 {
  border-color: hsl(178, 90.4761904762%, 15.75%) !important;
}
.analogue-2-border-color-a11.border {
  border-color: hsl(178, 90.4761904762%, 15.75%) !important;
}

.analogue-2-bg-a12 {
  background-color: hsl(178, 90.4761904762%, 10.5%) !important;
}

.analogue-2-color-a12 {
  color: hsl(178, 90.4761904762%, 10.5%) !important;
}

.analogue-2-border-color-a12 {
  border-color: hsl(178, 90.4761904762%, 10.5%) !important;
}
.analogue-2-border-color-a12.border {
  border-color: hsl(178, 90.4761904762%, 10.5%) !important;
}

.complementary-1-bg {
  background-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-color {
  color: hsl(36, 100%, 50%) !important;
}

.complementary-1-border-color- {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}
.complementary-1-border-color-.border {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-bg-a1 {
  background-color: hsl(351, 100%, 99.5%) !important;
}

.complementary-1-color-a1 {
  color: hsl(351, 100%, 99.5%) !important;
}

.complementary-1-border-color-a1 {
  border-color: hsl(351, 100%, 99.5%) !important;
}
.complementary-1-border-color-a1.border {
  border-color: hsl(351, 100%, 99.5%) !important;
}

.complementary-1-bg-a2 {
  background-color: hsl(351, 64.2857142857%, 88.8%) !important;
}

.complementary-1-color-a2 {
  color: hsl(351, 64.2857142857%, 88.8%) !important;
}

.complementary-1-border-color-a2 {
  border-color: hsl(351, 64.2857142857%, 88.8%) !important;
}
.complementary-1-border-color-a2.border {
  border-color: hsl(351, 64.2857142857%, 88.8%) !important;
}

.complementary-1-bg-a3 {
  background-color: hsl(351, 63.3027522936%, 78.2%) !important;
}

.complementary-1-color-a3 {
  color: hsl(351, 63.3027522936%, 78.2%) !important;
}

.complementary-1-border-color-a3 {
  border-color: hsl(351, 63.3027522936%, 78.2%) !important;
}
.complementary-1-border-color-a3.border {
  border-color: hsl(351, 63.3027522936%, 78.2%) !important;
}

.complementary-1-bg-a4 {
  background-color: hsl(351, 62.2641509434%, 68.2%) !important;
}

.complementary-1-color-a4 {
  color: hsl(351, 62.2641509434%, 68.2%) !important;
}

.complementary-1-border-color-a4 {
  border-color: hsl(351, 62.2641509434%, 68.2%) !important;
}
.complementary-1-border-color-a4.border {
  border-color: hsl(351, 62.2641509434%, 68.2%) !important;
}

.complementary-1-bg-a5 {
  background-color: hsl(351, 61.1650485437%, 58.8%) !important;
}

.complementary-1-color-a5 {
  color: hsl(351, 61.1650485437%, 58.8%) !important;
}

.complementary-1-border-color-a5 {
  border-color: hsl(351, 61.1650485437%, 58.8%) !important;
}
.complementary-1-border-color-a5.border {
  border-color: hsl(351, 61.1650485437%, 58.8%) !important;
}

.complementary-1-bg-a6 {
  background-color: hsl(351, 60%, 50%) !important;
}

.complementary-1-color-a6 {
  color: hsl(351, 60%, 50%) !important;
}

.complementary-1-border-color-a6 {
  border-color: hsl(351, 60%, 50%) !important;
}
.complementary-1-border-color-a6.border {
  border-color: hsl(351, 60%, 50%) !important;
}

.complementary-1-bg-a7 {
  background-color: hsl(351, 60%, 43.75%) !important;
}

.complementary-1-color-a7 {
  color: hsl(351, 60%, 43.75%) !important;
}

.complementary-1-border-color-a7 {
  border-color: hsl(351, 60%, 43.75%) !important;
}
.complementary-1-border-color-a7.border {
  border-color: hsl(351, 60%, 43.75%) !important;
}

.complementary-1-bg-a8 {
  background-color: hsl(351, 60%, 37.5%) !important;
}

.complementary-1-color-a8 {
  color: hsl(351, 60%, 37.5%) !important;
}

.complementary-1-border-color-a8 {
  border-color: hsl(351, 60%, 37.5%) !important;
}
.complementary-1-border-color-a8.border {
  border-color: hsl(351, 60%, 37.5%) !important;
}

.complementary-1-bg-a9 {
  background-color: hsl(351, 60%, 31.25%) !important;
}

.complementary-1-color-a9 {
  color: hsl(351, 60%, 31.25%) !important;
}

.complementary-1-border-color-a9 {
  border-color: hsl(351, 60%, 31.25%) !important;
}
.complementary-1-border-color-a9.border {
  border-color: hsl(351, 60%, 31.25%) !important;
}

.complementary-1-bg-a10 {
  background-color: hsl(351, 60%, 25%) !important;
}

.complementary-1-color-a10 {
  color: hsl(351, 60%, 25%) !important;
}

.complementary-1-border-color-a10 {
  border-color: hsl(351, 60%, 25%) !important;
}
.complementary-1-border-color-a10.border {
  border-color: hsl(351, 60%, 25%) !important;
}

.complementary-1-bg-a11 {
  background-color: hsl(351, 60%, 18.75%) !important;
}

.complementary-1-color-a11 {
  color: hsl(351, 60%, 18.75%) !important;
}

.complementary-1-border-color-a11 {
  border-color: hsl(351, 60%, 18.75%) !important;
}
.complementary-1-border-color-a11.border {
  border-color: hsl(351, 60%, 18.75%) !important;
}

.complementary-1-bg-a12 {
  background-color: hsl(351, 60%, 12.5%) !important;
}

.complementary-1-color-a12 {
  color: hsl(351, 60%, 12.5%) !important;
}

.complementary-1-border-color-a12 {
  border-color: hsl(351, 60%, 12.5%) !important;
}
.complementary-1-border-color-a12.border {
  border-color: hsl(351, 60%, 12.5%) !important;
}

.complementary-2-bg {
  background-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-color {
  color: hsl(36, 100%, 50%) !important;
}

.complementary-2-border-color- {
  border-color: hsl(36, 100%, 50%) !important;
}
.complementary-2-border-color-.border {
  border-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-bg-a1 {
  background-color: hsl(36, 100%, 87.5%) !important;
}

.complementary-2-color-a1 {
  color: hsl(36, 100%, 87.5%) !important;
}

.complementary-2-border-color-a1 {
  border-color: hsl(36, 100%, 87.5%) !important;
}
.complementary-2-border-color-a1.border {
  border-color: hsl(36, 100%, 87.5%) !important;
}

.complementary-2-bg-a2 {
  background-color: hsl(36, 82.7586206897%, 76.8%) !important;
}

.complementary-2-color-a2 {
  color: hsl(36, 82.7586206897%, 76.8%) !important;
}

.complementary-2-border-color-a2 {
  border-color: hsl(36, 82.7586206897%, 76.8%) !important;
}
.complementary-2-border-color-a2.border {
  border-color: hsl(36, 82.7586206897%, 76.8%) !important;
}

.complementary-2-bg-a3 {
  background-color: hsl(36, 75.975975976%, 66.7%) !important;
}

.complementary-2-color-a3 {
  color: hsl(36, 75.975975976%, 66.7%) !important;
}

.complementary-2-border-color-a3 {
  border-color: hsl(36, 75.975975976%, 66.7%) !important;
}
.complementary-2-border-color-a3.border {
  border-color: hsl(36, 75.975975976%, 66.7%) !important;
}

.complementary-2-bg-a4 {
  background-color: hsl(36, 71.9626168224%, 57.2%) !important;
}

.complementary-2-color-a4 {
  color: hsl(36, 71.9626168224%, 57.2%) !important;
}

.complementary-2-border-color-a4 {
  border-color: hsl(36, 71.9626168224%, 57.2%) !important;
}
.complementary-2-border-color-a4.border {
  border-color: hsl(36, 71.9626168224%, 57.2%) !important;
}

.complementary-2-bg-a5 {
  background-color: hsl(36, 73.9130434783%, 48.3%) !important;
}

.complementary-2-color-a5 {
  color: hsl(36, 73.9130434783%, 48.3%) !important;
}

.complementary-2-border-color-a5 {
  border-color: hsl(36, 73.9130434783%, 48.3%) !important;
}
.complementary-2-border-color-a5.border {
  border-color: hsl(36, 73.9130434783%, 48.3%) !important;
}

.complementary-2-bg-a6 {
  background-color: hsl(36, 100%, 40%) !important;
}

.complementary-2-color-a6 {
  color: hsl(36, 100%, 40%) !important;
}

.complementary-2-border-color-a6 {
  border-color: hsl(36, 100%, 40%) !important;
}
.complementary-2-border-color-a6.border {
  border-color: hsl(36, 100%, 40%) !important;
}

.complementary-2-bg-a7 {
  background-color: hsl(36, 100%, 35%) !important;
}

.complementary-2-color-a7 {
  color: hsl(36, 100%, 35%) !important;
}

.complementary-2-border-color-a7 {
  border-color: hsl(36, 100%, 35%) !important;
}
.complementary-2-border-color-a7.border {
  border-color: hsl(36, 100%, 35%) !important;
}

.complementary-2-bg-a8 {
  background-color: hsl(36, 100%, 30%) !important;
}

.complementary-2-color-a8 {
  color: hsl(36, 100%, 30%) !important;
}

.complementary-2-border-color-a8 {
  border-color: hsl(36, 100%, 30%) !important;
}
.complementary-2-border-color-a8.border {
  border-color: hsl(36, 100%, 30%) !important;
}

.complementary-2-bg-a9 {
  background-color: hsl(36, 100%, 25%) !important;
}

.complementary-2-color-a9 {
  color: hsl(36, 100%, 25%) !important;
}

.complementary-2-border-color-a9 {
  border-color: hsl(36, 100%, 25%) !important;
}
.complementary-2-border-color-a9.border {
  border-color: hsl(36, 100%, 25%) !important;
}

.complementary-2-bg-a10 {
  background-color: hsl(36, 100%, 20%) !important;
}

.complementary-2-color-a10 {
  color: hsl(36, 100%, 20%) !important;
}

.complementary-2-border-color-a10 {
  border-color: hsl(36, 100%, 20%) !important;
}
.complementary-2-border-color-a10.border {
  border-color: hsl(36, 100%, 20%) !important;
}

.complementary-2-bg-a11 {
  background-color: hsl(36, 100%, 15%) !important;
}

.complementary-2-color-a11 {
  color: hsl(36, 100%, 15%) !important;
}

.complementary-2-border-color-a11 {
  border-color: hsl(36, 100%, 15%) !important;
}
.complementary-2-border-color-a11.border {
  border-color: hsl(36, 100%, 15%) !important;
}

.complementary-2-bg-a12 {
  background-color: hsl(36, 100%, 10%) !important;
}

.complementary-2-color-a12 {
  color: hsl(36, 100%, 10%) !important;
}

.complementary-2-border-color-a12 {
  border-color: hsl(36, 100%, 10%) !important;
}
.complementary-2-border-color-a12.border {
  border-color: hsl(36, 100%, 10%) !important;
}

.complementary-3-bg {
  background-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-color {
  color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-border-color- {
  border-color: hsl(159, 100%, 40.5%) !important;
}
.complementary-3-border-color-.border {
  border-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-bg-a1 {
  background-color: hsl(159, 100%, 87.5%) !important;
}

.complementary-3-color-a1 {
  color: hsl(159, 100%, 87.5%) !important;
}

.complementary-3-border-color-a1 {
  border-color: hsl(159, 100%, 87.5%) !important;
}
.complementary-3-border-color-a1.border {
  border-color: hsl(159, 100%, 87.5%) !important;
}

.complementary-3-bg-a2 {
  background-color: hsl(159, 82.7586206897%, 76.8%) !important;
}

.complementary-3-color-a2 {
  color: hsl(159, 82.7586206897%, 76.8%) !important;
}

.complementary-3-border-color-a2 {
  border-color: hsl(159, 82.7586206897%, 76.8%) !important;
}
.complementary-3-border-color-a2.border {
  border-color: hsl(159, 82.7586206897%, 76.8%) !important;
}

.complementary-3-bg-a3 {
  background-color: hsl(159, 75.975975976%, 66.7%) !important;
}

.complementary-3-color-a3 {
  color: hsl(159, 75.975975976%, 66.7%) !important;
}

.complementary-3-border-color-a3 {
  border-color: hsl(159, 75.975975976%, 66.7%) !important;
}
.complementary-3-border-color-a3.border {
  border-color: hsl(159, 75.975975976%, 66.7%) !important;
}

.complementary-3-bg-a4 {
  background-color: hsl(159, 71.9626168224%, 57.2%) !important;
}

.complementary-3-color-a4 {
  color: hsl(159, 71.9626168224%, 57.2%) !important;
}

.complementary-3-border-color-a4 {
  border-color: hsl(159, 71.9626168224%, 57.2%) !important;
}
.complementary-3-border-color-a4.border {
  border-color: hsl(159, 71.9626168224%, 57.2%) !important;
}

.complementary-3-bg-a5 {
  background-color: hsl(159, 73.9130434783%, 48.3%) !important;
}

.complementary-3-color-a5 {
  color: hsl(159, 73.9130434783%, 48.3%) !important;
}

.complementary-3-border-color-a5 {
  border-color: hsl(159, 73.9130434783%, 48.3%) !important;
}
.complementary-3-border-color-a5.border {
  border-color: hsl(159, 73.9130434783%, 48.3%) !important;
}

.complementary-3-bg-a6 {
  background-color: hsl(159, 100%, 40%) !important;
}

.complementary-3-color-a6 {
  color: hsl(159, 100%, 40%) !important;
}

.complementary-3-border-color-a6 {
  border-color: hsl(159, 100%, 40%) !important;
}
.complementary-3-border-color-a6.border {
  border-color: hsl(159, 100%, 40%) !important;
}

.complementary-3-bg-a7 {
  background-color: hsl(159, 100%, 35%) !important;
}

.complementary-3-color-a7 {
  color: hsl(159, 100%, 35%) !important;
}

.complementary-3-border-color-a7 {
  border-color: hsl(159, 100%, 35%) !important;
}
.complementary-3-border-color-a7.border {
  border-color: hsl(159, 100%, 35%) !important;
}

.complementary-3-bg-a8 {
  background-color: hsl(159, 100%, 30%) !important;
}

.complementary-3-color-a8 {
  color: hsl(159, 100%, 30%) !important;
}

.complementary-3-border-color-a8 {
  border-color: hsl(159, 100%, 30%) !important;
}
.complementary-3-border-color-a8.border {
  border-color: hsl(159, 100%, 30%) !important;
}

.complementary-3-bg-a9 {
  background-color: hsl(159, 100%, 25%) !important;
}

.complementary-3-color-a9 {
  color: hsl(159, 100%, 25%) !important;
}

.complementary-3-border-color-a9 {
  border-color: hsl(159, 100%, 25%) !important;
}
.complementary-3-border-color-a9.border {
  border-color: hsl(159, 100%, 25%) !important;
}

.complementary-3-bg-a10 {
  background-color: hsl(159, 100%, 20%) !important;
}

.complementary-3-color-a10 {
  color: hsl(159, 100%, 20%) !important;
}

.complementary-3-border-color-a10 {
  border-color: hsl(159, 100%, 20%) !important;
}
.complementary-3-border-color-a10.border {
  border-color: hsl(159, 100%, 20%) !important;
}

.complementary-3-bg-a11 {
  background-color: hsl(159, 100%, 15%) !important;
}

.complementary-3-color-a11 {
  color: hsl(159, 100%, 15%) !important;
}

.complementary-3-border-color-a11 {
  border-color: hsl(159, 100%, 15%) !important;
}
.complementary-3-border-color-a11.border {
  border-color: hsl(159, 100%, 15%) !important;
}

.complementary-3-bg-a12 {
  background-color: hsl(159, 100%, 10%) !important;
}

.complementary-3-color-a12 {
  color: hsl(159, 100%, 10%) !important;
}

.complementary-3-border-color-a12 {
  border-color: hsl(159, 100%, 10%) !important;
}
.complementary-3-border-color-a12.border {
  border-color: hsl(159, 100%, 10%) !important;
}

.analogue-1-bg-b1 {
  background-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-color-b1 {
  color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-border-color-b1 {
  border-color: hsl(243, 100%, 57.5%) !important;
}
.analogue-1-border-color-b1.border {
  border-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-bg-b2 {
  background-color: hsl(243, 77.1428571429%, 56.25%) !important;
}

.analogue-1-color-b2 {
  color: hsl(243, 77.1428571429%, 56.25%) !important;
}

.analogue-1-border-color-b2 {
  border-color: hsl(243, 77.1428571429%, 56.25%) !important;
}
.analogue-1-border-color-b2.border {
  border-color: hsl(243, 77.1428571429%, 56.25%) !important;
}

.analogue-1-bg-b3 {
  background-color: hsl(243, 56.5217391304%, 54%) !important;
}

.analogue-1-color-b3 {
  color: hsl(243, 56.5217391304%, 54%) !important;
}

.analogue-1-border-color-b3 {
  border-color: hsl(243, 56.5217391304%, 54%) !important;
}
.analogue-1-border-color-b3.border {
  border-color: hsl(243, 56.5217391304%, 54%) !important;
}

.analogue-1-bg-b4 {
  background-color: hsl(243, 39.0862944162%, 50.75%) !important;
}

.analogue-1-color-b4 {
  color: hsl(243, 39.0862944162%, 50.75%) !important;
}

.analogue-1-border-color-b4 {
  border-color: hsl(243, 39.0862944162%, 50.75%) !important;
}
.analogue-1-border-color-b4.border {
  border-color: hsl(243, 39.0862944162%, 50.75%) !important;
}

.analogue-1-bg-b5 {
  background-color: hsl(243, 29.0322580645%, 46.5%) !important;
}

.analogue-1-color-b5 {
  color: hsl(243, 29.0322580645%, 46.5%) !important;
}

.analogue-1-border-color-b5 {
  border-color: hsl(243, 29.0322580645%, 46.5%) !important;
}
.analogue-1-border-color-b5.border {
  border-color: hsl(243, 29.0322580645%, 46.5%) !important;
}

.analogue-1-bg-b6 {
  background-color: hsl(243, 21.2121212121%, 41.25%) !important;
}

.analogue-1-color-b6 {
  color: hsl(243, 21.2121212121%, 41.25%) !important;
}

.analogue-1-border-color-b6 {
  border-color: hsl(243, 21.2121212121%, 41.25%) !important;
}
.analogue-1-border-color-b6.border {
  border-color: hsl(243, 21.2121212121%, 41.25%) !important;
}

.analogue-1-bg-b7 {
  background-color: hsl(243, 14.2857142857%, 35%) !important;
}

.analogue-1-color-b7 {
  color: hsl(243, 14.2857142857%, 35%) !important;
}

.analogue-1-border-color-b7 {
  border-color: hsl(243, 14.2857142857%, 35%) !important;
}
.analogue-1-border-color-b7.border {
  border-color: hsl(243, 14.2857142857%, 35%) !important;
}

.analogue-1-bg-b8 {
  background-color: hsl(243, 8.1081081081%, 27.75%) !important;
}

.analogue-1-color-b8 {
  color: hsl(243, 8.1081081081%, 27.75%) !important;
}

.analogue-1-border-color-b8 {
  border-color: hsl(243, 8.1081081081%, 27.75%) !important;
}
.analogue-1-border-color-b8.border {
  border-color: hsl(243, 8.1081081081%, 27.75%) !important;
}

.analogue-2-bg-b1 {
  background-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-color-b1 {
  color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-border-color-b1 {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}
.analogue-2-border-color-b1.border {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-bg-b2 {
  background-color: hsl(178, 73.9130434783%, 43.125%) !important;
}

.analogue-2-color-b2 {
  color: hsl(178, 73.9130434783%, 43.125%) !important;
}

.analogue-2-border-color-b2 {
  border-color: hsl(178, 73.9130434783%, 43.125%) !important;
}
.analogue-2-border-color-b2.border {
  border-color: hsl(178, 73.9130434783%, 43.125%) !important;
}

.analogue-2-bg-b3 {
  background-color: hsl(178, 60%, 40.625%) !important;
}

.analogue-2-color-b3 {
  color: hsl(178, 60%, 40.625%) !important;
}

.analogue-2-border-color-b3 {
  border-color: hsl(178, 60%, 40.625%) !important;
}
.analogue-2-border-color-b3.border {
  border-color: hsl(178, 60%, 40.625%) !important;
}

.analogue-2-bg-b4 {
  background-color: hsl(178, 48.1481481481%, 37.125%) !important;
}

.analogue-2-color-b4 {
  color: hsl(178, 48.1481481481%, 37.125%) !important;
}

.analogue-2-border-color-b4 {
  border-color: hsl(178, 48.1481481481%, 37.125%) !important;
}
.analogue-2-border-color-b4.border {
  border-color: hsl(178, 48.1481481481%, 37.125%) !important;
}

.analogue-2-bg-b5 {
  background-color: hsl(178, 37.9310344828%, 32.625%) !important;
}

.analogue-2-color-b5 {
  color: hsl(178, 37.9310344828%, 32.625%) !important;
}

.analogue-2-border-color-b5 {
  border-color: hsl(178, 37.9310344828%, 32.625%) !important;
}
.analogue-2-border-color-b5.border {
  border-color: hsl(178, 37.9310344828%, 32.625%) !important;
}

.analogue-2-bg-b6 {
  background-color: hsl(178, 29.0322580645%, 27.125%) !important;
}

.analogue-2-color-b6 {
  color: hsl(178, 29.0322580645%, 27.125%) !important;
}

.analogue-2-border-color-b6 {
  border-color: hsl(178, 29.0322580645%, 27.125%) !important;
}
.analogue-2-border-color-b6.border {
  border-color: hsl(178, 29.0322580645%, 27.125%) !important;
}

.analogue-2-bg-b7 {
  background-color: hsl(178, 21.2121212121%, 20.625%) !important;
}

.analogue-2-color-b7 {
  color: hsl(178, 21.2121212121%, 20.625%) !important;
}

.analogue-2-border-color-b7 {
  border-color: hsl(178, 21.2121212121%, 20.625%) !important;
}
.analogue-2-border-color-b7.border {
  border-color: hsl(178, 21.2121212121%, 20.625%) !important;
}

.analogue-2-bg-b8 {
  background-color: hsl(178, 14.2857142857%, 13.125%) !important;
}

.analogue-2-color-b8 {
  color: hsl(178, 14.2857142857%, 13.125%) !important;
}

.analogue-2-border-color-b8 {
  border-color: hsl(178, 14.2857142857%, 13.125%) !important;
}
.analogue-2-border-color-b8.border {
  border-color: hsl(178, 14.2857142857%, 13.125%) !important;
}

.complementary-1-bg-b1 {
  background-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-color-b1 {
  color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-border-color-b1 {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}
.complementary-1-border-color-b1.border {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-bg-b2 {
  background-color: hsl(351, 68.5039370079%, 58.725%) !important;
}

.complementary-1-color-b2 {
  color: hsl(351, 68.5039370079%, 58.725%) !important;
}

.complementary-1-border-color-b2 {
  border-color: hsl(351, 68.5039370079%, 58.725%) !important;
}
.complementary-1-border-color-b2.border {
  border-color: hsl(351, 68.5039370079%, 58.725%) !important;
}

.complementary-1-bg-b3 {
  background-color: hsl(351, 47.9343520091%, 55.825%) !important;
}

.complementary-1-color-b3 {
  color: hsl(351, 47.9343520091%, 55.825%) !important;
}

.complementary-1-border-color-b3 {
  border-color: hsl(351, 47.9343520091%, 55.825%) !important;
}
.complementary-1-border-color-b3.border {
  border-color: hsl(351, 47.9343520091%, 55.825%) !important;
}

.complementary-1-bg-b4 {
  background-color: hsl(351, 31.3572542902%, 51.925%) !important;
}

.complementary-1-color-b4 {
  color: hsl(351, 31.3572542902%, 51.925%) !important;
}

.complementary-1-border-color-b4 {
  border-color: hsl(351, 31.3572542902%, 51.925%) !important;
}
.complementary-1-border-color-b4.border {
  border-color: hsl(351, 31.3572542902%, 51.925%) !important;
}

.complementary-1-bg-b5 {
  background-color: hsl(351, 21.2121212121%, 47.025%) !important;
}

.complementary-1-color-b5 {
  color: hsl(351, 21.2121212121%, 47.025%) !important;
}

.complementary-1-border-color-b5 {
  border-color: hsl(351, 21.2121212121%, 47.025%) !important;
}
.complementary-1-border-color-b5.border {
  border-color: hsl(351, 21.2121212121%, 47.025%) !important;
}

.complementary-1-bg-b6 {
  background-color: hsl(351, 14.2857142857%, 41.125%) !important;
}

.complementary-1-color-b6 {
  color: hsl(351, 14.2857142857%, 41.125%) !important;
}

.complementary-1-border-color-b6 {
  border-color: hsl(351, 14.2857142857%, 41.125%) !important;
}
.complementary-1-border-color-b6.border {
  border-color: hsl(351, 14.2857142857%, 41.125%) !important;
}

.complementary-1-bg-b7 {
  background-color: hsl(351, 8.1081081081%, 34.225%) !important;
}

.complementary-1-color-b7 {
  color: hsl(351, 8.1081081081%, 34.225%) !important;
}

.complementary-1-border-color-b7 {
  border-color: hsl(351, 8.1081081081%, 34.225%) !important;
}
.complementary-1-border-color-b7.border {
  border-color: hsl(351, 8.1081081081%, 34.225%) !important;
}

.complementary-1-bg-b8 {
  background-color: hsl(351, 2.5641025641%, 26.325%) !important;
}

.complementary-1-color-b8 {
  color: hsl(351, 2.5641025641%, 26.325%) !important;
}

.complementary-1-border-color-b8 {
  border-color: hsl(351, 2.5641025641%, 26.325%) !important;
}
.complementary-1-border-color-b8.border {
  border-color: hsl(351, 2.5641025641%, 26.325%) !important;
}

.complementary-2-bg-b1 {
  background-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-color-b1 {
  color: hsl(36, 100%, 50%) !important;
}

.complementary-2-border-color-b1 {
  border-color: hsl(36, 100%, 50%) !important;
}
.complementary-2-border-color-b1.border {
  border-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-bg-b2 {
  background-color: hsl(36, 81.8181818182%, 49.5%) !important;
}

.complementary-2-color-b2 {
  color: hsl(36, 81.8181818182%, 49.5%) !important;
}

.complementary-2-border-color-b2 {
  border-color: hsl(36, 81.8181818182%, 49.5%) !important;
}
.complementary-2-border-color-b2.border {
  border-color: hsl(36, 81.8181818182%, 49.5%) !important;
}

.complementary-2-bg-b3 {
  background-color: hsl(36, 66.6666666667%, 48%) !important;
}

.complementary-2-color-b3 {
  color: hsl(36, 66.6666666667%, 48%) !important;
}

.complementary-2-border-color-b3 {
  border-color: hsl(36, 66.6666666667%, 48%) !important;
}
.complementary-2-border-color-b3.border {
  border-color: hsl(36, 66.6666666667%, 48%) !important;
}

.complementary-2-bg-b4 {
  background-color: hsl(36, 53.8461538462%, 45.5%) !important;
}

.complementary-2-color-b4 {
  color: hsl(36, 53.8461538462%, 45.5%) !important;
}

.complementary-2-border-color-b4 {
  border-color: hsl(36, 53.8461538462%, 45.5%) !important;
}
.complementary-2-border-color-b4.border {
  border-color: hsl(36, 53.8461538462%, 45.5%) !important;
}

.complementary-2-bg-b5 {
  background-color: hsl(36, 42.8571428571%, 42%) !important;
}

.complementary-2-color-b5 {
  color: hsl(36, 42.8571428571%, 42%) !important;
}

.complementary-2-border-color-b5 {
  border-color: hsl(36, 42.8571428571%, 42%) !important;
}
.complementary-2-border-color-b5.border {
  border-color: hsl(36, 42.8571428571%, 42%) !important;
}

.complementary-2-bg-b6 {
  background-color: hsl(36, 33.3333333333%, 37.5%) !important;
}

.complementary-2-color-b6 {
  color: hsl(36, 33.3333333333%, 37.5%) !important;
}

.complementary-2-border-color-b6 {
  border-color: hsl(36, 33.3333333333%, 37.5%) !important;
}
.complementary-2-border-color-b6.border {
  border-color: hsl(36, 33.3333333333%, 37.5%) !important;
}

.complementary-2-bg-b7 {
  background-color: hsl(36, 25%, 32%) !important;
}

.complementary-2-color-b7 {
  color: hsl(36, 25%, 32%) !important;
}

.complementary-2-border-color-b7 {
  border-color: hsl(36, 25%, 32%) !important;
}
.complementary-2-border-color-b7.border {
  border-color: hsl(36, 25%, 32%) !important;
}

.complementary-2-bg-b8 {
  background-color: hsl(36, 17.6470588235%, 25.5%) !important;
}

.complementary-2-color-b8 {
  color: hsl(36, 17.6470588235%, 25.5%) !important;
}

.complementary-2-border-color-b8 {
  border-color: hsl(36, 17.6470588235%, 25.5%) !important;
}
.complementary-2-border-color-b8.border {
  border-color: hsl(36, 17.6470588235%, 25.5%) !important;
}

.complementary-3-bg-b1 {
  background-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-color-b1 {
  color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-border-color-b1 {
  border-color: hsl(159, 100%, 40.5%) !important;
}
.complementary-3-border-color-b1.border {
  border-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-bg-b2 {
  background-color: hsl(159, 81.8181818182%, 39.05%) !important;
}

.complementary-3-color-b2 {
  color: hsl(159, 81.8181818182%, 39.05%) !important;
}

.complementary-3-border-color-b2 {
  border-color: hsl(159, 81.8181818182%, 39.05%) !important;
}
.complementary-3-border-color-b2.border {
  border-color: hsl(159, 81.8181818182%, 39.05%) !important;
}

.complementary-3-bg-b3 {
  background-color: hsl(159, 66.6666666667%, 36.6%) !important;
}

.complementary-3-color-b3 {
  color: hsl(159, 66.6666666667%, 36.6%) !important;
}

.complementary-3-border-color-b3 {
  border-color: hsl(159, 66.6666666667%, 36.6%) !important;
}
.complementary-3-border-color-b3.border {
  border-color: hsl(159, 66.6666666667%, 36.6%) !important;
}

.complementary-3-bg-b4 {
  background-color: hsl(159, 53.8461538462%, 33.15%) !important;
}

.complementary-3-color-b4 {
  color: hsl(159, 53.8461538462%, 33.15%) !important;
}

.complementary-3-border-color-b4 {
  border-color: hsl(159, 53.8461538462%, 33.15%) !important;
}
.complementary-3-border-color-b4.border {
  border-color: hsl(159, 53.8461538462%, 33.15%) !important;
}

.complementary-3-bg-b5 {
  background-color: hsl(159, 42.8571428571%, 28.7%) !important;
}

.complementary-3-color-b5 {
  color: hsl(159, 42.8571428571%, 28.7%) !important;
}

.complementary-3-border-color-b5 {
  border-color: hsl(159, 42.8571428571%, 28.7%) !important;
}
.complementary-3-border-color-b5.border {
  border-color: hsl(159, 42.8571428571%, 28.7%) !important;
}

.complementary-3-bg-b6 {
  background-color: hsl(159, 33.3333333333%, 23.25%) !important;
}

.complementary-3-color-b6 {
  color: hsl(159, 33.3333333333%, 23.25%) !important;
}

.complementary-3-border-color-b6 {
  border-color: hsl(159, 33.3333333333%, 23.25%) !important;
}
.complementary-3-border-color-b6.border {
  border-color: hsl(159, 33.3333333333%, 23.25%) !important;
}

.complementary-3-bg-b7 {
  background-color: hsl(159, 25%, 16.8%) !important;
}

.complementary-3-color-b7 {
  color: hsl(159, 25%, 16.8%) !important;
}

.complementary-3-border-color-b7 {
  border-color: hsl(159, 25%, 16.8%) !important;
}
.complementary-3-border-color-b7.border {
  border-color: hsl(159, 25%, 16.8%) !important;
}

.complementary-3-bg-b8 {
  background-color: hsl(159, 17.6470588235%, 9.35%) !important;
}

.complementary-3-color-b8 {
  color: hsl(159, 17.6470588235%, 9.35%) !important;
}

.complementary-3-border-color-b8 {
  border-color: hsl(159, 17.6470588235%, 9.35%) !important;
}
.complementary-3-border-color-b8.border {
  border-color: hsl(159, 17.6470588235%, 9.35%) !important;
}

.neutral-1-bg {
  background-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-color {
  color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-border-color- {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}
.neutral-1-border-color-.border {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-bg-a1 {
  background-color: hsl(210, 6.2290689886%, 92.535%) !important;
}

.neutral-1-color-a1 {
  color: hsl(210, 6.2290689886%, 92.535%) !important;
}

.neutral-1-border-color-a1 {
  border-color: hsl(210, 6.2290689886%, 92.535%) !important;
}
.neutral-1-border-color-a1.border {
  border-color: hsl(210, 6.2290689886%, 92.535%) !important;
}

.neutral-1-bg-a2 {
  background-color: hsl(210, 2.9799029799%, 85.57%) !important;
}

.neutral-1-color-a2 {
  color: hsl(210, 2.9799029799%, 85.57%) !important;
}

.neutral-1-border-color-a2 {
  border-color: hsl(210, 2.9799029799%, 85.57%) !important;
}
.neutral-1-border-color-a2.border {
  border-color: hsl(210, 2.9799029799%, 85.57%) !important;
}

.neutral-1-bg-a3 {
  background-color: hsl(210, 3.6255162919%, 78.21%) !important;
}

.neutral-1-color-a3 {
  color: hsl(210, 3.6255162919%, 78.21%) !important;
}

.neutral-1-border-color-a3 {
  border-color: hsl(210, 3.6255162919%, 78.21%) !important;
}
.neutral-1-border-color-a3.border {
  border-color: hsl(210, 3.6255162919%, 78.21%) !important;
}

.neutral-1-bg-a4 {
  background-color: hsl(210, 7.1618037135%, 69.84%) !important;
}

.neutral-1-color-a4 {
  color: hsl(210, 7.1618037135%, 69.84%) !important;
}

.neutral-1-border-color-a4 {
  border-color: hsl(210, 7.1618037135%, 69.84%) !important;
}
.neutral-1-border-color-a4.border {
  border-color: hsl(210, 7.1618037135%, 69.84%) !important;
}

.neutral-1-bg-a5 {
  background-color: hsl(210, 8.4967320261%, 61.75%) !important;
}

.neutral-1-color-a5 {
  color: hsl(210, 8.4967320261%, 61.75%) !important;
}

.neutral-1-border-color-a5 {
  border-color: hsl(210, 8.4967320261%, 61.75%) !important;
}
.neutral-1-border-color-a5.border {
  border-color: hsl(210, 8.4967320261%, 61.75%) !important;
}

.neutral-1-bg-a6 {
  background-color: hsl(210, 12.1338912134%, 52.2%) !important;
}

.neutral-1-color-a6 {
  color: hsl(210, 12.1338912134%, 52.2%) !important;
}

.neutral-1-border-color-a6 {
  border-color: hsl(210, 12.1338912134%, 52.2%) !important;
}
.neutral-1-border-color-a6.border {
  border-color: hsl(210, 12.1338912134%, 52.2%) !important;
}

.neutral-1-bg-a7 {
  background-color: hsl(210, 17.6470588235%, 43.35%) !important;
}

.neutral-1-color-a7 {
  color: hsl(210, 17.6470588235%, 43.35%) !important;
}

.neutral-1-border-color-a7 {
  border-color: hsl(210, 17.6470588235%, 43.35%) !important;
}
.neutral-1-border-color-a7.border {
  border-color: hsl(210, 17.6470588235%, 43.35%) !important;
}

.neutral-1-bg-a8 {
  background-color: hsl(210, 25%, 35.2%) !important;
}

.neutral-1-color-a8 {
  color: hsl(210, 25%, 35.2%) !important;
}

.neutral-1-border-color-a8 {
  border-color: hsl(210, 25%, 35.2%) !important;
}
.neutral-1-border-color-a8.border {
  border-color: hsl(210, 25%, 35.2%) !important;
}

.neutral-1-bg-a9 {
  background-color: hsl(210, 33.3333333333%, 27.75%) !important;
}

.neutral-1-color-a9 {
  color: hsl(210, 33.3333333333%, 27.75%) !important;
}

.neutral-1-border-color-a9 {
  border-color: hsl(210, 33.3333333333%, 27.75%) !important;
}
.neutral-1-border-color-a9.border {
  border-color: hsl(210, 33.3333333333%, 27.75%) !important;
}

.neutral-1-bg-a10 {
  background-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-color-a10 {
  color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-border-color-a10 {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}
.neutral-1-border-color-a10.border {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-2-bg {
  background-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-color {
  color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-border-color- {
  border-color: hsl(210, 32.2033898305%, 92.625%);
}

.neutral-2-bg-b1 {
  background-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-color-b1 {
  color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-border-color-b1 {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}
.neutral-2-border-color-b1.border {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-bg-b2 {
  background-color: hsl(210, 9.0909090909%, 78%) !important;
}

.neutral-2-color-b2 {
  color: hsl(210, 9.0909090909%, 78%) !important;
}

.neutral-2-border-color-b2 {
  border-color: hsl(210, 9.0909090909%, 78%) !important;
}
.neutral-2-border-color-b2.border {
  border-color: hsl(210, 9.0909090909%, 78%) !important;
}

.neutral-2-bg-b3 {
  background-color: hsl(210, 4.4368600683%, 63.375%) !important;
}

.neutral-2-color-b3 {
  color: hsl(210, 4.4368600683%, 63.375%) !important;
}

.neutral-2-border-color-b3 {
  border-color: hsl(210, 4.4368600683%, 63.375%) !important;
}
.neutral-2-border-color-b3.border {
  border-color: hsl(210, 4.4368600683%, 63.375%) !important;
}

.neutral-2-bg-b4 {
  background-color: hsl(210, 2.5641025641%, 48.75%) !important;
}

.neutral-2-color-b4 {
  color: hsl(210, 2.5641025641%, 48.75%) !important;
}

.neutral-2-border-color-b4 {
  border-color: hsl(210, 2.5641025641%, 48.75%) !important;
}
.neutral-2-border-color-b4.border {
  border-color: hsl(210, 2.5641025641%, 48.75%) !important;
}

.neutral-2-bg-b5 {
  background-color: hsl(210, 2.0408163265%, 34.3%) !important;
}

.neutral-2-color-b5 {
  color: hsl(210, 2.0408163265%, 34.3%) !important;
}

.neutral-2-border-color-b5 {
  border-color: hsl(210, 2.0408163265%, 34.3%) !important;
}
.neutral-2-border-color-b5.border {
  border-color: hsl(210, 2.0408163265%, 34.3%) !important;
}

.neutral-2-bg-b6 {
  background-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-color-b6 {
  color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-border-color-b6 {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}
.neutral-2-border-color-b6.border {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-bg-b7 {
  background-color: hsl(210, 4.7120418848%, 4.775%) !important;
}

.neutral-2-color-b7 {
  color: hsl(210, 4.7120418848%, 4.775%) !important;
}

.neutral-2-border-color-b7 {
  border-color: hsl(210, 4.7120418848%, 4.775%) !important;
}
.neutral-2-border-color-b7.border {
  border-color: hsl(210, 4.7120418848%, 4.775%) !important;
}

.neutral-2-bg-a1 {
  background-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-color-a1 {
  color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-border-color-a1 {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}
.neutral-2-border-color-a1.border {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-bg-a2 {
  background-color: hsl(210, 13.7931034483%, 76.8%) !important;
}

.neutral-2-color-a2 {
  color: hsl(210, 13.7931034483%, 76.8%) !important;
}

.neutral-2-border-color-a2 {
  border-color: hsl(210, 13.7931034483%, 76.8%) !important;
}
.neutral-2-border-color-a2.border {
  border-color: hsl(210, 13.7931034483%, 76.8%) !important;
}

.neutral-2-bg-a3 {
  background-color: hsl(210, 6.103286385%, 62.725%) !important;
}

.neutral-2-color-a3 {
  color: hsl(210, 6.103286385%, 62.725%) !important;
}

.neutral-2-border-color-a3 {
  border-color: hsl(210, 6.103286385%, 62.725%) !important;
}
.neutral-2-border-color-a3.border {
  border-color: hsl(210, 6.103286385%, 62.725%) !important;
}

.neutral-2-bg-a4 {
  background-color: hsl(210, 3.6269430052%, 48.25%) !important;
}

.neutral-2-color-a4 {
  color: hsl(210, 3.6269430052%, 48.25%) !important;
}

.neutral-2-border-color-a4 {
  border-color: hsl(210, 3.6269430052%, 48.25%) !important;
}
.neutral-2-border-color-a4.border {
  border-color: hsl(210, 3.6269430052%, 48.25%) !important;
}

.neutral-2-bg-a5 {
  background-color: hsl(210, 3.6269430052%, 33.775%) !important;
}

.neutral-2-color-a5 {
  color: hsl(210, 3.6269430052%, 33.775%) !important;
}

.neutral-2-border-color-a5 {
  border-color: hsl(210, 3.6269430052%, 33.775%) !important;
}
.neutral-2-border-color-a5.border {
  border-color: hsl(210, 3.6269430052%, 33.775%) !important;
}

.neutral-2-bg-a6 {
  background-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-color-a6 {
  color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-border-color-a6 {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}
.neutral-2-border-color-a6.border {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-bg-a7 {
  background-color: hsl(210, 4.7120418848%, 9.55%) !important;
}

.neutral-2-color-a7 {
  color: hsl(210, 4.7120418848%, 9.55%) !important;
}

.neutral-2-border-color-a7 {
  border-color: hsl(210, 4.7120418848%, 9.55%) !important;
}
.neutral-2-border-color-a7.border {
  border-color: hsl(210, 4.7120418848%, 9.55%) !important;
}

.lightgrey-bg-a1 {
  background-color: hsl(210, 3%, 85%) !important;
}

.lightgrey-color-a1 {
  color: hsl(210, 3%, 85%) !important;
}

.lightgrey-border-color-a1 {
  border-color: hsl(210, 3%, 85%) !important;
}
.lightgrey-border-color-a1.border {
  border-color: hsl(210, 3%, 85%) !important;
}

.lightgrey-bg-a2 {
  background-color: #edf5fc !important;
}

.lightgrey-color-a2 {
  color: #edf5fc !important;
}

.lightgrey-border-color-a2 {
  border-color: #edf5fc !important;
}
.lightgrey-border-color-a2.border {
  border-color: #edf5fc !important;
}

.lightgrey-bg-a3 {
  background-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-color-a3 {
  color: hsl(210, 62%, 97%) !important;
}

.lightgrey-border-color-a3 {
  border-color: hsl(210, 62%, 97%) !important;
}
.lightgrey-border-color-a3.border {
  border-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-bg-a4 {
  background-color: #f5f9fc !important;
}

.lightgrey-color-a4 {
  color: #f5f9fc !important;
}

.lightgrey-border-color-a4 {
  border-color: #f5f9fc !important;
}
.lightgrey-border-color-a4.border {
  border-color: #f5f9fc !important;
}

.lightgrey-bg-b1 {
  background-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-color-b1 {
  color: hsl(210, 62%, 97%) !important;
}

.lightgrey-border-color-b1 {
  border-color: hsl(210, 62%, 97%) !important;
}
.lightgrey-border-color-b1.border {
  border-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-bg-b2 {
  background-color: #ebf2fa !important;
}

.lightgrey-color-b2 {
  color: #ebf2fa !important;
}

.lightgrey-border-color-b2 {
  border-color: #ebf2fa !important;
}
.lightgrey-border-color-b2.border {
  border-color: #ebf2fa !important;
}

.lightgrey-bg-b3 {
  background-color: #edf4fa !important;
}

.lightgrey-color-b3 {
  color: #edf4fa !important;
}

.lightgrey-border-color-b3 {
  border-color: #edf4fa !important;
}
.lightgrey-border-color-b3.border {
  border-color: #edf4fa !important;
}

.lightgrey-bg-b4 {
  background-color: #f2f6fa !important;
}

.lightgrey-color-b4 {
  color: #f2f6fa !important;
}

.lightgrey-border-color-b4 {
  border-color: #f2f6fa !important;
}
.lightgrey-border-color-b4.border {
  border-color: #f2f6fa !important;
}

.lightgrey-bg-c1 {
  background-color: #f7f9fa !important;
}

.lightgrey-color-c1 {
  color: #f7f9fa !important;
}

.lightgrey-border-color-c1 {
  border-color: #f7f9fa !important;
}
.lightgrey-border-color-c1.border {
  border-color: #f7f9fa !important;
}

.lightgrey-bg-c2 {
  background-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-color-c2 {
  color: hsl(210, 62%, 97%) !important;
}

.lightgrey-border-color-c2 {
  border-color: hsl(210, 62%, 97%) !important;
}
.lightgrey-border-color-c2.border {
  border-color: hsl(210, 62%, 97%) !important;
}

:focus:not(.focus--mouse) {
  border-color: #fd7e14 !important;
  box-shadow: 0 0 0 2px #fd7e14 !important;
  outline: none !important;
}

[tabindex="-1"]:focus:not(:focus-visible) {
  box-shadow: none;
}

.focus--mouse:not(.btn) {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

/*back to top*/
.back-to-top {
  position: fixed;
  bottom: 16px;
  right: 16px;
  background: #0d6efd;
  width: 40px;
  height: 40px;
  text-decoration: none;
  border-radius: 50%;
  display: block;
  visibility: hidden;
  opacity: 0;
  text-align: center;
  transition: all 0.2s ease-in-out, transform 0.25s cubic-bezier(0.75, -0.5, 0, 1.75), visibility 0.3s linear, opacity 0.3s ease-in-out;
  z-index: 1;
  transform: scale(0.7);
  transform-origin: center center;
}
.back-to-top.back-to-top-show {
  visibility: visible;
  opacity: 1;
  transition: all 0.2s ease-in-out, transform 0.05s ease-out, visibility 0s linear, opacity 0.1s ease-in-out;
  transform: scale(1);
}
.back-to-top:hover {
  background: rgb(11.7, 99, 227.7);
  text-decoration: none;
}
.back-to-top .icon {
  margin: 0;
  position: relative;
  transform: scale(0.75);
  top: 4px;
}
.back-to-top .icon:before {
  margin: 0;
  color: #fff;
}
.back-to-top.shadow:hover {
  box-shadow: 0 0.3rem 0.75rem rgba(0, 0, 0, 0.3) !important;
}
.back-to-top.dark {
  background: #fff;
}
.back-to-top.dark:hover {
  background: hsl(210, 6.2290689886%, 92.535%);
}
.back-to-top.dark .icon:before {
  color: hsl(210, 25%, 35.2%);
}

@media (min-width: 768px) {
  /*back to top*/
  .back-to-top {
    width: 56px;
    height: 56px;
  }
  .back-to-top .icon {
    transform: scale(1);
    top: 10px;
  }
  .back-to-top.back-to-top-small {
    width: 40px;
    height: 40px;
  }
  .back-to-top.back-to-top-small .icon {
    transform: scale(0.75);
    top: 4px;
  }
}
@media (min-width: 1200px) {
  .back-to-top {
    bottom: 32px;
    right: 32px;
  }
}
.back-to-top bsi-icon {
  margin: 0;
  position: relative;
  transform: scale(0.75);
  top: 4px;
}
.back-to-top bsi-icon:before {
  margin: 0;
  color: #fff;
}

@media (min-width: 768px) {
  /*back to top*/
  .back-to-top {
    width: 56px;
    height: 56px;
  }
  .back-to-top bsi-icon {
    transform: scale(1);
    top: 10px;
  }
}`;const vo="back-to-top-show";class zo extends no{static styles=wo;static properties={small:!1,shadow:!1,dark:!1};firstUpdated(){this._element=this.renderRoot.querySelector(".back-to-top"),this._scrollCb=(o=>{if("undefined"!=typeof document){if(fo.length||"undefined"!=typeof window&&"undefined"!=typeof document&&document.addEventListener("scroll",(o=>{yo||(window.requestAnimationFrame((()=>{fo.forEach((r=>r.cb._execute(o))),yo=!1})),yo=!0)})),"function"==typeof o){const r=new ko(uo(),o);return fo.push({id:r.id,cb:r}),r}return console.error("[onDocumentScroll] the provided data has to be of type function"),null}})((()=>this.toggleShow()))}toggleShow(){document.scrollingElement&&"undefined"!=typeof document&&document.scrollingElement.scrollTop>100?this.show():this.hide()}render(){return D`
      <a href="#" aria-hidden="true" tabindex="-1" class="back-to-top ${this.small?"back-to-top-small":""} ${this.shadow?"shadow":""}">
        <bsi-icon name='it-arrow-up' type='light'></bsi-icon>
      </a>        
    `}show(){this._element&&(this._element.classList.contains(vo)||this._element.classList.add(vo))}hide(){this._element&&this._element.classList.contains(vo)&&this._element.classList.remove(vo)}}customElements.define("bsi-back-to-top",zo);const $o="blur",So="active";class Eo{constructor(o,r){this._element=o,this._root=r,this._init()}static getInputFromLabel=o=>{if("undefined"!=typeof window&&"undefined"!=typeof document)return this._root.querySelector("#"+CSS.escape(o.getAttribute("for")))};_init(){const o=this._getLabel();o&&!o.classList.contains(So)&&(this._labelOut(),this._labelOver()),o&&null===o.getAttribute("it-bs-static")&&this._bindEvents()}_bindEvents(){["date","time"].includes(this._element.getAttribute("type"))||("file"===this._element.getAttribute("type")?this._element.addEventListener($o,(()=>{this._labelOut()})):(this._element.addEventListener("focus",(()=>{this._labelOut()})),this._element.addEventListener($o,(()=>{this._labelOver()})),this._element.addEventListener("change",(()=>{this._labelToggle()}))))}_getLabel(){return this._root.querySelector('label[for="'+this._element.getAttribute("id")+'"]')}_isEmpty(){return!this._element.value&&!this._element.getAttribute("placeholder")}_labelOut(){const o=this._getLabel();o&&o.classList.add(So)}_labelOver(){if(this._isEmpty()){const o=this._getLabel();o&&o.classList.remove(So)}}_labelToggle(){this._isEmpty()?this._labelOver():this._labelOut()}}var Ao=e`/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** NEUTRAL 1 ****************************************/
/***************************** NEUTRAL 2 ****************************************/
/***************************** NEUTRAL 2 / 3 ****************************************/
.primary-bg {
  background-color: #0d6efd !important;
}

.primary-color {
  color: #0d6efd !important;
}

.primary-border-color {
  border-color: #0d6efd !important;
}
.primary-border-color.border {
  border-color: #0d6efd !important;
}

.white-bg {
  background-color: #fff !important;
}

.white-color {
  color: #fff !important;
}

.white-border-color- {
  border-color: #fff !important;
}
.white-border-color-.border {
  border-color: #fff !important;
}

.primary-bg-a1 {
  background-color: hsl(210, 92.523364486%, 86.625%) !important;
}

.primary-color-a1 {
  color: hsl(210, 92.523364486%, 86.625%) !important;
}

.primary-border-color-a1 {
  border-color: hsl(210, 92.523364486%, 86.625%) !important;
}
.primary-border-color-a1.border {
  border-color: hsl(210, 92.523364486%, 86.625%) !important;
}

.primary-bg-a2 {
  background-color: hsl(211, 82.7586206897%, 76.8%) !important;
}

.primary-color-a2 {
  color: hsl(211, 82.7586206897%, 76.8%) !important;
}

.primary-border-color-a2 {
  border-color: hsl(211, 82.7586206897%, 76.8%) !important;
}
.primary-border-color-a2.border {
  border-color: hsl(211, 82.7586206897%, 76.8%) !important;
}

.primary-bg-a3 {
  background-color: hsl(210, 75.975975976%, 66.7%) !important;
}

.primary-color-a3 {
  color: hsl(210, 75.975975976%, 66.7%) !important;
}

.primary-border-color-a3 {
  border-color: hsl(210, 75.975975976%, 66.7%) !important;
}
.primary-border-color-a3.border {
  border-color: hsl(210, 75.975975976%, 66.7%) !important;
}

.primary-bg-a4 {
  background-color: hsl(210, 71.9626168224%, 57.2%) !important;
}

.primary-color-a4 {
  color: hsl(210, 71.9626168224%, 57.2%) !important;
}

.primary-border-color-a4 {
  border-color: hsl(210, 71.9626168224%, 57.2%) !important;
}
.primary-border-color-a4.border {
  border-color: hsl(210, 71.9626168224%, 57.2%) !important;
}

.primary-bg-a5 {
  background-color: hsl(210, 73.9130434783%, 48.3%) !important;
}

.primary-color-a5 {
  color: hsl(210, 73.9130434783%, 48.3%) !important;
}

.primary-border-color-a5 {
  border-color: hsl(210, 73.9130434783%, 48.3%) !important;
}
.primary-border-color-a5.border {
  border-color: hsl(210, 73.9130434783%, 48.3%) !important;
}

.primary-bg-a6 {
  background-color: hsl(210, 100%, 40%) !important;
}

.primary-color-a6 {
  color: hsl(210, 100%, 40%) !important;
}

.primary-border-color-a6 {
  border-color: hsl(210, 100%, 40%) !important;
}
.primary-border-color-a6.border {
  border-color: hsl(210, 100%, 40%) !important;
}

.primary-bg-a7 {
  background-color: hsl(210, 100%, 35%) !important;
}

.primary-color-a7 {
  color: hsl(210, 100%, 35%) !important;
}

.primary-border-color-a7 {
  border-color: hsl(210, 100%, 35%) !important;
}
.primary-border-color-a7.border {
  border-color: hsl(210, 100%, 35%) !important;
}

.primary-bg-a8 {
  background-color: hsl(210, 100%, 30%) !important;
}

.primary-color-a8 {
  color: hsl(210, 100%, 30%) !important;
}

.primary-border-color-a8 {
  border-color: hsl(210, 100%, 30%) !important;
}
.primary-border-color-a8.border {
  border-color: hsl(210, 100%, 30%) !important;
}

.primary-bg-a9 {
  background-color: hsl(210, 100%, 25%) !important;
}

.primary-color-a9 {
  color: hsl(210, 100%, 25%) !important;
}

.primary-border-color-a9 {
  border-color: hsl(210, 100%, 25%) !important;
}
.primary-border-color-a9.border {
  border-color: hsl(210, 100%, 25%) !important;
}

.primary-bg-a10 {
  background-color: hsl(210, 100%, 20%) !important;
}

.primary-color-a10 {
  color: hsl(210, 100%, 20%) !important;
}

.primary-border-color-a10 {
  border-color: hsl(210, 100%, 20%) !important;
}
.primary-border-color-a10.border {
  border-color: hsl(210, 100%, 20%) !important;
}

.primary-bg-a11 {
  background-color: hsl(210, 100%, 15%) !important;
}

.primary-color-a11 {
  color: hsl(210, 100%, 15%) !important;
}

.primary-border-color-a11 {
  border-color: hsl(210, 100%, 15%) !important;
}
.primary-border-color-a11.border {
  border-color: hsl(210, 100%, 15%) !important;
}

.primary-bg-a12 {
  background-color: hsl(210, 100%, 10%) !important;
}

.primary-color-a12 {
  color: hsl(210, 100%, 10%) !important;
}

.primary-border-color-a12 {
  border-color: hsl(210, 100%, 10%) !important;
}
.primary-border-color-a12.border {
  border-color: hsl(210, 100%, 10%) !important;
}

.primary-bg-b1 {
  background-color: hsl(210, 100%, 40%) !important;
}

.primary-color-b1 {
  color: hsl(210, 100%, 40%) !important;
}

.primary-border-color-b1 {
  border-color: hsl(210, 100%, 40%) !important;
}
.primary-border-color-b1.border {
  border-color: hsl(210, 100%, 40%) !important;
}

.primary-bg-b2 {
  background-color: hsl(210, 81.8181818182%, 38.5%) !important;
}

.primary-color-b2 {
  color: hsl(210, 81.8181818182%, 38.5%) !important;
}

.primary-border-color-b2 {
  border-color: hsl(210, 81.8181818182%, 38.5%) !important;
}
.primary-border-color-b2.border {
  border-color: hsl(210, 81.8181818182%, 38.5%) !important;
}

.primary-bg-b3 {
  background-color: hsl(210, 66.6666666667%, 36%) !important;
}

.primary-color-b3 {
  color: hsl(210, 66.6666666667%, 36%) !important;
}

.primary-border-color-b3 {
  border-color: hsl(210, 66.6666666667%, 36%) !important;
}
.primary-border-color-b3.border {
  border-color: hsl(210, 66.6666666667%, 36%) !important;
}

.primary-bg-b4 {
  background-color: hsl(210, 53.8461538462%, 32.5%) !important;
}

.primary-color-b4 {
  color: hsl(210, 53.8461538462%, 32.5%) !important;
}

.primary-border-color-b4 {
  border-color: hsl(210, 53.8461538462%, 32.5%) !important;
}
.primary-border-color-b4.border {
  border-color: hsl(210, 53.8461538462%, 32.5%) !important;
}

.primary-bg-b5 {
  background-color: hsl(210, 42.8571428571%, 28%) !important;
}

.primary-color-b5 {
  color: hsl(210, 42.8571428571%, 28%) !important;
}

.primary-border-color-b5 {
  border-color: hsl(210, 42.8571428571%, 28%) !important;
}
.primary-border-color-b5.border {
  border-color: hsl(210, 42.8571428571%, 28%) !important;
}

.primary-bg-b6 {
  background-color: hsl(210, 33.3333333333%, 22.5%) !important;
}

.primary-color-b6 {
  color: hsl(210, 33.3333333333%, 22.5%) !important;
}

.primary-border-color-b6 {
  border-color: hsl(210, 33.3333333333%, 22.5%) !important;
}
.primary-border-color-b6.border {
  border-color: hsl(210, 33.3333333333%, 22.5%) !important;
}

.primary-bg-b7 {
  background-color: hsl(210, 25%, 16%) !important;
}

.primary-color-b7 {
  color: hsl(210, 25%, 16%) !important;
}

.primary-border-color-b7 {
  border-color: hsl(210, 25%, 16%) !important;
}
.primary-border-color-b7.border {
  border-color: hsl(210, 25%, 16%) !important;
}

.primary-bg-b8 {
  background-color: hsl(210, 17.6470588235%, 8.5%) !important;
}

.primary-color-b8 {
  color: hsl(210, 17.6470588235%, 8.5%) !important;
}

.primary-border-color-b8 {
  border-color: hsl(210, 17.6470588235%, 8.5%) !important;
}
.primary-border-color-b8.border {
  border-color: hsl(210, 17.6470588235%, 8.5%) !important;
}

.primary-bg-c1 {
  background-color: hsl(210, 54.5454545455%, 91.2%) !important;
}

.primary-color-c1 {
  color: hsl(210, 54.5454545455%, 91.2%) !important;
}

.primary-border-color-c1 {
  border-color: hsl(210, 54.5454545455%, 91.2%) !important;
}
.primary-border-color-c1.border {
  border-color: hsl(210, 54.5454545455%, 91.2%) !important;
}

.primary-bg-c2 {
  background-color: hsl(210, 70.5882352941%, 86.4%) !important;
}

.primary-color-c2 {
  color: hsl(210, 70.5882352941%, 86.4%) !important;
}

.primary-border-color-c2 {
  border-color: hsl(210, 70.5882352941%, 86.4%) !important;
}
.primary-border-color-c2.border {
  border-color: hsl(210, 70.5882352941%, 86.4%) !important;
}

.primary-bg-c3 {
  background-color: hsl(210, 78.2608695652%, 81.6%) !important;
}

.primary-color-c3 {
  color: hsl(210, 78.2608695652%, 81.6%) !important;
}

.primary-border-color-c3 {
  border-color: hsl(210, 78.2608695652%, 81.6%) !important;
}
.primary-border-color-c3.border {
  border-color: hsl(210, 78.2608695652%, 81.6%) !important;
}

.primary-bg-c4 {
  background-color: hsl(210, 82.7586206897%, 76.8%) !important;
}

.primary-color-c4 {
  color: hsl(210, 82.7586206897%, 76.8%) !important;
}

.primary-border-color-c4 {
  border-color: hsl(210, 82.7586206897%, 76.8%) !important;
}
.primary-border-color-c4.border {
  border-color: hsl(210, 82.7586206897%, 76.8%) !important;
}

.primary-bg-c5 {
  background-color: hsl(210, 85.7142857143%, 72%) !important;
}

.primary-color-c5 {
  color: hsl(210, 85.7142857143%, 72%) !important;
}

.primary-border-color-c5 {
  border-color: hsl(210, 85.7142857143%, 72%) !important;
}
.primary-border-color-c5.border {
  border-color: hsl(210, 85.7142857143%, 72%) !important;
}

.primary-bg-c6 {
  background-color: hsl(210, 87.8048780488%, 67.2%) !important;
}

.primary-color-c6 {
  color: hsl(210, 87.8048780488%, 67.2%) !important;
}

.primary-border-color-c6 {
  border-color: hsl(210, 87.8048780488%, 67.2%) !important;
}
.primary-border-color-c6.border {
  border-color: hsl(210, 87.8048780488%, 67.2%) !important;
}

.primary-bg-c7 {
  background-color: hsl(210, 89.3617021277%, 62.4%) !important;
}

.primary-color-c7 {
  color: hsl(210, 89.3617021277%, 62.4%) !important;
}

.primary-border-color-c7 {
  border-color: hsl(210, 89.3617021277%, 62.4%) !important;
}
.primary-border-color-c7.border {
  border-color: hsl(210, 89.3617021277%, 62.4%) !important;
}

.primary-bg-c8 {
  background-color: hsl(210, 90.5660377358%, 57.6%) !important;
}

.primary-color-c8 {
  color: hsl(210, 90.5660377358%, 57.6%) !important;
}

.primary-border-color-c8 {
  border-color: hsl(210, 90.5660377358%, 57.6%) !important;
}
.primary-border-color-c8.border {
  border-color: hsl(210, 90.5660377358%, 57.6%) !important;
}

.primary-bg-c9 {
  background-color: hsl(210, 91.5254237288%, 52.8%) !important;
}

.primary-color-c9 {
  color: hsl(210, 91.5254237288%, 52.8%) !important;
}

.primary-border-color-c9 {
  border-color: hsl(210, 91.5254237288%, 52.8%) !important;
}
.primary-border-color-c9.border {
  border-color: hsl(210, 91.5254237288%, 52.8%) !important;
}

.primary-bg-c10 {
  background-color: hsl(210, 100%, 48%) !important;
}

.primary-color-c10 {
  color: hsl(210, 100%, 48%) !important;
}

.primary-border-color-c10 {
  border-color: hsl(210, 100%, 48%) !important;
}
.primary-border-color-c10.border {
  border-color: hsl(210, 100%, 48%) !important;
}

.primary-bg-c11 {
  background-color: hsl(210, 100%, 44%) !important;
}

.primary-color-c11 {
  color: hsl(210, 100%, 44%) !important;
}

.primary-border-color-c11 {
  border-color: hsl(210, 100%, 44%) !important;
}
.primary-border-color-c11.border {
  border-color: hsl(210, 100%, 44%) !important;
}

.primary-bg-c12 {
  background-color: hsl(210, 100%, 40%) !important;
}

.primary-color-c12 {
  color: hsl(210, 100%, 40%) !important;
}

.primary-border-color-c12 {
  border-color: hsl(210, 100%, 40%) !important;
}
.primary-border-color-c12.border {
  border-color: hsl(210, 100%, 40%) !important;
}

.analogue-1-bg {
  background-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-color {
  color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-border-color- {
  border-color: hsl(243, 100%, 57.5%) !important;
}
.analogue-1-border-color-.border {
  border-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-bg-a1 {
  background-color: hsl(243, 100%, 95%) !important;
}

.analogue-1-color-a1 {
  color: hsl(243, 100%, 95%) !important;
}

.analogue-1-border-color-a1 {
  border-color: hsl(243, 100%, 95%) !important;
}
.analogue-1-border-color-a1.border {
  border-color: hsl(243, 100%, 95%) !important;
}

.analogue-1-bg-a2 {
  background-color: hsl(243, 75%, 84%) !important;
}

.analogue-1-color-a2 {
  color: hsl(243, 75%, 84%) !important;
}

.analogue-1-border-color-a2 {
  border-color: hsl(243, 75%, 84%) !important;
}
.analogue-1-border-color-a2.border {
  border-color: hsl(243, 75%, 84%) !important;
}

.analogue-1-bg-a3 {
  background-color: hsl(243, 69.696969697%, 73.6%) !important;
}

.analogue-1-color-a3 {
  color: hsl(243, 69.696969697%, 73.6%) !important;
}

.analogue-1-border-color-a3 {
  border-color: hsl(243, 69.696969697%, 73.6%) !important;
}
.analogue-1-border-color-a3.border {
  border-color: hsl(243, 69.696969697%, 73.6%) !important;
}

.analogue-1-bg-a4 {
  background-color: hsl(243, 66.8508287293%, 63.8%) !important;
}

.analogue-1-color-a4 {
  color: hsl(243, 66.8508287293%, 63.8%) !important;
}

.analogue-1-border-color-a4 {
  border-color: hsl(243, 66.8508287293%, 63.8%) !important;
}
.analogue-1-border-color-a4.border {
  border-color: hsl(243, 66.8508287293%, 63.8%) !important;
}

.analogue-1-bg-a5 {
  background-color: hsl(243, 64.7577092511%, 54.6%) !important;
}

.analogue-1-color-a5 {
  color: hsl(243, 64.7577092511%, 54.6%) !important;
}

.analogue-1-border-color-a5 {
  border-color: hsl(243, 64.7577092511%, 54.6%) !important;
}
.analogue-1-border-color-a5.border {
  border-color: hsl(243, 64.7577092511%, 54.6%) !important;
}

.analogue-1-bg-a6 {
  background-color: hsl(243, 73.9130434783%, 46%) !important;
}

.analogue-1-color-a6 {
  color: hsl(243, 73.9130434783%, 46%) !important;
}

.analogue-1-border-color-a6 {
  border-color: hsl(243, 73.9130434783%, 46%) !important;
}
.analogue-1-border-color-a6.border {
  border-color: hsl(243, 73.9130434783%, 46%) !important;
}

.analogue-1-bg-a7 {
  background-color: hsl(243, 73.9130434783%, 40.25%) !important;
}

.analogue-1-color-a7 {
  color: hsl(243, 73.9130434783%, 40.25%) !important;
}

.analogue-1-border-color-a7 {
  border-color: hsl(243, 73.9130434783%, 40.25%) !important;
}
.analogue-1-border-color-a7.border {
  border-color: hsl(243, 73.9130434783%, 40.25%) !important;
}

.analogue-1-bg-a8 {
  background-color: hsl(243, 73.9130434783%, 34.5%) !important;
}

.analogue-1-color-a8 {
  color: hsl(243, 73.9130434783%, 34.5%) !important;
}

.analogue-1-border-color-a8 {
  border-color: hsl(243, 73.9130434783%, 34.5%) !important;
}
.analogue-1-border-color-a8.border {
  border-color: hsl(243, 73.9130434783%, 34.5%) !important;
}

.analogue-1-bg-a9 {
  background-color: hsl(243, 73.9130434783%, 28.75%) !important;
}

.analogue-1-color-a9 {
  color: hsl(243, 73.9130434783%, 28.75%) !important;
}

.analogue-1-border-color-a9 {
  border-color: hsl(243, 73.9130434783%, 28.75%) !important;
}
.analogue-1-border-color-a9.border {
  border-color: hsl(243, 73.9130434783%, 28.75%) !important;
}

.analogue-1-bg-a10 {
  background-color: hsl(243, 73.9130434783%, 23%) !important;
}

.analogue-1-color-a10 {
  color: hsl(243, 73.9130434783%, 23%) !important;
}

.analogue-1-border-color-a10 {
  border-color: hsl(243, 73.9130434783%, 23%) !important;
}
.analogue-1-border-color-a10.border {
  border-color: hsl(243, 73.9130434783%, 23%) !important;
}

.analogue-1-bg-a11 {
  background-color: hsl(243, 73.9130434783%, 17.25%) !important;
}

.analogue-1-color-a11 {
  color: hsl(243, 73.9130434783%, 17.25%) !important;
}

.analogue-1-border-color-a11 {
  border-color: hsl(243, 73.9130434783%, 17.25%) !important;
}
.analogue-1-border-color-a11.border {
  border-color: hsl(243, 73.9130434783%, 17.25%) !important;
}

.analogue-1-bg-a12 {
  background-color: hsl(243, 73.9130434783%, 11.5%) !important;
}

.analogue-1-color-a12 {
  color: hsl(243, 73.9130434783%, 11.5%) !important;
}

.analogue-1-border-color-a12 {
  border-color: hsl(243, 73.9130434783%, 11.5%) !important;
}
.analogue-1-border-color-a12.border {
  border-color: hsl(243, 73.9130434783%, 11.5%) !important;
}

.analogue-2-bg {
  background-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-color {
  color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-border-color- {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}
.analogue-2-border-color-.border {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-bg-a1 {
  background-color: hsl(178, 100%, 90%) !important;
}

.analogue-2-color-a1 {
  color: hsl(178, 100%, 90%) !important;
}

.analogue-2-border-color-a1 {
  border-color: hsl(178, 100%, 90%) !important;
}
.analogue-2-border-color-a1.border {
  border-color: hsl(178, 100%, 90%) !important;
}

.analogue-2-bg-a2 {
  background-color: hsl(178, 80.7692307692%, 79.2%) !important;
}

.analogue-2-color-a2 {
  color: hsl(178, 80.7692307692%, 79.2%) !important;
}

.analogue-2-border-color-a2 {
  border-color: hsl(178, 80.7692307692%, 79.2%) !important;
}
.analogue-2-border-color-a2.border {
  border-color: hsl(178, 80.7692307692%, 79.2%) !important;
}

.analogue-2-bg-a3 {
  background-color: hsl(178, 74.1935483871%, 69%) !important;
}

.analogue-2-color-a3 {
  color: hsl(178, 74.1935483871%, 69%) !important;
}

.analogue-2-border-color-a3 {
  border-color: hsl(178, 74.1935483871%, 69%) !important;
}
.analogue-2-border-color-a3.border {
  border-color: hsl(178, 74.1935483871%, 69%) !important;
}

.analogue-2-bg-a4 {
  background-color: hsl(178, 70.4433497537%, 59.4%) !important;
}

.analogue-2-color-a4 {
  color: hsl(178, 70.4433497537%, 59.4%) !important;
}

.analogue-2-border-color-a4 {
  border-color: hsl(178, 70.4433497537%, 59.4%) !important;
}
.analogue-2-border-color-a4.border {
  border-color: hsl(178, 70.4433497537%, 59.4%) !important;
}

.analogue-2-bg-a5 {
  background-color: hsl(178, 67.7419354839%, 50.4%) !important;
}

.analogue-2-color-a5 {
  color: hsl(178, 67.7419354839%, 50.4%) !important;
}

.analogue-2-border-color-a5 {
  border-color: hsl(178, 67.7419354839%, 50.4%) !important;
}
.analogue-2-border-color-a5.border {
  border-color: hsl(178, 67.7419354839%, 50.4%) !important;
}

.analogue-2-bg-a6 {
  background-color: hsl(178, 90.4761904762%, 42%) !important;
}

.analogue-2-color-a6 {
  color: hsl(178, 90.4761904762%, 42%) !important;
}

.analogue-2-border-color-a6 {
  border-color: hsl(178, 90.4761904762%, 42%) !important;
}
.analogue-2-border-color-a6.border {
  border-color: hsl(178, 90.4761904762%, 42%) !important;
}

.analogue-2-bg-a7 {
  background-color: hsl(178, 90.4761904762%, 36.75%) !important;
}

.analogue-2-color-a7 {
  color: hsl(178, 90.4761904762%, 36.75%) !important;
}

.analogue-2-border-color-a7 {
  border-color: hsl(178, 90.4761904762%, 36.75%) !important;
}
.analogue-2-border-color-a7.border {
  border-color: hsl(178, 90.4761904762%, 36.75%) !important;
}

.analogue-2-bg-a8 {
  background-color: hsl(178, 90.4761904762%, 31.5%) !important;
}

.analogue-2-color-a8 {
  color: hsl(178, 90.4761904762%, 31.5%) !important;
}

.analogue-2-border-color-a8 {
  border-color: hsl(178, 90.4761904762%, 31.5%) !important;
}
.analogue-2-border-color-a8.border {
  border-color: hsl(178, 90.4761904762%, 31.5%) !important;
}

.analogue-2-bg-a9 {
  background-color: hsl(178, 90.4761904762%, 26.25%) !important;
}

.analogue-2-color-a9 {
  color: hsl(178, 90.4761904762%, 26.25%) !important;
}

.analogue-2-border-color-a9 {
  border-color: hsl(178, 90.4761904762%, 26.25%) !important;
}
.analogue-2-border-color-a9.border {
  border-color: hsl(178, 90.4761904762%, 26.25%) !important;
}

.analogue-2-bg-a10 {
  background-color: hsl(178, 90.4761904762%, 21%) !important;
}

.analogue-2-color-a10 {
  color: hsl(178, 90.4761904762%, 21%) !important;
}

.analogue-2-border-color-a10 {
  border-color: hsl(178, 90.4761904762%, 21%) !important;
}
.analogue-2-border-color-a10.border {
  border-color: hsl(178, 90.4761904762%, 21%) !important;
}

.analogue-2-bg-a11 {
  background-color: hsl(178, 90.4761904762%, 15.75%) !important;
}

.analogue-2-color-a11 {
  color: hsl(178, 90.4761904762%, 15.75%) !important;
}

.analogue-2-border-color-a11 {
  border-color: hsl(178, 90.4761904762%, 15.75%) !important;
}
.analogue-2-border-color-a11.border {
  border-color: hsl(178, 90.4761904762%, 15.75%) !important;
}

.analogue-2-bg-a12 {
  background-color: hsl(178, 90.4761904762%, 10.5%) !important;
}

.analogue-2-color-a12 {
  color: hsl(178, 90.4761904762%, 10.5%) !important;
}

.analogue-2-border-color-a12 {
  border-color: hsl(178, 90.4761904762%, 10.5%) !important;
}
.analogue-2-border-color-a12.border {
  border-color: hsl(178, 90.4761904762%, 10.5%) !important;
}

.complementary-1-bg {
  background-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-color {
  color: hsl(36, 100%, 50%) !important;
}

.complementary-1-border-color- {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}
.complementary-1-border-color-.border {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-bg-a1 {
  background-color: hsl(351, 100%, 99.5%) !important;
}

.complementary-1-color-a1 {
  color: hsl(351, 100%, 99.5%) !important;
}

.complementary-1-border-color-a1 {
  border-color: hsl(351, 100%, 99.5%) !important;
}
.complementary-1-border-color-a1.border {
  border-color: hsl(351, 100%, 99.5%) !important;
}

.complementary-1-bg-a2 {
  background-color: hsl(351, 64.2857142857%, 88.8%) !important;
}

.complementary-1-color-a2 {
  color: hsl(351, 64.2857142857%, 88.8%) !important;
}

.complementary-1-border-color-a2 {
  border-color: hsl(351, 64.2857142857%, 88.8%) !important;
}
.complementary-1-border-color-a2.border {
  border-color: hsl(351, 64.2857142857%, 88.8%) !important;
}

.complementary-1-bg-a3 {
  background-color: hsl(351, 63.3027522936%, 78.2%) !important;
}

.complementary-1-color-a3 {
  color: hsl(351, 63.3027522936%, 78.2%) !important;
}

.complementary-1-border-color-a3 {
  border-color: hsl(351, 63.3027522936%, 78.2%) !important;
}
.complementary-1-border-color-a3.border {
  border-color: hsl(351, 63.3027522936%, 78.2%) !important;
}

.complementary-1-bg-a4 {
  background-color: hsl(351, 62.2641509434%, 68.2%) !important;
}

.complementary-1-color-a4 {
  color: hsl(351, 62.2641509434%, 68.2%) !important;
}

.complementary-1-border-color-a4 {
  border-color: hsl(351, 62.2641509434%, 68.2%) !important;
}
.complementary-1-border-color-a4.border {
  border-color: hsl(351, 62.2641509434%, 68.2%) !important;
}

.complementary-1-bg-a5 {
  background-color: hsl(351, 61.1650485437%, 58.8%) !important;
}

.complementary-1-color-a5 {
  color: hsl(351, 61.1650485437%, 58.8%) !important;
}

.complementary-1-border-color-a5 {
  border-color: hsl(351, 61.1650485437%, 58.8%) !important;
}
.complementary-1-border-color-a5.border {
  border-color: hsl(351, 61.1650485437%, 58.8%) !important;
}

.complementary-1-bg-a6 {
  background-color: hsl(351, 60%, 50%) !important;
}

.complementary-1-color-a6 {
  color: hsl(351, 60%, 50%) !important;
}

.complementary-1-border-color-a6 {
  border-color: hsl(351, 60%, 50%) !important;
}
.complementary-1-border-color-a6.border {
  border-color: hsl(351, 60%, 50%) !important;
}

.complementary-1-bg-a7 {
  background-color: hsl(351, 60%, 43.75%) !important;
}

.complementary-1-color-a7 {
  color: hsl(351, 60%, 43.75%) !important;
}

.complementary-1-border-color-a7 {
  border-color: hsl(351, 60%, 43.75%) !important;
}
.complementary-1-border-color-a7.border {
  border-color: hsl(351, 60%, 43.75%) !important;
}

.complementary-1-bg-a8 {
  background-color: hsl(351, 60%, 37.5%) !important;
}

.complementary-1-color-a8 {
  color: hsl(351, 60%, 37.5%) !important;
}

.complementary-1-border-color-a8 {
  border-color: hsl(351, 60%, 37.5%) !important;
}
.complementary-1-border-color-a8.border {
  border-color: hsl(351, 60%, 37.5%) !important;
}

.complementary-1-bg-a9 {
  background-color: hsl(351, 60%, 31.25%) !important;
}

.complementary-1-color-a9 {
  color: hsl(351, 60%, 31.25%) !important;
}

.complementary-1-border-color-a9 {
  border-color: hsl(351, 60%, 31.25%) !important;
}
.complementary-1-border-color-a9.border {
  border-color: hsl(351, 60%, 31.25%) !important;
}

.complementary-1-bg-a10 {
  background-color: hsl(351, 60%, 25%) !important;
}

.complementary-1-color-a10 {
  color: hsl(351, 60%, 25%) !important;
}

.complementary-1-border-color-a10 {
  border-color: hsl(351, 60%, 25%) !important;
}
.complementary-1-border-color-a10.border {
  border-color: hsl(351, 60%, 25%) !important;
}

.complementary-1-bg-a11 {
  background-color: hsl(351, 60%, 18.75%) !important;
}

.complementary-1-color-a11 {
  color: hsl(351, 60%, 18.75%) !important;
}

.complementary-1-border-color-a11 {
  border-color: hsl(351, 60%, 18.75%) !important;
}
.complementary-1-border-color-a11.border {
  border-color: hsl(351, 60%, 18.75%) !important;
}

.complementary-1-bg-a12 {
  background-color: hsl(351, 60%, 12.5%) !important;
}

.complementary-1-color-a12 {
  color: hsl(351, 60%, 12.5%) !important;
}

.complementary-1-border-color-a12 {
  border-color: hsl(351, 60%, 12.5%) !important;
}
.complementary-1-border-color-a12.border {
  border-color: hsl(351, 60%, 12.5%) !important;
}

.complementary-2-bg {
  background-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-color {
  color: hsl(36, 100%, 50%) !important;
}

.complementary-2-border-color- {
  border-color: hsl(36, 100%, 50%) !important;
}
.complementary-2-border-color-.border {
  border-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-bg-a1 {
  background-color: hsl(36, 100%, 87.5%) !important;
}

.complementary-2-color-a1 {
  color: hsl(36, 100%, 87.5%) !important;
}

.complementary-2-border-color-a1 {
  border-color: hsl(36, 100%, 87.5%) !important;
}
.complementary-2-border-color-a1.border {
  border-color: hsl(36, 100%, 87.5%) !important;
}

.complementary-2-bg-a2 {
  background-color: hsl(36, 82.7586206897%, 76.8%) !important;
}

.complementary-2-color-a2 {
  color: hsl(36, 82.7586206897%, 76.8%) !important;
}

.complementary-2-border-color-a2 {
  border-color: hsl(36, 82.7586206897%, 76.8%) !important;
}
.complementary-2-border-color-a2.border {
  border-color: hsl(36, 82.7586206897%, 76.8%) !important;
}

.complementary-2-bg-a3 {
  background-color: hsl(36, 75.975975976%, 66.7%) !important;
}

.complementary-2-color-a3 {
  color: hsl(36, 75.975975976%, 66.7%) !important;
}

.complementary-2-border-color-a3 {
  border-color: hsl(36, 75.975975976%, 66.7%) !important;
}
.complementary-2-border-color-a3.border {
  border-color: hsl(36, 75.975975976%, 66.7%) !important;
}

.complementary-2-bg-a4 {
  background-color: hsl(36, 71.9626168224%, 57.2%) !important;
}

.complementary-2-color-a4 {
  color: hsl(36, 71.9626168224%, 57.2%) !important;
}

.complementary-2-border-color-a4 {
  border-color: hsl(36, 71.9626168224%, 57.2%) !important;
}
.complementary-2-border-color-a4.border {
  border-color: hsl(36, 71.9626168224%, 57.2%) !important;
}

.complementary-2-bg-a5 {
  background-color: hsl(36, 73.9130434783%, 48.3%) !important;
}

.complementary-2-color-a5 {
  color: hsl(36, 73.9130434783%, 48.3%) !important;
}

.complementary-2-border-color-a5 {
  border-color: hsl(36, 73.9130434783%, 48.3%) !important;
}
.complementary-2-border-color-a5.border {
  border-color: hsl(36, 73.9130434783%, 48.3%) !important;
}

.complementary-2-bg-a6 {
  background-color: hsl(36, 100%, 40%) !important;
}

.complementary-2-color-a6 {
  color: hsl(36, 100%, 40%) !important;
}

.complementary-2-border-color-a6 {
  border-color: hsl(36, 100%, 40%) !important;
}
.complementary-2-border-color-a6.border {
  border-color: hsl(36, 100%, 40%) !important;
}

.complementary-2-bg-a7 {
  background-color: hsl(36, 100%, 35%) !important;
}

.complementary-2-color-a7 {
  color: hsl(36, 100%, 35%) !important;
}

.complementary-2-border-color-a7 {
  border-color: hsl(36, 100%, 35%) !important;
}
.complementary-2-border-color-a7.border {
  border-color: hsl(36, 100%, 35%) !important;
}

.complementary-2-bg-a8 {
  background-color: hsl(36, 100%, 30%) !important;
}

.complementary-2-color-a8 {
  color: hsl(36, 100%, 30%) !important;
}

.complementary-2-border-color-a8 {
  border-color: hsl(36, 100%, 30%) !important;
}
.complementary-2-border-color-a8.border {
  border-color: hsl(36, 100%, 30%) !important;
}

.complementary-2-bg-a9 {
  background-color: hsl(36, 100%, 25%) !important;
}

.complementary-2-color-a9 {
  color: hsl(36, 100%, 25%) !important;
}

.complementary-2-border-color-a9 {
  border-color: hsl(36, 100%, 25%) !important;
}
.complementary-2-border-color-a9.border {
  border-color: hsl(36, 100%, 25%) !important;
}

.complementary-2-bg-a10 {
  background-color: hsl(36, 100%, 20%) !important;
}

.complementary-2-color-a10 {
  color: hsl(36, 100%, 20%) !important;
}

.complementary-2-border-color-a10 {
  border-color: hsl(36, 100%, 20%) !important;
}
.complementary-2-border-color-a10.border {
  border-color: hsl(36, 100%, 20%) !important;
}

.complementary-2-bg-a11 {
  background-color: hsl(36, 100%, 15%) !important;
}

.complementary-2-color-a11 {
  color: hsl(36, 100%, 15%) !important;
}

.complementary-2-border-color-a11 {
  border-color: hsl(36, 100%, 15%) !important;
}
.complementary-2-border-color-a11.border {
  border-color: hsl(36, 100%, 15%) !important;
}

.complementary-2-bg-a12 {
  background-color: hsl(36, 100%, 10%) !important;
}

.complementary-2-color-a12 {
  color: hsl(36, 100%, 10%) !important;
}

.complementary-2-border-color-a12 {
  border-color: hsl(36, 100%, 10%) !important;
}
.complementary-2-border-color-a12.border {
  border-color: hsl(36, 100%, 10%) !important;
}

.complementary-3-bg {
  background-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-color {
  color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-border-color- {
  border-color: hsl(159, 100%, 40.5%) !important;
}
.complementary-3-border-color-.border {
  border-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-bg-a1 {
  background-color: hsl(159, 100%, 87.5%) !important;
}

.complementary-3-color-a1 {
  color: hsl(159, 100%, 87.5%) !important;
}

.complementary-3-border-color-a1 {
  border-color: hsl(159, 100%, 87.5%) !important;
}
.complementary-3-border-color-a1.border {
  border-color: hsl(159, 100%, 87.5%) !important;
}

.complementary-3-bg-a2 {
  background-color: hsl(159, 82.7586206897%, 76.8%) !important;
}

.complementary-3-color-a2 {
  color: hsl(159, 82.7586206897%, 76.8%) !important;
}

.complementary-3-border-color-a2 {
  border-color: hsl(159, 82.7586206897%, 76.8%) !important;
}
.complementary-3-border-color-a2.border {
  border-color: hsl(159, 82.7586206897%, 76.8%) !important;
}

.complementary-3-bg-a3 {
  background-color: hsl(159, 75.975975976%, 66.7%) !important;
}

.complementary-3-color-a3 {
  color: hsl(159, 75.975975976%, 66.7%) !important;
}

.complementary-3-border-color-a3 {
  border-color: hsl(159, 75.975975976%, 66.7%) !important;
}
.complementary-3-border-color-a3.border {
  border-color: hsl(159, 75.975975976%, 66.7%) !important;
}

.complementary-3-bg-a4 {
  background-color: hsl(159, 71.9626168224%, 57.2%) !important;
}

.complementary-3-color-a4 {
  color: hsl(159, 71.9626168224%, 57.2%) !important;
}

.complementary-3-border-color-a4 {
  border-color: hsl(159, 71.9626168224%, 57.2%) !important;
}
.complementary-3-border-color-a4.border {
  border-color: hsl(159, 71.9626168224%, 57.2%) !important;
}

.complementary-3-bg-a5 {
  background-color: hsl(159, 73.9130434783%, 48.3%) !important;
}

.complementary-3-color-a5 {
  color: hsl(159, 73.9130434783%, 48.3%) !important;
}

.complementary-3-border-color-a5 {
  border-color: hsl(159, 73.9130434783%, 48.3%) !important;
}
.complementary-3-border-color-a5.border {
  border-color: hsl(159, 73.9130434783%, 48.3%) !important;
}

.complementary-3-bg-a6 {
  background-color: hsl(159, 100%, 40%) !important;
}

.complementary-3-color-a6 {
  color: hsl(159, 100%, 40%) !important;
}

.complementary-3-border-color-a6 {
  border-color: hsl(159, 100%, 40%) !important;
}
.complementary-3-border-color-a6.border {
  border-color: hsl(159, 100%, 40%) !important;
}

.complementary-3-bg-a7 {
  background-color: hsl(159, 100%, 35%) !important;
}

.complementary-3-color-a7 {
  color: hsl(159, 100%, 35%) !important;
}

.complementary-3-border-color-a7 {
  border-color: hsl(159, 100%, 35%) !important;
}
.complementary-3-border-color-a7.border {
  border-color: hsl(159, 100%, 35%) !important;
}

.complementary-3-bg-a8 {
  background-color: hsl(159, 100%, 30%) !important;
}

.complementary-3-color-a8 {
  color: hsl(159, 100%, 30%) !important;
}

.complementary-3-border-color-a8 {
  border-color: hsl(159, 100%, 30%) !important;
}
.complementary-3-border-color-a8.border {
  border-color: hsl(159, 100%, 30%) !important;
}

.complementary-3-bg-a9 {
  background-color: hsl(159, 100%, 25%) !important;
}

.complementary-3-color-a9 {
  color: hsl(159, 100%, 25%) !important;
}

.complementary-3-border-color-a9 {
  border-color: hsl(159, 100%, 25%) !important;
}
.complementary-3-border-color-a9.border {
  border-color: hsl(159, 100%, 25%) !important;
}

.complementary-3-bg-a10 {
  background-color: hsl(159, 100%, 20%) !important;
}

.complementary-3-color-a10 {
  color: hsl(159, 100%, 20%) !important;
}

.complementary-3-border-color-a10 {
  border-color: hsl(159, 100%, 20%) !important;
}
.complementary-3-border-color-a10.border {
  border-color: hsl(159, 100%, 20%) !important;
}

.complementary-3-bg-a11 {
  background-color: hsl(159, 100%, 15%) !important;
}

.complementary-3-color-a11 {
  color: hsl(159, 100%, 15%) !important;
}

.complementary-3-border-color-a11 {
  border-color: hsl(159, 100%, 15%) !important;
}
.complementary-3-border-color-a11.border {
  border-color: hsl(159, 100%, 15%) !important;
}

.complementary-3-bg-a12 {
  background-color: hsl(159, 100%, 10%) !important;
}

.complementary-3-color-a12 {
  color: hsl(159, 100%, 10%) !important;
}

.complementary-3-border-color-a12 {
  border-color: hsl(159, 100%, 10%) !important;
}
.complementary-3-border-color-a12.border {
  border-color: hsl(159, 100%, 10%) !important;
}

.analogue-1-bg-b1 {
  background-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-color-b1 {
  color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-border-color-b1 {
  border-color: hsl(243, 100%, 57.5%) !important;
}
.analogue-1-border-color-b1.border {
  border-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-bg-b2 {
  background-color: hsl(243, 77.1428571429%, 56.25%) !important;
}

.analogue-1-color-b2 {
  color: hsl(243, 77.1428571429%, 56.25%) !important;
}

.analogue-1-border-color-b2 {
  border-color: hsl(243, 77.1428571429%, 56.25%) !important;
}
.analogue-1-border-color-b2.border {
  border-color: hsl(243, 77.1428571429%, 56.25%) !important;
}

.analogue-1-bg-b3 {
  background-color: hsl(243, 56.5217391304%, 54%) !important;
}

.analogue-1-color-b3 {
  color: hsl(243, 56.5217391304%, 54%) !important;
}

.analogue-1-border-color-b3 {
  border-color: hsl(243, 56.5217391304%, 54%) !important;
}
.analogue-1-border-color-b3.border {
  border-color: hsl(243, 56.5217391304%, 54%) !important;
}

.analogue-1-bg-b4 {
  background-color: hsl(243, 39.0862944162%, 50.75%) !important;
}

.analogue-1-color-b4 {
  color: hsl(243, 39.0862944162%, 50.75%) !important;
}

.analogue-1-border-color-b4 {
  border-color: hsl(243, 39.0862944162%, 50.75%) !important;
}
.analogue-1-border-color-b4.border {
  border-color: hsl(243, 39.0862944162%, 50.75%) !important;
}

.analogue-1-bg-b5 {
  background-color: hsl(243, 29.0322580645%, 46.5%) !important;
}

.analogue-1-color-b5 {
  color: hsl(243, 29.0322580645%, 46.5%) !important;
}

.analogue-1-border-color-b5 {
  border-color: hsl(243, 29.0322580645%, 46.5%) !important;
}
.analogue-1-border-color-b5.border {
  border-color: hsl(243, 29.0322580645%, 46.5%) !important;
}

.analogue-1-bg-b6 {
  background-color: hsl(243, 21.2121212121%, 41.25%) !important;
}

.analogue-1-color-b6 {
  color: hsl(243, 21.2121212121%, 41.25%) !important;
}

.analogue-1-border-color-b6 {
  border-color: hsl(243, 21.2121212121%, 41.25%) !important;
}
.analogue-1-border-color-b6.border {
  border-color: hsl(243, 21.2121212121%, 41.25%) !important;
}

.analogue-1-bg-b7 {
  background-color: hsl(243, 14.2857142857%, 35%) !important;
}

.analogue-1-color-b7 {
  color: hsl(243, 14.2857142857%, 35%) !important;
}

.analogue-1-border-color-b7 {
  border-color: hsl(243, 14.2857142857%, 35%) !important;
}
.analogue-1-border-color-b7.border {
  border-color: hsl(243, 14.2857142857%, 35%) !important;
}

.analogue-1-bg-b8 {
  background-color: hsl(243, 8.1081081081%, 27.75%) !important;
}

.analogue-1-color-b8 {
  color: hsl(243, 8.1081081081%, 27.75%) !important;
}

.analogue-1-border-color-b8 {
  border-color: hsl(243, 8.1081081081%, 27.75%) !important;
}
.analogue-1-border-color-b8.border {
  border-color: hsl(243, 8.1081081081%, 27.75%) !important;
}

.analogue-2-bg-b1 {
  background-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-color-b1 {
  color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-border-color-b1 {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}
.analogue-2-border-color-b1.border {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-bg-b2 {
  background-color: hsl(178, 73.9130434783%, 43.125%) !important;
}

.analogue-2-color-b2 {
  color: hsl(178, 73.9130434783%, 43.125%) !important;
}

.analogue-2-border-color-b2 {
  border-color: hsl(178, 73.9130434783%, 43.125%) !important;
}
.analogue-2-border-color-b2.border {
  border-color: hsl(178, 73.9130434783%, 43.125%) !important;
}

.analogue-2-bg-b3 {
  background-color: hsl(178, 60%, 40.625%) !important;
}

.analogue-2-color-b3 {
  color: hsl(178, 60%, 40.625%) !important;
}

.analogue-2-border-color-b3 {
  border-color: hsl(178, 60%, 40.625%) !important;
}
.analogue-2-border-color-b3.border {
  border-color: hsl(178, 60%, 40.625%) !important;
}

.analogue-2-bg-b4 {
  background-color: hsl(178, 48.1481481481%, 37.125%) !important;
}

.analogue-2-color-b4 {
  color: hsl(178, 48.1481481481%, 37.125%) !important;
}

.analogue-2-border-color-b4 {
  border-color: hsl(178, 48.1481481481%, 37.125%) !important;
}
.analogue-2-border-color-b4.border {
  border-color: hsl(178, 48.1481481481%, 37.125%) !important;
}

.analogue-2-bg-b5 {
  background-color: hsl(178, 37.9310344828%, 32.625%) !important;
}

.analogue-2-color-b5 {
  color: hsl(178, 37.9310344828%, 32.625%) !important;
}

.analogue-2-border-color-b5 {
  border-color: hsl(178, 37.9310344828%, 32.625%) !important;
}
.analogue-2-border-color-b5.border {
  border-color: hsl(178, 37.9310344828%, 32.625%) !important;
}

.analogue-2-bg-b6 {
  background-color: hsl(178, 29.0322580645%, 27.125%) !important;
}

.analogue-2-color-b6 {
  color: hsl(178, 29.0322580645%, 27.125%) !important;
}

.analogue-2-border-color-b6 {
  border-color: hsl(178, 29.0322580645%, 27.125%) !important;
}
.analogue-2-border-color-b6.border {
  border-color: hsl(178, 29.0322580645%, 27.125%) !important;
}

.analogue-2-bg-b7 {
  background-color: hsl(178, 21.2121212121%, 20.625%) !important;
}

.analogue-2-color-b7 {
  color: hsl(178, 21.2121212121%, 20.625%) !important;
}

.analogue-2-border-color-b7 {
  border-color: hsl(178, 21.2121212121%, 20.625%) !important;
}
.analogue-2-border-color-b7.border {
  border-color: hsl(178, 21.2121212121%, 20.625%) !important;
}

.analogue-2-bg-b8 {
  background-color: hsl(178, 14.2857142857%, 13.125%) !important;
}

.analogue-2-color-b8 {
  color: hsl(178, 14.2857142857%, 13.125%) !important;
}

.analogue-2-border-color-b8 {
  border-color: hsl(178, 14.2857142857%, 13.125%) !important;
}
.analogue-2-border-color-b8.border {
  border-color: hsl(178, 14.2857142857%, 13.125%) !important;
}

.complementary-1-bg-b1 {
  background-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-color-b1 {
  color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-border-color-b1 {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}
.complementary-1-border-color-b1.border {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-bg-b2 {
  background-color: hsl(351, 68.5039370079%, 58.725%) !important;
}

.complementary-1-color-b2 {
  color: hsl(351, 68.5039370079%, 58.725%) !important;
}

.complementary-1-border-color-b2 {
  border-color: hsl(351, 68.5039370079%, 58.725%) !important;
}
.complementary-1-border-color-b2.border {
  border-color: hsl(351, 68.5039370079%, 58.725%) !important;
}

.complementary-1-bg-b3 {
  background-color: hsl(351, 47.9343520091%, 55.825%) !important;
}

.complementary-1-color-b3 {
  color: hsl(351, 47.9343520091%, 55.825%) !important;
}

.complementary-1-border-color-b3 {
  border-color: hsl(351, 47.9343520091%, 55.825%) !important;
}
.complementary-1-border-color-b3.border {
  border-color: hsl(351, 47.9343520091%, 55.825%) !important;
}

.complementary-1-bg-b4 {
  background-color: hsl(351, 31.3572542902%, 51.925%) !important;
}

.complementary-1-color-b4 {
  color: hsl(351, 31.3572542902%, 51.925%) !important;
}

.complementary-1-border-color-b4 {
  border-color: hsl(351, 31.3572542902%, 51.925%) !important;
}
.complementary-1-border-color-b4.border {
  border-color: hsl(351, 31.3572542902%, 51.925%) !important;
}

.complementary-1-bg-b5 {
  background-color: hsl(351, 21.2121212121%, 47.025%) !important;
}

.complementary-1-color-b5 {
  color: hsl(351, 21.2121212121%, 47.025%) !important;
}

.complementary-1-border-color-b5 {
  border-color: hsl(351, 21.2121212121%, 47.025%) !important;
}
.complementary-1-border-color-b5.border {
  border-color: hsl(351, 21.2121212121%, 47.025%) !important;
}

.complementary-1-bg-b6 {
  background-color: hsl(351, 14.2857142857%, 41.125%) !important;
}

.complementary-1-color-b6 {
  color: hsl(351, 14.2857142857%, 41.125%) !important;
}

.complementary-1-border-color-b6 {
  border-color: hsl(351, 14.2857142857%, 41.125%) !important;
}
.complementary-1-border-color-b6.border {
  border-color: hsl(351, 14.2857142857%, 41.125%) !important;
}

.complementary-1-bg-b7 {
  background-color: hsl(351, 8.1081081081%, 34.225%) !important;
}

.complementary-1-color-b7 {
  color: hsl(351, 8.1081081081%, 34.225%) !important;
}

.complementary-1-border-color-b7 {
  border-color: hsl(351, 8.1081081081%, 34.225%) !important;
}
.complementary-1-border-color-b7.border {
  border-color: hsl(351, 8.1081081081%, 34.225%) !important;
}

.complementary-1-bg-b8 {
  background-color: hsl(351, 2.5641025641%, 26.325%) !important;
}

.complementary-1-color-b8 {
  color: hsl(351, 2.5641025641%, 26.325%) !important;
}

.complementary-1-border-color-b8 {
  border-color: hsl(351, 2.5641025641%, 26.325%) !important;
}
.complementary-1-border-color-b8.border {
  border-color: hsl(351, 2.5641025641%, 26.325%) !important;
}

.complementary-2-bg-b1 {
  background-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-color-b1 {
  color: hsl(36, 100%, 50%) !important;
}

.complementary-2-border-color-b1 {
  border-color: hsl(36, 100%, 50%) !important;
}
.complementary-2-border-color-b1.border {
  border-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-bg-b2 {
  background-color: hsl(36, 81.8181818182%, 49.5%) !important;
}

.complementary-2-color-b2 {
  color: hsl(36, 81.8181818182%, 49.5%) !important;
}

.complementary-2-border-color-b2 {
  border-color: hsl(36, 81.8181818182%, 49.5%) !important;
}
.complementary-2-border-color-b2.border {
  border-color: hsl(36, 81.8181818182%, 49.5%) !important;
}

.complementary-2-bg-b3 {
  background-color: hsl(36, 66.6666666667%, 48%) !important;
}

.complementary-2-color-b3 {
  color: hsl(36, 66.6666666667%, 48%) !important;
}

.complementary-2-border-color-b3 {
  border-color: hsl(36, 66.6666666667%, 48%) !important;
}
.complementary-2-border-color-b3.border {
  border-color: hsl(36, 66.6666666667%, 48%) !important;
}

.complementary-2-bg-b4 {
  background-color: hsl(36, 53.8461538462%, 45.5%) !important;
}

.complementary-2-color-b4 {
  color: hsl(36, 53.8461538462%, 45.5%) !important;
}

.complementary-2-border-color-b4 {
  border-color: hsl(36, 53.8461538462%, 45.5%) !important;
}
.complementary-2-border-color-b4.border {
  border-color: hsl(36, 53.8461538462%, 45.5%) !important;
}

.complementary-2-bg-b5 {
  background-color: hsl(36, 42.8571428571%, 42%) !important;
}

.complementary-2-color-b5 {
  color: hsl(36, 42.8571428571%, 42%) !important;
}

.complementary-2-border-color-b5 {
  border-color: hsl(36, 42.8571428571%, 42%) !important;
}
.complementary-2-border-color-b5.border {
  border-color: hsl(36, 42.8571428571%, 42%) !important;
}

.complementary-2-bg-b6 {
  background-color: hsl(36, 33.3333333333%, 37.5%) !important;
}

.complementary-2-color-b6 {
  color: hsl(36, 33.3333333333%, 37.5%) !important;
}

.complementary-2-border-color-b6 {
  border-color: hsl(36, 33.3333333333%, 37.5%) !important;
}
.complementary-2-border-color-b6.border {
  border-color: hsl(36, 33.3333333333%, 37.5%) !important;
}

.complementary-2-bg-b7 {
  background-color: hsl(36, 25%, 32%) !important;
}

.complementary-2-color-b7 {
  color: hsl(36, 25%, 32%) !important;
}

.complementary-2-border-color-b7 {
  border-color: hsl(36, 25%, 32%) !important;
}
.complementary-2-border-color-b7.border {
  border-color: hsl(36, 25%, 32%) !important;
}

.complementary-2-bg-b8 {
  background-color: hsl(36, 17.6470588235%, 25.5%) !important;
}

.complementary-2-color-b8 {
  color: hsl(36, 17.6470588235%, 25.5%) !important;
}

.complementary-2-border-color-b8 {
  border-color: hsl(36, 17.6470588235%, 25.5%) !important;
}
.complementary-2-border-color-b8.border {
  border-color: hsl(36, 17.6470588235%, 25.5%) !important;
}

.complementary-3-bg-b1 {
  background-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-color-b1 {
  color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-border-color-b1 {
  border-color: hsl(159, 100%, 40.5%) !important;
}
.complementary-3-border-color-b1.border {
  border-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-bg-b2 {
  background-color: hsl(159, 81.8181818182%, 39.05%) !important;
}

.complementary-3-color-b2 {
  color: hsl(159, 81.8181818182%, 39.05%) !important;
}

.complementary-3-border-color-b2 {
  border-color: hsl(159, 81.8181818182%, 39.05%) !important;
}
.complementary-3-border-color-b2.border {
  border-color: hsl(159, 81.8181818182%, 39.05%) !important;
}

.complementary-3-bg-b3 {
  background-color: hsl(159, 66.6666666667%, 36.6%) !important;
}

.complementary-3-color-b3 {
  color: hsl(159, 66.6666666667%, 36.6%) !important;
}

.complementary-3-border-color-b3 {
  border-color: hsl(159, 66.6666666667%, 36.6%) !important;
}
.complementary-3-border-color-b3.border {
  border-color: hsl(159, 66.6666666667%, 36.6%) !important;
}

.complementary-3-bg-b4 {
  background-color: hsl(159, 53.8461538462%, 33.15%) !important;
}

.complementary-3-color-b4 {
  color: hsl(159, 53.8461538462%, 33.15%) !important;
}

.complementary-3-border-color-b4 {
  border-color: hsl(159, 53.8461538462%, 33.15%) !important;
}
.complementary-3-border-color-b4.border {
  border-color: hsl(159, 53.8461538462%, 33.15%) !important;
}

.complementary-3-bg-b5 {
  background-color: hsl(159, 42.8571428571%, 28.7%) !important;
}

.complementary-3-color-b5 {
  color: hsl(159, 42.8571428571%, 28.7%) !important;
}

.complementary-3-border-color-b5 {
  border-color: hsl(159, 42.8571428571%, 28.7%) !important;
}
.complementary-3-border-color-b5.border {
  border-color: hsl(159, 42.8571428571%, 28.7%) !important;
}

.complementary-3-bg-b6 {
  background-color: hsl(159, 33.3333333333%, 23.25%) !important;
}

.complementary-3-color-b6 {
  color: hsl(159, 33.3333333333%, 23.25%) !important;
}

.complementary-3-border-color-b6 {
  border-color: hsl(159, 33.3333333333%, 23.25%) !important;
}
.complementary-3-border-color-b6.border {
  border-color: hsl(159, 33.3333333333%, 23.25%) !important;
}

.complementary-3-bg-b7 {
  background-color: hsl(159, 25%, 16.8%) !important;
}

.complementary-3-color-b7 {
  color: hsl(159, 25%, 16.8%) !important;
}

.complementary-3-border-color-b7 {
  border-color: hsl(159, 25%, 16.8%) !important;
}
.complementary-3-border-color-b7.border {
  border-color: hsl(159, 25%, 16.8%) !important;
}

.complementary-3-bg-b8 {
  background-color: hsl(159, 17.6470588235%, 9.35%) !important;
}

.complementary-3-color-b8 {
  color: hsl(159, 17.6470588235%, 9.35%) !important;
}

.complementary-3-border-color-b8 {
  border-color: hsl(159, 17.6470588235%, 9.35%) !important;
}
.complementary-3-border-color-b8.border {
  border-color: hsl(159, 17.6470588235%, 9.35%) !important;
}

.neutral-1-bg {
  background-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-color {
  color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-border-color- {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}
.neutral-1-border-color-.border {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-bg-a1 {
  background-color: hsl(210, 6.2290689886%, 92.535%) !important;
}

.neutral-1-color-a1 {
  color: hsl(210, 6.2290689886%, 92.535%) !important;
}

.neutral-1-border-color-a1 {
  border-color: hsl(210, 6.2290689886%, 92.535%) !important;
}
.neutral-1-border-color-a1.border {
  border-color: hsl(210, 6.2290689886%, 92.535%) !important;
}

.neutral-1-bg-a2 {
  background-color: hsl(210, 2.9799029799%, 85.57%) !important;
}

.neutral-1-color-a2 {
  color: hsl(210, 2.9799029799%, 85.57%) !important;
}

.neutral-1-border-color-a2 {
  border-color: hsl(210, 2.9799029799%, 85.57%) !important;
}
.neutral-1-border-color-a2.border {
  border-color: hsl(210, 2.9799029799%, 85.57%) !important;
}

.neutral-1-bg-a3 {
  background-color: hsl(210, 3.6255162919%, 78.21%) !important;
}

.neutral-1-color-a3 {
  color: hsl(210, 3.6255162919%, 78.21%) !important;
}

.neutral-1-border-color-a3 {
  border-color: hsl(210, 3.6255162919%, 78.21%) !important;
}
.neutral-1-border-color-a3.border {
  border-color: hsl(210, 3.6255162919%, 78.21%) !important;
}

.neutral-1-bg-a4 {
  background-color: hsl(210, 7.1618037135%, 69.84%) !important;
}

.neutral-1-color-a4 {
  color: hsl(210, 7.1618037135%, 69.84%) !important;
}

.neutral-1-border-color-a4 {
  border-color: hsl(210, 7.1618037135%, 69.84%) !important;
}
.neutral-1-border-color-a4.border {
  border-color: hsl(210, 7.1618037135%, 69.84%) !important;
}

.neutral-1-bg-a5 {
  background-color: hsl(210, 8.4967320261%, 61.75%) !important;
}

.neutral-1-color-a5 {
  color: hsl(210, 8.4967320261%, 61.75%) !important;
}

.neutral-1-border-color-a5 {
  border-color: hsl(210, 8.4967320261%, 61.75%) !important;
}
.neutral-1-border-color-a5.border {
  border-color: hsl(210, 8.4967320261%, 61.75%) !important;
}

.neutral-1-bg-a6 {
  background-color: hsl(210, 12.1338912134%, 52.2%) !important;
}

.neutral-1-color-a6 {
  color: hsl(210, 12.1338912134%, 52.2%) !important;
}

.neutral-1-border-color-a6 {
  border-color: hsl(210, 12.1338912134%, 52.2%) !important;
}
.neutral-1-border-color-a6.border {
  border-color: hsl(210, 12.1338912134%, 52.2%) !important;
}

.neutral-1-bg-a7 {
  background-color: hsl(210, 17.6470588235%, 43.35%) !important;
}

.neutral-1-color-a7 {
  color: hsl(210, 17.6470588235%, 43.35%) !important;
}

.neutral-1-border-color-a7 {
  border-color: hsl(210, 17.6470588235%, 43.35%) !important;
}
.neutral-1-border-color-a7.border {
  border-color: hsl(210, 17.6470588235%, 43.35%) !important;
}

.neutral-1-bg-a8 {
  background-color: hsl(210, 25%, 35.2%) !important;
}

.neutral-1-color-a8 {
  color: hsl(210, 25%, 35.2%) !important;
}

.neutral-1-border-color-a8 {
  border-color: hsl(210, 25%, 35.2%) !important;
}
.neutral-1-border-color-a8.border {
  border-color: hsl(210, 25%, 35.2%) !important;
}

.neutral-1-bg-a9 {
  background-color: hsl(210, 33.3333333333%, 27.75%) !important;
}

.neutral-1-color-a9 {
  color: hsl(210, 33.3333333333%, 27.75%) !important;
}

.neutral-1-border-color-a9 {
  border-color: hsl(210, 33.3333333333%, 27.75%) !important;
}
.neutral-1-border-color-a9.border {
  border-color: hsl(210, 33.3333333333%, 27.75%) !important;
}

.neutral-1-bg-a10 {
  background-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-color-a10 {
  color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-border-color-a10 {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}
.neutral-1-border-color-a10.border {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-2-bg {
  background-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-color {
  color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-border-color- {
  border-color: hsl(210, 32.2033898305%, 92.625%);
}

.neutral-2-bg-b1 {
  background-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-color-b1 {
  color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-border-color-b1 {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}
.neutral-2-border-color-b1.border {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-bg-b2 {
  background-color: hsl(210, 9.0909090909%, 78%) !important;
}

.neutral-2-color-b2 {
  color: hsl(210, 9.0909090909%, 78%) !important;
}

.neutral-2-border-color-b2 {
  border-color: hsl(210, 9.0909090909%, 78%) !important;
}
.neutral-2-border-color-b2.border {
  border-color: hsl(210, 9.0909090909%, 78%) !important;
}

.neutral-2-bg-b3 {
  background-color: hsl(210, 4.4368600683%, 63.375%) !important;
}

.neutral-2-color-b3 {
  color: hsl(210, 4.4368600683%, 63.375%) !important;
}

.neutral-2-border-color-b3 {
  border-color: hsl(210, 4.4368600683%, 63.375%) !important;
}
.neutral-2-border-color-b3.border {
  border-color: hsl(210, 4.4368600683%, 63.375%) !important;
}

.neutral-2-bg-b4 {
  background-color: hsl(210, 2.5641025641%, 48.75%) !important;
}

.neutral-2-color-b4 {
  color: hsl(210, 2.5641025641%, 48.75%) !important;
}

.neutral-2-border-color-b4 {
  border-color: hsl(210, 2.5641025641%, 48.75%) !important;
}
.neutral-2-border-color-b4.border {
  border-color: hsl(210, 2.5641025641%, 48.75%) !important;
}

.neutral-2-bg-b5 {
  background-color: hsl(210, 2.0408163265%, 34.3%) !important;
}

.neutral-2-color-b5 {
  color: hsl(210, 2.0408163265%, 34.3%) !important;
}

.neutral-2-border-color-b5 {
  border-color: hsl(210, 2.0408163265%, 34.3%) !important;
}
.neutral-2-border-color-b5.border {
  border-color: hsl(210, 2.0408163265%, 34.3%) !important;
}

.neutral-2-bg-b6 {
  background-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-color-b6 {
  color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-border-color-b6 {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}
.neutral-2-border-color-b6.border {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-bg-b7 {
  background-color: hsl(210, 4.7120418848%, 4.775%) !important;
}

.neutral-2-color-b7 {
  color: hsl(210, 4.7120418848%, 4.775%) !important;
}

.neutral-2-border-color-b7 {
  border-color: hsl(210, 4.7120418848%, 4.775%) !important;
}
.neutral-2-border-color-b7.border {
  border-color: hsl(210, 4.7120418848%, 4.775%) !important;
}

.neutral-2-bg-a1 {
  background-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-color-a1 {
  color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-border-color-a1 {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}
.neutral-2-border-color-a1.border {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-bg-a2 {
  background-color: hsl(210, 13.7931034483%, 76.8%) !important;
}

.neutral-2-color-a2 {
  color: hsl(210, 13.7931034483%, 76.8%) !important;
}

.neutral-2-border-color-a2 {
  border-color: hsl(210, 13.7931034483%, 76.8%) !important;
}
.neutral-2-border-color-a2.border {
  border-color: hsl(210, 13.7931034483%, 76.8%) !important;
}

.neutral-2-bg-a3 {
  background-color: hsl(210, 6.103286385%, 62.725%) !important;
}

.neutral-2-color-a3 {
  color: hsl(210, 6.103286385%, 62.725%) !important;
}

.neutral-2-border-color-a3 {
  border-color: hsl(210, 6.103286385%, 62.725%) !important;
}
.neutral-2-border-color-a3.border {
  border-color: hsl(210, 6.103286385%, 62.725%) !important;
}

.neutral-2-bg-a4 {
  background-color: hsl(210, 3.6269430052%, 48.25%) !important;
}

.neutral-2-color-a4 {
  color: hsl(210, 3.6269430052%, 48.25%) !important;
}

.neutral-2-border-color-a4 {
  border-color: hsl(210, 3.6269430052%, 48.25%) !important;
}
.neutral-2-border-color-a4.border {
  border-color: hsl(210, 3.6269430052%, 48.25%) !important;
}

.neutral-2-bg-a5 {
  background-color: hsl(210, 3.6269430052%, 33.775%) !important;
}

.neutral-2-color-a5 {
  color: hsl(210, 3.6269430052%, 33.775%) !important;
}

.neutral-2-border-color-a5 {
  border-color: hsl(210, 3.6269430052%, 33.775%) !important;
}
.neutral-2-border-color-a5.border {
  border-color: hsl(210, 3.6269430052%, 33.775%) !important;
}

.neutral-2-bg-a6 {
  background-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-color-a6 {
  color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-border-color-a6 {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}
.neutral-2-border-color-a6.border {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-bg-a7 {
  background-color: hsl(210, 4.7120418848%, 9.55%) !important;
}

.neutral-2-color-a7 {
  color: hsl(210, 4.7120418848%, 9.55%) !important;
}

.neutral-2-border-color-a7 {
  border-color: hsl(210, 4.7120418848%, 9.55%) !important;
}
.neutral-2-border-color-a7.border {
  border-color: hsl(210, 4.7120418848%, 9.55%) !important;
}

.lightgrey-bg-a1 {
  background-color: hsl(210, 3%, 85%) !important;
}

.lightgrey-color-a1 {
  color: hsl(210, 3%, 85%) !important;
}

.lightgrey-border-color-a1 {
  border-color: hsl(210, 3%, 85%) !important;
}
.lightgrey-border-color-a1.border {
  border-color: hsl(210, 3%, 85%) !important;
}

.lightgrey-bg-a2 {
  background-color: #edf5fc !important;
}

.lightgrey-color-a2 {
  color: #edf5fc !important;
}

.lightgrey-border-color-a2 {
  border-color: #edf5fc !important;
}
.lightgrey-border-color-a2.border {
  border-color: #edf5fc !important;
}

.lightgrey-bg-a3 {
  background-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-color-a3 {
  color: hsl(210, 62%, 97%) !important;
}

.lightgrey-border-color-a3 {
  border-color: hsl(210, 62%, 97%) !important;
}
.lightgrey-border-color-a3.border {
  border-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-bg-a4 {
  background-color: #f5f9fc !important;
}

.lightgrey-color-a4 {
  color: #f5f9fc !important;
}

.lightgrey-border-color-a4 {
  border-color: #f5f9fc !important;
}
.lightgrey-border-color-a4.border {
  border-color: #f5f9fc !important;
}

.lightgrey-bg-b1 {
  background-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-color-b1 {
  color: hsl(210, 62%, 97%) !important;
}

.lightgrey-border-color-b1 {
  border-color: hsl(210, 62%, 97%) !important;
}
.lightgrey-border-color-b1.border {
  border-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-bg-b2 {
  background-color: #ebf2fa !important;
}

.lightgrey-color-b2 {
  color: #ebf2fa !important;
}

.lightgrey-border-color-b2 {
  border-color: #ebf2fa !important;
}
.lightgrey-border-color-b2.border {
  border-color: #ebf2fa !important;
}

.lightgrey-bg-b3 {
  background-color: #edf4fa !important;
}

.lightgrey-color-b3 {
  color: #edf4fa !important;
}

.lightgrey-border-color-b3 {
  border-color: #edf4fa !important;
}
.lightgrey-border-color-b3.border {
  border-color: #edf4fa !important;
}

.lightgrey-bg-b4 {
  background-color: #f2f6fa !important;
}

.lightgrey-color-b4 {
  color: #f2f6fa !important;
}

.lightgrey-border-color-b4 {
  border-color: #f2f6fa !important;
}
.lightgrey-border-color-b4.border {
  border-color: #f2f6fa !important;
}

.lightgrey-bg-c1 {
  background-color: #f7f9fa !important;
}

.lightgrey-color-c1 {
  color: #f7f9fa !important;
}

.lightgrey-border-color-c1 {
  border-color: #f7f9fa !important;
}
.lightgrey-border-color-c1.border {
  border-color: #f7f9fa !important;
}

.lightgrey-bg-c2 {
  background-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-color-c2 {
  color: hsl(210, 62%, 97%) !important;
}

.lightgrey-border-color-c2 {
  border-color: hsl(210, 62%, 97%) !important;
}
.lightgrey-border-color-c2.border {
  border-color: hsl(210, 62%, 97%) !important;
}

:focus:not(.focus--mouse),
.form-check [type=checkbox]:focus + label,
.form-check [type=radio]:focus + label {
  border-color: #fd7e14 !important;
  box-shadow: 0 0 0 2px #fd7e14 !important;
  outline: none !important;
}

[tabindex="-1"]:focus:not(:focus-visible) {
  box-shadow: none;
}

.focus--mouse:not(.btn),
.form-check [type=checkbox]:focus.focus--mouse + label,
.form-check [type=radio]:focus.focus--mouse + label {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

.form-label {
  margin-bottom: 0.5rem;
}

.col-form-label {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1.25rem;
}

.col-form-label-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-secondary-color);
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  background-color: var(--bs-form-control-bg);
  background-clip: padding-box;
  border: 0 solid var(--bs-border-color);
  appearance: none;
  border-radius: 0;
  box-shadow: inset 0 1px 2px rgba(var(--bs-body-color-rgb), 0.075);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: var(--bs-body-color);
  background-color: var(--bs-form-control-bg);
  border-color: rgb(134, 182.5, 254);
  outline: 0;
  box-shadow: inset 0 1px 2px rgba(var(--bs-body-color-rgb), 0.075), 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-control::-webkit-date-and-time-value {
  height: 1.5em;
}
.form-control::-webkit-datetime-edit {
  display: block;
  padding: 0;
}
.form-control::placeholder {
  color: var(--bs-secondary-color);
  opacity: 1;
}
.form-control:disabled {
  background-color: var(--bs-form-control-disabled-bg);
  opacity: 1;
}
.form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  margin-inline-end: 0.75rem;
  color: var(--bs-body-color);
  background-color: var(--bs-tertiary-bg);
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 0;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: var(--bs-secondary-bg);
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: var(--bs-body-color);
  background-color: transparent;
  border: solid transparent;
  border-width: 0 0;
}
.form-control-plaintext:focus {
  outline: 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg {
  min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: 2.5rem;
}
textarea.form-control-sm {
  min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
}
textarea.form-control-lg {
  min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
}

.form-control-color {
  width: 3rem;
  height: 2.5rem;
  padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  border: 0 !important;
  border-radius: 0;
}
.form-control-color::-webkit-color-swatch {
  border-radius: 0;
}
.form-control-color.form-control-sm {
  height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
}
.form-control-color.form-control-lg {
  height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
}

.form-select {
  --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  background-color: var(--bs-form-control-bg);
  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: 0.375rem;
  box-shadow: inset 0 1px 2px rgba(var(--bs-body-color-rgb), 0.075);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-select {
    transition: none;
  }
}
.form-select:focus {
  border-color: rgb(134, 182.5, 254);
  outline: 0;
  box-shadow: inset 0 1px 2px rgba(var(--bs-body-color-rgb), 0.075), 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
.form-select:disabled {
  background-color: var(--bs-form-control-disabled-bg);
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 var(--bs-body-color);
}

.form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
}

.form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}

[data-bs-theme=dark] .form-select {
  --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23adb5bd' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

.form-check-reverse {
  padding-right: 1.5em;
  padding-left: 0;
  text-align: right;
}
.form-check-reverse .form-check-input {
  float: right;
  margin-right: -1.5em;
  margin-left: 0;
}

.form-check-input {
  --bs-form-check-bg: var(--bs-form-control-bg);
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: var(--bs-form-check-bg);
  background-image: var(--bs-form-check-bg-image);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: var(--bs-border-width) solid var(--bs-border-color);
  appearance: none;
  print-color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: rgb(134, 182.5, 254);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.form-check-input:checked[type=checkbox] {
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: #0d6efd;
  border-color: #0d6efd;
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  cursor: default;
  opacity: 0.5;
}

.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  width: 2em;
  margin-left: -2.5em;
  background-image: var(--bs-form-switch-bg);
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgb%28134, 182.5, 254%29'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.form-switch.form-check-reverse {
  padding-right: 2.5em;
  padding-left: 0;
}
.form-switch.form-check-reverse .form-check-input {
  margin-right: -2.5em;
  margin-left: 0;
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus) {
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e");
}

.form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  appearance: none;
}
.form-range:focus {
  outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: rgb(182.4, 211.5, 254.4);
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: var(--bs-tertiary-bg);
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: inset 0 1px 2px rgba(var(--bs-body-color-rgb), 0.075);
}
.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: rgb(182.4, 211.5, 254.4);
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: var(--bs-tertiary-bg);
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: inset 0 1px 2px rgba(var(--bs-body-color-rgb), 0.075);
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: var(--bs-secondary-color);
}
.form-range:disabled::-moz-range-thumb {
  background-color: var(--bs-secondary-color);
}

.form-floating {
  position: relative;
}
.form-floating::before:not(.form-control:disabled) {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - (calc(calc(0.375em + 0.1875rem) + calc(0.75em + 0.375rem))));
  height: 1.875em;
  content: "";
  background-color: var(--bs-form-control-bg);
  border-radius: 0;
}
.form-floating > .form-control,
.form-floating > .form-control-plaintext,
.form-floating > .form-select {
  height: calc(3.5rem + calc(var(--bs-border-width) * 2));
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem 0.75rem;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  border: 0 solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control,
.form-floating > .form-control-plaintext {
  padding: 1rem 0.75rem;
}
.form-floating > .form-control::placeholder,
.form-floating > .form-control-plaintext::placeholder {
  color: transparent;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown),
.form-floating > .form-control-plaintext:focus,
.form-floating > .form-control-plaintext:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill,
.form-floating > .form-control-plaintext:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-control-plaintext ~ label,
.form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control-plaintext ~ label {
  border-width: 0 0;
}
.form-floating > .form-control:disabled ~ label {
  color: #6c757d;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select,
.input-group > .form-floating {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus,
.input-group > .form-floating:focus-within {
  z-index: 5;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 5;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-tertiary-bg);
  border: 0 solid var(--bs-border-color);
  border-radius: 0;
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 3rem;
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3),
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control,
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4),
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control,
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .form-floating:not(:first-child) > .form-control,
.input-group > .form-floating:not(:first-child) > .form-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-success-text);
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: var(--bs-success);
  border-radius: var(--bs-border-radius);
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: var(--bs-success);
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: var(--bs-success);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:valid, .form-select.is-valid {
  border-color: var(--bs-success);
}
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
  --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  padding-right: 4.125rem;
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: var(--bs-success);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
}

.was-validated .form-control-color:valid, .form-control-color.is-valid {
  width: calc(3rem + calc(1.5em + 0.75rem));
}

.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: var(--bs-success);
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: var(--bs-success-text);
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: var(--bs-success-text);
}

.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group > .form-control:not(:focus):valid, .input-group > .form-control:not(:focus).is-valid,
.was-validated .input-group > .form-select:not(:focus):valid,
.input-group > .form-select:not(:focus).is-valid,
.was-validated .input-group > .form-floating:not(:focus-within):valid,
.input-group > .form-floating:not(:focus-within).is-valid {
  z-index: 3;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-danger-text);
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: var(--bs-danger);
  border-radius: var(--bs-border-radius);
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: var(--bs-danger);
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: var(--bs-danger);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: var(--bs-danger);
}
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
  --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  padding-right: 4.125rem;
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: var(--bs-danger);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
}

.was-validated .form-control-color:invalid, .form-control-color.is-invalid {
  width: calc(3rem + calc(1.5em + 0.75rem));
}

.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: var(--bs-danger);
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: var(--bs-danger-text);
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: var(--bs-danger-text);
}

.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group > .form-control:not(:focus):invalid, .input-group > .form-control:not(:focus).is-invalid,
.was-validated .input-group > .form-select:not(:focus):invalid,
.input-group > .form-select:not(:focus).is-invalid,
.was-validated .input-group > .form-floating:not(:focus-within):invalid,
.input-group > .form-floating:not(:focus-within).is-invalid {
  z-index: 4;
}

label {
  color: #212529;
}

fieldset legend {
  background-color: transparent;
  font-weight: 700;
  line-height: calc(2.5rem - 1px);
  transition: 0.2s ease-out;
  cursor: text;
  display: block;
  max-width: 100%;
  width: auto;
  padding: 0 0.5rem;
  z-index: 1;
  font-size: 0.875em;
  color: #212529;
  margin-bottom: 0;
  float: none;
}

.form-text {
  color: hsl(210, 33%, 28%);
}

.form-group {
  position: relative;
  margin-bottom: 3rem;
  margin-top: 0;
}
.form-group input,
.form-group optgroup,
.form-group textarea {
  color: hsl(210, 17%, 44%);
}
.form-group label {
  background-color: transparent;
  position: absolute;
  line-height: calc(2.5rem - 1px);
  transition: 0.2s ease-out;
  top: 0;
  font-size: 1rem;
  cursor: text;
  color: hsl(210, 17%, 44%);
  display: block;
  max-width: 100%;
  width: auto;
  padding: 0 0.5rem;
  z-index: 1;
}
.form-group label.active {
  transform: translateY(-75%);
  font-weight: 600;
  font-size: 0.875em;
  color: #212529;
}
.form-group label:not(.active) + .input-number-currency .input-group-text {
  display: none;
}
.form-group label:not(.active) + .input-number-percentage .input-group-text {
  display: none;
}
.form-group input:is([type=radio]) + label.active,
.form-group input:is([type=checkbox]) + label.active {
  transform: translateY(0%);
}
.form-group small.form-text {
  margin: 0;
  padding: 0.25rem 0.5rem;
  font-size: 0.875em;
}
.form-group input[type=time] ~ label {
  transform: translateY(-75%);
  font-size: 0.875em;
}

::placeholder {
  color: hsl(210, 17%, 44%);
}

input[type=date],
input[type=datetime-local],
input[type=email],
input[type=number],
input[type=password],
input[type=search],
input[type=tel],
input[type=text],
input[type=time],
input[type=url],
textarea {
  border: none;
  border-bottom: 1px solid hsl(210, 17%, 44%);
  padding: 0.375rem 0.5rem;
  outline: 0;
  box-shadow: none;
  transition: none;
  -webkit-appearance: none;
}
input[type=date]::placeholder,
input[type=datetime-local]::placeholder,
input[type=email]::placeholder,
input[type=number]::placeholder,
input[type=password]::placeholder,
input[type=search]::placeholder,
input[type=tel]::placeholder,
input[type=text]::placeholder,
input[type=time]::placeholder,
input[type=url]::placeholder,
textarea::placeholder {
  color: hsl(210, 17%, 44%);
}

input[type=date],
input[type=datetime-local],
input[type=time] {
  display: flex;
}

textarea {
  border: 1px solid hsl(210, 17%, 44%);
  height: auto;
  font-size: 1rem;
}

.form-control {
  background-position: center right !important;
  background-repeat: no-repeat !important;
  background-size: 45px 45% !important;
  min-height: 2.5rem;
}
.form-control:disabled, .form-control[readonly] {
  cursor: not-allowed;
}
.form-control:disabled + label, .form-control[readonly] + label {
  background-color: transparent;
  cursor: not-allowed;
}
.form-control:focus, .form-control:active {
  box-shadow: none !important;
}
.was-validated .form-control:valid, .form-control.is-valid {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2300cc85' viewBox='0 0 192 512'%3E%3Cpath d='M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z'/%3E%3C/svg%3E");
}
.was-validated .form-control:invalid, .form-control.is-invalid {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f73e5a' viewBox='0 0 384 512'%3E%3Cpath d='M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z'/%3E%3C/svg%3E");
}
.form-control.warning {
  background-size: 25px 45% !important;
  border-color: #ffc107;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff9900' viewBox='0 0 192 512'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'/%3E%3C/svg%3E");
}
.form-control.is-valid ~ .warning-feedback {
  display: block;
}

.form-group.active .form-file-name {
  padding-bottom: 1.95rem;
}

.form-control-plaintext {
  padding: 0.375rem 0.5rem;
  background-color: #fff !important;
  cursor: not-allowed;
}
.form-control-plaintext + label {
  cursor: not-allowed;
}

.warning-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #ffc107;
}

.valid-feedback,
.invalid-feedback,
.warning-feedback {
  margin-left: 0.5rem;
}

.input-group .input-group-text {
  padding: 0.375rem 0.5rem;
  border-bottom: 1px solid hsl(210, 17%, 44%);
  border-radius: 0;
  min-height: 2.5rem;
  margin-right: 0;
}
.input-group .input-group-text .icon {
  fill: #6c757d;
}
.input-group .input-group-text ~ label {
  left: 2.25rem;
  max-width: calc(100% - 2.25rem);
}
.input-group .input-group-text .btn {
  border-radius: 4px 0 0 4px;
}
.input-group .input-group-append {
  margin-left: 0;
}
.input-group .input-group-append .btn {
  padding-top: 0;
  padding-bottom: 0;
  border-bottom: 1px solid hsl(210, 17%, 44%);
  border-radius: 0 4px 4px 0;
  box-shadow: none;
  height: 100%;
}
.input-group .input-group-append .btn:focus:not(.focus--mouse) {
  box-shadow: inset 0 0 0 2px #fd7e14;
}

.input-group-lg > .form-control, .input-group-lg > .input-group-append > .input-group-text, .input-group-lg > .input-group-append > .btn {
  padding: 0 1rem;
  border-radius: 0;
}

.form-check {
  padding-left: 0;
  position: relative;
  margin-bottom: 0.5rem;
}
.form-check + .form-check {
  margin-top: 0.5rem;
}
.form-check [type=checkbox],
.form-check [type=radio] {
  position: absolute;
  opacity: 0;
  left: 9px;
  top: 9px;
  margin-left: 0;
  margin-top: 0;
}
.form-check [type=checkbox] + label,
.form-check [type=radio] + label {
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  user-select: none;
}
@media (min-width: 576px) {
  .form-check [type=checkbox] + label,
  .form-check [type=radio] + label {
    font-size: 1.125rem;
  }
}
.form-check [type=checkbox] + label::after,
.form-check [type=checkbox] + label::before {
  content: "";
  left: 0;
  position: absolute;
  transition: 0.2s ease-out;
  z-index: 1;
  border-style: solid;
  border-width: 2px;
}
.form-check [type=checkbox] + label::before {
  top: 0;
  width: 17px;
  height: 17px;
  border: 1px solid #e6e9f2;
  border-radius: 1px;
  margin: 2px 4px;
  transform: rotateZ(37deg);
  transform-origin: 100% 100%;
}
.form-check [type=checkbox] + label::after {
  border-radius: 4px;
  height: 20px;
  width: 20px;
  margin: 4px;
  top: 0;
}
.form-check [type=checkbox]:checked + label::before {
  top: 4px;
  left: 1px;
  width: 8px;
  height: 13px;
  border-style: solid;
  border-width: 2px;
  border-color: transparent #fff #fff transparent;
  transform: rotate(40deg);
  backface-visibility: hidden;
  transform-origin: 100% 100%;
  opacity: 0.8;
}
.form-check [type=checkbox]:checked + label::after {
  border-color: #0d6efd;
  background-color: #0d6efd;
  z-index: 0;
}
.form-check [type=checkbox]:not(:checked) + label::after {
  background-color: transparent;
  border-color: hsl(210, 17.6470588235%, 43.35%);
  z-index: 0;
}
.form-check [type=checkbox]:not(:checked) + label::before {
  width: 0;
  height: 0;
  border-color: transparent;
  left: 6px;
  top: 10px;
}
.form-check [type=checkbox]:disabled + label {
  cursor: not-allowed;
  opacity: 1;
}
.form-check [type=checkbox]:disabled:not(:checked) + label::after {
  border-color: #e6e9f2;
  background-color: #fff;
}
.form-check [type=checkbox]:disabled:checked + label::after {
  background-color: #e6e9f2;
  border-color: #e6e9f2;
}
.form-check [type=radio] + label {
  transition: 0.2s ease-out;
}
.form-check [type=radio] + label::after, .form-check [type=radio] + label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  margin: 5px;
  width: 20px;
  height: 20px;
  z-index: 0;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  transition: 0.2s ease-out;
}
.form-check [type=radio]:not(:checked) + label::after, .form-check [type=radio]:not(:checked) + label::before {
  border-color: hsl(210, 17%, 44%);
}
.form-check [type=radio]:not(:checked) + label:after {
  z-index: -1;
  transform: scale(0);
}
.form-check [type=radio]:checked + label::after {
  border-color: #0d6efd;
  background-color: #0d6efd;
  z-index: 0;
  transform: scale(0.64);
}
.form-check [type=radio]:checked + label::before {
  border-color: #0d6efd;
}
.form-check [type=radio]:disabled + label {
  cursor: not-allowed;
}
.form-check [type=radio]:disabled:not(:checked) + label::after, .form-check [type=radio]:disabled:not(:checked) + label::before {
  border-color: hsl(210, 3%, 85%);
}
.form-check [type=radio]:disabled:checked + label::after {
  border-color: hsl(210, 3%, 85%);
  background-color: hsl(210, 3%, 85%);
}
.form-check [type=radio]:disabled:checked + label::before {
  border-color: hsl(210, 3%, 85%);
}
.form-check.form-check-group {
  padding: 0 0 1rem 0;
  margin-bottom: 1rem;
  box-shadow: inset 0 -1px 0 0 rgba(1, 1, 1, 0.1);
}
.form-check.form-check-group [type=checkbox] + label,
.form-check.form-check-group [type=radio] + label {
  position: static;
  padding-left: 0;
  padding-right: 3.25rem;
}
.form-check.form-check-group [type=checkbox] + label::after, .form-check.form-check-group [type=checkbox] + label::before,
.form-check.form-check-group [type=radio] + label::after,
.form-check.form-check-group [type=radio] + label::before {
  right: 15px;
  left: auto;
}
.form-check.form-check-group [type=checkbox]:checked + label::before {
  right: 26px;
}
.form-check.form-check-group [type=radio]:checked + label::before {
  right: 15px;
}
.form-check.form-check-group .form-text {
  display: block;
  padding-right: 3.25rem;
  margin-bottom: 0.5rem;
}
.form-check.form-check-group input.semi-checked:not(:checked) + label::before {
  right: 19px;
  left: auto;
}
.form-check input.semi-checked:not(:checked) + label::before {
  top: 11px;
  left: 4px;
  width: 12px;
  height: 2px;
  border-style: none;
  border-width: 0;
  border-color: transparent;
  transform: none;
  backface-visibility: hidden;
  opacity: 1;
  background: #fff;
}
.form-check input.semi-checked:not(:checked) + label::after {
  border-color: hsl(210, 73.9130434783%, 48.3%);
  background-color: hsl(210, 73.9130434783%, 48.3%);
  z-index: 0;
}`;class Co extends no{static styles=Ao;static get formAssociated(){return!0}static properties={id:"",label:"",type:{type:String},value:{type:String},name:{type:String}};constructor(){super(),this.type="text",this.internals=this.attachInternals(),this.value=""}updated(o){o.has("value")&&(this.internals.setFormValue(this._inputElement.value),this.value!==this._inputElement.value&&(this.value?this._inputElement.value=this.value:this._inputElement.value="",this.notifyValueChanged()))}notifyValueChanged(){let o=null;o=new Event("input",{bubbles:!0,composed:!0}),this.dispatchEvent(o)}firstUpdated(){this._label=new Eo(this.renderRoot.querySelector("input"),this.renderRoot),this._inputElement=this.renderRoot.querySelector("input")}handleInput(){this.value=this._inputElement.value}render(){return D`
      <div class="form-group">
        <label for="${this.id}">${this.label}</label>
        <input
          @input="${this.handleInput}"
          type="${this.type}"
          class="form-control"
          id="${this.id}"
          name="${this.name}"
        />
      </div>
    `}}customElements.define("bsi-input",Co);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _o=o=>o??H;var Uo=e`/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** NEUTRAL 1 ****************************************/
/***************************** NEUTRAL 2 ****************************************/
/***************************** NEUTRAL 2 / 3 ****************************************/
.primary-bg {
  background-color: #0d6efd !important;
}

.primary-color {
  color: #0d6efd !important;
}

.primary-border-color {
  border-color: #0d6efd !important;
}
.primary-border-color.border {
  border-color: #0d6efd !important;
}

.white-bg {
  background-color: #fff !important;
}

.white-color {
  color: #fff !important;
}

.white-border-color- {
  border-color: #fff !important;
}
.white-border-color-.border {
  border-color: #fff !important;
}

.primary-bg-a1 {
  background-color: hsl(210, 92.523364486%, 86.625%) !important;
}

.primary-color-a1 {
  color: hsl(210, 92.523364486%, 86.625%) !important;
}

.primary-border-color-a1 {
  border-color: hsl(210, 92.523364486%, 86.625%) !important;
}
.primary-border-color-a1.border {
  border-color: hsl(210, 92.523364486%, 86.625%) !important;
}

.primary-bg-a2 {
  background-color: hsl(211, 82.7586206897%, 76.8%) !important;
}

.primary-color-a2 {
  color: hsl(211, 82.7586206897%, 76.8%) !important;
}

.primary-border-color-a2 {
  border-color: hsl(211, 82.7586206897%, 76.8%) !important;
}
.primary-border-color-a2.border {
  border-color: hsl(211, 82.7586206897%, 76.8%) !important;
}

.primary-bg-a3 {
  background-color: hsl(210, 75.975975976%, 66.7%) !important;
}

.primary-color-a3 {
  color: hsl(210, 75.975975976%, 66.7%) !important;
}

.primary-border-color-a3 {
  border-color: hsl(210, 75.975975976%, 66.7%) !important;
}
.primary-border-color-a3.border {
  border-color: hsl(210, 75.975975976%, 66.7%) !important;
}

.primary-bg-a4 {
  background-color: hsl(210, 71.9626168224%, 57.2%) !important;
}

.primary-color-a4 {
  color: hsl(210, 71.9626168224%, 57.2%) !important;
}

.primary-border-color-a4 {
  border-color: hsl(210, 71.9626168224%, 57.2%) !important;
}
.primary-border-color-a4.border {
  border-color: hsl(210, 71.9626168224%, 57.2%) !important;
}

.primary-bg-a5 {
  background-color: hsl(210, 73.9130434783%, 48.3%) !important;
}

.primary-color-a5 {
  color: hsl(210, 73.9130434783%, 48.3%) !important;
}

.primary-border-color-a5 {
  border-color: hsl(210, 73.9130434783%, 48.3%) !important;
}
.primary-border-color-a5.border {
  border-color: hsl(210, 73.9130434783%, 48.3%) !important;
}

.primary-bg-a6 {
  background-color: hsl(210, 100%, 40%) !important;
}

.primary-color-a6 {
  color: hsl(210, 100%, 40%) !important;
}

.primary-border-color-a6 {
  border-color: hsl(210, 100%, 40%) !important;
}
.primary-border-color-a6.border {
  border-color: hsl(210, 100%, 40%) !important;
}

.primary-bg-a7 {
  background-color: hsl(210, 100%, 35%) !important;
}

.primary-color-a7 {
  color: hsl(210, 100%, 35%) !important;
}

.primary-border-color-a7 {
  border-color: hsl(210, 100%, 35%) !important;
}
.primary-border-color-a7.border {
  border-color: hsl(210, 100%, 35%) !important;
}

.primary-bg-a8 {
  background-color: hsl(210, 100%, 30%) !important;
}

.primary-color-a8 {
  color: hsl(210, 100%, 30%) !important;
}

.primary-border-color-a8 {
  border-color: hsl(210, 100%, 30%) !important;
}
.primary-border-color-a8.border {
  border-color: hsl(210, 100%, 30%) !important;
}

.primary-bg-a9 {
  background-color: hsl(210, 100%, 25%) !important;
}

.primary-color-a9 {
  color: hsl(210, 100%, 25%) !important;
}

.primary-border-color-a9 {
  border-color: hsl(210, 100%, 25%) !important;
}
.primary-border-color-a9.border {
  border-color: hsl(210, 100%, 25%) !important;
}

.primary-bg-a10 {
  background-color: hsl(210, 100%, 20%) !important;
}

.primary-color-a10 {
  color: hsl(210, 100%, 20%) !important;
}

.primary-border-color-a10 {
  border-color: hsl(210, 100%, 20%) !important;
}
.primary-border-color-a10.border {
  border-color: hsl(210, 100%, 20%) !important;
}

.primary-bg-a11 {
  background-color: hsl(210, 100%, 15%) !important;
}

.primary-color-a11 {
  color: hsl(210, 100%, 15%) !important;
}

.primary-border-color-a11 {
  border-color: hsl(210, 100%, 15%) !important;
}
.primary-border-color-a11.border {
  border-color: hsl(210, 100%, 15%) !important;
}

.primary-bg-a12 {
  background-color: hsl(210, 100%, 10%) !important;
}

.primary-color-a12 {
  color: hsl(210, 100%, 10%) !important;
}

.primary-border-color-a12 {
  border-color: hsl(210, 100%, 10%) !important;
}
.primary-border-color-a12.border {
  border-color: hsl(210, 100%, 10%) !important;
}

.primary-bg-b1 {
  background-color: hsl(210, 100%, 40%) !important;
}

.primary-color-b1 {
  color: hsl(210, 100%, 40%) !important;
}

.primary-border-color-b1 {
  border-color: hsl(210, 100%, 40%) !important;
}
.primary-border-color-b1.border {
  border-color: hsl(210, 100%, 40%) !important;
}

.primary-bg-b2 {
  background-color: hsl(210, 81.8181818182%, 38.5%) !important;
}

.primary-color-b2 {
  color: hsl(210, 81.8181818182%, 38.5%) !important;
}

.primary-border-color-b2 {
  border-color: hsl(210, 81.8181818182%, 38.5%) !important;
}
.primary-border-color-b2.border {
  border-color: hsl(210, 81.8181818182%, 38.5%) !important;
}

.primary-bg-b3 {
  background-color: hsl(210, 66.6666666667%, 36%) !important;
}

.primary-color-b3 {
  color: hsl(210, 66.6666666667%, 36%) !important;
}

.primary-border-color-b3 {
  border-color: hsl(210, 66.6666666667%, 36%) !important;
}
.primary-border-color-b3.border {
  border-color: hsl(210, 66.6666666667%, 36%) !important;
}

.primary-bg-b4 {
  background-color: hsl(210, 53.8461538462%, 32.5%) !important;
}

.primary-color-b4 {
  color: hsl(210, 53.8461538462%, 32.5%) !important;
}

.primary-border-color-b4 {
  border-color: hsl(210, 53.8461538462%, 32.5%) !important;
}
.primary-border-color-b4.border {
  border-color: hsl(210, 53.8461538462%, 32.5%) !important;
}

.primary-bg-b5 {
  background-color: hsl(210, 42.8571428571%, 28%) !important;
}

.primary-color-b5 {
  color: hsl(210, 42.8571428571%, 28%) !important;
}

.primary-border-color-b5 {
  border-color: hsl(210, 42.8571428571%, 28%) !important;
}
.primary-border-color-b5.border {
  border-color: hsl(210, 42.8571428571%, 28%) !important;
}

.primary-bg-b6 {
  background-color: hsl(210, 33.3333333333%, 22.5%) !important;
}

.primary-color-b6 {
  color: hsl(210, 33.3333333333%, 22.5%) !important;
}

.primary-border-color-b6 {
  border-color: hsl(210, 33.3333333333%, 22.5%) !important;
}
.primary-border-color-b6.border {
  border-color: hsl(210, 33.3333333333%, 22.5%) !important;
}

.primary-bg-b7 {
  background-color: hsl(210, 25%, 16%) !important;
}

.primary-color-b7 {
  color: hsl(210, 25%, 16%) !important;
}

.primary-border-color-b7 {
  border-color: hsl(210, 25%, 16%) !important;
}
.primary-border-color-b7.border {
  border-color: hsl(210, 25%, 16%) !important;
}

.primary-bg-b8 {
  background-color: hsl(210, 17.6470588235%, 8.5%) !important;
}

.primary-color-b8 {
  color: hsl(210, 17.6470588235%, 8.5%) !important;
}

.primary-border-color-b8 {
  border-color: hsl(210, 17.6470588235%, 8.5%) !important;
}
.primary-border-color-b8.border {
  border-color: hsl(210, 17.6470588235%, 8.5%) !important;
}

.primary-bg-c1 {
  background-color: hsl(210, 54.5454545455%, 91.2%) !important;
}

.primary-color-c1 {
  color: hsl(210, 54.5454545455%, 91.2%) !important;
}

.primary-border-color-c1 {
  border-color: hsl(210, 54.5454545455%, 91.2%) !important;
}
.primary-border-color-c1.border {
  border-color: hsl(210, 54.5454545455%, 91.2%) !important;
}

.primary-bg-c2 {
  background-color: hsl(210, 70.5882352941%, 86.4%) !important;
}

.primary-color-c2 {
  color: hsl(210, 70.5882352941%, 86.4%) !important;
}

.primary-border-color-c2 {
  border-color: hsl(210, 70.5882352941%, 86.4%) !important;
}
.primary-border-color-c2.border {
  border-color: hsl(210, 70.5882352941%, 86.4%) !important;
}

.primary-bg-c3 {
  background-color: hsl(210, 78.2608695652%, 81.6%) !important;
}

.primary-color-c3 {
  color: hsl(210, 78.2608695652%, 81.6%) !important;
}

.primary-border-color-c3 {
  border-color: hsl(210, 78.2608695652%, 81.6%) !important;
}
.primary-border-color-c3.border {
  border-color: hsl(210, 78.2608695652%, 81.6%) !important;
}

.primary-bg-c4 {
  background-color: hsl(210, 82.7586206897%, 76.8%) !important;
}

.primary-color-c4 {
  color: hsl(210, 82.7586206897%, 76.8%) !important;
}

.primary-border-color-c4 {
  border-color: hsl(210, 82.7586206897%, 76.8%) !important;
}
.primary-border-color-c4.border {
  border-color: hsl(210, 82.7586206897%, 76.8%) !important;
}

.primary-bg-c5 {
  background-color: hsl(210, 85.7142857143%, 72%) !important;
}

.primary-color-c5 {
  color: hsl(210, 85.7142857143%, 72%) !important;
}

.primary-border-color-c5 {
  border-color: hsl(210, 85.7142857143%, 72%) !important;
}
.primary-border-color-c5.border {
  border-color: hsl(210, 85.7142857143%, 72%) !important;
}

.primary-bg-c6 {
  background-color: hsl(210, 87.8048780488%, 67.2%) !important;
}

.primary-color-c6 {
  color: hsl(210, 87.8048780488%, 67.2%) !important;
}

.primary-border-color-c6 {
  border-color: hsl(210, 87.8048780488%, 67.2%) !important;
}
.primary-border-color-c6.border {
  border-color: hsl(210, 87.8048780488%, 67.2%) !important;
}

.primary-bg-c7 {
  background-color: hsl(210, 89.3617021277%, 62.4%) !important;
}

.primary-color-c7 {
  color: hsl(210, 89.3617021277%, 62.4%) !important;
}

.primary-border-color-c7 {
  border-color: hsl(210, 89.3617021277%, 62.4%) !important;
}
.primary-border-color-c7.border {
  border-color: hsl(210, 89.3617021277%, 62.4%) !important;
}

.primary-bg-c8 {
  background-color: hsl(210, 90.5660377358%, 57.6%) !important;
}

.primary-color-c8 {
  color: hsl(210, 90.5660377358%, 57.6%) !important;
}

.primary-border-color-c8 {
  border-color: hsl(210, 90.5660377358%, 57.6%) !important;
}
.primary-border-color-c8.border {
  border-color: hsl(210, 90.5660377358%, 57.6%) !important;
}

.primary-bg-c9 {
  background-color: hsl(210, 91.5254237288%, 52.8%) !important;
}

.primary-color-c9 {
  color: hsl(210, 91.5254237288%, 52.8%) !important;
}

.primary-border-color-c9 {
  border-color: hsl(210, 91.5254237288%, 52.8%) !important;
}
.primary-border-color-c9.border {
  border-color: hsl(210, 91.5254237288%, 52.8%) !important;
}

.primary-bg-c10 {
  background-color: hsl(210, 100%, 48%) !important;
}

.primary-color-c10 {
  color: hsl(210, 100%, 48%) !important;
}

.primary-border-color-c10 {
  border-color: hsl(210, 100%, 48%) !important;
}
.primary-border-color-c10.border {
  border-color: hsl(210, 100%, 48%) !important;
}

.primary-bg-c11 {
  background-color: hsl(210, 100%, 44%) !important;
}

.primary-color-c11 {
  color: hsl(210, 100%, 44%) !important;
}

.primary-border-color-c11 {
  border-color: hsl(210, 100%, 44%) !important;
}
.primary-border-color-c11.border {
  border-color: hsl(210, 100%, 44%) !important;
}

.primary-bg-c12 {
  background-color: hsl(210, 100%, 40%) !important;
}

.primary-color-c12 {
  color: hsl(210, 100%, 40%) !important;
}

.primary-border-color-c12 {
  border-color: hsl(210, 100%, 40%) !important;
}
.primary-border-color-c12.border {
  border-color: hsl(210, 100%, 40%) !important;
}

.analogue-1-bg {
  background-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-color {
  color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-border-color- {
  border-color: hsl(243, 100%, 57.5%) !important;
}
.analogue-1-border-color-.border {
  border-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-bg-a1 {
  background-color: hsl(243, 100%, 95%) !important;
}

.analogue-1-color-a1 {
  color: hsl(243, 100%, 95%) !important;
}

.analogue-1-border-color-a1 {
  border-color: hsl(243, 100%, 95%) !important;
}
.analogue-1-border-color-a1.border {
  border-color: hsl(243, 100%, 95%) !important;
}

.analogue-1-bg-a2 {
  background-color: hsl(243, 75%, 84%) !important;
}

.analogue-1-color-a2 {
  color: hsl(243, 75%, 84%) !important;
}

.analogue-1-border-color-a2 {
  border-color: hsl(243, 75%, 84%) !important;
}
.analogue-1-border-color-a2.border {
  border-color: hsl(243, 75%, 84%) !important;
}

.analogue-1-bg-a3 {
  background-color: hsl(243, 69.696969697%, 73.6%) !important;
}

.analogue-1-color-a3 {
  color: hsl(243, 69.696969697%, 73.6%) !important;
}

.analogue-1-border-color-a3 {
  border-color: hsl(243, 69.696969697%, 73.6%) !important;
}
.analogue-1-border-color-a3.border {
  border-color: hsl(243, 69.696969697%, 73.6%) !important;
}

.analogue-1-bg-a4 {
  background-color: hsl(243, 66.8508287293%, 63.8%) !important;
}

.analogue-1-color-a4 {
  color: hsl(243, 66.8508287293%, 63.8%) !important;
}

.analogue-1-border-color-a4 {
  border-color: hsl(243, 66.8508287293%, 63.8%) !important;
}
.analogue-1-border-color-a4.border {
  border-color: hsl(243, 66.8508287293%, 63.8%) !important;
}

.analogue-1-bg-a5 {
  background-color: hsl(243, 64.7577092511%, 54.6%) !important;
}

.analogue-1-color-a5 {
  color: hsl(243, 64.7577092511%, 54.6%) !important;
}

.analogue-1-border-color-a5 {
  border-color: hsl(243, 64.7577092511%, 54.6%) !important;
}
.analogue-1-border-color-a5.border {
  border-color: hsl(243, 64.7577092511%, 54.6%) !important;
}

.analogue-1-bg-a6 {
  background-color: hsl(243, 73.9130434783%, 46%) !important;
}

.analogue-1-color-a6 {
  color: hsl(243, 73.9130434783%, 46%) !important;
}

.analogue-1-border-color-a6 {
  border-color: hsl(243, 73.9130434783%, 46%) !important;
}
.analogue-1-border-color-a6.border {
  border-color: hsl(243, 73.9130434783%, 46%) !important;
}

.analogue-1-bg-a7 {
  background-color: hsl(243, 73.9130434783%, 40.25%) !important;
}

.analogue-1-color-a7 {
  color: hsl(243, 73.9130434783%, 40.25%) !important;
}

.analogue-1-border-color-a7 {
  border-color: hsl(243, 73.9130434783%, 40.25%) !important;
}
.analogue-1-border-color-a7.border {
  border-color: hsl(243, 73.9130434783%, 40.25%) !important;
}

.analogue-1-bg-a8 {
  background-color: hsl(243, 73.9130434783%, 34.5%) !important;
}

.analogue-1-color-a8 {
  color: hsl(243, 73.9130434783%, 34.5%) !important;
}

.analogue-1-border-color-a8 {
  border-color: hsl(243, 73.9130434783%, 34.5%) !important;
}
.analogue-1-border-color-a8.border {
  border-color: hsl(243, 73.9130434783%, 34.5%) !important;
}

.analogue-1-bg-a9 {
  background-color: hsl(243, 73.9130434783%, 28.75%) !important;
}

.analogue-1-color-a9 {
  color: hsl(243, 73.9130434783%, 28.75%) !important;
}

.analogue-1-border-color-a9 {
  border-color: hsl(243, 73.9130434783%, 28.75%) !important;
}
.analogue-1-border-color-a9.border {
  border-color: hsl(243, 73.9130434783%, 28.75%) !important;
}

.analogue-1-bg-a10 {
  background-color: hsl(243, 73.9130434783%, 23%) !important;
}

.analogue-1-color-a10 {
  color: hsl(243, 73.9130434783%, 23%) !important;
}

.analogue-1-border-color-a10 {
  border-color: hsl(243, 73.9130434783%, 23%) !important;
}
.analogue-1-border-color-a10.border {
  border-color: hsl(243, 73.9130434783%, 23%) !important;
}

.analogue-1-bg-a11 {
  background-color: hsl(243, 73.9130434783%, 17.25%) !important;
}

.analogue-1-color-a11 {
  color: hsl(243, 73.9130434783%, 17.25%) !important;
}

.analogue-1-border-color-a11 {
  border-color: hsl(243, 73.9130434783%, 17.25%) !important;
}
.analogue-1-border-color-a11.border {
  border-color: hsl(243, 73.9130434783%, 17.25%) !important;
}

.analogue-1-bg-a12 {
  background-color: hsl(243, 73.9130434783%, 11.5%) !important;
}

.analogue-1-color-a12 {
  color: hsl(243, 73.9130434783%, 11.5%) !important;
}

.analogue-1-border-color-a12 {
  border-color: hsl(243, 73.9130434783%, 11.5%) !important;
}
.analogue-1-border-color-a12.border {
  border-color: hsl(243, 73.9130434783%, 11.5%) !important;
}

.analogue-2-bg {
  background-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-color {
  color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-border-color- {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}
.analogue-2-border-color-.border {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-bg-a1 {
  background-color: hsl(178, 100%, 90%) !important;
}

.analogue-2-color-a1 {
  color: hsl(178, 100%, 90%) !important;
}

.analogue-2-border-color-a1 {
  border-color: hsl(178, 100%, 90%) !important;
}
.analogue-2-border-color-a1.border {
  border-color: hsl(178, 100%, 90%) !important;
}

.analogue-2-bg-a2 {
  background-color: hsl(178, 80.7692307692%, 79.2%) !important;
}

.analogue-2-color-a2 {
  color: hsl(178, 80.7692307692%, 79.2%) !important;
}

.analogue-2-border-color-a2 {
  border-color: hsl(178, 80.7692307692%, 79.2%) !important;
}
.analogue-2-border-color-a2.border {
  border-color: hsl(178, 80.7692307692%, 79.2%) !important;
}

.analogue-2-bg-a3 {
  background-color: hsl(178, 74.1935483871%, 69%) !important;
}

.analogue-2-color-a3 {
  color: hsl(178, 74.1935483871%, 69%) !important;
}

.analogue-2-border-color-a3 {
  border-color: hsl(178, 74.1935483871%, 69%) !important;
}
.analogue-2-border-color-a3.border {
  border-color: hsl(178, 74.1935483871%, 69%) !important;
}

.analogue-2-bg-a4 {
  background-color: hsl(178, 70.4433497537%, 59.4%) !important;
}

.analogue-2-color-a4 {
  color: hsl(178, 70.4433497537%, 59.4%) !important;
}

.analogue-2-border-color-a4 {
  border-color: hsl(178, 70.4433497537%, 59.4%) !important;
}
.analogue-2-border-color-a4.border {
  border-color: hsl(178, 70.4433497537%, 59.4%) !important;
}

.analogue-2-bg-a5 {
  background-color: hsl(178, 67.7419354839%, 50.4%) !important;
}

.analogue-2-color-a5 {
  color: hsl(178, 67.7419354839%, 50.4%) !important;
}

.analogue-2-border-color-a5 {
  border-color: hsl(178, 67.7419354839%, 50.4%) !important;
}
.analogue-2-border-color-a5.border {
  border-color: hsl(178, 67.7419354839%, 50.4%) !important;
}

.analogue-2-bg-a6 {
  background-color: hsl(178, 90.4761904762%, 42%) !important;
}

.analogue-2-color-a6 {
  color: hsl(178, 90.4761904762%, 42%) !important;
}

.analogue-2-border-color-a6 {
  border-color: hsl(178, 90.4761904762%, 42%) !important;
}
.analogue-2-border-color-a6.border {
  border-color: hsl(178, 90.4761904762%, 42%) !important;
}

.analogue-2-bg-a7 {
  background-color: hsl(178, 90.4761904762%, 36.75%) !important;
}

.analogue-2-color-a7 {
  color: hsl(178, 90.4761904762%, 36.75%) !important;
}

.analogue-2-border-color-a7 {
  border-color: hsl(178, 90.4761904762%, 36.75%) !important;
}
.analogue-2-border-color-a7.border {
  border-color: hsl(178, 90.4761904762%, 36.75%) !important;
}

.analogue-2-bg-a8 {
  background-color: hsl(178, 90.4761904762%, 31.5%) !important;
}

.analogue-2-color-a8 {
  color: hsl(178, 90.4761904762%, 31.5%) !important;
}

.analogue-2-border-color-a8 {
  border-color: hsl(178, 90.4761904762%, 31.5%) !important;
}
.analogue-2-border-color-a8.border {
  border-color: hsl(178, 90.4761904762%, 31.5%) !important;
}

.analogue-2-bg-a9 {
  background-color: hsl(178, 90.4761904762%, 26.25%) !important;
}

.analogue-2-color-a9 {
  color: hsl(178, 90.4761904762%, 26.25%) !important;
}

.analogue-2-border-color-a9 {
  border-color: hsl(178, 90.4761904762%, 26.25%) !important;
}
.analogue-2-border-color-a9.border {
  border-color: hsl(178, 90.4761904762%, 26.25%) !important;
}

.analogue-2-bg-a10 {
  background-color: hsl(178, 90.4761904762%, 21%) !important;
}

.analogue-2-color-a10 {
  color: hsl(178, 90.4761904762%, 21%) !important;
}

.analogue-2-border-color-a10 {
  border-color: hsl(178, 90.4761904762%, 21%) !important;
}
.analogue-2-border-color-a10.border {
  border-color: hsl(178, 90.4761904762%, 21%) !important;
}

.analogue-2-bg-a11 {
  background-color: hsl(178, 90.4761904762%, 15.75%) !important;
}

.analogue-2-color-a11 {
  color: hsl(178, 90.4761904762%, 15.75%) !important;
}

.analogue-2-border-color-a11 {
  border-color: hsl(178, 90.4761904762%, 15.75%) !important;
}
.analogue-2-border-color-a11.border {
  border-color: hsl(178, 90.4761904762%, 15.75%) !important;
}

.analogue-2-bg-a12 {
  background-color: hsl(178, 90.4761904762%, 10.5%) !important;
}

.analogue-2-color-a12 {
  color: hsl(178, 90.4761904762%, 10.5%) !important;
}

.analogue-2-border-color-a12 {
  border-color: hsl(178, 90.4761904762%, 10.5%) !important;
}
.analogue-2-border-color-a12.border {
  border-color: hsl(178, 90.4761904762%, 10.5%) !important;
}

.complementary-1-bg {
  background-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-color {
  color: hsl(36, 100%, 50%) !important;
}

.complementary-1-border-color- {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}
.complementary-1-border-color-.border {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-bg-a1 {
  background-color: hsl(351, 100%, 99.5%) !important;
}

.complementary-1-color-a1 {
  color: hsl(351, 100%, 99.5%) !important;
}

.complementary-1-border-color-a1 {
  border-color: hsl(351, 100%, 99.5%) !important;
}
.complementary-1-border-color-a1.border {
  border-color: hsl(351, 100%, 99.5%) !important;
}

.complementary-1-bg-a2 {
  background-color: hsl(351, 64.2857142857%, 88.8%) !important;
}

.complementary-1-color-a2 {
  color: hsl(351, 64.2857142857%, 88.8%) !important;
}

.complementary-1-border-color-a2 {
  border-color: hsl(351, 64.2857142857%, 88.8%) !important;
}
.complementary-1-border-color-a2.border {
  border-color: hsl(351, 64.2857142857%, 88.8%) !important;
}

.complementary-1-bg-a3 {
  background-color: hsl(351, 63.3027522936%, 78.2%) !important;
}

.complementary-1-color-a3 {
  color: hsl(351, 63.3027522936%, 78.2%) !important;
}

.complementary-1-border-color-a3 {
  border-color: hsl(351, 63.3027522936%, 78.2%) !important;
}
.complementary-1-border-color-a3.border {
  border-color: hsl(351, 63.3027522936%, 78.2%) !important;
}

.complementary-1-bg-a4 {
  background-color: hsl(351, 62.2641509434%, 68.2%) !important;
}

.complementary-1-color-a4 {
  color: hsl(351, 62.2641509434%, 68.2%) !important;
}

.complementary-1-border-color-a4 {
  border-color: hsl(351, 62.2641509434%, 68.2%) !important;
}
.complementary-1-border-color-a4.border {
  border-color: hsl(351, 62.2641509434%, 68.2%) !important;
}

.complementary-1-bg-a5 {
  background-color: hsl(351, 61.1650485437%, 58.8%) !important;
}

.complementary-1-color-a5 {
  color: hsl(351, 61.1650485437%, 58.8%) !important;
}

.complementary-1-border-color-a5 {
  border-color: hsl(351, 61.1650485437%, 58.8%) !important;
}
.complementary-1-border-color-a5.border {
  border-color: hsl(351, 61.1650485437%, 58.8%) !important;
}

.complementary-1-bg-a6 {
  background-color: hsl(351, 60%, 50%) !important;
}

.complementary-1-color-a6 {
  color: hsl(351, 60%, 50%) !important;
}

.complementary-1-border-color-a6 {
  border-color: hsl(351, 60%, 50%) !important;
}
.complementary-1-border-color-a6.border {
  border-color: hsl(351, 60%, 50%) !important;
}

.complementary-1-bg-a7 {
  background-color: hsl(351, 60%, 43.75%) !important;
}

.complementary-1-color-a7 {
  color: hsl(351, 60%, 43.75%) !important;
}

.complementary-1-border-color-a7 {
  border-color: hsl(351, 60%, 43.75%) !important;
}
.complementary-1-border-color-a7.border {
  border-color: hsl(351, 60%, 43.75%) !important;
}

.complementary-1-bg-a8 {
  background-color: hsl(351, 60%, 37.5%) !important;
}

.complementary-1-color-a8 {
  color: hsl(351, 60%, 37.5%) !important;
}

.complementary-1-border-color-a8 {
  border-color: hsl(351, 60%, 37.5%) !important;
}
.complementary-1-border-color-a8.border {
  border-color: hsl(351, 60%, 37.5%) !important;
}

.complementary-1-bg-a9 {
  background-color: hsl(351, 60%, 31.25%) !important;
}

.complementary-1-color-a9 {
  color: hsl(351, 60%, 31.25%) !important;
}

.complementary-1-border-color-a9 {
  border-color: hsl(351, 60%, 31.25%) !important;
}
.complementary-1-border-color-a9.border {
  border-color: hsl(351, 60%, 31.25%) !important;
}

.complementary-1-bg-a10 {
  background-color: hsl(351, 60%, 25%) !important;
}

.complementary-1-color-a10 {
  color: hsl(351, 60%, 25%) !important;
}

.complementary-1-border-color-a10 {
  border-color: hsl(351, 60%, 25%) !important;
}
.complementary-1-border-color-a10.border {
  border-color: hsl(351, 60%, 25%) !important;
}

.complementary-1-bg-a11 {
  background-color: hsl(351, 60%, 18.75%) !important;
}

.complementary-1-color-a11 {
  color: hsl(351, 60%, 18.75%) !important;
}

.complementary-1-border-color-a11 {
  border-color: hsl(351, 60%, 18.75%) !important;
}
.complementary-1-border-color-a11.border {
  border-color: hsl(351, 60%, 18.75%) !important;
}

.complementary-1-bg-a12 {
  background-color: hsl(351, 60%, 12.5%) !important;
}

.complementary-1-color-a12 {
  color: hsl(351, 60%, 12.5%) !important;
}

.complementary-1-border-color-a12 {
  border-color: hsl(351, 60%, 12.5%) !important;
}
.complementary-1-border-color-a12.border {
  border-color: hsl(351, 60%, 12.5%) !important;
}

.complementary-2-bg {
  background-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-color {
  color: hsl(36, 100%, 50%) !important;
}

.complementary-2-border-color- {
  border-color: hsl(36, 100%, 50%) !important;
}
.complementary-2-border-color-.border {
  border-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-bg-a1 {
  background-color: hsl(36, 100%, 87.5%) !important;
}

.complementary-2-color-a1 {
  color: hsl(36, 100%, 87.5%) !important;
}

.complementary-2-border-color-a1 {
  border-color: hsl(36, 100%, 87.5%) !important;
}
.complementary-2-border-color-a1.border {
  border-color: hsl(36, 100%, 87.5%) !important;
}

.complementary-2-bg-a2 {
  background-color: hsl(36, 82.7586206897%, 76.8%) !important;
}

.complementary-2-color-a2 {
  color: hsl(36, 82.7586206897%, 76.8%) !important;
}

.complementary-2-border-color-a2 {
  border-color: hsl(36, 82.7586206897%, 76.8%) !important;
}
.complementary-2-border-color-a2.border {
  border-color: hsl(36, 82.7586206897%, 76.8%) !important;
}

.complementary-2-bg-a3 {
  background-color: hsl(36, 75.975975976%, 66.7%) !important;
}

.complementary-2-color-a3 {
  color: hsl(36, 75.975975976%, 66.7%) !important;
}

.complementary-2-border-color-a3 {
  border-color: hsl(36, 75.975975976%, 66.7%) !important;
}
.complementary-2-border-color-a3.border {
  border-color: hsl(36, 75.975975976%, 66.7%) !important;
}

.complementary-2-bg-a4 {
  background-color: hsl(36, 71.9626168224%, 57.2%) !important;
}

.complementary-2-color-a4 {
  color: hsl(36, 71.9626168224%, 57.2%) !important;
}

.complementary-2-border-color-a4 {
  border-color: hsl(36, 71.9626168224%, 57.2%) !important;
}
.complementary-2-border-color-a4.border {
  border-color: hsl(36, 71.9626168224%, 57.2%) !important;
}

.complementary-2-bg-a5 {
  background-color: hsl(36, 73.9130434783%, 48.3%) !important;
}

.complementary-2-color-a5 {
  color: hsl(36, 73.9130434783%, 48.3%) !important;
}

.complementary-2-border-color-a5 {
  border-color: hsl(36, 73.9130434783%, 48.3%) !important;
}
.complementary-2-border-color-a5.border {
  border-color: hsl(36, 73.9130434783%, 48.3%) !important;
}

.complementary-2-bg-a6 {
  background-color: hsl(36, 100%, 40%) !important;
}

.complementary-2-color-a6 {
  color: hsl(36, 100%, 40%) !important;
}

.complementary-2-border-color-a6 {
  border-color: hsl(36, 100%, 40%) !important;
}
.complementary-2-border-color-a6.border {
  border-color: hsl(36, 100%, 40%) !important;
}

.complementary-2-bg-a7 {
  background-color: hsl(36, 100%, 35%) !important;
}

.complementary-2-color-a7 {
  color: hsl(36, 100%, 35%) !important;
}

.complementary-2-border-color-a7 {
  border-color: hsl(36, 100%, 35%) !important;
}
.complementary-2-border-color-a7.border {
  border-color: hsl(36, 100%, 35%) !important;
}

.complementary-2-bg-a8 {
  background-color: hsl(36, 100%, 30%) !important;
}

.complementary-2-color-a8 {
  color: hsl(36, 100%, 30%) !important;
}

.complementary-2-border-color-a8 {
  border-color: hsl(36, 100%, 30%) !important;
}
.complementary-2-border-color-a8.border {
  border-color: hsl(36, 100%, 30%) !important;
}

.complementary-2-bg-a9 {
  background-color: hsl(36, 100%, 25%) !important;
}

.complementary-2-color-a9 {
  color: hsl(36, 100%, 25%) !important;
}

.complementary-2-border-color-a9 {
  border-color: hsl(36, 100%, 25%) !important;
}
.complementary-2-border-color-a9.border {
  border-color: hsl(36, 100%, 25%) !important;
}

.complementary-2-bg-a10 {
  background-color: hsl(36, 100%, 20%) !important;
}

.complementary-2-color-a10 {
  color: hsl(36, 100%, 20%) !important;
}

.complementary-2-border-color-a10 {
  border-color: hsl(36, 100%, 20%) !important;
}
.complementary-2-border-color-a10.border {
  border-color: hsl(36, 100%, 20%) !important;
}

.complementary-2-bg-a11 {
  background-color: hsl(36, 100%, 15%) !important;
}

.complementary-2-color-a11 {
  color: hsl(36, 100%, 15%) !important;
}

.complementary-2-border-color-a11 {
  border-color: hsl(36, 100%, 15%) !important;
}
.complementary-2-border-color-a11.border {
  border-color: hsl(36, 100%, 15%) !important;
}

.complementary-2-bg-a12 {
  background-color: hsl(36, 100%, 10%) !important;
}

.complementary-2-color-a12 {
  color: hsl(36, 100%, 10%) !important;
}

.complementary-2-border-color-a12 {
  border-color: hsl(36, 100%, 10%) !important;
}
.complementary-2-border-color-a12.border {
  border-color: hsl(36, 100%, 10%) !important;
}

.complementary-3-bg {
  background-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-color {
  color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-border-color- {
  border-color: hsl(159, 100%, 40.5%) !important;
}
.complementary-3-border-color-.border {
  border-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-bg-a1 {
  background-color: hsl(159, 100%, 87.5%) !important;
}

.complementary-3-color-a1 {
  color: hsl(159, 100%, 87.5%) !important;
}

.complementary-3-border-color-a1 {
  border-color: hsl(159, 100%, 87.5%) !important;
}
.complementary-3-border-color-a1.border {
  border-color: hsl(159, 100%, 87.5%) !important;
}

.complementary-3-bg-a2 {
  background-color: hsl(159, 82.7586206897%, 76.8%) !important;
}

.complementary-3-color-a2 {
  color: hsl(159, 82.7586206897%, 76.8%) !important;
}

.complementary-3-border-color-a2 {
  border-color: hsl(159, 82.7586206897%, 76.8%) !important;
}
.complementary-3-border-color-a2.border {
  border-color: hsl(159, 82.7586206897%, 76.8%) !important;
}

.complementary-3-bg-a3 {
  background-color: hsl(159, 75.975975976%, 66.7%) !important;
}

.complementary-3-color-a3 {
  color: hsl(159, 75.975975976%, 66.7%) !important;
}

.complementary-3-border-color-a3 {
  border-color: hsl(159, 75.975975976%, 66.7%) !important;
}
.complementary-3-border-color-a3.border {
  border-color: hsl(159, 75.975975976%, 66.7%) !important;
}

.complementary-3-bg-a4 {
  background-color: hsl(159, 71.9626168224%, 57.2%) !important;
}

.complementary-3-color-a4 {
  color: hsl(159, 71.9626168224%, 57.2%) !important;
}

.complementary-3-border-color-a4 {
  border-color: hsl(159, 71.9626168224%, 57.2%) !important;
}
.complementary-3-border-color-a4.border {
  border-color: hsl(159, 71.9626168224%, 57.2%) !important;
}

.complementary-3-bg-a5 {
  background-color: hsl(159, 73.9130434783%, 48.3%) !important;
}

.complementary-3-color-a5 {
  color: hsl(159, 73.9130434783%, 48.3%) !important;
}

.complementary-3-border-color-a5 {
  border-color: hsl(159, 73.9130434783%, 48.3%) !important;
}
.complementary-3-border-color-a5.border {
  border-color: hsl(159, 73.9130434783%, 48.3%) !important;
}

.complementary-3-bg-a6 {
  background-color: hsl(159, 100%, 40%) !important;
}

.complementary-3-color-a6 {
  color: hsl(159, 100%, 40%) !important;
}

.complementary-3-border-color-a6 {
  border-color: hsl(159, 100%, 40%) !important;
}
.complementary-3-border-color-a6.border {
  border-color: hsl(159, 100%, 40%) !important;
}

.complementary-3-bg-a7 {
  background-color: hsl(159, 100%, 35%) !important;
}

.complementary-3-color-a7 {
  color: hsl(159, 100%, 35%) !important;
}

.complementary-3-border-color-a7 {
  border-color: hsl(159, 100%, 35%) !important;
}
.complementary-3-border-color-a7.border {
  border-color: hsl(159, 100%, 35%) !important;
}

.complementary-3-bg-a8 {
  background-color: hsl(159, 100%, 30%) !important;
}

.complementary-3-color-a8 {
  color: hsl(159, 100%, 30%) !important;
}

.complementary-3-border-color-a8 {
  border-color: hsl(159, 100%, 30%) !important;
}
.complementary-3-border-color-a8.border {
  border-color: hsl(159, 100%, 30%) !important;
}

.complementary-3-bg-a9 {
  background-color: hsl(159, 100%, 25%) !important;
}

.complementary-3-color-a9 {
  color: hsl(159, 100%, 25%) !important;
}

.complementary-3-border-color-a9 {
  border-color: hsl(159, 100%, 25%) !important;
}
.complementary-3-border-color-a9.border {
  border-color: hsl(159, 100%, 25%) !important;
}

.complementary-3-bg-a10 {
  background-color: hsl(159, 100%, 20%) !important;
}

.complementary-3-color-a10 {
  color: hsl(159, 100%, 20%) !important;
}

.complementary-3-border-color-a10 {
  border-color: hsl(159, 100%, 20%) !important;
}
.complementary-3-border-color-a10.border {
  border-color: hsl(159, 100%, 20%) !important;
}

.complementary-3-bg-a11 {
  background-color: hsl(159, 100%, 15%) !important;
}

.complementary-3-color-a11 {
  color: hsl(159, 100%, 15%) !important;
}

.complementary-3-border-color-a11 {
  border-color: hsl(159, 100%, 15%) !important;
}
.complementary-3-border-color-a11.border {
  border-color: hsl(159, 100%, 15%) !important;
}

.complementary-3-bg-a12 {
  background-color: hsl(159, 100%, 10%) !important;
}

.complementary-3-color-a12 {
  color: hsl(159, 100%, 10%) !important;
}

.complementary-3-border-color-a12 {
  border-color: hsl(159, 100%, 10%) !important;
}
.complementary-3-border-color-a12.border {
  border-color: hsl(159, 100%, 10%) !important;
}

.analogue-1-bg-b1 {
  background-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-color-b1 {
  color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-border-color-b1 {
  border-color: hsl(243, 100%, 57.5%) !important;
}
.analogue-1-border-color-b1.border {
  border-color: hsl(243, 100%, 57.5%) !important;
}

.analogue-1-bg-b2 {
  background-color: hsl(243, 77.1428571429%, 56.25%) !important;
}

.analogue-1-color-b2 {
  color: hsl(243, 77.1428571429%, 56.25%) !important;
}

.analogue-1-border-color-b2 {
  border-color: hsl(243, 77.1428571429%, 56.25%) !important;
}
.analogue-1-border-color-b2.border {
  border-color: hsl(243, 77.1428571429%, 56.25%) !important;
}

.analogue-1-bg-b3 {
  background-color: hsl(243, 56.5217391304%, 54%) !important;
}

.analogue-1-color-b3 {
  color: hsl(243, 56.5217391304%, 54%) !important;
}

.analogue-1-border-color-b3 {
  border-color: hsl(243, 56.5217391304%, 54%) !important;
}
.analogue-1-border-color-b3.border {
  border-color: hsl(243, 56.5217391304%, 54%) !important;
}

.analogue-1-bg-b4 {
  background-color: hsl(243, 39.0862944162%, 50.75%) !important;
}

.analogue-1-color-b4 {
  color: hsl(243, 39.0862944162%, 50.75%) !important;
}

.analogue-1-border-color-b4 {
  border-color: hsl(243, 39.0862944162%, 50.75%) !important;
}
.analogue-1-border-color-b4.border {
  border-color: hsl(243, 39.0862944162%, 50.75%) !important;
}

.analogue-1-bg-b5 {
  background-color: hsl(243, 29.0322580645%, 46.5%) !important;
}

.analogue-1-color-b5 {
  color: hsl(243, 29.0322580645%, 46.5%) !important;
}

.analogue-1-border-color-b5 {
  border-color: hsl(243, 29.0322580645%, 46.5%) !important;
}
.analogue-1-border-color-b5.border {
  border-color: hsl(243, 29.0322580645%, 46.5%) !important;
}

.analogue-1-bg-b6 {
  background-color: hsl(243, 21.2121212121%, 41.25%) !important;
}

.analogue-1-color-b6 {
  color: hsl(243, 21.2121212121%, 41.25%) !important;
}

.analogue-1-border-color-b6 {
  border-color: hsl(243, 21.2121212121%, 41.25%) !important;
}
.analogue-1-border-color-b6.border {
  border-color: hsl(243, 21.2121212121%, 41.25%) !important;
}

.analogue-1-bg-b7 {
  background-color: hsl(243, 14.2857142857%, 35%) !important;
}

.analogue-1-color-b7 {
  color: hsl(243, 14.2857142857%, 35%) !important;
}

.analogue-1-border-color-b7 {
  border-color: hsl(243, 14.2857142857%, 35%) !important;
}
.analogue-1-border-color-b7.border {
  border-color: hsl(243, 14.2857142857%, 35%) !important;
}

.analogue-1-bg-b8 {
  background-color: hsl(243, 8.1081081081%, 27.75%) !important;
}

.analogue-1-color-b8 {
  color: hsl(243, 8.1081081081%, 27.75%) !important;
}

.analogue-1-border-color-b8 {
  border-color: hsl(243, 8.1081081081%, 27.75%) !important;
}
.analogue-1-border-color-b8.border {
  border-color: hsl(243, 8.1081081081%, 27.75%) !important;
}

.analogue-2-bg-b1 {
  background-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-color-b1 {
  color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-border-color-b1 {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}
.analogue-2-border-color-b1.border {
  border-color: hsl(178, 90.4761904762%, 44.625%) !important;
}

.analogue-2-bg-b2 {
  background-color: hsl(178, 73.9130434783%, 43.125%) !important;
}

.analogue-2-color-b2 {
  color: hsl(178, 73.9130434783%, 43.125%) !important;
}

.analogue-2-border-color-b2 {
  border-color: hsl(178, 73.9130434783%, 43.125%) !important;
}
.analogue-2-border-color-b2.border {
  border-color: hsl(178, 73.9130434783%, 43.125%) !important;
}

.analogue-2-bg-b3 {
  background-color: hsl(178, 60%, 40.625%) !important;
}

.analogue-2-color-b3 {
  color: hsl(178, 60%, 40.625%) !important;
}

.analogue-2-border-color-b3 {
  border-color: hsl(178, 60%, 40.625%) !important;
}
.analogue-2-border-color-b3.border {
  border-color: hsl(178, 60%, 40.625%) !important;
}

.analogue-2-bg-b4 {
  background-color: hsl(178, 48.1481481481%, 37.125%) !important;
}

.analogue-2-color-b4 {
  color: hsl(178, 48.1481481481%, 37.125%) !important;
}

.analogue-2-border-color-b4 {
  border-color: hsl(178, 48.1481481481%, 37.125%) !important;
}
.analogue-2-border-color-b4.border {
  border-color: hsl(178, 48.1481481481%, 37.125%) !important;
}

.analogue-2-bg-b5 {
  background-color: hsl(178, 37.9310344828%, 32.625%) !important;
}

.analogue-2-color-b5 {
  color: hsl(178, 37.9310344828%, 32.625%) !important;
}

.analogue-2-border-color-b5 {
  border-color: hsl(178, 37.9310344828%, 32.625%) !important;
}
.analogue-2-border-color-b5.border {
  border-color: hsl(178, 37.9310344828%, 32.625%) !important;
}

.analogue-2-bg-b6 {
  background-color: hsl(178, 29.0322580645%, 27.125%) !important;
}

.analogue-2-color-b6 {
  color: hsl(178, 29.0322580645%, 27.125%) !important;
}

.analogue-2-border-color-b6 {
  border-color: hsl(178, 29.0322580645%, 27.125%) !important;
}
.analogue-2-border-color-b6.border {
  border-color: hsl(178, 29.0322580645%, 27.125%) !important;
}

.analogue-2-bg-b7 {
  background-color: hsl(178, 21.2121212121%, 20.625%) !important;
}

.analogue-2-color-b7 {
  color: hsl(178, 21.2121212121%, 20.625%) !important;
}

.analogue-2-border-color-b7 {
  border-color: hsl(178, 21.2121212121%, 20.625%) !important;
}
.analogue-2-border-color-b7.border {
  border-color: hsl(178, 21.2121212121%, 20.625%) !important;
}

.analogue-2-bg-b8 {
  background-color: hsl(178, 14.2857142857%, 13.125%) !important;
}

.analogue-2-color-b8 {
  color: hsl(178, 14.2857142857%, 13.125%) !important;
}

.analogue-2-border-color-b8 {
  border-color: hsl(178, 14.2857142857%, 13.125%) !important;
}
.analogue-2-border-color-b8.border {
  border-color: hsl(178, 14.2857142857%, 13.125%) !important;
}

.complementary-1-bg-b1 {
  background-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-color-b1 {
  color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-border-color-b1 {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}
.complementary-1-border-color-b1.border {
  border-color: hsl(351, 92.380952381%, 60.625%) !important;
}

.complementary-1-bg-b2 {
  background-color: hsl(351, 68.5039370079%, 58.725%) !important;
}

.complementary-1-color-b2 {
  color: hsl(351, 68.5039370079%, 58.725%) !important;
}

.complementary-1-border-color-b2 {
  border-color: hsl(351, 68.5039370079%, 58.725%) !important;
}
.complementary-1-border-color-b2.border {
  border-color: hsl(351, 68.5039370079%, 58.725%) !important;
}

.complementary-1-bg-b3 {
  background-color: hsl(351, 47.9343520091%, 55.825%) !important;
}

.complementary-1-color-b3 {
  color: hsl(351, 47.9343520091%, 55.825%) !important;
}

.complementary-1-border-color-b3 {
  border-color: hsl(351, 47.9343520091%, 55.825%) !important;
}
.complementary-1-border-color-b3.border {
  border-color: hsl(351, 47.9343520091%, 55.825%) !important;
}

.complementary-1-bg-b4 {
  background-color: hsl(351, 31.3572542902%, 51.925%) !important;
}

.complementary-1-color-b4 {
  color: hsl(351, 31.3572542902%, 51.925%) !important;
}

.complementary-1-border-color-b4 {
  border-color: hsl(351, 31.3572542902%, 51.925%) !important;
}
.complementary-1-border-color-b4.border {
  border-color: hsl(351, 31.3572542902%, 51.925%) !important;
}

.complementary-1-bg-b5 {
  background-color: hsl(351, 21.2121212121%, 47.025%) !important;
}

.complementary-1-color-b5 {
  color: hsl(351, 21.2121212121%, 47.025%) !important;
}

.complementary-1-border-color-b5 {
  border-color: hsl(351, 21.2121212121%, 47.025%) !important;
}
.complementary-1-border-color-b5.border {
  border-color: hsl(351, 21.2121212121%, 47.025%) !important;
}

.complementary-1-bg-b6 {
  background-color: hsl(351, 14.2857142857%, 41.125%) !important;
}

.complementary-1-color-b6 {
  color: hsl(351, 14.2857142857%, 41.125%) !important;
}

.complementary-1-border-color-b6 {
  border-color: hsl(351, 14.2857142857%, 41.125%) !important;
}
.complementary-1-border-color-b6.border {
  border-color: hsl(351, 14.2857142857%, 41.125%) !important;
}

.complementary-1-bg-b7 {
  background-color: hsl(351, 8.1081081081%, 34.225%) !important;
}

.complementary-1-color-b7 {
  color: hsl(351, 8.1081081081%, 34.225%) !important;
}

.complementary-1-border-color-b7 {
  border-color: hsl(351, 8.1081081081%, 34.225%) !important;
}
.complementary-1-border-color-b7.border {
  border-color: hsl(351, 8.1081081081%, 34.225%) !important;
}

.complementary-1-bg-b8 {
  background-color: hsl(351, 2.5641025641%, 26.325%) !important;
}

.complementary-1-color-b8 {
  color: hsl(351, 2.5641025641%, 26.325%) !important;
}

.complementary-1-border-color-b8 {
  border-color: hsl(351, 2.5641025641%, 26.325%) !important;
}
.complementary-1-border-color-b8.border {
  border-color: hsl(351, 2.5641025641%, 26.325%) !important;
}

.complementary-2-bg-b1 {
  background-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-color-b1 {
  color: hsl(36, 100%, 50%) !important;
}

.complementary-2-border-color-b1 {
  border-color: hsl(36, 100%, 50%) !important;
}
.complementary-2-border-color-b1.border {
  border-color: hsl(36, 100%, 50%) !important;
}

.complementary-2-bg-b2 {
  background-color: hsl(36, 81.8181818182%, 49.5%) !important;
}

.complementary-2-color-b2 {
  color: hsl(36, 81.8181818182%, 49.5%) !important;
}

.complementary-2-border-color-b2 {
  border-color: hsl(36, 81.8181818182%, 49.5%) !important;
}
.complementary-2-border-color-b2.border {
  border-color: hsl(36, 81.8181818182%, 49.5%) !important;
}

.complementary-2-bg-b3 {
  background-color: hsl(36, 66.6666666667%, 48%) !important;
}

.complementary-2-color-b3 {
  color: hsl(36, 66.6666666667%, 48%) !important;
}

.complementary-2-border-color-b3 {
  border-color: hsl(36, 66.6666666667%, 48%) !important;
}
.complementary-2-border-color-b3.border {
  border-color: hsl(36, 66.6666666667%, 48%) !important;
}

.complementary-2-bg-b4 {
  background-color: hsl(36, 53.8461538462%, 45.5%) !important;
}

.complementary-2-color-b4 {
  color: hsl(36, 53.8461538462%, 45.5%) !important;
}

.complementary-2-border-color-b4 {
  border-color: hsl(36, 53.8461538462%, 45.5%) !important;
}
.complementary-2-border-color-b4.border {
  border-color: hsl(36, 53.8461538462%, 45.5%) !important;
}

.complementary-2-bg-b5 {
  background-color: hsl(36, 42.8571428571%, 42%) !important;
}

.complementary-2-color-b5 {
  color: hsl(36, 42.8571428571%, 42%) !important;
}

.complementary-2-border-color-b5 {
  border-color: hsl(36, 42.8571428571%, 42%) !important;
}
.complementary-2-border-color-b5.border {
  border-color: hsl(36, 42.8571428571%, 42%) !important;
}

.complementary-2-bg-b6 {
  background-color: hsl(36, 33.3333333333%, 37.5%) !important;
}

.complementary-2-color-b6 {
  color: hsl(36, 33.3333333333%, 37.5%) !important;
}

.complementary-2-border-color-b6 {
  border-color: hsl(36, 33.3333333333%, 37.5%) !important;
}
.complementary-2-border-color-b6.border {
  border-color: hsl(36, 33.3333333333%, 37.5%) !important;
}

.complementary-2-bg-b7 {
  background-color: hsl(36, 25%, 32%) !important;
}

.complementary-2-color-b7 {
  color: hsl(36, 25%, 32%) !important;
}

.complementary-2-border-color-b7 {
  border-color: hsl(36, 25%, 32%) !important;
}
.complementary-2-border-color-b7.border {
  border-color: hsl(36, 25%, 32%) !important;
}

.complementary-2-bg-b8 {
  background-color: hsl(36, 17.6470588235%, 25.5%) !important;
}

.complementary-2-color-b8 {
  color: hsl(36, 17.6470588235%, 25.5%) !important;
}

.complementary-2-border-color-b8 {
  border-color: hsl(36, 17.6470588235%, 25.5%) !important;
}
.complementary-2-border-color-b8.border {
  border-color: hsl(36, 17.6470588235%, 25.5%) !important;
}

.complementary-3-bg-b1 {
  background-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-color-b1 {
  color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-border-color-b1 {
  border-color: hsl(159, 100%, 40.5%) !important;
}
.complementary-3-border-color-b1.border {
  border-color: hsl(159, 100%, 40.5%) !important;
}

.complementary-3-bg-b2 {
  background-color: hsl(159, 81.8181818182%, 39.05%) !important;
}

.complementary-3-color-b2 {
  color: hsl(159, 81.8181818182%, 39.05%) !important;
}

.complementary-3-border-color-b2 {
  border-color: hsl(159, 81.8181818182%, 39.05%) !important;
}
.complementary-3-border-color-b2.border {
  border-color: hsl(159, 81.8181818182%, 39.05%) !important;
}

.complementary-3-bg-b3 {
  background-color: hsl(159, 66.6666666667%, 36.6%) !important;
}

.complementary-3-color-b3 {
  color: hsl(159, 66.6666666667%, 36.6%) !important;
}

.complementary-3-border-color-b3 {
  border-color: hsl(159, 66.6666666667%, 36.6%) !important;
}
.complementary-3-border-color-b3.border {
  border-color: hsl(159, 66.6666666667%, 36.6%) !important;
}

.complementary-3-bg-b4 {
  background-color: hsl(159, 53.8461538462%, 33.15%) !important;
}

.complementary-3-color-b4 {
  color: hsl(159, 53.8461538462%, 33.15%) !important;
}

.complementary-3-border-color-b4 {
  border-color: hsl(159, 53.8461538462%, 33.15%) !important;
}
.complementary-3-border-color-b4.border {
  border-color: hsl(159, 53.8461538462%, 33.15%) !important;
}

.complementary-3-bg-b5 {
  background-color: hsl(159, 42.8571428571%, 28.7%) !important;
}

.complementary-3-color-b5 {
  color: hsl(159, 42.8571428571%, 28.7%) !important;
}

.complementary-3-border-color-b5 {
  border-color: hsl(159, 42.8571428571%, 28.7%) !important;
}
.complementary-3-border-color-b5.border {
  border-color: hsl(159, 42.8571428571%, 28.7%) !important;
}

.complementary-3-bg-b6 {
  background-color: hsl(159, 33.3333333333%, 23.25%) !important;
}

.complementary-3-color-b6 {
  color: hsl(159, 33.3333333333%, 23.25%) !important;
}

.complementary-3-border-color-b6 {
  border-color: hsl(159, 33.3333333333%, 23.25%) !important;
}
.complementary-3-border-color-b6.border {
  border-color: hsl(159, 33.3333333333%, 23.25%) !important;
}

.complementary-3-bg-b7 {
  background-color: hsl(159, 25%, 16.8%) !important;
}

.complementary-3-color-b7 {
  color: hsl(159, 25%, 16.8%) !important;
}

.complementary-3-border-color-b7 {
  border-color: hsl(159, 25%, 16.8%) !important;
}
.complementary-3-border-color-b7.border {
  border-color: hsl(159, 25%, 16.8%) !important;
}

.complementary-3-bg-b8 {
  background-color: hsl(159, 17.6470588235%, 9.35%) !important;
}

.complementary-3-color-b8 {
  color: hsl(159, 17.6470588235%, 9.35%) !important;
}

.complementary-3-border-color-b8 {
  border-color: hsl(159, 17.6470588235%, 9.35%) !important;
}
.complementary-3-border-color-b8.border {
  border-color: hsl(159, 17.6470588235%, 9.35%) !important;
}

.neutral-1-bg {
  background-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-color {
  color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-border-color- {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}
.neutral-1-border-color-.border {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-bg-a1 {
  background-color: hsl(210, 6.2290689886%, 92.535%) !important;
}

.neutral-1-color-a1 {
  color: hsl(210, 6.2290689886%, 92.535%) !important;
}

.neutral-1-border-color-a1 {
  border-color: hsl(210, 6.2290689886%, 92.535%) !important;
}
.neutral-1-border-color-a1.border {
  border-color: hsl(210, 6.2290689886%, 92.535%) !important;
}

.neutral-1-bg-a2 {
  background-color: hsl(210, 2.9799029799%, 85.57%) !important;
}

.neutral-1-color-a2 {
  color: hsl(210, 2.9799029799%, 85.57%) !important;
}

.neutral-1-border-color-a2 {
  border-color: hsl(210, 2.9799029799%, 85.57%) !important;
}
.neutral-1-border-color-a2.border {
  border-color: hsl(210, 2.9799029799%, 85.57%) !important;
}

.neutral-1-bg-a3 {
  background-color: hsl(210, 3.6255162919%, 78.21%) !important;
}

.neutral-1-color-a3 {
  color: hsl(210, 3.6255162919%, 78.21%) !important;
}

.neutral-1-border-color-a3 {
  border-color: hsl(210, 3.6255162919%, 78.21%) !important;
}
.neutral-1-border-color-a3.border {
  border-color: hsl(210, 3.6255162919%, 78.21%) !important;
}

.neutral-1-bg-a4 {
  background-color: hsl(210, 7.1618037135%, 69.84%) !important;
}

.neutral-1-color-a4 {
  color: hsl(210, 7.1618037135%, 69.84%) !important;
}

.neutral-1-border-color-a4 {
  border-color: hsl(210, 7.1618037135%, 69.84%) !important;
}
.neutral-1-border-color-a4.border {
  border-color: hsl(210, 7.1618037135%, 69.84%) !important;
}

.neutral-1-bg-a5 {
  background-color: hsl(210, 8.4967320261%, 61.75%) !important;
}

.neutral-1-color-a5 {
  color: hsl(210, 8.4967320261%, 61.75%) !important;
}

.neutral-1-border-color-a5 {
  border-color: hsl(210, 8.4967320261%, 61.75%) !important;
}
.neutral-1-border-color-a5.border {
  border-color: hsl(210, 8.4967320261%, 61.75%) !important;
}

.neutral-1-bg-a6 {
  background-color: hsl(210, 12.1338912134%, 52.2%) !important;
}

.neutral-1-color-a6 {
  color: hsl(210, 12.1338912134%, 52.2%) !important;
}

.neutral-1-border-color-a6 {
  border-color: hsl(210, 12.1338912134%, 52.2%) !important;
}
.neutral-1-border-color-a6.border {
  border-color: hsl(210, 12.1338912134%, 52.2%) !important;
}

.neutral-1-bg-a7 {
  background-color: hsl(210, 17.6470588235%, 43.35%) !important;
}

.neutral-1-color-a7 {
  color: hsl(210, 17.6470588235%, 43.35%) !important;
}

.neutral-1-border-color-a7 {
  border-color: hsl(210, 17.6470588235%, 43.35%) !important;
}
.neutral-1-border-color-a7.border {
  border-color: hsl(210, 17.6470588235%, 43.35%) !important;
}

.neutral-1-bg-a8 {
  background-color: hsl(210, 25%, 35.2%) !important;
}

.neutral-1-color-a8 {
  color: hsl(210, 25%, 35.2%) !important;
}

.neutral-1-border-color-a8 {
  border-color: hsl(210, 25%, 35.2%) !important;
}
.neutral-1-border-color-a8.border {
  border-color: hsl(210, 25%, 35.2%) !important;
}

.neutral-1-bg-a9 {
  background-color: hsl(210, 33.3333333333%, 27.75%) !important;
}

.neutral-1-color-a9 {
  color: hsl(210, 33.3333333333%, 27.75%) !important;
}

.neutral-1-border-color-a9 {
  border-color: hsl(210, 33.3333333333%, 27.75%) !important;
}
.neutral-1-border-color-a9.border {
  border-color: hsl(210, 33.3333333333%, 27.75%) !important;
}

.neutral-1-bg-a10 {
  background-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-color-a10 {
  color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-1-border-color-a10 {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}
.neutral-1-border-color-a10.border {
  border-color: hsl(210, 53.8461538462%, 19.5%) !important;
}

.neutral-2-bg {
  background-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-color {
  color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-border-color- {
  border-color: hsl(210, 32.2033898305%, 92.625%);
}

.neutral-2-bg-b1 {
  background-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-color-b1 {
  color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-border-color-b1 {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}
.neutral-2-border-color-b1.border {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-bg-b2 {
  background-color: hsl(210, 9.0909090909%, 78%) !important;
}

.neutral-2-color-b2 {
  color: hsl(210, 9.0909090909%, 78%) !important;
}

.neutral-2-border-color-b2 {
  border-color: hsl(210, 9.0909090909%, 78%) !important;
}
.neutral-2-border-color-b2.border {
  border-color: hsl(210, 9.0909090909%, 78%) !important;
}

.neutral-2-bg-b3 {
  background-color: hsl(210, 4.4368600683%, 63.375%) !important;
}

.neutral-2-color-b3 {
  color: hsl(210, 4.4368600683%, 63.375%) !important;
}

.neutral-2-border-color-b3 {
  border-color: hsl(210, 4.4368600683%, 63.375%) !important;
}
.neutral-2-border-color-b3.border {
  border-color: hsl(210, 4.4368600683%, 63.375%) !important;
}

.neutral-2-bg-b4 {
  background-color: hsl(210, 2.5641025641%, 48.75%) !important;
}

.neutral-2-color-b4 {
  color: hsl(210, 2.5641025641%, 48.75%) !important;
}

.neutral-2-border-color-b4 {
  border-color: hsl(210, 2.5641025641%, 48.75%) !important;
}
.neutral-2-border-color-b4.border {
  border-color: hsl(210, 2.5641025641%, 48.75%) !important;
}

.neutral-2-bg-b5 {
  background-color: hsl(210, 2.0408163265%, 34.3%) !important;
}

.neutral-2-color-b5 {
  color: hsl(210, 2.0408163265%, 34.3%) !important;
}

.neutral-2-border-color-b5 {
  border-color: hsl(210, 2.0408163265%, 34.3%) !important;
}
.neutral-2-border-color-b5.border {
  border-color: hsl(210, 2.0408163265%, 34.3%) !important;
}

.neutral-2-bg-b6 {
  background-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-color-b6 {
  color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-border-color-b6 {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}
.neutral-2-border-color-b6.border {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-bg-b7 {
  background-color: hsl(210, 4.7120418848%, 4.775%) !important;
}

.neutral-2-color-b7 {
  color: hsl(210, 4.7120418848%, 4.775%) !important;
}

.neutral-2-border-color-b7 {
  border-color: hsl(210, 4.7120418848%, 4.775%) !important;
}
.neutral-2-border-color-b7.border {
  border-color: hsl(210, 4.7120418848%, 4.775%) !important;
}

.neutral-2-bg-a1 {
  background-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-color-a1 {
  color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-border-color-a1 {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}
.neutral-2-border-color-a1.border {
  border-color: hsl(210, 32.2033898305%, 92.625%) !important;
}

.neutral-2-bg-a2 {
  background-color: hsl(210, 13.7931034483%, 76.8%) !important;
}

.neutral-2-color-a2 {
  color: hsl(210, 13.7931034483%, 76.8%) !important;
}

.neutral-2-border-color-a2 {
  border-color: hsl(210, 13.7931034483%, 76.8%) !important;
}
.neutral-2-border-color-a2.border {
  border-color: hsl(210, 13.7931034483%, 76.8%) !important;
}

.neutral-2-bg-a3 {
  background-color: hsl(210, 6.103286385%, 62.725%) !important;
}

.neutral-2-color-a3 {
  color: hsl(210, 6.103286385%, 62.725%) !important;
}

.neutral-2-border-color-a3 {
  border-color: hsl(210, 6.103286385%, 62.725%) !important;
}
.neutral-2-border-color-a3.border {
  border-color: hsl(210, 6.103286385%, 62.725%) !important;
}

.neutral-2-bg-a4 {
  background-color: hsl(210, 3.6269430052%, 48.25%) !important;
}

.neutral-2-color-a4 {
  color: hsl(210, 3.6269430052%, 48.25%) !important;
}

.neutral-2-border-color-a4 {
  border-color: hsl(210, 3.6269430052%, 48.25%) !important;
}
.neutral-2-border-color-a4.border {
  border-color: hsl(210, 3.6269430052%, 48.25%) !important;
}

.neutral-2-bg-a5 {
  background-color: hsl(210, 3.6269430052%, 33.775%) !important;
}

.neutral-2-color-a5 {
  color: hsl(210, 3.6269430052%, 33.775%) !important;
}

.neutral-2-border-color-a5 {
  border-color: hsl(210, 3.6269430052%, 33.775%) !important;
}
.neutral-2-border-color-a5.border {
  border-color: hsl(210, 3.6269430052%, 33.775%) !important;
}

.neutral-2-bg-a6 {
  background-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-color-a6 {
  color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-border-color-a6 {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}
.neutral-2-border-color-a6.border {
  border-color: hsl(210, 3.6269430052%, 19.3%) !important;
}

.neutral-2-bg-a7 {
  background-color: hsl(210, 4.7120418848%, 9.55%) !important;
}

.neutral-2-color-a7 {
  color: hsl(210, 4.7120418848%, 9.55%) !important;
}

.neutral-2-border-color-a7 {
  border-color: hsl(210, 4.7120418848%, 9.55%) !important;
}
.neutral-2-border-color-a7.border {
  border-color: hsl(210, 4.7120418848%, 9.55%) !important;
}

.lightgrey-bg-a1 {
  background-color: hsl(210, 3%, 85%) !important;
}

.lightgrey-color-a1 {
  color: hsl(210, 3%, 85%) !important;
}

.lightgrey-border-color-a1 {
  border-color: hsl(210, 3%, 85%) !important;
}
.lightgrey-border-color-a1.border {
  border-color: hsl(210, 3%, 85%) !important;
}

.lightgrey-bg-a2 {
  background-color: #edf5fc !important;
}

.lightgrey-color-a2 {
  color: #edf5fc !important;
}

.lightgrey-border-color-a2 {
  border-color: #edf5fc !important;
}
.lightgrey-border-color-a2.border {
  border-color: #edf5fc !important;
}

.lightgrey-bg-a3 {
  background-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-color-a3 {
  color: hsl(210, 62%, 97%) !important;
}

.lightgrey-border-color-a3 {
  border-color: hsl(210, 62%, 97%) !important;
}
.lightgrey-border-color-a3.border {
  border-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-bg-a4 {
  background-color: #f5f9fc !important;
}

.lightgrey-color-a4 {
  color: #f5f9fc !important;
}

.lightgrey-border-color-a4 {
  border-color: #f5f9fc !important;
}
.lightgrey-border-color-a4.border {
  border-color: #f5f9fc !important;
}

.lightgrey-bg-b1 {
  background-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-color-b1 {
  color: hsl(210, 62%, 97%) !important;
}

.lightgrey-border-color-b1 {
  border-color: hsl(210, 62%, 97%) !important;
}
.lightgrey-border-color-b1.border {
  border-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-bg-b2 {
  background-color: #ebf2fa !important;
}

.lightgrey-color-b2 {
  color: #ebf2fa !important;
}

.lightgrey-border-color-b2 {
  border-color: #ebf2fa !important;
}
.lightgrey-border-color-b2.border {
  border-color: #ebf2fa !important;
}

.lightgrey-bg-b3 {
  background-color: #edf4fa !important;
}

.lightgrey-color-b3 {
  color: #edf4fa !important;
}

.lightgrey-border-color-b3 {
  border-color: #edf4fa !important;
}
.lightgrey-border-color-b3.border {
  border-color: #edf4fa !important;
}

.lightgrey-bg-b4 {
  background-color: #f2f6fa !important;
}

.lightgrey-color-b4 {
  color: #f2f6fa !important;
}

.lightgrey-border-color-b4 {
  border-color: #f2f6fa !important;
}
.lightgrey-border-color-b4.border {
  border-color: #f2f6fa !important;
}

.lightgrey-bg-c1 {
  background-color: #f7f9fa !important;
}

.lightgrey-color-c1 {
  color: #f7f9fa !important;
}

.lightgrey-border-color-c1 {
  border-color: #f7f9fa !important;
}
.lightgrey-border-color-c1.border {
  border-color: #f7f9fa !important;
}

.lightgrey-bg-c2 {
  background-color: hsl(210, 62%, 97%) !important;
}

.lightgrey-color-c2 {
  color: hsl(210, 62%, 97%) !important;
}

.lightgrey-border-color-c2 {
  border-color: hsl(210, 62%, 97%) !important;
}
.lightgrey-border-color-c2.border {
  border-color: hsl(210, 62%, 97%) !important;
}

:focus:not(.focus--mouse) {
  border-color: #fd7e14 !important;
  box-shadow: 0 0 0 2px #fd7e14 !important;
  outline: none !important;
}

[tabindex="-1"]:focus:not(:focus-visible) {
  box-shadow: none;
}

.focus--mouse:not(.btn) {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

.btn {
  --bs-btn-padding-x: 0.75rem;
  --bs-btn-padding-y: 0.375rem;
  --bs-btn-font-family: ;
  --bs-btn-font-size: 1rem;
  --bs-btn-font-weight: 400;
  --bs-btn-line-height: 1.5;
  --bs-btn-color: #212529;
  --bs-btn-bg: transparent;
  --bs-btn-border-width: 0;
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: 0.375rem;
  --bs-btn-hover-border-color: transparent;
  --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  --bs-btn-disabled-opacity: 0.65;
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  color: var(--bs-btn-color);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background-color: var(--bs-btn-bg);
  box-shadow: var(--bs-btn-box-shadow);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
}
.btn-check + .btn:hover {
  color: var(--bs-btn-color);
  background-color: var(--bs-btn-bg);
  border-color: var(--bs-btn-border-color);
}
.btn:focus-visible {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-box-shadow), var(--bs-btn-focus-box-shadow);
}
.btn-check:focus-visible + .btn {
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-box-shadow), var(--bs-btn-focus-box-shadow);
}
.btn-check:checked + .btn, :not(.btn-check) + .btn:active, .btn:first-child:active, .btn.active, .btn.show {
  color: var(--bs-btn-active-color);
  background-color: var(--bs-btn-active-bg);
  border-color: var(--bs-btn-active-border-color);
  box-shadow: var(--bs-btn-active-shadow);
}
.btn-check:checked + .btn:focus-visible, :not(.btn-check) + .btn:active:focus-visible, .btn:first-child:active:focus-visible, .btn.active:focus-visible, .btn.show:focus-visible {
  box-shadow: var(--bs-btn-active-shadow), var(--bs-btn-focus-box-shadow);
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  color: var(--bs-btn-disabled-color);
  pointer-events: none;
  background-color: var(--bs-btn-disabled-bg);
  border-color: var(--bs-btn-disabled-border-color);
  opacity: var(--bs-btn-disabled-opacity);
  box-shadow: none;
}

.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-primary:focus, .btn-primary.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-primary:hover {
  background-color: rgb(10.53, 89.1, 204.93);
  color: #fff;
  border-color: rgb(9.75, 82.5, 189.75);
}
.btn-primary.disabled, .btn-primary:disabled {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  pointer-events: none;
}
.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: rgb(9.75, 82.5, 189.75);
  border-color: rgb(8.97, 75.9, 174.57);
}
.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-secondary:focus, .btn-secondary.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-secondary:hover {
  background-color: rgb(87.48, 94.77, 101.25);
  color: #fff;
  border-color: rgb(81, 87.75, 93.75);
}
.btn-secondary.disabled, .btn-secondary:disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  pointer-events: none;
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: rgb(81, 87.75, 93.75);
  border-color: rgb(74.52, 80.73, 86.25);
}
.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}

.btn-success {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-success:focus, .btn-success.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-success:hover {
  background-color: rgb(20.25, 109.35, 68.04);
  color: #fff;
  border-color: rgb(18.75, 101.25, 63);
}
.btn-success.disabled, .btn-success:disabled {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
  pointer-events: none;
}
.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active, .show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: rgb(18.75, 101.25, 63);
  border-color: rgb(17.25, 93.15, 57.96);
}
.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}

.btn-info {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-info:focus, .btn-info.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-info:hover {
  background-color: rgb(10.53, 163.62, 194.4);
  color: #000;
  border-color: rgb(9.75, 151.5, 180);
}
.btn-info.disabled, .btn-info:disabled {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
  pointer-events: none;
}
.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {
  color: #000;
  background-color: rgb(9.75, 151.5, 180);
  border-color: rgb(8.97, 139.38, 165.6);
}
.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}

.btn-warning {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-warning:focus, .btn-warning.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-warning:hover {
  background-color: rgb(206.55, 156.33, 5.67);
  color: #000;
  border-color: rgb(191.25, 144.75, 5.25);
}
.btn-warning.disabled, .btn-warning:disabled {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
  pointer-events: none;
}
.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active, .show > .btn-warning.dropdown-toggle {
  color: #000;
  background-color: rgb(191.25, 144.75, 5.25);
  border-color: rgb(175.95, 133.17, 4.83);
}
.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-warning.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-danger:focus, .btn-danger.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-danger:hover {
  background-color: rgb(178.2, 42.93, 55.89);
  color: #fff;
  border-color: rgb(165, 39.75, 51.75);
}
.btn-danger.disabled, .btn-danger:disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  pointer-events: none;
}
.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active, .show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: rgb(165, 39.75, 51.75);
  border-color: rgb(151.8, 36.57, 47.61);
}
.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-danger.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}

.btn-light {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-light:focus, .btn-light.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-light:hover {
  background-color: rgb(210.8, 211.65, 212.5);
  color: #000;
  border-color: rgb(198.4, 199.2, 200);
}
.btn-light.disabled, .btn-light:disabled {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  pointer-events: none;
}
.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active, .show > .btn-light.dropdown-toggle {
  color: #000;
  background-color: rgb(198.4, 199.2, 200);
  border-color: rgb(186, 186.75, 187.5);
}
.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus, .show > .btn-light.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}

.btn-dark {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-dark:focus, .btn-dark.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-dark:hover {
  background-color: rgb(66.3, 69.7, 73.1);
  color: #fff;
  border-color: rgb(55.2, 58.8, 62.4);
}
.btn-dark.disabled, .btn-dark:disabled {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
  pointer-events: none;
}
.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active, .show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: rgb(77.4, 80.6, 83.8);
  border-color: rgb(55.2, 58.8, 62.4);
}
.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-dark.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}

.btn-black {
  color: #fff;
  background-color: #000;
  border-color: #000;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-black:focus, .btn-black.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(0, 0, 0, 0.5);
}
.btn-black:hover {
  background-color: black;
  color: #fff;
  border-color: black;
}
.btn-black.disabled, .btn-black:disabled {
  color: #fff;
  background-color: #000;
  border-color: #000;
  pointer-events: none;
}
.btn-black:not(:disabled):not(.disabled):active, .btn-black:not(:disabled):not(.disabled).active, .show > .btn-black.dropdown-toggle {
  color: #fff;
  background-color: black;
  border-color: black;
}
.btn-black:not(:disabled):not(.disabled):active:focus, .btn-black:not(:disabled):not(.disabled).active:focus, .show > .btn-black.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(0, 0, 0, 0.5);
}

.btn-white {
  color: #000;
  background-color: #fff;
  border-color: #fff;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-white:focus, .btn-white.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}
.btn-white:hover {
  background-color: rgb(206.55, 206.55, 206.55);
  color: #000;
  border-color: rgb(191.25, 191.25, 191.25);
}
.btn-white.disabled, .btn-white:disabled {
  color: #000;
  background-color: #fff;
  border-color: #fff;
  pointer-events: none;
}
.btn-white:not(:disabled):not(.disabled):active, .btn-white:not(:disabled):not(.disabled).active, .show > .btn-white.dropdown-toggle {
  color: #000;
  background-color: rgb(191.25, 191.25, 191.25);
  border-color: rgb(175.95, 175.95, 175.95);
}
.btn-white:not(:disabled):not(.disabled):active:focus, .btn-white:not(:disabled):not(.disabled).active:focus, .show > .btn-white.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}

.btn-100 {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-100:focus, .btn-100.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-100:hover {
  background-color: rgb(200.88, 201.69, 202.5);
  color: #000;
  border-color: rgb(186, 186.75, 187.5);
}
.btn-100.disabled, .btn-100:disabled {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  pointer-events: none;
}
.btn-100:not(:disabled):not(.disabled):active, .btn-100:not(:disabled):not(.disabled).active, .show > .btn-100.dropdown-toggle {
  color: #000;
  background-color: rgb(186, 186.75, 187.5);
  border-color: rgb(171.12, 171.81, 172.5);
}
.btn-100:not(:disabled):not(.disabled):active:focus, .btn-100:not(:disabled):not(.disabled).active:focus, .show > .btn-100.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}

.btn-200 {
  color: #000;
  background-color: #e9ecef;
  border-color: #e9ecef;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-200:focus, .btn-200.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(233, 236, 239, 0.5);
}
.btn-200:hover {
  background-color: rgb(188.73, 191.16, 193.59);
  color: #000;
  border-color: rgb(174.75, 177, 179.25);
}
.btn-200.disabled, .btn-200:disabled {
  color: #000;
  background-color: #e9ecef;
  border-color: #e9ecef;
  pointer-events: none;
}
.btn-200:not(:disabled):not(.disabled):active, .btn-200:not(:disabled):not(.disabled).active, .show > .btn-200.dropdown-toggle {
  color: #000;
  background-color: rgb(174.75, 177, 179.25);
  border-color: rgb(160.77, 162.84, 164.91);
}
.btn-200:not(:disabled):not(.disabled):active:focus, .btn-200:not(:disabled):not(.disabled).active:focus, .show > .btn-200.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(233, 236, 239, 0.5);
}

.btn-300 {
  color: #000;
  background-color: #dee2e6;
  border-color: #dee2e6;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-300:focus, .btn-300.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(222, 226, 230, 0.5);
}
.btn-300:hover {
  background-color: rgb(179.82, 183.06, 186.3);
  color: #000;
  border-color: rgb(166.5, 169.5, 172.5);
}
.btn-300.disabled, .btn-300:disabled {
  color: #000;
  background-color: #dee2e6;
  border-color: #dee2e6;
  pointer-events: none;
}
.btn-300:not(:disabled):not(.disabled):active, .btn-300:not(:disabled):not(.disabled).active, .show > .btn-300.dropdown-toggle {
  color: #000;
  background-color: rgb(166.5, 169.5, 172.5);
  border-color: rgb(153.18, 155.94, 158.7);
}
.btn-300:not(:disabled):not(.disabled):active:focus, .btn-300:not(:disabled):not(.disabled).active:focus, .show > .btn-300.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(222, 226, 230, 0.5);
}

.btn-400 {
  color: #000;
  background-color: #ced4da;
  border-color: #ced4da;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-400:focus, .btn-400.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(206, 212, 218, 0.5);
}
.btn-400:hover {
  background-color: rgb(166.86, 171.72, 176.58);
  color: #000;
  border-color: rgb(154.5, 159, 163.5);
}
.btn-400.disabled, .btn-400:disabled {
  color: #000;
  background-color: #ced4da;
  border-color: #ced4da;
  pointer-events: none;
}
.btn-400:not(:disabled):not(.disabled):active, .btn-400:not(:disabled):not(.disabled).active, .show > .btn-400.dropdown-toggle {
  color: #000;
  background-color: rgb(154.5, 159, 163.5);
  border-color: rgb(142.14, 146.28, 150.42);
}
.btn-400:not(:disabled):not(.disabled):active:focus, .btn-400:not(:disabled):not(.disabled).active:focus, .show > .btn-400.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(206, 212, 218, 0.5);
}

.btn-500 {
  color: #000;
  background-color: #adb5bd;
  border-color: #adb5bd;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-500:focus, .btn-500.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(173, 181, 189, 0.5);
}
.btn-500:hover {
  background-color: rgb(140.13, 146.61, 153.09);
  color: #000;
  border-color: rgb(129.75, 135.75, 141.75);
}
.btn-500.disabled, .btn-500:disabled {
  color: #000;
  background-color: #adb5bd;
  border-color: #adb5bd;
  pointer-events: none;
}
.btn-500:not(:disabled):not(.disabled):active, .btn-500:not(:disabled):not(.disabled).active, .show > .btn-500.dropdown-toggle {
  color: #000;
  background-color: rgb(129.75, 135.75, 141.75);
  border-color: rgb(119.37, 124.89, 130.41);
}
.btn-500:not(:disabled):not(.disabled):active:focus, .btn-500:not(:disabled):not(.disabled).active:focus, .show > .btn-500.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(173, 181, 189, 0.5);
}

.btn-600 {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-600:focus, .btn-600.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-600:hover {
  background-color: rgb(87.48, 94.77, 101.25);
  color: #fff;
  border-color: rgb(81, 87.75, 93.75);
}
.btn-600.disabled, .btn-600:disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  pointer-events: none;
}
.btn-600:not(:disabled):not(.disabled):active, .btn-600:not(:disabled):not(.disabled).active, .show > .btn-600.dropdown-toggle {
  color: #fff;
  background-color: rgb(81, 87.75, 93.75);
  border-color: rgb(74.52, 80.73, 86.25);
}
.btn-600:not(:disabled):not(.disabled):active:focus, .btn-600:not(:disabled):not(.disabled).active:focus, .show > .btn-600.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}

.btn-700 {
  color: #fff;
  background-color: #495057;
  border-color: #495057;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-700:focus, .btn-700.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(73, 80, 87, 0.5);
}
.btn-700:hover {
  background-color: rgb(59.13, 64.8, 70.47);
  color: #fff;
  border-color: rgb(54.75, 60, 65.25);
}
.btn-700.disabled, .btn-700:disabled {
  color: #fff;
  background-color: #495057;
  border-color: #495057;
  pointer-events: none;
}
.btn-700:not(:disabled):not(.disabled):active, .btn-700:not(:disabled):not(.disabled).active, .show > .btn-700.dropdown-toggle {
  color: #fff;
  background-color: rgb(54.75, 60, 65.25);
  border-color: rgb(50.37, 55.2, 60.03);
}
.btn-700:not(:disabled):not(.disabled):active:focus, .btn-700:not(:disabled):not(.disabled).active:focus, .show > .btn-700.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(73, 80, 87, 0.5);
}

.btn-800 {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-800:focus, .btn-800.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(52, 58, 64, 0.5);
}
.btn-800:hover {
  background-color: rgb(42.12, 46.98, 51.84);
  color: #fff;
  border-color: rgb(39, 43.5, 48);
}
.btn-800.disabled, .btn-800:disabled {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
  pointer-events: none;
}
.btn-800:not(:disabled):not(.disabled):active, .btn-800:not(:disabled):not(.disabled).active, .show > .btn-800.dropdown-toggle {
  color: #fff;
  background-color: rgb(39, 43.5, 48);
  border-color: rgb(35.88, 40.02, 44.16);
}
.btn-800:not(:disabled):not(.disabled):active:focus, .btn-800:not(:disabled):not(.disabled).active:focus, .show > .btn-800.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(52, 58, 64, 0.5);
}

.btn-900 {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
}
.btn-900:focus, .btn-900.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-900:hover {
  background-color: rgb(26.73, 29.97, 33.21);
  color: #fff;
  border-color: rgb(24.75, 27.75, 30.75);
}
.btn-900.disabled, .btn-900:disabled {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
  pointer-events: none;
}
.btn-900:not(:disabled):not(.disabled):active, .btn-900:not(:disabled):not(.disabled).active, .show > .btn-900.dropdown-toggle {
  color: #fff;
  background-color: rgb(24.75, 27.75, 30.75);
  border-color: rgb(22.77, 25.53, 28.29);
}
.btn-900:not(:disabled):not(.disabled):active:focus, .btn-900:not(:disabled):not(.disabled).active:focus, .show > .btn-900.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}

.btn-outline-primary {
  color: #0d6efd;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #0d6efd;
}
.btn-outline-primary:hover {
  color: rgb(35.64, 103.5885, 203.76);
  box-shadow: inset 0 0 0 2px rgb(35.64, 103.5885, 203.76);
}
.btn-outline-primary:focus, .btn-outline-primary.focus {
  box-shadow: inset 0 0 0 1px #0d6efd, 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-outline-primary.disabled, .btn-outline-primary:disabled {
  color: #0d6efd;
  background-color: transparent;
}
.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle {
  color: #0d6efd;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #0d6efd;
}
.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}

.btn-outline-secondary {
  color: #6c757d;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #6c757d;
}
.btn-outline-secondary:hover {
  color: rgb(104.85, 104.85, 104.85);
  box-shadow: inset 0 0 0 2px rgb(104.85, 104.85, 104.85);
}
.btn-outline-secondary:focus, .btn-outline-secondary.focus {
  box-shadow: inset 0 0 0 1px #6c757d, 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
  color: #6c757d;
  background-color: transparent;
}
.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .show > .btn-outline-secondary.dropdown-toggle {
  color: #6c757d;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #6c757d;
}
.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}

.btn-outline-success {
  color: #198754;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #198754;
}
.btn-outline-success:hover {
  color: rgb(36.9, 107.1, 74.5527272727);
  box-shadow: inset 0 0 0 2px rgb(36.9, 107.1, 74.5527272727);
}
.btn-outline-success:focus, .btn-outline-success.focus {
  box-shadow: inset 0 0 0 1px #198754, 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-outline-success.disabled, .btn-outline-success:disabled {
  color: #198754;
  background-color: transparent;
}
.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .show > .btn-outline-success.dropdown-toggle {
  color: #198754;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #198754;
}
.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-success.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}

.btn-outline-info {
  color: #0dcaf0;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #0dcaf0;
}
.btn-outline-info:hover {
  color: rgb(34.47, 166.6534361233, 193.23);
  box-shadow: inset 0 0 0 2px rgb(34.47, 166.6534361233, 193.23);
}
.btn-outline-info:focus, .btn-outline-info.focus {
  box-shadow: inset 0 0 0 1px #0dcaf0, 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-outline-info.disabled, .btn-outline-info:disabled {
  color: #0dcaf0;
  background-color: transparent;
}
.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle {
  color: #0dcaf0;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #0dcaf0;
}
.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-info.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}

.btn-outline-warning {
  color: #ffc107;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #ffc107;
}
.btn-outline-warning:hover {
  color: rgb(205.92, 161.91, 29.88);
  box-shadow: inset 0 0 0 2px rgb(205.92, 161.91, 29.88);
}
.btn-outline-warning:focus, .btn-outline-warning.focus {
  box-shadow: inset 0 0 0 1px #ffc107, 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-outline-warning.disabled, .btn-outline-warning:disabled {
  color: #ffc107;
  background-color: transparent;
}
.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .show > .btn-outline-warning.dropdown-toggle {
  color: #ffc107;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #ffc107;
}
.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-warning.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}

.btn-outline-danger {
  color: #dc3545;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #dc3545;
}
.btn-outline-danger:hover {
  color: rgb(173.43, 72.27, 81.9619760479);
  box-shadow: inset 0 0 0 2px rgb(173.43, 72.27, 81.9619760479);
}
.btn-outline-danger:focus, .btn-outline-danger.focus {
  box-shadow: inset 0 0 0 1px #dc3545, 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-outline-danger.disabled, .btn-outline-danger:disabled {
  color: #dc3545;
  background-color: transparent;
}
.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {
  color: #dc3545;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #dc3545;
}
.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-danger.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}

.btn-outline-light {
  color: #f8f9fa;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #f8f9fa;
}
.btn-outline-light:hover {
  color: rgb(224.1, 224.1, 224.1);
  box-shadow: inset 0 0 0 2px rgb(224.1, 224.1, 224.1);
}
.btn-outline-light:focus, .btn-outline-light.focus {
  box-shadow: inset 0 0 0 1px #f8f9fa, 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-outline-light.disabled, .btn-outline-light:disabled {
  color: #f8f9fa;
  background-color: transparent;
}
.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active, .show > .btn-outline-light.dropdown-toggle {
  color: #f8f9fa;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #f8f9fa;
}
.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-light.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}

.btn-outline-dark {
  color: #212529;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #212529;
}
.btn-outline-dark:hover {
  color: rgb(33.3, 33.3, 33.3);
  box-shadow: inset 0 0 0 2px rgb(33.3, 33.3, 33.3);
}
.btn-outline-dark:focus, .btn-outline-dark.focus {
  box-shadow: inset 0 0 0 1px #212529, 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-outline-dark.disabled, .btn-outline-dark:disabled {
  color: #212529;
  background-color: transparent;
}
.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .show > .btn-outline-dark.dropdown-toggle {
  color: #212529;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #212529;
}
.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-dark.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}

.btn-outline-black {
  color: #000;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #000;
}
.btn-outline-black:hover {
  color: black;
  box-shadow: inset 0 0 0 2px black;
}
.btn-outline-black:focus, .btn-outline-black.focus {
  box-shadow: inset 0 0 0 1px #000, 0 0 0 0.25rem rgba(0, 0, 0, 0.5);
}
.btn-outline-black.disabled, .btn-outline-black:disabled {
  color: #000;
  background-color: transparent;
}
.btn-outline-black:not(:disabled):not(.disabled):active, .btn-outline-black:not(:disabled):not(.disabled).active, .show > .btn-outline-black.dropdown-toggle {
  color: #000;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #000;
}
.btn-outline-black:not(:disabled):not(.disabled):active:focus, .btn-outline-black:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-black.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(0, 0, 0, 0.5);
}

.btn-outline-white {
  color: #fff;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #fff;
}
.btn-outline-white:hover {
  color: rgb(229.5, 229.5, 229.5);
  box-shadow: inset 0 0 0 2px rgb(229.5, 229.5, 229.5);
}
.btn-outline-white:focus, .btn-outline-white.focus {
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}
.btn-outline-white.disabled, .btn-outline-white:disabled {
  color: #fff;
  background-color: transparent;
}
.btn-outline-white:not(:disabled):not(.disabled):active, .btn-outline-white:not(:disabled):not(.disabled).active, .show > .btn-outline-white.dropdown-toggle {
  color: #fff;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #fff;
}
.btn-outline-white:not(:disabled):not(.disabled):active:focus, .btn-outline-white:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-white.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}

.btn-outline-100 {
  color: #f8f9fa;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #f8f9fa;
}
.btn-outline-100:hover {
  color: rgb(224.1, 224.1, 224.1);
  box-shadow: inset 0 0 0 2px rgb(224.1, 224.1, 224.1);
}
.btn-outline-100:focus, .btn-outline-100.focus {
  box-shadow: inset 0 0 0 1px #f8f9fa, 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-outline-100.disabled, .btn-outline-100:disabled {
  color: #f8f9fa;
  background-color: transparent;
}
.btn-outline-100:not(:disabled):not(.disabled):active, .btn-outline-100:not(:disabled):not(.disabled).active, .show > .btn-outline-100.dropdown-toggle {
  color: #f8f9fa;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #f8f9fa;
}
.btn-outline-100:not(:disabled):not(.disabled):active:focus, .btn-outline-100:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-100.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}

.btn-outline-200 {
  color: #e9ecef;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #e9ecef;
}
.btn-outline-200:hover {
  color: rgb(212.4, 212.4, 212.4);
  box-shadow: inset 0 0 0 2px rgb(212.4, 212.4, 212.4);
}
.btn-outline-200:focus, .btn-outline-200.focus {
  box-shadow: inset 0 0 0 1px #e9ecef, 0 0 0 0.25rem rgba(233, 236, 239, 0.5);
}
.btn-outline-200.disabled, .btn-outline-200:disabled {
  color: #e9ecef;
  background-color: transparent;
}
.btn-outline-200:not(:disabled):not(.disabled):active, .btn-outline-200:not(:disabled):not(.disabled).active, .show > .btn-outline-200.dropdown-toggle {
  color: #e9ecef;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #e9ecef;
}
.btn-outline-200:not(:disabled):not(.disabled):active:focus, .btn-outline-200:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-200.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(233, 236, 239, 0.5);
}

.btn-outline-300 {
  color: #dee2e6;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #dee2e6;
}
.btn-outline-300:hover {
  color: rgb(203.4, 203.4, 203.4);
  box-shadow: inset 0 0 0 2px rgb(203.4, 203.4, 203.4);
}
.btn-outline-300:focus, .btn-outline-300.focus {
  box-shadow: inset 0 0 0 1px #dee2e6, 0 0 0 0.25rem rgba(222, 226, 230, 0.5);
}
.btn-outline-300.disabled, .btn-outline-300:disabled {
  color: #dee2e6;
  background-color: transparent;
}
.btn-outline-300:not(:disabled):not(.disabled):active, .btn-outline-300:not(:disabled):not(.disabled).active, .show > .btn-outline-300.dropdown-toggle {
  color: #dee2e6;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #dee2e6;
}
.btn-outline-300:not(:disabled):not(.disabled):active:focus, .btn-outline-300:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-300.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(222, 226, 230, 0.5);
}

.btn-outline-400 {
  color: #ced4da;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #ced4da;
}
.btn-outline-400:hover {
  color: rgb(190.8, 190.8, 190.8);
  box-shadow: inset 0 0 0 2px rgb(190.8, 190.8, 190.8);
}
.btn-outline-400:focus, .btn-outline-400.focus {
  box-shadow: inset 0 0 0 1px #ced4da, 0 0 0 0.25rem rgba(206, 212, 218, 0.5);
}
.btn-outline-400.disabled, .btn-outline-400:disabled {
  color: #ced4da;
  background-color: transparent;
}
.btn-outline-400:not(:disabled):not(.disabled):active, .btn-outline-400:not(:disabled):not(.disabled).active, .show > .btn-outline-400.dropdown-toggle {
  color: #ced4da;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #ced4da;
}
.btn-outline-400:not(:disabled):not(.disabled):active:focus, .btn-outline-400:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-400.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(206, 212, 218, 0.5);
}

.btn-outline-500 {
  color: #adb5bd;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #adb5bd;
}
.btn-outline-500:hover {
  color: rgb(162.9, 162.9, 162.9);
  box-shadow: inset 0 0 0 2px rgb(162.9, 162.9, 162.9);
}
.btn-outline-500:focus, .btn-outline-500.focus {
  box-shadow: inset 0 0 0 1px #adb5bd, 0 0 0 0.25rem rgba(173, 181, 189, 0.5);
}
.btn-outline-500.disabled, .btn-outline-500:disabled {
  color: #adb5bd;
  background-color: transparent;
}
.btn-outline-500:not(:disabled):not(.disabled):active, .btn-outline-500:not(:disabled):not(.disabled).active, .show > .btn-outline-500.dropdown-toggle {
  color: #adb5bd;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #adb5bd;
}
.btn-outline-500:not(:disabled):not(.disabled):active:focus, .btn-outline-500:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-500.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(173, 181, 189, 0.5);
}

.btn-outline-600 {
  color: #6c757d;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #6c757d;
}
.btn-outline-600:hover {
  color: rgb(104.85, 104.85, 104.85);
  box-shadow: inset 0 0 0 2px rgb(104.85, 104.85, 104.85);
}
.btn-outline-600:focus, .btn-outline-600.focus {
  box-shadow: inset 0 0 0 1px #6c757d, 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-outline-600.disabled, .btn-outline-600:disabled {
  color: #6c757d;
  background-color: transparent;
}
.btn-outline-600:not(:disabled):not(.disabled):active, .btn-outline-600:not(:disabled):not(.disabled).active, .show > .btn-outline-600.dropdown-toggle {
  color: #6c757d;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #6c757d;
}
.btn-outline-600:not(:disabled):not(.disabled):active:focus, .btn-outline-600:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-600.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}

.btn-outline-700 {
  color: #495057;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #495057;
}
.btn-outline-700:hover {
  color: #484848;
  box-shadow: inset 0 0 0 2px #484848;
}
.btn-outline-700:focus, .btn-outline-700.focus {
  box-shadow: inset 0 0 0 1px #495057, 0 0 0 0.25rem rgba(73, 80, 87, 0.5);
}
.btn-outline-700.disabled, .btn-outline-700:disabled {
  color: #495057;
  background-color: transparent;
}
.btn-outline-700:not(:disabled):not(.disabled):active, .btn-outline-700:not(:disabled):not(.disabled).active, .show > .btn-outline-700.dropdown-toggle {
  color: #495057;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #495057;
}
.btn-outline-700:not(:disabled):not(.disabled):active:focus, .btn-outline-700:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-700.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(73, 80, 87, 0.5);
}

.btn-outline-800 {
  color: #343a40;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #343a40;
}
.btn-outline-800:hover {
  color: rgb(52.2, 52.2, 52.2);
  box-shadow: inset 0 0 0 2px rgb(52.2, 52.2, 52.2);
}
.btn-outline-800:focus, .btn-outline-800.focus {
  box-shadow: inset 0 0 0 1px #343a40, 0 0 0 0.25rem rgba(52, 58, 64, 0.5);
}
.btn-outline-800.disabled, .btn-outline-800:disabled {
  color: #343a40;
  background-color: transparent;
}
.btn-outline-800:not(:disabled):not(.disabled):active, .btn-outline-800:not(:disabled):not(.disabled).active, .show > .btn-outline-800.dropdown-toggle {
  color: #343a40;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #343a40;
}
.btn-outline-800:not(:disabled):not(.disabled):active:focus, .btn-outline-800:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-800.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(52, 58, 64, 0.5);
}

.btn-outline-900 {
  color: #212529;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #212529;
}
.btn-outline-900:hover {
  color: rgb(33.3, 33.3, 33.3);
  box-shadow: inset 0 0 0 2px rgb(33.3, 33.3, 33.3);
}
.btn-outline-900:focus, .btn-outline-900.focus {
  box-shadow: inset 0 0 0 1px #212529, 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-outline-900.disabled, .btn-outline-900:disabled {
  color: #212529;
  background-color: transparent;
}
.btn-outline-900:not(:disabled):not(.disabled):active, .btn-outline-900:not(:disabled):not(.disabled).active, .show > .btn-outline-900.dropdown-toggle {
  color: #212529;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #212529;
}
.btn-outline-900:not(:disabled):not(.disabled):active:focus, .btn-outline-900:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-900.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}

.btn-link {
  --bs-btn-font-weight: 400;
  --bs-btn-color: var(--bs-link-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-color: transparent;
  --bs-btn-hover-color: var(--bs-link-hover-color);
  --bs-btn-hover-border-color: transparent;
  --bs-btn-active-color: var(--bs-link-hover-color);
  --bs-btn-active-border-color: transparent;
  --bs-btn-disabled-color: #6c757d;
  --bs-btn-disabled-border-color: transparent;
  --bs-btn-box-shadow: none;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  text-decoration: underline;
}
.btn-link:focus-visible {
  color: var(--bs-btn-color);
}
.btn-link:hover {
  color: var(--bs-btn-hover-color);
}

.btn-lg {
  --bs-btn-padding-y: 0.5rem;
  --bs-btn-padding-x: 1rem;
  --bs-btn-font-size: 1.25rem;
  --bs-btn-border-radius: 0.5rem;
}

.btn-sm {
  --bs-btn-padding-y: 0.25rem;
  --bs-btn-padding-x: 0.5rem;
  --bs-btn-font-size: 0.875rem;
  --bs-btn-border-radius: 0.25rem;
}

.btn {
  --bs-btn-color: #06c;
  --bs-btn-hover-color: #004d99;
  --bs-btn-active-color: #003366;
  padding: 12px 24px;
  font-size: 1rem;
  white-space: initial;
  text-decoration: none;
  box-shadow: none;
}

.btn-me {
  margin-right: 12px !important;
}

.btn-xs,
.btn-sm,
.btn-lg {
  border-radius: 0.375rem;
}

.btn-xs {
  padding: 12px 16px;
  font-size: 0.875rem;
  line-height: 1rem;
}

.btn-sm {
  padding: 12px 24px;
  font-size: 0.875rem;
  line-height: 1.5rem;
}

.btn-lg {
  padding: 16px 24px;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.btn-progress {
  position: relative;
}

.btn-close {
  background-color: transparent;
  position: relative;
}
.btn-close .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn-icon {
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.btn-icon .rounded-icon {
  width: 1.5em;
  height: 1.5em;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.btn-icon .rounded-icon .icon {
  margin-right: 0;
}
.btn-icon .rounded-icon.rounded-primary {
  background-color: #0d6efd;
}
.btn-icon .rounded-icon.rounded-secondary {
  background-color: #6c757d;
}
.btn-icon .rounded-icon.rounded-success {
  background-color: #198754;
}
.btn-icon .rounded-icon.rounded-info {
  background-color: #0dcaf0;
}
.btn-icon .rounded-icon.rounded-warning {
  background-color: #ffc107;
}
.btn-icon .rounded-icon.rounded-danger {
  background-color: #dc3545;
}
.btn-icon .rounded-icon.rounded-light {
  background-color: #f8f9fa;
}
.btn-icon .rounded-icon.rounded-dark {
  background-color: #212529;
}
.btn-icon .rounded-icon.rounded-black {
  background-color: #000;
}
.btn-icon .rounded-icon.rounded-white {
  background-color: #fff;
}
.btn-icon .rounded-icon.rounded-100 {
  background-color: #f8f9fa;
}
.btn-icon .rounded-icon.rounded-200 {
  background-color: #e9ecef;
}
.btn-icon .rounded-icon.rounded-300 {
  background-color: #dee2e6;
}
.btn-icon .rounded-icon.rounded-400 {
  background-color: #ced4da;
}
.btn-icon .rounded-icon.rounded-500 {
  background-color: #adb5bd;
}
.btn-icon .rounded-icon.rounded-600 {
  background-color: #6c757d;
}
.btn-icon .rounded-icon.rounded-700 {
  background-color: #495057;
}
.btn-icon .rounded-icon.rounded-800 {
  background-color: #343a40;
}
.btn-icon .rounded-icon.rounded-900 {
  background-color: #212529;
}
.btn-icon .rounded-icon + * {
  margin-left: 0.5em;
}
.btn-icon .icon {
  border: none;
  width: 1.2em;
  height: 1.2em;
}
.btn-icon .icon + * {
  margin-left: 0.25em;
}

.btn-full {
  border: none;
  box-shadow: none;
  line-height: 1.555;
  border-radius: 0;
  align-self: stretch;
  width: inherit;
  margin-top: -7.5px;
  margin-bottom: -7.5px;
  margin-right: -7.5px;
  padding-left: 8px;
  padding-right: 8px;
}
.btn-full:hover {
  text-decoration: none !important;
}
@media (min-width: 576px) {
  .btn-full {
    padding: 16px;
  }
}
@media (min-width: 992px) {
  .btn-full {
    padding: 12px 24px !important;
    margin: 0;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.btn:disabled:hover,
.btn.disabled:hover {
  cursor: not-allowed;
}

.btn-primary:disabled.btn-progress, .btn-primary.disabled.btn-progress {
  background-color: hsl(210, 76%, 67%);
  border-color: hsl(210, 76%, 67%);
  color: #fff;
  opacity: 1;
}

.btn-secondary:disabled.btn-progress, .btn-secondary.disabled.btn-progress {
  background-color: hsl(210, 12%, 52%);
  border-color: hsl(210, 12%, 52%);
  opacity: 1;
}

.btn-outline-primary {
  box-shadow: inset 0 0 0 2px #0d6efd;
}
.btn-outline-primary.disabled {
  box-shadow: inset 0 0 0 2px rgb(35.64, 103.5885, 203.76);
}
.btn-outline-secondary {
  box-shadow: inset 0 0 0 2px #6c757d;
}
.btn-outline-secondary.disabled, .btn-outline-secondary:hover, .btn-outline-secondary:active {
  box-shadow: inset 0 0 0 2px rgb(104.85, 104.85, 104.85);
}
.btn-outline-success {
  box-shadow: inset 0 0 0 2px #198754;
}
.btn-outline-success.disabled, .btn-outline-success:hover, .btn-outline-success:active {
  box-shadow: inset 0 0 0 2px rgb(36.9, 107.1, 74.5527272727);
}
.btn-outline-warning {
  box-shadow: inset 0 0 0 2px hsl(36, 100%, 30%);
}
.btn-outline-warning.disabled, .btn-outline-warning:hover, .btn-outline-warning:active {
  box-shadow: inset 0 0 0 2px rgb(123.93, 79.866, 13.77);
}
.btn-outline-danger {
  box-shadow: inset 0 0 0 2px #dc3545;
}
.btn-outline-danger.disabled, .btn-outline-danger:hover, .btn-outline-danger:active {
  box-shadow: inset 0 0 0 2px rgb(173.43, 72.27, 81.9619760479);
}

.bg-dark .btn-link {
  color: #fff;
}
.bg-dark .btn-primary {
  color: #000;
  background-color: #fff;
  border-color: #0d6efd;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  color: #0d6efd;
}
.bg-dark .btn-primary:focus, .bg-dark .btn-primary.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.bg-dark .btn-primary:hover {
  background-color: white;
  color: #000;
  border-color: rgb(11.7, 99, 227.7);
}
.bg-dark .btn-primary.disabled, .bg-dark .btn-primary:disabled {
  color: #000;
  background-color: #fff;
  border-color: #0d6efd;
  pointer-events: none;
}
.bg-dark .btn-primary:not(:disabled):not(.disabled):active, .bg-dark .btn-primary:not(:disabled):not(.disabled).active, .show > .bg-dark .btn-primary.dropdown-toggle {
  color: #000;
  background-color: white;
  border-color: rgb(11.375, 96.25, 221.375);
}
.bg-dark .btn-primary:not(:disabled):not(.disabled):active:focus, .bg-dark .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .bg-dark .btn-primary.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.bg-dark .btn-primary.disabled, .bg-dark .btn-primary:disabled {
  color: rgb(11.7, 99, 227.7);
}
.bg-dark .btn-outline-primary {
  color: #fff;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #fff;
  box-shadow: inset 0 0 0 2px #fff;
}
.bg-dark .btn-outline-primary:hover {
  color: rgb(229.5, 229.5, 229.5);
  box-shadow: inset 0 0 0 2px rgb(229.5, 229.5, 229.5);
}
.bg-dark .btn-outline-primary:focus, .bg-dark .btn-outline-primary.focus {
  box-shadow: inset 0 0 0 1px rgb(229.5, 229.5, 229.5), 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}
.bg-dark .btn-outline-primary.disabled, .bg-dark .btn-outline-primary:disabled {
  color: #fff;
  background-color: transparent;
}
.bg-dark .btn-outline-primary:not(:disabled):not(.disabled):active, .bg-dark .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .bg-dark .btn-outline-primary.dropdown-toggle {
  color: rgb(229.5, 229.5, 229.5);
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px rgb(229.5, 229.5, 229.5);
}
.bg-dark .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .bg-dark .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .bg-dark .btn-outline-primary.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}
.bg-dark .btn-outline-primary:hover {
  box-shadow: inset 0 0 0 2px rgb(229.5, 229.5, 229.5);
}
.bg-dark .btn-outline-primary:focus, .bg-dark .btn-outline-primary.focus {
  box-shadow: inset 0 0 0 2px #fff, 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}
.bg-dark .btn-outline-primary:not(:disabled):not(.disabled).active, .bg-dark .btn-outline-primary:not(:disabled):not(.disabled):active, .show > .bg-dark .btn-outline-primary.dropdown-toggle {
  box-shadow: inset 0 0 0 2px #fff;
}
.bg-dark .btn-secondary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #fff;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  color: #fff;
}
.bg-dark .btn-secondary:focus, .bg-dark .btn-secondary.focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}
.bg-dark .btn-secondary:hover {
  background-color: rgb(31.15, 120.875, 253.15);
  color: #fff;
  border-color: rgb(229.5, 229.5, 229.5);
}
.bg-dark .btn-secondary.disabled, .bg-dark .btn-secondary:disabled {
  color: #fff;
  background-color: #0d6efd;
  border-color: #fff;
  pointer-events: none;
}
.bg-dark .btn-secondary:not(:disabled):not(.disabled):active, .bg-dark .btn-secondary:not(:disabled):not(.disabled).active, .show > .bg-dark .btn-secondary.dropdown-toggle {
  color: #000;
  background-color: rgb(37.2, 124.5, 253.2);
  border-color: rgb(223.125, 223.125, 223.125);
}
.bg-dark .btn-secondary:not(:disabled):not(.disabled):active:focus, .bg-dark .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .bg-dark .btn-secondary.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}
.bg-dark .btn-outline-secondary {
  color: #fff;
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px #fff;
}
.bg-dark .btn-outline-secondary:hover {
  color: rgb(229.5, 229.5, 229.5);
  box-shadow: inset 0 0 0 2px rgb(229.5, 229.5, 229.5);
}
.bg-dark .btn-outline-secondary:focus, .bg-dark .btn-outline-secondary.focus {
  box-shadow: inset 0 0 0 1px rgb(229.5, 229.5, 229.5), 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}
.bg-dark .btn-outline-secondary.disabled, .bg-dark .btn-outline-secondary:disabled {
  color: #fff;
  background-color: transparent;
}
.bg-dark .btn-outline-secondary:not(:disabled):not(.disabled):active, .bg-dark .btn-outline-secondary:not(:disabled):not(.disabled).active, .show > .bg-dark .btn-outline-secondary.dropdown-toggle {
  color: rgb(229.5, 229.5, 229.5);
  background-color: transparent;
  background-image: none;
  box-shadow: inset 0 0 0 2px rgb(229.5, 229.5, 229.5);
}
.bg-dark .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .bg-dark .btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .show > .bg-dark .btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}
.bg-dark .btn-outline-secondary:focus, .bg-dark .btn-outline-secondary.focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}
.bg-dark .btn-outline-secondary:not(:disabled):not(.disabled).active, .bg-dark .btn-outline-secondary:not(:disabled):not(.disabled):active, .show > .bg-dark .btn-outline-secondary.dropdown-toggle {
  box-shadow: none;
}`;class To extends no{static styles=Uo;static get formAssociated(){return!0}static properties={type:{type:String},variant:{type:String},_buttonClasses:{type:String},outline:{type:Boolean},disabled:{type:Boolean},value:{type:String,reflect:!0}};constructor(){super(),this.type="button",this.variant="",this.outline=!1,this.disabled=!1,this.value=void 0,this.internals=this.attachInternals()}firstUpdated(){this._buttonClasses=this._composeClass("btn",this.outline?"":""!==this.variant?`btn-${this.variant}`:"",this.outline?`${this.outline?"btn-outline-":""}${this.variant}`:"",this.disabled?"disabled":"");const{internals:{form:o}}=this;"submit"===this.type&&this.renderRoot.querySelector("button").addEventListener("click",(()=>o.requestSubmit()))}updated(){this._buttonClasses=this._composeClass("btn",this.outline?"":""!==this.variant?`btn-${this.variant}`:"",this.outline?`${this.outline?"btn-outline-":""}${this.variant}`:"",this.disabled?"disabled":"")}render(){return D`
      <button
        type="${this.type}"
        class="${this._buttonClasses}"
        @click="${_o((()=>{}))}"
        .value="${_o(this.value?this.value:void 0)}"
      >
        <slot></slot>
      </button>
    `}}customElements.define("bsi-button",To);export{zo as BackToTop,To as Button,bo as Icon,Co as Input};
