"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("./User"));

var _Wallpaper = _interopRequireDefault(require("./Wallpaper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Our Custom Types
var _default = {
  User: _User["default"],
  Wallpaper: _Wallpaper["default"]
};
exports["default"] = _default;