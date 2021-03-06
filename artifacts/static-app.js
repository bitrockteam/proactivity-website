(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(10);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(31)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(30);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(32);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(16);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(15);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(10);

var _helpers = __webpack_require__(33);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(29)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(11);

// EXTERNAL MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/Navbar/styles.scss
var styles = __webpack_require__(41);

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(1);

// CONCATENATED MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/Navbar/index.js




function NavBar() {
  var mobileNavigation = Object(external_react_["useRef"])();
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "nav-container"
  }, /*#__PURE__*/external_react_default.a.createElement("nav", null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./logo.png"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "links-container"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_scroll_["Link"], {
    offset: -93,
    to: "how-we-work"
  }, " ", /*#__PURE__*/external_react_default.a.createElement("p", null, "How we work"), " "), /*#__PURE__*/external_react_default.a.createElement(external_react_scroll_["Link"], {
    offset: -93,
    to: "mindset"
  }, " ", /*#__PURE__*/external_react_default.a.createElement("p", null, "Mindset"), " "), /*#__PURE__*/external_react_default.a.createElement(external_react_scroll_["Link"], {
    offset: -93,
    to: "technologies"
  }, " ", /*#__PURE__*/external_react_default.a.createElement("p", null, "Technologies"), " "), /*#__PURE__*/external_react_default.a.createElement(external_react_scroll_["Link"], {
    offset: -93,
    to: "contacts"
  }, " ", /*#__PURE__*/external_react_default.a.createElement("p", null, "Contacts"), " ")), /*#__PURE__*/external_react_default.a.createElement("svg", {
    onClick: function onClick() {
      return mobileNavigation.current.style.top === "93px" ? mobileNavigation.current.style.top = "-30%" : mobileNavigation.current.style.top = "93px";
    },
    width: "35px",
    height: "35px",
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 384.97 384.97"
  }, /*#__PURE__*/external_react_default.a.createElement("g", null, /*#__PURE__*/external_react_default.a.createElement("g", null, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03 c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03 S379.58,180.455,372.939,180.455z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606 c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"
  }))))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mobile-navigation",
    ref: mobileNavigation
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_scroll_["Link"], {
    offset: -93,
    to: "how-we-work",
    onClick: function onClick() {
      return mobileNavigation.current.style.top = "-30%";
    }
  }, " ", /*#__PURE__*/external_react_default.a.createElement("p", null, "How we work"), " "), /*#__PURE__*/external_react_default.a.createElement(external_react_scroll_["Link"], {
    offset: -93,
    to: "mindset",
    onClick: function onClick() {
      return mobileNavigation.current.style.top = "-30%";
    }
  }, " ", /*#__PURE__*/external_react_default.a.createElement("p", null, "Mindset"), " "), /*#__PURE__*/external_react_default.a.createElement(external_react_scroll_["Link"], {
    offset: -93,
    to: "technologies",
    onClick: function onClick() {
      return mobileNavigation.current.style.top = "-30%";
    }
  }, " ", /*#__PURE__*/external_react_default.a.createElement("p", null, "Technologies"), " "), /*#__PURE__*/external_react_default.a.createElement(external_react_scroll_["Link"], {
    offset: -93,
    to: "contacts",
    onClick: function onClick() {
      return mobileNavigation.current.style.top = "-30%";
    }
  }, " ", /*#__PURE__*/external_react_default.a.createElement("p", null, "Contacts"), " ")));
}

/* harmony default export */ var Navbar = (NavBar);
// EXTERNAL MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/Landing/styles.scss
var Landing_styles = __webpack_require__(42);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(2);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// CONCATENATED MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/Landing/index.js





function Landing() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "landing-container"
  }, /*#__PURE__*/external_react_default.a.createElement(Fade_default.a, {
    bottom: true,
    distance: "50px"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "landing-title-container"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "Developing "), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "software"), " is a "), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "new art "), "form "), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(external_react_scroll_["Link"], {
    offset: -93,
    to: "more"
  }, /*#__PURE__*/external_react_default.a.createElement("button", null, "More")))), /*#__PURE__*/external_react_default.a.createElement(Fade_default.a, {
    bottom: true,
    distance: "100px",
    delay: 200
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./landing.png"
  })));
}

