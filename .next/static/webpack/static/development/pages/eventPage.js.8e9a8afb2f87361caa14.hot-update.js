webpackHotUpdate("static/development/pages/eventPage.js",{

/***/ "./pages/components/EventSearch/EventDetails.jsx":
/*!*******************************************************!*\
  !*** ./pages/components/EventSearch/EventDetails.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types_exact__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Users_sarahdonoghue_Documents_Projects_wellness_events_app_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _Users_sarahdonoghue_Documents_Projects_wellness_events_app_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Users_sarahdonoghue_Documents_Projects_wellness_events_app_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/sarahdonoghue/Documents/Projects/wellness-events-app/pages/components/EventSearch/EventDetails.jsx";



 // TO Do: Figure out why I need to import stylesheet for this page?

 // import Arrow from '../../../assets/static/icons/arrow.png';

var propTypes = {
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  eventbriteApiKey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  eventbriteLink: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  eventId: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
var defaultProps = {
  buttonText: 'Book Now',
  eventbriteApiKey: 'E3FPRWVRIRN63ML427UJ',
  eventbriteLink: 'https://www.eventbriteapi.com/v3/events/'
};

var EventDetails =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EventDetails, _Component);

  function EventDetails(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EventDetails);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EventDetails).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fetchEventData", function () {
      var _this$props = _this.props,
          eventbriteApiKey = _this$props.eventbriteApiKey,
          eventbriteLink = _this$props.eventbriteLink,
          eventId = _this$props.eventId;
      var eventData = _this.state.eventData;
      fetch("".concat(eventbriteLink).concat(eventId, "/?expand=venue,ticket_classes,ticket_availability&token=").concat(eventbriteApiKey)).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.setState({
          eventData: [data]
        });
      })["catch"](function (error) {
        return console.log('Error', error);
      });
    });

    _this.state = {
      eventData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EventDetails, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchEventData();
    }
  }, {
    key: "render",
    value: function render() {
      var buttonText = this.props.buttonText;
      var eventData = this.state.eventData;
      var eventPrice = '';

      if (eventData.length != 0) {
        if (eventData[0].ticket_availability.maximum_ticket_price.value === 0) {
          eventPrice = 'Free';
        } else {
          eventPrice = eventData[0].ticket_availability.maximum_ticket_price.display;
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, eventData.length != 0 && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_imageContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, eventData[0].logo != null && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("figure", {
        className: "EventDetails_image",
        style: {
          backgroundImage: "url(".concat(eventData[0].logo.url, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "EventDetails_arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: "EventDetails_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, eventData[0].name.text), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_eventInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Start: ".concat(moment__WEBPACK_IMPORTED_MODULE_10___default()(eventData[0].start.local).format('DD/MM/YYYY HH:mm'))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "End: ".concat(moment__WEBPACK_IMPORTED_MODULE_10___default()(eventData[0].end.local).format('DD/MM/YYYY HH:mm')))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, eventData[0].venue.address.address_1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, eventData[0].venue.address.city), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, eventData[0].venue.address.postal_code)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_eventInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, eventData[0].capacity === null && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_capacity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Please register for the event"), eventData[0].capacity !== null && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventsDetails_capacity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Number of tickets available:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventsDetails_capacity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Total number of tickets:")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, eventPrice)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_actions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        className: "Button EventDetails_button",
        target: "_blank",
        href: eventData[0].url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, buttonText))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, eventData[0].description.text))));
    }
  }]);

  return EventDetails;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

EventDetails.propTypes = propTypes;
EventDetails.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (EventDetails);

/***/ })

})
//# sourceMappingURL=eventPage.js.8e9a8afb2f87361caa14.hot-update.js.map