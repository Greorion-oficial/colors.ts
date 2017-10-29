import { Styles } from "./styles";
export declare class Colors {
    static supportsColors(): boolean;
    static strip(str: string): string;
    styles: Styles;
    enabled: boolean;
    stripColors: any;
    constructor();
    stylize(str: string, style: keyof Styles): string;
}
export declare const colors: Colors;
declare global  {
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
        blackBG(): string;
        blue(): string;
        blueBG(): string;
        bold(): string;
        cyan(): string;
        cyanBG(): string;
        dim(): string;
        gray(): string;
        green(): string;
        greenBG(): string;
        grey(): string;
        hidden(): string;
        inverse(): string;
        italic(): string;
        magenta(): string;
        magentaBG(): string;
        red(): string;
        redBG(): string;
        reset(): string;
        strikethrough(): string;
        underline(): string;
        white(): string;
        whiteBG(): string;
        yellow(): string;
        yellowBG(): string;
    }
}
