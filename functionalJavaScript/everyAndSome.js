'use strict';

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every((user)=>{
            return goodUsers.some((gooduser)=>{
               return gooduser.id === user.id; 
            });
        });
    };
}

module.exports = checkUsersValid;