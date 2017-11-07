import assert = require("assert");
import color, {echo, styles} from "../lib/colors";

const s: string = "string";

function a(str: string, style: string) {
    const code = styles[style];
    return `${code.open}${str}${code.close}`;
}

function aE(str: string, style: string) {
    assert.equal(color(s)[style], a(str, style));
    assert.equal(color(str).strip.toString(), str);
    assert.equal(color(str).strip.toString(), str);
}

assert.equal(color(s).bold.toString(), `\x1B[1m${s}\x1B[22m`);
assert.equal(color(s).italic.toString(), `\x1B[3m${s}\x1B[23m`);
assert.equal(color(s).underline.toString(), `\x1B[4m${s}\x1B[24m`);
assert.equal(color(s).strikethrough.toString(), `\x1B[9m${s}\x1B[29m`);
assert.equal(color(s).inverse.toString(), `\x1B[7m${s}\x1B[27m`);

aE(s, "white");
aE(s, "grey");
aE(s, "black");
aE(s, "blue");
aE(s, "cyan");
aE(s, "green");
aE(s, "magenta");
aE(s, "red");
aE(s, "yellow");

console.log(color("Live Test").red.strikethrough.bgGreen.toString());
echo(color("Live Test").white.strikethrough.bgBlue);
