/*

 The MIT License (MIT)

 Original Library
 - Copyright (c) Marak Squires
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

 Additional Functionality
 - Copyright (c) Shadrack Ndacayisenga <shaselloiel@gmail.com> (shaselekings.com)

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
import {Style, Styles} from "./styles";
import {System} from "./system";

export const ansiStyles: Styles = new Styles();
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

export interface Stylettes {
    (str: string): string;

    bgBlue?: Stylettes;
    bgCyan?: Stylettes;
    bgGreen?: Stylettes;
    bgMagenta?: Stylettes;
    bgRed?: Stylettes;
    bgWhite?: Stylettes;
    bgYellow?: Stylettes;
    black?: Stylettes;
    blue?: Stylettes;
    bold?: Stylettes;
    cyan?: Stylettes;
    dim?: Stylettes;
    gray?: Stylettes;
    green?: Stylettes;
    grey?: Stylettes;
    hidden?: Stylettes;
    inverse?: Stylettes;
    italic?: Stylettes;
    magenta?: Stylettes;
    red?: Stylettes;
    reset?: Stylettes;
    strikethrough?: Stylettes;
    underline?: Stylettes;
    white?: Stylettes;
    yellow?: Stylettes;
    _styles: Array<keyof Styles>;

    toString(): string;
}

export class Colors {
    private static build(styleKeys: Array<keyof Styles>) {
        const builder: Stylettes = (Object as any).assign(function(str: string): string {
            return Colors.applyStyle.apply(builder, arguments);
        }, {_styles: styleKeys});
        const ansStyleKeys: Array<keyof Styles> = Object.keys(ansiStyles) as Array<keyof Styles>;
        ansStyleKeys.forEach((key) => {
            Object.defineProperty(builder, key, {
                get() {
                    return Colors.build(this._styles.concat(key));
                },
            });
        });
        return builder;
    }

    private static applyStyle: (args: string[]) => string = function(args: string[]): string {
        let str: string;
        if (args.length > 1) {
            str = Array.prototype.slice.call(args).join("");
        }

        if (System.colorSupported() || args.length !== 0 && String(arguments[0])) {
            const nestedStyles: string[] = this._styles;
            let i: number = nestedStyles.length;
            while (i !== 0) {
                i--;
                const name: string = nestedStyles[i];
                const code: any = ansiStyles[name];
                str = code.open + str.replace(code.closeRe, code.open) + code.close;
            }
        }

        return str;
    };
    public bgBlack: Stylettes;
    public bgBlue: Stylettes;
    public bgCyan: Stylettes;
    public bgGreen: Stylettes;
    public bgMagenta: Stylettes;
    public bgRed: Stylettes;
    public bgWhite: Stylettes;
    public bgYellow: Stylettes;
    public black: Stylettes;
    public blue: Stylettes;
    public bold: Stylettes;
    public cyan: Stylettes;
    public dim: Stylettes;
    public gray: Stylettes;
    public green: Stylettes;
    public grey: Stylettes;
    public inverse: Stylettes;
    public italic: Stylettes;
    public magenta: Stylettes;
    public red: Stylettes;
    public strikethrough: Stylettes;
    public underline: Stylettes;
    public white: Stylettes;
    public yellow: Stylettes;
    private ansiStyles;
    private styles: Styles;
    private enabled: boolean;

    constructor() {
        this.styles = new Styles();
        this.ansiStyles = this.styles;
        this.enabled = System.colorSupported();
        this.init();
        this.stringify("strip", function(): string {
            return colors.strip(this);
        });

        Object.keys(this.styles).forEach((styleName: keyof Styles) => {
            this.stringify(styleName, function(this) {
                return colors.stylize(this, styleName);
            });
        });
    }

    public strip: (str: string) => string = (str: string): string => {
        return (`${str}`).replace(/\x1B\[\d+m/g, "");
    }

    public stylize(str: string, style: keyof Styles): string {
        const code: Style = this.styles[style];
        let stylized: string;
        if (this.enabled) {
            stylized = code.open + str.replace(code.closeRe, code.open) + code.close;
        } else {
            stylized = `${str}`;
        }
        return stylized;
    }
    public stringify(color: string, func: () => string): any {
        return Object.defineProperty(String.prototype, color, {get: func, configurable: true});
    }

    private init(): void {
        const styleKeys: Array<keyof Styles> = Object.keys(this.styles) as Array<keyof Styles>;
        styleKeys.forEach((name: keyof Styles) => {
            Object.defineProperty(this, name, {
                get() {
                    return Colors.build([name]);
                },
            });
        });
    }
}

export const colors: Colors = new Colors();
console.log(colors.red.strikethrough.bgGreen("Live Test"));
console.log(colors.white.strikethrough.bgGreen("Live Test"));

console.log("Live Test".white.italic.bgBlack);
console.log("Live Test".white.bgRed);
console.log("Live Test".white.bgGreen);
