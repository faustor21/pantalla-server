"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.revokeToken = exports.renewAccessToken = exports.verifyDecodeJWTToken = exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _moment = _interopRequireDefault(require("moment"));

var _apolloServerCore = require("apollo-server-core");

var _errors = _interopRequireDefault(require("../../errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var forbidden = _errors["default"].forbidden;
/**
 * Verify and decodes a given JWT token
 *
 * @param {string} token - JWT Token
 * @returns {string} - User's id
 */

var verifyDecodeJWTToken = function verifyDecodeJWTToken(token) {
  _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);

  return _jsonwebtoken["default"].decode(token).userId;
};
/**
 * Generate a NEW accessToken and refreshToken
 * to be handle back to the user
 *
 * @param {object} prisma - Prisma client
 * @param {string} userId - The user's id
 * @returns {object} - Object with accessToken and refreshToken
 */


exports.verifyDecodeJWTToken = verifyDecodeJWTToken;

var generateToken = function generateToken(prisma, userId) {
  var accessToken = generateAccessToken(userId);
  return {
    accessToken: accessToken,
    refreshToken: generateRefreshToken(prisma, accessToken, userId)
  };
};
/**
 * Renew the Access Token that's expired
 *
 * @param {object} prisma - Prisma client
 * @param {string} refreshToken - The refreshToken object received from the client
 * @returns {object} - Object with { accessToken, refreshToken }
 */


exports.generateToken = generateToken;

var renewAccessToken =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(prisma, refreshToken) {
    var validRefreshToken, refreshTokenInvalidError, tokenOwner, accessToken;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isRefreshTokenValid(prisma, refreshToken);

          case 2:
            validRefreshToken = _context.sent;

            if (validRefreshToken) {
              _context.next = 7;
              break;
            }

            refreshTokenInvalidError = new _apolloServerCore.ForbiddenError(forbidden.invalidRefreshTokenError.message);
            refreshTokenInvalidError.extensions.code = forbidden.invalidRefreshTokenError.code;
            throw refreshTokenInvalidError;

          case 7:
            _context.next = 9;
            return prisma.refreshToken({
              id: validRefreshToken.id
            }).user();

          case 9:
            tokenOwner = _context.sent;
            accessToken = generateAccessToken(tokenOwner.id);
            _context.next = 13;
            return updateRefreshToken(prisma, {
              accessToken: accessToken
            }, refreshToken);

          case 13:
            return _context.abrupt("return", {
              accessToken: accessToken,
              refreshToken: refreshToken
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renewAccessToken(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Generate a new Access Token
 *
 * @param {string} userId
 */


exports.renewAccessToken = renewAccessToken;

var generateAccessToken = function generateAccessToken(userId) {
  return _jsonwebtoken["default"].sign({
    userId: userId
  }, process.env.JWT_SECRET, {
    expiresIn: '12 hours' // The amount of time the token will be valid 

  });
};
/**
 * This will create a New Refresh Token
 *
 * @param {object} prisma - Prisma client
 * @param {string} refreshToken - String refresh token
 */


var generateRefreshToken =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(prisma, accessToken, userId) {
    var _ref3, refreshToken;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return prisma.createRefreshToken({
              user: {
                connect: {
                  id: userId
                }
              },
              refreshToken: (0, _v["default"])(),
              expiresIn: (0, _moment["default"])().add(30, 'days').valueOf().toString(),
              // Expires in 30 days in milliseconds
              accessToken: accessToken
            });

          case 2:
            _ref3 = _context2.sent;
            refreshToken = _ref3.refreshToken;
            return _context2.abrupt("return", refreshToken);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function generateRefreshToken(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Verifies that the refresh token is valid.
 *
 * Checks if it has not being revoke and it's has not expired
 *
 * @param {object} prisma - Prisma client
 * @param {string} refreshToken - String refresh token
 * @returns {object|undefined} - If valid returns refresh token or undefined
 */


var isRefreshTokenValid =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(prisma, refreshToken) {
    var _ref5, _ref6, validRefreshToken, withinRange, now;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log('isRefreshTokenValid: refreshToken', refreshToken);
            _context3.next = 3;
            return prisma.refreshTokens({
              first: 1,
              where: {
                refreshToken: refreshToken,
                revoke: false
              }
            });

          case 3:
            _ref5 = _context3.sent;
            _ref6 = _slicedToArray(_ref5, 1);
            validRefreshToken = _ref6[0];

            if (validRefreshToken) {
              now = (0, _moment["default"])();
              withinRange = now.isBefore(parseInt(validRefreshToken.expiresIn));
              if (!withinRange) revokeToken(refreshToken);
            }

            if (!(!validRefreshToken || !withinRange)) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return");

          case 9:
            return _context3.abrupt("return", validRefreshToken);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function isRefreshTokenValid(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Update the refresh token in the DB with the new access token.
 *
 * @param {object} prisma - Prisma client
 * @param {object} data - Object with { accessToken, revoke }
 * @param {string} refreshToken - String refresh token to be updated
 */


var updateRefreshToken =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(prisma, _ref7, refreshToken) {
    var accessToken, revoke, updatedRefreshToken;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            accessToken = _ref7.accessToken, revoke = _ref7.revoke;
            _context4.next = 3;
            return prisma.updateRefreshToken({
              data: {
                accessToken: accessToken,
                revoke: revoke
              },
              where: {
                refreshToken: refreshToken
              }
            });

          case 3:
            updatedRefreshToken = _context4.sent;
            return _context4.abrupt("return", updatedRefreshToken);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateRefreshToken(_x8, _x9, _x10) {
    return _ref8.apply(this, arguments);
  };
}();
/**
 * Revoke provided refresh token
 *
 * @param {object} prisma - Prisma Client
 * @param {string} refreshToken - String refresh token
 */


var revokeToken =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(prisma, refreshToken) {
    var updatedRefreshToken;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            updatedRefreshToken = updateRefreshToken(prisma, {
              revoke: true
            }, refreshToken);
            return _context5.abrupt("return", updatedRefreshToken);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function revokeToken(_x11, _x12) {
    return _ref9.apply(this, arguments);
  };
}();

exports.revokeToken = revokeToken;