'use strict';

function duckCount() {
    let args = [].slice.call(arguments);
    
    return args.reduce((acc, arg)=>{
        if(Object.prototype.hasOwnProperty.call(arg, 'quack')){
            acc++;
        }
        return acc;
    }, 0);
}

module.exports = duckCount