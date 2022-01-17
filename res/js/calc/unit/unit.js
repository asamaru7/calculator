(function(){"use strict";var __webpack_modules__={42:function(e,t,n){n.d(t,{Z:function(){return c}});var r={props:{data:{type:Array,required:!0},from:{type:Number,required:!1},calc:{type:Function,required:!1}},data:function(){return{fromUnit:null,toUnit:null,to:""}},watch:{from:function(){this.$nextTick((function(){this.from.length>9?this.from=this.from.slice(0,9):this.convert()}))},fromUnit:function(){this.$nextTick((function(){this.convert()}))},toUnit:function(){this.$nextTick((function(){this.convert()}))}},mounted:function(){this.from=1,this.fromUnit=this.data.units[this.data.fromUnit],this.toUnit=this.data.units[this.data.toUnit]},methods:{convert:function(){var e;!isNaN(this.from)&&this.fromUnit&&this.toUnit&&(e=this.calc?this.calc(this.from,this.fromUnit,this.toUnit):this.from*this.toUnit[0]/this.fromUnit[0],this.to=this._resultFormat(e),this.$emit("update:value",this.to,this))},_resultFormat:function(e){var t,n=e.toString(),r=n.indexOf("."),i=n.substring(0,r),o=n.substring(r+1),a=n.indexOf("e");if(""===i&&(i=n),a<0){if(i.length>9)e=parseFloat((e/Math.pow(10,i.length-1)).toFixed(4))+"e+"+(i.length-1);else if("0"===i){for(t=0;t<o.length&&"0"===o[t];t++);t<5?e=parseFloat(e.toFixed(6)):(e=(e*Math.pow(10,t+1)).toFixed(4),e=parseFloat(e)+"e-"+(t+1))}else if("0"!==i&&i.length+o.length>9){if(i.length>3){if((i=(r=(n=(e=e.toFixed(6-(i.length-3))).toString()).indexOf("."))>-1?n.substring(0,r):n).length>9)return this._resultFormat(e)}else e=e.toFixed(6);e=parseFloat(e)}}else{var u=n.substring(0,a),s=n.substring(a);n.substring(r+1,a).length>5&&(e=parseFloat(parseFloat(u).toFixed(4)),e+=s)}return e}}},i=n(379),o=n.n(i),a=n(331),u={insert:"head",singleton:!1};o()(a.Z,u),a.Z.locals;var s=function(e,t,n,r,i,o,a,u){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=s):i&&(s=u?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),s)if(c.functional){c._injectStyles=s;var l=c.render;c.render=function(e,t){return s.call(t),l(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:c}}(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"vue-unit-converter",on:{submit:function(t){return t.preventDefault(),e.convert.apply(null,arguments)}}},[n("fieldset",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"column from"},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.from,expression:"from"}],attrs:{type:"number",id:"from",min:"0",max:"999999999"},domProps:{value:e.from},on:{input:function(t){t.target.composing||(e.from=t.target.value)}}})]),e._v(" "),n("p",{staticClass:"unit"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.fromUnit,expression:"fromUnit"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.fromUnit=t.target.multiple?n:n[0]}}},e._l(e.data.units,(function(t){return n("option",{domProps:{value:t}},[e._v(e._s(t[2])+"("+e._s(t[1])+")")])})),0)])]),e._v(" "),n("div",{staticClass:"column to"},[n("p",{staticClass:"arrow"},[e._v("→")]),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.to,expression:"to"}],attrs:{type:"number",id:"to",readonly:"readonly"},domProps:{value:e.to},on:{input:function(t){t.target.composing||(e.to=t.target.value)}}})]),e._v(" "),n("p",{staticClass:"unit"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.toUnit,expression:"toUnit"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.toUnit=t.target.multiple?n:n[0]}}},e._l(e.data.units,(function(t){return n("option",{domProps:{value:t}},[e._v(e._s(t[2])+"("+e._s(t[1])+")")])})),0)])])])])])}),[],!1,null,null,null),c={el:"section.converter",components:{"unit-converter":s.exports},data:{from:0,to:0},computed:{},watch:{},created:function(){this._created()},mounted:function(){this._mounted()},methods:{_created:function(){},_mounted:function(){}}}},331:function(e,t,n){var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,".vue-unit-converter>fieldset{border:1px solid #ebebeb;border-radius:3px;padding:20px 10px}.vue-unit-converter .column{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin-right:1rem;padding-right:0}.vue-unit-converter .column>p{margin:0;width:100%}.vue-unit-converter .column>p.unit{-ms-flex:1;flex:1;padding-left:5px}.vue-unit-converter .column>p.unit select{width:110px}.vue-unit-converter .column>p.arrow{-ms-flex:1;flex:1;font-size:2.2rem}.vue-unit-converter .column input,.vue-unit-converter .column select{color:#666;margin-bottom:0;text-align:right}.vue-unit-converter .column input[type=number]::-webkit-inner-spin-button,.vue-unit-converter .column input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.vue-unit-converter .column.to input{border:0}",""]),t.Z=i},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:function(e,t,n){var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function u(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],c=n[s]||0,l="".concat(s," ").concat(c);n[s]=c+1;var f=u(l),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:v(d,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,_=0;function v(e,t){var n,r,i;if(t.singleton){var o=_++;n=m||(m=c(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=c(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=u(n[r]);a[i].references--}for(var o=s(e,t),c=0;c<n.length;c++){var l=u(n[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=function(e,t){for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var __webpack_exports__={};!function(){var _vue_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(42);$((function(){var units=[],fromUnit=0,toUnit=1;$("#units > li").each((function(index,el){var li=$(el),p=li.data("pos");"from"===p?fromUnit=index:"to"===p&&(toUnit=index),units.push([eval(li.data("exp")),li.attr("title"),li.data("unit")])})),new Vue({mixins:[_vue_common__WEBPACK_IMPORTED_MODULE_0__.Z],data:{data:{fromUnit:fromUnit,toUnit:toUnit,units:units}},mounted:function(){},methods:{updateValue:function(e,t){},calcFuel:function(e,t,n){return"l/100km"===t[2]||"l/100km"===n[2]?"l/100km"===t[2]&&"l/100km"===n[2]?e:n[0]/e*t[0]:e*n[0]/t[0]},calcTemperature:function(e,t,n){var r=["°C","°F","K","°R"],i=r.indexOf(t[2]),o=r.indexOf(n[2]);switch(parseInt(i,10)){case 0:e+=273.15;break;case 1:e=(5*(e-32)+2458.35)/9;break;case 2:break;case 3:e=(5*(e-459.67-32)+2458.35)/9;break;default:e=1e5}switch(parseInt(o,10)){case 0:e-=273.15;break;case 1:e=(9*(e-273.15)+160)/5;break;case 2:break;case 3:e=(9*(e-273.15)+160+2298.35)/5;break;default:e=1e4}return e}}})}))}()})();