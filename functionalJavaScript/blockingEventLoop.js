'use strict';

function repeat(operation, num) {
    setTimeout(() => {
        if (num <= 0){
             return;
        }
        operation();
        return repeat(operation, --num);
    }, 0);
}

module.exports = repeat;