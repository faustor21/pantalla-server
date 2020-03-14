"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popularPhotos = exports.search = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var instance = _axios["default"].create({
  baseURL: 'https://api.pexels.com/v1',
  timeout: 2000,
  headers: {
    Authorization: process.env.PEXELS_API_KEY
  }
});

var search =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(query) {
    var page,
        perPage,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
            perPage = _args.length > 2 && _args[2] !== undefined ? _args[2] : 15;
            return _context.abrupt("return", instance.get("/search?query=".concat(query, "&per_page=").concat(perPage, "&page=").concat(page)));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function search(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.search = search;

var popularPhotos =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var page,
        perPage,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
            perPage = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 15;
            return _context2.abrupt("return", instance.get("/popular?per_page=".concat(perPage, "&page=").concat(page)));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function popularPhotos() {
    return _ref2.apply(this, arguments);
  };
}();

exports.popularPhotos = popularPhotos;