# Bit.js

A set of utility functions for JavaScript functions.

---

### Installation

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

# API (well, not exactly ...)

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

### f.callIf([condition function])

Execute the function only if the `condition function` returns `true`.

```js
var isSamwellTarlyHungry = function (time) {
  return time >= 0;
};
var feedNightsWatch = function (time) {
  // eating ...
}.callIf(isSamwellTarlyHungry);

feedNightsWatch(8); // eating ...
feedNightsWatch(22); // eating ...
feedNightsWatch(-2); // no eating
```

### f.format([formatter function])

Process/format the result of your function.

```js
var theTruth = function (result) {
  return result === 'Reek' ? 'Theon Greyjoy' : result;
};
var whoIsTheonGreyjoy = function () {
  return 'Reek';
}.format(theTruth);

whoIsTheonGreyjoy(); // Theon Greyjoy
```

### f.middlewares(...args)

Pass as many functions are you need. They'll be run against the result of your function one by one.

```js
var answerA = function (result) {
  result.push('the First of Her Name');
  return result;
};
var answerB = function (result) {
  result.push('the Unburnt');
  return result;
};
var whoIsDaenerysTargaryen = function () {
  return ['Mother of Dragons'];
}.middlewares(answerA, answerB);

whoIsDaenerysTargaryen(); // ["Mother of Dragons", "the First of Her Name", "the Unburnt"]
```

### f.observe([function])

`[function]` will be called when `f` is executed. The observer will receive the output of the original function.

```js
var smile = function () {
  console.log(':)');
};

var TyrionLannisterIsGreatWarior = function () {
  // no way
}.observe(smile);

TyrionLannisterIsGreatWarior(); // prints ':)'
TyrionLannisterIsGreatWarior(); // prints ':)'
```
