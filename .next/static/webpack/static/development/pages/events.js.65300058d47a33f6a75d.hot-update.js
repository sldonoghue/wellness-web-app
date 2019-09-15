webpackHotUpdate("static/development/pages/events.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
false,

/***/ "./node_modules/bowser/src/bowser.js":
false,

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
false,

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
false,

/***/ "./node_modules/hyphenate-style-name/index.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/createPrefixer.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/calc.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flex.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/gradient.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/sizing.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/transition.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/createPrefixer.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/calc.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/flex.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/gradient.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/sizing.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/transition.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/capitalizeString.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/getBrowserInformation.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/isObject.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/prefixProperty.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/prefixValue.js":
false,

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.merge/index.js":
false,

/***/ "./node_modules/material-ui/styles/MuiThemeProvider.js":
false,

/***/ "./node_modules/material-ui/styles/baseThemes/lightBaseTheme.js":
false,

/***/ "./node_modules/material-ui/styles/getMuiTheme.js":
false,

/***/ "./node_modules/material-ui/styles/spacing.js":
false,

/***/ "./node_modules/material-ui/styles/typography.js":
false,

/***/ "./node_modules/material-ui/styles/zIndex.js":
false,

/***/ "./node_modules/material-ui/utils/autoprefixer.js":
false,

/***/ "./node_modules/material-ui/utils/autoprefixerDynamic.js":
false,

/***/ "./node_modules/material-ui/utils/autoprefixerStatic.js":
false,

/***/ "./node_modules/material-ui/utils/callOnce.js":
false,

/***/ "./node_modules/material-ui/utils/rtl.js":
false,

/***/ "./node_modules/react-places-autocomplete/dist/PlacesAutocomplete.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-places-autocomplete/dist/PlacesAutocomplete.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/react-places-autocomplete/dist/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Copyright (c) 2016-present, Ken Hibino.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Licensed under the MIT License (MIT).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * See https://kenny-hibino.github.io/react-places-autocomplete
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

// transform snake_case to camelCase
var formattedSuggestion = function formattedSuggestion(structured_formatting) {
  return {
    mainText: structured_formatting.main_text,
    secondaryText: structured_formatting.secondary_text
  };
};

var PlacesAutocomplete = function (_React$Component) {
  _inherits(PlacesAutocomplete, _React$Component);

  function PlacesAutocomplete(props) {
    _classCallCheck(this, PlacesAutocomplete);

    var _this = _possibleConstructorReturn(this, (PlacesAutocomplete.__proto__ || Object.getPrototypeOf(PlacesAutocomplete)).call(this, props));

    _this.init = function () {
      if (!window.google) {
        throw new Error('[react-places-autocomplete]: Google Maps JavaScript API library must be loaded. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library');
      }

      if (!window.google.maps.places) {
        throw new Error('[react-places-autocomplete]: Google Maps Places library must be loaded. Please add `libraries=places` to the src URL. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library');
      }

      _this.autocompleteService = new window.google.maps.places.AutocompleteService();
      _this.autocompleteOK = window.google.maps.places.PlacesServiceStatus.OK;
      _this.setState(function (state) {
        if (state.ready) {
          return null;
        } else {
          return { ready: true };
        }
      });
    };

    _this.autocompleteCallback = function (predictions, status) {
      _this.setState({ loading: false });
      if (status !== _this.autocompleteOK) {
        _this.props.onError(status, _this.clearSuggestions);
        return;
      }
      var highlightFirstSuggestion = _this.props.highlightFirstSuggestion;

      _this.setState({
        suggestions: predictions.map(function (p, idx) {
          return {
            id: p.id,
            description: p.description,
            placeId: p.place_id,
            active: highlightFirstSuggestion && idx === 0 ? true : false,
            index: idx,
            formattedSuggestion: formattedSuggestion(p.structured_formatting),
            matchedSubstrings: p.matched_substrings,
            terms: p.terms,
            types: p.types
          };
        })
      });
    };

    _this.fetchPredictions = function () {
      var value = _this.props.value;

      if (value.length) {
        _this.setState({ loading: true });
        _this.autocompleteService.getPlacePredictions(_extends({}, _this.props.searchOptions, {
          input: value
        }), _this.autocompleteCallback);
      }
    };

    _this.clearSuggestions = function () {
      _this.setState({ suggestions: [] });
    };

    _this.clearActive = function () {
      _this.setState({
        suggestions: _this.state.suggestions.map(function (suggestion) {
          return _extends({}, suggestion, {
            active: false
          });
        })
      });
    };

    _this.handleSelect = function (address, placeId) {
      _this.clearSuggestions();
      if (_this.props.onSelect) {
        _this.props.onSelect(address, placeId);
      } else {
        _this.props.onChange(address);
      }
    };

    _this.getActiveSuggestion = function () {
      return _this.state.suggestions.find(function (suggestion) {
        return suggestion.active;
      });
    };

    _this.selectActiveAtIndex = function (index) {
      var activeName = _this.state.suggestions.find(function (suggestion) {
        return suggestion.index === index;
      }).description;
      _this.setActiveAtIndex(index);
      _this.props.onChange(activeName);
    };

    _this.selectUserInputValue = function () {
      _this.clearActive();
      _this.props.onChange(_this.state.userInputValue);
    };

    _this.handleEnterKey = function () {
      var activeSuggestion = _this.getActiveSuggestion();
      if (activeSuggestion === undefined) {
        _this.handleSelect(_this.props.value, null);
      } else {
        _this.handleSelect(activeSuggestion.description, activeSuggestion.placeId);
      }
    };

    _this.handleDownKey = function () {
      if (_this.state.suggestions.length === 0) {
        return;
      }

      var activeSuggestion = _this.getActiveSuggestion();
      if (activeSuggestion === undefined) {
        _this.selectActiveAtIndex(0);
      } else if (activeSuggestion.index === _this.state.suggestions.length - 1) {
        _this.selectUserInputValue();
      } else {
        _this.selectActiveAtIndex(activeSuggestion.index + 1);
      }
    };

    _this.handleUpKey = function () {
      if (_this.state.suggestions.length === 0) {
        return;
      }

      var activeSuggestion = _this.getActiveSuggestion();
      if (activeSuggestion === undefined) {
        _this.selectActiveAtIndex(_this.state.suggestions.length - 1);
      } else if (activeSuggestion.index === 0) {
        _this.selectUserInputValue();
      } else {
        _this.selectActiveAtIndex(activeSuggestion.index - 1);
      }
    };

    _this.handleInputKeyDown = function (event) {
      /* eslint-disable indent */
      switch (event.key) {
        case 'Enter':
          event.preventDefault();
          _this.handleEnterKey();
          break;
        case 'ArrowDown':
          event.preventDefault(); // prevent the cursor from moving
          _this.handleDownKey();
          break;
        case 'ArrowUp':
          event.preventDefault(); // prevent the cursor from moving
          _this.handleUpKey();
          break;
        case 'Escape':
          _this.clearSuggestions();
          break;
      }
      /* eslint-enable indent */
    };

    _this.setActiveAtIndex = function (index) {
      _this.setState({
        suggestions: _this.state.suggestions.map(function (suggestion, idx) {
          if (idx === index) {
            return _extends({}, suggestion, { active: true });
          } else {
            return _extends({}, suggestion, { active: false });
          }
        })
      });
    };

    _this.handleInputChange = function (event) {
      var value = event.target.value;

      _this.props.onChange(value);
      _this.setState({ userInputValue: value });
      if (!value) {
        _this.clearSuggestions();
        return;
      }
      if (_this.props.shouldFetchSuggestions) {
        _this.debouncedFetchPredictions();
      }
    };

    _this.handleInputOnBlur = function () {
      if (!_this.mousedownOnSuggestion) {
        _this.clearSuggestions();
      }
    };

    _this.getActiveSuggestionId = function () {
      var activeSuggestion = _this.getActiveSuggestion();
      return activeSuggestion ? 'PlacesAutocomplete__suggestion-' + activeSuggestion.placeId : undefined;
    };

    _this.getIsExpanded = function () {
      return _this.state.suggestions.length > 0;
    };

    _this.getInputProps = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.hasOwnProperty('value')) {
        throw new Error('[react-places-autocomplete]: getInputProps does not accept `value`. Use `value` prop instead');
      }

      if (options.hasOwnProperty('onChange')) {
        throw new Error('[react-places-autocomplete]: getInputProps does not accept `onChange`. Use `onChange` prop instead');
      }

      var defaultInputProps = {
        type: 'text',
        autoComplete: 'off',
        role: 'combobox',
        'aria-autocomplete': 'list',
        'aria-expanded': _this.getIsExpanded(),
        'aria-activedescendant': _this.getActiveSuggestionId(),
        disabled: !_this.state.ready
      };

      return _extends({}, defaultInputProps, options, {
        onKeyDown: (0, _helpers.compose)(_this.handleInputKeyDown, options.onKeyDown),
        onBlur: (0, _helpers.compose)(_this.handleInputOnBlur, options.onBlur),
        value: _this.props.value,
        onChange: function onChange(event) {
          _this.handleInputChange(event);
        }
      });
    };

    _this.getSuggestionItemProps = function (suggestion) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var handleSuggestionMouseEnter = _this.handleSuggestionMouseEnter.bind(_this, suggestion.index);
      var handleSuggestionClick = _this.handleSuggestionClick.bind(_this, suggestion);

      return _extends({}, options, {
        key: suggestion.id,
        id: _this.getActiveSuggestionId(),
        role: 'option',
        onMouseEnter: (0, _helpers.compose)(handleSuggestionMouseEnter, options.onMouseEnter),
        onMouseLeave: (0, _helpers.compose)(_this.handleSuggestionMouseLeave, options.onMouseLeave),
        onMouseDown: (0, _helpers.compose)(_this.handleSuggestionMouseDown, options.onMouseDown),
        onMouseUp: (0, _helpers.compose)(_this.handleSuggestionMouseUp, options.onMouseUp),
        onTouchStart: (0, _helpers.compose)(_this.handleSuggestionTouchStart, options.onTouchStart),
        onTouchEnd: (0, _helpers.compose)(_this.handleSuggestionMouseUp, options.onTouchEnd),
        onClick: (0, _helpers.compose)(handleSuggestionClick, options.onClick)
      });
    };

    _this.handleSuggestionMouseEnter = function (index) {
      _this.setActiveAtIndex(index);
    };

    _this.handleSuggestionMouseLeave = function () {
      _this.mousedownOnSuggestion = false;
      _this.clearActive();
    };

    _this.handleSuggestionMouseDown = function (event) {
      event.preventDefault();
      _this.mousedownOnSuggestion = true;
    };

    _this.handleSuggestionTouchStart = function () {
      _this.mousedownOnSuggestion = true;
    };

    _this.handleSuggestionMouseUp = function () {
      _this.mousedownOnSuggestion = false;
    };

    _this.handleSuggestionClick = function (suggestion, event) {
      if (event && event.preventDefault) {
        event.preventDefault();
      }
      var description = suggestion.description,
          placeId = suggestion.placeId;

      _this.handleSelect(description, placeId);
      setTimeout(function () {
        _this.mousedownOnSuggestion = false;
      });
    };

    _this.state = {
      loading: false,
      suggestions: [],
      userInputValue: props.value,
      ready: !props.googleCallbackName
    };

    _this.debouncedFetchPredictions = (0, _lodash2.default)(_this.fetchPredictions, _this.props.debounce);
    return _this;
  }

  _createClass(PlacesAutocomplete, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var googleCallbackName = this.props.googleCallbackName;

      if (googleCallbackName) {
        if (!window.google) {
          window[googleCallbackName] = this.init;
        } else {
          this.init();
        }
      } else {
        this.init();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var googleCallbackName = this.props.googleCallbackName;

      if (googleCallbackName && window[googleCallbackName]) {
        delete window[googleCallbackName];
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        getInputProps: this.getInputProps,
        getSuggestionItemProps: this.getSuggestionItemProps,
        loading: this.state.loading,
        suggestions: this.state.suggestions
      });
    }
  }]);

  return PlacesAutocomplete;
}(_react2.default.Component);

