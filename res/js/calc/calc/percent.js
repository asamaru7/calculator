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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/_webpack/js/calc/calc/percent.js":
/*!*************************************************!*\
  !*** ./source/_webpack/js/calc/calc/percent.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/formats */ "./source/_webpack/js/calc/utils/formats.js");
 // https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&query=%ED%8D%BC%EC%84%BC%ED%8A%B8%20%EA%B3%84%EC%82%B0%EA%B8%B0&mra=bkUz
// http://webtool.cusis.net/calculator-percent/
// https://www.dailyest.co.kr/contents/discount.php
// http://baegbunyul.gen.im/


$(function () {
  var _default = {
    num_a_1: '',
    num_a_2: '',
    // result_a: '',
    num_b_1: '',
    num_b_2: '',
    // result_b: '',
    num_c_1: '',
    num_c_2: '',
    // result_c: '',
    result_c_t: '',
    num_d_1: '',
    num_d_2: '',
    num_d_3: '1' // result_d: '',

  };
  new Vue({
    el: 'section.calculator',
    data: $.extend(true, {}, _default),
    computed: {
      result_a: function result_a() {
        if (String(this.num_a_1) === '' || String(this.num_a_2) === '') {
          return '';
        }

        return _utils_formats__WEBPACK_IMPORTED_MODULE_0__["default"].numberFormat(this.num_a_1 * (this.num_a_2 / 100.0), 2);
      },
      result_b: function result_b() {
        if (String(this.num_b_1) === '' || String(this.num_b_2) === '') {
          return '';
        }

        return _utils_formats__WEBPACK_IMPORTED_MODULE_0__["default"].numberFormat(this.num_b_2 * 100 / this.num_b_1, 2);
      },
      result_c: function result_c() {
        if (String(this.num_c_1) === '' || String(this.num_c_2) === '') {
          this.result_c_t = '';
          return '';
        }

        var result = _utils_formats__WEBPACK_IMPORTED_MODULE_0__["default"].numberFormat((this.num_c_2 - this.num_c_1) / this.num_c_1 * 100.0, 2);
        this.result_c_t = result > 0 ? '증가' : result < 0 ? '감소' : '';
        return Math.abs(result);
      },
      result_d: function result_d() {
        if (String(this.num_d_1) === '' || String(this.num_d_2) === '') {
          return '';
        }

        return _utils_formats__WEBPACK_IMPORTED_MODULE_0__["default"].numberFormat(parseFloat(this.num_d_1) + this.num_d_1 * (this.num_d_2 / 100.0) * this.num_d_3, 2);
      }
    },
    created: function created() {},
    mounted: function mounted() {
      this.reset();
    },
    methods: {
      calc: function calc() {
        return false;
      },
      reset: function reset() {
        for (var id in _default) {
          if (_default.hasOwnProperty(id)) {
            this[id] = _default[id];
          }
        }
      }
    }
  });
});

/***/ }),

