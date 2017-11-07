"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var colors_1 = require("../lib/colors");
var s = "string";
function a(str, style) {
    var code = colors_1.styles[style];
    return "" + code.open + str + code.close;
}
function aE(str, style) {
    assert.equal(colors_1.default(s)[style], a(str, style));
    assert.equal(colors_1.default(str).strip.toString(), str);
    assert.equal(colors_1.default(str).strip.toString(), str);
}
assert.equal(colors_1.default(s).bold.toString(), "\u001B[1m" + s + "\u001B[22m");
assert.equal(colors_1.default(s).italic.toString(), "\u001B[3m" + s + "\u001B[23m");
assert.equal(colors_1.default(s).underline.toString(), "\u001B[4m" + s + "\u001B[24m");
assert.equal(colors_1.default(s).strikethrough.toString(), "\u001B[9m" + s + "\u001B[29m");
assert.equal(colors_1.default(s).inverse.toString(), "\u001B[7m" + s + "\u001B[27m");
aE(s, "white");
aE(s, "grey");
aE(s, "black");
aE(s, "blue");
aE(s, "cyan");
aE(s, "green");
aE(s, "magenta");
aE(s, "red");
aE(s, "yellow");
console.log(colors_1.default("Live Test").red.strikethrough.bgGreen.toString());
colors_1.echo(colors_1.default("Live Test").white.strikethrough.bgBlue);
