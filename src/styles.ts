export interface Style {
    name: "trap" | "zalgo" | "zebra" | "rainbow" | "random" | "greenBG" | "magentaBG" | "whiteBG" |
        "america" | "bgBlack" | "bgBlue" | "bgCyan" | "bgGreen" | "bgMagenta" | "blackBG" | "yellowBG" |
        "bgRed" | "bgWhite" | "bgYellow" | "black" | "blue" | "bold" | "cyan" | "blueBG" |
        "dim" | "gray" | "green" | "grey" | "hidden" | "inverse" | "italic" | "cyanBG" | "redBG" |
        "magenta" | "red" | "reset" | "strikethrough" | "underline" | "white" | "yellow";
    open: string;
    close: string;
    closeRe?: string;
}

function escapeStringRegexp(str: string) {
    if (typeof str !== "string") {
        throw new TypeError("Expected a string");
    }
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}

export class Styles {
    public bgBlack: Style = {name: "bgBlack", open: "\u001b[40m", close: "\u001b[49m"};
    public bgBlue: Style = {name: "bgBlue", open: "\u001b[44m", close: "\u001b[49m"};
    public bgCyan: Style = {name: "bgCyan", open: "\u001b[46m", close: "\u001b[49m"};
    public bgGreen: Style = {name: "bgGreen", open: "\u001b[42m", close: "\u001b[49m"};
    public bgMagenta: Style = {name: "bgMagenta", open: "\u001b[45m", close: "\u001b[49m"};
    public bgRed: Style = {name: "bgRed", open: "\u001b[41m", close: "\u001b[49m"};
    public bgWhite: Style = {name: "bgWhite", open: "\u001b[47m", close: "\u001b[49m"};
    public bgYellow: Style = {name: "bgYellow", open: "\u001b[43m", close: "\u001b[49m"};
    public black: Style = {name: "black", open: "\u001b[30m", close: "\u001b[39m"};
    public blackBG: Style = {name: "blackBG", open: "\u001b[40m", close: "\u001b[49m"}; // legacy
    public blue: Style = {name: "blue", open: "\u001b[34m", close: "\u001b[39m"};
    public blueBG: Style = {name: "blueBG", open: "\u001b[44m", close: "\u001b[49m"}; // legacy
    public bold: Style = {name: "bold", open: "\u001b[1m", close: "\u001b[22m"};
    public cyan: Style = {name: "cyan", open: "\u001b[36m", close: "\u001b[39m"};
    public cyanBG: Style = {name: "cyanBG", open: "\u001b[46m", close: "\u001b[49m"}; // legacy
    public dim: Style = {name: "dim", open: "\u001b[2m", close: "\u001b[22m"};
    public gray: Style = {name: "gray", open: "\u001b[90m", close: "\u001b[39m"};
    public green: Style = {name: "green", open: "\u001b[32m", close: "\u001b[39m"};
    public greenBG: Style = {name: "greenBG", open: "\u001b[42m", close: "\u001b[49m"}; // legacy
    public grey: Style = {name: "grey", open: "\u001b[90m", close: "\u001b[39m"};
    public hidden: Style = {name: "hidden", open: "\u001b[8m", close: "\u001b[28m"};
    public inverse: Style = {name: "inverse", open: "\u001b[7m", close: "\u001b[27m"};
    public italic: Style = {name: "italic", open: "\u001b[3m", close: "\u001b[23m"};
    public magenta: Style = {name: "magenta", open: "\u001b[35m", close: "\u001b[39m"};
    public magentaBG: Style = {name: "magentaBG", open: "\u001b[45m", close: "\u001b[49m"}; // legacy
    public red: Style = {name: "red", open: "\u001b[31m", close: "\u001b[39m"};
    public redBG: Style = {name: "redBG", open: "\u001b[41m", close: "\u001b[49m"}; // legacy
    public reset: Style = {name: "reset", open: "\u001b[0m", close: "\u001b[0m"};
    public strikethrough: Style = {name: "strikethrough", open: "\u001b[9m", close: "\u001b[29m"};
    public underline: Style = {name: "underline", open: "\u001b[4m", close: "\u001b[24m"};
    public white: Style = {name: "white", open: "\u001b[37m", close: "\u001b[39m"};
    public whiteBG: Style = {name: "whiteBG", open: "\u001b[47m", close: "\u001b[49m"}; // legacy
    public yellow: Style = {name: "yellow", open: "\u001b[33m", close: "\u001b[39m"};
    public yellowBG: Style = {name: "yellowBG", open: "\u001b[43m", close: "\u001b[49m"}; // legacy
    constructor() {
        Object.keys(this).forEach((key: string) => {
            this[key].closeRe = new RegExp(escapeStringRegexp(this[key].close), "g");
        });
    }
}
