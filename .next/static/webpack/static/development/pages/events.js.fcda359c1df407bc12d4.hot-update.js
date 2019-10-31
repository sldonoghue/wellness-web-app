webpackHotUpdate("static/development/pages/events.js",{

/***/ "./pages/components/EventSearch/index.jsx":
/*!************************************************!*\
  !*** ./pages/components/EventSearch/index.jsx ***!
  \************************************************/
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
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-day-picker */ "./node_modules/react-day-picker/DayPicker.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _EventsResults__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EventsResults */ "./pages/components/EventSearch/EventsResults.jsx");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vm */ "./node_modules/vm-browserify/index.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_14__);















 // https://react-day-picker.js.org/examples/selected-range-enter

var propTypes = {
  dateLabel: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  eventbriteApiKey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  eventbriteLink: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  locationLabel: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  paragraph: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  searchButtonText: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
var defaultProps = {
  dateLabel: 'When',
  eventbriteApiKey: 'E3FPRWVRIRN63ML427UJ',
  eventbriteLink: 'https://www.eventbriteapi.com/v3/events/search/?',
  locationLabel: 'City',
  paragraph: 'Use the search bar above to find your ideal wellness event.',
  searchButtonText: 'Search',
  title: 'Event Search Page'
};

var EventSearch =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EventSearch, _Component);

  function EventSearch(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EventSearch);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EventSearch).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSelectingFirstDay", function (from, to, day) {
      var isBeforeFirstDay = from && react_day_picker__WEBPACK_IMPORTED_MODULE_10__["DateUtils"].isDayBefore(day, from);
      var isRangeSelected = from && to;
      return !from || isBeforeFirstDay || isRangeSelected;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDayClick", function (day) {
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
          selectedDates: "".concat(moment__WEBPACK_IMPORTED_MODULE_11___default()(from).format('DD/MM/YYYY'), " - ").concat(moment__WEBPACK_IMPORTED_MODULE_11___default()(day).format('DD/MM/YYYY'))
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDayMouseEnter", function (day) {
      var _this$state2 = _this.state,
          from = _this$state2.from,
          to = _this$state2.to;

      if (!_this.handleSelectingFirstDay(from, to, day)) {
        _this.setState({
          enteredTo: day
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleResetClick", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDatePicker", function () {
      var activeDatePicker = _this.state.activeDatePicker;

      _this.setState({
        activeDatePicker: !activeDatePicker
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleCloseDatePicker", function () {
      _this.setState({
        activeDatePicker: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleLocationChange", function (locationValue) {
      _this.setState({
        locationValue: locationValue
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleLocationSelect", function (locationValue) {
      var latLng = _this.state.latLng;
      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__["geocodeByAddress"])(locationValue).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__["getLatLng"])(results[0]);
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchEvents", function () {
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

        var fromDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(from).format('YYYY-MM-DD');
        var searchFromDate = "".concat(fromDate, "T00:00:01Z");
        var toDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(enteredTo).format('YYYY-MM-DD');
        var searchToDate = "".concat(toDate, "T00:00:01Z");
        fetch("".concat(eventbriteLink, "start_date.range_start=").concat(searchFromDate, "&start_date.range_end=").concat(searchToDate, "&location.longitude=").concat(latLng.lng, "&location.latitude=").concat(latLng.lat, "&categories=108&token=").concat(eventbriteApiKey)).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this.setState({
            events: data.events,
            eventsFilterCopy: data.events,
            loading: false,
            selectedFilter: 'All'
          });
        })["catch"](function (error) {
          return console.log('Error', error);
        });
      }

      if (locationValue && !from) {
        var currentDate = moment__WEBPACK_IMPORTED_MODULE_11___default()().format('YYYY-MM-DD');

        var _searchFromDate = "".concat(currentDate, "T00:00:01Z");

        fetch("".concat(eventbriteLink, "start_date.range_start=").concat(_searchFromDate, "&location.longitude=").concat(latLng.lng, "&location.latitude=").concat(latLng.lat, "&categories=108&token=").concat(eventbriteApiKey)).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this.setState({
            events: data.events
          });
        })["catch"](function (error) {
          return console.log('Error', error);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFilter", function (event) {
      var _this$state5 = _this.state,
          events = _this$state5.events,
          eventsFilterCopy = _this$state5.eventsFilterCopy,
          selectedFilter = _this$state5.selectedFilter;
      var selected = event.currentTarget.value;
      var totalEvents = eventsFilterCopy;

      if (selected === 'All') {
        _this.setState({
          events: eventsFilterCopy
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
      latLng: null,
      loading: false,
      selectedDates: 'Anytime',
      selectedFilter: 'All',
      to: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EventSearch, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          dateLabel = _this$props2.dateLabel,
          locationLabel = _this$props2.locationLabel,
          paragraph = _this$props2.paragraph,
          searchButtonText = _this$props2.searchButtonText,
          title = _this$props2.title;
      var _this$state6 = this.state,
          activeDatePicker = _this$state6.activeDatePicker,
          enteredTo = _this$state6.enteredTo,
          events = _this$state6.events,
          from = _this$state6.from,
          locationValue = _this$state6.locationValue,
          loading = _this$state6.loading,
          requiredMessage = _this$state6.requiredMessage,
          selectedDates = _this$state6.selectedDates,
          to = _this$state6.to,
          visibleItems = _this$state6.visibleItems;
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
      var today = new Date();
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_searchBar"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_searchFilter",
        onClick: this.handleDatePicker
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_label"
      }, dateLabel), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_value"
      }, selectedDates)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: activeDatePicker ? 'EventSearch_datePicker EventSearch_datePicker-active' : 'EventSearch_datePicker'
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_day_picker__WEBPACK_IMPORTED_MODULE_10___default.a, {
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
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_searchFilter",
        onClick: this.handleCloseDatePicker
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_label"
      }, locationLabel), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_12___default.a, {
        value: locationValue,
        onChange: this.handleLocationChange,
        onSelect: this.handleLocationSelect
      }, function (_ref) {
        var getInputProps = _ref.getInputProps,
            suggestions = _ref.suggestions,
            getSuggestionItemProps = _ref.getSuggestionItemProps,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", getInputProps({
          placeholder: 'Anywhere',
          className: 'EventSearch_value'
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "EventSearch_locationContainer"
        }, loading && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " Loading..."), suggestions.map(function (suggestion) {
          var className = suggestion.active ? 'EventSearch_suggestion EventSearch_suggestion-active' : 'EventSearch_suggestion';
          var style = suggestion.active ? {
            backgroundColor: '#fafafa',
            cursor: 'pointer'
          } : {
            backgroundColor: '#ffffff',
            cursor: 'pointer'
          };
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", getSuggestionItemProps(suggestion, {
            className: className,
            style: style
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, suggestion.description));
        })));
      }), requiredMessage != '' && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_required"
      }, requiredMessage)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_action"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "button",
        className: "Button EventSearch_button",
        onClick: this.handleSearchEvents
      }, searchButtonText)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_resultsContainer"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, events.length === 0 && !loading && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: "EventSearch_title"
      }, title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_paragraph"
      }, paragraph)), loading && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "EventSearch_loadingContent"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-title"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loadingCardContent"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loadingCard"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-image"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-cardTitle"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loadingCard"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-image"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-cardTitle"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loadingCard"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-image"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-cardTitle"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_loading EventSearch_loading-info"
      })))), events.length > 0 && !loading && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: "EventSearch_title"
      }, "Wellness Events in ".concat(locationValue)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventSearch_filterContainer"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        className: "EventSearch_filter",
        value: this.state.selectedFilter,
        onChange: this.handleFilter
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        className: "EventSearch_option",
        value: "All"
      }, "All"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        className: "EventSearch_option",
        value: "Free"
      }, "Free"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        className: "EventSearch_option",
        value: "\xA3\xA3\xA3"
      }, "\xA3\xA3\xA3"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_EventsResults__WEBPACK_IMPORTED_MODULE_13__["default"], {
        items: events
      })))));
    }
  }]);

  return EventSearch;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

EventSearch.propTypes = propTypes;
EventSearch.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (EventSearch);

/***/ })

})
//# sourceMappingURL=events.js.fcda359c1df407bc12d4.hot-update.js.map