PlacesAutocomplete.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.func.isRequired,
  onError: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  searchOptions: _propTypes2.default.shape({
    bounds: _propTypes2.default.object,
    componentRestrictions: _propTypes2.default.object,
    location: _propTypes2.default.object,
    offset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    radius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    types: _propTypes2.default.array
  }),
  debounce: _propTypes2.default.number,
  highlightFirstSuggestion: _propTypes2.default.bool,
  shouldFetchSuggestions: _propTypes2.default.bool,
  googleCallbackName: _propTypes2.default.string
};

PlacesAutocomplete.defaultProps = {
  /* eslint-disable no-unused-vars, no-console */
  onError: function onError(status, _clearSuggestions) {
    return console.error('[react-places-autocomplete]: error happened when fetching data from Google Maps API.\nPlease check the docs here (https://developers.google.com/maps/documentation/javascript/places#place_details_responses)\nStatus: ', status);
  },
  /* eslint-enable no-unused-vars, no-console */
  searchOptions: {},
  debounce: 200,
  highlightFirstSuggestion: false,
  shouldFetchSuggestions: true
};

exports.default = PlacesAutocomplete;

/***/ }),

/***/ "./node_modules/react-places-autocomplete/dist/helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-places-autocomplete/dist/helpers.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var compose = exports.compose = function compose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    fns.forEach(function (fn) {
      return fn && fn.apply(undefined, args);
    });
  };
};