/* harmony default export */ var components_Landing = (Landing);
// EXTERNAL MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/SectionContainer/styles.scss
var SectionContainer_styles = __webpack_require__(43);

// CONCATENATED MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/SectionContainer/index.js




function SectionContainer(_ref) {
  var children = _ref.children,
      name = _ref.name,
      sectionTitle = _ref.sectionTitle;
  return /*#__PURE__*/external_react_default.a.createElement("section", {
    name: name,
    className: "section-container"
  }, /*#__PURE__*/external_react_default.a.createElement(Fade_default.a, {
    bottom: true,
    distance: "50px"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "black-rectangle"
  })), /*#__PURE__*/external_react_default.a.createElement(Fade_default.a, {
    bottom: true,
    distance: "50px",
    delay: 200
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, sectionTitle)), /*#__PURE__*/external_react_default.a.createElement(Fade_default.a, {
    bottom: true,
    distance: "50px",
    delay: 500
  }, children));
}

/* harmony default export */ var components_SectionContainer = (SectionContainer);
// EXTERNAL MODULE: /Users/mariaburlando/Desktop/proactivity/src/app.scss
var app = __webpack_require__(44);

// EXTERNAL MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/Footer/styles.scss
var Footer_styles = __webpack_require__(45);

// CONCATENATED MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/Footer/index.js




function Footer() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./logo-white.png"
  }), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "ProActivity "), "combines professional competences and expertise in the development of enterprise-level software solutions.")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("h4", null, "Corporate"), /*#__PURE__*/external_react_default.a.createElement("a", {
    target: "__blank",
    href: "https://www.linkedin.com/company/proactivitysrl/jobs"
  }, "Careers"), /*#__PURE__*/external_react_default.a.createElement("a", {
    target: "__blank",
    href: "https://fortitudegroup.it/"
  }, "Fortitude Group"), /*#__PURE__*/external_react_default.a.createElement("a", {
    target: "__blank",
    href: "https://www.iubenda.com/privacy-policy/66744923"
  }, "Privacy Policy"), /*#__PURE__*/external_react_default.a.createElement("h4", null, "Follow us"), /*#__PURE__*/external_react_default.a.createElement("a", {
    target: "__blank",
    href: "https://www.linkedin.com/company/proactivitysrl/"
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    height: "20px",
    viewBox: "-8 0 511 512",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "m111.898438 160.664062h-96.398438c-8.285156 0-15 6.71875-15 15v321.335938c0 8.285156 6.714844 15 15 15h96.398438c8.285156 0 15-6.714844 15-15v-321.335938c0-8.28125-6.714844-15-15-15zm-15 321.335938h-66.398438v-291.335938h66.398438zm0 0",
    fill: "white",
    stroke: "white"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "m63.703125 0c-34.851563 0-63.203125 28.351562-63.203125 63.195312 0 34.851563 28.351562 63.199219 63.203125 63.199219 34.847656 0 63.195313-28.351562 63.195313-63.199219 0-34.84375-28.347657-63.195312-63.195313-63.195312zm0 96.394531c-18.308594 0-33.203125-14.890625-33.203125-33.199219 0-18.304687 14.894531-33.195312 33.203125-33.195312 18.304687 0 33.195313 14.890625 33.195313 33.195312 0 18.308594-14.890626 33.199219-33.195313 33.199219zm0 0",
    fill: "white",
    stroke: "white"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "m352.910156 158.542969c-22.800781 0-45.273437 5.496093-65.398437 15.777343-.683594-7.652343-7.109375-13.65625-14.941407-13.65625h-96.40625c-8.28125 0-15 6.71875-15 15v321.335938c0 8.285156 6.71875 15 15 15h96.40625c8.285157 0 15-6.714844 15-15v-176.734375c0-22.734375 18.5-41.230469 41.234376-41.230469 22.734374 0 41.226562 18.496094 41.226562 41.230469v176.734375c0 8.285156 6.71875 15 15 15h96.402344c8.285156 0 15-6.714844 15-15v-194.933594c0-79.140625-64.382813-143.523437-143.523438-143.523437zm113.523438 323.457031h-66.398438v-161.734375c0-39.277344-31.953125-71.230469-71.226562-71.230469-39.28125 0-71.238282 31.953125-71.238282 71.230469v161.734375h-66.402343v-291.335938h66.402343v11.082032c0 5.769531 3.308594 11.027344 8.511719 13.523437 5.199219 2.496094 11.371094 1.785157 15.875-1.820312 20.3125-16.292969 44.851563-24.90625 70.953125-24.90625 62.597656 0 113.523438 50.925781 113.523438 113.523437zm0 0",
    fill: "white",
    stroke: "white"
  }))))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "footer-copyright"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "ProActivity\xA9Copyright ", new Date().getFullYear(), ".  All rights reserved.  VAT 11501860966 - Original artwork by Maurizio Monti")));
}

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/More.js


