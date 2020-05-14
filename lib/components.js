/*!
 * 
 * 	orcrist-mobile v1.1.1
 * 
 * 	Copyright 2020-present Orcrist Mobile.
 * 	All rights reserved.
 * 				
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["orcrist-mobile"] = factory(require("react"), require("react-dom"));
	else
		root["orcrist-mobile"] = factory(root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__4__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"_3bsf4cRlzKM_obLChTw6pL"};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"footer":"_2EY2qji6Kks9_DZw0927R9"};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ost_mask":"_1qpSKA7i_9bcObRQYMWBPF","ost_mask_default_popup":"_29zgsS9V-fo9NGnZHuNxFQ","ost_mask_show_fade_in":"hls3Ou1iGM9GKopWi9NmN","amFadeIn":"_3XWi3wnsGbPovGC2SDdjt7","ost_mask_show_fade_out":"_1i75po8cOH_aEPclND9mal","amFadeOut":"Aef-PruCTw0PMb9CkCxLt"};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*! https://mths.be/scrollingelement v1.5.2 by @diegoperini & @mathias | MIT license */
if (!('scrollingElement' in document)) (function() {

  function computeStyle(element) {
    if (window.getComputedStyle) {
      // Support Firefox < 4 which throws on a single parameter.
      return getComputedStyle(element, null);
    }
    // Support Internet Explorer < 9.
    return element.currentStyle;
  }

  function isBodyElement(element) {
    // The `instanceof` check gives the correct result for e.g. `body` in a
    // non-HTML namespace.
    if (window.HTMLBodyElement) {
      return element instanceof HTMLBodyElement;
    }
    // Fall back to a `tagName` check for old browsers.
    return /body/i.test(element.tagName);
  }

  function getNextBodyElement(frameset) {
    // We use this function to be correct per spec in case `document.body` is
    // a `frameset` but there exists a later `body`. Since `document.body` is
    // a `frameset`, we know the root is an `html`, and there was no `body`
    // before the `frameset`, so we just need to look at siblings after the
    // `frameset`.
    var current = frameset;
    while (current = current.nextSibling) {
      if (current.nodeType == 1 && isBodyElement(current)) {
        return current;
      }
    }
    // No `body` found.
    return null;
  }

  // Note: standards mode / quirks mode can be toggled at runtime via
  // `document.write`.
  var isCompliantCached;
  var isCompliant = function() {
    var isStandardsMode = /^CSS1/.test(document.compatMode);
    if (!isStandardsMode) {
      // In quirks mode, the result is equivalent to the non-compliant
      // standards mode behavior.
      return false;
    }
    if (isCompliantCached === void 0) {
      // When called for the first time, check whether the browser is
      // standard-compliant, and cache the result.
      var iframe = document.createElement('iframe');
      iframe.style.height = '1px';
      (document.body || document.documentElement || document).appendChild(iframe);
      var doc = iframe.contentWindow.document;
      doc.write('<!DOCTYPE html><div style="height:9999em">x</div>');
      doc.close();
      isCompliantCached = doc.documentElement.scrollHeight > doc.body.scrollHeight;
      iframe.parentNode.removeChild(iframe);
    }
    return isCompliantCached;
  };

  function isRendered(style) {
    return style.display != 'none' && !(style.visibility == 'collapse' &&
			/^table-(.+-group|row|column)$/.test(style.display));
  }

  function isScrollable(body) {
    // A `body` element is scrollable if `body` and `html` both have
    // non-`visible` overflow and are both being rendered.
    var bodyStyle = computeStyle(body);
    var htmlStyle = computeStyle(document.documentElement);
    return bodyStyle.overflow != 'visible' && htmlStyle.overflow != 'visible' &&
			isRendered(bodyStyle) && isRendered(htmlStyle);
  }

  var scrollingElement = function() {
    if (isCompliant()) {
      return document.documentElement;
    }
    var body = document.body;
    // Note: `document.body` could be a `frameset` element, or `null`.
    // `tagName` is uppercase in HTML, but lowercase in XML.
    var isFrameset = body && !/body/i.test(body.tagName);
    body = isFrameset ? getNextBodyElement(body) : body;
    // If `body` is itself scrollable, it is not the `scrollingElement`.
    return body && isScrollable(body) ? null : body;
  };

  if (Object.defineProperty) {
    // Support modern browsers that lack a native implementation.
    Object.defineProperty(document, 'scrollingElement', {
      'get': scrollingElement
    });
  } else if (document.__defineGetter__) {
    // Support Firefox ≤ 3.6.9, Safari ≤ 4.1.3.
    document.__defineGetter__('scrollingElement', scrollingElement);
  } else {
    // IE ≤ 4 lacks `attachEvent`, so it only gets this one assignment. IE ≤ 7
    // gets it too, but the value is updated later (see `propertychange`).
    document.scrollingElement = scrollingElement();
    document.attachEvent && document.attachEvent('onpropertychange', function() {
      // This is for IE ≤ 7 only.
      // A `propertychange` event fires when `<body>` is parsed because
      // `document.activeElement` then changes.
      if (window.event.propertyName == 'activeElement') {
        document.scrollingElement = scrollingElement();
      }
    });
  }
}());


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"loading":"_28lSbUu3npJtnts-Ni7Ebf","loading_svg":"_12__R27_wpUum2q55VIzi9","rotateLoading":"_3faDDeXkveD-Lhq08X4RlJ","loading_text":"_1zdJ61GwngG9o-i_PKZRT7"};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Header", function() { return /* reexport */ Header_Header; });
__webpack_require__.d(__webpack_exports__, "Footer", function() { return /* reexport */ Footer_Footer; });
__webpack_require__.d(__webpack_exports__, "Loading", function() { return /* reexport */ components_Loading; });
__webpack_require__.d(__webpack_exports__, "OstMask", function() { return /* reexport */ OstMask_OstMask; });

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./components/Header/styles.less
var styles = __webpack_require__(1);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./components/Header/index.tsx
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var classNames = __webpack_require__(2);