/***/ "./source/_webpack/js/calc/utils/formats.js":
/*!**************************************************!*\
  !*** ./source/_webpack/js/calc/utils/formats.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
 // https://github.com/kvz/locutus/blob/master/src/php/strings/numberFormat.js

/* harmony default export */ __webpack_exports__["default"] = ({
  numberFormat: function numberFormat(number, decimals, decPoint, thousandsSep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number;
    var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    var sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep;
    var dec = typeof decPoint === 'undefined' ? '.' : decPoint;
    var s;

    var toFixedFix = function toFixedFix(n, prec) {
      if (('' + n).indexOf('e') === -1) {
        return +(Math.round(n + 'e+' + prec) + 'e-' + prec);
      } else {
        var arr = ('' + n).split('e');
        var sig = '';

        if (+arr[1] + prec > 0) {
          sig = '+';
        }

        return (+(Math.round(+arr[0] + 'e' + sig + (+arr[1] + prec)) + 'e-' + prec)).toFixed(prec);
      }
    }; // @todo: for IE parseFloat(0.55).toFixed(0) = 0;


    s = (prec ? toFixedFix(n, prec).toString() : '' + Math.round(n)).split('.');

    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }

    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }

    return s.join(dec);
  },
  moneyKorean: function moneyKorean(num, space) {
    //let arrayNum = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
    var arrayNum = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var arrayUnit = ['', '십', '백', '천', '만 ', '십만 ', '백만 ', '천만 ', '억 ', '십억 ', '백억 ', '천억 ', '조 ', '십조 ', '백조'];
    var arrayStr = [];
    var str = String(num);
    var len = str.length;
    var hanStr = '';

    for (var i = 0; i < len; i++) {
      arrayStr[i] = str.substr(i, 1);
    }

    var code = len;

    for (var _i = 0; _i < len; _i++) {
      code--;
      var tmpUnit = '';

      if (arrayNum[arrayStr[_i]] !== '') {
        tmpUnit = arrayUnit[code];

        if (code > 4) {
          if (Math.floor(code / 4) === Math.floor((code - 1) / 4) && arrayNum[arrayStr[_i + 1]] !== '' || Math.floor(code / 4) === Math.floor((code - 2) / 4) && arrayNum[arrayStr[_i + 2]] !== '') {
            tmpUnit = arrayUnit[code].substr(0, 1);
          }
        }
      }

      hanStr += arrayNum[arrayStr[_i]] + tmpUnit + (space || '');
    }

    return $.trim(hanStr);
  },
  moneySimpleKorean: function moneySimpleKorean(number, space) {
    var inputNumber = number < 0 ? false : number;
    var unitWords = ['', '만', '억', '조', '경'];
    var splitUnit = 10000;
    var splitCount = unitWords.length;
    var resultArray = [];
    var resultString = '';

    for (var i = 0; i < splitCount; i++) {
      var unitResult = inputNumber % Math.pow(splitUnit, i + 1) / Math.pow(splitUnit, i);
      unitResult = Math.floor(unitResult);

      if (unitResult > 0) {
        resultArray[i] = unitResult;
      }
    }

    for (var _i2 = 0; _i2 < resultArray.length; _i2++) {
      if (!resultArray[_i2]) continue;
      resultString = String(this.numberFormat(resultArray[_i2])) + unitWords[_i2] + (space || '') + resultString;
    }

    return resultString;
  },
  formatDate: function () {
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function zp(a, b) {
      return (1e9 + a + '').slice(-b);
    } // pads the number a until it is b digits long


    function or(a) {
      return ["th", "st", "nd", "rd"][(a = ~~(a < 0 ? -a : a) % 100) > 10 && a < 14 || (a %= 10) > 3 ? 0 : a];
    } // returns ordinal for number a


    function fm(y) {
      var d = new Date(y, 0, 1);

      while (d.getDay() - 1) {
        d.setDate(d.getDate() + 1);
      }

      return +d;
    } // returns timestamp of first monday in year y


    function mn(d) {
      return 864e5 * ~~(d / 864e5);
    } // Timestamp of midnight


    return function (format, dt) {
      format = format.replace(/r/g, 'D, d M Y H:i:s O').replace(/c/g, 'Y-m-d\\TH:i:sP');
      dt = dt || new Date();
      var year = dt.getFullYear(),
          month = dt.getMonth(),
          date = dt.getDate(),
          day = dt.getDay(),
          hour = dt.getHours(),
          mins = dt.getMinutes(),
          secs = dt.getSeconds(),
          ms = dt.getMilliseconds(),
          tz = dt.getTimezoneOffset();
      var bits = {
        // in the order they appear on http://php.net/manual/en/function.date.php
        d: zp(date, 2),
        D: dayNames[day].substr(0, 3),
        j: date,
        l: dayNames[day],
        N: day || 7,
        S: or(date),
        w: day,
        z: 0 | (dt - new Date(year, 0, 1)) / 864e5,
        W: Math.ceil(~~((mn(dt) - fm(year)) / 864e5 + 0.5) / 7),
        F: monthNames[month],
        m: zp(month + 1, 2),
        M: monthNames[month].substr(0, 3),
        n: month + 1,
        t: new Date(year, month + 1, 0).getDate(),
        L: +(new Date(year, 2, 0).getDate() == 29),
        o: year - +(new Date(fm(year)) > dt),
        Y: year,
        y: (year + '').slice(-2),
        a: hour > 11 ? 'pm' : 'am',
        A: hour > 11 ? 'PM' : 'AM',
        B: 0 | (ms + 1e3 * (secs + 60 * (mins + 60 * hour))) / 86400,
        g: hour % 12 || 12,
        G: hour,
        h: zp(hour % 12 || 12, 2),
        H: zp(hour, 2),
        i: zp(mins, 2),
        s: zp(secs, 2),
        u: ms * 1000,
        e: undefined,
        // Can this be done in js?
        I: +!!((dt - new Date(year, 0, 1)) % 864e5),
        O: /(\S*\s){5}\S+([\+\-]\d{4})/.exec(dt.toString())[2],
        P: /(\S*\s){5}\S+([\+\-]\d{2})(\d{2})/.exec(dt.toString()).slice(2).join(':'),
        T: undefined,
        // Can this be done in js?
        Z: -tz * 60,
        U: 0 | dt / 1000
      };
      var out = '';

      while (format) {
        var c = format.charAt(0);

        if (c == '\\') {
          out += format.charAt(1);
          format = format.slice(2);
          continue;
        }

        var bit = bits[c];
        out += bit !== undefined ? bit : c;
        format = format.slice(1);
      }

      return out;
    };
  }()
});

/***/ }),

/***/ 7:
/*!*******************************************************!*\
  !*** multi ./source/_webpack/js/calc/calc/percent.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/web/static-site/projects/calculator/source/_webpack/js/calc/calc/percent.js */"./source/_webpack/js/calc/calc/percent.js");


/***/ })

/******/ });