function More() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_["Fragment"], null, /*#__PURE__*/external_react_default.a.createElement("p", null, "ProActivity provides extraordinary value to companies through a robust team of experienced IT Professionals specialized in the development of ", /*#__PURE__*/external_react_default.a.createElement("b", null, "enterprise-level software solutions.")), /*#__PURE__*/external_react_default.a.createElement("p", null, "We assist and support our clients in managing digital transformation challenges while driving efficiency and improving service levels, no matter the industry. In this way, organizations can easily respond to changing market and business conditions, improve operational efficiencies and elevate performance."), /*#__PURE__*/external_react_default.a.createElement("ul", null, "What makes us stand out from the competition is the perfect blend of:"), /*#__PURE__*/external_react_default.a.createElement("li", null, "::  unrivaled skills and competences on the most widely used technologies"), /*#__PURE__*/external_react_default.a.createElement("li", null, "::  code quality"), /*#__PURE__*/external_react_default.a.createElement("li", null, "::  flexibility and adaptability, according to the client\u2019s specific needs"), /*#__PURE__*/external_react_default.a.createElement("li", null, "::  team stability"), /*#__PURE__*/external_react_default.a.createElement("li", null, "::  premium delivery"));
}

/* harmony default export */ var components_More = (More);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/Mindset.js


function Mindset() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_["Fragment"], null, /*#__PURE__*/external_react_default.a.createElement("p", null, "In order to keep the pace with today\u2019s ever-changing technology scenario, being able to orientate in the digital world with deep knowledge, consciousness and a proactive attitude is essential. Having Professionals on your side is thus vital to uncover the right tech for your toughest business issues."), /*#__PURE__*/external_react_default.a.createElement("img", {
    className: "mindset-image",
    src: "./mindset.png",
    align: "left"
  }), /*#__PURE__*/external_react_default.a.createElement("h3", null, "Vision"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Through our services, we contribute to modernizing the world in which we live and work, combining professional competences and expertise in enterprise-level software solutions to interpret new business models."), /*#__PURE__*/external_react_default.a.createElement("h3", null, "Mission"), /*#__PURE__*/external_react_default.a.createElement("p", null, "ProActivity is uniquely positioned to help enterprises maximize the business value of their IT investments and lay a foundation for high performance with top-notch IT Professionals outsourcing. Our mission is to leverage our clients\u2019 time and increase their productivity, by supporting them in their daily IT challenges. "), /*#__PURE__*/external_react_default.a.createElement("p", {
    style: {
      clear: "left"
    }
  }, "All this makes ProActivity ", /*#__PURE__*/external_react_default.a.createElement("b", null, "a trustworthy Partner for your business"), ", ready to listen to your needs and respond to them with great care and attention to detail."));
}

/* harmony default export */ var components_Mindset = (Mindset);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/HowWeWork.js


