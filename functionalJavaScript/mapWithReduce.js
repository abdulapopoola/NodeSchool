'use strict';

module.exports = function arrayMap(arr, fn) {
    return arr.reduce((prev, curr)=>{
        prev.push(fn(curr));
        return prev;
    }, []);
}