var pick = exports.pick = function pick(obj) {
  for (var _len3 = arguments.length, props = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    props[_key3 - 1] = arguments[_key3];
  }

  return props.reduce(function (newObj, prop) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
    return newObj;
  }, {});
};

/***/ }),

/***/ "./node_modules/react-places-autocomplete/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-places-autocomplete/dist/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLatLng = exports.geocodeByPlaceId = exports.geocodeByAddress = undefined;

var _PlacesAutocomplete = __webpack_require__(/*! ./PlacesAutocomplete */ "./node_modules/react-places-autocomplete/dist/PlacesAutocomplete.js");

var _PlacesAutocomplete2 = _interopRequireDefault(_PlacesAutocomplete);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-places-autocomplete/dist/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.geocodeByAddress = _utils.geocodeByAddress;
exports.geocodeByPlaceId = _utils.geocodeByPlaceId;
exports.getLatLng = _utils.getLatLng;
exports.default = _PlacesAutocomplete2.default;

/***/ }),

/***/ "./node_modules/react-places-autocomplete/dist/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-places-autocomplete/dist/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var geocodeByAddress = exports.geocodeByAddress = function geocodeByAddress(address) {
  var geocoder = new window.google.maps.Geocoder();
  var OK = window.google.maps.GeocoderStatus.OK;

  return new Promise(function (resolve, reject) {
    geocoder.geocode({ address: address }, function (results, status) {
      if (status !== OK) {
        reject(status);
      }
      resolve(results);
    });
  });
};

