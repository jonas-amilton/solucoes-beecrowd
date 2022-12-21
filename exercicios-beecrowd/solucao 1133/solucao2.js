//solucao com do while

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let Y = parseInt(lines.shift());

do{
     [X, Y] = [Y, X]; 
}
while(X > Y);

for(let i = X + 1; i < Y; ++i){
    if(i % 5 > 1 && i % 5 < 4){
        console.log(i);
    }
}