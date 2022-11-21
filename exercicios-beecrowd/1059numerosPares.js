var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(let numeroPar = 2; numeroPar <= 100; numeroPar +=2){
    console.log(numeroPar);
}
