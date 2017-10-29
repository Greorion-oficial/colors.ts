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
import {argv} from "process";
import {Style, Styles} from "./styles";

export class Colors {

    public static supportsColors(): boolean {
        if (argv.indexOf("--no-color") !== -1 ||
            argv.indexOf("--color=false") !== -1) {
            return false;
        }

        if (argv.indexOf("--color") !== -1 ||
            argv.indexOf("--color=true") !== -1 ||
            argv.indexOf("--color=always") !== -1) {
            return true;
        }

        if (process.stdout && !process.stdout.isTTY) {
            return true;
        }

        if (process.platform === "win32") {
            return true;
        }

        if ("COLORTERM" in process.env) {
            return true;
        }

        if (process.env.TERM === "dumb") {
            return false;
        }

        return /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM);
    }

    public static strip(str: string) {
        return ("" + str).replace(/\x1B\[\d+m/g, "");
    }

    public styles: Styles = new Styles();
    public enabled: boolean;
    public stripColors;

    constructor() {
        this.stripColors = Colors.strip;
        this.enabled = Colors.supportsColors();
    }
    public stylize(str: string, style: keyof Styles): string {
        if (!this.enabled) {
            return str + "";
        }
        const code: Style = this.styles[style];
        return code.open + str.replace(code.closeRe, code.open) + code.close;
    }
}

export const colors: Colors = new Colors();

declare global {
    interface String {
        strip(): string;

        stripColors(): string;

        bgBlack(): string;

        bgBlue(): string;

        bgCyan(): string;

        bgGreen(): string;

        bgMagenta(): string;

        bgRed(): string;

        bgWhite(): string;

        bgYellow(): string;

        black(): string;

        blackBG(): string; // legacy
        blue(): string;

        blueBG(): string; // legacy
        bold(): string;

        cyan(): string;

        cyanBG(): string; // legacy
        dim(): string;

        gray(): string;

        green(): string;

        greenBG(): string; // legacy
        grey(): string;

        hidden(): string;

        inverse(): string;

        italic(): string;

        magenta(): string;

        magentaBG(): string; // legacy
        red(): string;

        redBG(): string; // legacy
        reset(): string;

        strikethrough(): string;

        underline(): string;

        white(): string;

        whiteBG(): string; // legacy
        yellow(): string;

        yellowBG(): string; // legacy
    }
}

String.prototype.strip = function(): string {
    return Colors.strip(this);
};

String.prototype.stripColors = function(): string {
    return Colors.strip(this);
};

String.prototype.bgBlack = function(): string {
    return colors.stylize(this, "bgBlack");
};
String.prototype.bgBlue = function(): string {
    return colors.stylize(this, "bgBlue");
};
String.prototype.bgCyan = function(): string {
    return colors.stylize(this, "bgCyan");
};
String.prototype.bgGreen = function(): string {
    return colors.stylize(this, "bgGreen");
};
String.prototype.bgMagenta = function(): string {
    return colors.stylize(this, "bgMagenta");
};
String.prototype.bgRed = function(): string {
    return colors.stylize(this, "bgRed");
};
String.prototype.bgWhite = function(): string {
    return colors.stylize(this, "bgWhite");
};
String.prototype.bgYellow = function(): string {
    return colors.stylize(this, "bgYellow");
};
String.prototype.black = function(): string {
    return colors.stylize(this, "black");
};
String.prototype.blackBG = function(): string {
    return colors.stylize(this, "blackBG");
}; // legacy
String.prototype.blue = function(): string {
    return colors.stylize(this, "blue");
};
String.prototype.blueBG = function(): string {
    return colors.stylize(this, "blueBG");
}; // legacy
String.prototype.bold = function(): string {
    return colors.stylize(this, "bold");
};
String.prototype.cyan = function(): string {
    return colors.stylize(this, "cyan");
};
String.prototype.cyanBG = function(): string {
    return colors.stylize(this, "cyanBG");
}; // legacy
String.prototype.dim = function(): string {
    return colors.stylize(this, "dim");
};
String.prototype.gray = function(): string {
    return colors.stylize(this, "gray");
};
String.prototype.green = function(): string {
    return colors.stylize(this, "green");
};
String.prototype.greenBG = function(): string {
    return colors.stylize(this, "greenBG");
}; // legacy
String.prototype.grey = function(): string {
    return colors.stylize(this, "grey");
};
String.prototype.hidden = function(): string {
    return colors.stylize(this, "hidden");
};
String.prototype.inverse = function(): string {
    return colors.stylize(this, "inverse");
};
String.prototype.italic = function(): string {
    return colors.stylize(this, "italic");
};

String.prototype.magenta = function(): string {
    return colors.stylize(this, "magenta");
};
String.prototype.magentaBG = function(): string {
    return colors.stylize(this, "magentaBG");
}; // legacy
String.prototype.red = function(): string {
    return colors.stylize(this, "red");
};
String.prototype.redBG = function(): string {
    return colors.stylize(this, "redBG");
}; // legacy
String.prototype.reset = function(): string {
    return colors.stylize(this, "reset");
};
String.prototype.strikethrough = function(): string {
    return colors.stylize(this, "strikethrough");
};
String.prototype.underline = function(): string {
    return colors.stylize(this, "underline");
};
String.prototype.white = function(): string {
    return colors.stylize(this, "white");
};
String.prototype.whiteBG = function(): string {
    return colors.stylize(this, "whiteBG");
}; // legacy
String.prototype.yellow = function(): string {
    return colors.stylize(this, "yellow");
};
String.prototype.yellowBG = function(): string {
    return colors.stylize(this, "yellowBG");
}; // legacy
