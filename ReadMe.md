# Colors.ts  [![Build Status](https://travis-ci.org/shaselle/colors.ts.svg?branch=master)](https://travis-ci.org/shaselle/colors.js)

## get color and style in your node.js console

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

  - bgBlack
  - bgRed
  - bgGreen
  - bgYellow
  - bgBlue
  - bgMagenta
  - bgCyan
  - bgWhite

### styles

  - reset
  - bold
  - dim
  - italic
  - underline
  - inverse
  - hidden
  - strikethrough

## Usage

```js
var colors = require('colors');

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

```

or a slightly less nifty way which doesn't extend `String.prototype`

```js
var colors = require('colors/safe');

console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass

```

I prefer the first way. Some people seem to be afraid of extending `String.prototype` and prefer the second way. 

If you are writing good code you will never have an issue with the first approach. If you really don't want to
touch `String.prototype`, the second usage will not touch `String` native object.

## Disabling Colors

To disable colors you can pass the following arguments in the command line to your application:

```bash
node myapp.js --no-color
```

## Console.log [string substitution](http://nodejs.org/docs/latest/api/console.html#console_console_log_data)

```js
var name = 'Marak';
console.log(colors.green('Hello %s'), name);
// outputs -> 'Hello Marak'
```
