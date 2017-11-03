export interface Style {
    open: string;
    close: string;
    closeRe?: string;
}
export declare class Styles {
    bgBlack: Style;
    bgBlue: Style;
    bgCyan: Style;
    bgGreen: Style;
    bgMagenta: Style;
    bgRed: Style;
    bgWhite: Style;
    bgYellow: Style;
    black: Style;
    blue: Style;
    bold: Style;
    cyan: Style;
    dim: Style;
    gray: Style;
    green: Style;
    grey: Style;
    hidden: Style;
    inverse: Style;
    italic: Style;
    magenta: Style;
    red: Style;
    reset: Style;
    strikethrough: Style;
    underline: Style;
    white: Style;
    yellow: Style;
    constructor();
    private escapeStringRegexp(str);
}
