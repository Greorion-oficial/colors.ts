export interface Style {
    open: string;
    close: string;
    closeRe?: string;
}

export class Styles {
    public bgBlack: Style = {open: "\u001b[40m", close: "\u001b[49m"};
    public bgBlue: Style = {open: "\u001b[44m", close: "\u001b[49m"};
    public bgCyan: Style = {open: "\u001b[46m", close: "\u001b[49m"};
    public bgGreen: Style = {open: "\u001b[42m", close: "\u001b[49m"};
    public bgMagenta: Style = {open: "\u001b[45m", close: "\u001b[49m"};
    public bgRed: Style = {open: "\u001b[41m", close: "\u001b[49m"};
    public bgWhite: Style = {open: "\u001b[47m", close: "\u001b[49m"};
    public bgYellow: Style = {open: "\u001b[43m", close: "\u001b[49m"};
    public black: Style = {open: "\u001b[30m", close: "\u001b[39m"};
    public blue: Style = {open: "\u001b[34m", close: "\u001b[39m"};
    public bold: Style = {open: "\u001b[1m", close: "\u001b[22m"};
    public cyan: Style = {open: "\u001b[36m", close: "\u001b[39m"};
    public dim: Style = {open: "\u001b[2m", close: "\u001b[22m"};
    public gray: Style = {open: "\u001b[90m", close: "\u001b[39m"};
    public green: Style = {open: "\u001b[32m", close: "\u001b[39m"};
    public grey: Style = {open: "\u001b[90m", close: "\u001b[39m"};
    public hidden: Style = {open: "\u001b[8m", close: "\u001b[28m"};
    public inverse: Style = {open: "\u001b[7m", close: "\u001b[27m"};
    public italic: Style = {open: "\u001b[3m", close: "\u001b[23m"};
    public magenta: Style = {open: "\u001b[35m", close: "\u001b[39m"};
    public red: Style = {open: "\u001b[31m", close: "\u001b[39m"};
    public reset: Style = {open: "\u001b[0m", close: "\u001b[0m"};
    public strikethrough: Style = {open: "\u001b[9m", close: "\u001b[29m"};
    public underline: Style = {open: "\u001b[4m", close: "\u001b[24m"};
    public white: Style = {open: "\u001b[37m", close: "\u001b[39m"};
    public yellow: Style = {open: "\u001b[33m", close: "\u001b[39m"};
    constructor() {
        Object.keys(this).forEach((key: string) => {
            this[key].closeRe = new RegExp(this.escapeStringRegexp(this[key].close), "g");
        });
    }
    private escapeStringRegexp(str: string) {
        if (typeof str !== "string") {
            throw new TypeError("Expected a string");
        }
        return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    }
}
