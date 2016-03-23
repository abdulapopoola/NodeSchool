var crypto = require('crypto');
var gunzip = require('zlib').createGunzip();
var through = require('through2');
var tar = require('tar');
var parser = tar.Parse();

var cipherName = process.argv[2];
var cipherPassphrase = process.argv[3];
var stream = crypto.createDecipher(cipherName, cipherPassphrase);

parser.on('entry', function (e) {
  var hashStream = crypto.createHash('md5', { encoding: 'hex' });

  if (e.type == 'File') {
    e.pipe(hashStream).pipe(through(function (buf) {
      this.push(buf.toString() + ' ' + e.path + '\n');
    })).pipe(process.stdout);
  }
});

process.stdin
    .pipe(stream)
    .pipe(gunzip)
    .pipe(parser);