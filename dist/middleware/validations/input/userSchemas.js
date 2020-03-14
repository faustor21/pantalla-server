"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _inputError = _interopRequireDefault(require("./inputError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// User's input validations for mutations and queries goes here
var email = _joi["default"].string().email({
  minDomainSegments: 2
}).error(function (errors) {
  return (0, _inputError["default"])('Must be a valid email');
}).required();

var password = _joi["default"].string().pattern(/^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_]{8,}$/).error(function (errors) {
  return (0, _inputError["default"])('Password must be valid and at least 8 characters long');
}).required(); // Schemas


var createUser = _joi["default"].object({
  name: _joi["default"].string().pattern(new RegExp("^[\\p{L}\\s'\"\\-_&@!?()]{3,60}$", 'u')).error(function (errors) {
    return (0, _inputError["default"])('Must be a valid name');
  }).required(),
  email: email,
  password: password,
  repeatPassword: _joi["default"].string().custom(function (value, helpers) {
    if (helpers.state.ancestors[0].password === value) return value;
    return helpers.error('any.invalid');
  }).error(function (errors) {
    return (0, _inputError["default"])('Repeat Password must be the same as Password');
  }),
  birthYear: _joi["default"].number().integer().min(1900).max(2013).required()
})["with"]('username', 'birthYear')["with"]('password', 'repeatPassword');

var login = _joi["default"].object({
  email: email,
  password: password
});

var _default = {
  createUser: createUser,
  login: login
};
exports["default"] = _default;