var getLatLng = exports.getLatLng = function getLatLng(result) {
  return new Promise(function (resolve, reject) {
    try {
      var latLng = {
        lat: result.geometry.location.lat(),
        lng: result.geometry.location.lng()
      };
      resolve(latLng);
    } catch (e) {
      reject(e);
    }
  });
};

var geocodeByPlaceId = exports.geocodeByPlaceId = function geocodeByPlaceId(placeId) {
  var geocoder = new window.google.maps.Geocoder();
  var OK = window.google.maps.GeocoderStatus.OK;

  return new Promise(function (resolve, reject) {
    geocoder.geocode({ placeId: placeId }, function (results, status) {
      if (status !== OK) {
        reject(status);
      }
      resolve(results);
    });
  });
};

/***/ }),

/***/ "./node_modules/recompose/compose.js":
false,

/***/ "./node_modules/webpack/buildin/amd-define.js":
false,

/***/ "./pages/components/EventSearch/index.jsx":
/*!************************************************!*\
  !*** ./pages/components/EventSearch/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types_exact__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-day-picker */ "./node_modules/react-day-picker/DayPicker.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! material-ui-search-bar */ "./node_modules/material-ui-search-bar/lib/index.js");
/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-load-script */ "./node_modules/react-load-script/lib/index.js");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_load_script__WEBPACK_IMPORTED_MODULE_15__);








var _jsxFileName = "/Users/sarahdonoghue/Documents/Projects/wellness-events-app/pages/components/EventSearch/index.jsx";






 // https://react-day-picker.js.org/examples/selected-range-enter



var propTypes = {
  dateLabel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  locationLabel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  searchButtonText: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};
var defaultProps = {
  dateLabel: 'When',
  locationLabel: 'City',
  searchButtonText: 'Search'
};

