"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = exports.user = void 0;

var _apolloServerCore = require("apollo-server-core");

var _errors = _interopRequireDefault(require("../../../errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var user =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(parent, _ref, _ref2, info) {
    var userId, prisma, userExists, _errors$validation$us, message, code, error, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = _ref.userId;
            prisma = _ref2.prisma;
            _context.next = 4;
            return prisma.$exists.user({
              id: userId
            });

          case 4:
            userExists = _context.sent;

            if (userExists) {
              _context.next = 10;
              break;
            }

            _errors$validation$us = _errors["default"].validation.userNotFound, message = _errors$validation$us.message, code = _errors$validation$us.code;
            error = new _apolloServerCore.ValidationError(message);
            error.extensions.code = code;
            throw error;

          case 10:
            _context.next = 12;
            return prisma.user({
              id: userId
            });

          case 12:
            user = _context.sent;
            return _context.abrupt("return", user);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function user(_x, _x2, _x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.user = user;

var users =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(parent, args, _ref4, info) {
    var prisma, users;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            prisma = _ref4.prisma;
            _context2.next = 3;
            return prisma.users();

          case 3:
            users = _context2.sent;
            return _context2.abrupt("return", users);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function users(_x5, _x6, _x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.users = users;