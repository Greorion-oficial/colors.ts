"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("./colors");
const colorStringify = (color, func) => {
    return Object.defineProperty(String.prototype, color, {
        get: func,
    });
};
colorStringify("strip", function () {
    return colors_1.colors.strip(this);
});
colorStringify("stripColors", function () {
    return colors_1.colors.strip(this);
});
Object.keys(colors_1.ansiStyles).forEach((styleName) => {
    colorStringify(styleName, function () {
        return colors_1.colors.stylize(this, styleName);
    });
});
function setTheme(theme) {
    if (typeof theme === "string") {
        try {
            colors_1.colors.themes[theme] = require(theme);
            applyTheme(colors_1.colors.themes[theme]);
            return colors_1.colors.themes[theme];
        }
        catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
    else {
        applyTheme(theme);
    }
}
function applyTheme(theme) {
    //
    // Remark: This is a list of methods that exist
    // on String that you should not overwrite.
    //
    const stringPrototypeBlacklist = [
        "__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__", "charAt",
        "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString",
        "toString", "valueOf", "charCodeAt", "indexOf", "lastIndexof", "length", "localeCompare",
        "match", "replace", "search", "slice", "split", "substring", "toLocaleLowerCase",
        "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimLeft", "trimRight",
    ];
    const themeKeys = Object.keys(theme);
    themeKeys.forEach((prop) => {
        if (stringPrototypeBlacklist.indexOf(prop) === -1) {
            if (typeof (theme[prop]) === "string") {
                colors_1.colors[prop] = colors_1.colors[theme[prop]];
                colorStringify(prop, function () {
                    return colors_1.colors[theme[prop]](this);
                });
            }
            else {
                colorStringify(prop, function () {
                    let ret = this;
                    for (const t of theme[prop]) {
                        ret = colors_1.colors[t](ret);
                    }
                    return ret;
                });
            }
        }
        else {
            console.log(`${"warn: ".red + ("String.prototype" + prop).magenta} is \
                    probably something you don't want\
                 to override. Ignoring style name`);
        }
    });
}
console.log("Shadrack Ndacayisenga".white.strikethrough.bgGreen);
//# sourceMappingURL=stringfier.js.map
