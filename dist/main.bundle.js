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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./../assets/fonts/Gilroy/Gilroy-Bold.otf */ "./src/assets/fonts/Gilroy/Gilroy-Bold.otf"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./../assets/fonts/Gilroy/Gilroy-Regular.otf */ "./src/assets/fonts/Gilroy/Gilroy-Regular.otf"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./../assets/fonts/Gilroy/Gilroy-Light.otf */ "./src/assets/fonts/Gilroy/Gilroy-Light.otf"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ./../assets/fonts/Noto/NotoSansGeorgian-Regular.ttf */ "./src/assets/fonts/Noto/NotoSansGeorgian-Regular.ttf"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ./../assets/fonts/Noto/NotoSansGeorgian-Bold.ttf */ "./src/assets/fonts/Noto/NotoSansGeorgian-Bold.ttf"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ./../assets/fonts/Noto/NotoSansGeorgian-Light.ttf */ "./src/assets/fonts/Noto/NotoSansGeorgian-Light.ttf"));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ./../assets/fonts/Noto/NotoSansGeorgian-Medium.ttf */ "./src/assets/fonts/Noto/NotoSansGeorgian-Medium.ttf"));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ./../assets/fonts/Noto/NotoSansGeorgian-Black.ttf */ "./src/assets/fonts/Noto/NotoSansGeorgian-Black.ttf"));
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ../../src/assets/pictures/white-line.svg */ "./src/assets/pictures/white-line.svg"));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(/*! ../../src/assets/pictures/blue-line.svg */ "./src/assets/pictures/blue-line.svg"));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(/*! ../../src/assets/pictures/red-checkbox.svg */ "./src/assets/pictures/red-checkbox.svg"));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(/*! ../../src/assets/pictures/pencil.png */ "./src/assets/pictures/pencil.png"));
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(/*! ../../src/assets/pictures/close.png */ "./src/assets/pictures/close.png"));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(/*! ../../src/assets/pictures/GG.svg */ "./src/assets/pictures/GG.svg"));

