"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function escapeStringRegexp(str) {
    if (typeof str !== "string") {
        throw new TypeError("Expected a string");
    }
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class Styles {
    constructor() {
        this.bgBlack = { name: "bgBlack", open: "\u001b[40m", close: "\u001b[49m" };
        this.bgBlue = { name: "bgBlue", open: "\u001b[44m", close: "\u001b[49m" };
        this.bgCyan = { name: "bgCyan", open: "\u001b[46m", close: "\u001b[49m" };
        this.bgGreen = { name: "bgGreen", open: "\u001b[42m", close: "\u001b[49m" };
        this.bgMagenta = { name: "bgMagenta", open: "\u001b[45m", close: "\u001b[49m" };
        this.bgRed = { name: "bgRed", open: "\u001b[41m", close: "\u001b[49m" };
        this.bgWhite = { name: "bgWhite", open: "\u001b[47m", close: "\u001b[49m" };
        this.bgYellow = { name: "bgYellow", open: "\u001b[43m", close: "\u001b[49m" };
        this.black = { name: "black", open: "\u001b[30m", close: "\u001b[39m" };
        this.blackBG = { name: "blackBG", open: "\u001b[40m", close: "\u001b[49m" }; // legacy
        this.blue = { name: "blue", open: "\u001b[34m", close: "\u001b[39m" };
        this.blueBG = { name: "blueBG", open: "\u001b[44m", close: "\u001b[49m" }; // legacy
        this.bold = { name: "bold", open: "\u001b[1m", close: "\u001b[22m" };
        this.cyan = { name: "cyan", open: "\u001b[36m", close: "\u001b[39m" };
        this.cyanBG = { name: "cyanBG", open: "\u001b[46m", close: "\u001b[49m" }; // legacy
        this.dim = { name: "dim", open: "\u001b[2m", close: "\u001b[22m" };
        this.gray = { name: "gray", open: "\u001b[90m", close: "\u001b[39m" };
        this.green = { name: "green", open: "\u001b[32m", close: "\u001b[39m" };
        this.greenBG = { name: "greenBG", open: "\u001b[42m", close: "\u001b[49m" }; // legacy
        this.grey = { name: "grey", open: "\u001b[90m", close: "\u001b[39m" };
        this.hidden = { name: "hidden", open: "\u001b[8m", close: "\u001b[28m" };
        this.inverse = { name: "inverse", open: "\u001b[7m", close: "\u001b[27m" };
        this.italic = { name: "italic", open: "\u001b[3m", close: "\u001b[23m" };
        this.magenta = { name: "magenta", open: "\u001b[35m", close: "\u001b[39m" };
        this.magentaBG = { name: "magentaBG", open: "\u001b[45m", close: "\u001b[49m" }; // legacy
        this.red = { name: "red", open: "\u001b[31m", close: "\u001b[39m" };
        this.redBG = { name: "redBG", open: "\u001b[41m", close: "\u001b[49m" }; // legacy
        this.reset = { name: "reset", open: "\u001b[0m", close: "\u001b[0m" };
        this.strikethrough = { name: "strikethrough", open: "\u001b[9m", close: "\u001b[29m" };
        this.underline = { name: "underline", open: "\u001b[4m", close: "\u001b[24m" };
        this.white = { name: "white", open: "\u001b[37m", close: "\u001b[39m" };
        this.whiteBG = { name: "whiteBG", open: "\u001b[47m", close: "\u001b[49m" }; // legacy
        this.yellow = { name: "yellow", open: "\u001b[33m", close: "\u001b[39m" };
        this.yellowBG = { name: "yellowBG", open: "\u001b[43m", close: "\u001b[49m" }; // legacy
        Object.keys(this).forEach((key) => {
            this[key].closeRe = new RegExp(escapeStringRegexp(this[key].close), "g");
        });
    }
}
exports.Styles = Styles;
//# sourceMappingURL=styles.js.map