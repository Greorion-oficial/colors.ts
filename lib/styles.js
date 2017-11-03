"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Styles {
    constructor() {
        this.bgBlack = { open: "\u001b[40m", close: "\u001b[49m" };
        this.bgBlue = { open: "\u001b[44m", close: "\u001b[49m" };
        this.bgCyan = { open: "\u001b[46m", close: "\u001b[49m" };
        this.bgGreen = { open: "\u001b[42m", close: "\u001b[49m" };
        this.bgMagenta = { open: "\u001b[45m", close: "\u001b[49m" };
        this.bgRed = { open: "\u001b[41m", close: "\u001b[49m" };
        this.bgWhite = { open: "\u001b[47m", close: "\u001b[49m" };
        this.bgYellow = { open: "\u001b[43m", close: "\u001b[49m" };
        this.black = { open: "\u001b[30m", close: "\u001b[39m" };
        this.blue = { open: "\u001b[34m", close: "\u001b[39m" };
        this.bold = { open: "\u001b[1m", close: "\u001b[22m" };
        this.cyan = { open: "\u001b[36m", close: "\u001b[39m" };
        this.dim = { open: "\u001b[2m", close: "\u001b[22m" };
        this.gray = { open: "\u001b[90m", close: "\u001b[39m" };
        this.green = { open: "\u001b[32m", close: "\u001b[39m" };
        this.grey = { open: "\u001b[90m", close: "\u001b[39m" };
        this.hidden = { open: "\u001b[8m", close: "\u001b[28m" };
        this.inverse = { open: "\u001b[7m", close: "\u001b[27m" };
        this.italic = { open: "\u001b[3m", close: "\u001b[23m" };
        this.magenta = { open: "\u001b[35m", close: "\u001b[39m" };
        this.red = { open: "\u001b[31m", close: "\u001b[39m" };
        this.reset = { open: "\u001b[0m", close: "\u001b[0m" };
        this.strikethrough = { open: "\u001b[9m", close: "\u001b[29m" };
        this.underline = { open: "\u001b[4m", close: "\u001b[24m" };
        this.white = { open: "\u001b[37m", close: "\u001b[39m" };
        this.yellow = { open: "\u001b[33m", close: "\u001b[39m" };
        Object.keys(this).forEach((key) => {
            this[key].closeRe = new RegExp(this.escapeStringRegexp(this[key].close), "g");
        });
    }
    escapeStringRegexp(str) {
        if (typeof str !== "string") {
            throw new TypeError("Expected a string");
        }
        return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    }
}
exports.Styles = Styles;
//# sourceMappingURL=styles.js.map