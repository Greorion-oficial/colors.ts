import color, {styles} from "./colors";

declare global {
    // noinspection JSUnusedGlobalSymbols
    interface String {
        strip: string;
        stripColors: string;
        bgBlack: string;
        bgBlue: string;
        bgCyan: string;
        bgGray: string;
        bgGreen: string;
        bgGrey: string;
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
        camelCase: string;
        upperCamelCase: string;
        lowerCamelCase: string;
        titleCase: string;
        snakeCase: string;
        kebabCase: string;
        studlyCaps: string;
    }
}

function stringify(colorStyle: string, func: () => string): any {
    return Object.defineProperty(String.prototype, colorStyle, {get: func, configurable: true});
}

stringify("strip", function(): string {
    return (color(this)).strip.toString();
});

stringify("capitalize", function(): string {
    return this[0].toUpperCase() + this.slice(1);
});

stringify("titleCase", function(): string {
    return this.split(" ").map((value: string) => {
        return value[0].toUpperCase() + value.slice(1).toLowerCase();
    }).join(" ");
});

stringify("upperCamelCase", function(): string {
    return this.titleCase.split(" ").join("");
});

stringify("lowerCamelCase", function(): string {
    const s: string = this.upperCamelCase;
    return s[0].toLowerCase() + s.slice(1);
});

stringify("camelCase", function(): string {
    return this.lowerCamelCase;
});

stringify("snakeCase", function(): string {
    return this.toLowerCase().split(" ").join("_");
});

stringify("kebabCase", function(): string {
    return this.toLowerCase().split(" ").join("-");
});

stringify("studlyCaps", function(): string {
    const s: string = this.camelCase.replace(" ", "");
    return s.split("").map((letter: string, index: number) => {
        if (index % 2 !== 0) {
            return letter.toLowerCase();
        } else {
            return letter.toUpperCase();
        }
    }).join("");
});

Object.keys(styles).forEach((styleName: string) => {
    stringify(styleName, function() {
        return color(this)[styleName].toString();
    });
});
