module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/components/EventSearch/EventsResults.jsx":
/*!********************************************************!*\
  !*** ./pages/components/EventSearch/EventsResults.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types_exact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);






const propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

class EventsResults extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadMore", () => {
      let {
        visibleItems
      } = this.state;
      this.setState(prev => {
        return {
          visibleItems: prev.visibleItems + 6
        };
      });
    });

    this.state = {
      visibleItems: 9
    };
  }

  render() {
    const {
      visibleItems
    } = this.state;
    const {
      items
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
      className: "EventsResults_list"
    }, items.slice(0, visibleItems).map((item, index) => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventsResults_card",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: `/eventPage?id=${item.id}`
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      target: "_blank"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventsResults_imageContainer"
    }, item.logo != null && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("figure", {
      className: "EventsResults_image",
      style: {
        backgroundImage: `url(${item.logo.url})`
      }
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventsResults_textContent"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventsResults_title"
    }, item.name.text), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventsResults_summary"
    }, item.summary), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventsResults_details"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventsResults_date"
    }, `DATE: ${moment__WEBPACK_IMPORTED_MODULE_4___default()(item.start.local).format('DD/MM/YYYY')}`), item.is_free === true && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventsResults_price"
    }, "FREE"), item.is_free === false && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventsResults_price"
    }, "\xA3\xA3\xA3")))))))), visibleItems < items.length && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      type: "button",
      className: "Button EventsResults_button",
      onClick: this.loadMore
    }, "Load More"));
  }

}

EventsResults.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (EventsResults);

/***/ }),

/***/ "./pages/components/EventSearch/index.jsx":
/*!************************************************!*\
  !*** ./pages/components/EventSearch/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types_exact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-day-picker */ "react-day-picker");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-places-autocomplete */ "react-places-autocomplete");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _EventsResults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EventsResults */ "./pages/components/EventSearch/EventsResults.jsx");








 // https://react-day-picker.js.org/examples/selected-range-enter

