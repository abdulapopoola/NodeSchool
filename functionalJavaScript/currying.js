'use strict';

function curryN(fn, n) {
    var arity = n || fn.length;
    
    if(arity > 0){
        return function(arg){
            return curryN(fn.bind(null, arg), arity-1);
        }
    } else {
        return fn();
    }
}

module.exports = curryN;