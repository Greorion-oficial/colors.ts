import {argv} from "process";

export class System {
    public static colorSupported(): boolean {
        let supported: boolean = false;
        if ((argv.indexOf("--no-color") !== -1) ||
            (argv.indexOf("--color=false") !== -1) || process.env.TERM === "dumb") {
            supported = false;
        } else if (System.colorEnabled() || System.colorAllowed()) {
            supported = true;
        } else {
            supported = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM);
        }
        return supported;
    }

    private static isWin32(): boolean {
        return process.platform === "win32";
    }

    private static hasColorOutput(): boolean {
        return (process.stdout && !process.stdout.isTTY);
    }
    private static colorTermEnv(): boolean {
        return ("COLORTERM" in process.env);
    }

    private static colorAllowed(): boolean {
        return argv.indexOf("--color") !== -1 ||
            argv.indexOf("--color=true") !== -1 ||
            argv.indexOf("--color=always") !== -1;
    }
    private static colorEnabled(): boolean {
        return  System.hasColorOutput() || System.isWin32() || System.colorTermEnv();
    }

}