// Module
exports.push([module.i, "*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nbody {\n  margin-top: 7rem;\n  box-sizing: border-box;\n  line-height: 1.5;\n  position: relative;\n  background-color: white;\n  overflow-x: hidden;\n  font-family: 'heading-light' !important; }\n\n.body-overflow {\n  overflow: hidden; }\n\nhtml {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased !important;\n  font-weight: 400; }\n\n/**\n * Firefox specific rule\n */\n@-moz-document url-prefix() {\n  body {\n    font-weight: lighter !important; } }\n\n.main_container {\n  margin-top: 7rem; }\n\n@font-face {\n  font-family: \"heading-big-black\";\n  src: url(" + ___CSS_LOADER_URL___0___ + "); }\n\n@font-face {\n  font-family: \"heading-big-bold\";\n  src: url(" + ___CSS_LOADER_URL___1___ + "); }\n\n@font-face {\n  font-family: \"heading-light\";\n  src: url(" + ___CSS_LOADER_URL___2___ + "); }\n\n@font-face {\n  font-family: \"georgian-heading-regular\";\n  src: url(" + ___CSS_LOADER_URL___3___ + "); }\n\n@font-face {\n  font-family: \"georgian-heading-bold\";\n  src: url(" + ___CSS_LOADER_URL___4___ + "); }\n\n@font-face {\n  font-family: \"georgian-heading-light\";\n  src: url(" + ___CSS_LOADER_URL___5___ + "); }\n\n@font-face {\n  font-family: \"georgian-heading-medium\";\n  src: url(" + ___CSS_LOADER_URL___6___ + "); }\n\n@font-face {\n  font-family: \"georgian-heading-black\";\n  src: url(" + ___CSS_LOADER_URL___7___ + "); }\n\n.paragraph-biggest {\n  font-size: calc(20px + (24 - 20) * ((100vw - 300px) / (1900 - 700))) !important; }\n\n.paragraph-big {\n  font-size: calc(17px + (22 - 17) * ((100vw - 300px) / (1900 - 700))) !important; }\n\n.paragraph-regular {\n  font-size: calc(15px + (19 - 15) * ((100vw - 300px) / (1900 - 700))) !important; }\n\n.paragraph-medium {\n  font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1900 - 700))) !important; }\n\n.paragraph-small {\n  font-size: calc(11px + (14 - 11) * ((100vw - 300px) / (1900 - 700))) !important; }\n\n.heading-1 {\n  font-size: calc(35px + (68 - 35) * ((100vw - 300px) / (1900 - 700))) !important; }\n\n.heading-2 {\n  font-size: calc(32px + (40 - 32) * ((100vw - 300px) / (1900 - 700))) !important; }\n\n.heading-3 {\n  font-size: calc(24px + (30 - 24) * ((100vw - 300px) / (1900 - 700))) !important; }\n\n.heading-4 {\n  font-size: calc(20px + (24 - 20) * ((100vw - 300px) / (1900 - 700))) !important; }\n\n.heading-regular-font {\n  font-family: \"heading-light\", \"georgian-heading-regular\" !important; }\n\n.heading-bold-font {\n  font-family: \"heading-big-bold\", \"georgian-heading-bold\" !important; }\n\n.heading-black-font {\n  font-family: \"heading-big-black\", \"georgian-heading-black\" !important; }\n\n.sectionOne {\n  width: 100%;\n  height: 100%; }\n\n.section_property {\n  margin-top: 5rem;\n  padding: 0rem 3rem 0rem 3rem;\n  position: relative; }\n\n.hero {\n  width: 100%;\n  height: 100vh;\n  background: url(https://ieefa.org/wp-content/uploads/2016/10/Buckley-102516.jpg) no-repeat;\n  background-position: center;\n  color: white;\n  background-size: cover;\n  position: relative; }\n  .hero:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(12, 16, 19, 0.51);\n    z-index: 2; }\n  .hero .hero_headline {\n    width: 100%;\n    height: 100%;\n    margin-top: -7rem;\n    display: flex;\n    justify-content: center; }\n    .hero .hero_headline__container {\n      justify-self: center;\n      align-self: center;\n      margin-top: 3rem;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      z-index: 55; }\n    .hero .hero_headline .paragraph {\n      margin: 1.5rem 0rem 2.5rem 0rem;\n      opacity: 70%; }\n    .hero .hero_headline .hero_btn {\n      text-align: center; }\n      .hero .hero_headline .hero_btn a {\n        display: block;\n        border-radius: 15px;\n        background-color: #f7b900;\n        font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1900 - 700))) !important;\n        width: 15rem;\n        padding: 1rem;\n        color: white;\n        text-decoration: none;\n        box-shadow: 0px 8px 70px rgba(247, 185, 0, 0.3); }\n        .hero .hero_headline .hero_btn a:hover {\n          box-shadow: 0px 10px 40px rgba(244, 208, 72, 0.3); }\n\n.step-form .step-item {\n  width: 36px;\n  height: 36px;\n  line-height: 36px;\n  text-align: center;\n  border-radius: 50%;\n  background-color: #d7d8d6;\n  color: #2e2e2e;\n  font-size: 24px;\n  font-weight: 500;\n  position: relative;\n  z-index: 1; }\n\n.step-form .step-form-item {\n  position: relative;\n  display: inline-block;\n  margin-bottom: 20px;\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .step-form .step-form-item:after {\n    content: \"\";\n    width: 100%;\n    height: 2px;\n    background-color: #d7d8d6;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%);\n    z-index: 0;\n    margin-top: -1px; }\n\n.form-setup .setup-service {\n  background: #fff;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), inset 0 5px 0 #f7b900;\n  padding: 20px;\n  margin-bottom: 40px; }\n  .form-setup .setup-service .form-title {\n    font-weight: 500;\n    font-size: 20px;\n    color: #2e2e2e;\n    margin-bottom: 10px; }\n  .form-setup .setup-service .selection_lable {\n    margin: .5rem 0rem .5rem 0rem; }\n\n.collapsible-group .selected {\n  width: 40px;\n  height: 100%;\n  background: url(" + ___CSS_LOADER_URL___8___ + ") no-repeat center center;\n  border-radius: 50%; }\n\n.collapsible-group .new-check-box {\n  background: url(" + ___CSS_LOADER_URL___9___ + ") no-repeat center center; }\n\n.collapsible-group .checkbox-arrow {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 45%;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center; }\n\n.collapsible-group .arrow {\n  width: 25px;\n  margin-right: 0.6rem; }\n\n.collapsible-group .up-arrow {\n  position: absolute;\n  top: 20%;\n  right: 4%;\n  width: 25px;\n  height: 100%;\n  transform: rotateX(180deg) translate(-50%, 50%);\n  background-size: auto;\n  background-size: 100%; }\n\n.width-for-labels {\n  width: 85%; }\n\n.cost {\n  float: right;\n  display: flex;\n  align-items: center;\n  width: auto;\n  margin-top: .5rem;\n  margin-left: 1.7rem; }\n\n.question_mark {\n  width: 20px;\n  height: 20px;\n  margin-top: 2px; }\n\n.zero {\n  margin: 0px 5px 0px 5px; }\n\n.class-office-checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.342); }\n\n.div-addition-services {\n  display: none;\n  height: auto;\n  padding-bottom: 10px;\n  margin-top: 8px;\n  margin-left: -18px; }\n\n.radio {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 1rem; }\n\n.div-addition-services .choose-fees.active label {\n  color: #fff !important;\n  background: #f4d048 !important; }\n\n.text {\n  float: left; }\n\n.choose-fees {\n  border-radius: 15px !important; }\n\n.comp {\n  margin-bottom: 35px;\n  text-align: center; }\n\n.side-bar {\n  margin-top: 4.2rem; }\n\n.your-order {\n  margin-bottom: 35px;\n  background: #fff;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);\n  padding: 20px 20px 29px 20px; }\n  .your-order h3 {\n    margin-bottom: 30px; }\n  .your-order .form-group {\n    width: 100%;\n    height: 100%;\n    padding: 10px 0;\n    border-top: 1px solid rgba(128, 128, 128, 0.342);\n    border-bottom: 1px solid rgba(128, 128, 128, 0.342);\n    display: table; }\n    .your-order .form-group .text {\n      float: left;\n      font-weight: 400; }\n    .your-order .form-group .value {\n      color: #2e2e2e;\n      font-weight: 700;\n      text-align: right;\n      float: right; }\n  .your-order .total-value {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: 100%;\n    margin-top: 1.5rem; }\n\n.services-heading {\n  margin-bottom: 1.5rem;\n  opacity: 50%; }\n\n.mobile-delete {\n  display: block; }\n\n.heading {\n  margin-left: 5px; }\n\n.login_row {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.login-form {\n  width: 55%; }\n\n.form-group {\n  margin-bottom: 15px; }\n  .form-group .label {\n    display: inline-block;\n    max-width: 100%;\n    margin-bottom: 5px;\n    font-weight: 700; }\n  .form-group .form-control {\n    display: block;\n    width: 100%;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n  .form-group .email {\n    opacity: 70%;\n    position: relative;\n    width: 100%; }\n  .form-group label {\n    width: 100%; }\n  .form-group .position {\n    position: relative; }\n  .form-group .eyes {\n    width: 23px;\n    height: 20px;\n    position: absolute;\n    top: 61.5%;\n    right: 2%;\n    transform: translate(-50%, -50%);\n    cursor: pointer; }\n  .form-group .forgot-password {\n    float: right;\n    text-decoration: underline;\n    color: #666; }\n  .form-group .login .btn-submit {\n    float: left;\n    padding: 12px 0 !important; }\n  .form-group .login-with-google {\n    min-width: 220px;\n    font-weight: 700;\n    font-size: 16px;\n    text-align: center;\n    color: #5485ec;\n    background: #fff;\n    border: 1px solid #235ed8;\n    box-sizing: border-box;\n    border-radius: 30px;\n    display: block !important; }\n    .form-group .login-with-google .google_logo {\n      width: 20%; }\n\n.custom_flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%; }\n\nimg {\n  display: initial; }\n\n.select_country {\n  display: flex;\n  width: 100%;\n  justify-content: space-between; }\n\n.col-md-6 {\n  margin-right: -9px;\n  width: 100%; }\n\n.col-md-5 {\n  margin-left: -9px;\n  width: 100%; }\n\n.btn-submit {\n  padding: 12px 12px !important;\n  width: 50%; }\n\n.form-setup .form-title {\n  margin-left: .5rem; }\n\n.form-setup .alert-information {\n  margin: 1rem 0rem 1rem 0rem; }\n\n.form-setup .radio {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .form-setup .radio .radio-inline {\n    display: inline-block !important;\n    margin-bottom: 0;\n    margin-left: 1rem; }\n\n.form-setup .flex_radio {\n  display: flex;\n  align-items: center;\n  margin-top: 1rem; }\n  .form-setup .flex_radio .radio_corporate {\n    margin-left: 2rem;\n    position: relative; }\n  .form-setup .flex_radio .radio_personal {\n    position: relative;\n    margin-left: .5rem; }\n\n.form-setup .radio_checkmark {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 100%;\n  left: 2%;\n  height: 26px;\n  width: 26px;\n  margin-top: -12px;\n  background: #fff;\n  border: 1px solid #c4c4c4;\n  box-sizing: border-box;\n  border-radius: 50%;\n  cursor: pointer; }\n\n.form-setup .radio_checkmark-after:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50% !important;\n  background: #cc1f26 url(" + ___CSS_LOADER_URL___10___ + ") !important; }\n\n.form-setup .radio_checkmark_left {\n  left: 1.1%; }\n\n.read-and-agreed .checkbox {\n  display: flex;\n  flex-direction: column;\n  color: red; }\n  .read-and-agreed .checkbox .agreed {\n    margin-top: .5rem; }\n\n.payment-methods {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 10px;\n  margin-top: .5rem; }\n  .payment-methods .credit-cards {\n    padding: 1rem;\n    border: 1px solid gray;\n    border-radius: 4px;\n    cursor: pointer;\n    text-align: center; }\n    .payment-methods .credit-cards:hover {\n      border: 1px solid red; }\n  .payment-methods .card-name {\n    margin-top: .5rem; }\n\n.card_number_container {\n  display: grid;\n  width: 100%;\n  align-items: center;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px; }\n  .card_number_container .card-number {\n    position: relative; }\n    .card_number_container .card-number .icon-card {\n      position: absolute;\n      transform: translate(-50%, 50%);\n      top: 42%;\n      left: 90%; }\n  .card_number_container .card-type-card {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.expire_date {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px; }\n  .expire_date .expiried-date-ccv-code .month_year {\n    width: 100%;\n    display: flex;\n    align-items: center; }\n    .expire_date .expiried-date-ccv-code .month_year .year {\n      margin-left: 1rem; }\n\n.profile_row {\n  display: grid;\n  grid-template-columns: .3fr 1fr;\n  grid-gap: 30px; }\n\n.profile-sidebar {\n  border: 1px solid rgba(141, 141, 141, 0.25); }\n\n.profile-nav {\n  display: block; }\n\n.users {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid rgba(141, 141, 141, 0.25);\n  padding: 1rem;\n  font-weight: bold; }\n\n.profile_sections {\n  display: flex;\n  flex-direction: column; }\n\n.profile-nav li img {\n  margin-right: 15px; }\n\n.profile-nav ul li {\n  line-height: 50px;\n  color: #2E2E2E;\n  border-bottom: 1px solid rgba(141, 141, 141, 0.25);\n  padding: 0 20px;\n  background-color: #fff;\n  cursor: pointer;\n  position: relative; }\n  .profile-nav ul li:hover {\n    background-color: #EBEBEB; }\n\n.has-sub {\n  position: relative; }\n  .has-sub .caret {\n    display: inline-block;\n    width: 0;\n    height: 0;\n    margin-left: 2px;\n    vertical-align: middle;\n    border-top: 4px dashed;\n    border-top-width: 4px;\n    border-right: 4px solid transparent;\n    border-right-width: 4px;\n    border-left: 4px solid transparent;\n    border-left-width: 4px;\n    position: absolute;\n    transform: translate(-50%, 50%);\n    left: 90%;\n    top: 40%;\n    cursor: pointer; }\n\n.sub-item-closed {\n  height: 0px;\n  transition: all .3s ease-in; }\n\n.sub-item-opened {\n  height: 100px !important; }\n\n.blue-hover:hover {\n  background-color: #00A5FA !important;\n  color: white; }\n\n.myaccount-title {\n  margin-bottom: 1rem; }\n\n.account-groups.personal-info .form-group {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);\n  padding-bottom: 14px; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 10px;\n  font-weight: 700; }\n\n.account-groups {\n  position: relative; }\n  .account-groups .edit-c {\n    position: absolute;\n    transform: translate(-50%, 50%);\n    width: 25px;\n    height: 25px;\n    background: url(" + ___CSS_LOADER_URL___11___ + ") center center no-repeat;\n    background-size: auto;\n    background-size: 100%;\n    left: 95%;\n    top: 3%;\n    cursor: pointer; }\n  .account-groups .close {\n    background: url(" + ___CSS_LOADER_URL___12___ + ") center center no-repeat; }\n\n.display-none {\n  display: none; }\n\n.display-block {\n  display: block !important; }\n\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n\n.btn-toggle {\n  width: 100%;\n  text-align: left;\n  color: #2e2e2e;\n  font-weight: 500;\n  font-size: 16px;\n  padding: 20px;\n  padding-right: 20px;\n  padding-right: 100px;\n  border-radius: 0;\n  border: none;\n  box-shadow: none;\n  position: relative;\n  white-space: initial;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.342); }\n\n.btn-submit {\n  border-radius: 30px;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  background-color: #f7b900;\n  padding: 12px 155px;\n  transition: all .2 ease; }\n  .btn-submit:hover {\n    background-color: #f4d048; }\n\n.red-button {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%; }\n\n.about_btn {\n  border: 1px solid white;\n  background-color: initial;\n  width: 40%;\n  margin: 0 auto; }\n  .about_btn:hover {\n    background-color: #f4d048; }\n\n.btn-small-fill {\n  text-decoration: none;\n  border-radius: 15px;\n  width: 12rem;\n  padding: 0.5rem 1rem 0.5rem 1rem;\n  color: white;\n  display: block;\n  text-align: center;\n  position: relative;\n  background-color: #f7b900;\n  font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1900 - 700))) !important;\n  background-size: 180%;\n  background-position-x: -2rem;\n  border-image: none;\n  border-image-slice: 1;\n  cursor: pointer;\n  transition: all 0.2s; }\n  .btn-small-fill:hover {\n    box-shadow: 0px 8px 70px rgba(255, 176, 0, 0.2);\n    background-position-x: -9rem; }\n\n.setup_btn {\n  padding: .5rem 0rem .5rem 0rem;\n  width: 7rem !important;\n  margin-right: -7vw; }\n  .setup_btn:hover {\n    box-shadow: 0px 8px 70px rgba(255, 176, 0, 0.2);\n    background-position-x: -4rem; }\n\n.btn-save {\n  font-weight: 700;\n  line-height: normal;\n  font-size: 16px;\n  text-align: center;\n  color: #2E2E2E;\n  background: #DEDEDE;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 10px 0;\n  width: 140px;\n  margin-top: 1rem; }\n  .btn-save:hover {\n    background-color: #FFB000;\n    color: white; }\n\n.btn-primary {\n  font-weight: 700;\n  font-size: 16px;\n  color: white;\n  background: #f7b900;\n  border-radius: 23px;\n  padding: 12px 20px !important;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  min-width: 260px;\n  outline: 0; }\n  .btn-primary:hover {\n    background-color: #FFB000;\n    color: white; }\n\n.about {\n  width: 100%;\n  background-color: #f4d048;\n  padding: 20px 20px 20px 20px; }\n  .about .grid-about {\n    display: grid;\n    grid-template-columns: 1fr 0.8fr;\n    align-items: center; }\n  .about .about_text {\n    width: 100%;\n    color: white; }\n    .about .about_text .heading {\n      color: white; }\n\n@media only screen and (max-width: 790px) {\n  .about .grid-about {\n    grid-template-columns: initial;\n    grid-template-rows: 1fr 1fr; }\n  .about .about_btn {\n    width: 80%; } }\n\n.footer-copyright {\n  padding: 30px 0 45px;\n  color: #a8a8a8;\n  line-height: 31px; }\n  .footer-copyright .footer-method {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 1rem;\n    cursor: pointer; }\n  .footer-copyright .copyright {\n    margin-top: 1.5rem;\n    color: #4d555b; }\n\na {\n  text-decoration: none; }\n\n.active {\n  background-color: #f4d048 !important;\n  color: #fff !important;\n  border: 1px solid #dedede;\n  cursor: pointer; }\n\n.hover-blue {\n  cursor: pointer;\n  color: gray;\n  border: 1px solid #dedede; }\n  .hover-blue:hover {\n    background-color: #f4d048 !important;\n    color: white; }\n\n.blue {\n  color: #f7b900; }\n\n.red {\n  color: red;\n  margin-left: .5rem;\n  padding: .7rem; }\n\n.question-mark {\n  color: red; }\n\n.row {\n  display: grid;\n  grid-template-columns: 1fr .8fr; }\n\n.heading {\n  color: #8d8d8d;\n  margin-bottom: 15px; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 40px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin-top: 0.6rem;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n\n.collapsible-group {\n  background: #fff;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);\n  margin-bottom: 20px;\n  position: relative; }\n\n.custom_styles {\n  text-align: start; }\n\n.new-check-box {\n  background: url(" + ___CSS_LOADER_URL___9___ + ") no-repeat center center; }\n  .new-check-box:after {\n    transform: rotateX(180deg) translate(-50%, 50%); }\n\n.collapse {\n  padding: 0 20px 20px;\n  height: auto !important;\n  display: block !important; }\n\n.collapse-none {\n  display: none; }\n\n.clearfix {\n  padding: 15px 0 15px 40px;\n  display: block;\n  position: relative; }\n\n.side-padding {\n  padding: 15px 0 15px 40px;\n  display: block;\n  position: relative; }\n\n.checkmark {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  height: 24px;\n  width: 24px;\n  margin-top: -12px;\n  background: #fff;\n  border: 1px solid #c4c4c4;\n  box-sizing: border-box;\n  border-radius: 3px;\n  cursor: pointer;\n  display: block; }\n\n.new-checkmark {\n  /* content: \"\"; */\n  /* width: 100%;\n    height: 100%; */\n  position: absolute;\n  /* top: 0; */\n  left: 0;\n  background: #cc1f26 url(" + ___CSS_LOADER_URL___10___ + ") no-repeat center center;\n  background-size: auto;\n  background-size: cover;\n  border-radius: 4px;\n  /* display: none; */ }\n\n.addition-services {\n  position: relative; }\n\n.form-group {\n  padding: .6rem; }\n\n.flex-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.flex {\n  display: flex !important; }\n\n.navigation {\n  background: white;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  height: 4.3rem;\n  padding: 0 3.5vw;\n  z-index: 99;\n  position: fixed;\n  top: 0;\n  -webkit-overflow-scrolling: touch; }\n  .navigation__wrapper {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .navigation .logo_navigation__container {\n    width: 55%;\n    display: flex;\n    align-items: center;\n    justify-content: start; }\n  .navigation__logo {\n    display: inline-block;\n    background: url(" + ___CSS_LOADER_URL___13___ + ") no-repeat center center;\n    width: 5rem;\n    height: 5rem; }\n  .navigation .logo_small {\n    display: none; }\n  .navigation__menu {\n    width: 88%;\n    height: auto;\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-evenly;\n    align-content: center; }\n    .navigation__menu__list {\n      width: 100%;\n      list-style: none;\n      display: flex;\n      justify-content: space-evenly;\n      align-items: center;\n      height: 100%; }\n      .navigation__menu__list__items {\n        cursor: pointer;\n        height: 100%; }\n        .navigation__menu__list__items a {\n          display: inline-block;\n          text-decoration: none;\n          font-size: 1.6rem;\n          color: #151f28;\n          font-weight: 600;\n          transition: all 0.2s; }\n          .navigation__menu__list__items a:hover {\n            color: #151f28bd; }\n  .navigation .dropdown-style4 {\n    width: 93%;\n    margin-top: 0 !important;\n    background: #f3f3f3 !important;\n    border-radius: 0 0 5px 5px !important;\n    padding: 0 30px 30px !important; }\n  .navigation .dropdown-menu.dropdown-style4 li.title-navigation {\n    width: 100% !important; }\n  .navigation .dropdown-menu.dropdown-style4 label {\n    font-size: 18px;\n    line-height: 60px;\n    margin-bottom: 10px;\n    border-bottom: 1px solid #c4c4c4;\n    display: block; }\n  .navigation .dropdown-menu.dropdown-style4 li {\n    display: inline-block;\n    width: 33%; }\n  .navigation .dropdown-menu.dropdown-style4 > li > a {\n    font-size: 15px;\n    font-weight: 500;\n    color: #000;\n    padding: 10px 0; }\n    .navigation .dropdown-menu.dropdown-style4 > li > a:hover {\n      color: #f7b900; }\n  .navigation .additional-label-styles {\n    width: 100%;\n    display: flex !important;\n    align-items: center; }\n  .navigation .dropdown {\n    width: 100%;\n    height: 100%;\n    display: none; }\n    .navigation .dropdown .dropdown-menu {\n      position: absolute;\n      z-index: 1000;\n      display: block;\n      min-width: 160px;\n      padding: 15px 0;\n      margin-top: 2px;\n      list-style: none;\n      background-color: #fff;\n      -webkit-background-clip: padding-box;\n      background-clip: padding-box;\n      border: 1px solid #ccc;\n      border: 1px solid rgba(0, 0, 0, 0.15);\n      border-radius: 4px;\n      -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n      top: 100%;\n      left: 3.5%;\n      text-align: center; }\n      .navigation .dropdown .dropdown-menu li {\n        margin-top: 0.5rem; }\n  .navigation__shop {\n    display: block; }\n    .navigation__shop a {\n      transform: translateZ(0); }\n  .navigation .hamburger {\n    display: none; }\n    .navigation .hamburger svg {\n      width: 100%;\n      height: 100%; }\n  .navigation .mobile_nav {\n    display: none; }\n  .navigation .svg_burger {\n    display: none; }\n  .navigation .caret-up {\n    transform: rotateX(180deg); }\n  .navigation .caret {\n    display: inline-block;\n    width: 0;\n    height: 0;\n    margin-left: 2px;\n    vertical-align: middle;\n    border-top: 4px dashed;\n    border-right: 4px solid transparent;\n    border-left: 4px solid transparent;\n    cursor: pointer; }\n  .navigation .dropdown_open {\n    display: block !important; }\n  .navigation .remove-setup-btn {\n    display: none !important; }\n  .navigation .mobile_setup {\n    display: none; }\n  .navigation .first_click {\n    cursor: pointer; }\n  .navigation .crypto_section {\n    position: relative; }\n    .navigation .crypto_section__container {\n      width: 100%;\n      display: flex;\n      position: relative;\n      align-items: center; }\n    .navigation .crypto_section .crypto_flex {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      margin-left: 2rem; }\n    .navigation .crypto_section .current_price {\n      margin-left: 1rem; }\n    .navigation .crypto_section .img {\n      width: 2rem;\n      height: 100%; }\n    .navigation .crypto_section .text {\n      margin: 0rem 1rem 0rem 1rem; }\n  .navigation .laptop_crypto {\n    display: none; }\n\n.observer-nav {\n  box-shadow: 0px 20px 60px -24px rgba(0, 0, 0, 0.4) !important;\n  background-color: white;\n  height: 4.6rem;\n  transition: all 0.2s ease; }\n\n.modal {\n  transition: opacity 0.25s ease;\n  z-index: 1000;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); }\n\n.modal-overlay {\n  background-color: rgba(0, 0, 0, 0.2); }\n\nbody.modal-active {\n  overflow-x: hidden;\n  overflow-y: visible !important; }\n\n.carousel-open:checked + .carousel-item {\n  position: static;\n  opacity: 100; }\n\n.carousel-item {\n  -webkit-transition: opacity 0.6s ease-out;\n  transition: opacity 0.6s ease-out; }\n\n#carousel-1:checked ~ .control-1,\n#carousel-2:checked ~ .control-2,\n#carousel-3:checked ~ .control-3 {\n  display: block; }\n\n.carousel-indicators {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  bottom: 2%;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 10; }\n\n#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,\n#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,\n#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {\n  color: #2b6cb0;\n  /*Set to match the Tailwind colour you want the active one to be */ }\n\n.card_styles {\n  border-radius: 15px;\n  background-color: white;\n  box-shadow: 20px 40px 60px rgba(12, 16, 19, 0.11);\n  margin-top: 1.5rem;\n  position: relative; }\n\n.formation_section .cards_formation {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-gap: 30px;\n  width: 100%;\n  height: 100%;\n  padding: 0px 0px 50px 0px; }\n  .formation_section .cards_formation .cards {\n    width: 100%;\n    height: 100%; }\n    .formation_section .cards_formation .cards img {\n      height: 100%;\n      width: 100%; }\n    .formation_section .cards_formation .cards .text {\n      position: absolute;\n      left: 49.8%;\n      width: 100%;\n      text-align: left;\n      padding: 20px;\n      z-index: 10;\n      transform: translate(-50%, -50%);\n      top: 75.7%;\n      color: white;\n      height: 9rem; }\n      .formation_section .cards_formation .cards .text .heading__text {\n        margin-bottom: .5rem; }\n  .formation_section .cards_formation .cards_formation > div:nth-child(4) {\n    grid-row: 2; }\n  .formation_section .cards_formation div.cards:nth-child(5) {\n    grid-row: 2; }\n  .formation_section .cards_formation div.cards:nth-child(6) {\n    grid-row: 2; }\n\n.card_section {\n  position: relative; }\n  .card_section .card_container {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 0.8fr);\n    grid-gap: 30px;\n    padding: 0px 0px 50px 0px; }\n    .card_section .card_container .cards .cards__icon {\n      width: 100%;\n      height: 5rem; }\n      .card_section .card_container .cards .cards__icon__img {\n        width: 100%;\n        height: 100%; }\n    .card_section .card_container .cards__text {\n      padding: 0rem 0rem 1rem 0rem;\n      margin-top: 2rem;\n      text-align: left; }\n\n.home_btn {\n  align-items: center;\n  justify-content: center;\n  grid-row: 3;\n  grid-column: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.tax_section .tax_cards {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 30px; }\n  .tax_section .tax_cards .tax-card {\n    position: relative; }\n    .tax_section .tax_cards .tax-card a img {\n      width: 100%; }\n    .tax_section .tax_cards .tax-card .gray-text {\n      background: rgba(230, 230, 230, 0.7);\n      position: absolute;\n      transform: translate(-50%, -50%);\n      width: 100%;\n      padding: 20px;\n      left: 50%;\n      top: 43.4%;\n      display: flex;\n      align-items: center; }\n      .tax_section .tax_cards .tax-card .gray-text .paragraph_city {\n        display: inline-block;\n        margin-left: .5rem;\n        opacity: 80%; }\n    .tax_section .tax_cards .tax-card .box-grey {\n      background: #e6e6e6;\n      padding: 20px 20px 10px;\n      margin-bottom: -27px; }\n      .tax_section .tax_cards .tax-card .box-grey .article-imgage-box {\n        position: relative;\n        overflow: hidden;\n        padding: 20px 0 20px; }\n        .tax_section .tax_cards .tax-card .box-grey .article-imgage-box .btn-read-more {\n          color: #f12e36;\n          padding: 0;\n          border: none;\n          border-bottom-color: currentcolor;\n          border-bottom-style: none;\n          border-bottom-width: medium;\n          float: right;\n          border-bottom: 1px solid;\n          border-radius: 0; }\n\n.tax_section .note {\n  color: #8d8d8d;\n  padding: 5rem 0rem 1.3rem 0rem; }\n\n.serviced-office {\n  background-color: #F3F3F3;\n  padding: 40px !important; }\n  .serviced-office .padding-topdesk {\n    padding-top: 20px; }\n  .serviced-office .commertial_cards {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 30px; }\n  .serviced-office .iconbox-style2 {\n    background: #fff;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n    border-radius: 3px;\n    color: #8d8d8d;\n    padding: 20px;\n    margin-top: 20px;\n    min-height: 120px;\n    display: flex;\n    align-items: center; }\n    .serviced-office .iconbox-style2 .text {\n      margin-left: 2rem; }\n  .serviced-office .col-md-offset-left {\n    margin-left: 17%; }\n  .serviced-office .col-md-offset-right {\n    margin-right: 17%; }\n  .serviced-office .btn-margin {\n    margin-top: 2rem; }\n\n.transition,\np,\n.accordion li i:before,\n.accordion li i:after {\n  transition: all 0.25s ease-in-out; }\n\n.flipIn,\nh1,\n.accordion li {\n  animation: flipdown 0.5s ease both; }\n\n.no-select,\nh2 {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\nh1 {\n  text-transform: uppercase;\n  font-size: 36px;\n  line-height: 42px;\n  letter-spacing: 3px;\n  font-weight: 100; }\n\nh2 {\n  font-size: calc(15px + (19 - 15) * ((100vw - 300px) / (1900 - 700))) !important;\n  line-height: 34px;\n  font-weight: 300;\n  letter-spacing: 1px;\n  display: block;\n  background-color: #fefffa;\n  margin: 0;\n  cursor: pointer; }\n\np {\n  color: rgba(48, 69, 92, 0.8);\n  font-size: 17px;\n  line-height: 26px;\n  letter-spacing: 1px;\n  position: relative;\n  overflow: hidden;\n  max-height: 800px;\n  opacity: 1;\n  transform: translate(0, 0);\n  margin-top: 14px;\n  z-index: 2; }\n\n.accordion {\n  list-style: none;\n  perspective: 900;\n  padding: 0;\n  margin: 0; }\n\n.accordion li {\n  position: relative;\n  padding: 0;\n  margin: 0;\n  padding-bottom: 4px;\n  padding-top: 18px;\n  border-top: 1px dotted #dce7eb; }\n\n.accordion li:nth-of-type(1) {\n  animation-delay: 0.5s; }\n\n.accordion li:nth-of-type(2) {\n  animation-delay: 0.75s; }\n\n.accordion li:nth-of-type(3) {\n  animation-delay: 1s; }\n\n.accordion li:last-of-type {\n  padding-bottom: 0; }\n\n.accordion li i {\n  position: absolute;\n  transform: translate(-6px, 0);\n  margin-top: 16px;\n  right: 0; }\n\n.accordion li i:before,\n.accordion li i:after {\n  content: \"\";\n  position: absolute;\n  background-color: #ff6873;\n  width: 3px;\n  height: 9px; }\n\n.accordion li i:before {\n  transform: translate(-2px, 0) rotate(45deg); }\n\n.accordion li i:after {\n  transform: translate(2px, 0) rotate(-45deg); }\n\n.accordion li input[type=\"checkbox\"] {\n  position: absolute;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0; }\n\n.accordion li input[type=\"checkbox\"]:checked ~ p {\n  margin-top: 0;\n  max-height: 0;\n  opacity: 0;\n  transform: translate(0, 50%); }\n\n.accordion li input[type=\"checkbox\"]:checked ~ i:before {\n  transform: translate(2px, 0) rotate(45deg); }\n\n.accordion li input[type=\"checkbox\"]:checked ~ i:after {\n  transform: translate(-2px, 0) rotate(-45deg); }\n\n@keyframes flipdown {\n  0% {\n    opacity: 0;\n    transform-origin: top center;\n    transform: rotateX(-90deg); }\n  5% {\n    opacity: 1; }\n  80% {\n    transform: rotateX(8deg); }\n  83% {\n    transform: rotateX(6deg); }\n  92% {\n    transform: rotateX(-3deg); }\n  100% {\n    transform-origin: top center;\n    transform: rotateX(0deg); } }\n\n@media only screen and (max-width: 1380px) {\n  .logo_navigation__container {\n    width: 68% !important; }\n  .gray-text {\n    top: 33.6% !important; } }\n\n@media only screen and (max-width: 1280px) {\n  /**\n *\n *     ? FORR HOME PAGE\n *\n *\n */\n  .cards .text {\n    top: 74.6% !important; } }\n\n@media only screen and (max-width: 1100px) {\n  .formation_section .cards_formation {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr; }\n  .cards .text {\n    top: 78.4% !important; }\n  .cards__text {\n    text-align: center !important; } }\n\n@media only screen and (max-width: 980px) {\n  .gray-text {\n    top: 65.6% !important; }\n  .tax_cards {\n    grid-template-columns: initial !important;\n    grid-template-rows: repeat(3, 1fr); }\n  .cards .text {\n    top: 71.5% !important; }\n  .commertial_cards {\n    grid-template-columns: initial !important;\n    grid-template-rows: 1fr 1fr;\n    margin-top: 1rem; }\n    .commertial_cards .col-md-offset-left,\n    .commertial_cards .col-md-offset-right {\n      margin: 0 !important; }\n  .card_container {\n    grid-template-columns: initial !important;\n    grid-template-rows: repeat(4, 0.8fr);\n    grid-gap: 10px; } }\n\n@media only screen and (max-width: 780px) {\n  .cards .text {\n    top: 84.2% !important; }\n  .formation_section .cards_formation {\n    grid-template-columns: initial;\n    grid-template-rows: repeat(6, 1fr); }\n  .section_property {\n    padding: 0rem 1rem 0rem 1rem; } }\n\n@media only screen and (max-width: 560px) {\n  .cards .text {\n    top: 84.2% !important; }\n  .gray-text {\n    top: 50.6% !important; } }\n\n@media only screen and (max-width: 768px) {\n  .hero .hero_headline__container {\n    margin-top: 5.5rem !important; }\n  .row {\n    padding: 1rem !important;\n    grid-template-columns: initial !important;\n    grid-template-rows: 1fr .2fr !important; }\n  .side-padding {\n    padding: initial !important; }\n  .side-bar {\n    margin-top: initial; }\n  .mobile-delete {\n    display: none; }\n  .flex-for-form-group {\n    display: flex !important;\n    flex-direction: column;\n    align-items: center; }\n  .value {\n    margin-top: .5rem; }\n  .mobile_setup {\n    display: block !important; }\n  .navigation .logo_navigation__container {\n    width: 32% !important; }\n  .side-bar {\n    margin-top: 2rem !important; }\n  .payment-methods {\n    grid-template-columns: initial;\n    grid-template-rows: 1fr 1fr 1fr; }\n  .card_number_container {\n    grid-template-columns: initial;\n    grid-template-rows: 1fr 1fr; }\n    .card_number_container .card-number {\n      width: 100%; }\n    .card_number_container .card-type-box {\n      margin-top: 1.7rem; }\n  .expire_date {\n    grid-template-columns: initial;\n    grid-template-rows: 1fr 1fr; }\n  .hero_headline__container {\n    padding: 1.5rem;\n    text-align: center;\n    margin-top: 2rem !important; }\n  .profile_row {\n    grid-template-columns: initial;\n    grid-template-rows: 1fr; } }\n\n@media only screen and (max-width: 560px) {\n  .width-for-labels {\n    width: 55%; }\n  .navigation {\n    padding: 0 1vw; }\n  .navigation .logo_navigation_container {\n    width: 25% !important; } }\n\n@media only screen and (max-width: 1100px) {\n  .hero {\n    margin-top: -5rem; }\n    .hero .hero_headline__container {\n      margin-top: 9rem; }\n  .row {\n    grid-template-columns: 1fr !important;\n    padding: 1rem 3rem 0rem 3rem; }\n  .side-padding {\n    padding: initial !important; }\n  .side-bar {\n    margin-top: initial; }\n  .login-form {\n    width: 75%; }\n  .dropdown-menu.dropdown-style3 li {\n    width: 55% !important; }\n  .navigation .dropdown-style4 {\n    width: 94% !important; }\n  .navigation .dropdown .dropdown-menu {\n    left: 3% !important; } }\n\n@media only screen and (max-width: 880px) {\n  .login-form {\n    width: 100%;\n    padding: 1rem; }\n  .custom_flex {\n    flex-direction: column; }\n  .btn-submit {\n    padding: 15px 15px !important;\n    width: 100%; }\n  .login-with-google {\n    width: 100%; }\n  .google_logo {\n    width: 12% !important; }\n  .margin-between {\n    margin: 1rem 0rem 1rem 0rem; }\n  .form-group {\n    margin-bottom: initial !important; }\n  .agree {\n    margin-top: 1rem; }\n  .have-account {\n    margin-bottom: 1rem; }\n  .card-type-box {\n    margin-top: 1.7rem; }\n  .footer-copyright {\n    padding: 0rem 2rem 0rem 2rem !important; }\n    .footer-copyright .footer-method {\n      display: grid !important;\n      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n      grid-template-rows: 1fr; } }\n\n@media only screen and (max-width: 1380px) {\n  .navigation__menu {\n    width: 90% !important; }\n  .navigation__logo {\n    width: 4rem;\n    height: 4rem; }\n  .crypto_section__container {\n    display: none !important; }\n  .laptop_crypto {\n    display: block !important;\n    width: 100%; }\n    .laptop_crypto .img {\n      width: 2rem;\n      height: 100%; }\n    .laptop_crypto .laptop_bitcoin {\n      display: flex;\n      align-items: center;\n      position: relative;\n      cursor: pointer; }\n    .laptop_crypto .crypto_collapsed {\n      padding: 1rem 0rem 0rem 0rem;\n      display: none;\n      position: absolute;\n      left: -2.6rem;\n      top: 2.3rem; }\n      .laptop_crypto .crypto_collapsed__container {\n        background-color: #e6e6e6;\n        width: 8rem;\n        padding: -1rem;\n        padding: 0.8rem;\n        border-radius: 5px;\n        box-shadow: 0px 20px 70px -24px rgba(0, 0, 0, 0.2); }\n      .laptop_crypto .crypto_collapsed .eterium {\n        padding: 1rem 0rem 0rem 0rem; }\n      .laptop_crypto .crypto_collapsed .xrp {\n        padding: 1rem 0rem 0rem 0rem; }\n    .laptop_crypto .crypto_caret {\n      position: absolute;\n      transform: translate(-50%, -50%);\n      left: 120%;\n      top: 47%;\n      cursor: pointer; }\n  .crypto_flex {\n    margin-left: initial !important; } }\n\n@media only screen and (max-width: 990px) {\n  .logo_navigation__container {\n    width: 50% !important; }\n  .mobile_setup {\n    display: block !important; }\n  .sectionOne {\n    margin-top: 3rem !important; }\n  .hamburger {\n    display: block !important;\n    width: 4rem;\n    height: 100%; }\n    .hamburger svg {\n      width: 100%;\n      height: 100%;\n      cursor: pointer; }\n  .active-burger svg path {\n    stroke: red;\n    filter: drop-shadow(0px 0px 7px rgba(255, 0, 0, 0.8)); }\n  .navigation {\n    padding: 0 2.4vw; }\n  .navigation__shop {\n    display: none; }\n  .navigation__menu {\n    display: none; }\n  .svg_burger {\n    display: block !important;\n    cursor: pointer; }\n  .svg_burger_stroke path {\n    stroke: red; }\n  .navigation .btn-small-fill {\n    width: 15rem; }\n  .navigation .navigation__logo__property {\n    display: none; }\n  .navigation .logo_small {\n    display: block;\n    width: 4rem;\n    height: 100%; }\n  .dropdown-menu.dropdown-style4 li {\n    width: 100% !important; }\n  .new-opacity {\n    display: block !important; }\n  .dropdown_navigation_transform {\n    transform: translateY(66px) !important; }\n  .navigation__menu {\n    /* display: none; */\n    display: none;\n    position: absolute;\n    background: white;\n    width: 100vw !important;\n    left: 0;\n    transform: translateY(66px); }\n  .navigation {\n    padding: 0 0; }\n  .navigation__shop {\n    display: none; }\n  .navigation .logo_navigation__container {\n    flex-direction: column;\n    position: relative;\n    padding-left: 4.2vw; }\n  .navigation__logo {\n    justify-self: start;\n    align-self: start; }\n  .navigation__menu__list {\n    width: 100vw !important;\n    flex-direction: column;\n    text-align: center; }\n  .navigation .dropdown .dropdown-menu {\n    position: initial;\n    margin: 0 auto; }\n  .navigation__menu__list__items {\n    margin: 2vw 0; }\n  .navigation .dropdown-style4 {\n    width: 100vw; }\n  .navigation .dropdown .dropdown-menu {\n    left: 0; }\n  .navigation .dropdown-style4 {\n    width: 100vw; }\n  .navigation .dropdown .dropdown-menu li {\n    margin-top: 0.5rem; }\n  .paragraph-small {\n    font-size: calc(18px + (14 - 18) * ((100vw - 300px) / (1900 - 700))) !important; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/app/components/changeServiceFeatureType.js":
/*!********************************************************!*\
  !*** ./src/app/components/changeServiceFeatureType.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


// window.changePersonalOrCorporate = (checkmark) => {

//     let countries = `<option value="26"> Albania </option>
//     <option value="102"> Algeria </option>
//     <option value="27"> American Samoa </option>
//     <option value="162"> Andorra </option>
//     <option value="234"> Angola </option>
//     <option value="1"> Anguilla </option>
//     <option value="28"> Antarctica </option>
//     <option value="29"> Antigua and Barbuda </option>
//     <option value="30"> Argentina </option>
//     <option value="31"> Armenia </option>
//     <option value="32"> Aruba </option>
//     <option value="33"> Australia </option>
//     <option value="34"> Austria </option>
//     <option value="35"> Azerbaijan </option>
//     <option value="36"> Bahrain </option>
//     <option value="235"> Bangladesh </option>
//     <option value="13"> Barbados </option>
//     <option value="37"> Belarus </option>
//     <option value="38"> Belgium </option>
//     <option value="3"> Belize </option>
//     <option value="161"> Benin </option>
//     <option value="39"> Bermuda </option>
//     <option value="40"> Bhutan </option>
//     <option value="41"> Bolivia </option>
//     <option value="42"> Bosnia and Herzegovina </option>
//     <option value="163"> Botswana </option>
//     <option value="43"> Brazil </option>
//     <option value="4"> British Virgin Islands </option>
//     <option value="5"> Brunei </option>
//     <option value="44"> Bulgaria </option>
//     <option value="164"> Burkina Faso </option>
//     <option value="166"> Burundi </option>
//     <option value="45"> Cambodia </option>
//     <option value="167"> Cameroon </option>
//     <option value="46"> Canada </option>
//     <option value="168"> Cape Verde </option>
//     <option value="14"> Cayman Islands </option>
//     <option value="169"> Central African Republic </option>
//     <option value="170"> Chad </option>
//     <option value="47"> Chile </option>
//     <option value="48"> China </option>
//     <option value="49"> Christmas Island </option>
//     <option value="50"> Cocos (Keeling) Islands </option>
//     <option value="51"> Colombia </option>
//     <option value="171"> Comoros </option>
//     <option value="52"> Cook Islands </option>
//     <option value="53"> Costa Rica </option>
//     <option value="54"> Cote d'Ivoire </option>
//     <option value="55"> Croatia </option>
//     <option value="56"> Cuba </option>
//     <option value="174"> Curacao </option>
//     <option value="15"> Cyprus </option>
//     <option value="57"> Czech Republic </option>
//     <option value="6"> Delaware (United States of America) </option>
//     <option value="172"> Democratic Republic of the Congo </option>
//     <option value="58"> Denmark </option>
//     <option value="59"> Djibouti </option>
//     <option value="7"> Dominica </option>
//     <option value="60"> Dominican Republic </option>
//     <option value="61"> East Timor </option>
//     <option value="62"> Ecuador </option>
//     <option value="175"> Egypt </option>
//     <option value="63"> El Salvador </option>
//     <option value="176"> Equatorial Guinea </option>
//     <option value="177"> Eritrea </option>
//     <option value="64"> Estonia </option>
//     <option value="178"> Ethiopia </option>
//     <option value="65"> Falkland Islands </option>
//     <option value="66"> Faroe Islands </option>
//     <option value="106"> Federated States of Micronesia </option>
//     <option value="67"> Fiji </option>
//     <option value="68"> Finland </option>
//     <option value="69"> France </option>
//     <option value="236"> French Guiana </option>
//     <option value="237"> French Polynesia </option>
//     <option value="70"> French Southern Territories </option>
//     <option value="179"> Gabon </option>
//     <option value="180"> Gambia </option>
//     <option value="71"> Georgia </option>
//     <option value="72"> Germany </option>
//     <option value="181"> Ghana </option>
//     <option value="16"> Gibraltar </option>
//     <option value="74"> Greece </option>
//     <option value="75"> Greenland </option>
//     <option value="76"> Grenada </option>
//     <option value="77"> Guadeloupe </option>
//     <option value="78"> Guam </option>
//     <option value="79"> Guatemala </option>
//     <option value="182"> Guinea </option>
//     <option value="183"> Guinea-Bissau </option>
//     <option value="73"> Guyana </option>
//     <option value="80"> Haiti </option>
//     <option value="81"> Heard Island and Mcdonald Islands </option>
//     <option value="82"> Honduras </option>
//     <option value="17"> Hong Kong </option>
//     <option value="83"> Hungary </option>
//     <option value="84"> Iceland </option>
//     <option value="85"> India </option>
//     <option value="86"> Indonesia </option>
//     <option value="185"> Iran </option>
//     <option value="186"> Iraq </option>
//     <option value="87"> Ireland </option>
//     <option value="88"> Israel </option>
//     <option value="89"> Italy </option>
//     <option value="187"> Jamaica </option>
//     <option value="90"> Japan </option>
//     <option value="245"> Jersey </option>
//     <option value="188"> Jordan </option>
//     <option value="189"> Kazakhstan </option>
//     <option value="190"> Kenya </option>
//     <option value="191"> Kiribati </option>
//     <option value="91"> Korea, North </option>
//     <option value="192"> Kosovo </option>
//     <option value="193"> Kuwait </option>
//     <option value="93"> Kyrgyzstan </option>
//     <option value="18"> Labuan, Malaysia </option>
//     <option value="94"> Laos </option>
//     <option value="95"> Latvia </option>
//     <option value="194"> Lebanon </option>
//     <option value="195"> Lesotho </option>
//     <option value="196"> Liberia </option>
//     <option value="197"> Libya </option>
//     <option value="96"> Liechtenstein </option>
//     <option value="97"> Lithuania </option>
//     <option value="98"> Luxembourg </option>
//     <option value="99"> Macau </option>
//     <option value="100"> Macedonia </option>
//     <option value="198"> Madagascar </option>
//     <option value="199"> Malawi </option>
//     <option value="101"> Malaysia </option>
//     <option value="103"> Maldives </option>
//     <option value="104"> Mali </option>
//     <option value="19"> Malta </option>
//     <option value="8"> Marshall Islands </option>
//     <option value="200"> Mauritania </option>
//     <option value="20"> Mauritius </option>
//     <option value="241"> Mayotte </option>
//     <option value="105"> Mexico </option>
//     <option value="107"> Moldova </option>
//     <option value="201"> Monaco </option>
//     <option value="108"> Mongolia </option>
//     <option value="242"> Montenegro </option>
//     <option value="109"> Montserrat </option>
//     <option value="202"> Morocco </option>
//     <option value="203"> Mozambique </option>
//     <option value="110"> Myanmar </option>
//     <option value="204"> Namibia </option>
//     <option value="111"> Nauru </option>
//     <option value="112"> Nepal </option>
//     <option value="21"> Netherlands </option>
//     <option value="113"> Netherlands Antilles </option>
//     <option value="114"> New Caledonia </option>
//     <option value="115"> New Zealand </option>
//     <option value="116"> Nicaragua </option>
//     <option value="205"> Niger </option>
//     <option value="243"> Nigeria </option>
//     <option value="240"> Niue </option>
//     <option value="117"> Norfolk Island </option>
//     <option value="118"> Northern Mariana Islands </option>
//     <option value="119"> Norway </option>
//     <option value="206"> Oman </option>
//     <option value="207"> Pakistan </option>
//     <option value="120"> Palau </option>
//     <option value="208"> Palestinian Territories </option>
//     <option value="22"> Panama </option>
//     <option value="121"> Papua New Guinea </option>
//     <option value="122"> Paraguay </option>
//     <option value="123"> Peru </option>
//     <option value="124"> Philippines </option>
//     <option value="125"> Pitcairn Islands </option>
//     <option value="126"> Poland </option>
//     <option value="127"> Portugal </option>
//     <option value="128"> Puerto Rico (U.S. territory) </option>
//     <option value="209"> Qatar </option>
//     <option value="173"> Republic of the Congo </option>
//     <option value="129"> Réunion </option>
//     <option value="130"> Romania </option>
//     <option value="131"> Russia </option>
//     <option value="210"> Rwanda </option>
//     <option value="132"> Saint Helena </option>
//     <option value="133"> Saint Kitts and Nevis </option>
//     <option value="134"> Saint Lucia </option>
//     <option value="135"> Saint Pierre and Miquelon </option>
//     <option value="11"> Saint Vincent and the Grenadines </option>
//     <option value="9"> Samoa </option>
//     <option value="137"> San Marino </option>
//     <option value="211"> Sao Tome and Principe </option>
//     <option value="212"> Saudi Arabia </option>
//     <option value="213"> Senegal </option>
//     <option value="138"> Serbia </option>
//     <option value="10"> Seychelles </option>
//     <option value="214"> Sierra Leone </option>
//     <option value="23"> Singapore </option>
//     <option value="215"> Sint Maarten </option>
//     <option value="139"> Slovakia </option>
//     <option value="140"> Slovenia </option>
//     <option value="141"> Solomon Islands </option>
//     <option value="216"> Somalia </option>
//     <option value="142"> South Africa </option>
//     <option value="143"> South Georgia and the South Sandwich Islands </option>
//     <option value="92"> South Korea </option>
//     <option value="217"> South Sudan </option>
//     <option value="144"> Spain </option>
//     <option value="218"> Sri Lanka </option>
//     <option value="219"> Sudan </option>
//     <option value="145"> Suriname </option>
//     <option value="220"> Swaziland </option>
//     <option value="146"> Sweden </option>
//     <option value="147"> Switzerland </option>
//     <option value="221"> Syria </option>
//     <option value="148"> Taiwan </option>
//     <option value="222"> Tajikistan </option>
//     <option value="223"> Tanzania </option>
//     <option value="149"> Thailand </option>
//     <option value="2"> The Bahamas </option>
//     <option value="224"> Togo </option>
//     <option value="150"> Tonga </option>
//     <option value="151"> Trinidad and Tobago </option>
//     <option value="225"> Tunisia </option>
//     <option value="226"> Turkey </option>
//     <option value="227"> Turkmenistan </option>
//     <option value="152"> Turks and Caicos Islands </option>
//     <option value="153"> Tuvalu </option>
//     <option value="154"> U.S. Virgin Islands </option>
//     <option value="228"> Uganda </option>
//     <option value="155"> Ukraine </option>
//     <option value="12"> United Arab Emirates (UAE) </option>
//     <option value="24"> United Kingdom </option>
//     <option value="246"> United States of America </option>
//     <option value="156"> Uruguay </option>
//     <option value="230"> Uzbekistan </option>
//     <option value="157"> Vanuatu </option>
//     <option value="158"> Vatican City </option>
//     <option value="159"> Venezuela </option>
//     <option value="160"> Vietnam </option>
//     <option value="238"> Wallis and Futuna Islands </option>
//     <option value="239"> Western Sahara </option>
//     <option value="231"> Yemen </option>
//     <option value="232"> Zambia </option>
//     <option value="233"> Zimbabwe </option>`

//     let container = checkmark.parentElement.parentElement.parentElement.parentElement
//     let inputContainer = container.querySelector('.service_feature_inputs_container');
//     inputContainer.innerHTML = ""



//     let shares
//     for (let i = 0; i <= 100; i++) {
//         shares += `<option value="${i}" selected="">${i}</option>`
//     }

    
//     if (container.querySelector('select[name="amount-of-shares"]')) {
//         localStorage.setItem('shares', 100);
//         isShareHolder = `<label for="share-Personal-shareholder-0">Percentage (%) of
//                             the
//                             shares will own <span class="pt-popover" data-toggle="popover"
//                                 data-placement="right"
//                                 data-original-title="Percentage (%) of the shares will own"><strong>[ ? ]</strong> </span> </label>
                            
//                             <select name="amount-of-shares" onchange="changeShare(this)" data-id="0" class="form-control" name="shareholder[0][Personal][share]" id="share-Personal-shareholder-0">
//                             <option value="">Please select</option>
//                             ${shares}
//                         </select>`

//     } else {
//         isShareHolder = "";
//     }

//     if (checkmark.value == 1) {
//         inputContainer.innerHTML = `
//                                    <div class="group-form-group" data-service-feature-id="${featureIdsAndQuantityArray[i].id}" >
//                     <div class="form-group">
//                         <label style="margin-top: 4rem;"  >${servicefeatureNamesArray[i]} ${j + 1}</label>
//                         <div class="radio flex_radio" style="padding:0; margin: 0.5rem 0">

//                             <form name="service_feature_type">
//                                 <input onclick="changePersonalOrCorporate(this)" type="radio" name="choice"value="1" checked>
//                                 <label class="radio-inline" style="margin-right: 3rem; width: initial"> Personal </label>
//                                 <input onclick="changePersonalOrCorporate(this)" type="radio" name="choice"value="2">
//                                 <label class="radio-inline" style="margin-right: 3rem; width: initial"> Body Corporate </label>
//                             </form>
 
//                         </div>
//                     </div>
//                     <div  style="display: block;" class="service_feature_inputs_container">
//                         <div class="form-group"> <label for="name-Personal-director-0" style="margin-bottom:0">Full Name</label>
//                         <input name="service-feature-name" type="text" maxlength="255" class="form-control" placeholder="Type full name" name="director[0][Personal][name]"   data-id="0" value=""> </div>
//                         <div class="form-group"> <label for="country-Personal-director-0">Nationality</label>
//                             <select class="form-control" data-id="0" name="service-feature-country]" >
//                                ${countries}
//                             </select> </div>
//                         <div class="form-group"> 
//                             <label >Passport Number </label> 
//                             <input name="service-feature-id-number" type="text" maxlength="255" class="form-control" placeholder="Type passport number" data-id="0" value="">
//                         </div>
//                         ${isShareHolder}
//                     </div>
                    
//                 </div>`;

//     }

//     if (checkmark.value == 2) {
//         inputContainer.innerHTML = `
//                                          <div  style="display: block;" class="service_feature_inputs_container">
//                                             <div class="form-group"> <label for="name-Personal-director-0" style="margin-bottom:0">Full Name</label>
//                                             <input name="service-feature-name" type="text" maxlength="255" class="form-control" placeholder="Type full name" name="director[0][Personal][name]"   data-id="0" value=""> </div>
//                                             <div class="form-group"> <label for="country-Personal-director-0">Nationality</label>
//                                                 <select class="form-control" data-id="0" name="director[0][Personal][country_id]" >
//                                                    ${countries}
//                                                 </select> </div>
//                                                 <div class="form-group"> 
//                                                 <label >Passport Number </label> 
//                                                 <input name="service-feature-id-number" type="text" maxlength="255" class="form-control" placeholder="Type passport number" data-id="0" value="">
//                                             </div>
//                                             ${isShareHolder}
//                                         </div>
//                                             <!-- <div class="form-group"> <label >Taxpayer Identification Numbers
//                                                     Number</label> <input type="text" maxlength="255" class="form-control" placeholder="Type passport number" name="director[0][Personal][passport]"data-id="0" value=""> </div>
//                                         </div> -->
//                                     </div>`;
//     }


// }

/***/ }),