function HowWeWork() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_["Fragment"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "how-we-work-image"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "Our highly skilled Professionals will assist you in your technological journey, raising your business to the next level through:")), /*#__PURE__*/external_react_default.a.createElement("h3", null, "TOP-QUALITY SOFTWARE DEVELOPMENT"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Quality is a must in our software development. Having subject-matter and technical knowledge as well as proven tools, our IT specialists are able to complete even the most demanding tasks and complex projects. "), /*#__PURE__*/external_react_default.a.createElement("h3", null, "Professional approach"), /*#__PURE__*/external_react_default.a.createElement("p", null, "We bring together the right blend of software and capabilities, delivering a technology experience tailored to the client\u2019s specific business. Our team always follows the client\u2019s choices in terms of work organization. When possible, we prefer to opt for the Agile method (Scrum, Kanban). However, we can adapt to other traditional methodologies when required (Waterfall or similar)."), /*#__PURE__*/external_react_default.a.createElement("h3", null, "Continuous training"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Training represents one of ProActivity\u2019s pillars, as we consider it a prerogative for the premium-quality of our code. Along with an initial training, our Professionals keep on attending training courses in order to consolidate their skills. We teach them how to write tests, structure code, follow Clean Code best practices, and how to evolve by following the evolution of the main programming languages."), /*#__PURE__*/external_react_default.a.createElement("h3", null, "Stability and delivery"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Security and constancy are keys to a successful digital journey. We assist you at every step of your technology challenges and transformation, right from the beginning up to the last pixel. We won\u2019t change team members to respond to our internal needs, and we are ready to promptly take action to manage eventual criticality within the team."));
}

/* harmony default export */ var components_HowWeWork = (HowWeWork);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/Technologies.js


function Technologies() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_["Fragment"], null, /*#__PURE__*/external_react_default.a.createElement("h3", null, "UNPARALLELED SKILLS FOR A LONG-TERM SUCCESS"), /*#__PURE__*/external_react_default.a.createElement("p", null, "We deploy highly skilled specialists to boost needed capacity or provide specialized capabilities that are lacking within a company\u2019s internal IT team. With Proactivity\u2019s help, clients gain access to high quality, knowledgeable resources that can support them on both Back-end and Front-end side. "), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "technologies-container"
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("h4", null, "Backend"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "Java 8+ / Java EE 7+")), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "Support on less recent Java EE versions "), "(ex. Java EE 6)"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "Application Server "), "(Open Source / Main Vendors)"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "Relational Database "), "(Open Source / Main Vendors)"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "JPA "), "( 2.x or previous)"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "WS* "), "(SOAP)"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "JAX-RS "), "(Rest)"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "Spring / Spring Boot")), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "Microservices "), "(Jakarta EE Micro Profile / Spring Cloud)"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "Cloud based technologies "), "(mainly AWS)")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("h4", null, "Frontend"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Angular"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Angular.js"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Vue.js"))));
}

/* harmony default export */ var components_Technologies = (Technologies);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/Contacts.js


function Contacts() {
  var subject = Object(external_react_["useRef"])("");
  var mailBody = Object(external_react_["useRef"])("");

  var handleMailToSend = function handleMailToSend() {
    if (subject.current.value !== "" && mailBody.current.value !== "") location.href = "mailto:info@proactivity.it?subject=".concat(subject.current.value, "&body=").concat(mailBody.current.value);
  };

  return /*#__PURE__*/external_react_default.a.createElement(external_react_["Fragment"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "contacts-container"
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("p", null, "If you want to find out more on our services and take advantage of our tech Professionals\u2019 expertise, fill in the form. We\u2019d love to assist you."), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "Milano")), /*#__PURE__*/external_react_default.a.createElement("p", null, "Via Pietro Borsieri, 41"), /*#__PURE__*/external_react_default.a.createElement("p", null, "20159 Milano (MI) - Italy"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Phone: +39 0422 1600025"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "mailto:info@proactivity.it"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "info@proactivity.it")))), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: "subject"
  }, "Subject *"), /*#__PURE__*/external_react_default.a.createElement("input", {
    ref: subject,
    id: "subject",
    type: "text"
  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: "mail-body"
  }, "Mail Body *"), /*#__PURE__*/external_react_default.a.createElement("input", {
    ref: mailBody,
    id: "mail-body",
    type: "text"
  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("button", {
    onClick: handleMailToSend
  }, "Send message"))));
}

