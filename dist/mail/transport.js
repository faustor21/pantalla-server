"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gmail = exports.privateSmtp = exports.sendgrid = void 0;

var _nodemailerSendgridTransport = _interopRequireDefault(require("nodemailer-sendgrid-transport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Use only one Sendgrid configuration
var sendgridAuth = process.env.SENDGRID_API_KEY ? {
  api_key: process.env.SENDGRID_API_KEY
} : {
  api_user: process.env.SENDGRID_USERNAME,
  api_key: process.env.SENDGRID_PASSWORD
};
var sendgrid = (0, _nodemailerSendgridTransport["default"])({
  auth: _objectSpread({}, sendgridAuth)
}); // Your private SMTP server/provider

exports.sendgrid = sendgrid;
var privateSmtp = {
  host: process.env.MAIL_PRIVATE_HOST,
  port: process.env.MAIL_PRIVATE_PORT || 587,
  secure: process.env.MAIL_PRIVATE_SECURE || false,
  // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_PRIVATE_USER,
    pass: process.env.MAIL_PRIVATE_PASSWORD
  }
}; // For this to work you need to enable Less secure app access
// in your Gmail account.
// More info: https://nodemailer.com/usage/using-gmail/

exports.privateSmtp = privateSmtp;
var gmail = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD
  }
};
exports.gmail = gmail;