/***/ "./src/app/components/changeShares.js":
/*!********************************************!*\
  !*** ./src/app/components/changeShares.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.changeShare = (shareSelect) =>{
    let totalShare = +localStorage.getItem('shares')
    let sharesSlectElement = document.querySelectorAll('select[name="amount-of-shares"]');


    

    let otherElements = [...sharesSlectElement].filter(el => el != shareSelect)

    console.log(otherElements)

    let eachShareAmount = Math.floor((totalShare - shareSelect.value) /  otherElements.length)
 
     for (let i = 0; i < otherElements.length; i++) {
        otherElements[i].value = eachShareAmount
    }

    
}

 

/***/ }),

/***/ "./src/app/components/form-interaction.js":
/*!************************************************!*\
  !*** ./src/app/components/form-interaction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


window.checkboxCheck = () => {
  let Allselected = document.querySelectorAll(".selected");
  let Allcheckmark = document.querySelectorAll(".checkmark");
  let collapseGroupes = document.querySelectorAll('.collapsible-group')

  // const collapse = document.querySelector(".collapse-none");
  if (Allselected || Allcheckmark || collapseGroupes) {

    Allcheckmark.forEach(checkbox => {
      checkbox.addEventListener("click", e => {
        let clickedElementcheckbox = e.target;
        clickedElementcheckbox.classList.toggle("new-checkmark");
        let aditidionColapse = clickedElementcheckbox.parentElement.nextElementSibling;
      });
    });
  } else {
    console.log("Element does not exist");
  }
}

///! PROFILE-PAGE DROPDOWN

const has_sub = document.querySelector(".has-sub");
const sub_item_closed = document.querySelector(".sub-item-closed");
if (has_sub) {
  has_sub.addEventListener("click", () => {
    sub_item_closed.classList.toggle("sub-item-opened");
  });
}

///! MY-PROFILE FROM CHANGE

const pencil = document.querySelector(".edit-c");
const person_edit = document.querySelector(".person-edit");
const person_info = document.querySelector(".person-info");

if (pencil) {
  pencil.addEventListener("click", () => {
    pencil.classList.toggle("close");
    person_edit.classList.toggle("display-block");
    person_info.classList.toggle("display-none");
    console.log("clicked");
  });
}





///! change bigcheckbox to checked
window.checkBigCheckboxOpenCollapsed = (checkBoxElement) => {

  let mustCollapse = checkBoxElement.parentElement.parentElement.parentElement.querySelector('div[name="collapsible-group-collapsed-element"]');
  console.log(mustCollapse)

  if (mustCollapse.classList.contains('collapse')) {
    mustCollapse.classList.remove('collapse')
  } else {
    mustCollapse.classList.add('collapse')
  }


  if (checkBoxElement.classList.contains('new-check-box')) {
    console.log("remove")
    checkBoxElement.classList.remove('new-check-box')
  } else {
    checkBoxElement.classList.add('new-check-box')
  }
}





// get the checkmark site price and add to the local storage site price
window.addRecommendedSitePrice = (checkBox) =>{
  let curendSitePrice = +localStorage.getItem('site-price');


  let mainServicePrice = document.querySelector('select[name="services"]').selectedOptions[0].dataset.siteprice;
  let openBankPrice = document.querySelector('select[name="bank-name"]').selectedOptions[0].dataset.siteprice;

  // if ( document.querySelector('select[name="services"]')) {
    
  // }

  let checkboxPrice = +checkBox.dataset.recomendedServicesPrice

  if (checkBox.classList.contains('new-checkmark')) {
    let sum = curendSitePrice - checkboxPrice;
    localStorage.setItem('site-price', sum)    
  }else{
    let sum = curendSitePrice + checkboxPrice;
    localStorage.setItem('site-price', sum)
  }

  changePrice()

  console.log(localStorage.getItem('site-price'));
  

}

/***/ }),