const propTypes = {
  dateLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  eventbriteApiKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  eventbriteLink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  locationLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  paragraph: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  searchButtonText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
const defaultProps = {
  dateLabel: 'When',
  // eventbriteApiKey: 'E3FPRWVRIRN63ML427UJ',
  eventbriteApiKey: '34KC3DZI63QGVN6RGLEA',
  eventbriteLink: 'https://www.eventbriteapi.com/v3/events/search/?',
  locationLabel: 'City',
  paragraph: 'Use the search bar above to find your ideal wellness event.',
  searchButtonText: 'Search',
  title: 'Event Search Page'
};

class EventSearch extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSelectingFirstDay", (from, to, day) => {
      const isBeforeFirstDay = from && react_day_picker__WEBPACK_IMPORTED_MODULE_4__["DateUtils"].isDayBefore(day, from);
      const isRangeSelected = from && to;
      return !from || isBeforeFirstDay || isRangeSelected;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDayClick", day => {
      const {
        from,
        to
      } = this.state;

      if (from && to && day >= from && day <= to) {
        this.handleResetClick();
        return;
      }

      if (this.handleSelectingFirstDay(from, to, day)) {
        this.setState({
          from: day,
          to: null,
          enteredTo: null
        });
      } else {
        this.setState({
          to: day,
          enteredTo: day,
          selectedDates: `${moment__WEBPACK_IMPORTED_MODULE_5___default()(from).format('DD/MM/YYYY')} - ${moment__WEBPACK_IMPORTED_MODULE_5___default()(day).format('DD/MM/YYYY')}`
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDayMouseEnter", day => {
      let {
        from,
        to
      } = this.state;

      if (!this.handleSelectingFirstDay(from, to, day)) {
        this.setState({
          enteredTo: day
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleResetClick", () => {
      const {
        enteredTo,
        to,
        from
      } = this.state;
      this.setState({
        enteredTo: null,
        from: null,
        to: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDatePicker", () => {
      const {
        activeDatePicker
      } = this.state;
      this.setState({
        activeDatePicker: !activeDatePicker
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleCloseDatePicker", () => {
      this.setState({
        activeDatePicker: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleLocationChange", locationValue => {
      this.setState({
        locationValue
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleLocationSelect", locationValue => {
      let {
        latLng
      } = this.state;
      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["geocodeByAddress"])(locationValue).then(results => Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["getLatLng"])(results[0])).then(latLng => {
        this.setState({
          latLng
        });
      }).catch(error => console.error('Error', error));
      this.setState({
        locationValue
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSearchEvents", () => {
      const {
        from,
        enteredTo,
        events,
        locationValue,
        latLng
      } = this.state;
      const {
        eventbriteApiKey,
        eventbriteLink
      } = this.props;
      if (!locationValue) return this.setState({
        requiredMessage: 'Please enter a location'
      });
      this.setState({
        loading: true
      });

      if (locationValue && from) {
        this.setState({
          requiredMessage: ''
        });
        const fromDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(from).format('YYYY-MM-DD');
        const searchFromDate = `${fromDate}T00:00:01Z`;
        const toDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(enteredTo).format('YYYY-MM-DD');
        const searchToDate = `${toDate}T00:00:01Z`;
        fetch(`${eventbriteLink}start_date.range_start=${searchFromDate}&start_date.range_end=${searchToDate}&location.longitude=${latLng.lng}&location.latitude=${latLng.lat}&categories=108&token=${eventbriteApiKey}`).then(response => {
          debugger;
          return response.json();
        }).then(data => {
          this.setState({
            events: data.events,
            eventsFilterCopy: data.events,
            loading: false,
            selectedFilter: 'All'
          });
        }).catch(error => console.log('Error', error));
      }

      if (locationValue && !from) {
        const currentDate = moment__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD');
        const searchFromDate = `${currentDate}T00:00:01Z`;
        fetch(`${eventbriteLink}start_date.range_start=${searchFromDate}&location.longitude=${latLng.lng}&location.latitude=${latLng.lat}&categories=108&token=${eventbriteApiKey}`).then(response => {
          return response.json();
        }).then(data => {
          this.setState({
            events: data.events
          });
        }).catch(error => console.log('Error', error));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleFilter", event => {
      let {
        events,
        eventsFilterCopy,
        selectedFilter
      } = this.state;
      const selected = event.currentTarget.value;
      const totalEvents = eventsFilterCopy;

      if (selected === 'All') {
        this.setState({
          events: eventsFilterCopy,
          selectedFilter: selected
        });
      }

      if (selected === 'Free') {
        let filteredFreeEvents = [];
        totalEvents.forEach(event => {
          if (event.is_free === true) {
            filteredFreeEvents.push(event);
          }
        });
        this.setState({
          events: filteredFreeEvents,
          selectedFilter: selected
        });
      }

      if (selected === '£££') {
        let filteredPaidEvents = [];
        totalEvents.forEach(event => {
          if (event.is_free === false) {
            filteredPaidEvents.push(event);
          }
        });
        this.setState({
          events: filteredPaidEvents,
          selectedFilter: selected
        });
      }
    });

    this.state = {
      activeDatePicker: false,
      city: '',
      events: [],
      eventsFilterCopy: [],
      locationValue: '',
      enteredTo: null,
      from: null,
      latLng: null,
      loading: false,
      selectedDates: 'Anytime',
      selectedFilter: 'All',
      to: null
    };
  }

  render() {
    const {
      dateLabel,
      locationLabel,
      paragraph,
      searchButtonText,
      title
    } = this.props;
    const {
      activeDatePicker,
      enteredTo,
      events,
      from,
      locationValue,
      loading,
      requiredMessage,
      selectedDates,
      to,
      visibleItems
    } = this.state;
    const modifiers = {
      start: from,
      end: enteredTo
    };
    const disabledDays = {
      before: from
    };
    const selectedDays = [from, {
      from,
      to: enteredTo
    }];
    const today = new Date();
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_container"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_searchBar"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_searchFilter",
      onClick: this.handleDatePicker
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_label"
    }, dateLabel), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_value"
    }, selectedDates)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: activeDatePicker ? 'EventSearch_datePicker EventSearch_datePicker-active' : 'EventSearch_datePicker'
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_day_picker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "EventSearch_date",
      numberOfMonths: 2,
      fromMonth: from,
      selectedDays: selectedDays,
      disabledDays: {
        before: today
      },
      modifiers: modifiers,
      onDayClick: this.handleDayClick,
      onDayMouseEnter: this.handleDayMouseEnter
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_searchFilter",
      onClick: this.handleCloseDatePicker
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_label"
    }, locationLabel), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default.a, {
      value: locationValue,
      onChange: this.handleLocationChange,
      onSelect: this.handleLocationSelect
    }, ({
      getInputProps,
      suggestions,
      getSuggestionItemProps,
      loading
    }) => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", getInputProps({
      placeholder: 'Anywhere',
      className: 'EventSearch_value'
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_locationContainer"
    }, loading && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, " Loading..."), suggestions.map(suggestion => {
      const className = suggestion.active ? 'EventSearch_suggestion EventSearch_suggestion-active' : 'EventSearch_suggestion';
      const style = suggestion.active ? {
        backgroundColor: '#fafafa',
        cursor: 'pointer'
      } : {
        backgroundColor: '#ffffff',
        cursor: 'pointer'
      };
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", getSuggestionItemProps(suggestion, {
        className,
        style
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, suggestion.description));
    })))), requiredMessage != '' && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_required"
    }, requiredMessage)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_action"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      type: "button",
      className: "Button EventSearch_button",
      onClick: this.handleSearchEvents
    }, searchButtonText)))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_resultsContainer"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, events.length === 0 && !loading && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
      className: "EventSearch_title"
    }, title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_paragraph"
    }, paragraph)), loading && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
      className: "EventSearch_loadingContent"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-title"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loadingCardContent"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loadingCard"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-image"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-cardTitle"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-info"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-info"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-info"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loadingCard"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-image"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-cardTitle"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-info"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-info"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-info"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loadingCard"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-image"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-cardTitle"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-info"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-info"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_loading EventSearch_loading-info"
    })))), events.length > 0 && !loading && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
      className: "EventSearch_title"
    }, `Wellness Events in ${locationValue}`), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventSearch_filterContainer"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
      className: "EventSearch_filter",
      value: this.state.selectedFilter,
      onChange: this.handleFilter
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      className: "EventSearch_option",
      value: "All"
    }, "All"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      className: "EventSearch_option",
      value: "Free"
    }, "Free"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      className: "EventSearch_option",
      value: "\xA3\xA3\xA3"
    }, "\xA3\xA3\xA3"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_EventsResults__WEBPACK_IMPORTED_MODULE_7__["default"], {
      items: events
    })))));
  }

}

