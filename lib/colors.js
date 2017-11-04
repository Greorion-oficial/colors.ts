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
const styles_1 = require("./styles");
const system_1 = require("./system");
exports.ansiStyles = new styles_1.Styles();
class Colors {
    constructor() {
        this.strip = (str) => {
            return (`${str}`).replace(/\x1B\[\d+m/g, "");
        };
        this.styles = new styles_1.Styles();
        this.ansiStyles = this.styles;
        this.enabled = system_1.System.colorSupported();
        this.init();
        this.stringify("strip", function () {
            return exports.colors.strip(this);
        });
        Object.keys(this.styles).forEach((styleName) => {
            this.stringify(styleName, function () {
                return exports.colors.stylize(this, styleName);
            });
        });
    }
    static build(styleKeys) {
        const builder = Object.assign(function (str) {
            return Colors.applyStyle.apply(builder, arguments);
        }, { _styles: styleKeys });
        const ansStyleKeys = Object.keys(exports.ansiStyles);
        ansStyleKeys.forEach((key) => {
            Object.defineProperty(builder, key, {
                get() {
                    return Colors.build(this._styles.concat(key));
                },
            });
        });
        return builder;
    }
    stylize(str, style) {
        const code = this.styles[style];
        let stylized;
        if (this.enabled) {
            stylized = code.open + str.replace(code.closeRe, code.open) + code.close;
        }
        else {
            stylized = `${str}`;
        }
        return stylized;
    }
    stringify(color, func) {
        return Object.defineProperty(String.prototype, color, { get: func, configurable: true });
    }
    init() {
        const styleKeys = Object.keys(this.styles);
        styleKeys.forEach((name) => {
            Object.defineProperty(this, name, {
                get() {
                    return Colors.build([name]);
                },
            });
        });
    }
}
Colors.applyStyle = function (args) {
    let str;
    if (args.length > 1) {
        str = [...args].join("");
    }
    if (system_1.System.colorSupported() || args.length !== 0 && String(arguments[0])) {
        const nestedStyles = this._styles;
        let i = nestedStyles.length;
        while (i !== 0) {
            i--;
            const name = nestedStyles[i];
            const code = exports.ansiStyles[name];
            str = code.open + str.replace(code.closeRe, code.open) + code.close;
        }
    }
    return str;
};
exports.Colors = Colors;
exports.colors = new Colors();
console.log(exports.colors.red.strikethrough.bgGreen("Shadrack Ndacayisenga"));
console.log(exports.colors.white.strikethrough.bgGreen("Shadrack Ndacayisenga"));
console.log("Shadrack Ndacayisenga".white.italic.bgBlack);
console.log("Shadrack Ndacayisenga".white.bgRed);
console.log("Shadrack Ndacayisenga".white.bgGreen);
//# sourceMappingURL=colors.js.map