/***/ "./src/app/components/navigation.js":
/*!******************************************!*\
  !*** ./src/app/components/navigation.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getDiffElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getDiffElements */ "./src/app/utils/getDiffElements.js");


/**
 *
 *     ? MOBILE burger click
 *
 *
 */

let burger = document.querySelector(".svg_burger");
const navigation__menu = document.querySelector(".navigation__menu");
const body = document.body;

window.burger = () => {
  navigation__menu.classList.toggle("new-opacity");
  //   body.classList.toggle("body--modal-open");
  // mobile_setup.classList.toggle("remove-setup-btn");

  console.log("nav clicked");
  burger.classList.toggle("svg_burger_stroke");
};

///// CRYPTO SECTION
const crypto_section = document.querySelector(".first_click");
const crypto_collapsed = document.querySelector(".crypto_collapsed");

window.cryptoClicked = () => {
  crypto_collapsed.classList.toggle("display-block");

  console.log("clicked crypro");
};

/**
 *
 *     ? MOBILE DROPDOWN
 *
 *
 */

const nav_items = document.querySelectorAll(".navigation__menu__list__items");
const dropdowns = document.querySelectorAll(".dropdown");

nav_items.forEach(item => {
  item.addEventListener("click", e => {
    let clickedElementCaret = item;
    let caret = clickedElementCaret.querySelector(".caret");
    caret.classList.toggle("caret-up");
    let dropdown = clickedElementCaret.querySelector(".dropdown");
    dropdown.classList.toggle("dropdown_open");
    navigation__menu.classList.toggle("dropdown_navigation_transform");

    let differendDropdownEl = Object(_utils_getDiffElements__WEBPACK_IMPORTED_MODULE_0__["getDifferentElementsArray"])(dropdowns, dropdown);
    Object(_utils_getDiffElements__WEBPACK_IMPORTED_MODULE_0__["removeClasses"])(differendDropdownEl, "dropdown_open");

    console.log("blxkfdg");
  });
});

