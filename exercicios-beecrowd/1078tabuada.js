var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tabuadaDeN = parseInt(lines.shift());

for (var i = 1; i <= 10; ++i){
console.log(i + ' x ' + tabuadaDeN + ' = ' + i * tabuadaDeN);
}
