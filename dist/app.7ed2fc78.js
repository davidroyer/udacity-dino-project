parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"F7ib":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=e=>{const s=e.species.toLowerCase();return`\n  <h2 class="text-3xl">${(e=>"human"==e.species?`${e.name}`:e.species)(e)}</h2>\n  <img src="data/images/${s}.png" alt="${e.species} image"/>\n  ${function(e){return"human"!==e.species?`<p>${e.fact}</p>`:""}(e)}\n  `};var s=e;exports.default=s;
},{}],"i1Q6":[function(require,module,exports) {

var e=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e);
},{}],"zKeE":[function(require,module,exports) {
var e=module.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e);
},{}],"g31e":[function(require,module,exports) {
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};
},{}],"zRh1":[function(require,module,exports) {
var r=require("./_a-function");module.exports=function(n,t,u){if(r(n),void 0===t)return n;switch(u){case 1:return function(r){return n.call(t,r)};case 2:return function(r,u){return n.call(t,r,u)};case 3:return function(r,u,e){return n.call(t,r,u,e)}}return function(){return n.apply(t,arguments)}};
},{"./_a-function":"g31e"}],"BxvP":[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],"zotD":[function(require,module,exports) {
var r=require("./_is-object");module.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e};
},{"./_is-object":"BxvP"}],"wLcK":[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(t){return!0}};
},{}],"MLNE":[function(require,module,exports) {
module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"./_fails":"wLcK"}],"kxqa":[function(require,module,exports) {
var e=require("./_is-object"),r=require("./_global").document,t=e(r)&&e(r.createElement);module.exports=function(e){return t?r.createElement(e):{}};
},{"./_is-object":"BxvP","./_global":"i1Q6"}],"R6c1":[function(require,module,exports) {
module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});
},{"./_descriptors":"MLNE","./_fails":"wLcK","./_dom-create":"kxqa"}],"EKwp":[function(require,module,exports) {
var t=require("./_is-object");module.exports=function(r,e){if(!t(r))return r;var o,n;if(e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;if("function"==typeof(o=r.valueOf)&&!t(n=o.call(r)))return n;if(!e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;throw TypeError("Can't convert object to primitive value")};
},{"./_is-object":"BxvP"}],"Gfzd":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_ie8-dom-define"),t=require("./_to-primitive"),i=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(o,n,u){if(e(o),n=t(n,!0),e(u),r)try{return i(o,n,u)}catch(c){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(o[n]=u.value),o};
},{"./_an-object":"zotD","./_ie8-dom-define":"R6c1","./_to-primitive":"EKwp","./_descriptors":"MLNE"}],"WCHM":[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],"akPY":[function(require,module,exports) {
var r=require("./_object-dp"),e=require("./_property-desc");module.exports=require("./_descriptors")?function(t,u,o){return r.f(t,u,e(1,o))}:function(r,e,t){return r[e]=t,r};
},{"./_object-dp":"Gfzd","./_property-desc":"WCHM","./_descriptors":"MLNE"}],"yS17":[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],"vSO4":[function(require,module,exports) {

var e=require("./_global"),r=require("./_core"),n=require("./_ctx"),t=require("./_hide"),i=require("./_has"),u="prototype",o=function(c,a,f){var l,s,p,h=c&o.F,v=c&o.G,q=c&o.S,w=c&o.P,_=c&o.B,y=c&o.W,d=v?r:r[a]||(r[a]={}),F=d[u],g=v?e:q?e[a]:(e[a]||{})[u];for(l in v&&(f=a),f)(s=!h&&g&&void 0!==g[l])&&i(d,l)||(p=s?g[l]:f[l],d[l]=v&&"function"!=typeof g[l]?f[l]:_&&s?n(p,e):y&&g[l]==p?function(e){var r=function(r,n,t){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,t)}return e.apply(this,arguments)};return r[u]=e[u],r}(p):w&&"function"==typeof p?n(Function.call,p):p,w&&((d.virtual||(d.virtual={}))[l]=p,c&o.R&&F&&!F[l]&&t(F,l,p)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,module.exports=o;
},{"./_global":"i1Q6","./_core":"zKeE","./_ctx":"zRh1","./_hide":"akPY","./_has":"yS17"}],"ShN9":[function(require,module,exports) {
var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
},{}],"E5Ce":[function(require,module,exports) {
var e=require("./_cof");module.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return"String"==e(r)?r.split(""):Object(r)};
},{"./_cof":"ShN9"}],"U72i":[function(require,module,exports) {
module.exports=function(o){if(null==o)throw TypeError("Can't call method on  "+o);return o};
},{}],"Wyka":[function(require,module,exports) {
var e=require("./_iobject"),r=require("./_defined");module.exports=function(i){return e(r(i))};
},{"./_iobject":"E5Ce","./_defined":"U72i"}],"MpYs":[function(require,module,exports) {
var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
},{}],"S7IM":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.min;module.exports=function(t){return t>0?r(e(t),9007199254740991):0};
},{"./_to-integer":"MpYs"}],"Zwq5":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.max,t=Math.min;module.exports=function(n,a){return(n=e(n))<0?r(n+a,0):t(n,a)};
},{"./_to-integer":"MpYs"}],"LNnS":[function(require,module,exports) {
var e=require("./_to-iobject"),r=require("./_to-length"),t=require("./_to-absolute-index");module.exports=function(n){return function(i,o,u){var f,l=e(i),a=r(l.length),c=t(u,a);if(n&&o!=o){for(;a>c;)if((f=l[c++])!=f)return!0}else for(;a>c;c++)if((n||c in l)&&l[c]===o)return n||c||0;return!n&&-1}};
},{"./_to-iobject":"Wyka","./_to-length":"S7IM","./_to-absolute-index":"Zwq5"}],"kq3x":[function(require,module,exports) {
module.exports=!0;
},{}],"NB7d":[function(require,module,exports) {

var r=require("./_core"),e=require("./_global"),o="__core-js_shared__",i=e[o]||(e[o]={});(module.exports=function(r,e){return i[r]||(i[r]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:require("./_library")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"});
},{"./_core":"zKeE","./_global":"i1Q6","./_library":"kq3x"}],"X6va":[function(require,module,exports) {
var o=0,t=Math.random();module.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++o+t).toString(36))};
},{}],"wuYm":[function(require,module,exports) {
var e=require("./_shared")("keys"),r=require("./_uid");module.exports=function(u){return e[u]||(e[u]=r(u))};
},{"./_shared":"NB7d","./_uid":"X6va"}],"B9Lq":[function(require,module,exports) {
var r=require("./_has"),e=require("./_to-iobject"),u=require("./_array-includes")(!1),i=require("./_shared-key")("IE_PROTO");module.exports=function(o,a){var n,s=e(o),t=0,h=[];for(n in s)n!=i&&r(s,n)&&h.push(n);for(;a.length>t;)r(s,n=a[t++])&&(~u(h,n)||h.push(n));return h};
},{"./_has":"yS17","./_to-iobject":"Wyka","./_array-includes":"LNnS","./_shared-key":"wuYm"}],"KxjL":[function(require,module,exports) {
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
},{}],"knrM":[function(require,module,exports) {
var e=require("./_object-keys-internal"),r=require("./_enum-bug-keys");module.exports=Object.keys||function(u){return e(u,r)};
},{"./_object-keys-internal":"B9Lq","./_enum-bug-keys":"KxjL"}],"gjjs":[function(require,module,exports) {
var e=require("./_object-dp"),r=require("./_an-object"),t=require("./_object-keys");module.exports=require("./_descriptors")?Object.defineProperties:function(o,i){r(o);for(var u,c=t(i),n=c.length,s=0;n>s;)e.f(o,u=c[s++],i[u]);return o};
},{"./_object-dp":"Gfzd","./_an-object":"zotD","./_object-keys":"knrM","./_descriptors":"MLNE"}],"ebIA":[function(require,module,exports) {
var e=require("./_global").document;module.exports=e&&e.documentElement;
},{"./_global":"i1Q6"}],"TNJq":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_object-dps"),t=require("./_enum-bug-keys"),n=require("./_shared-key")("IE_PROTO"),o=function(){},i="prototype",u=function(){var e,r=require("./_dom-create")("iframe"),n=t.length;for(r.style.display="none",require("./_html").appendChild(r),r.src="javascript:",(e=r.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u[i][t[n]];return u()};module.exports=Object.create||function(t,c){var a;return null!==t?(o[i]=e(t),a=new o,o[i]=null,a[n]=t):a=u(),void 0===c?a:r(a,c)};
},{"./_an-object":"zotD","./_object-dps":"gjjs","./_enum-bug-keys":"KxjL","./_shared-key":"wuYm","./_dom-create":"kxqa","./_html":"ebIA"}],"yOG5":[function(require,module,exports) {
var e=require("./_export");e(e.S,"Object",{create:require("./_object-create")});
},{"./_export":"vSO4","./_object-create":"TNJq"}],"cjsw":[function(require,module,exports) {
require("../../modules/es6.object.create");var e=require("../../modules/_core").Object;module.exports=function(r,o){return e.create(r,o)};
},{"../../modules/es6.object.create":"yOG5","../../modules/_core":"zKeE"}],"HJjO":[function(require,module,exports) {
module.exports=require("core-js/library/fn/object/create");
},{"core-js/library/fn/object/create":"cjsw"}],"coZQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.inheritFromParent=r,exports.insertIntoArray=n,exports.convertToInches=o,exports.getTotalInches=i,exports.convertToNumber=s,exports.randomIntFromInterval=u,exports.isPositiveNumber=c,exports.isExtinctDino=a,exports.compareHeight=h,exports.compareWeight=p,exports.compareDiet=f;var e=t(require("@babel/runtime-corejs2/core-js/object/create"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t,r){t.prototype=(0,e.default)(r.prototype),t.prototype.constructor=t}function n(e,t,r){e.splice(t,0,r)}function o(e){return 12*e}function i(e,t){return e+t}function s(e){return Number(e)}function u(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function c(e){return 1===Math.sign(e)}function a(e){return"Pigeon"!==e&&"human"!==e}function h(e,t){const r=e.height-t.height,n=c(r)?"human":"dino",o=`You are taller than the ${t.species} by ${r} inches `,i=`The ${t.species} is taller than you by ${-r} inches`;return"human"===n?o:i}function p(e,t){const r=e.weight-t.weight,n=c(r)?"human":"dino",o=`You are heavier than the ${t.species} by ${r} lbs.`,i=`The ${t.species} is heavier than you by ${-r} lbs`;return"human"===n?o:i}function f(e,t){const r=e.diet===t.diet?"similar":"different";return`You and the ${t.species} had a ${r} diet.`}
},{"@babel/runtime-corejs2/core-js/object/create":"HJjO"}],"Ocr3":[function(require,module,exports) {
exports.f=Object.getOwnPropertySymbols;
},{}],"z7R8":[function(require,module,exports) {
exports.f={}.propertyIsEnumerable;
},{}],"mbLO":[function(require,module,exports) {
var e=require("./_defined");module.exports=function(r){return Object(e(r))};
},{"./_defined":"U72i"}],"uj5A":[function(require,module,exports) {
"use strict";var e=require("./_descriptors"),r=require("./_object-keys"),t=require("./_object-gops"),o=require("./_object-pie"),i=require("./_to-object"),c=require("./_iobject"),n=Object.assign;module.exports=!n||require("./_fails")(function(){var e={},r={},t=Symbol(),o="abcdefghijklmnopqrst";return e[t]=7,o.split("").forEach(function(e){r[e]=e}),7!=n({},e)[t]||Object.keys(n({},r)).join("")!=o})?function(n,u){for(var s=i(n),a=arguments.length,f=1,b=t.f,j=o.f;a>f;)for(var l,q=c(arguments[f++]),_=b?r(q).concat(b(q)):r(q),p=_.length,g=0;p>g;)l=_[g++],e&&!j.call(q,l)||(s[l]=q[l]);return s}:n;
},{"./_descriptors":"MLNE","./_object-keys":"knrM","./_object-gops":"Ocr3","./_object-pie":"z7R8","./_to-object":"mbLO","./_iobject":"E5Ce","./_fails":"wLcK"}],"YD0x":[function(require,module,exports) {
var e=require("./_export");e(e.S+e.F,"Object",{assign:require("./_object-assign")});
},{"./_export":"vSO4","./_object-assign":"uj5A"}],"vcHl":[function(require,module,exports) {
require("../../modules/es6.object.assign"),module.exports=require("../../modules/_core").Object.assign;
},{"../../modules/es6.object.assign":"YD0x","../../modules/_core":"zKeE"}],"h2Mz":[function(require,module,exports) {
module.exports=require("core-js/library/fn/object/assign");
},{"core-js/library/fn/object/assign":"vcHl"}],"GMRJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CreatureConstructor=s,exports.DinoConstructor=i,exports.HumanConstructor=o;var t=r(require("@babel/runtime-corejs2/core-js/object/assign")),e=require("../helpers");function r(t){return t&&t.__esModule?t:{default:t}}function s(e){(0,t.default)(this,e)}function i(t){s.call(this,t),this.facts=[this.fact,`The ${this.species} lived in ${this.where}.`,`The ${this.species} was a ${this.diet}.`],this.randomizedFactGenerator=function(){const t=Math.floor(Math.random()*this.facts.length);return this.facts[t]}}function o(t){s.call(this,t)}function n(t){this.fact=t}s.prototype.setFact=n,(0,e.inheritFromParent)(o,s),(0,e.inheritFromParent)(i,s);
},{"@babel/runtime-corejs2/core-js/object/assign":"h2Mz","../helpers":"coZQ"}],"A2T1":[function(require,module,exports) {
"use strict";var e=o(require("./components/Card")),t=require("./helpers/"),n=require("./models");function o(e){return e&&e.__esModule?e:{default:e}}const a=async()=>{const e=await fetch("data/dino.json");return await e.json()};async function s(o){const{Dinos:s}=await a(),i=s.map(e=>new n.DinoConstructor(e)),r=document.getElementById("grid");(0,t.insertIntoArray)(i,4,o),i.forEach(n=>{if((0,t.isExtinctDino)(n.species)){n.facts=[...n.facts,(0,t.compareWeight)(o,n),(0,t.compareHeight)(o,n),(0,t.compareDiet)(o,n)];const e=n.randomizedFactGenerator();n.setFact(e)}let a=document.createElement("div");a.classList.add("grid-item"),a.innerHTML=(0,e.default)(n),r.appendChild(a)})}function i(){const e=document.getElementById("comparison-form");e.addEventListener("submit",o=>{o.preventDefault();const a=e.elements.name.value,i=e.elements.diet.value.toLowerCase(),r=e.elements.weight.value,c=e.elements["height-feet"].value,m=e.elements["height-inches"].value,u=(0,t.convertToInches)(c)+(0,t.convertToNumber)(m);s(new n.HumanConstructor({name:a,height:u,diet:i,species:"human",weight:(0,t.convertToNumber)(r)})),e.style.display="none"})}i();
},{"./components/Card":"F7ib","./helpers/":"coZQ","./models":"GMRJ"}]},{},["A2T1"], null)
//# sourceMappingURL=/app.7ed2fc78.js.map