/**
 *
 *     ? FOR-NAVBAR
 *
 *
 */

const body_width = document.body.clientWidth;

const sectionOne = document.querySelector(".sectionOne");
const navigation = document.querySelector(".navigation");

const NavOptions = {
  root: null,
  rootMargin: "800px 0px 0px 0px",
  threshold: 0
};

const Navobserver = new IntersectionObserver((entries, Navobserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navigation.classList.remove("observer-nav");
    } else {
      navigation.classList.add("observer-nav");
    }
    console.log(entry.target);
  });
}, NavOptions);
Navobserver.observe(sectionOne);

////// ====================
////      ============== MOBILE AFTER CLICKN ON BURGER INSIDE DROPDOWN
// const items = document.querySelectorAll(".items");

// items.forEach(item => {
//   item.addEventListener("click", e => {
//     let clickedElementCaret = item;

//     let caret = clickedElementCaret.querySelector(".caret");
//     caret.classList.toggle("caret-up");
//     let dropdown = clickedElementCaret.querySelector(".dropdown");

//     dropdown.classList.toggle("dropdown_open");
//     let differendDropdownEl = getDifferentElementsArray(dropdowns, dropdown);
//     removeClasses(differendDropdownEl, "dropdown_open");

//     console.log("ghfjhghjghj");
//   });
// });


/***/ }),

/***/ "./src/app/components/selectElements.js":
/*!**********************************************!*\
  !*** ./src/app/components/selectElements.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.storePreviusValue = (selectElement) =>{
    localStorage.setItem('previusSelectValue', selectElement.selectedOptions[0].dataset.siteprice)
}

/***/ }),

/***/ "./src/app/components/service-inputs.js":
/*!**********************************************!*\
  !*** ./src/app/components/service-inputs.js ***!
  \**********************************************/
/*! exports provided: serviceInputsElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceInputsElements", function() { return serviceInputsElements; });
/* harmony import */ var _fetch_api_POST_service_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch api/POST/service-setup */ "./src/app/fetch api/POST/service-setup.js");
/* harmony import */ var _fetch_api_GET_openBank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch api/GET/openBank */ "./src/app/fetch api/GET/openBank.js");



let serviceInputsElements = {
    //! services, jurisdictions and 
    typeOfService: document.querySelector("select[name=service-type]"),
    optionCountry: document.querySelector("select[name=jurisdictions]"),
    typeOfInc: document.querySelector("select[name=type_of_inc]"),


}



if (serviceInputsElements.typeOfService) {
    serviceInputsElements.typeOfService.addEventListener("change", e => {
        let service_id = e.target.value.toString();
        let elementClassToAppendTo = e.target.name.toString();
        let optionName = e.target.selectedOptions[0].innerText.trim("")

        let serviceCaption = e.target.options[e.target.selectedIndex].dataset.servicecaption
        console.log(serviceCaption)
        // localStorage.setItem("service_caption", "");
        localStorage.setItem("service_caption", serviceCaption);

        Object(_fetch_api_POST_service_setup__WEBPACK_IMPORTED_MODULE_0__["postServiceGroupId"])(service_id, `.setup-service`, optionName)
    })
}






/***/ }),

/***/ "./src/app/config/apiToken.js":
/*!************************************!*\
  !*** ./src/app/config/apiToken.js ***!
  \************************************/
/*! exports provided: APIKEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIKEY", function() { return APIKEY; });
const APIKEY = "IhyxVlGkIj0Q7LP91Hf6"

/***/ }),

/***/ "./src/app/fetch api/GET/getUserData.js":
/*!**********************************************!*\
  !*** ./src/app/fetch api/GET/getUserData.js ***!
  \**********************************************/
/*! exports provided: getUserData, getUserOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserOrders", function() { return getUserOrders; });
/* harmony import */ var _library_RReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/RReact */ "./src/app/library/RReact.js");


let baseUrl = "http://91.212.213.29/~goldenga/DK_PHP";



const getUserData = _ => {
    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/DB_exec.php`, "POST", {
        SN: "Get_User_Data"
    }).then(userArray => {
        let name = document.querySelectorAll(' [name = "profile_name"]')
        let id = document.querySelectorAll(' [name = "profile_id"]')
        let email = document.querySelectorAll(' [name = "profile_email"]')
        let number = document.querySelectorAll(' [name = "profile_number"]')
        let shipping_address = document.querySelectorAll(' [name = "profile_shipping_address"]')

        let userData = userArray[0]

        name.forEach(nameEl => nameEl.tagName.toLowerCase() == "input" ? nameEl.value = userData.Full_name : nameEl.innerHTML = userData.Full_name)
        id.forEach(idEl => idEl.tagName.toLowerCase() == "input" ? idEl.value = "" : idEl.innerHTML = "")
        email.forEach(emailEl => emailEl.tagName.toLowerCase() == "input" ? emailEl.value = userData.username : emailEl.innerHTML = userData.username)
        number.forEach(numberEl => numberEl.tagName.toLowerCase() == "input" ? numberEl.value = userData.Phone_Number : numberEl.innerHTML = userData.Phone_Number)
        shipping_address.forEach(shipping_addressEl => shipping_addressEl.tagName.toLowerCase() == "input" ? shipping_addressEl.value =  "": shipping_addressEl.innerHTML = "")
    })
}


const getUserOrders = _ => {
    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/User_Report.php`, "GET").then(userOrders => {
        console.log(userOrders)

        let serviceNames = "";


        userOrders.forEach(order => {

            // order.Order_Details.forEach((service, i) =>{
            //     serviceNames += i == 0 ? `${service.Service_Name}` : `| ${service.Service_Name}` ;
            // })
        })

        console.log(serviceNames)

        userOrders.forEach((order, i) => {



            if (order.Order_Details.length > 0) {
                _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].appendCreatedElementToELement(
                    '.accordion',

                    `<li>
                        <input type="checkbox" checked>
                        <i></i>



                            <h2>${order.Order_Details.map(
                            (service) =>
                                `${service.Service_Name}<b style="font-weight: bold;"> (price: ${service.Service_Price_Site})</b> | <br>`
                        ).join("")}</h2>



                            <p style="margin-bottom: 2vw"
                            >${order.Order_Details[0].Order_Feature == undefined ? null : order.Order_Details[0].Order_Feature.map(
                            (serviceFeature) =>
                                `<span style="font-size: 2.3w; font-weight: bold; color: black; display: block; margin-top: 3vw">${serviceFeature.Service_Feature_Name}</span> 
                                <span style="display: block">Name: <b style="font-weight: bold"> ${serviceFeature.order_feature_detail[0] == undefined ? "not specified" :  serviceFeature.order_feature_detail[0].Full_Name}</b></span> 
                                <span style="display: block">Value: <b style="font-weight: bold"> ${serviceFeature.order_feature_detail[0] == undefined ? "not specified" :  serviceFeature.order_feature_detail[0].Value}</b></span> 
                                <span style="display: block">ID number: <b style="font-weight: bold"> ${serviceFeature.order_feature_detail[0] == undefined ? "not specified" :  serviceFeature.order_feature_detail[0].Identification_Number}</b></span> 
                                
                                `
                        ).join("")}</p>

                        <p style="margin-bottom: 2vw; border-top: 1px solid gray"
                        >${order.Order_Details[1].Order_Feature == undefined ? null : order.Order_Details[1].Order_Feature.map(
                        (serviceFeature) =>
                            `<span style="font-size: 2.3w; font-weight: bold; color: black; display: block; margin-top: 3vw">${serviceFeature.Service_Feature_Name}</span> 
                            <span style="display: block">Name: <b style="font-weight: bold"> ${serviceFeature.order_feature_detail[1] == undefined ? "not specified" :  serviceFeature.order_feature_detail[1].Full_Name}</b></span> 
                            <span style="display: block">Price: <b style="font-weight: bold"> ${serviceFeature.order_feature_detail[1] == undefined ? "not specified" :  serviceFeature.order_feature_detail[1].Service_Feature_Price_Site}</b></span> 
                            
                            `
                    ).join("")}</p>
                    </li>`
                )
            }

        });
    })
}


