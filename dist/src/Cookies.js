"use strict";
/**
 * Utility for retrieving and setting browser cookies.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Cookies = /** @class */ (function () {
    function Cookies() {
    }
    /**
     * Sets browser cookie
     */
    Cookies.prototype.setCookie = function (name, value, hours) {
        var expires = '';
        if (hours) {
            var date = new Date();
            date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
        return this;
    };
    Cookies.prototype.getCookie = function (name) {
        return '';
    };
    return Cookies;
}());
exports.Cookies = Cookies;
