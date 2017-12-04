
[![NPM Version][npm-img]][npm-url]
[![Code Climate Badge][codeclimate-img]][codeclimate-url]
[![Test Coverage][coverage-img]][codeverage-url]

## What Is it?

How many times have you been testing something that involves a promise, but you
wanted a fake promise, because the important thing is the async workflow, not
what the promise does? Have you hastily coded something-up with a setTimeout?
Are you annouted about having to waste time on doing that repeatedly? Be annoyed
no more. Solution is here. 

## TL;DR

If you need a fake promise that resolves in up to N milliseconds and returns a
predictable output – Fake Promise does exactly that.

## Usage:

Async/Await:

```javascript
const fakepromise = require('fakepromise');
const myResult = await fakepromise.promise(2000, "this is returned");
```

will give you a promise that takes *up to* 2000 milliseconds to execute and
resolves with "this is returned".

Ye olde promises-way:

```javascript
const fakepromise = require('fakepromise');
fakepromise.promise(2000, "this is returned").then( msg => {
  console.log(msg);
});
```

## Alternatives

If you are already using Bluebird, the
[Promise.delay()](http://bluebirdjs.com/docs/api/promise.delay.html) is almost
identical, except it delays by the exact number of milliseconds where we
introduce some fun randomness by delaying "up to" the number of milliseconds. 

## License

[MIT](LICENSE)

[npm-img]: https://img.shields.io/npm/v/fakepromise.svg?style=flat
[npm-url]: https://www.npmjs.com/package/fakepromise
[codeclimate-img]: https://codeclimate.com/github/inadarei/fakepromise/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/inadarei/fakepromise
[coverage-img]: https://api.codeclimate.com/v1/badges/cb7dfc4827bac808b77b/test_coverage
[coverage-url]: https://codeclimate.com/github/inadarei/fakepromise/test_coverage