/***/ }),

/***/ "./src/app/fetch api/GET/openBank.js":
/*!*******************************************!*\
  !*** ./src/app/fetch api/GET/openBank.js ***!
  \*******************************************/
/*! exports provided: getBankCountries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBankCountries", function() { return getBankCountries; });
/* harmony import */ var _library_RReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/RReact */ "./src/app/library/RReact.js");
/* harmony import */ var _components_service_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/service-inputs */ "./src/app/components/service-inputs.js");



let baseUrl = "http://91.212.213.29/~goldenga/DK_PHP";



const getBankCountries = _ => {
    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/DB_exec.php`, "POST", {
        SN: "get_bank_countries"
    }).then(bacnkCountries => {
        console.log(bacnkCountries)
        bacnkCountries.forEach(bank => {
            _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].appendCreatedElementToELement(
                'select[name="bank-country-on-checkbox"]',

                `<option 
                    value="${bank.ID_Bank_Country}">
                            ${bank.Bank_Country_Name}
                </option>`
            )
        });
    })
}
 

/***/ }),

/***/ "./src/app/fetch api/GET/serviceDetails.js":
/*!*************************************************!*\
  !*** ./src/app/fetch api/GET/serviceDetails.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_RReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/RReact */ "./src/app/library/RReact.js");
/* harmony import */ var _utils_deleteElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/deleteElements */ "./src/app/utils/deleteElements.js");
/* harmony import */ var _utils_deleteElements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_deleteElements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/form-interaction */ "./src/app/components/form-interaction.js");
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_form_interaction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_changeServiceFeatureType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/changeServiceFeatureType */ "./src/app/components/changeServiceFeatureType.js");
/* harmony import */ var _components_changeServiceFeatureType__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_changeServiceFeatureType__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_changeShares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/changeShares */ "./src/app/components/changeShares.js");
/* harmony import */ var _components_changeShares__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_changeShares__WEBPACK_IMPORTED_MODULE_4__);









let baseUrl = "http://91.212.213.29/~goldenga/DK_PHP";






window.getServiceFeatures = () => {



    if (localStorage.getItem('service_feature_names_array') && localStorage.getItem('feature_ids_and_quantity')) {
        let servicefeatureNamesArray = localStorage.getItem('service_feature_names_array').split(',')
        let featureIdsAndQuantityArray_withString = JSON.parse(localStorage.getItem('feature_ids_and_quantity'));


        let featureIdsAndQuantityArray = []
        let allFeaturesTemplate;
        let siglePlaceholderTemplate;
        let isShareHolder;
        let shares;


        featureIdsAndQuantityArray_withString.forEach(obj => {
            obj.id = +obj.id
            obj.quantity = +obj.quantity
            featureIdsAndQuantityArray.push(obj)
        })


        let singleFeatureBlockTemplate;











        featureIdsAndQuantityArray.forEach(featureObj => {
            for (let i = 0; i < featureObj.quantity; i++) {
                allFeaturesTemplate += singleFeatureBlockTemplate;
            }
        })


        for (let i = 0; i <= 100; i++) {
            shares += `<option value="${i}" selected="">${i}</option>`
        }







        for (let i = 0; i < featureIdsAndQuantityArray.length; i++) {

            let countries;







          
            for (let j = 0; j < featureIdsAndQuantityArray[i].quantity; j++) {




                _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/DB_exec.php`, "POST", {
                    SN: "All_Country"
                }).then((allCountry) => {
                    allCountry.forEach(country => {
                        countries = countries + `<option value="${country.ID_Country}"> ${country.Country_Name} </option>`;
                    });
                }).then(_ => {

                    if (servicefeatureNamesArray[i].toLowerCase() == "shareholder" ||
                        servicefeatureNamesArray[i].toLowerCase() == "holders" ||
                        servicefeatureNamesArray[i].toLowerCase() == "holder" ||
                        servicefeatureNamesArray[i].toLowerCase() == "shareholders" ||
                        servicefeatureNamesArray[i].toLowerCase() == "shareholder(s)") {


                        localStorage.setItem('shares', 100);


                        isShareHolder = `<label for="share-Personal-shareholder-0">Percentage (%) of
                                        the
                                        shares will own <span class="pt-popover" data-toggle="popover"
                                            data-placement="right"
                                            data-original-title="Percentage (%) of the shares will own"><strong>[ ? ]</strong> </span> </label>
                                        
                                    <select name="amount-of-shares" onchange="changeShare(this)" data-id="0" class="form-control" name="shareholder[0][Personal][share]" id="share-Personal-shareholder-0">
                                        <option value="">Please select</option>
                                        ${shares}
                                    </select>`
                    } else {
                        isShareHolder = "";
                    }



                    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].appendCreatedElementToELement(
                        '.form-setup',

                        /*javascript*/`
                        <div class="group-form-group" data-servicefeatureid="${featureIdsAndQuantityArray[i].id}" >
                        <div class="form-group">
                            <label style="margin-top: 4rem;"  >${servicefeatureNamesArray[i]} ${j + 1}</label>
                            <div class="radio flex_radio" style="padding:0; margin: 0.5rem 0">
    
                              
     
                            </div>
                        </div>
                        <div  style="display: block;" class="service_feature_inputs_container">
                            <div class="form-group"> <label for="name-Personal-director-0" style="margin-bottom:0">Full Name</label>
                            <input name="service-feature-name" type="text" maxlength="255" class="form-control" placeholder="Type full name" name="director[0][Personal][name]"   data-id="0" value=""> </div>
                            <div class="form-group"> <label for="country-Personal-director-0">Nationality</label>
                                <select class="form-control" data-id="0" name="service-feature-country" >
                                   ${countries}
                                </select> </div>
                            <div class="form-group"> 
                                <label >Passport Number </label> 
                                <input name="service-feature-id-number" type="text" maxlength="255" class="form-control" placeholder="Type passport number" data-id="0" value="">
                            </div>
                            ${isShareHolder}
                        </div>
                        
                    </div>`)


                    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].appendCreatedElementToELement(
                        '.form-setup',
                        `<hr style="margin: 4rem auto; height:1rem;border:none;color:#F7B900;background-color:#F7B900;">`
        
                    )
                })



            };
        }


    }


}

// ${serviceGroups
//     .map(
//         (jurisdiction) =>
//             `<option 
//                     value="${jurisdiction.ID_Country}" 
//                     data-serviceGroupId='${jurisdiction.ID_Service_Group}'>
//                     ${jurisdiction.Country_Name}
//                 </option>`
//     )
//     .join("")
// }


    
// {
//     "service_id": 9,
//     "recommend_services": {
//       "open_bank": {
//         "bank_id": "7"
//       },
//       "ID_Service_Feature": [
//         7
//       ]
//     },
//     "company_name": {
//       "mame": "asdf",
//       "suffix_id": "1"
//     },
//     "features_information": [
//       {
//         "id": "10",
//         "name": "asdf",
//         "country_id": "15",
//         "identity_number": "1234",
//         "percentage": -1
//       },
//       {
//         "id": "11",
//         "name": "23423",
//         "country_id": "10",
//         "identity_number": "asdf"
//       }
//     ],
//     "contact_details": {
//       "full_name": "vigaca vigacashvili",
//       "email": "vigaca.vigacashvili@gmail.com",
//       "phone_number": "592645454",
//       "special_request": "racxa rucxebi minda"
//     },
//     "user_id": 1,
//     "finished": true,
//     "site_price": 1598
//   }

/***/ }),

/***/ "./src/app/fetch api/GET/services.js":
/*!*******************************************!*\
  !*** ./src/app/fetch api/GET/services.js ***!
  \*******************************************/
/*! exports provided: getServiceGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceGroups", function() { return getServiceGroups; });
/* harmony import */ var _library_RReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/RReact */ "./src/app/library/RReact.js");



let baseUrl = "http://91.212.213.29/~goldenga/DK_PHP"
 
const getServiceGroups = () => {
    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/DB_exec.php`, "POST", {
        SN: "Service_Group",
        ID: 0
    }).then(services => {
        
        services.forEach(service => {
            _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].appendCreatedElementToELement("select[name=service-type]",
                `<option value="${service.ID_Service_Group}"
                         data-servicecaption="${service.Front_Caption}">
                            ${service.Service_Group_Name}
                </option>`
            )
        })
    }
    );
};


/***/ }),

/***/ "./src/app/fetch api/GET/sitePrice.js":
/*!********************************************!*\
  !*** ./src/app/fetch api/GET/sitePrice.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_RReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/RReact */ "./src/app/library/RReact.js");
/* harmony import */ var _utils_deleteElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/deleteElements */ "./src/app/utils/deleteElements.js");
/* harmony import */ var _utils_deleteElements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_deleteElements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/form-interaction */ "./src/app/components/form-interaction.js");
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_form_interaction__WEBPACK_IMPORTED_MODULE_2__);





let baseUrl = "http://91.212.213.29/~goldenga/DK_PHP";




window.getServicePrice = (serviceId) => {
    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/DB_exec.php`, "POST", {
        SN: "Service_price",
        service_id: serviceId
    }).then(price => {
        return price;
    })
}

/***/ }),

/***/ "./src/app/fetch api/POST/loginUser.js":
/*!*********************************************!*\
  !*** ./src/app/fetch api/POST/loginUser.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_RReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/RReact */ "./src/app/library/RReact.js");
/* harmony import */ var _utils_deleteElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/deleteElements */ "./src/app/utils/deleteElements.js");
/* harmony import */ var _utils_deleteElements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_deleteElements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/form-interaction */ "./src/app/components/form-interaction.js");
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_form_interaction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getLoginAndRegisterData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/getLoginAndRegisterData */ "./src/app/utils/getLoginAndRegisterData.js");
/* harmony import */ var _utils_getLoginAndRegisterData__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_getLoginAndRegisterData__WEBPACK_IMPORTED_MODULE_3__);






let baseUrl = "http://91.212.213.29/~goldenga/DK_PHP";



window.postUserLogin = () => {
    let userObject = getLoginData();


    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/Log_On.php`, "POST", {
        "User_Name": userObject.email,
        "Password": userObject.password
    }).then(id => {
        console.log(id)
    })

}

/***/ }),

/***/ "./src/app/fetch api/POST/openBank.js":
/*!********************************************!*\
  !*** ./src/app/fetch api/POST/openBank.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_RReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/RReact */ "./src/app/library/RReact.js");
/* harmony import */ var _components_service_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/service-inputs */ "./src/app/components/service-inputs.js");
/* harmony import */ var _utils_deleteElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/deleteElements */ "./src/app/utils/deleteElements.js");
/* harmony import */ var _utils_deleteElements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_deleteElements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/form-interaction */ "./src/app/components/form-interaction.js");
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_form_interaction__WEBPACK_IMPORTED_MODULE_3__);







let baseUrl = "http://91.212.213.29/~goldenga/DK_PHP";





window.postBankCountry = selectElement => {
    let ID_Country = selectElement.value;


    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/DB_exec.php`, "POST", {
        SN: "post_bank_country_id",
        ID_Country: ID_Country
    }).then(bankNames => {

        clearChildElementsExeptFirst('select[name="bank-name"]')

        let otherService = document.querySelector('select[name="services"]')
        let otherServiceId = otherService == null ? undefined : otherService.value


        bankNames.forEach(bankName => {

            if (otherServiceId) {
                if (bankName.ID_Bank == otherServiceId) {
                    console.log('service alreaddy exsists')
                } else {
                    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].appendCreatedElementToELement(
                        'select[name="bank-name"]',

                        `<option 
                            value="${bankName.ID_Bank}"  data-openbankserviceprice="${bankName.Site_Price}">
                                    ${bankName.Bank}
                        </option>`
                    )
                }
            } else {
                _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].appendCreatedElementToELement(
                    'select[name="bank-name"]',

                    `<option 
                        value="${bankName.ID_Bank}"  data-openbankserviceprice="${bankName.Site_Price}">
                                ${bankName.Bank}
                    </option>`
                )
            }


        });
    })
}