var Header_Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header(props) {
    _classCallCheck(this, Header);

    return _super.call(this, props);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      console.log(styles_default.a.header);
      var headerClass = classNames(this.props.className, {
        header: true
      }, styles_default.a.header);
      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: headerClass
      }, "Header");
    }
  }]);

  return Header;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);


// EXTERNAL MODULE: ./components/Footer/styles.less
var Footer_styles = __webpack_require__(3);
var Footer_styles_default = /*#__PURE__*/__webpack_require__.n(Footer_styles);

// CONCATENATED MODULE: ./components/Footer/index.tsx
function Footer_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer_typeof = function _typeof(obj) { return typeof obj; }; } else { Footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer_typeof(obj); }

function Footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Footer_defineProperties(Constructor, staticProps); return Constructor; }

function Footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Footer_setPrototypeOf(subClass, superClass); }

function Footer_setPrototypeOf(o, p) { Footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Footer_setPrototypeOf(o, p); }

function Footer_createSuper(Derived) { return function () { var Super = Footer_getPrototypeOf(Derived), result; if (Footer_isNativeReflectConstruct()) { var NewTarget = Footer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Footer_possibleConstructorReturn(this, result); }; }

function Footer_possibleConstructorReturn(self, call) { if (call && (Footer_typeof(call) === "object" || typeof call === "function")) { return call; } return Footer_assertThisInitialized(self); }

function Footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Footer_getPrototypeOf(o) { Footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Footer_getPrototypeOf(o); }




var Footer_classNames = __webpack_require__(2);

var Footer_Footer = /*#__PURE__*/function (_React$Component) {
  Footer_inherits(Footer, _React$Component);

  var _super = Footer_createSuper(Footer);

  function Footer(props) {
    Footer_classCallCheck(this, Footer);

    return _super.call(this, props);
  }

  Footer_createClass(Footer, [{
    key: "render",
    value: function render() {
      var footerClass = Footer_classNames(this.props.className, Footer_styles_default.a.footer);
      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: footerClass
      }, "Footer");
    }
  }]);

  return Footer;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);


// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(4);
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_);

// EXTERNAL MODULE: ./components/OstMask/style.less
var style = __webpack_require__(5);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./components/OstMask/scrollingelement.js
var scrollingelement = __webpack_require__(6);

// CONCATENATED MODULE: ./components/OstMask/preventBgScroll.js


const preventBgScroll = () => {

  if(!window.OSTMASK_BODY_SCROLL_LOCKED_POSITION_FIXED){
    window.OSTMASK_BODY_SCROLL_LOCKED_POSITION_FIXED = [];
  }

  return {
    afterOpen: () => {
      if (!window.OSTMASK_BODY_SCROLL_LOCKED_POSITION_FIXED.length) {
        updataScrollState().lock();
      }

      window.OSTMASK_BODY_SCROLL_LOCKED_POSITION_FIXED.push('0');

    },
    beforeClose: () => {
      window.OSTMASK_BODY_SCROLL_LOCKED_POSITION_FIXED.pop();

      if (!window.OSTMASK_BODY_SCROLL_LOCKED_POSITION_FIXED.length) {
        updataScrollState().release();
      }

    }
  }
}

let _scrollTop = null;

const updataScrollState = () => {

  return {
    lock: () => {

      _scrollTop = document.scrollingElement.scrollTop;
      document.body.style.top = -_scrollTop + 'px';
      document.body.style.width = '100%';
      document.body.style.position = 'fixed';
    },
    release: () => {

      // scrollTop lost after set position:fixed, restore it back.
      document.body.style.position = null;
      document.body.style.top = null;
      document.scrollingElement.scrollTop = _scrollTop;
    }
  }
}

/* harmony default export */ var OstMask_preventBgScroll = (preventBgScroll);

// CONCATENATED MODULE: ./components/OstMask/index.tsx
function OstMask_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { OstMask_typeof = function _typeof(obj) { return typeof obj; }; } else { OstMask_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return OstMask_typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function OstMask_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function OstMask_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function OstMask_createClass(Constructor, protoProps, staticProps) { if (protoProps) OstMask_defineProperties(Constructor.prototype, protoProps); if (staticProps) OstMask_defineProperties(Constructor, staticProps); return Constructor; }

function OstMask_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) OstMask_setPrototypeOf(subClass, superClass); }

function OstMask_setPrototypeOf(o, p) { OstMask_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return OstMask_setPrototypeOf(o, p); }

