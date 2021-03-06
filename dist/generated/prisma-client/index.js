"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var prisma_lib_1 = require("prisma-client-lib");

var typeDefs = require("./prisma-schema").typeDefs;

var models = [{
  name: "User",
  embedded: false
}, {
  name: "Wallpaper",
  embedded: false
}, {
  name: "RefreshToken",
  embedded: false
}, {
  name: "ResetPasswordToken",
  embedded: false
}, {
  name: "Role",
  embedded: false
}, {
  name: "Source",
  embedded: false
}];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs: typeDefs,
  models: models,
  endpoint: "".concat(process.env["PRISMA_ENDPOINT"]),
  secret: "".concat(process.env["PRISMA_SECRET"])
});
exports.prisma = new exports.Prisma();