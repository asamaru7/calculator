!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=15)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=(u=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),r=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(r).concat([i]).join("\n")}var u;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(a[r]=!0)}for(i=0;i<e.length;i++){var u=e[i];"number"==typeof u[0]&&a[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(e,t,n){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n(3),r={},u=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,s=0,l=!1,c=function(){},d=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var t=0;t<e.length;t++){var n=e[t],a=r[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(v(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var u=[];for(i=0;i<n.parts.length;i++)u.push(v(n.parts[i]));r[n.id]={id:n.id,refs:1,parts:u}}}}function g(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function v(e){var t,n,a=document.querySelector("style["+f+'~="'+e.id+'"]');if(a){if(l)return c;a.parentNode.removeChild(a)}if(h){var i=s++;a=o||(o=g()),t=x.bind(null,a,i,!1),n=x.bind(null,a,i,!0)}else a=g(),t=function(e,t){var n=t.css,a=t.media,i=t.sourceMap;a&&e.setAttribute("media",a);d.ssrId&&e.setAttribute(f,t.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}e.exports=function(e,t,n,a){l=n,d=a||{};var u=i(e,t);return p(u),function(t){for(var n=[],a=0;a<u.length;a++){var o=u[a];(s=r[o.id]).refs--,n.push(s)}t?p(u=i(e,t)):u=[];for(a=0;a<n.length;a++){var s;if(0===(s=n[a]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var m,b=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function x(e,t,n,a){var i=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var r=document.createTextNode(i),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(r,u[t]):e.appendChild(r)}}},function(e,t){e.exports=function(e,t,n,a,i,r){var u,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(u=e,o=e.default);var l,c="function"==typeof o?o.options:o;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):a&&(l=a),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:u,exports:o,options:c}}},function(e,t){e.exports=function(e,t){for(var n=[],a={},i=0;i<t.length;i++){var r=t[i],u=r[0],o={id:e+":"+i,css:r[1],media:r[2],sourceMap:r[3]};a[u]?a[u].parts.push(o):n.push(a[u]={id:u,parts:[o]})}return n}},function(e,t,n){"use strict";var a=n(5),i=n.n(a);t.a={el:"section.calculator",components:{"health-calculator-results":i.a},data:{sex:"man",value:0,grade:"",gaugeData:{}},computed:{sexName:function(){return"man"===this.sex?"남자":"woman"===this.sex?"여자":""}},watch:{},created:function(){this._created()},mounted:function(){this._mounted()},methods:{_created:function(){var e=this;this._defaults={sex:null,value:null},$("[v-model]",this.$el).each(function(t,n){var a=$(n),i=a.attr("id")||a.attr("name");e._defaults[i]=null})},_mounted:function(){for(var e in this._defaults)this._defaults.hasOwnProperty(e)&&(void 0!==this[e]?this._defaults[e]=this[e]:delete this._defaults[e])},reset:function(){for(var e in this._defaults)this._defaults.hasOwnProperty(e)&&(this[e]=this._defaults[e])},updateGrade:function(e){this.grade=e}}}},function(e,t,n){var a=n(2)(n(8),n(14),!1,function(e){n(6)},null,null);e.exports=a.exports},function(e,t,n){var a=n(7);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(1)("432e4781",a,!0,{})},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'.vue-health-calculator-results .title{display:block;font-size:2.1em;text-align:center;line-height:1.1em;margin-bottom:15px}.vue-health-calculator-results .title .health{font-weight:700;color:#f58222}.vue-health-calculator-results .title .health-grade{font-weight:400;color:#999}.vue-health-calculator-results .title .health-grade:before{content:"( "}.vue-health-calculator-results .title .health-grade:after{content:" )"}.vue-health-calculator-results.view-guide .vue-gauge.small ul{padding-bottom:1.5em}.vue-health-calculator-results.view-guide .vue-gauge.small .guide{letter-spacing:5px;display:block;border-top:1px solid #f58222;text-align:center;position:absolute;bottom:0;right:0;font-size:1.2rem;color:#f58222}',""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=n.n(a);t.default={props:{title:{type:String,required:!0},data:{type:Array,required:!0},value:{type:Number,required:!0},guideTitle:{type:String,required:!1}},components:{gauge:i.a},data:function(){return{grade:""}},mounted:function(){},methods:{updateGauge:function(e){if(this.grade=e.grade,this.$emit("update:grade",e.grade),this.guideTitle){for(var t=this.data.cells||[],n=t.length,a=100,i=0;i<n&&!t[i].guideBase;i++)a-=e.cellWidth[i];if(a>0){var r=$(this.$el).addClass("view-guide");r.find("span.guide").css("width",a+"%").html(this.guideTitle),r=null}}}}}},function(e,t,n){var a=n(2)(n(12),n(13),!1,function(e){n(10)},null,null);e.exports=a.exports},function(e,t,n){var a=n(11);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(1)("3d22c876",a,!0,{})},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'.vue-gauge{padding:32px 0 0;overflow:hidden}.vue-gauge,.vue-gauge ul{position:relative;margin:0}.vue-gauge ul{display:table;width:100%}.vue-gauge ul li{display:table-cell;text-align:center;font-size:1.2rem;color:#8f8f8f;position:relative}.vue-gauge ul li p{margin:0}.vue-gauge ul li p:before{content:"";display:block;height:5px;margin-bottom:2px;background:#47c8a6}.vue-gauge ul li p:after{content:"";display:block;height:4px;width:1px;position:absolute;top:-4px;left:0;background:#c5c6c7}.vue-gauge ul li span{display:block;width:30px;text-align:center;position:absolute;top:-22px;left:-15px}.vue-gauge ul li strong{font-weight:400}.vue-gauge ul li strong i{font-style:normal}.vue-gauge ul li:first-child span{left:-6px}.vue-gauge ul li:first-child p:before{background:#47c8a6}.vue-gauge ul li:nth-child(2) p:before{background:#2f9eef}.vue-gauge ul li:nth-child(3) p:before{background:#6577dc}.vue-gauge ul li:nth-child(4) p:before{background:#ac74ea}.vue-gauge ul li:nth-child(5) p:before{background:#e263a9}.vue-gauge ul li:nth-child(6) p:before{background:#ff63a9}.vue-gauge .arrow{display:block;position:absolute;top:6px;left:0;right:0;height:29px}.vue-gauge .arrow:after{content:"";display:inline-block;height:29px;width:20px;position:absolute;top:0;right:-10px;background:url("/res/img/bmi/point.png") no-repeat;background-size:20px 29px}.vue-gauge.small ul li i{display:none}',""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{data:{type:Array,required:!0},value:{type:Number,required:!0}},data:function(){return{graphSize:"",smallSize:670,arrow:0,grade:"",cellRange:[],cellWidth:[],fullWidth:0}},watch:{data:function(){this.refineData()},value:function(e){var t=this.data.cells||[],n=t.length;if(!(n<=0)){for(var a=100,i=t[n-1].title,r=0,u=0;u<n-1;u++){if(void 0!==t[u+1].value&&e<t[u+1].value){a=r+(e-t[u].value)/this.fullWidth*100,i=t[u].title;break}r+=this.cellWidth[u]}a=Math.min(Math.max(a,0),100),this.arrow=a+"%",this.grade=$("<span>"+i+"</span>").text(),this.$emit("update:gauge",this)}}},created:function(){this.refineData()},mounted:function(){var e=this,t=function(e){e.graphSize=$(e.$el).outerWidth()<e.smallSize?"small":""};$(window).resize(function(){t(e)}),t(this)},methods:{refineData:function(){var e=this.data.cells||[],t=e.length;if(!(t<=0)){var n=e[0].value;this.fullWidth=e[t-1].maxValue-n,this.cellRange[0]=e[1].value-n;for(var a=1;a<t-1;a++)this.cellRange[a]=e[a+1].value-e[a].value;for(var i=0;i<t-1;i++)this.cellWidth[i]=this.cellRange[i]/this.fullWidth*100}}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-gauge",class:e.graphSize},[n("ul",e._l(e.data.cells,function(t,a){return n("li",{style:{width:void 0===e.cellWidth[a]?"auto":e.cellWidth[a]+"%"}},[n("p",[n("span",{staticClass:"text"},[e._v(e._s(t.valueTitle||t.value||""))]),n("strong",{domProps:{innerHTML:e._s(t.title||"&nbsp;")}})])])})),e._v(" "),n("span",{staticClass:"arrow",style:{width:e.arrow}}),e._v(" "),n("span",{staticClass:"guide"})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-health-calculator-results"},[n("strong",{staticClass:"title"},[n("span",[e._v(e._s(e.title))]),e._v(" "),n("span",{staticClass:"health"},[e._v(e._s(e.value))]),e._v(" "),n("span",{staticClass:"health-grade"},[e._v(e._s(e.grade))])]),e._v(" "),n("gauge",{attrs:{value:e.value,data:e.data},on:{"update:gauge":e.updateGauge}})],1)},staticRenderFns:[]}},function(e,t,n){n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(25),n(26),n(27),n(28),n(29),n(30),n(31),e.exports=n(32)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),i={man:{title:"남성",data:[["20~24세",100923,23.76,.78,18.56,31.14,17,19,19.5,21.1,23.1,25.7,28.7,31.1,36.1],["25~26세",115273,24.31,.78,19.05,31.51,17,19,20,21.7,23.8,26.3,29.4,31.5,36.3],["27~28세",166887,24.66,.78,19.47,32,17.8,19.5,20.4,22.1,24.1,26.6,29.6,31.7,36.2],["29~30세",208934,24.94,.8,20,31.8,17.9,19.7,20.8,22.4,24.4,26.9,29.8,31.8,36.3],["31~32세",245350,25.13,1,19.92,31.8,18.1,19.9,20.9,22.6,24.7,27.1,29.9,31.8,36],["33~34세",298239,25,.8,19.97,31.74,18.1,20,21,22.8,24.9,27.3,29.9,31.7,35.8],["35~36세",315239,25.25,.8,20.05,31.56,18.2,20,21.1,22.9,24.9,27.3,29.8,31.6,35.6],["37~38세",291226,25.23,.8,20.08,31.35,18.2,20.1,21.1,22.9,24.9,27.2,29.7,31.3,35.2],["39~40세",453736,25.12,.8,20.02,31.13,18.1,20,21,22.8,24.8,27.1,29.4,31.1,35],["41~42세",447801,24.99,.8,19.96,30.78,18.2,20,21,22.8,24.7,26.9,29.1,31,34.3],["43~44세",473384,24.97,.8,20.07,30.49,18.2,20.1,21.1,22.8,24.7,26.9,29,30.5,34],["45~46세",470363,24.91,.82,20.08,30.39,18.3,20.1,21.1,22.8,24.7,27,28.9,30.4,33.6],["47~48세",447739,24.85,.82,20.08,30.09,18.3,20.1,21.1,22.8,25,26.7,28.7,30.1,33.2],["49~50세",429957,24.75,.82,20.07,29.76,18.3,20.1,21.1,23,24.6,26.6,28.4,29.8,32.8],["51~52세",418905,24.67,.82,20.07,29.72,18.2,20.1,21,22.7,24.6,26.4,28.4,29.7,32.5],["53~54세",463035,24.58,.82,19.96,29.41,18.1,20,21,22.7,24.5,26.3,28.3,29.4,32.2],["55~56세",468145,24.53,.82,19.95,29.39,18,19.9,21,22.6,24.4,26.3,28.1,29.4,32],["57~58세",430162,24.5,.82,19.94,29,18,19.9,21,22.6,24.4,26.3,28.1,29.4,32],["59~60세",403575,24.47,.84,20,29.32,18,19.8,20.9,22.6,24.4,26.3,28,29.3,31.9],["61~62세",341773,24.4,1,19.82,29.07,17.9,19.8,20.8,22.5,24.3,26.2,28,29.1,31.7],["63~64세",306818,24,.84,19.72,29.05,17.8,19.7,20.8,22.4,24.2,26.1,27.9,29,31.6],["65~66세",280405,24.23,.84,19.6,29.03,17.7,19.6,20.7,22.4,24.2,26,27.8,29,31.6],["67~68세",262282,24.18,.84,19.57,28.93,17.6,19.6,20.6,22.3,24.2,26,27.7,28.9,31.4],["69~70세",192971,24.13,.84,19.47,28.91,17.6,19.5,20.5,22.3,24.1,25.9,27.7,28.9,31],["71~72세",178549,23.95,.84,19.27,28.69,17.4,19.3,20.3,22.1,23.9,25.8,27.5,29,31.2],["73~74세",184525,23.81,.84,19.07,28.62,17.2,19.1,20.2,21.9,23.8,25.7,27,28.6,30.9],["75세 이상",384849,23.37,.84,18.49,28.26,16.6,18.5,19.6,21.4,23.4,25,27.1,28.3,30.8]]},woman:{title:"여성",data:[["20~24세",216840,21.49,.84,17.29,28.52,16.1,17.3,17.9,19.1,21,22.9,26,28.5,34.2],["25~26세",184237,21.29,.84,17.31,27.99,16.2,17.3,17.9,19,20.5,22.6,25.5,28,33.7],["27~28세",198473,21.35,.84,17.36,28.13,16.2,17.4,18,19.1,20.6,22.7,25.6,28.1,34],["29~30세",217067,21.54,.84,17.47,28.44,16.4,18,18.1,19.2,20.8,22.9,26,28.4,34.1],["31~32세",198791,21.78,.84,17.58,28.84,16,17.6,18.2,19.4,21,23.2,26.3,28.8,34.4],["33~34세",217048,21.98,.86,17.69,29,16.5,17.7,18.4,19.6,21.2,23.5,26.6,29.1,34.5],["35~36세",215062,22.15,.86,18,29.24,16.6,17.8,18.5,19.7,21.4,23.7,26.8,29.2,34.4],["37~38세",196838,22.3,1,17.94,29.24,16.8,17.9,18.6,19.9,21.6,23.9,27,29.2,34.1],["39~40세",465068,23,.88,18.13,29.52,16.9,18.1,18.8,20.1,21.9,24.3,27.3,29.5,34.2],["41~42세",479212,22.73,.88,18.29,29.38,17,18.3,19,20.3,22.1,24.4,27.3,29.4,33.9],["43~44세",503539,22.92,.88,18.49,29.38,17.2,18.5,19.2,20.5,22.3,24.7,27.4,29.4,33.7],["45~46세",509656,23.16,.9,18.72,29.52,17.4,18.7,19.5,20.8,22.6,24.9,27.6,29.5,34],["47~48세",507412,23.4,.9,18.9,29.59,17.5,18.9,19.7,21.1,22.9,25.2,27.8,30,33.6],["49~50세",472643,23.55,.9,19.07,29.59,17.6,19.1,19.9,21.2,23.1,25.3,28,29.6,33.3],["51~52세",476005,23.59,.92,19.1,29.52,17.6,19.1,19.9,21.4,23.1,25,27.8,29.5,33.3],["53~54세",539947,23.69,.92,19.2,29.52,17.6,19.2,20,21.5,23,25.5,27.8,29.5,33.2],["55~56세",564877,23.83,.92,19.3,29.62,17.7,19.3,20.1,22,23.5,25.6,28,29.6,33.3],["57~58세",502260,23.98,.94,19.38,29.69,17.7,19.4,20,21.8,23.6,25.8,28.1,29.7,33.3],["59~60세",478451,24.19,.94,19.53,29.94,17.8,20,20.4,22,23.9,26,28.3,29.9,33.3],["61~62세",395483,24.36,.94,19.63,30.08,18,19.6,20.6,22.2,24,26.2,28.5,30.1,33.7],["63~64세",354984,24.5,.96,19.74,30,17.9,19.7,20.7,22.3,24.2,26.4,28.6,30.2,33.7],["65~66세",323793,24.56,.96,20,30.22,17.9,19.7,20.7,22.4,24.3,26.4,28.7,30.2,33.7],["67~68세",297710,24.57,1,19.74,30.18,17.8,19.7,20.7,22.4,24.3,26.5,28.7,30.2,33.3],["69~70세",217498,25,.96,19.72,30.3,17.7,19.7,20.7,22.5,24.4,26.6,28.8,30.3,33.7],["71~72세",209619,24.64,.98,19.65,30.26,17.7,19.7,20.7,22.5,24.4,26.6,28.8,30.3,33.3],["73~74세",215365,24.58,.98,19.53,30.18,17.5,19.5,20.6,22.4,24.4,26.6,28.7,30.2,33.3],["75세 이상",486849,24.1,1,18.63,29.9,16.4,18.6,19.8,21.8,24,26.3,28.5,29.9,33]]}},r={man:null,woman:null};new Vue({mixins:[a.a],data:{height:"",weight:"",age:5,bmiPercent:"",bmiAverage:0,gaugeData:{cells:[{title:"저체중",value:13.5,valueTitle:"BMI"},{title:"정상",value:18.5},{title:"<i>비만</i>전단계",value:23,guideBase:!0},{title:"1단계<i>비만</i>",value:25},{title:"2단계<i>비만</i>",value:30},{title:"3단계<i>비만</i>",value:35,maxValue:40}]}},computed:{ages:function(){if(!r[this.sex]){r[this.sex]=[];for(var e=i[this.sex].data,t=0,n=e.length;t<n;t++)r[this.sex].push(e[t][0])}return r[this.sex]},ageName:function(){return this.ages[this.age]||""}},methods:{calc:function(){if(this.height<=0||this.weight<=0)alertify.error("신장과 체중을 입력하세요.");else{this.value=Math.round(10*this.weight/Math.pow(this.height/100,2))/10;var e=i[this.sex].data[this.age];this.bmiAverage=e[2];var t={"1%":e[6],"5%":e[7],"10%":e[8],"25%":e[9],"50%":e[10],"75%":e[11],"90%":e[12],"95%":e[13],"99%":e[14]},n="100%";for(var a in t)if(t.hasOwnProperty(a)&&this.value<t[a]){n=a;break}this.bmiPercent=n.substring(0,n.length-1)}}}})},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){}]);