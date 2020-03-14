"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Wallpaper = {
  user: function user(parent, args, _ref) {
    var prisma = _ref.prisma;
    return prisma.wallpaper({
      id: parent.id
    }).user();
  }
};
var _default = Wallpaper;
exports["default"] = _default;