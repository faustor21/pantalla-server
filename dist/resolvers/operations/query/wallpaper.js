"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopularWallpapers = exports.searchForWallpapers = exports.getAllWallpapers = exports.getAllUserWallpapers = exports.wallpaper = void 0;

var _apolloServerCore = require("apollo-server-core");

var _errors = _interopRequireDefault(require("../../../errors"));

var pexels = _interopRequireWildcard(require("../../../api/pexels"));

var pexelsUtils = _interopRequireWildcard(require("../../../utils/api/pexels"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var wallpaper =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(parent, _ref, _ref2, info) {
    var wallpaperId, userId, prisma, wallpaperFound, _errors$validation$wa, message, code, error, wallpaper;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            wallpaperId = _ref.wallpaperId;
            userId = _ref2.userId, prisma = _ref2.prisma;
            _context.next = 4;
            return prisma.$exists.wallpaper({
              id: wallpaperId
            });

          case 4:
            wallpaperFound = _context.sent;

            if (wallpaperFound) {
              _context.next = 10;
              break;
            }

            _errors$validation$wa = _errors["default"].validation.wallpaperNotFound, message = _errors$validation$wa.message, code = _errors$validation$wa.code;
            error = new _apolloServerCore.ValidationError(message);
            error.extensions.code = code;
            throw error;

          case 10:
            _context.next = 12;
            return prisma.wallpaper({
              id: wallpaperId
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

  return function wallpaper(_x, _x2, _x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}(); // Get all wallpapers liked or rated by the logged user 


exports.wallpaper = wallpaper;

var getAllUserWallpapers =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(parent, args, _ref4, info) {
    var userId, prisma, wallpapers;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userId = _ref4.userId, prisma = _ref4.prisma;
            _context2.next = 3;
            return prisma.wallpapers({
              where: {
                user: {
                  id: userId
                }
              }
            });

          case 3:
            wallpapers = _context2.sent;
            return _context2.abrupt("return", wallpapers);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllUserWallpapers(_x5, _x6, _x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getAllUserWallpapers = getAllUserWallpapers;

var getAllWallpapers =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(parent, args, _ref6) {
    var prisma, wallpapers;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            prisma = _ref6.prisma;
            _context3.next = 3;
            return prisma.wallpapers();

          case 3:
            wallpapers = _context3.sent;
            return _context3.abrupt("return", wallpapers);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getAllWallpapers(_x9, _x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}(); // 3rd Party APIs calls


exports.getAllWallpapers = getAllWallpapers;

var searchForWallpapers =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(parent, _ref8) {
    var data, query, page, perPage, result, wallpapers;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            data = _ref8.data;
            query = data.query, page = data.page, perPage = data.perPage;
            _context4.next = 4;
            return pexels.search(query, page, perPage);

          case 4:
            result = _context4.sent;
            wallpapers = pexelsUtils.convertResults(result.data.photos);
            return _context4.abrupt("return", wallpapers);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function searchForWallpapers(_x12, _x13) {
    return _ref9.apply(this, arguments);
  };
}();

exports.searchForWallpapers = searchForWallpapers;

var getPopularWallpapers =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(parent, _ref10) {
    var data, page, perPage, result, wallpapers;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            data = _ref10.data;
            page = data ? data.page : 1;
            perPage = data ? data.perPage : 15;
            _context5.next = 5;
            return pexels.popularPhotos(page, perPage);

          case 5:
            result = _context5.sent;
            wallpapers = pexelsUtils.convertResults(result.data.photos);
            return _context5.abrupt("return", wallpapers);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getPopularWallpapers(_x14, _x15) {
    return _ref11.apply(this, arguments);
  };
}();

exports.getPopularWallpapers = getPopularWallpapers;