/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_common__ = __webpack_require__(59);




new Vue({
	mixins: [__WEBPACK_IMPORTED_MODULE_0__vue_common__["a" /* default */]],
	data: {},
	computed: {},
	methods: {}
});

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_unit_converter__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_unit_converter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_unit_converter__);




/* harmony default export */ __webpack_exports__["a"] = ({
	el: 'section.converter',
	components: {
		'unit-converter': __WEBPACK_IMPORTED_MODULE_0__vue_unit_converter___default.a
	},
	data: {
		from: 0,
		to: 0
	},
	computed: {},
	watch: {},
	created: function created() {
		this._created();
	},
	mounted: function mounted() {
		this._mounted();
	},

	methods: {
		_created: function _created() {},
		_mounted: function _mounted() {}
	}
});

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(66)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(68)
/* template */
var __vue_template__ = __webpack_require__(69)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "source/_webpack/js/calc/unit/vue-unit-converter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-773ed5ea", Component.options)
  } else {
    hotAPI.reload("data-v-773ed5ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("51b90d75", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../../../sub_modules/node_modules/css-loader/index.js!../../../../../../../../../../sub_modules/node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-773ed5ea\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../../../../sub_modules/node_modules/sass-loader/lib/loader.js!../../../../../../../../../../sub_modules/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vue-unit-converter.vue", function() {
     var newContent = require("!!../../../../../../../../../../sub_modules/node_modules/css-loader/index.js!../../../../../../../../../../sub_modules/node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-773ed5ea\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../../../../sub_modules/node_modules/sass-loader/lib/loader.js!../../../../../../../../../../sub_modules/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vue-unit-converter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\nstrong{\n  font-weight:bold;\n}\n.button-default{\n  background-color:#f2f2f2;\n  background-image:-webkit-gradient(linear, left top, left bottom, from(#f2f2f2), to(#f2f2f2));\n  background-image:linear-gradient(to bottom, #f2f2f2, #f2f2f2);\n  border:1px solid #bfbfbf;\n  -webkit-box-shadow:inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9, inset 0 0 0 1px #f2f2f2, 0 2px 4px rgba(0, 0, 0, 0.2);\n          box-shadow:inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9, inset 0 0 0 1px #f2f2f2, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color:#8c8c8c;\n  text-shadow:0 1px 0 rgba(255, 255, 255, 0.5);\n  border-radius:3px;\n  cursor:pointer;\n  display:inline-block;\n  font-family:Verdana, sans-serif;\n  font-size:12px;\n  font-weight:400;\n  line-height:20px;\n  padding:9px 16px 9px;\n  margin:16px 0 0 16px;\n  -webkit-transition:all 20ms ease-out;\n  transition:all 20ms ease-out;\n  vertical-align:top;\n}\n.button-default:visited{\n    color:#8c8c8c;\n    text-shadow:0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.button-default:hover, .button-default:focus{\n    background:#f2f2f2;\n    border-color:#8c8c8c;\n    -webkit-box-shadow:inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9, inset 0 0 0 1px #f2f2f2;\n            box-shadow:inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9, inset 0 0 0 1px #f2f2f2;\n}\n.button-default:active{\n    background:#f2f2f2;\n    -webkit-box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n            box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n}\n.button-default .fa{\n    color:#bfbfbf;\n    text-shadow:0 1px 0 rgba(255, 255, 255, 0.3);\n}\n.button-blue{\n  background-color:#42b0e3;\n  background-image:-webkit-gradient(linear, left top, left bottom, from(#42b0e3), to(#2ba9e3));\n  background-image:linear-gradient(to bottom, #42b0e3, #2ba9e3);\n  border:1px solid #107db0;\n  -webkit-box-shadow:inset 0 1px 0 #7cd4fc, inset 0 -1px 0 #2696c9, inset 0 0 0 1px #59b7e3, 0 2px 4px rgba(0, 0, 0, 0.2);\n          box-shadow:inset 0 1px 0 #7cd4fc, inset 0 -1px 0 #2696c9, inset 0 0 0 1px #59b7e3, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color:white;\n  text-shadow:0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.button-blue:visited{\n    color:white;\n    text-shadow:0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.button-blue:hover, .button-blue:focus{\n    background:#2ba9e3;\n    border-color:#004c6f;\n    -webkit-box-shadow:inset 0 1px 0 #7cd4fc, inset 0 -1px 0 #2696c9, inset 0 0 0 1px #59b7e3;\n            box-shadow:inset 0 1px 0 #7cd4fc, inset 0 -1px 0 #2696c9, inset 0 0 0 1px #59b7e3;\n}\n.button-blue:active{\n    background:#2ba9e3;\n    -webkit-box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n            box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n}\n.button-blue .fa{\n    color:#107db0;\n    text-shadow:0 1px 0 rgba(255, 255, 255, 0.3);\n}\n.button-green{\n  background-color:#97cc76;\n  background-image:-webkit-gradient(linear, left top, left bottom, from(#97cc76), to(#8bcc62));\n  background-image:linear-gradient(to bottom, #97cc76, #8bcc62);\n  border:1px solid #5f993a;\n  -webkit-box-shadow:inset 0 1px 0 #c6e6b3, inset 0 -1px 0 #79b356, inset 0 0 0 1px #a4cc8b, 0 2px 4px rgba(0, 0, 0, 0.2);\n          box-shadow:inset 0 1px 0 #c6e6b3, inset 0 -1px 0 #79b356, inset 0 0 0 1px #a4cc8b, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color:white;\n  text-shadow:0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.button-green:visited{\n    color:white;\n    text-shadow:0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.button-green:hover, .button-green:focus{\n    background:#8bcc62;\n    border-color:#326612;\n    -webkit-box-shadow:inset 0 1px 0 #c6e6b3, inset 0 -1px 0 #79b356, inset 0 0 0 1px #a4cc8b;\n            box-shadow:inset 0 1px 0 #c6e6b3, inset 0 -1px 0 #79b356, inset 0 0 0 1px #a4cc8b;\n}\n.button-green:active{\n    background:#8bcc62;\n    -webkit-box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n            box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n}\n.button-green .fa{\n    color:#5f993a;\n    text-shadow:0 1px 0 rgba(255, 255, 255, 0.3);\n}\n.button-purple{\n  background-color:#847bba;\n  background-image:-webkit-gradient(linear, left top, left bottom, from(#847bba), to(#7568ba));\n  background-image:linear-gradient(to bottom, #847bba, #7568ba);\n  border:1px solid #493e87;\n  -webkit-box-shadow:inset 0 1px 0 #bab6d4, inset 0 -1px 0 #655aa1, inset 0 0 0 1px #948dba, 0 2px 4px rgba(0, 0, 0, 0.2);\n          box-shadow:inset 0 1px 0 #bab6d4, inset 0 -1px 0 #655aa1, inset 0 0 0 1px #948dba, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color:white;\n  text-shadow:0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.button-purple:visited{\n    color:white;\n    text-shadow:0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.button-purple:hover, .button-purple:focus{\n    background:#7568ba;\n    border-color:#1f1654;\n    -webkit-box-shadow:inset 0 1px 0 #bab6d4, inset 0 -1px 0 #655aa1, inset 0 0 0 1px #948dba;\n            box-shadow:inset 0 1px 0 #bab6d4, inset 0 -1px 0 #655aa1, inset 0 0 0 1px #948dba;\n}\n.button-purple:active{\n    background:#7568ba;\n    -webkit-box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n            box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n}\n.button-purple .fa{\n    color:#493e87;\n    text-shadow:0 1px 0 rgba(255, 255, 255, 0.3);\n}\n.button-orange{\n  background-color:#f58a38;\n  background-image:-webkit-gradient(linear, left top, left bottom, from(#f58a38), to(#f57c20));\n  background-image:linear-gradient(to bottom, #f58a38, #f57c20);\n  border:1px solid #c25706;\n  -webkit-box-shadow:inset 0 1px 0 #ffb984, inset 0 -1px 0 #db6f1d, inset 0 0 0 1px #f59851, 0 2px 4px rgba(0, 0, 0, 0.2);\n          box-shadow:inset 0 1px 0 #ffb984, inset 0 -1px 0 #db6f1d, inset 0 0 0 1px #f59851, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color:white;\n  text-shadow:0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.button-orange:visited{\n    color:white;\n    text-shadow:0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.button-orange:hover, .button-orange:focus{\n    background:#f57c20;\n    border-color:#773300;\n    -webkit-box-shadow:inset 0 1px 0 #ffb984, inset 0 -1px 0 #db6f1d, inset 0 0 0 1px #f59851;\n            box-shadow:inset 0 1px 0 #ffb984, inset 0 -1px 0 #db6f1d, inset 0 0 0 1px #f59851;\n}\n.button-orange:active{\n    background:#f57c20;\n    -webkit-box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n            box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n}\n.button-orange .fa{\n    color:#c25706;\n    text-shadow:0 1px 0 rgba(255, 255, 255, 0.3);\n}\n.button-red{\n  background-color:#ed6d64;\n  background-image:-webkit-gradient(linear, left top, left bottom, from(#ed6d64), to(#ed574c));\n  background-image:linear-gradient(to bottom, #ed6d64, #ed574c);\n  border:1px solid #ba3329;\n  -webkit-box-shadow:inset 0 1px 0 #ffb0aa, inset 0 -1px 0 #d44d44, inset 0 0 0 1px #ed837b, 0 2px 4px rgba(0, 0, 0, 0.2);\n          box-shadow:inset 0 1px 0 #ffb0aa, inset 0 -1px 0 #d44d44, inset 0 0 0 1px #ed837b, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color:white;\n  text-shadow:0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.button-red:visited{\n    color:white;\n    text-shadow:0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.button-red:hover, .button-red:focus{\n    background:#ed574c;\n    border-color:#870c03;\n    -webkit-box-shadow:inset 0 1px 0 #ffb0aa, inset 0 -1px 0 #d44d44, inset 0 0 0 1px #ed837b;\n            box-shadow:inset 0 1px 0 #ffb0aa, inset 0 -1px 0 #d44d44, inset 0 0 0 1px #ed837b;\n}\n.button-red:active{\n    background:#ed574c;\n    -webkit-box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n            box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n}\n.button-red .fa{\n    color:#ba3329;\n    text-shadow:0 1px 0 rgba(255, 255, 255, 0.3);\n}\n.button-yellow{\n  background-color:#fce374;\n  background-image:-webkit-gradient(linear, left top, left bottom, from(#fce374), to(#fcdf5b));\n  background-image:linear-gradient(to bottom, #fce374, #fcdf5b);\n  border:1px solid #c9ae34;\n  -webkit-box-shadow:inset 0 1px 0 #fff6ce, inset 0 -1px 0 #e3c852, inset 0 0 0 1px #fce88d, 0 2px 4px rgba(0, 0, 0, 0.2);\n          box-shadow:inset 0 1px 0 #fff6ce, inset 0 -1px 0 #e3c852, inset 0 0 0 1px #fce88d, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color:#967d09;\n  text-shadow:0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.button-yellow:visited{\n    color:#967d09;\n    text-shadow:0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.button-yellow:hover, .button-yellow:focus{\n    background:#fcdf5b;\n    border-color:#967d09;\n    -webkit-box-shadow:inset 0 1px 0 #fff6ce, inset 0 -1px 0 #e3c852, inset 0 0 0 1px #fce88d;\n            box-shadow:inset 0 1px 0 #fff6ce, inset 0 -1px 0 #e3c852, inset 0 0 0 1px #fce88d;\n}\n.button-yellow:active{\n    background:#fcdf5b;\n    -webkit-box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n            box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.2);\n}\n.button-yellow .fa{\n    color:#c9ae34;\n    text-shadow:0 1px 0 rgba(255, 255, 255, 0.3);\n}\n.button .fa{\n  float:left;\n  font-size:14px;\n  line-height:20px;\n  margin:-1px 8px 0 -4px;\n  vertical-align:top;\n}\n.vue-unit-converter > fieldset{\n  border:#ebebeb solid 1px;\n  border-radius:3px;\n  padding:20px 10px;\n}\n.vue-unit-converter .column{\n  padding-right:0;\n  margin-right:1rem;\n  display:table;\n}\n.vue-unit-converter .column > p{\n    display:table-cell;\n}\n.vue-unit-converter .column > p.unit{\n      padding-left:5px;\n      width:110px;\n}\n.vue-unit-converter .column > p.unit select{\n        width:110px;\n}\n.vue-unit-converter .column.arrow{\n    width:30px;\n    font-size:2.38rem;\n}\n.vue-unit-converter .column input, .vue-unit-converter .column select, .vue-unit-converter .column label{\n    margin-bottom:0;\n}\n", ""]);

// exports


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: { // 자식에게 전달되는 변수
		// title: {type: String, required: true},
		// data: {type: Array, required: true},
		from: { type: Number, required: true }
	},
	data: function data() {
		return {
			to: '' // 등급
		};
	},
	mounted: function mounted() {},

	methods: {
		convert: function convert() {
			if (this.from <= 0 || this.waist <= 0) {
				alertify.error('엉덩이둘레와 허리둘레를 입력하세요.');
				return;
			}

			var whrRange = this.whrRange;
			var range = (whrRange[1] - whrRange[0]) * 3;
			this.gaugeData = {
				cells: [{ title: '사지비만', value: whrRange[0] - range, valueTitle: 'WHR' }, { title: '정상', value: whrRange[0] }, { title: '복부비만', value: whrRange[1], maxValue: whrRange[1] + range }]
			};

			this.value = Math.round(this.waist / this.hip * 100) / 100;
		}
	}
});

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "vue-unit-converter",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.convert($event)
        }
      }
    },
    [
      _c("fieldset", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "column from" }, [
            _c("p", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.from,
                    expression: "from"
                  }
                ],
                attrs: { type: "number", id: "from" },
                domProps: { value: _vm.from },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.from = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column arrow" }, [
            _vm._v("\n\t\t\t\t→\n\t\t\t")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column to" }, [
            _c("p", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.to,
                    expression: "to"
                  }
                ],
                attrs: { type: "number", id: "to", readonly: "" },
                domProps: { value: _vm.to },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.to = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm._m(1)
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "unit" }, [
      _c("select", [
        _c("option", { attrs: { value: "mm" } }, [_vm._v("mm(밀리미터)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "cm" } }, [_vm._v("cm(센티미터)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "m" } }, [_vm._v("m(미터)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "km" } }, [_vm._v("km(킬로미터)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "in" } }, [_vm._v("in(인치)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "ft" } }, [_vm._v("ft(피트)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "yd" } }, [_vm._v("yd(야드)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "mile" } }, [_vm._v("mile(마일)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "尺" } }, [_vm._v("尺(자)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "間" } }, [_vm._v("間(간)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "町" } }, [_vm._v("町(정)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "里" } }, [_vm._v("里(리)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "海里" } }, [_vm._v("海里(해리)")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "unit" }, [
      _c("select", [
        _c("option", { attrs: { value: "mm" } }, [_vm._v("mm(밀리미터)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "cm" } }, [_vm._v("cm(센티미터)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "m" } }, [_vm._v("m(미터)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "km" } }, [_vm._v("km(킬로미터)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "in" } }, [_vm._v("in(인치)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "ft" } }, [_vm._v("ft(피트)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "yd" } }, [_vm._v("yd(야드)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "mile" } }, [_vm._v("mile(마일)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "尺" } }, [_vm._v("尺(자)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "間" } }, [_vm._v("間(간)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "町" } }, [_vm._v("町(정)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "里" } }, [_vm._v("里(리)")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "海里" } }, [_vm._v("海里(해리)")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-773ed5ea", module.exports)
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

/******/ });