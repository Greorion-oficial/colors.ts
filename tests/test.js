"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var index_1 = require("../lib/index");
var colors_1 = require("../src/colors");
var s = "string";
function a(str, color) {
    var code = colors_1.ansiStyles[color];
    return "" + code.open + str + code.close;
}
function aE(str, color) {
    assert.equal(s[color], a(str, color));
    assert.equal(index_1.colors[color](s), a(str, color));
    assert.equal(s[color], index_1.colors[color](str));
    assert.equal(index_1.colors.strip(str), str);
    assert.equal(index_1.colors.strip(str), str.strip);
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
//# sourceMappingURL=test.js.map