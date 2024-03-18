# function-memo

A lightweight utility for memoizing functions to improve performance by caching their results.

## Installation

You can install `function-memo` via npm:

```bash
npm install function-memo
```
## Usage/Examples

```javascript
import memoize from 'function-memo';

// Original function
const toUpper = (str) => {
	return str.toUpperCase();
};

// Memoized version of the function
const toUpperMemoized = memoize(toUpper);

// Calling the memoized function
toUpperMemoized("abcdef"); // not cached
toUpperMemoized("abcdef"); // cached
```

