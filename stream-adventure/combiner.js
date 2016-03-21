var combine = require('stream-combiner')

var genreMaps = {};
function createGenre(genre) {
    if (!genreMaps[valueType]) {
        genreMaps[valueType] = [];
    }
}

function group(bookName, bookGenre) { 
    genreMaps[bookGenre].push(bookName);
}

module.exports = function() {
    return combine(
        process.stdin,
        split,
        // read newline-separated json,
        // group books into genres,
        // then gzip the output
    )
}
