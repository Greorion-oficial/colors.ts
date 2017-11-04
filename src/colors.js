"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*

 The MIT License (MIT)

 Original Library
 - Copyright (c) Marak Squires
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

 Additional Functionality
 - Copyright (c) Shadrack Ndacayisenga <shaselloiel@gmail.com> (shaselekings.com)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
var styles_1 = require("./styles");
var system_1 = require("./system");
exports.ansiStyles = new styles_1.Styles();
var Colors = /** @class */ (function () {
    function Colors() {
        var _this = this;
        this.strip = function (str) {
            return ("" + str).replace(/\x1B\[\d+m/g, "");
        };
        this.styles = new styles_1.Styles();
        this.ansiStyles = this.styles;
        this.enabled = system_1.System.colorSupported();
        this.init();
        this.stringify("strip", function () {
            return exports.colors.strip(this);
        });
        Object.keys(this.styles).forEach(function (styleName) {
            _this.stringify(styleName, function () {
                return exports.colors.stylize(this, styleName);
            });
        });
    }
    Colors.build = function (styleKeys) {
        var builder = Object.assign(function (str) {
            return Colors.applyStyle.apply(builder, arguments);
        }, { _styles: styleKeys });
        var ansStyleKeys = Object.keys(exports.ansiStyles);
        ansStyleKeys.forEach(function (key) {
            Object.defineProperty(builder, key, {
                get: function () {
                    return Colors.build(this._styles.concat(key));
                },
            });
        });
        return builder;
    };
    Colors.prototype.stylize = function (str, style) {
        var code = this.styles[style];
        var stylized;
        if (this.enabled) {
            stylized = code.open + str.replace(code.closeRe, code.open) + code.close;
        }
        else {
            stylized = "" + str;
        }
        return stylized;
    };
    Colors.prototype.stringify = function (color, func) {
        return Object.defineProperty(String.prototype, color, { get: func, configurable: true });
    };
    Colors.prototype.init = function () {
        var _this = this;
        var styleKeys = Object.keys(this.styles);
        styleKeys.forEach(function (name) {
            Object.defineProperty(_this, name, {
                get: function () {
                    return Colors.build([name]);
                },
            });
        });
    };
    Colors.applyStyle = function (args) {
        var str;
        if (args.length > 1) {
            str = Array.prototype.slice.call(args).join("");
        }
        if (system_1.System.colorSupported() || args.length !== 0 && String(arguments[0])) {
            var nestedStyles = this._styles;
            var i = nestedStyles.length;
            while (i !== 0) {
                i--;
                var name_1 = nestedStyles[i];
                var code = exports.ansiStyles[name_1];
                str = code.open + str.replace(code.closeRe, code.open) + code.close;
            }
        }
        return str;
    };
    return Colors;
}());
exports.Colors = Colors;
exports.colors = new Colors();
console.log(exports.colors.red.strikethrough.bgGreen("Live Test"));
console.log(exports.colors.white.strikethrough.bgGreen("Live Test"));
console.log("Live Test".white.italic.bgBlack);
console.log("Live Test".white.bgRed);
console.log("Live Test".white.bgGreen);
//# sourceMappingURL=colors.js.map