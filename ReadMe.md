# Colors.ts  [![Build Status](https://travis-ci.org/shaselle/colors.ts.svg?branch=master)](https://travis-ci.org/shaselle/colors.ts)

## Get colors and style in your node.js console

## Installation

    npm install colorts

## colors and styles!

### text colors

  - black
  - red
  - green
  - yellow
  - blue
  - magenta
  - cyan
  - white
  - gray
  - grey

### background colors

  - <span style="color:white;background:black">bgBlack</span>
  - bgRed
  - bgGreen
  - bgYellow
  - bgBlue
  - bgMagenta
  - bgCyan
  - bgWhite

### styles

  - reset
  - <span style="font-weight:700;">bold</span>
  - dim
  - italic
  - underline
  - inverse
  - hidden
  - strikethrough

## Usage methods
#### 1. TypeScript
##### i. Normal String extension.

```js
import 'colorts/string';

console.log('hello'.green);                       // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse);         // inverses the color

```

##### ii. Direct color method

```js
import color from 'colorts';
import {echo} from 'colorts';

console.log(colors('hello').green + "");                           // outputs green text
console.log(colors('i like cake and pies').red.underline.toString) // outputs red underlined text
echo(colors('inverse the color').inverse);                         // you can use echo to console.log safe colorts

```

#### 2. JavaScript
##### i. Normal String extension.

```js
require('colorts/string');

console.log('hello'.green);                       // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse);         // inverses the color

```

##### ii. Direct color method

```js
let color = require('colorts');
let echo = require('colorts').echo;

console.log(colors('hello').green + "");                           // outputs green text
console.log(colors('i like cake and pies').red.underline.toString) // outputs red underlined text
echo(colors('inverse the color').inverse);                         // you can use echo to console.log safe colorts

```

I prefer the first way. Some people seem to be afraid of extending `String.prototype` and prefer the second way. 

If you are writing good code you will never have an issue with the first approach. If you really don't want to
touch `String.prototype`, the second usage will not touch `String` native object.

## Disabling Colors

To disable colors you can pass the following arguments in the command line to your application:

```bash
node myapp.js --no-color
```
