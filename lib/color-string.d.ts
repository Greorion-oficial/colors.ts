declare global  {
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
        blackBG: string;
        blue: string;
        blueBG: string;
        bold: string;
        cyan: string;
        cyanBG: string;
        dim: string;
        gray: string;
        green: string;
        greenBG: string;
        grey: string;
        hidden: string;
        inverse: string;
        italic: string;
        magenta: string;
        magentaBG: string;
        red: string;
        redBG: string;
        reset: string;
        strikethrough: string;
        underline: string;
        white: string;
        whiteBG: string;
        yellow: string;
        yellowBG: string;
        rainbow: string;
        zebra: string;
        america: string;
        trap: string;
        random: string;
        silly: string;
        input: string;
        verbose: string;
        prompt: string;
        info: string;
        data: string;
        help: string;
        warn: string;
        error: string;
        debug: string;
    }
}
export declare namespace ColorString {
    function setTheme(theme: any): void;
}
export {};
