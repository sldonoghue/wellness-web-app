webpackHotUpdate("static/development/pages/events.js",{

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
/* harmony import */ var _EventsResults__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./EventsResults */ "./pages/components/EventSearch/EventsResults.jsx");








var _jsxFileName = "/Users/sarahdonoghue/Documents/Projects/wellness-events-app/pages/components/EventSearch/index.jsx";







 // https://react-day-picker.js.org/examples/selected-range-enter

var propTypes = {
  dateLabel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  eventbriteApiKey: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  eventbriteLink: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  locationLabel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  searchButtonText: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};
var defaultProps = {
  dateLabel: 'When',
  eventbriteApiKey: 'E3FPRWVRIRN63ML427UJ',
  eventbriteLink: 'https://www.eventbriteapi.com/v3/events/search/?',
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleCloseDatePicker", function () {
      _this.setState({
        activeDatePicker: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleLocationChange", function (locationValue) {
      _this.setState({
        locationValue: locationValue
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleLocationSelect", function (locationValue) {
      var latLng = _this.state.latLng;
      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["geocodeByAddress"])(locationValue).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["getLatLng"])(results[0]);
      }).then(function (latLng) {
        console.log('Success', latLng), _this.setState({
          latLng: latLng
        });
      })["catch"](function (error) {
        return console.error('Error', error);
      });

      _this.setState({
        locationValue: locationValue
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSearchEvents", function () {
      var _this$state4 = _this.state,
          from = _this$state4.from,
          enteredTo = _this$state4.enteredTo,
          events = _this$state4.events,
          latLng = _this$state4.latLng;
      var _this$props = _this.props,
          eventbriteApiKey = _this$props.eventbriteApiKey,
          eventbriteLink = _this$props.eventbriteLink;
      var fromDate = moment__WEBPACK_IMPORTED_MODULE_12___default()(from).format('YYYY-MM-DD');
      var searchFromDate = "".concat(fromDate, "T00:00:01Z");
      var toDate = moment__WEBPACK_IMPORTED_MODULE_12___default()(enteredTo).format('YYYY-MM-DD');
      var searchToDate = "".concat(toDate, "T00:00:01Z");
      var results = [];
      fetch("".concat(eventbriteLink, "start_date.range_start=").concat(searchFromDate, "&start_date.range_end=").concat(searchToDate, "&location.longitude=").concat(latLng.lng, "&location.latitude=").concat(latLng.lat, "&categories=107&token=").concat(eventbriteApiKey)).then(function (response) {
        return response.json();
      }).then(function (data) {
        results.push(data.events);
      });

      _this.setState({
        events: results
      });

      debugger; // .catch(error => console.log('Error', error));
    });

    _this.state = {
      activeDatePicker: false,
      city: '',
      events: null,
      locationValue: '',
      enteredTo: null,
      from: null,
      latLng: null,
      selectedDates: 'Anytime',
      to: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EventSearch, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          dateLabel = _this$props2.dateLabel,
          locationLabel = _this$props2.locationLabel,
          searchButtonText = _this$props2.searchButtonText;
      var _this$state5 = this.state,
          activeDatePicker = _this$state5.activeDatePicker,
          enteredTo = _this$state5.enteredTo,
          events = _this$state5.events,
          from = _this$state5.from,
          locationValue = _this$state5.locationValue,
          selectedDates = _this$state5.selectedDates,
          to = _this$state5.to;
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
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_searchBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_searchFilter",
        onClick: this.handleDatePicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, dateLabel), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, selectedDates)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: activeDatePicker ? 'EventSearch_datePicker EventSearch_datePicker-active' : 'EventSearch_datePicker',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
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
          lineNumber: 170
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_searchFilter",
        onClick: this.handleCloseDatePicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, locationLabel), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_13___default.a, {
        value: locationValue,
        onChange: this.handleLocationChange,
        onSelect: this.handleLocationSelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, function (_ref) {
        var getInputProps = _ref.getInputProps,
            suggestions = _ref.suggestions,
            getSuggestionItemProps = _ref.getSuggestionItemProps,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
          placeholder: 'Anywhere',
          className: 'EventSearch_value'
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "EventSearch_locationContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, " Loading..."), suggestions.map(function (suggestion) {
          var className = suggestion.active ? 'EventSearch_suggestion EventSearch_suggestion-active' : 'EventSearch_suggestion';
          var style = suggestion.active ? {
            backgroundColor: '#fafafa',
            cursor: 'pointer'
          } : {
            backgroundColor: '#ffffff',
            cursor: 'pointer'
          };
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getSuggestionItemProps(suggestion, {
            className: className,
            style: style
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }, suggestion.description));
        })));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "Button EventSearch_button",
        onClick: this.handleSearchEvents,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, searchButtonText)))), !events && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "Heading + Paragraph "), events != null && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "Wellness Events in ".concat(locationValue)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_EventsResults__WEBPACK_IMPORTED_MODULE_14__["default"], {
        items: events,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      })));
    }
  }]);

  return EventSearch;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

EventSearch.propTypes = propTypes;
EventSearch.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (EventSearch);

/***/ })

})
//# sourceMappingURL=events.js.0db4ab7a92392a0d3eef.hot-update.js.map