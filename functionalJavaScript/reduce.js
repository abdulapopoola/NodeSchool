'use strict';

function countWords(inputWords) {
    return inputWords.reduce((acc, word)=>{
        if(acc[word]){
            acc[word]++;
        } else{
            acc[word] = 1;
        }
        return acc;
    }, {});
}

module.exports = countWords;