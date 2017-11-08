"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("./colors");
function stringify(colorStyle, func) {
    return Object.defineProperty(String.prototype, colorStyle, { get: func, configurable: true });
}
stringify("strip", function () {
    return (colors_1.default(this)).strip.toString();
});
stringify("capitalize", function () {
    return this.split(" ").map((value) => {
        return value[0].toUpperCase() + value.slice(2);
    }).join(" ");
});
stringify("upperCamelCase", function () {
    return this.split(" ").map((value) => {
        return value[0].toUpperCase() + value.slice(2).toLowerCase();
    }).join("");
});
stringify("lowerCamelCase", function () {
    return this.upperCamelCase[0].toLowerCase();
});
stringify("title", function () {
    return this.split(" ").map((value) => {
        return value[0].toUpperCase() + value.slice(2).toLowerCase();
    }).join("");
});
stringify("snakeCase", function () {
    return this.toLowerCase().split(" ").join("_");
});
stringify("kebabCase", function () {
    return this.toLowerCase().split(" ").join("-");
});
stringify("StUdLyCaPs", function () {
    return this.split(" ").join("")
        .split("").map((letter) => {
        if (letter in ["a", "e", "i", "o", "u"]) {
            return letter.toLowerCase();
        }
        else {
            return letter.toUpperCase();
        }
    });
});
Object.keys(colors_1.styles).forEach((styleName) => {
    stringify(styleName, function () {
        return colors_1.default(this)[styleName].toString();
    });
});
