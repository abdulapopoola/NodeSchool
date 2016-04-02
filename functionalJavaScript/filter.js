'use strict';

function getShortMessages(messages){
    return messages.filter((message)=>{
        return message.message.length < 50;
    }).map((message)=>{
        return message.message;
    });
}

module.exports = getShortMessages;