# function-memo

A lightweight utility for memoizing functions to improve performance by caching their results.

## Installation

You can install `function-memo` via npm:

```bash
npm install function-memo
```

You can install `function-memo` via yarn:

```bash
yarn add function-memo
```
## Usage/Examples

```javascript
import memoize from 'function-memo';

// Define a function to memoize
function add(a, b) {
  console.log('Calculating...');
  return a + b;
}

// Apply memoization
const memoizedAdd = memoize(add);

// Call the memoized function
const result1 = memoizedAdd(2, 3); // Output: Calculating... 5
const result2 = memoizedAdd(2, 3); // Output: Cached 5
```
## Features


- **Memoization:** Memoize any function to cache its return values for subsequent calls with the same arguments.
- **Supports Multiple Arguments:** Works with functions that accept multiple arguments, including arrays and objects.
- **Efficient Caching:** Uses JSON serialization to generate cache keys for efficient caching.
- **Simple Integration:** Easy integration into any project as a standalone function.
- **No Dependencies:** Does not require any external dependencies, keeping your project lightweight.
- **Supports All Argument Types:** Works with functions that accept various argument types, including arrays, objects, strings, numbers, etc.
