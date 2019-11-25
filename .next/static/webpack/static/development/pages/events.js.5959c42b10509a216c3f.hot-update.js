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
  paragraph: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  searchButtonText: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};
var defaultProps = {
  dateLabel: 'When',
  // eventbriteApiKey: 'E3FPRWVRIRN63ML427UJ',
  eventbriteApiKey: '34KC3DZI63QGVN6RGLEA',
  eventbriteLink: 'https://www.eventbriteapi.com/v3/events/search/?',
  locationLabel: 'City',
  paragraph: 'Use the search bar above to find your ideal wellness event.',
  searchButtonText: 'Search',
  title: 'Event Search Page'
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
        _this.setState({
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
          locationValue = _this$state4.locationValue,
          latLng = _this$state4.latLng;
      var _this$props = _this.props,
          eventbriteApiKey = _this$props.eventbriteApiKey,
          eventbriteLink = _this$props.eventbriteLink;
      if (!locationValue) return _this.setState({
        requiredMessage: 'Please enter a location'
      });

      _this.setState({
        loading: true
      });

      if (locationValue && from) {
        _this.setState({
          requiredMessage: ''
        });

        var fromDate = moment__WEBPACK_IMPORTED_MODULE_12___default()(from).format('YYYY-MM-DD');
        var searchFromDate = "".concat(fromDate, "T00:00:01Z");
        var toDate = moment__WEBPACK_IMPORTED_MODULE_12___default()(enteredTo).format('YYYY-MM-DD');
        var searchToDate = "".concat(toDate, "T00:00:01Z");
        fetch("".concat(eventbriteLink, "start_date.range_start=").concat(searchFromDate, "&start_date.range_end=").concat(searchToDate, "&location.longitude=").concat(latLng.lng, "&location.latitude=").concat(latLng.lat, "&categories=108&token=").concat(eventbriteApiKey)).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this.setState({
            events: data.events,
            eventsFilterCopy: data.events,
            loading: false,
            selectedFilter: 'All',
            gotResults: true
          });
        })["catch"](function (error) {
          return console.log('Error', error);
        });
      }

      if (locationValue && !from) {
        var currentDate = moment__WEBPACK_IMPORTED_MODULE_12___default()().format('YYYY-MM-DD');

        var _searchFromDate = "".concat(currentDate, "T00:00:01Z");

        fetch("".concat(eventbriteLink, "start_date.range_start=").concat(_searchFromDate, "&location.longitude=").concat(latLng.lng, "&location.latitude=").concat(latLng.lat, "&categories=108&token=").concat(eventbriteApiKey)).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this.setState({
            events: data.events,
            eventsFilterCopy: data.events,
            loading: false,
            selectedFilter: 'All',
            gotResults: true
          });
        })["catch"](function (error) {
          return console.log('Error', error);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleFilter", function (event) {
      var eventsFilterCopy = _this.state.eventsFilterCopy;
      var selected = event.currentTarget.value;
      var totalEvents = eventsFilterCopy;

      if (selected === 'All') {
        _this.setState({
          events: eventsFilterCopy,
          selectedFilter: selected
        });
      }

      if (selected === 'Free') {
        var filteredFreeEvents = [];
        totalEvents.forEach(function (event) {
          if (event.is_free === true) {
            filteredFreeEvents.push(event);
          }
        });

        _this.setState({
          events: filteredFreeEvents,
          selectedFilter: selected
        });
      }

      if (selected === '£££') {
        var filteredPaidEvents = [];
        totalEvents.forEach(function (event) {
          if (event.is_free === false) {
            filteredPaidEvents.push(event);
          }
        });

        _this.setState({
          events: filteredPaidEvents,
          selectedFilter: selected
        });
      }
    });

    _this.state = {
      activeDatePicker: false,
      city: '',
      events: [],
      eventsFilterCopy: [],
      locationValue: '',
      enteredTo: null,
      from: null,
      gotResults: false,
      latLng: null,
      loading: false,
      noResults: false,
      selectedDates: 'Anytime',
      selectedFilter: 'All',
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
          paragraph = _this$props2.paragraph,
          searchButtonText = _this$props2.searchButtonText,
          title = _this$props2.title;
      var _this$state5 = this.state,
          activeDatePicker = _this$state5.activeDatePicker,
          enteredTo = _this$state5.enteredTo,
          events = _this$state5.events,
          from = _this$state5.from,
          gotResults = _this$state5.gotResults,
          locationValue = _this$state5.locationValue,
          loading = _this$state5.loading,
          requiredMessage = _this$state5.requiredMessage,
          selectedDates = _this$state5.selectedDates;
      var modifiers = {
        start: from,
        end: enteredTo
      };
      var selectedDays = [from, {
        from: from,
        to: enteredTo
      }];
      var today = new Date();
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_searchBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_searchFilter",
        onClick: this.handleDatePicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, dateLabel), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, selectedDates)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: activeDatePicker ? 'EventSearch_datePicker EventSearch_datePicker-active' : 'EventSearch_datePicker',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_day_picker__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "EventSearch_date",
        numberOfMonths: 2,
        fromMonth: from,
        selectedDays: selectedDays,
        disabledDays: {
          before: today
        },
        modifiers: modifiers,
        onDayClick: this.handleDayClick,
        onDayMouseEnter: this.handleDayMouseEnter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_searchFilter",
        onClick: this.handleCloseDatePicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, locationLabel), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_13___default.a, {
        value: locationValue,
        onChange: this.handleLocationChange,
        onSelect: this.handleLocationSelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
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
            lineNumber: 274
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
          placeholder: 'Anywhere',
          className: 'EventSearch_value'
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "EventSearch_locationContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
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
              lineNumber: 287
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 290
            },
            __self: this
          }, suggestion.description));
        })));
      }), requiredMessage != '' && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_required",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, requiredMessage)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "Button EventSearch_button",
        onClick: this.handleSearchEvents,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, searchButtonText)))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_resultsContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, !gotResults && !loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "EventSearch_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, paragraph)), gotResults && !loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "EventSearch_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, "There are no wellness events in your chosen location. Please enter an alternative location.")), loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "EventSearch_loadingContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loadingCardContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loadingCard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-cardTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loadingCard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-cardTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loadingCard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-cardTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      })))), events.length > 0 && !loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "EventSearch_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, "Wellness Events in ".concat(locationValue)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "EventSearch_filterContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        className: "EventSearch_filter",
        value: this.state.selectedFilter,
        onChange: this.handleFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        className: "EventSearch_option",
        value: "All",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, "All"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        className: "EventSearch_option",
        value: "Free",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, "Free"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        className: "EventSearch_option",
        value: "\xA3\xA3\xA3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, "\xA3\xA3\xA3"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_EventsResults__WEBPACK_IMPORTED_MODULE_14__["default"], {
        items: events,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      })))));
    }
  }]);

  return EventSearch;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

EventSearch.propTypes = propTypes;
EventSearch.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (EventSearch);

/***/ })

})
//# sourceMappingURL=events.js.5959c42b10509a216c3f.hot-update.js.map