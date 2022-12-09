var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

calc(A, B);

function calc(A, B){
    console.log(`SOMA = ${A + B}`);
}