/* harmony default export */ var components_Contacts = (Contacts);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/proactivity/src/components/CookieNotice.js


function CookieNotice() {
  var cookie = Object(external_react_["useRef"])();

  var acceptCookies = function acceptCookies() {
    if (typeof window !== 'undefined') {
      localStorage.setItem("proactivity-cookie-accept", true);
    }

    closeCookieNotice();
  };

  var closeCookieNotice = function closeCookieNotice() {
    cookie.current.style.display = "none";
  };

  return /*#__PURE__*/external_react_default.a.createElement(external_react_["Fragment"], null, typeof window !== 'undefined' ? !localStorage.getItem("proactivity-cookie-accept") ? /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: cookie,
    className: "cookie-notice"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it."), /*#__PURE__*/external_react_default.a.createElement("button", {
    onClick: acceptCookies
  }, "Ok"), /*#__PURE__*/external_react_default.a.createElement("svg", {
    onClick: closeCookieNotice,
    width: "15px",
    height: "15px",
    viewBox: "0 0 15 15",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default.a.createElement("g", null, /*#__PURE__*/external_react_default.a.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "15",
    y2: "15",
    strokeWidth: "1",
    fill: "white",
    stroke: "white"
  }), /*#__PURE__*/external_react_default.a.createElement("line", {
    x1: "0",
    y1: "15",
    x2: "15",
    y2: "0",
    strokeWidth: "1",
    fill: "white",
    stroke: "white"
  })))) : null : null);
}

/* harmony default export */ var components_CookieNotice = (CookieNotice);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/proactivity/src/App.js














function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(Navbar, null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(components_Landing, null), /*#__PURE__*/external_react_default.a.createElement(components_SectionContainer, {
    name: "more",
    sectionTitle: "Quality. Experience. Delivery."
  }, /*#__PURE__*/external_react_default.a.createElement(components_More, null)), /*#__PURE__*/external_react_default.a.createElement(components_SectionContainer, {
    name: "how-we-work",
    sectionTitle: "How we work"
  }, /*#__PURE__*/external_react_default.a.createElement(components_HowWeWork, null)), /*#__PURE__*/external_react_default.a.createElement(components_SectionContainer, {
    name: "mindset",
    sectionTitle: "Mindset"
  }, /*#__PURE__*/external_react_default.a.createElement(components_Mindset, null)), /*#__PURE__*/external_react_default.a.createElement(components_SectionContainer, {
    name: "technologies",
    sectionTitle: "Technologies"
  }, /*#__PURE__*/external_react_default.a.createElement(components_Technologies, null)), /*#__PURE__*/external_react_default.a.createElement(components_SectionContainer, {
    name: "contacts",
    sectionTitle: "Contacts"
  }, /*#__PURE__*/external_react_default.a.createElement(components_Contacts, null))), /*#__PURE__*/external_react_default.a.createElement(components_Footer, null), /*#__PURE__*/external_react_default.a.createElement(components_CookieNotice, null));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(3);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("/Users/mariaburlando/Desktop/proactivity/node_modules/react-static/lib/browser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to React-Static"));
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(11);

var _router = __webpack_require__(26);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24);
__webpack_require__(27);
module.exports = __webpack_require__(34);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(25)["default"];

var _require = __webpack_require__(13),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sass",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(13),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(28),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);






Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 19))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/index.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/index.js': t_1
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(10);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 3,
	"./": 3,
	"./index": 3,
	"./index.js": 3
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 31;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(15);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(16);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(17);

var _interopRequireWildcard = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(35);

