"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var htmlPagesPath = _path["default"].join(__dirname, "public"); // This is the place where to put "Restricted" HTML pages
// to be send upon request


var htmlPagesRestrictedPath = _path["default"].join(__dirname, "restricted");

var _default = function _default(app, prisma) {
  app.use(_express["default"]["static"](htmlPagesPath));
  app.get("/verify/:token",
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var token, _ref2, email, exists, accountVerified;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = req.params.token;
              _context.prev = 1;
              _context.next = 4;
              return _jsonwebtoken["default"].verify(token, process.env.MAIL_JWT_SECRET);

            case 4:
              _ref2 = _context.sent;
              email = _ref2.email;
              _context.next = 8;
              return prisma.$exists.user({
                email: email
              });

            case 8:
              exists = _context.sent;

              if (exists) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", res.status(400).send({
                error: {
                  message: "Account could not be verified, please contact support!"
                }
              }));

            case 11:
              _context.next = 13;
              return prisma.$exists.user({
                email: email,
                verified: true
              });

            case 13:
              accountVerified = _context.sent;
              if (accountVerified) res.status(400).send({
                error: {
                  message: "This link has expired or the account has already been verified"
                }
              });
              _context.next = 17;
              return prisma.updateUser({
                data: {
                  verified: true
                },
                where: {
                  email: email
                }
              });

            case 17:
              res.redirect("/verify/".concat(email, "/successful"));
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](1);
              res.status(400).send({
                error: _objectSpread({}, _context.t0)
              });

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 20]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  app.get("/verify/:email/successful", function (req, res) {
    res.sendFile("".concat(htmlPagesPath, "/verification-successful.html"));
  });
  app.get("/reset/:email/password/:token",
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res, next) {
      var _req$params, email, token, decoded, userExists, user, _ref4, _ref5, resetPasswordToken;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$params = req.params, email = _req$params.email, token = _req$params.token;
              _context2.prev = 1;
              _context2.next = 4;
              return _jsonwebtoken["default"].verify(token, process.env.MAIL_JWT_SECRET);

            case 4:
              decoded = _context2.sent;
              _context2.next = 7;
              return prisma.$exists.user({
                email: email
              });

            case 7:
              userExists = _context2.sent;

              if (!(decoded.email !== email || !userExists)) {
                _context2.next = 10;
                break;
              }

              throw new Error("Credentials do not match, the password cannot be reset.");

            case 10:
              _context2.next = 12;
              return prisma.user({
                email: email
              });

            case 12:
              user = _context2.sent;
              _context2.next = 15;
              return prisma.resetPasswordTokens({
                where: {
                  user: {
                    id: user.id
                  },
                  AND: {
                    token: token,
                    revoke: false
                  }
                }
              });

            case 15:
              _ref4 = _context2.sent;
              _ref5 = _slicedToArray(_ref4, 1);
              resetPasswordToken = _ref5[0];

              if (!resetPasswordToken) {
                _context2.next = 22;
                break;
              }

              res.sendFile("".concat(htmlPagesRestrictedPath, "/reset-password.html"));
              _context2.next = 25;
              break;

            case 22:
              _context2.next = 24;
              return prisma.updateResetPasswordToken({
                data: {
                  revoke: true
                },
                where: {
                  token: token
                }
              });

            case 24:
              res.redirect("/invalid.html");

            case 25:
              _context2.next = 33;
              break;

            case 27:
              _context2.prev = 27;
              _context2.t0 = _context2["catch"](1);
              console.error("The error", _context2.t0);
              _context2.next = 32;
              return prisma.updateResetPasswordToken({
                data: {
                  revoke: true
                },
                where: {
                  token: token
                }
              });

            case 32:
              res.status(400).redirect("/invalid.html");

            case 33:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 27]]);
    }));

    return function (_x3, _x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }());
};

exports["default"] = _default;