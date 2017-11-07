import assert = require("assert");
import {colors, print, styles} from "../lib/index";
import "../lib/string";

const s: string = "string";

function a(str: string, color: string) {
    const code = styles[color];
    return `${code.open}${str}${code.close}`;
}

function aE(str: string, color: string) {
    assert.equal(s[color], a(str, color));
    assert.equal(colors(s)[color], a(str, color));
    assert.equal(s[color], colors(str)[color]);
    assert.equal(colors(str).strip.toString(), str);
    assert.equal(colors(str).strip.toString(), str);
}

assert.equal(s.bold, `\x1B[1m${s}\x1B[22m`);
assert.equal(s.italic, `\x1B[3m${s}\x1B[23m`);
assert.equal(s.underline, `\x1B[4m${s}\x1B[24m`);
assert.equal(s.strikethrough, `\x1B[9m${s}\x1B[29m`);
assert.equal(s.inverse, `\x1B[7m${s}\x1B[27m`);

aE(s, "white");
aE(s, "grey");
aE(s, "black");
aE(s, "blue");
aE(s, "cyan");
aE(s, "green");
aE(s, "magenta");
aE(s, "red");
aE(s, "yellow");

assert.equal(s, "string");

assert.equal(typeof("astring".red), "string");
console.log(colors("Live Test").red.strikethrough.bgGreen.toString());
print(colors("Live Test").white.strikethrough.bgBlue);

console.log("Live Test".white.italic.bgBlack);
console.log("Live Test".white.bgRed);
console.log("Live Test".white.bgGreen);
