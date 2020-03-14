"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteWallpaper = exports.createWallpaper = void 0;

var _apolloServerCore = require("apollo-server-core");

var _errors = _interopRequireDefault(require("../../../errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createWallpaper =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(parent, _ref, _ref2) {
    var _ref$data, source, wallpaperId, userId, prisma, wallpaperExist, _errors$validation$wa, message, code, error, wallpaper;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$data = _ref.data, source = _ref$data.source, wallpaperId = _ref$data.wallpaperId;
            userId = _ref2.userId, prisma = _ref2.prisma;
            _context.next = 4;
            return prisma.$exists.wallpaper({
              AND: [{
                source: source
              }, {
                wallpaperId: wallpaperId
              }, {
                user: {
                  id: userId
                }
              }]
            });

          case 4:
            wallpaperExist = _context.sent;

            if (!wallpaperExist) {
              _context.next = 10;
              break;
            }

            _errors$validation$wa = _errors["default"].validation.wallpaperExists, message = _errors$validation$wa.message, code = _errors$validation$wa.code;
            error = new _apolloServerCore.ValidationError(message);
            error.extensions.code = code;
            throw error;

          case 10:
            _context.next = 12;
            return prisma.createWallpaper({
              source: source,
              wallpaperId: wallpaperId,
              user: {
                connect: {
                  id: userId
                }
              }
            });

          case 12:
            wallpaper = _context.sent;
            return _context.abrupt("return", wallpaper);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createWallpaper(_x, _x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createWallpaper = createWallpaper;

var deleteWallpaper =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(parent, _ref4, _ref5, info) {
    var wallpaperId, prisma, wallpaperFound, _errors$validation$wa2, message, code, error, deletedWallpaper;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            wallpaperId = _ref4.wallpaperId;
            prisma = _ref5.prisma;
            _context2.next = 4;
            return prisma.$exists.wallpaper({
              id: wallpaperId
            });

          case 4:
            wallpaperFound = _context2.sent;

            if (wallpaperFound) {
              _context2.next = 10;
              break;
            }

            _errors$validation$wa2 = _errors["default"].validation.wallpaperNotFound, message = _errors$validation$wa2.message, code = _errors$validation$wa2.code;
            error = new _apolloServerCore.ValidationError(message);
            error.extensions.code = code;
            throw error;

          case 10:
            _context2.next = 12;
            return prisma.deleteWallpaper({
              id: wallpaperId
            });

          case 12:
            deletedWallpaper = _context2.sent;
            console.log(deletedWallpaper);
            return _context2.abrupt("return", deletedWallpaper);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function deleteWallpaper(_x4, _x5, _x6, _x7) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteWallpaper = deleteWallpaper;