var EventSearch =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(EventSearch, _Component);

  function EventSearch(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EventSearch);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(EventSearch).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSelectingFirstDay", function (from, to, day) {
      var isBeforeFirstDay = from && react_day_picker__WEBPACK_IMPORTED_MODULE_11__["DateUtils"].isDayBefore(day, from);
      var isRangeSelected = from && to;
      return !from || isBeforeFirstDay || isRangeSelected;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDayClick", function (day) {
      var _this$state = _this.state,
          from = _this$state.from,
          to = _this$state.to;

      if (from && to && day >= from && day <= to) {
        _this.handleResetClick();

        return;
      }

      if (_this.handleSelectingFirstDay(from, to, day)) {
        _this.setState({
          from: day,
          to: null,
          enteredTo: null
        });
      } else {
        _this.setState({
          to: day,
          enteredTo: day,
          selectedDates: "".concat(moment__WEBPACK_IMPORTED_MODULE_12___default()(from).format('DD/MM/YYYY'), " - ").concat(moment__WEBPACK_IMPORTED_MODULE_12___default()(day).format('DD/MM/YYYY'))
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDayMouseEnter", function (day) {
      var _this$state2 = _this.state,
          from = _this$state2.from,
          to = _this$state2.to;

      if (!_this.handleSelectingFirstDay(from, to, day)) {
        _this.setState({
          enteredTo: day
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleResetClick", function () {
      var _this$state3 = _this.state,
          enteredTo = _this$state3.enteredTo,
          to = _this$state3.to,
          from = _this$state3.from;

      _this.setState({
        enteredTo: null,
        from: null,
        to: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDatePicker", function () {
      var activeDatePicker = _this.state.activeDatePicker;

      _this.setState({
        activeDatePicker: !activeDatePicker
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleLocationChange", function (locationValue) {
      _this.setState({
        locationValue: locationValue
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSelect", function (locationValue) {
      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["geocodeByAddress"])(locationValue).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["getLatLng"])(results[0]);
      }).then(function (latLng) {
        return console.log('Success', latLng);
      })["catch"](function (error) {
        return console.error('Error', error);
      });
    });

    _this.state = {
      activeDatePicker: false,
      city: '',
      query: '',
      enteredTo: null,
      from: null,
      selectedDates: 'Anytime',
      to: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EventSearch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dateLabel = _this$props.dateLabel,
          locationLabel = _this$props.locationLabel,
          searchButtonText = _this$props.searchButtonText;
      var _this$state4 = this.state,
          activeDatePicker = _this$state4.activeDatePicker,
          enteredTo = _this$state4.enteredTo,
          from = _this$state4.from,
          locationValue = _this$state4.locationValue,
          selectedDates = _this$state4.selectedDates,
          to = _this$state4.to;
      var modifiers = {
        start: from,
        end: enteredTo
      };
      var disabledDays = {
        before: from
      };
      var selectedDays = [from, {
        from: from,
        to: enteredTo
      }];
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_searchBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_searchFilter",
        onClick: this.handleDatePicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, dateLabel), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, selectedDates)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: activeDatePicker ? 'EventSearch_datePicker EventSearch_datePicker-active' : 'EventSearch_datePicker',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_day_picker__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "EventSearch_date",
        numberOfMonths: 2,
        fromMonth: from,
        selectedDays: selectedDays,
        disabledDays: disabledDays,
        modifiers: modifiers,
        onDayClick: this.handleDayClick,
        onDayMouseEnter: this.handleDayMouseEnter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_searchFilter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, locationLabel), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_13___default.a, {
        value: locationValue,
        onChange: this.handleLocationChange,
        onSelect: this.handleLocationSelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, function (_ref) {
        var getInputProps = _ref.getInputProps,
            suggestions = _ref.suggestions,
            getSuggestionItemsProps = _ref.getSuggestionItemsProps,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
          placeholder: 'Anywhere',
          className: 'EventSearch_value'
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "EventSearch_locationContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, " Loading..."), suggestions.map(function (suggestion) {
          var className = suggestion.active ? 'EventSearch_suggestion EventSearch_suggestion-active' : 'EventSearch_suggestion'; //Inline style to be changed

          var style = suggestion.active ? {
            backgroundColor: '#fafafa',
            cursor: 'pointer'
          } : {
            backgroundColor: '#ffffff',
            cursor: 'pointer'
          };
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getSuggestionItemsProps(suggestion, {
            className: className,
            style: style
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }, suggestion.description));
        })));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "EventSearch_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, searchButtonText)))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, " Events Page"));
    }
  }]);

  return EventSearch;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

EventSearch.propTypes = propTypes;
EventSearch.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (EventSearch);

/***/ })

})
//# sourceMappingURL=events.js.65300058d47a33f6a75d.hot-update.js.map