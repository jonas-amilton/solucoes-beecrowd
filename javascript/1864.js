var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var frase = "LIFE IS NOT A PROBLEM TO BE SOLVED";

var N = parseInt(lines.shift());

console.log(frase.substring(0, N));
