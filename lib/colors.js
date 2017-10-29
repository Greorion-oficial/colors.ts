"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*

The MIT License (MIT)

Original Library
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

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
const process_1 = require("process");
const styles_1 = require("./styles");
class Colors {
    constructor() {
        this.styles = new styles_1.Styles();
        this.stripColors = Colors.strip;
        this.enabled = Colors.supportsColors();
    }
    static supportsColors() {
        if (process_1.argv.indexOf("--no-color") !== -1 ||
            process_1.argv.indexOf("--color=false") !== -1) {
            return false;
        }
        if (process_1.argv.indexOf("--color") !== -1 ||
            process_1.argv.indexOf("--color=true") !== -1 ||
            process_1.argv.indexOf("--color=always") !== -1) {
            return true;
        }
        if (process.stdout && !process.stdout.isTTY) {
            return true;
        }
        if (process.platform === "win32") {
            return true;
        }
        if ("COLORTERM" in process.env) {
            return true;
        }
        if (process.env.TERM === "dumb") {
            return false;
        }
        return /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM);
    }
    static strip(str) {
        return ("" + str).replace(/\x1B\[\d+m/g, "");
    }
    stylize(str, style) {
        if (!this.enabled) {
            return str + "";
        }
        const code = this.styles[style];
        return code.open + str.replace(code.closeRe, code.open) + code.close;
    }
}
exports.Colors = Colors;
exports.colors = new Colors();
String.prototype.strip = function () {
    return Colors.strip(this);
};
String.prototype.stripColors = function () {
    return Colors.strip(this);
};
String.prototype.bgBlack = function () {
    return exports.colors.stylize(this, "bgBlack");
};
String.prototype.bgBlue = function () {
    return exports.colors.stylize(this, "bgBlue");
};
String.prototype.bgCyan = function () {
    return exports.colors.stylize(this, "bgCyan");
};
String.prototype.bgGreen = function () {
    return exports.colors.stylize(this, "bgGreen");
};
String.prototype.bgMagenta = function () {
    return exports.colors.stylize(this, "bgMagenta");
};
String.prototype.bgRed = function () {
    return exports.colors.stylize(this, "bgRed");
};
String.prototype.bgWhite = function () {
    return exports.colors.stylize(this, "bgWhite");
};
String.prototype.bgYellow = function () {
    return exports.colors.stylize(this, "bgYellow");
};
String.prototype.black = function () {
    return exports.colors.stylize(this, "black");
};
String.prototype.blackBG = function () {
    return exports.colors.stylize(this, "blackBG");
}; // legacy
String.prototype.blue = function () {
    return exports.colors.stylize(this, "blue");
};
String.prototype.blueBG = function () {
    return exports.colors.stylize(this, "blueBG");
}; // legacy
String.prototype.bold = function () {
    return exports.colors.stylize(this, "bold");
};
String.prototype.cyan = function () {
    return exports.colors.stylize(this, "cyan");
};
String.prototype.cyanBG = function () {
    return exports.colors.stylize(this, "cyanBG");
}; // legacy
String.prototype.dim = function () {
    return exports.colors.stylize(this, "dim");
};
String.prototype.gray = function () {
    return exports.colors.stylize(this, "gray");
};
String.prototype.green = function () {
    return exports.colors.stylize(this, "green");
};
String.prototype.greenBG = function () {
    return exports.colors.stylize(this, "greenBG");
}; // legacy
String.prototype.grey = function () {
    return exports.colors.stylize(this, "grey");
};
String.prototype.hidden = function () {
    return exports.colors.stylize(this, "hidden");
};
String.prototype.inverse = function () {
    return exports.colors.stylize(this, "inverse");
};
String.prototype.italic = function () {
    return exports.colors.stylize(this, "italic");
};
String.prototype.magenta = function () {
    return exports.colors.stylize(this, "magenta");
};
String.prototype.magentaBG = function () {
    return exports.colors.stylize(this, "magentaBG");
}; // legacy
String.prototype.red = function () {
    return exports.colors.stylize(this, "red");
};
String.prototype.redBG = function () {
    return exports.colors.stylize(this, "redBG");
}; // legacy
String.prototype.reset = function () {
    return exports.colors.stylize(this, "reset");
};
String.prototype.strikethrough = function () {
    return exports.colors.stylize(this, "strikethrough");
};
String.prototype.underline = function () {
    return exports.colors.stylize(this, "underline");
};
String.prototype.white = function () {
    return exports.colors.stylize(this, "white");
};
String.prototype.whiteBG = function () {
    return exports.colors.stylize(this, "whiteBG");
}; // legacy
String.prototype.yellow = function () {
    return exports.colors.stylize(this, "yellow");
};
String.prototype.yellowBG = function () {
    return exports.colors.stylize(this, "yellowBG");
}; // legacy
//# sourceMappingURL=colors.js.map