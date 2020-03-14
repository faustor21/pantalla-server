"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServerCore = require("apollo-server-core");

var _errors = _interopRequireDefault(require("../../../errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var code = _errors["default"].validation.inputError.code;

var _default = function _default(msg) {
  var error = new _apolloServerCore.ValidationError(msg);
  error.extensions.code = code;
  return error;
};

exports["default"] = _default;