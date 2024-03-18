function memoize(fn) {
    const cache = {};

    return function (param) {
        if (cache[param]) {
            console.log('cached');
            return cache[param];
        } else {
            const result = fn(param);
            cache[param] = result;
            console.log('not cached');
            return result;
        }
    };
}

module.exports = memoize