window.postBankId = selectElement => {
    let ID_Bank = selectElement.value;

    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/DB_exec.php`, "POST", {
        SN: "Service_Feature",
        ID_Bank: ID_Bank
    }).then(recomended_services => {

        let openBankFeatures = document.querySelector('.addition-services')
        openBankFeatures.innerHTML = ""


        let curentPrice = +document.querySelector('select[name="bank-name"]').selectedOptions[0].dataset.openbankserviceprice;

        let previusSumPrice = +localStorage.getItem('site-price');
        // let previusSelectValue = localStorage.getItem('previusSelectValue')

        // if (previusSelectValue != "undefined") {
        //     previusSumPrice = previusSumPrice - parseInt(previusSelectValue)
        // }

        // if (+localStorage.getItem('site-price') == 0) {
        //     previusSelectValue = 0
        // }else{
        //     previusSelectValue = +localStorage.getItem('site-price')
        // }

        let totalSitePrice = previusSumPrice + curentPrice;


        localStorage.setItem('site-price', totalSitePrice)


        // let serviceGroupElement = document.querySelector("select[name='service-type']")
        // clearChildElementsExeptFirst(".setup-service")
        // serviceGroupElement.selectedIndex = 0



        changePrice();

        recomended_services.forEach(recomendedService => {
            _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].appendCreatedElementToELement(
                '.addition-services',

    /*javascript*/`<div  class="class-office-checkbox" name="additional-service">
                        <label class="clearfix  checkbox flex-box" for="office-checkbox">
                            <p class="heading-regular-font paragraph-small width-for-labels">
                                ${recomendedService.Service_Feature_Name}
                            </p>
                            <span mouseup="checkboxCheck()" onclick="addRecommendedSitePrice(this)" data-recomended-services-price="${recomendedService.Site_Price}" class="checkmark" data-recomendedserviceid="${recomendedService.ID_Service_Feature}" id="Serviced"></span>
                            <div class="cost">
                                <span heading-regular-font="" paragraph-small="">US$</span>
                                <span class="zero heading-bold-font paragraph-medium">${recomendedService.Site_Price}</span>
                                <img class="question_mark" src="src/assets/pictures/question.svg" alt="#">
                            </div>
                        </label>
                    </div>`)
        })

        checkboxCheck()

    })
}


/***/ }),

/***/ "./src/app/fetch api/POST/registerUser.js":
/*!************************************************!*\
  !*** ./src/app/fetch api/POST/registerUser.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_RReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/RReact */ "./src/app/library/RReact.js");
/* harmony import */ var _utils_deleteElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/deleteElements */ "./src/app/utils/deleteElements.js");
/* harmony import */ var _utils_deleteElements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_deleteElements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/form-interaction */ "./src/app/components/form-interaction.js");
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_form_interaction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getLoginAndRegisterData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/getLoginAndRegisterData */ "./src/app/utils/getLoginAndRegisterData.js");
/* harmony import */ var _utils_getLoginAndRegisterData__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_getLoginAndRegisterData__WEBPACK_IMPORTED_MODULE_3__);






let baseUrl = "http://91.212.213.29/~goldenga/DK_PHP";

window.postUserData = () =>{
    let userObject = getRegisterData();
    console.log(userObject)
    
    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/Registration.php`, "POST", {
        "SN": "post_user",
        user: {
            "Full_Name": userObject.Full_Name,
            "Email_Address": userObject.Email_Address,
            "Password": userObject.Password,
            "Phone_Number": userObject.Phone_Number
        }

    }).then(id => {
        console.log(id)
        // window.location = 'http://91.212.213.29/~goldenga/set-up.php';
    })

}

/***/ }),

/***/ "./src/app/fetch api/POST/service-setup.js":
/*!*************************************************!*\
  !*** ./src/app/fetch api/POST/service-setup.js ***!
  \*************************************************/
/*! exports provided: postServiceGroupId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postServiceGroupId", function() { return postServiceGroupId; });
/* harmony import */ var _library_RReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/RReact */ "./src/app/library/RReact.js");
/* harmony import */ var _utils_deleteElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/deleteElements */ "./src/app/utils/deleteElements.js");
/* harmony import */ var _utils_deleteElements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_deleteElements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/form-interaction */ "./src/app/components/form-interaction.js");
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_form_interaction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GET_sitePrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../GET/sitePrice */ "./src/app/fetch api/GET/sitePrice.js");
/* harmony import */ var _components_selectElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/selectElements */ "./src/app/components/selectElements.js");
/* harmony import */ var _components_selectElements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_selectElements__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_changePrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/changePrice */ "./src/app/utils/changePrice.js");
/* harmony import */ var _utils_changePrice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_changePrice__WEBPACK_IMPORTED_MODULE_5__);









let baseUrl = "http://91.212.213.29/~goldenga/DK_PHP";




const postServiceGroupId = (id, elementClassToAppend, optionName) => {
    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/DB_exec.php`, "POST", {
        SN: "Country",
        ID: id
    }).then(serviceGroups => {

        clearChildElementsExeptFirst(elementClassToAppend)

        // document.querySelector('.addition-services').innerHTML = "";

        _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].appendCreatedElementToELement(
            elementClassToAppend,

            /*javascript*/`
            <div name="select-jurisdiction-element">
                <div class="selection_lable">
                    <p class="heading-regular-font paragraph-small">
                        Jurisdiction of ${optionName} <strong class="question-mark">[ ? ]</strong>
                    </p> 
                </div>
                <select onchange="postJurisdictionAndServiceGroupId(this)" name="jurisdictions" class="form-control  block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="" hidden>Please the jurisdiction</option>

                    ${serviceGroups
                .map(
                    (jurisdiction) =>
                        `<option 
                            value="${jurisdiction.ID_Country}" 
                            data-serviceGroupId='${jurisdiction.ID_Service_Group}'>
                            ${jurisdiction.Country_Name}
                        </option>`
                )
                .join("")
            }
                    
                </select>
            </div>`
        );
    });
};



window.postJurisdictionAndServiceGroupId = selectElement => {
    let ID_Country = selectElement.value;
    let ID_Service_Group = selectElement.options[selectElement.selectedIndex].dataset.servicegroupid



    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/DB_exec.php`, "POST", {
        SN: "Service",
        ID: ID_Service_Group,
        ID_Country: ID_Country
    }).then(services => {
        let selectPlaceholder = ``
        let giveEventListener = ``





        if (services.length > 1) {
            selectPlaceholder = `<option value="" hidden>Please select</option>`
            giveEventListener = `onchange="postServiceId(this)"`
        } else {
            selectPlaceholder = ``;
            giveEventListener = ``
        }

        deleteElementsAfterElement('.setup-service', 'div[name="select-jurisdiction-element"]')
        document.querySelector('.addition-services').innerHTML = "";
        document.querySelectorAll('select[name="service-feature]').forEach(el => el.remove())

        let serviceCaption = `Type Of ${localStorage.getItem("service_caption")}`

        // if (services.) {

        // }


        let otherServiceId = document.querySelector('select[name="bank-name"]').value

        _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].appendCreatedElementToELement(
            ".setup-service",

            /*javascript*/`
            <div name="select-service-element">
                <div class="selection_lable"> 
                    <p class="heading-regular-font paragraph-small">
                        ${serviceCaption}
                        <strong class="question-mark">[ ? ]</strong>
                    </p>
                </div>
                <select onchange="postServiceId(this)" onfocus="storePreviusValue(this)"  name="services" class="siteprice_select service_id form-control  block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                ${selectPlaceholder}

                ${services
                .map(
                    (service) =>
                        otherServiceId == service.ID_Service ? `` : `<option data-siteprice=${service.Site_Price} value="${service.ID_Service}">${service.Service_Name}</option>`
                ).join("")}
                </select>
            </div>`
        );

    }).then(_ => {
        let serviceSelectparentElement = document.querySelector('div[name="select-service-element"]')
        let serviceOptions = serviceSelectparentElement.getElementsByTagName('option')

        if (serviceOptions.length <= 1) {
            postServiceId(serviceOptions[0])
        }
    });
};



