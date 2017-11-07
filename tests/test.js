"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var index_1 = require("../lib/index");
require("../lib/string");
var s = "string";
function a(str, color) {
    var code = index_1.styles[color];
    return "" + code.open + str + code.close;
}
function aE(str, color) {
    assert.equal(s[color], a(str, color));
    assert.equal(index_1.colors(s)[color], a(str, color));
    assert.equal(s[color], index_1.colors(str)[color]);
    assert.equal(index_1.colors(str).strip.toString(), str);
    assert.equal(index_1.colors(str).strip.toString(), str);
}
assert.equal(s.bold, "\u001B[1m" + s + "\u001B[22m");
assert.equal(s.italic, "\u001B[3m" + s + "\u001B[23m");
assert.equal(s.underline, "\u001B[4m" + s + "\u001B[24m");
assert.equal(s.strikethrough, "\u001B[9m" + s + "\u001B[29m");
assert.equal(s.inverse, "\u001B[7m" + s + "\u001B[27m");
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
console.log(index_1.colors("Live Test").red.strikethrough.bgGreen.toString());
index_1.print(index_1.colors("Live Test").white.strikethrough.bgBlue);
console.log("Live Test".white.italic.bgBlack);
console.log("Live Test".white.bgRed);
console.log("Live Test".white.bgGreen);
//# sourceMappingURL=test.js.map