var _Suspense = _interopRequireDefault(__webpack_require__(36));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(39)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("/Users/mariaburlando/Desktop/proactivity/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(18);

var _interopRequireDefault = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(37));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(38));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(40)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".nav-container{width:100%;height:93px;position:relative}nav{width:100%;height:93px;display:flex;align-items:center;border-bottom:2px solid #EBEBEB;background-color:white;position:fixed;z-index:2;top:0;left:0;justify-content:flex-start}nav>img{padding:0 24px;height:57px}nav svg{display:none}.links-container{border-left:2px solid #EBEBEB;height:100%;display:flex;align-items:center}.links-container>a{padding:20px 0 20px 80px;cursor:pointer;margin:0}.links-container>a>p{transition:color 0.2s linear;margin:0}.links-container>a>p:hover{color:rgba(0,0,0,0.5)}.mobile-navigation{display:none}@media (min-width: 900px) and (max-width: 1100px){.links-container{border-left:2px solid #EBEBEB;height:100%;display:flex;align-items:center}.links-container>a{padding:20px 0 20px 40px;cursor:pointer;margin:0}.mobile-navigation{display:none}}@media (max-width: 899px){nav{width:100%;height:93px;display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid #EBEBEB;background-color:white;position:fixed;z-index:5}nav svg{display:block;margin-right:24px;cursor:pointer}nav img{height:40px}.links-container{display:none}.mobile-navigation{position:fixed;display:block;top:-30%;left:0;width:100%;background-color:white;text-align:center;z-index:4;transition:top 0.5s ease-in-out}.mobile-navigation>a{border-bottom:2px solid #EBEBEB;padding:12px 0}.mobile-navigation>a>p{margin:0}}\n", ""]);



/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".landing-container{width:100%;display:flex;align-items:center;flex-direction:row;justify-content:center;padding:117px 0 24px 0}.landing-container>div{width:40%}.landing-container>div>p{font-size:62px;padding:0;margin:0;line-height:71px;color:black}.landing-container>img{width:60%}@media (min-width: 900px) and (max-width: 1100px){.landing-container>div>p{font-size:48px}}@media (max-width: 899px){.landing-container{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 0 24px 0}.landing-container>div{width:100%;text-align:center}.landing-container>div>p{font-size:48px;padding:0;margin:0;line-height:71px;color:black}.landing-container>img{width:100%}}\n", ""]);



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".section-container{padding:24px 0;width:100%}.black-rectangle{width:154px;background-color:black;height:4px}\n", ""]);



