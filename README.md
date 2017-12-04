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

Ye Olde promises:

```
const fakepromise = require('fakepromise');
fakepromise.promise(2000, "this is returned").then( msg => {
  console.log(msg);
});
```