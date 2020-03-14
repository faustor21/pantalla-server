"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * This function applies the middleware to every resolver that is not exclude explicitly.
 *
 * @param {array} resolvers - Application resolvers.
 * @param {function} middleware - The middleware that it's going to be apply
 * @param {array} excludeResolvers - The resolvers that the middleware are not going to be applied to.
 * @returns The object with the applied middleware
 */
var _default = function _default(resolvers, middleware, excludeResolvers) {
  var appliedTo = {};

  for (var _i = 0, _Object$entries = Object.entries(resolvers); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    appliedTo[key] = Object.keys(value).reduce(function (obj, v) {
      if (!excludeResolvers.includes(v)) obj[v] = middleware;
      return obj;
    }, {});
  }

  return appliedTo;
};

exports["default"] = _default;