"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("./colors");
function stringify(color, func) {
    return Object.defineProperty(String.prototype, color, { get: func, configurable: true });
}
stringify("strip", function () {
    return (colors_1.colors(this)).strip.toString();
});
Object.keys(colors_1.styles).forEach((styleName) => {
    stringify(styleName, function () {
        return colors_1.colors(this)[styleName] + "";
    });
});
//# sourceMappingURL=string.js.map