window.postServiceId = selectElement => {
    let ID_Service = selectElement.value;

    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/DB_exec.php`, "POST", {
        SN: "Service_Feature",
        ID_Service: ID_Service,
    }).then(features => {

        let serviceFeatureNames = []
        features.forEach(feature => {
            serviceFeatureNames.push(feature.Service_Feature_Name)
        });

        localStorage.setItem('service_feature_names_array', serviceFeatureNames)
        deleteElementsAfterElement('.setup-service', 'div[name="select-service-element"]')



        let curentPrice = +document.querySelector("select[name='services']").selectedOptions[0].dataset.siteprice
        let previusSumPrice = 0;
        let previusSelectValue = localStorage.getItem('previusSelectValue')

        let openBankCountrySelect = document.querySelector('select[name="bank-country-on-checkbox"]');
        let openBankNameSelect = document.querySelector('select[name="bank-name"]');
        openBankCountrySelect.selectedIndex = 0
        openBankNameSelect.selectedIndex = 0

        document.querySelector('.addition-services').innerHTML = "";

        // if (previusSelectValue != "undefined") {
        //     previusSumPrice = previusSumPrice - parseInt(previusSelectValue)
        // }

        let totalSitePrice = previusSumPrice + curentPrice;

        // let optionSitePrice = getServicePrice(+selectElement.selectedOptions[0].value)
        // let totalSitePrice = previusSumPrice + optionSitePrice;


        localStorage.setItem('site-price', totalSitePrice)


        let container = document.querySelector('.setup-service');
        let mainElement = document.querySelector('div[name="select-service-element"]');
        let allChildren = container.children;

        let options;

        let otherServiceElements = document.querySelectorAll('option[data-openbankserviceprice]')


        changePrice()



        if (features[0].Service_Feature_Value == "0") {

            features.forEach(feature => {

                if (otherServiceElements) {
                    otherServiceElements.forEach(serviceElement => {
                        if (serviceElement.value == feature.ID_Service_Feature) {
                            serviceElement.remove();
                        }
                    })
                }


                _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].appendCreatedElementToELement(
                    '.setup-service',

                    /*javascript*/`
                    <div  class="class-office-checkbox" name="additional-service">
                        <label class="clearfix  checkbox flex-box" for="office-checkbox">
                            <p class="heading-regular-font paragraph-small width-for-labels">
                                ${feature.Service_Feature_Name}
                            </p>
                            <span mouseup="checkboxCheck()" onclick="addRecommendedSitePrice(this)" data-recomended-services-price="${feature.Site_Price}" class="checkmark" data-recomendedserviceid="${feature.ID_Service_Feature}" id="Serviced"></span>
                            <div class="cost">
                                <span heading-regular-font="" paragraph-small="">US$</span>
                                <span class="zero heading-bold-font paragraph-medium">${feature.Site_Price}</span>
                                <img class="question_mark" src="src/assets/pictures/question.svg" alt="#">
                            </div>
                        </label>
                    </div>`)
            })

            checkboxCheck()
        } else {
            features.forEach(feature => {
                options = ""
                for (let i = 0; i < feature.Service_Feature_Value; i++) {
                    options += `<option value="${i}">${i}</option>`;
                }



                _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].appendCreatedElementToELement(
                    ".setup-service",

                    /*javascript*/`
                    <div name="service-feature-element" >
                        <div class="selection_lable">
                            <p class="heading-regular-font paragraph-small">
                                number of ${feature.Service_Feature_Name}
                                <strong class="question-mark">[ ? ]</strong>
                            </p>
                        </div>
                        <select name="service-feature" data-featureid="${feature.ID_Service_Feature}" class="form-control  block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option value="" hidden>Please select the number</option>
                            ${options}
                        </select>
                    </div>`
                );
            });
        }






    });



};


/***/ }),

/***/ "./src/app/fetch api/POST/submitService.js":
/*!*************************************************!*\
  !*** ./src/app/fetch api/POST/submitService.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_RReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/RReact */ "./src/app/library/RReact.js");


let baseUrl = "http://91.212.213.29/~goldenga/DK_PHP";


window.submitEntiereService = () => {
    console.log(localStorage)
    let serviceFeatureTypeForm = document.querySelectorAll('form[name="service_feature_type"]');
    let serviceFeatureElements = document.querySelectorAll('.group-form-group')

    let ServiceFeaturesArray = [];

    serviceFeatureElements.forEach(serviceFeatureElement => {
        let serviceFeatureId = serviceFeatureElement.dataset.servicefeatureid;

        // let typeOfFeatureChekboxses = serviceFeatureElement.querySelector('form[name="service_feature_type"]').querySelectorAll('input[name="choice"]')
        // let serviceFeatureTypeId;

        let name = serviceFeatureElement.querySelector('input[name="service-feature-name"]').value
        let countrie_id = serviceFeatureElement.querySelector('select[name="service-feature-country"]').value
        let idNumber = serviceFeatureElement.querySelector('input[name="service-feature-id-number"]').value
        let sharePercentElement = serviceFeatureElement.querySelector('select[name="amount-of-shares"]')
        let sharePercent;

        if (!sharePercentElement) {
            sharePercent = -1;
        } else {
            sharePercent = +sharePercentElement.value
        }

        let serviceFeatureObject = {
            "id": +serviceFeatureId,
            "type_of_feature_id": 1,
            "name": name,  
            "country_id": +countrie_id,
            "identity_number": idNumber,
            "percentage": sharePercent
        }
        console.log(serviceFeatureObject)

        ServiceFeaturesArray.push(serviceFeatureObject)

    })



    let service_id_string = localStorage.getItem('service_id').split("\"")[1]
    let service_id = +service_id_string
    let recommend_services = JSON.parse(localStorage.getItem('recommend_services'))
    let features_information = ServiceFeaturesArray
    let site_price = +localStorage.getItem('site-price')

    let company_name = document.querySelector('input[name="company_name"]').value
    let company_suffix = document.querySelector('select[name="company_suffix"]').value


    let finalJsonns = {
        "service_id": service_id,
 
        "recommend_services": recommend_services,

        "company_name": {
            "mame": company_name,
            "suffix": +company_suffix
        },

        "features_information": features_information,

        "contact_details": {
            "full_name": "vigaca vigacashvili",
            "email": "vigaca.vigacashvili@gmail.com",
            "phone_number": "592645454",
            "special_request": "racxa rucxebi minda"
        },

        "user_id": 1,
        "finished": true,
        "site_price": +localStorage.getItem('site-price')
    }



    _library_RReact__WEBPACK_IMPORTED_MODULE_0__["default"].RFetch(`${baseUrl}/insert_order.php`, "POST", {
        ...finalJsonns 
    }).then(orderId => {
        localStorage.setItem("orderId", orderId)
        localStorage.setItem("orderjson", finalJsonns)

    })


    // window.location = "http://localhost/offshore_corp_geo/payment-methods.php";




    console.log(finalJsonns)


}



/***/ }),

/***/ "./src/app/fetch api/POST/submitServiceForm.js":
/*!*****************************************************!*\
  !*** ./src/app/fetch api/POST/submitServiceForm.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.sendServiceSetupJson = () => {

	let sitePrice = +localStorage.getItem('site-price')
	let servicesElement = document.querySelector('select[name="services"]')
	let hasService = servicesElement.selectedIndex == 0 ? false : true


	if (sitePrice > 0 ) {

		let serviceId = document.querySelector('select[name="services"]').value;
		let serviceFeaures = document.querySelectorAll('select[name="service-feature"]');
		let bankId = document.querySelector('select[name="bank-name"]').value;
		let recomendedServicesElements = document.querySelector('.addition-services').querySelectorAll('.checkmark')

		let redirect = false;

		let service_id = serviceId;
		let feature_ids_and_quantity = []
		let recomendedServiceIdArray = []


		recomendedServicesElements.forEach(recomendedService => {
			if (recomendedService.classList.contains('new-checkmark')) {
				recomendedServiceIdArray.push(+recomendedService.dataset.recomendedserviceid)
			}
		})


		if (serviceFeaures.length <= 0) {
			let serviceFeaturesCheckmarksIds = document.querySelector('.setup-service').querySelectorAll('.checkmark')
			
			serviceFeaturesCheckmarksIds.forEach(checkmark => {
				if (checkmark.classList.contains('new-checkmark')) {
					feature_ids_and_quantity.push(
						{
							id: checkmark.dataset.recomendedserviceid,
							quantity: 0,
						}
					)
				}
			})
		} else {
			serviceFeaures.forEach(feature => feature_ids_and_quantity.push(
				{
					id: feature.dataset.featureid,
					quantity: feature.value,
				}
			));

		}



		let recommend_services = {
			"open_bank": {
				"bank_id": +bankId
			},
			"ID_Service_Feature": recomendedServiceIdArray
		}


		let features = [{}]


		localStorage.setItem('feature_ids_and_quantity', JSON.stringify(feature_ids_and_quantity));
		localStorage.setItem('recommend_services', JSON.stringify(recommend_services));
		localStorage.setItem('service_id', JSON.stringify(service_id));

		// console.log(localStorage)
		let baseUrl = "http://91.212.213.29/~goldenga";

		// window.location = "http://localhost/offshore_corp_geo/payment-methods.php";
		window.location = `${baseUrl}/personal-details.php`



		// if (redirect) {
		// 	window.location = "http://localhost/offshore_corp_geo/payment-methods.php";
		// } else {
		// 	window.location = "http://localhost/offshore_corp_geo/personal-details.php"
		// }

		// console.log('retrievedObject: ', JSON.parse(retrievedObject));


	} else {
		openPopUp()
	}





}




let finalJsonns = {
	"service_id": 1,

	"recommend_services": {
		"open_bank": {
			"bank_id": 2
		},
		"serviced_office": true,
		"merchant_account_online": true,
		"iP_services": true,
		"bookkeeping": false
	},

	"company_name": {
		"mame": "ragaca kompaniis saxeli",
		"suffix": "Incorporation"
	},

	"features_information": [
		{
			"id": 0,
			"type_of_feature_id": 2,
			"name": "kompaniis an useris saxeli",
			"country_id": 5,
			"identity_number": "3165646887",
			"percentage": 100
		},
		{
			"id": 2,
			"type_of_feature_id": 1,
			"name": "kompaniis an useris saxeli",
			"country_id": 5,
			"identity_number": "",
			"percentage": 100
		}
	],

	"contact_details": {
		"full_name": "vigaca vigacashvili",
		"email": "vigaca.vigacashvili@gmail.com",
		"phone_number": "592645454",
		"special_request": "racxa rucxebi minda"
	},

	"curancy_id": 2,
	"user_id": "",
	"finished": false
}




let aaa = {
	"SN": "post_service_type_form",
	"service_group_id": 1,
	"country_id": 1,
	"service_id": 1,

	"recommend_services": {
		"open_bank": {
			"bank_country_id": 2,
			"bank_id": 2
		},
		"serviced_office": true,
		"merchant_account_online": true,
		"iP_services": true,
		"bookkeeping": false
	},

	"company_name": {
		"mame": "ragaca kompaniis saxeli",
		"suffix": "Incorporation"
	},

	"features_information": [
		{
			"id": 0,
			"type_of_feature_id": 2,
			"name": "kompaniis an useris saxeli",
			"country_id": 5,
			"identity_number": "3165646887",
			"percentage": 100
		},
		{
			"id": 2,
			"type_of_feature_id": 1,
			"name": "kompaniis an useris saxeli",
			"country_id": 5,
			"identity_number": "",
			"percentage": 100
		}
	],

	"contact_details": {
		"full_name": "vigaca vigacashvili",
		"email": "vigaca.vigacashvili@gmail.com",
		"phone_number": "592645454",
		"special_request": "racxa rucxebi minda"
	},

	"curancy_id": 2,
	"user_id": "",
	"finished": false
}

/***/ }),

/***/ "./src/app/init.js":
/*!*************************!*\
  !*** ./src/app/init.js ***!
  \*************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form-interaction */ "./src/app/components/form-interaction.js");
/* harmony import */ var _components_form_interaction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_form_interaction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation */ "./src/app/components/navigation.js");
/* harmony import */ var _fetch_api_GET_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch api/GET/services */ "./src/app/fetch api/GET/services.js");
/* harmony import */ var _fetch_api_GET_openBank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch api/GET/openBank */ "./src/app/fetch api/GET/openBank.js");
/* harmony import */ var _fetch_api_GET_serviceDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch api/GET/serviceDetails */ "./src/app/fetch api/GET/serviceDetails.js");
/* harmony import */ var _fetch_api_GET_getUserData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch api/GET/getUserData */ "./src/app/fetch api/GET/getUserData.js");
/* harmony import */ var _fetch_api_POST_submitServiceForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fetch api/POST/submitServiceForm */ "./src/app/fetch api/POST/submitServiceForm.js");
/* harmony import */ var _fetch_api_POST_submitServiceForm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fetch_api_POST_submitServiceForm__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fetch_api_POST_submitService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fetch api/POST/submitService */ "./src/app/fetch api/POST/submitService.js");
/* harmony import */ var _fetch_api_POST_registerUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetch api/POST/registerUser */ "./src/app/fetch api/POST/registerUser.js");
/* harmony import */ var _fetch_api_POST_loginUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch api/POST/loginUser */ "./src/app/fetch api/POST/loginUser.js");
/* harmony import */ var _fetch_api_POST_openBank__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fetch api/POST/openBank */ "./src/app/fetch api/POST/openBank.js");
/* harmony import */ var _utils_changePrice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/changePrice */ "./src/app/utils/changePrice.js");
/* harmony import */ var _utils_changePrice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_changePrice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_getLoginAndRegisterData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/getLoginAndRegisterData */ "./src/app/utils/getLoginAndRegisterData.js");
/* harmony import */ var _utils_getLoginAndRegisterData__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_getLoginAndRegisterData__WEBPACK_IMPORTED_MODULE_12__);

// import { checkmarkClicked } from './components/form-interaction'
















 







const init = () => {

    // ─── STATIC EVENT FUNCTIONS ─────────────────────────────────────────────────────
    // window.collapedForm = collapedForm
    // window.checkmarkClicked = checkmarkClicked

    // ─── FETCH API ───────────────────────────────────────────────────── 

    Object(_fetch_api_GET_services__WEBPACK_IMPORTED_MODULE_2__["getServiceGroups"])();
    Object(_fetch_api_GET_openBank__WEBPACK_IMPORTED_MODULE_3__["getBankCountries"])();
    
    if (document.querySelector('.profile_row')) {
        Object(_fetch_api_GET_getUserData__WEBPACK_IMPORTED_MODULE_5__["getUserData"])();
        Object(_fetch_api_GET_getUserData__WEBPACK_IMPORTED_MODULE_5__["getUserOrders"])();
    }
    if (!document.querySelector('select[name="service-type"]')) {
        getServiceFeatures()
        
    }
    // postServiceId();

}

/***/ }),

/***/ "./src/app/library/RReact.js":
/*!***********************************!*\
  !*** ./src/app/library/RReact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RReact; });
/* harmony import */ var _config_apiToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/apiToken */ "./src/app/config/apiToken.js");



class RReact {


    // ─── FETCH JSON FROM API ──────────────────────── //! POST AND GET────────────────────────────────
    static RFetch(apiURL, method, sendObject) {
        let options;
        let jsonObject;



        let headers = {
            // 'Access-Control-Allow-Origin': '*',
            // "mode": "no-cors",    
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json'
        }



        if (method == "POST" || method == "post") {
            if (sendObject) {
                options = {
                    method: 'POST',
                    body: JSON.stringify(sendObject)
                }
            }
        }

        if (method == "GET" || method == "get") {
            if (!sendObject) {
                options = {
                    method: 'GET',
                }
            }
        }

        return fetch(apiURL, options)
            .then(response => {
                return response.json()
            })
            .then(json => {
                jsonObject = json
                return jsonObject;
            })
    }



    //! ─── BUILD A SINGLE ELEMENT FROM A TEMPLATE STRING ──────────────────────────────
    static buildFromTemplate(elementTemplateString) {
        let parse = new DOMParser()

        let template = parse.parseFromString(
            `${elementTemplateString}`
            , "text/html"
        )

        return template.body.firstElementChild
    }




    //! ─── APPEND CREATED ELEMENT  ─────────────────────────────────────────────────────
    static appendCreatedElementToELement(parentElement, elementTemplateString) {
        let parent = document.querySelector(parentElement)
        let child = this.buildFromTemplate(elementTemplateString)
        if (parent) {
            parent.append(child)
        }
    }




    //! ─── CREATE ELEMENT WITH JSON  ─────────────────────────────────────────────────────
    static createElementWithJson(apiURL, elementTemplateString) {

        this.getJSON(apiURL).then(json => {
            // console.log({...json}); 
        });

        let parser = new DOMParser();
    }
}





// module.exports = RReact;


/***/ }),

/***/ "./src/app/utils/changePrice.js":
/*!**************************************!*\
  !*** ./src/app/utils/changePrice.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.changePrice = () =>{
    const priceElement = document.querySelector('.price');
    priceElement.innerHTML = `US$${+localStorage.getItem('site-price')}.00`
}  

/***/ }),

/***/ "./src/app/utils/deleteElements.js":
/*!*****************************************!*\
  !*** ./src/app/utils/deleteElements.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.deleteElementsAfterElement = (containerElementSelector, mainElementSelector) => {
    let container = document.querySelector(containerElementSelector);
    let mainElement = document.querySelector(mainElementSelector);
    let allChildren = container.children;
    // let otherElementsCopy = [...allChildren]
    // let otherElements = otherElementsCopy.filter(el => el != mainElement)
    let mainElementIndex = Array.prototype.indexOf.call(allChildren, mainElement)
    // let haveToDeleIndex = mainElementIndex + 1


    for (let i = mainElementIndex + 1; i < allChildren.length + 1; i++) {
        // container = document.querySelector(containerElementSelector);
        // allChildren = container.children;
    
        while (i < allChildren.length) {
            allChildren[i].remove();
        }
        console.log(allChildren[i])
        console.log(allChildren)

         
    } 
}



window.clearChildElementsExeptFirst = (parentElementSelector) => {
    let firstElement = document.querySelector(parentElementSelector).children[0]
    console.log(firstElement)
    let parent = document.querySelector(parentElementSelector);
    parent.innerHTML = "";
    parent.append(firstElement)
}

/***/ }),

/***/ "./src/app/utils/getDiffElements.js":
/*!******************************************!*\
  !*** ./src/app/utils/getDiffElements.js ***!
  \******************************************/
/*! exports provided: getDifferentElementsArray, removeClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDifferentElementsArray", function() { return getDifferentElementsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClasses", function() { return removeClasses; });
const getDifferentElementsArray = (array, target) => {
    let allElement = [...array];
    let diffElements = allElement.filter(el => el != target);
    return diffElements;
}


const removeClasses = (elementsArray, elements) => {
    elementsArray.forEach(element => {
        element.classList.remove(elements);
    });
}

/***/ }),

/***/ "./src/app/utils/getLoginAndRegisterData.js":
/*!**************************************************!*\
  !*** ./src/app/utils/getLoginAndRegisterData.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.getLoginData = () =>{
    let email = document.querySelector('[name="txtEmail"]').value
    let password = document.querySelector('[name="txtPassword"]').value

    let userLogin = {
        email: email,
        password: password
    }
    return userLogin;
}



window.getRegisterData = () =>{
    let name =  document.querySelector('[name="txtName"]').value
    let email = document.querySelector('[name="txtEmail"]').value
    let password = document.querySelector('[name="txtPassword"]').value
    let conPassword = document.querySelector('[name="txtCPassword"]').value
    let phoneNumber = document.querySelector('[name="txtPhone"]').value

    

  
    let userRegister = {
        Full_Name: name,
        Email_Address: email,
        Password: password,
        Phone_Number: phoneNumber
    }

 
    return userRegister;
}

/***/ }),

/***/ "./src/assets/fonts/Gilroy/Gilroy-Bold.otf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Gilroy/Gilroy-Bold.otf ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/Gilroy-Bold.otf";

/***/ }),

/***/ "./src/assets/fonts/Gilroy/Gilroy-Light.otf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Gilroy/Gilroy-Light.otf ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/Gilroy-Light.otf";

/***/ }),

/***/ "./src/assets/fonts/Gilroy/Gilroy-Regular.otf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/Gilroy/Gilroy-Regular.otf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/Gilroy-Regular.otf";

/***/ }),

/***/ "./src/assets/fonts/Noto/NotoSansGeorgian-Black.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/Noto/NotoSansGeorgian-Black.ttf ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/NotoSansGeorgian-Black.ttf";

/***/ }),

/***/ "./src/assets/fonts/Noto/NotoSansGeorgian-Bold.ttf":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/Noto/NotoSansGeorgian-Bold.ttf ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/NotoSansGeorgian-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/Noto/NotoSansGeorgian-Light.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/Noto/NotoSansGeorgian-Light.ttf ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/NotoSansGeorgian-Light.ttf";

/***/ }),

/***/ "./src/assets/fonts/Noto/NotoSansGeorgian-Medium.ttf":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/Noto/NotoSansGeorgian-Medium.ttf ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/NotoSansGeorgian-Medium.ttf";

/***/ }),

/***/ "./src/assets/fonts/Noto/NotoSansGeorgian-Regular.ttf":
/*!************************************************************!*\
  !*** ./src/assets/fonts/Noto/NotoSansGeorgian-Regular.ttf ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/NotoSansGeorgian-Regular.ttf";

/***/ }),

/***/ "./src/assets/pictures/GG.svg":
/*!************************************!*\
  !*** ./src/assets/pictures/GG.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/GG.svg";

/***/ }),

/***/ "./src/assets/pictures/blue-line.svg":
/*!*******************************************!*\
  !*** ./src/assets/pictures/blue-line.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/blue-line.svg";

/***/ }),

/***/ "./src/assets/pictures/close.png":
/*!***************************************!*\
  !*** ./src/assets/pictures/close.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/close.png";

/***/ }),

/***/ "./src/assets/pictures/pencil.png":
/*!****************************************!*\
  !*** ./src/assets/pictures/pencil.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/pencil.png";

/***/ }),

/***/ "./src/assets/pictures/red-checkbox.svg":
/*!**********************************************!*\
  !*** ./src/assets/pictures/red-checkbox.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/red-checkbox.svg";

/***/ }),

/***/ "./src/assets/pictures/white-line.svg":
/*!********************************************!*\
  !*** ./src/assets/pictures/white-line.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/imgs/white-line.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/init */ "./src/app/init.js");





Object(_app_init__WEBPACK_IMPORTED_MODULE_1__["init"])()      

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });