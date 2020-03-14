"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUser = exports.resetPassword = exports.requestResetPassword = exports.renewUserAccessToken = exports.login = exports.createUser = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _apolloServerCore = require("apollo-server-core");

var _moment = _interopRequireDefault(require("moment"));

var _hashPassword = _interopRequireDefault(require("../../../utils/security/hashPassword"));

var _token = require("../../../utils/security/token");

var _mail = _interopRequireDefault(require("../../../mail"));

var _errors = _interopRequireWildcard(require("../../../errors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(parent, args, _ref, info) {
    var prisma, passwordRaw, password, isEmailTaken, _errors$validation$us, message, code, error, user, welcomeEmailResult, verifyEmailResult;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            prisma = _ref.prisma;
            passwordRaw = args.data.password;
            _context.next = 4;
            return (0, _hashPassword["default"])(passwordRaw);

          case 4:
            password = _context.sent;
            _context.next = 7;
            return prisma.$exists.user({
              email: args.data.email
            });

          case 7:
            isEmailTaken = _context.sent;

            if (!isEmailTaken) {
              _context.next = 13;
              break;
            }

            _errors$validation$us = _errors["default"].validation.userEmailExists, message = _errors$validation$us.message, code = _errors$validation$us.code;
            error = new _apolloServerCore.ValidationError(message);
            error.extensions.code = code;
            throw error;

          case 13:
            delete args.data.repeatPassword;
            _context.next = 16;
            return prisma.createUser(_objectSpread({}, args.data, {
              password: password
            }));

          case 16:
            user = _context.sent;
            _context.next = 19;
            return _mail["default"].welcome(user.name, user.email);

          case 19:
            welcomeEmailResult = _context.sent;

            if (!(welcomeEmailResult instanceof Error)) {
              _context.next = 25;
              break;
            }

            console.error("There was an error trying to send the welcome email to ".concat(user.email), welcomeEmailResult);
            return _context.abrupt("return", welcomeEmailResult);

          case 25:
            console.info("Welcome email successfully sent to ".concat(user.email), welcomeEmailResult);
            _context.next = 28;
            return _mail["default"].verifyAccount(user.name, user.email);

          case 28:
            verifyEmailResult = _context.sent;
            if (verifyEmailResult instanceof Error) console.error("There was an error trying to send the verification email to ".concat(user.email), verifyEmailResult);else console.info("Verification email successfully sent to ".concat(user.email), verifyEmailResult);

          case 30:
            return _context.abrupt("return", (0, _token.generateToken)(prisma, user.id));

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createUser(_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var login =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(parent, args, _ref3) {
    var prisma, _args$data, email, password, userExists, isEmailVerified, _errors$validation$us2, message, code, error, user, valid, _errors$validation$em, _message, _code, _error;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            prisma = _ref3.prisma;
            _args$data = args.data, email = _args$data.email, password = _args$data.password;
            _context2.next = 4;
            return prisma.$exists.user({
              email: email
            });

          case 4:
            userExists = _context2.sent;
            console.log("userExists", userExists);

            if (userExists) {
              _context2.next = 8;
              break;
            }

            throw (0, _errors.getException)(_errors["default"].validation, _errors["default"].validation.userNotFound, _apolloServerCore.ValidationError);

          case 8:
            _context2.next = 10;
            return prisma.$exists.user({
              email: email,
              verified: true
            });

          case 10:
            isEmailVerified = _context2.sent;

            if (isEmailVerified) {
              _context2.next = 16;
              break;
            }

            _errors$validation$us2 = _errors["default"].validation.userEmailNotValidated, message = _errors$validation$us2.message, code = _errors$validation$us2.code;
            error = new _apolloServerCore.ValidationError(message);
            error.extensions.code = code;
            throw error;

          case 16:
            _context2.next = 18;
            return prisma.user({
              email: email
            });

          case 18:
            user = _context2.sent;
            _context2.next = 21;
            return _bcryptjs["default"].compare(password, user.password);

          case 21:
            valid = _context2.sent;
            console.log("The user", user);
            console.log("Is valid", valid);

            if (!(!user || !valid)) {
              _context2.next = 30;
              break;
            }

            _errors$validation$em = _errors["default"].validation.emailPasswordIncorrect, _message = _errors$validation$em.message, _code = _errors$validation$em.code;
            _error = new _apolloServerCore.ValidationError(_message);
            _error.extensions.code = _code;
            console.log("The freaking error", _error);
            throw _error;

          case 30:
            return _context2.abrupt("return", (0, _token.generateToken)(prisma, user.id));

          case 31:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x5, _x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.login = login;

var renewUserAccessToken =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(parent, _ref5, _ref6) {
    var refreshToken, prisma;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            refreshToken = _ref5.refreshToken;
            prisma = _ref6.prisma;
            return _context3.abrupt("return", (0, _token.renewAccessToken)(prisma, refreshToken));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function renewUserAccessToken(_x8, _x9, _x10) {
    return _ref7.apply(this, arguments);
  };
}();

exports.renewUserAccessToken = renewUserAccessToken;

var requestResetPassword =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(parent, _ref8, _ref9, info) {
    var email, prisma, userExists, _errors$validation$us3, message, code, error, user, _ref11, result, token, expires, resetPasswordToken;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            email = _ref8.email;
            prisma = _ref9.prisma;
            _context4.next = 4;
            return prisma.$exists.user({
              email: email,
              verified: true
            });

          case 4:
            userExists = _context4.sent;

            if (userExists) {
              _context4.next = 10;
              break;
            }

            _errors$validation$us3 = _errors["default"].validation.userNotFound, message = _errors$validation$us3.message, code = _errors$validation$us3.code;
            error = new _apolloServerCore.ValidationError("".concat(message, " or not validated"));
            error.extensions.code = code;
            throw error;

          case 10:
            _context4.next = 12;
            return prisma.user({
              email: email
            });

          case 12:
            user = _context4.sent;
            _context4.next = 15;
            return _mail["default"].requestResetPassword(user.name, user.email);

          case 15:
            _ref11 = _context4.sent;
            result = _ref11.result;
            token = _ref11.token;
            expires = _ref11.expires;

            if (!(result instanceof Error)) {
              _context4.next = 22;
              break;
            }

            console.error("There was an error trying to send the reset password email to ".concat(user.email), result);
            throw result;

          case 22:
            _context4.next = 24;
            return prisma.createResetPasswordToken({
              user: {
                connect: {
                  id: user.id
                }
              },
              token: token,
              expiresIn: (0, _moment["default"])().add(expires.split(" ")[0], expires.split(" ")[1]).valueOf().toString()
            });

          case 24:
            resetPasswordToken = _context4.sent;
            console.info("Reset Password email sent to ".concat(user.email, " successfully"), result);
            console.log(resetPasswordToken);
            return _context4.abrupt("return", resetPasswordToken.token);

          case 28:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function requestResetPassword(_x11, _x12, _x13, _x14) {
    return _ref10.apply(this, arguments);
  };
}();

exports.requestResetPassword = requestResetPassword;

var resetPassword =
/*#__PURE__*/
function () {
  var _ref14 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(parent, _ref12, _ref13, info) {
    var data, prisma, token, email, oldPassword, newPassword, repeatNewPassword, _errors$validation$pa, message, code, error, decoded, _errors$validation$em2, _message2, _code2, _error2, isRevoked, _errors$forbidden$rev, _message3, _code3, _error3, user, validPassword, _errors$validation$em3, _message4, _code4, _error4, areTheSame, _errors$validation$ol, _message5, _code5, _error5, newPasswordHash;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            data = _ref12.data;
            prisma = _ref13.prisma;
            token = data.token, email = data.email, oldPassword = data.oldPassword, newPassword = data.newPassword, repeatNewPassword = data.repeatNewPassword;

            if (!(newPassword.trim().length < 8)) {
              _context5.next = 8;
              break;
            }

            _errors$validation$pa = _errors["default"].validation.passwordIncorrectLength, message = _errors$validation$pa.message, code = _errors$validation$pa.code;
            error = new _apolloServerCore.ValidationError(message);
            error.extensions.code = code;
            throw error;

          case 8:
            _context5.prev = 8;
            _context5.next = 11;
            return _jsonwebtoken["default"].verify(token, process.env.MAIL_JWT_SECRET);

          case 11:
            decoded = _context5.sent;

            if (!(decoded.email !== email || newPassword !== repeatNewPassword)) {
              _context5.next = 17;
              break;
            }

            _errors$validation$em2 = _errors["default"].validation.emailPasswordIncorrect, _message2 = _errors$validation$em2.message, _code2 = _errors$validation$em2.code;
            _error2 = new _apolloServerCore.ValidationError(_message2);
            _error2.extensions.code = _code2;
            throw _error2;

          case 17:
            _context5.next = 24;
            break;

          case 19:
            _context5.prev = 19;
            _context5.t0 = _context5["catch"](8);
            _context5.next = 23;
            return prisma.updateResetPasswordToken({
              data: {
                revoke: true
              },
              where: {
                token: token
              }
            });

          case 23:
            throw _context5.t0;

          case 24:
            _context5.next = 26;
            return prisma.$exists.resetPasswordToken({
              token: token,
              revoke: true
            });

          case 26:
            isRevoked = _context5.sent;

            if (!isRevoked) {
              _context5.next = 32;
              break;
            }

            _errors$forbidden$rev = _errors["default"].forbidden.revokedResetPasswordTokenError, _message3 = _errors$forbidden$rev.message, _code3 = _errors$forbidden$rev.code;
            _error3 = new _apolloServerCore.ForbiddenError(_message3);
            _error3.extensions.code = _code3;
            throw _error3;

          case 32:
            _context5.next = 34;
            return prisma.user({
              email: email
            });

          case 34:
            user = _context5.sent;
            _context5.next = 37;
            return _bcryptjs["default"].compare(oldPassword, user.password);

          case 37:
            validPassword = _context5.sent;

            if (validPassword) {
              _context5.next = 43;
              break;
            }

            _errors$validation$em3 = _errors["default"].validation.emailPasswordIncorrect, _message4 = _errors$validation$em3.message, _code4 = _errors$validation$em3.code;
            _error4 = new _apolloServerCore.ValidationError(_message4);
            _error4.extensions.code = _code4;
            throw _error4;

          case 43:
            // Compares the old password with the new password
            // to make sure the user really changes the password
            areTheSame = oldPassword === newPassword;

            if (!areTheSame) {
              _context5.next = 49;
              break;
            }

            _errors$validation$ol = _errors["default"].validation.oldPasswordAndNewPasswordTheSame, _message5 = _errors$validation$ol.message, _code5 = _errors$validation$ol.code;
            _error5 = new _apolloServerCore.ForbiddenError(_message5);
            _error5.extensions.code = _code5;
            throw _error5;

          case 49:
            _context5.next = 51;
            return (0, _hashPassword["default"])(newPassword);

          case 51:
            newPasswordHash = _context5.sent;
            _context5.next = 54;
            return prisma.updateUser({
              data: {
                password: newPasswordHash
              },
              where: {
                email: user.email
              }
            });

          case 54:
            _context5.next = 56;
            return prisma.updateResetPasswordToken({
              data: {
                revoke: true
              },
              where: {
                token: token
              }
            });

          case 56:
            return _context5.abrupt("return", "<strong>Password successfully reset.</strong> You may now close this window.");

          case 57:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[8, 19]]);
  }));

  return function resetPassword(_x15, _x16, _x17, _x18) {
    return _ref14.apply(this, arguments);
  };
}();