EventSearch.propTypes = propTypes;
EventSearch.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (EventSearch);

/***/ }),

/***/ "./pages/components/Footer/index.jsx":
/*!*******************************************!*\
  !*** ./pages/components/Footer/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types_exact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Footer"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Footer_container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "Footer_list"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "Footer_link"
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "Footer_link"
  }, "Events"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "Footer_link"
  }, "FAQs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "Footer_link"
  }, "Social"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "Footer_link"
  }, "Contact Us"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/components/Navigation/index.jsx":
/*!***********************************************!*\
  !*** ./pages/components/Navigation/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types_exact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function Navigation(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Navigation"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Navigation_container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Navigation_content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "Navigation_link"
  }, "Wellness App"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Navigation_content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Navigation_link"
  }, "Events"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./pages/events.jsx":
/*!**************************!*\
  !*** ./pages/events.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types_exact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_EventSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/EventSearch */ "./pages/components/EventSearch/index.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Footer */ "./pages/components/Footer/index.jsx");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Navigation */ "./pages/components/Navigation/index.jsx");






const propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
const defaultProps = {
  title: 'Find an event...'
};

class Events extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "Events"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "Events_bannerContainer"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "Events_heroImage"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "Events_content"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      className: "Events_bannerTitle"
    }, title))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_EventSearch__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}

Events.propTypes = propTypes;
Events.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/events.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sarahdonoghue/Documents/Projects/wellness-events-app/pages/events.jsx */"./pages/events.jsx");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-day-picker":
/*!***********************************!*\
  !*** external "react-day-picker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-day-picker");

/***/ }),

/***/ "react-places-autocomplete":
/*!********************************************!*\
  !*** external "react-places-autocomplete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-places-autocomplete");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=events.js.map