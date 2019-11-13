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
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Footer */ "./pages/components/Footer/index.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Users_sarahdonoghue_Documents_Projects_wellness_events_app_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _Users_sarahdonoghue_Documents_Projects_wellness_events_app_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Users_sarahdonoghue_Documents_Projects_wellness_events_app_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_12__);













var propTypes = {
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  eventbriteApiKey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  eventbriteLink: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  eventId: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  friendsLabel: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  widerNetworkLabel: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
var defaultProps = {
  buttonText: 'Book Now',
  eventbriteApiKey: 'E3FPRWVRIRN63ML427UJ',
  eventbriteLink: 'https://www.eventbriteapi.com/v3/events/',
  friendsLabel: 'Your Friends who are attending the event',
  widerNetworkLabel: 'People you may know who are attending the event'
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
      this.fetchEventData(); // this.fetchFriends();
    }
  }, {
    key: "render",
    // fetchFriends = () => {
    // Similar to the fetchEventData function above I would use this function to fetch data from facebook api using the event id to gain access to their facebook friends to see if any are attending the events. 
    // Additionally, I would to gain access to their suggested friends to see if they are also attending the event.
    // I would store the friends data in an array and then map over so I could display each profile picture of the person attending/ineterested in the event
    // }
    value: function render() {
      var _this$props2 = this.props,
          buttonText = _this$props2.buttonText,
          friendsLabel = _this$props2.friendsLabel,
          widerNetworkLabel = _this$props2.widerNetworkLabel;
      var eventData = this.state.eventData;
      var eventPrice = '';

      if (eventData.length != 0) {
        if (eventData[0].ticket_availability.maximum_ticket_price.value === 0) {
          eventPrice = 'Free';
        } else {
          eventPrice = eventData[0].ticket_availability.maximum_ticket_price.display;
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails"
      }, eventData.length != 0 && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_imageContainer"
      }, eventData[0].logo != null && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("figure", {
        className: "EventDetails_image",
        style: {
          backgroundImage: "url(".concat(eventData[0].logo.url, ")")
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_content"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: "EventDetails_title"
      }, eventData[0].name.text), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_eventInfo"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_info"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_time"
      }, "Start: ".concat(moment__WEBPACK_IMPORTED_MODULE_11___default()(eventData[0].start.local).format('DD/MM/YYYY HH:mm'))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_time"
      }, "End: ".concat(moment__WEBPACK_IMPORTED_MODULE_11___default()(eventData[0].end.local).format('DD/MM/YYYY HH:mm')))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_info"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_address"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, eventData[0].venue.address.address_1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, eventData[0].venue.address.city), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, eventData[0].venue.address.postal_code)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_eventInfo"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_info"
      }, eventData[0].capacity === null && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_capacity"
      }, "Please register for the event"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_price"
      }, eventPrice)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_actions"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        className: "Button EventDetails_button",
        href: eventData[0].url
      }, buttonText))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_description"
      }, eventData[0].description.text), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_friendsContainer"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_friendsContent"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_friendTitle"
      }, friendsLabel), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "EventDetails_friendList"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "EventDetails_friendProfile"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "EventDetails_friendProfile"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "EventDetails_friendProfile"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "EventDetails_friendProfile"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "EventDetails_friendProfile"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "EventDetails_friendProfile"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_friendsContent"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "EventDetails_friendTitle"
      }, widerNetworkLabel), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "EventDetails_friendList"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "EventDetails_friendProfile"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "EventDetails_friendProfile"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "EventDetails_friendProfile"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "EventDetails_friendProfile"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "EventDetails_friendProfile"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "EventDetails_friendProfile"
      }))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null));
    }
  }]);

  return EventDetails;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

EventDetails.propTypes = propTypes;
EventDetails.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (EventDetails);

/***/ })

})
//# sourceMappingURL=eventPage.js.4366140c58fc74a0d3eb.hot-update.js.map