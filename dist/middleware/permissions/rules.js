"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imTheOwner = exports.isWallpaperOwner = exports.isAdmin = void 0;

var _graphqlShield = require("graphql-shield");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isAdmin = (0, _graphqlShield.rule)()(
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(parent, args, _ref) {
    var userId, prisma, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = _ref.userId, prisma = _ref.prisma;
            _context.next = 3;
            return prisma.user({
              id: userId
            });

          case 3:
            user = _context.sent;
            return _context.abrupt("return", user.role === 'ADMIN');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}());
exports.isAdmin = isAdmin;
var isWallpaperOwner = (0, _graphqlShield.rule)()(
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(parent, _ref3, _ref4) {
    var wallpaperId, userId, prisma, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            wallpaperId = _ref3.wallpaperId;
            userId = _ref4.userId, prisma = _ref4.prisma;
            _context2.prev = 2;
            _context2.next = 5;
            return prisma.wallpaper({
              id: wallpaperId
            }).user();

          case 5:
            user = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);
            console.error(_context2.t0);

          case 11:
            return _context2.abrupt("return", userId === user.id);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}());
/**
 * Check if the resource (Ex: updateUser(), deleteUser()) in the DB belongs
 * to the user making the request
 */

exports.isWallpaperOwner = isWallpaperOwner;
var imTheOwner = (0, _graphqlShield.rule)()(
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(parent, args, _ref6, info) {
    var userId, prisma, user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            userId = _ref6.userId, prisma = _ref6.prisma;
            _context3.next = 3;
            return prisma.user({
              id: userId
            });

          case 3:
            user = _context3.sent;
            return _context3.abrupt("return", user.id === args.userId);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x7, _x8, _x9, _x10) {
    return _ref7.apply(this, arguments);
  };
}());
exports.imTheOwner = imTheOwner;