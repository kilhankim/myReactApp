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

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ec2-user/myReactApp/node_modules/redux/es/redux.js'");

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
      href: "/lambda/s3",
      class: "nav-link"
    }, "slowLambda")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      class: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/s3",
      class: "nav-link"
    }, "S3 bucket")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/users/logout",
      class: "btn "
    }, "Logout")));
  }

}

/***/ }),

/***/ "./src/LambdaS3List.js":
/*!*****************************!*\
  !*** ./src/LambdaS3List.js ***!
  \*****************************/
/*! exports provided: LambdaS3List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LambdaS3List", function() { return LambdaS3List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApplicationHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApplicationHeader */ "./src/ApplicationHeader.js");



class LambdaS3List extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    console.log('LambdaS3List is called');
    console.log('LambdaS3List is called');
    console.log('LambdaS3List is called');
    console.log('LambdaS3List is called');
    console.log('LambdaS3List is called');
    console.log('LambdaS3List is called');
    console.log('LambdaS3List is called');
    super(props);
    this.state = {
      member: [],
      jump: ''
    };
  }

  componentWillMount() {
    console.log('componentWillMount is called ');
    this.api('listUser');
  }

  api(command) {
    console.log(command); //console.log(this.props.store.getState())

    superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/' + command).query({
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
    if (this.state.jump) {
      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Redirect, {
        to: this.state.jump
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "container contact contact-index"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApplicationHeader__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeader"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      class: "btn btn-success",
      "data-toggle": "modal",
      "data-target": "#myModalAdd",
      onClick: e => this.api('listUser')
    }, " LIST "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      class: "table table-striped",
      id: "mytable"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Address"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.state.member.map((member, i) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", member.id, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", member.name, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", member.title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", member.address, " "));
    }))));
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
/* harmony import */ var _ApplicationHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApplicationHeader */ "./src/ApplicationHeader.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");




 // 액션 타입을 정의해줍니다.

const STORE_SESSION = 'STORE_SESSION'; // 액션 객체를 만들어주는 액션 생성 함수

const loginAction = (emailId, jwtToken) => ({
  type: STORE_SESSION,
  email: emailId,
  jwtToken: jwtToken
});

const initialState = {
  loginState: false,
  emailId: '',
  token: ''
};
/*
   이것은 리듀서 함수입니다.
   state 와 action 을 파라미터로 받아옵니다.
   그리고 그에 따라 다음 상태를 정의 한 다음에 반환해줍니다.
*/
// 여기에 state = initialState 는, 파라미터의 기본값을 지정해줍니다.

const sessionSave = (state = initialState, action) => {
  console.log(action);
  console.log(action.type);

  switch (action.type) {
    case STORE_SESSION:
      return {
        loginState: true,
        emailId: action.email,
        token: action.jwtToken
      };

    default:
      return state;
  }

  console.log(undefined.props.store.getState());
}; // 스토어를 만들 땐 createStore 에 리듀서 함수를 넣어서 호출합니다.


const store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(sessionSave);
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
    superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/' + command).query({
      email: this.state.email,
      password: this.state.password
    }).end((err, res) => {
      if (err) return;
      localStorage.setItem('login', res.body.result);
      localStorage.setItem('token', res.body.token);

      if (res.body.result) {
        console.log('res : ' + JSON.stringify(res.body.result));
        this.setState({
          jump: '/user/list'
        });
        store.dispatch(loginAction(this.state.email, res.body.token));
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
/* harmony import */ var _ApplicationHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApplicationHeader */ "./src/ApplicationHeader.js");



class UserList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: [],
      jump: ''
    };
  }

  componentWillMount() {
    console.log('componentWillMount is called ');
    this.api('listUser');
  }

  api(command) {
    console.log(command); //console.log(this.props.store.getState())

    superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/' + command).query({
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
    if (this.state.jump) {
      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Redirect, {
        to: this.state.jump
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "container contact contact-index"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApplicationHeader__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeader"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      class: "btn btn-success",
      "data-toggle": "modal",
      "data-target": "#myModalAdd",
      onClick: e => this.api('listUser')
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
/* harmony import */ var _LambdaS3List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LambdaS3List */ "./src/LambdaS3List.js");
/* harmony import */ var _ApplicationHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApplicationHeader */ "./src/ApplicationHeader.js");








const MyApplication = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/user/list",
  component: _UserList__WEBPACK_IMPORTED_MODULE_4__["UserList"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/",
  component: _Login__WEBPACK_IMPORTED_MODULE_3__["Login"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/lambda/s3",
  component: _LambdaS3List__WEBPACK_IMPORTED_MODULE_5__["LambdaS3List"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  component: _Login__WEBPACK_IMPORTED_MODULE_3__["Login"]
})))));

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyApplication, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map