function memoize(fn) {
    const cache = {};

    return (...args) => {
        const key = JSON.stringify(args);
    
        if (cache.hasOwnProperty(key)) {
          return cache[key];
        } else {
          const result = fn(...args);
          cache[key] = result;
          return result;
        }
      };
}

export default memoize;
