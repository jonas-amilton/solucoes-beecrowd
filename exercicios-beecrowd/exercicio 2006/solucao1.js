var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let T = parseInt(lines.shift().trim());
let array = lines.shift().trim().split(' ').map((numArray) => parseInt(numArray));

let contador = array.reduce((accumulator, currentValue) => (currentValue === T) ? accumulator + 1 : accumulator, 0);

console.log(contador);