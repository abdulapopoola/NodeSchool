'use strict';

function loadUsers(userIds, load, done) {
    let users = [],
        userCount = userIds.length,
        loadedUsers = 0;

    userIds.map((userId, index, arr) => {
        load(id, (user) => {
            users[index] = user;
            loadedUsers++;
            
            if(loadedUsers == userCount){
                return done(users);
            }
        })
    });
}

module.exports = loadUsers;