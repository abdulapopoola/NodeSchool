var val = process.argv[2];
var arr = new Uint32Array(1);
arr[0] = val;

var arr16 = new Uint16Array(arr.buffer);
console.log(JSON.stringify(arr16));