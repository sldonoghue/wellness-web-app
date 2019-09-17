webpackHotUpdate("static/development/pages/events.js",{

/***/ "./pages/components/EventSearch/EventsResults.jsx":
/*!********************************************************!*\
  !*** ./pages/components/EventSearch/EventsResults.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types_exact__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/sarahdonoghue/Documents/Projects/wellness-events-app/pages/components/EventSearch/EventsResults.jsx";



var propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired
};

var EventsResults =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(EventsResults, _Component);

  function EventsResults(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EventsResults);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EventsResults).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EventsResults, [{
    key: "render",
    value: function render() {
      var items = this.props.items;
      debugger;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "EventsResults",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, items.map(function (item, index) {
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: item.url,
          target: "_blank",
          className: "EventsResults_card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "EventsResults_imageContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "EventsResults_textConent",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "EventsResults_title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "EventsResults_summary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, item.summary), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "EventsResults_date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, item.start.local), item.is_free === true && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "EventsResults_price",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "FREE")));
      }));
    }
  }]);

  return EventsResults;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

EventsResults.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (EventsResults);

/***/ })

})
//# sourceMappingURL=events.js.7f8fd50c3f56e8911605.hot-update.js.map