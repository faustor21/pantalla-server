"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServerCore = require("apollo-server-core");

var _token = require("../utils/security/token");

var _errors = _interopRequireDefault(require("../errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(resolve, parent, args, context, info) {
    var tokenExpiredError, headers, _headers$authorizatio, _headers$authorizatio2, token, authError, result;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tokenExpiredError = _errors["default"].authentication.tokenExpiredError;
            headers = context.request.request.headers;
            _context.prev = 2;
            _headers$authorizatio = headers.authorization.split(' '), _headers$authorizatio2 = _slicedToArray(_headers$authorizatio, 2), token = _headers$authorizatio2[1]; // Add the user's id so it can be access everywhere

            context.userId = (0, _token.verifyDecodeJWTToken)(token);
            _context.next = 14;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);

            if (!(_context.t0.name === 'TokenExpiredError')) {
              _context.next = 13;
              break;
            }

            authError = new _apolloServerCore.AuthenticationError(tokenExpiredError.message);
            authError.extensions.code = tokenExpiredError.code;
            return _context.abrupt("return", authError);

          case 13:
            return _context.abrupt("return", new _apolloServerCore.AuthenticationError('Not authorized'));

          case 14:
            _context.next = 16;
            return resolve(parent, args, context, info);

          case 16:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 7]]);
  }));

  return function (_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;