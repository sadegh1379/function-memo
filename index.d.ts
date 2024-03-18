declare type Func<T, R> = (param: T) => R;

declare type Cache<T, R> = {
    [key: string]: R;
};

declare function memoize<T, R>(fn: Func<T, R>): Func<T, R>;
