## What Is it?

How many times have you been testing something that involves a promise, but you
wanted to a fake promise, because the important thing is the async workflow,
not what the promise does? Maybe you need it to take up to N milliseconds and 
get a predictable output out? Fake Promise does exactly that.

## Usage:

```javascript
const fakepromise = require('fakepromise');

const myResult = await fakepromise.promise(2000, "this is returned");
```