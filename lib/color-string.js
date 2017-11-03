"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("./colors");
var ColorString;
(function (ColorString) {
    const stringify = (color, func) => {
        return Object.defineProperty(String.prototype, color, {
            get: func,
        });
    };
    stringify("strip", function () {
        return colors_1.colors.strip(this);
    });
    stringify("stripColors", function () {
        return colors_1.colors.strip(this);
    });
    stringify("trap", function () {
        return colors_1.colors.trap(this);
    });
    stringify("zalgo", function () {
        return colors_1.colors.zalgo(this);
    });
    stringify("zebra", function () {
        return colors_1.colors.zebra(this);
    });
    stringify("rainbow", function () {
        return colors_1.colors.rainbow(this);
    });
    stringify("random", function () {
        return colors_1.colors.random(this);
    });
    stringify("america", function () {
        return colors_1.colors.america(this);
    });
    Object.keys(colors_1.ansiStyles).forEach((styleName) => {
        stringify(styleName, function () {
            return colors_1.colors.stylize(this, styleName);
        });
    });
    function setTheme(theme) {
        Object.keys(theme).forEach((prop) => {
            if (typeof theme[prop] === "string") {
                stringify(prop, function () {
                    return colors_1.colors[theme[prop]](this);
                });
            }
        });
    }
    ColorString.setTheme = setTheme;
    console.log("Shadrack Ndacayisenga".white.strikethrough.bgGreen);
})(ColorString = exports.ColorString || (exports.ColorString = {}));
//# sourceMappingURL=color-string.js.map