## What Is it?

How many times have you been testing something that involves a promise, but you
wanted a fake promise, because the important thing is the async workflow, not
what the promise does? Have you hastily coded something-up with a setTimeout?
Are you annouted about having to waste time on doing that repeatedly? Be annoyed
no more. Solution is here. 

If you need a fake promise t hat resolves in up to N milliseconds and returns a
predictable output – Fake Promise does exactly that.

## Usage:

```javascript
const fakepromise = require('fakepromise');
const myResult = await fakepromise.promise(2000, "this is returned");
```