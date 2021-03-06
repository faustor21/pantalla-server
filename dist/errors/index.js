"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getException = void 0;
var errors = {
  authentication: {
    tokenExpiredError: {
      message: "Token Has Expired",
      code: "TokenExpiredError"
    }
  },
  forbidden: {
    invalidRefreshTokenError: {
      message: "Invalid or revoked refresh token",
      code: "InvalidRefreshToken"
    },
    revokedResetPasswordTokenError: {
      message: "Revoked reset password token",
      code: "InvalidResetPasswordToken"
    }
  },
  validation: {
    inputError: {
      code: "InputError"
    },
    wallpaperExists: {
      message: "Already Rated Wallpaper",
      code: "WallpaperExists"
    },
    wallpaperNotFound: {
      message: "Wallpaper Not Found",
      code: "WallpaperNotFound"
    },
    userEmailExists: {
      message: "E-mail already exists in our records",
      code: "UserEmailExists"
    },
    userEmailNotValidated: {
      message: "This user's email/account has not been validated, please proceed to do so",
      code: "EmailAccountNotValidated"
    },
    passwordIncorrectLength: {
      message: "Password must be at least 8 characters long",
      code: "PasswordLengthIncorrect"
    },
    emailPasswordIncorrect: {
      message: "E-mail or password incorrect",
      code: "EmailOrPasswordIncorrect"
    },
    oldPasswordAndNewPasswordTheSame: {
      message: "Old password and new password can not be the same",
      code: "OldPasswordAndNewPasswordTheSame"
    },
    userNotFound: {
      message: "User not found",
      code: "UserNotFound"
    }
  }
};
exports["default"] = errors;

var getException = function getException(type, name, ClassName) {
  var _errors$type$name = errors[type][name],
      message = _errors$type$name.message,
      code = _errors$type$name.code;
  var error = new ClassName(message);
  error.extensions.code = code;
  return error;
};

exports.getException = getException;