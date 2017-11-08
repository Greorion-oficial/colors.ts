"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var colors_1 = require("../lib/colors");
require("../lib/string");
var s = "string";
function a(str, style) {
    var code = colors_1.styles[style];
    return "" + code.open + str + code.close;
}
function aE(str, style) {
    assert.equal(s[style], a(str, style));
}
assert.equal(s.bold, "\u001B[1m" + s + "\u001B[22m");
assert.equal(s.italic, "\u001B[3m" + s + "\u001B[23m");
assert.equal(s.underline, "\u001B[4m" + s + "\u001B[24m");
assert.equal(s.strikethrough, "\u001B[9m" + s + "\u001B[29m");
assert.equal(s.inverse, "\u001B[7m" + s + "\u001B[27m");
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
assert.equal(typeof ("astring".red), "string");
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
console.log(s.bold, "\u001B[1m" + s + "\u001B[22m");
console.log(s.italic, "\u001B[3m" + s + "\u001B[23m");
console.log(s.underline, "\u001B[4m" + s + "\u001B[24m");
console.log(s.strikethrough, "\u001B[9m" + s + "\u001B[29m");
console.log(s.inverse, "\u001B[7m" + s + "\u001B[27m");
