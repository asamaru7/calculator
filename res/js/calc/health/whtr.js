!function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=36)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var a=function(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var i=(l=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),r=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[a].concat(r).concat([i]).join("\n")}var l;return[a].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a}).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<e.length;i++){var l=e[i];"number"==typeof l[0]&&n[l[0]]||(a&&!l[2]?l[2]=a:a&&(l[2]="("+l[2]+") and ("+a+")"),t.push(l))}},t}},function(e,t,a){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=a(3),r={},l=n&&(document.head||document.getElementsByTagName("head")[0]),s=null,o=0,u=!1,c=function(){},d=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var t=0;t<e.length;t++){var a=e[t],n=r[a.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](a.parts[i]);for(;i<a.parts.length;i++)n.parts.push(v(a.parts[i]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{var l=[];for(i=0;i<a.parts.length;i++)l.push(v(a.parts[i]));r[a.id]={id:a.id,refs:1,parts:l}}}}function g(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function v(e){var t,a,n=document.querySelector("style["+f+'~="'+e.id+'"]');if(n){if(u)return c;n.parentNode.removeChild(n)}if(h){var i=o++;n=s||(s=g()),t=x.bind(null,n,i,!1),a=x.bind(null,n,i,!0)}else n=g(),t=function(e,t){var a=t.css,n=t.media,i=t.sourceMap;n&&e.setAttribute("media",n);d.ssrId&&e.setAttribute(f,t.id);i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}.bind(null,n),a=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}e.exports=function(e,t,a,n){u=a,d=n||{};var l=i(e,t);return p(l),function(t){for(var a=[],n=0;n<l.length;n++){var s=l[n];(o=r[s.id]).refs--,a.push(o)}t?p(l=i(e,t)):l=[];for(n=0;n<a.length;n++){var o;if(0===(o=a[n]).refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete r[o.id]}}}};var m,b=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function x(e,t,a,n){var i=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var r=document.createTextNode(i),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(r,l[t]):e.appendChild(r)}}},function(e,t){e.exports=function(e,t,a,n,i,r){var l,s=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(l=e,s=e.default);var u,c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId=i),r?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=u):n&&(u=n),u){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(e,t){return u.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:l,exports:s,options:c}}},function(e,t){e.exports=function(e,t){for(var a=[],n={},i=0;i<t.length;i++){var r=t[i],l=r[0],s={id:e+":"+i,css:r[1],media:r[2],sourceMap:r[3]};n[l]?n[l].parts.push(s):a.push(n[l]={id:l,parts:[s]})}return a}},function(e,t,a){"use strict";var n=a(5),i=a.n(n);t.a={el:"section.calculator",components:{"health-calculator-results":i.a},data:{sex:"man",value:0,grade:"",gaugeData:{}},computed:{sexName:function(){return"man"===this.sex?"남자":"woman"===this.sex?"여자":""}},watch:{},created:function(){this._created()},mounted:function(){this._mounted()},methods:{_created:function(){var e=this;this._defaults={sex:null,value:null},$("[v-model]",this.$el).each(function(t,a){var n=$(a),i=n.attr("id")||n.attr("name");e._defaults[i]=null})},_mounted:function(){for(var e in this._defaults)this._defaults.hasOwnProperty(e)&&(void 0!==this[e]?this._defaults[e]=this[e]:delete this._defaults[e])},reset:function(){for(var e in this._defaults)this._defaults.hasOwnProperty(e)&&(this[e]=this._defaults[e])},updateGrade:function(e){this.grade=e}}}},function(e,t,a){var n=a(2)(a(8),a(14),!1,function(e){a(6)},null,null);e.exports=n.exports},function(e,t,a){var n=a(7);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(1)("432e4781",n,!0,{})},function(e,t,a){(e.exports=a(0)(!1)).push([e.i,'.vue-health-calculator-results .title{display:block;font-size:2.1em;text-align:center;line-height:1.1em;margin-bottom:15px}.vue-health-calculator-results .title .health{font-weight:700;color:#f58222}.vue-health-calculator-results .title .health-grade{font-weight:400;color:#999}.vue-health-calculator-results .title .health-grade:before{content:"( "}.vue-health-calculator-results .title .health-grade:after{content:" )"}.vue-health-calculator-results.view-guide .vue-gauge.small ul{padding-bottom:1.5em}.vue-health-calculator-results.view-guide .vue-gauge.small .guide{letter-spacing:5px;display:block;border-top:1px solid #f58222;text-align:center;position:absolute;bottom:0;right:0;font-size:1.25rem;color:#f58222}',""])},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(9),i=a.n(n);t.default={props:{title:{type:String,required:!0},data:{type:Array,required:!0},value:{type:Number,required:!0},guideTitle:{type:String,required:!1}},components:{gauge:i.a},data:function(){return{grade:""}},mounted:function(){},methods:{updateGauge:function(e){if(this.grade=e.grade,this.$emit("update:grade",e.grade),this.guideTitle){for(var t=this.data.cells||[],a=t.length,n=100,i=0;i<a&&!t[i].guideBase;i++)n-=e.cellWidth[i];if(n>0){var r=$(this.$el).addClass("view-guide");r.find("span.guide").css("width",n+"%").html(this.guideTitle),r=null}}}}}},function(e,t,a){var n=a(2)(a(12),a(13),!1,function(e){a(10)},null,null);e.exports=n.exports},function(e,t,a){var n=a(11);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(1)("3d22c876",n,!0,{})},function(e,t,a){(e.exports=a(0)(!1)).push([e.i,'.vue-gauge{padding:32px 0 0;overflow:hidden}.vue-gauge,.vue-gauge ul{position:relative;margin:0}.vue-gauge ul{display:table;width:100%}.vue-gauge ul li{display:table-cell;text-align:center;font-size:1.25rem;color:#8f8f8f;position:relative}.vue-gauge ul li p{margin:0}.vue-gauge ul li p:before{content:"";display:block;height:5px;margin-bottom:2px;background:#47c8a6}.vue-gauge ul li p:after{content:"";display:block;height:4px;width:1px;position:absolute;top:-4px;left:0;background:#c5c6c7}.vue-gauge ul li span{display:block;width:30px;text-align:center;position:absolute;top:-22px;left:-15px}.vue-gauge ul li strong{font-weight:400}.vue-gauge ul li strong i{font-style:normal}.vue-gauge ul li:first-child span{left:-6px}.vue-gauge ul li:first-child p:before{background:#47c8a6}.vue-gauge ul li:nth-child(2) p:before{background:#2f9eef}.vue-gauge ul li:nth-child(3) p:before{background:#6577dc}.vue-gauge ul li:nth-child(4) p:before{background:#ac74ea}.vue-gauge ul li:nth-child(5) p:before{background:#e263a9}.vue-gauge ul li:nth-child(6) p:before{background:#ff63a9}.vue-gauge .arrow{display:block;position:absolute;top:6px;left:0;right:0;height:29px}.vue-gauge .arrow:after{content:"";display:inline-block;height:29px;width:20px;position:absolute;top:0;right:-10px;background:url("/res/img/bmi/point.png") no-repeat;background-size:20px 29px}.vue-gauge.small ul li i{display:none}',""])},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{data:{type:Array,required:!0},value:{type:Number,required:!0}},data:function(){return{graphSize:"",smallSize:670,arrow:0,grade:"",cellRange:[],cellWidth:[],fullWidth:0}},watch:{data:function(){this.refineData()},value:function(e){var t=this.data.cells||[],a=t.length;if(!(a<=0)){for(var n=100,i=t[a-1].title,r=0,l=0;l<a-1;l++){if(void 0!==t[l+1].value&&e<t[l+1].value){n=r+(e-t[l].value)/this.fullWidth*100,i=t[l].title;break}r+=this.cellWidth[l]}n=Math.min(Math.max(n,0),100),this.arrow=n+"%",this.grade=$("<span>"+i+"</span>").text(),this.$emit("update:gauge",this)}}},created:function(){this.refineData()},mounted:function(){var e=this,t=function(e){e.graphSize=$(e.$el).outerWidth()<e.smallSize?"small":""};$(window).resize(function(){t(e)}),t(this)},methods:{refineData:function(){var e=this.data.cells||[],t=e.length;if(!(t<=0)){var a=e[0].value;this.fullWidth=e[t-1].maxValue-a,this.cellRange[0]=e[1].value-a;for(var n=1;n<t-1;n++)this.cellRange[n]=e[n+1].value-e[n].value;for(var i=0;i<t-1;i++)this.cellWidth[i]=this.cellRange[i]/this.fullWidth*100}}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-gauge",class:e.graphSize},[a("ul",e._l(e.data.cells,function(t,n){return a("li",{style:{width:void 0===e.cellWidth[n]?"auto":e.cellWidth[n]+"%"}},[a("p",[a("span",{staticClass:"text"},[e._v(e._s(t.valueTitle||t.value||""))]),a("strong",{domProps:{innerHTML:e._s(t.title||"&nbsp;")}})])])})),e._v(" "),a("span",{staticClass:"arrow",style:{width:e.arrow}}),e._v(" "),a("span",{staticClass:"guide"})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-health-calculator-results"},[a("strong",{staticClass:"title"},[a("span",[e._v(e._s(e.title))]),e._v(" "),a("span",{staticClass:"health"},[e._v(e._s(e.value))]),e._v(" "),a("span",{staticClass:"health-grade"},[e._v(e._s(e.grade))])]),e._v(" "),a("gauge",{attrs:{value:e.value,data:e.data},on:{"update:gauge":e.updateGauge}})],1)},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(37)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(4);new Vue({mixins:[n.a],data:{height:"",waist:""},computed:{whtrRange:function(){if("man"===this.sex)return[.43,.53,.58];if("woman"===this.sex)return[.42,.49,.54];throw"성별이 선택되지 않았습니다."}},methods:{calc:function(){if(this.height<=0||this.waist<=0)alertify.error("신장과 허리둘레를 입력하세요.");else{var e=this.whtrRange,t=(e[2]-e[0])/3;this.gaugeData={cells:[{title:"저체중",value:e[0]-t,valueTitle:"WHR"},{title:"정상",value:e[0]},{title:"과체중",value:e[1]},{title:"비만",value:e[2],maxValue:e[2]+t}]},this.value=Math.round(this.waist/this.height*100)/100}}}})}]);