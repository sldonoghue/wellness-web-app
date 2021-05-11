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

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

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

/***/ "./pages/components/EventSearch/EventDetails.jsx":
/*!*******************************************************!*\
  !*** ./pages/components/EventSearch/EventDetails.jsx ***!
  \*******************************************************/
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
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer */ "./pages/components/Footer/index.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_sarahdonoghue_Documents_Projects_wellness_events_app_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _Users_sarahdonoghue_Documents_Projects_wellness_events_app_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_sarahdonoghue_Documents_Projects_wellness_events_app_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/sarahdonoghue/Documents/Projects/wellness-events-app/pages/components/EventSearch/EventDetails.jsx";






const propTypes = {
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  eventbriteApiKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  eventbriteLink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  eventId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  friendsLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  widerNetworkLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
const defaultProps = {
  buttonText: 'Book Now',
  eventbriteApiKey: 'E3FPRWVRIRN63ML427UJ',
  eventbriteLink: 'https://www.eventbriteapi.com/v3/events/',
  friendsLabel: 'Your Friends who are attending the event',
  widerNetworkLabel: 'People you may know who are attending the event'
};

class EventDetails extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fetchEventData", () => {
      const {
        eventbriteApiKey,
        eventbriteLink,
        eventId
      } = this.props;
      let {
        eventData
      } = this.state;
      fetch(`${eventbriteLink}${eventId}/?expand=venue,ticket_classes,ticket_availability&token=${eventbriteApiKey}`).then(response => {
        return response.json();
      }).then(data => {
        this.setState({
          eventData: [data]
        });
      }).catch(error => console.log('Error', error));
    });

    this.state = {
      eventData: []
    };
  }

  componentDidMount() {
    this.fetchEventData(); // this.fetchFriends();
  }

  // fetchFriends = () => {
  // Similar to the fetchEventData function above I would use this function to fetch data from facebook api using the event id to gain access to their facebook friends to see if any are attending the events. 
  // Additionally, I would to gain access to their suggested friends to see if they are also attending the event.
  // I would store the friends data in an array and then map over so I could display each profile picture of the person attending/ineterested in the event
  // }
  render() {
    const {
      buttonText,
      friendsLabel,
      widerNetworkLabel
    } = this.props;
    const {
      eventData
    } = this.state;
    let eventPrice = '';

    if (eventData.length != 0) {
      if (eventData[0].ticket_availability.maximum_ticket_price.value === 0) {
        eventPrice = 'Free';
      } else {
        eventPrice = eventData[0].ticket_availability.maximum_ticket_price.display;
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, eventData.length != 0 && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_imageContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, eventData[0].logo != null && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("figure", {
      className: "EventDetails_image",
      style: {
        backgroundImage: `url(${eventData[0].logo.url})`
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
      className: "EventDetails_title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, eventData[0].name.text), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_eventInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, `Start: ${moment__WEBPACK_IMPORTED_MODULE_5___default()(eventData[0].start.local).format('DD/MM/YYYY HH:mm')}`), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, `End: ${moment__WEBPACK_IMPORTED_MODULE_5___default()(eventData[0].end.local).format('DD/MM/YYYY HH:mm')}`)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_address",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, eventData[0].venue.address.address_1), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, eventData[0].venue.address.city), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, eventData[0].venue.address.postal_code)))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_eventInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, eventData[0].capacity === null && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_capacity",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "Please register for the event"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, eventPrice)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "Button EventDetails_button",
      href: eventData[0].url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, buttonText))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, eventData[0].description.text), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_friendsContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_friendsContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_friendTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, friendsLabel), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
      className: "EventDetails_friendList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventDetails_friendProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventDetails_friendProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventDetails_friendProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventDetails_friendProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventDetails_friendProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventDetails_friendProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_friendsContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "EventDetails_friendTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, widerNetworkLabel), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
      className: "EventDetails_friendList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventDetails_friendProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventDetails_friendProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventDetails_friendProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventDetails_friendProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventDetails_friendProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "EventDetails_friendProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }))))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }));
  }

}

EventDetails.propTypes = propTypes;
EventDetails.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (EventDetails);

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
var _jsxFileName = "/Users/sarahdonoghue/Documents/Projects/wellness-events-app/pages/components/Footer/index.jsx";



function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Footer_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "Footer_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "Footer_link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "Footer_link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Events"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "Footer_link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "FAQs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "Footer_link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Social"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "Footer_link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Contact Us"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/eventPage.jsx":
/*!*****************************!*\
  !*** ./pages/eventPage.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_EventSearch_EventDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/EventSearch/EventDetails */ "./pages/components/EventSearch/EventDetails.jsx");
var _jsxFileName = "/Users/sarahdonoghue/Documents/Projects/wellness-events-app/pages/eventPage.jsx";




function EventPage() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, router.query.id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EventSearch_EventDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
    eventId: router.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EventPage);

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/eventPage.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sarahdonoghue/Documents/Projects/wellness-events-app/pages/eventPage.jsx */"./pages/eventPage.jsx");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ })

/******/ });
//# sourceMappingURL=eventPage.js.map