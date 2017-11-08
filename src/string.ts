import color, {styles} from "./colors";

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
        capitalize: string;
        upperCamelCase: string;
        lowerCamelCase: string;
        title: string;
        snakeCase: string;
        kebabCase: string;
        StUdLyCaPs: string;
    }
}

function stringify(colorStyle: string, func: () => string): any {
    return Object.defineProperty(String.prototype, colorStyle, {get: func, configurable: true});
}

stringify("strip", function(): string {
    return (color(this)).strip.toString();
});

stringify("capitalize", function(): string {
    return this.split(" ").map((value: string) => {
        return value[0].toUpperCase() + value.slice(2);
    }).join(" ");
});

stringify("upperCamelCase", function(): string {
    return this.split(" ").map((value: string) => {
        return value[0].toUpperCase() + value.slice(2).toLowerCase();
    }).join("");
});

stringify("lowerCamelCase", function(): string {
    return this.upperCamelCase[0].toLowerCase();
});

stringify("title", function(): string {
    return this.split(" ").map((value: string) => {
        return value[0].toUpperCase() + value.slice(2).toLowerCase();
    }).join("");
});

stringify("snakeCase", function(): string {
    return this.toLowerCase().split(" ").join("_");
});

stringify("kebabCase", function(): string {
    return this.toLowerCase().split(" ").join("-");
});

stringify("StUdLyCaPs", function(): string {
    return this.split(" ").join("")
        .split("").map((letter: string) => {
        if ( letter in ["a", "e", "i", "o", "u"]) {
            return letter.toLowerCase();
        } else {
            return letter.toUpperCase();
        }
    });
});

Object.keys(styles).forEach((styleName: string) => {
    stringify(styleName, function() {
        return color(this)[styleName].toString();
    });
});
