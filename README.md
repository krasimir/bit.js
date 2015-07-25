# Bit.js

A set of utility functions for JavaScript functions.

---

## Installation

If you want to use **Bit.js** in the browser simply download `build/bit.min.js` and include it in your page:

```html
<script src="./js/bit.min.js"></script>
```

It is also available via [npm](https://www.npmjs.com/package/bit.js):

```
npm install bit.js
```

Then in your code:
```js
require('bit.js');
```
---

## API (well, not exactly ...)

There is no initialization or calling a constructor. Once **Bit.js** is loaded it registers bunch of functions to `Function.prototype`. So the following functions are available on the fly.

### f.callWith(...args)

`callWith` appends its parameters to the ones passed to the original function.

```js
var whatsUp = function (a, b) {
  return a + ' ' + b;
}.callWith('is coming');

whatsUp('Winter'); // Winter is coming
whatsUp('Arya Stark'); // Arya Stark is coming
```

### f.once()

`f` will be called only once.

```js
var killJonSnow = function () {
  // this could happen only once
}.once();

killJonSnow(); // Nooooo, he is dead
killJonSnow(); // You already killed it
killJonSnow(); // ... seriously, he IS dead
```

### f.twice()

`f` will be called only two times.

```js
var amIAryaStark = function () {
  // It depends who you ask
}.twice();

amIAryaStark(); // Hm ...
amIAryaStark(); // Yes, I am
amIAryaStark(); // You already know ... does nothing
amIAryaStark(); // You already know ... does nothing
```

### f.debounce([milliseconds])

Limits the rate at which `f` can fire.

```js
var watchGameOfThrones = function () {
  // ... fun
}.debounce(604800000); // 604800000 milliseconds === 1 week

watchGameOfThrones(); // It works!
watchGameOfThrones(); // Who dies we'll see next week ... does nothing
watchGameOfThrones(); // Next week bro, next week ... does nothing
```
