"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(password) {
  if (password.length < 8) throw new Error('Password must be at least 8 characters long.');
  return _bcryptjs["default"].hash(password, 10);
};

exports["default"] = _default;