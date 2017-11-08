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
import {System} from "./system";

export interface Style {
    open: string;
    close: string;
    closeRe?: RegExp;
}

export const styles: { [key: string]: Style } = {
    bgBlack: {open: "\u001b[40m", close: "\u001b[49m"},
    bgBlue: {open: "\u001b[44m", close: "\u001b[49m"},
    bgCyan: {open: "\u001b[46m", close: "\u001b[49m"},
    bgGray: {open: "\u001b[90m", close: "\u001b[49m"},
    bgGreen: {open: "\u001b[42m", close: "\u001b[49m"},
    bgGrey: {open: "\u001b[90m", close: "\u001b[49m"},
    bgMagenta: {open: "\u001b[45m", close: "\u001b[49m"},
    bgRed: {open: "\u001b[41m", close: "\u001b[49m"},
    bgWhite: {open: "\u001b[47m", close: "\u001b[49m"},
    bgYellow: {open: "\u001b[43m", close: "\u001b[49m"},
    black: {open: "\u001b[30m", close: "\u001b[39m"},
    blue: {open: "\u001b[34m", close: "\u001b[39m"},
    bold: {open: "\u001b[1m", close: "\u001b[22m"},
    cyan: {open: "\u001b[36m", close: "\u001b[39m"},
    dim: {open: "\u001b[2m", close: "\u001b[22m"},
    gray: {open: "\u001b[90m", close: "\u001b[39m"},
    green: {open: "\u001b[32m", close: "\u001b[39m"},
    grey: {open: "\u001b[90m", close: "\u001b[39m"},
    hidden: {open: "\u001b[8m", close: "\u001b[28m"},
    inverse: {open: "\u001b[7m", close: "\u001b[27m"},
    italic: {open: "\u001b[3m", close: "\u001b[23m"},
    magenta: {open: "\u001b[35m", close: "\u001b[39m"},
    red: {open: "\u001b[31m", close: "\u001b[39m"},
    reset: {open: "\u001b[0m", close: "\u001b[0m"},
    strikethrough: {open: "\u001b[9m", close: "\u001b[29m"},
    underline: {open: "\u001b[4m", close: "\u001b[24m"},
    white: {open: "\u001b[37m", close: "\u001b[39m"},
    yellow: {open: "\u001b[33m", close: "\u001b[39m"},
};

export class Colors {
    public get bgBlack(): Colors {
        this.stylize("bgBlack");
        return this;
    }

    public get bgBlue(): Colors {
        this.stylize("bgBlue");
        return this;
    }

    public get bgCyan(): Colors {
        this.stylize("bgCyan");
        return this;
    }

    public get bgGray(): Colors {
        this.stylize("bgGray");
        return this;
    }

    public get bgGreen(): Colors {
        this.stylize("bgGreen");
        return this;
    }

    public get bgGrey(): Colors {
        this.stylize("bgGrey");
        return this;
    }

    public get bgMagenta(): Colors {
        this.stylize("bgMagenta");
        return this;
    }

    public get bgRed(): Colors {
        this.stylize("bgRed");
        return this;
    }

    public get bgWhite(): Colors {
        this.stylize("bgWhite");
        return this;
    }

    public get bgYellow(): Colors {
        this.stylize("bgYellow");
        return this;
    }

    public get black(): Colors {
        this.stylize("black");
        return this;
    }

    public get blue(): Colors {
        this.stylize("blue");
        return this;
    }

    public get bold(): Colors {
        this.stylize("bold");
        return this;
    }

    public get cyan(): Colors {
        this.stylize("cyan");
        return this;
    }

    public get dim(): Colors {
        this.stylize("dim");
        return this;
    }

    public get gray(): Colors {
        this.stylize("gray");
        return this;
    }

    public get green(): Colors {
        this.stylize("green");
        return this;
    }

    public get grey(): Colors {
        this.stylize("grey");
        return this;
    }

    public get inverse(): Colors {
        this.stylize("inverse");
        return this;
    }

    public get italic(): Colors {
        this.stylize("italic");
        return this;
    }

    public get magenta(): Colors {
        this.stylize("magenta");
        return this;
    }

    public get red(): Colors {
        this.stylize("red");
        return this;
    }

    public get strikethrough(): Colors {
        this.stylize("strikethrough");
        return this;
    }

    public get underline(): Colors {
        this.stylize("underline");
        return this;
    }

    public get yellow(): Colors {
        this.stylize("yellow");
        return this;
    }

    public get strip(): Colors {
        this.str = (`${this.str}`).replace(/\x1B\[\d+m/g, "");
        return this;
    }

    public get white(): Colors {
        this.stylize("white");
        return this;
    }

    public styles: { [key: string]: Style } = styles;
    private enabled: boolean;
    private styleKeys: string[];

    constructor(private str: string = "") {
        this.init();
    }

    public stylize(style: string): string {
        const code: Style = this.styles[style];
        if (this.enabled) {

            this.str = code.open + this.str.replace(code.closeRe, code.open) + code.close;
        }
        return this.str;
    }

    public toString(): string {
        return this.str;
    }

    private init(): void {
        this.enabled = System.colorSupported();
        this.styleKeys = Object.keys(this.styles);
        this.styleKeys.forEach((key: string) => {
            this.styles[key].closeRe = new RegExp(this.escapeStringRegexp(this.styles[key].close), "g");
        });
    }

    // noinspection JSMethodCanBeStatic
    private escapeStringRegexp(str: string) {
        if (typeof str !== "string") {

            throw new TypeError("Expected a string.");
        }
        return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    }
}

export default function color(str?: string): Colors {
    return (new Colors(str));
}

export function echo(colorSting: Colors) {
    console.log(colorSting.toString());
}

// print(colors("Shadrack").bgGreen.white.bold.strikethrough);
