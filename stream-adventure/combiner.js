var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib')

module.exports = function() {
    var tr = through(write, end);
    var current;
    function write(buffer, encoding, next) {

        if (buffer.length === 0) {
            return next();
        }

        var row = JSON.parse(buffer);
        if (row.type === 'genre') {
            if (current) {
                this.push(JSON.stringify(current) + '\n')
            }
            current = {
                name: row.name,
                books: []
            };
        } else if (row.type === 'book') {
            current.books.push(row.name);
        }
        next();
    }

    function end(done) {
        if (current) {
            this.push(JSON.stringify(current) + '\n');
        }
        done();
    }
    return combine(
        split(),
        tr,
        zlib.createGzip()
    )
};
