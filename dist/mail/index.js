"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var Sqrl = _interopRequireWildcard(require("squirrelly"));

var _path = _interopRequireDefault(require("path"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _transport = require("./transport");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var transporter = _nodemailer["default"].createTransport(_transport.gmail);

var templatesPath = _path["default"].join(__dirname, './templates');

var templates = {
  verification: 'verification.html',
  welcome: 'welcome.html',
  resetPassword: 'reset-password.html'
}; // Time for the verification token to expires in

var VERIFICATION_EXPIRES_IN = '7 days';
var REQUEST_PASSWORD_RESET_EXPIRES_IN = '1 hour';
/**
 * Send a welcome email to the user upon account creation
 *
 * @param {string} userName - The newly created user's name
 * @param {string} email - The newly created user's email
 */

var welcome =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(userName, email) {
    var data, html, mail, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = {
              pageTitle: "Welcome ".concat(userName, " from ").concat(process.env.COMPANY_NAME),
              welcomeTitle: 'We welcome you!',
              companyName: process.env.COMPANY_NAME,
              appName: process.env.APP_NAME,
              title: 'This is great!',
              userName: userName,
              // User's name
              email: email
            };
            html = Sqrl.renderFile("".concat(templatesPath, "/").concat(templates.welcome), data);
            mail = {
              to: email,
              subject: "Welcome ".concat(userName, " by the ").concat(process.env.APP_NAME, " team"),
              text: "Thanks for signing up for ".concat(process.env.APP_NAME, "!"),
              html: html
            };
            _context.next = 5;
            return sendMail(mail);

          case 5:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function welcome(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Send a verification email to the recently created user
 * so the user can verify his/her account a make sure is not
 * a bot or something like it.
 *
 * @param {string} userName - The newly created user's name
 * @param {string} email - The newly created user's email
 */


var verifyAccount =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(userName, email) {
    var data, token, html, mail, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = {
              pageTitle: 'Verify Your Account',
              companyName: process.env.COMPANY_NAME,
              appName: process.env.APP_NAME,
              title: 'please verify your email address',
              userName: userName,
              // User's name
              email: email
            };
            token = _jsonwebtoken["default"].sign({
              email: email
            }, process.env.MAIL_JWT_SECRET, {
              expiresIn: VERIFICATION_EXPIRES_IN
            });
            data.actionUrl = "".concat(process.env.APP_SERVER, "/verify/").concat(token);
            html = Sqrl.renderFile("".concat(templatesPath, "/").concat(templates.verification), data);
            mail = {
              to: email,
              subject: "Verify your account  --- ".concat(process.env.COMPANY_NAME),
              text: "Thanks for signing up for ".concat(process.env.APP_NAME, "! Please verify your email."),
              html: html
            };
            _context2.next = 7;
            return sendMail(mail);

          case 7:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function verifyAccount(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var requestResetPassword =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(userName, email) {
    var data, token, html, mail, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = {
              pageTitle: 'Reset Password',
              companyName: process.env.COMPANY_NAME,
              appName: process.env.APP_NAME,
              title: 'Please confirm your email address',
              userName: userName,
              // User's name
              email: email
            };
            token = _jsonwebtoken["default"].sign({
              email: email
            }, process.env.MAIL_JWT_SECRET, {
              expiresIn: REQUEST_PASSWORD_RESET_EXPIRES_IN
            });
            data.actionUrl = "".concat(process.env.APP_SERVER, "/reset/").concat(email, "/password/").concat(token);
            html = Sqrl.renderFile("".concat(templatesPath, "/").concat(templates.resetPassword), data);
            mail = {
              to: email,
              subject: "Reset Password for ".concat(email),
              text: "We have received a Password Reset on your behalf! Please confirm your ".concat(email, "."),
              html: html
            };
            _context3.next = 7;
            return sendMail(mail);

          case 7:
            result = _context3.sent;
            return _context3.abrupt("return", {
              result: result,
              token: token,
              expires: REQUEST_PASSWORD_RESET_EXPIRES_IN
            });

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function requestResetPassword(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var sendMail = function sendMail(mail) {
  var from = mail.from ? mail.from : process.env.MAIL_FROM_DEFAULT;
  return new Promise(function (resolve, reject) {
    transporter.sendMail(_objectSpread({}, mail, {
      from: from
    }), function (err, info) {
      if (err) return reject(new Error(err.message));
      resolve({
        message: 'Email successfully sent',
        info: info
      });
    });
  });
};

var _default = {
  verifyAccount: verifyAccount,
  welcome: welcome,
  requestResetPassword: requestResetPassword
};
exports["default"] = _default;