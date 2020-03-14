"use strict";

var _graphqlYoga = require("graphql-yoga");

var _prisma = _interopRequireDefault(require("./prisma"));

var _resolvers = require("./resolvers");

var _setupExpress = _interopRequireDefault(require("./setupExpress"));

var _authenticate = _interopRequireDefault(require("./middleware/authenticate"));

var _permissions = _interopRequireDefault(require("./middleware/permissions"));

var _input = _interopRequireDefault(require("./middleware/validations/input"));

var _applyMiddlewareTo = _interopRequireDefault(require("./utils/applyMiddlewareTo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authMiddleware = (0, _applyMiddlewareTo["default"])(_resolvers.resolvers, _authenticate["default"], ['createUser', 'login', 'renewUserAccessToken', 'requestResetPassword', 'resetPassword']);
var server = new _graphqlYoga.GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: _resolvers.resolvers,
  middlewares: [authMiddleware, _permissions["default"], _input["default"]],
  context: function context(request) {
    return {
      prisma: _prisma["default"],
      request: request
    };
  }
});
(0, _setupExpress["default"])(server.express, _prisma["default"]);
server.start(function (options) {
  return console.log("Server running on port ".concat(options.port));
});