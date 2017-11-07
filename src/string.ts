import {colors, styles} from "./colors";

declare global {
    // noinspection JSUnusedGlobalSymbols
    interface String {
        strip: string;
        stripColors: string;
        bgBlack: string;
        bgBlue: string;
        bgCyan: string;
        bgGreen: string;
        bgMagenta: string;
        bgRed: string;
        bgWhite: string;
        bgYellow: string;
        black: string;
        blue: string;
        bold: string;
        cyan: string;
        dim: string;
        gray: string;
        green: string;
        grey: string;
        hidden: string;
        inverse: string;
        italic: string;
        magenta: string;
        red: string;
        reset: string;
        strikethrough: string;
        underline: string;
        white: string;
        yellow: string;
    }
}

function stringify(color: string, func: () => string): any {
    return Object.defineProperty(String.prototype, color, {get: func, configurable: true});
}

stringify("strip", function(): string {
    return (colors(this)).strip.toString();
});

Object.keys(styles).forEach((styleName: string) => {
    stringify(styleName, function() {
        return colors(this)[styleName] + "";
    });
});
