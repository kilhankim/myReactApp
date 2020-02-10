/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ec2-user/myReactApp/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react-router-dom/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/index.js ***!
  \***************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ec2-user/myReactApp/node_modules/react-router-dom/es/index.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ec2-user/myReactApp/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/superagent/lib/client.js":
/*!***********************************************!*\
  !*** ./node_modules/superagent/lib/client.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ec2-user/myReactApp/node_modules/superagent/lib/client.js'");

/***/ }),

/***/ "./src/ApplicationHeader.js":
/*!**********************************!*\
  !*** ./src/ApplicationHeader.js ***!
  \**********************************/
/*! exports provided: ApplicationHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationHeader", function() { return ApplicationHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);


class ApplicationHeader extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      jump: ''
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      class: "navbar navbar-expand-sm navbar-light bg-light mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "navbar-brand"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      class: "nav-link"
    }, " MyApp "), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "collapse navbar-collapse",
      id: "navbarSupportedContent"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      class: "navbar-nav"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      class: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/list",
      class: "nav-link"
    }, "MySQL list")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      class: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/slowLambda",
      class: "nav-link"
    }, "slowLambda")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      class: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/s3list",
      class: "nav-link"
    }, "S3 bucket")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/users/logout",
      class: "btn "
    }, "Logout")));
  }

}

/***/ }),

/***/ "./src/Login.js":
/*!**********************!*\
  !*** ./src/Login.js ***!
  \**********************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");



class Login extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      jump: ''
    };
  }

  api(command) {
    console.log(command);
    superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get('/users/' + command).query({
      email: this.state.email,
      password: this.state.password
    }).end((err, res) => {
      if (err) return;
      /*
      console.log("Login.js result -----------------");
      console.log('res : ' + res);
      console.log("Login.js result -----------------");
      console.log('res : ' + JSON.stringify(res.body));
      console.log('res : ' + JSON.stringify(res.body.result));
      */

      if (res.body.result) {
        console.log('res : ' + JSON.stringify(res.body.result));
        this.setState({
          jump: '/userList'
        });
      }
    });
  }

  render() {
    if (this.state.jump) {
      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: this.state.jump
      });
    }

    const changed = (name, e) => this.setState({
      [name]: e.target.value
    });

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "row mt-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-md-6 m-auto"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card card-body"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      class: "text-center mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-sign-in-alt"
    }), "  Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "email"
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: this.state.email,
      type: "email",
      id: "email",
      name: "email",
      class: "form-control",
      placeholder: "Enter Email",
      onChange: e => changed('email', e)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "password"
    }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: this.state.password,
      type: "password",
      id: "password",
      name: "password",
      class: "form-control",
      placeholder: "Enter Password",
      onChange: e => changed('password', e)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      class: "btn btn-primary btn-block",
      onClick: e => this.api('login')
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "lead mt-4"
    }, "No Account? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/users/register"
    }, "Register")))));
  }

}

/***/ }),

/***/ "./src/UserList.js":
/*!*************************!*\
  !*** ./src/UserList.js ***!
  \*************************/
/*! exports provided: UserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserList", function() { return UserList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);


class UserList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: []
    };
  }

  api(command) {
    console.log(command);
    superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get('/users/' + command).query({
      email: this.state.email,
      password: this.state.password
    }).end((err, res) => {
      if (err) return;
      console.log("list .js result -----------------");
      console.log('res : ' + res);
      console.log("UserList.js result -----------------");
      console.log('res : ' + JSON.stringify(res.body));

      if (res.body.length > 0) {
        console.log('res : ' + JSON.stringify(res.body));
        this.setState({
          member: res.body
        });
        console.log(JSON.stringify(this.state));
      }
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "container contact contact-index"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      class: "btn btn-success",
      "data-toggle": "modal",
      "data-target": "#myModalAdd",
      onClick: e => this.api('list')
    }, " LIST "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      class: "table table-striped",
      id: "mytable"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Address"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.state.member.map((member, i) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", member.id, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", member.name, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", member.title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", member.address, " "));
    }))));
  }

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./src/Login.js");
/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserList */ "./src/UserList.js");
/* harmony import */ var _ApplicationHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationHeader */ "./src/ApplicationHeader.js");







const MyApplication = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApplicationHeader__WEBPACK_IMPORTED_MODULE_5__["ApplicationHeader"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/userList",
  component: _UserList__WEBPACK_IMPORTED_MODULE_4__["UserList"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/",
  component: _Login__WEBPACK_IMPORTED_MODULE_3__["Login"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  component: _Login__WEBPACK_IMPORTED_MODULE_3__["Login"]
})))));

const ApplicationFooter = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "I am Header");

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyApplication, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map