function OstMask_createSuper(Derived) { return function () { var Super = OstMask_getPrototypeOf(Derived), result; if (OstMask_isNativeReflectConstruct()) { var NewTarget = OstMask_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return OstMask_possibleConstructorReturn(this, result); }; }

function OstMask_possibleConstructorReturn(self, call) { if (call && (OstMask_typeof(call) === "object" || typeof call === "function")) { return call; } return OstMask_assertThisInitialized(self); }

function OstMask_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function OstMask_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function OstMask_getPrototypeOf(o) { OstMask_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return OstMask_getPrototypeOf(o); }






var classnames = __webpack_require__(2);

var OstMask_OstMask = /*#__PURE__*/function (_Component) {
  OstMask_inherits(OstMask, _Component);

  var _super = OstMask_createSuper(OstMask);

  function OstMask(props) {
    var _this;

    OstMask_classCallCheck(this, OstMask);

    _this = _super.call(this, props);

    _this.showUpdata = function () {
      if (_this.props.show) {
        _this.container && _this.container.removeEventListener("animationend", _this.removeContainer);

        _this.state._preventBgScroll.afterOpen();
      } else {
        _this.container && _this.container.addEventListener("animationend", _this.removeContainer);

        _this.state._preventBgScroll.beforeClose();
      }
    };

    _this.removeContainer = function () {
      _this.container && _this.container.parentNode.removeChild(_this.container);
      _this.componentActivated = false;
      _this.container = null;
    };

    _this.getContainer = function () {
      if (!_this.container) {
        var container = document.createElement("div");
        var containerId = "ost_mask_container_".concat(new Date().getTime());
        container.setAttribute("id", containerId);
        document.body.appendChild(container);
        _this.container = container;
      }

      return _this.container;
    };

    _this.getComponent = function () {
      var _classnames, _classnames2;

      var _this$props = _this.props,
          show = _this$props.show,
          _onClick = _this$props.onClick,
          type = _this$props.type;
      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", null, !type && external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: classnames(style_default.a.ost_mask_default_popup, (_classnames = {}, _defineProperty(_classnames, style_default.a.ost_mask_show_fade_out, !show), _defineProperty(_classnames, style_default.a.ost_mask_show_fade_in, show), _classnames))
      }, _this.props.children), external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: classnames("", style_default.a.ost_mask, (_classnames2 = {}, _defineProperty(_classnames2, style_default.a.ost_mask_show_fade_out, !show), _defineProperty(_classnames2, style_default.a.ost_mask_show_fade_in, show), _classnames2)),
        onClick: function onClick(e) {
          return _onClick && _onClick(e);
        }
      }));
    };

    _this.state = {
      _preventBgScroll: OstMask_preventBgScroll()
    };
    _this.componentActivated = false;
    return _this;
  }

  OstMask_createClass(OstMask, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.showUpdata();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.show !== this.props.show) {
        this.showUpdata();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var show = this.props.show;
      if (show) this.componentActivated = true;
      if (!this.componentActivated) return null;
      return external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.createPortal(this.getComponent(), this.getContainer());
    }
  }]);

  return OstMask;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);


// EXTERNAL MODULE: ./components/Loading/style.less
var Loading_style = __webpack_require__(7);
var Loading_style_default = /*#__PURE__*/__webpack_require__.n(Loading_style);

// CONCATENATED MODULE: ./components/Loading/index.tsx
function Loading_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Loading_typeof = function _typeof(obj) { return typeof obj; }; } else { Loading_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Loading_typeof(obj); }

function Loading_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Loading_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Loading_createClass(Constructor, protoProps, staticProps) { if (protoProps) Loading_defineProperties(Constructor.prototype, protoProps); if (staticProps) Loading_defineProperties(Constructor, staticProps); return Constructor; }

function Loading_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Loading_setPrototypeOf(subClass, superClass); }

function Loading_setPrototypeOf(o, p) { Loading_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Loading_setPrototypeOf(o, p); }

function Loading_createSuper(Derived) { return function () { var Super = Loading_getPrototypeOf(Derived), result; if (Loading_isNativeReflectConstruct()) { var NewTarget = Loading_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Loading_possibleConstructorReturn(this, result); }; }

function Loading_possibleConstructorReturn(self, call) { if (call && (Loading_typeof(call) === "object" || typeof call === "function")) { return call; } return Loading_assertThisInitialized(self); }

function Loading_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Loading_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Loading_getPrototypeOf(o) { Loading_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Loading_getPrototypeOf(o); }





var Loading_Loading = /*#__PURE__*/function (_Component) {
  Loading_inherits(Loading, _Component);

  var _super = Loading_createSuper(Loading);

  function Loading() {
    Loading_classCallCheck(this, Loading);

    return _super.apply(this, arguments);
  }

  Loading_createClass(Loading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isLoading = _this$props.isLoading,
          loadingText = _this$props.loadingText;
      var text = loadingText || "加载中…";
      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(OstMask_OstMask, {
        show: isLoading
      }, external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: Loading_style_default.a.loading
      }, external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
        className: Loading_style_default.a.loading_svg
      }), external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
        className: Loading_style_default.a.loading_text
      }, text)));
    }
  }]);

  return Loading;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

/* harmony default export */ var components_Loading = (Loading_Loading);
// CONCATENATED MODULE: ./components/index.ts





/***/ })
/******/ ]);
});
//# sourceMappingURL=components.js.map