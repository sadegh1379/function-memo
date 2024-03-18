function memoize(fn) {
    const cache = {};

    return function (param) {
        if (cache[param]) {
            return cache[param];
        } else {
            const result = fn(param);
            cache[param] = result;
            return result;
        }
    };
}

module.exports = memoize
