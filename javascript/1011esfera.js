var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var r = parseInt(input.split('\n'));
var pi = 3.14159;

var volume = (4/3.0) * pi * r * r *r;

console.log("VOLUME = " + volume.toFixed(3));