exports.resetPassword = resetPassword;

var updateUser =
/*#__PURE__*/
function () {
  var _ref17 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(parent, _ref15, _ref16, info) {
    var data, userId, prisma, userExists, _errors$validation$us4, message, code, error, user;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            data = _ref15.data, userId = _ref15.userId;
            prisma = _ref16.prisma;
            _context6.next = 4;
            return prisma.$exists.user({
              id: userId
            });

          case 4:
            userExists = _context6.sent;

            if (userExists) {
              _context6.next = 10;
              break;
            }

            _errors$validation$us4 = _errors["default"].validation.userNotFound, message = _errors$validation$us4.message, code = _errors$validation$us4.code;
            error = new _apolloServerCore.ValidationError(message);
            error.extensions.code = code;
            throw error;

          case 10:
            _context6.next = 12;
            return prisma.updateUser({
              data: data,
              where: {
                id: userId
              }
            });

          case 12:
            user = _context6.sent;
            return _context6.abrupt("return", user);

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateUser(_x19, _x20, _x21, _x22) {
    return _ref17.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var deleteUser =
/*#__PURE__*/
function () {
  var _ref20 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(parent, _ref18, _ref19, info) {
    var userId, prisma, userExists, _errors$validation$us5, message, code, error, user;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            userId = _ref18.userId;
            prisma = _ref19.prisma;
            _context7.next = 4;
            return prisma.$exists.user({
              id: userId
            });

          case 4:
            userExists = _context7.sent;

            if (userExists) {
              _context7.next = 10;
              break;
            }

            _errors$validation$us5 = _errors["default"].validation.userNotFound, message = _errors$validation$us5.message, code = _errors$validation$us5.code;
            error = new _apolloServerCore.ValidationError(message);
            error.extensions.code = code;
            throw error;

          case 10:
            _context7.next = 12;
            return prisma.deleteUser({
              id: userId
            });

          case 12:
            user = _context7.sent;
            return _context7.abrupt("return", user);

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function deleteUser(_x23, _x24, _x25, _x26) {
    return _ref20.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;