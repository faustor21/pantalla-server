"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var User = {
  wallpapers: function wallpapers(parent, _, _ref) {
    var prisma = _ref.prisma;
    return prisma.user({
      id: parent.id
    }).wallpapers();
  }
};
var _default = User;
exports["default"] = _default;