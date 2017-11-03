"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const soul = {
    down: [
        "̖", "̗", "̘", "̙",
        "̜", "̝", "̞", "̟",
        "̠", "̤", "̥", "̦",
        "̩", "̪", "̫", "̬",
        "̭", "̮", "̯", "̰",
        "̱", "̲", "̳", "̹",
        "̺", "̻", "̼", "ͅ",
        "͇", "͈", "͉", "͍",
        "͎", "͓", "͔", "͕",
        "͖", "͙", "͚", "̣",
    ],
    mid: [
        "̕", "̛", "̀", "́",
        "͘", "̡", "̢", "̧",
        "̨", "̴", "̵", "̶",
        "͜", "͝", "͞",
        "͟", "͠", "͢", "̸",
        "̷", "͡", " ҉",
    ],
    up: [
        "̍", "̎", "̄", "̅",
        "̿", "̑", "̆", "̐",
        "͒", "͗", "͑", "̇",
        "̈", "̊", "͂", "̓",
        "̈", "͊", "͋", "͌",
        "̃", "̂", "̌", "͐",
        "̀", "́", "̋", "̏",
        "̒", "̓", "̔", "̽",
        "̉", "ͣ", "ͤ", "ͥ",
        "ͦ", "ͧ", "ͨ", "ͩ",
        "ͪ", "ͫ", "ͬ", "ͭ",
        "ͮ", "ͯ", "̾", "͛",
        "͆", "̚",
    ],
};
function randomNumber(range) {
    return Math.floor(Math.random() * range);
}
function isChar(character) {
    let bool = false;
    all.filter(function (i) {
        bool = (i === character);
    });
    return bool;
}
const all = [].concat(soul.up, soul.down, soul.mid);
function heComes(str, options) {
    let result = "";
    for (const l of str.split("")) {
        if (isChar(l)) {
            continue;
        }
        result += str[l];
        const counts = { up: 0, down: 0, mid: 0 };
        switch (options.size) {
            case "mini":
                counts.up = randomNumber(8);
                counts.mid = randomNumber(2);
                counts.down = randomNumber(8);
                break;
            case "maxi":
                counts.up = randomNumber(16) + 3;
                counts.mid = randomNumber(4) + 1;
                counts.down = randomNumber(64) + 3;
                break;
            default:
                counts.up = randomNumber(8) + 1;
                counts.mid = randomNumber(6) / 2;
                counts.down = randomNumber(8) + 1;
                break;
        }
        const arr = ["up", "mid", "down"];
        for (const d of arr) {
            const index = d;
            for (let i = 0; i <= counts[index]; i++) {
                if (options[index]) {
                    result += soul[index][randomNumber(soul[index].length)];
                }
            }
        }
    }
    return result;
}
function zalgo(text = "   he is here   ", options = {
        down: true,
        mid: true,
        size: "maxi",
        up: true,
    }) {
    return heComes(text, options);
}
exports.zalgo = zalgo;
//# sourceMappingURL=zalgo.js.map