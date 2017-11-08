import assert = require("assert");
import {styles} from "../lib/colors";
import "../lib/string";

const s: string = "string";

function a(str: string, style: string) {
    const code = styles[style];
    return `${code.open}${str}${code.close}`;
}

function aE(str: string, style: string) {
    assert.equal(s[style], a(str, style));
}

assert.equal(s.bold, `\x1B[1m${s}\x1B[22m`);
assert.equal(s.italic, `\x1B[3m${s}\x1B[23m`);
assert.equal(s.underline, `\x1B[4m${s}\x1B[24m`);
assert.equal(s.strikethrough, `\x1B[9m${s}\x1B[29m`);
assert.equal(s.inverse, `\x1B[7m${s}\x1B[27m`);

// Additional String Functions
assert.strictEqual(s.capitalize, "String");
assert.strictEqual("1 james".capitalize, "1 james");
assert.strictEqual("1 james".titleCase, "1 James");
assert.strictEqual("string string 3".upperCamelCase, "StringString3");
assert.strictEqual("string string 3".lowerCamelCase, "stringString3");
assert.strictEqual("string string 3".titleCase, "String String 3");
assert.strictEqual("stRing strxng4 3".snakeCase, "string_strxng4_3");
assert.strictEqual("stRing strxng4 3".kebabCase, "string-strxng4-3");
assert.strictEqual("stRing strxng4 3".studlyCaps, "StRiNgStRxNg43");

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
console.log("Live Test".white.italic.bgBlack);
console.log("Live Test".white.bgRed);
console.log("Live Test".white.bgGreen);
console.log("Live Test".white.bgBlue);
console.log("Live Test".white.bgCyan);
console.log("Live Test".white.bgMagenta);
console.log("Live Test".white.bgYellow);
console.log("Live Test".red.bgGray);
console.log("Live Test".green.bgGrey);
console.log("Live Test".blue.bgGray);
console.log("Live Test".cyan.bgGrey);
console.log("Live Test".magenta.bgGray);
console.log("Live Test".yellow.bgGrey);
console.log("Live Test".gray.bgGray);
console.log("Live Test".grey.bgGrey);
console.log(s.bold, `\x1B[1m${s}\x1B[22m`);
console.log(s.italic, `\x1B[3m${s}\x1B[23m`);
console.log(s.underline, `\x1B[4m${s}\x1B[24m`);
console.log(s.strikethrough, `\x1B[9m${s}\x1B[29m`);
console.log(s.inverse, `\x1B[7m${s}\x1B[27m`);
