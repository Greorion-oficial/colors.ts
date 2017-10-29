export interface Style {
    name: "trap" | "zalgo" | "zebra" | "rainbow" | "random" | "greenBG" | "magentaBG" | "whiteBG" | "america" | "bgBlack" | "bgBlue" | "bgCyan" | "bgGreen" | "bgMagenta" | "blackBG" | "yellowBG" | "bgRed" | "bgWhite" | "bgYellow" | "black" | "blue" | "bold" | "cyan" | "blueBG" | "dim" | "gray" | "green" | "grey" | "hidden" | "inverse" | "italic" | "cyanBG" | "redBG" | "magenta" | "red" | "reset" | "strikethrough" | "underline" | "white" | "yellow";
    open: string;
    close: string;
    closeRe?: string;
}
export declare class Styles {
    public bgBlack: Style;
    public bgBlue: Style;
    public bgCyan: Style;
    public bgGreen: Style;
    public bgMagenta: Style;
    public bgRed: Style;
    public bgWhite: Style;
    public bgYellow: Style;
    public black: Style;
    public blackBG: Style;
    public blue: Style;
    public blueBG: Style;
    public bold: Style;
    public cyan: Style;
    public cyanBG: Style;
    public dim: Style;
    public gray: Style;
    public green: Style;
    public greenBG: Style;
    public grey: Style;
    public hidden: Style;
    public inverse: Style;
    public italic: Style;
    public magenta: Style;
    public magentaBG: Style;
    public red: Style;
    public redBG: Style;
    public reset: Style;
    public strikethrough: Style;
    public underline: Style;
    public white: Style;
    public whiteBG: Style;
    public yellow: Style;
    public yellowBG: Style;
    constructor();
}