/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "*{scroll-behavior:smooth;box-sizing:border-box}body{font-family:'Poppins', sans-serif;font-weight:300;font-size:16px;margin:0;padding:0;color:#404040}a{text-decoration:none;display:block;cursor:pointer}img{max-width:100%}button{background-color:black;border-radius:0;border:none;text-transform:uppercase;color:white;line-height:56px;padding:0 24px;font-size:18px;outline:none;cursor:pointer}p{font-size:18px;color:#404040;font-weight:200;line-height:28px;margin:0;padding:0;margin-bottom:24px}ul{font-size:18px;font-weight:200;line-height:28px;list-style:none;padding:0;margin:0}li{list-style-type:none;font-size:18px;font-weight:300;line-height:28px}h2{font-size:30px;letter-spacing:0;line-height:60px;font-weight:400}h3{font-size:18px;line-height:18px;font-weight:600;padding:0;margin:0;margin-bottom:5px;text-transform:uppercase}.content{width:100%;padding:0 24px;max-width:1300px;margin:0 auto}.how-we-work-image{width:100%;padding-bottom:16%;background:url(\"/how-we-work.png\");background-size:cover;background-position:center right;display:flex;align-items:center;position:relative;margin-bottom:24px}.how-we-work-image>p{margin:0;max-width:40%;font-weight:600;font-size:20px;line-height:30px;position:absolute;top:50%;left:24px;transform:translateY(-50%)}.cookie-notice{background:black;position:fixed;bottom:0;left:0;width:100%;z-index:2;display:flex;align-items:center;justify-content:center}.cookie-notice>*{margin:0 12px}.cookie-notice>p{font-size:14px;padding:12px 0;color:white}.cookie-notice>button{background-color:#405C75;font-size:16px;line-height:32px}.cookie-notice>svg{cursor:pointer;min-width:15px}.mindset-image{width:50%;margin:0 24px 24px -10px}.technologies-container{width:100%;display:flex;flex-direction:row;justify-content:space-between}.technologies-container>div{width:45%;padding:24px 0}.technologies-container>div>h4{width:100%;font-size:18px;font-weight:500;border-bottom:1px solid #d8d8d8;padding-bottom:12px;margin-bottom:24px}.technologies-container>div>p{margin:0}.technologies-container>div>p>b{font-weight:400}.contacts-container{display:flex;justify-content:space-between;padding-bottom:48px;flex-direction:row}.contacts-container>div:first-of-type{width:50%;display:flex;flex-direction:column;justify-content:space-between}.contacts-container>div:first-of-type>div>p{margin:0}.contacts-container>div:first-of-type a{text-decoration:underline;-webkit-text-decoration-color:#404040;text-decoration-color:#404040}.contacts-container>div:first-of-type a>p{margin:0}.contacts-container>div:last-of-type{padding-top:0;width:40%;display:flex;align-items:flex-start;flex-direction:column;justify-content:flex-end}.contacts-container>div:last-of-type>input{line-height:28px;font-size:18px;border:none;border-bottom:1px solid black;outline:none;width:100%}@media (max-width: 899px){.mindset-image{width:100%;margin:0 0 24px -10px}.technologies-container{flex-direction:column}.technologies-container>div{width:100%}.contacts-container{flex-direction:column}.contacts-container>div:first-of-type{width:100%}.contacts-container>div:last-of-type{padding-top:48px;width:100%}}@media (min-width: 700px) and (max-width: 899px){.how-we-work-image{padding-bottom:16%;background:linear-gradient(to top left, rgba(255,255,255,0.3), rgba(255,255,255,0.2)),url(\"/how-we-work.png\");background-size:cover;background-position:center right}.how-we-work-image>p{max-width:100%;font-size:18px;padding-right:24px}}@media (min-width: 425px) and (max-width: 699px){.how-we-work-image{padding-bottom:35%;background:linear-gradient(to top left, rgba(255,255,255,0.3), rgba(255,255,255,0.2)),url(\"/how-we-work.png\");background-size:cover;background-position:center right}.how-we-work-image>p{font-size:18px;max-width:100%;padding-right:24px}}@media (max-width: 425px){.how-we-work-image{padding-bottom:40%;background:linear-gradient(to top left, rgba(255,255,255,0.3), rgba(255,255,255,0.2)),url(\"/how-we-work.png\");background-size:cover;background-position:center right}.how-we-work-image>p{font-size:16px;max-width:100%;padding-right:24px;line-height:24px}}\n", ""]);



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".footer-container{width:100%;background-color:#303030}.footer-container p{font-size:12px;color:#FFFFFF;letter-spacing:0;line-height:18px}.footer-content{max-width:1300px;margin:0 auto;padding:24px;display:flex;flex-direction:row}.footer-content>div:first-of-type{width:60%}.footer-content>div:first-of-type>p{max-width:315px;padding-left:84px}.footer-content>div:first-of-type img{width:255px;padding-bottom:24px}.footer-content>div:last-of-type{width:40%;color:white;padding-left:0}.footer-content>div:last-of-type h4{margin:0;padding:0;font-size:18px;line-height:39px;font-weight:600}.footer-content>div:last-of-type a{font-size:14px;line-height:23px;color:white}.footer-content>div:last-of-type a:hover{text-decoration:underline;-webkit-text-decoration-color:white;text-decoration-color:white}.footer-copyright{background-color:#616161;padding:12px 24px 12px 0;width:100%}.footer-copyright>p{margin:0 auto;max-width:1300px;width:100%;padding-left:108px}@media (max-width: 600px){.footer-content{flex-direction:column}.footer-content>div:first-of-type{width:100%}.footer-content>div:last-of-type{width:100%;padding-left:84px}}\n", ""]);



/***/ })
/******/ ]);
});