var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nota = parseInt(lines.shift());

if(nota === 0){
    console.log('E');
}
if(nota > 0 && nota <= 35){
    console.log('D');
}
if(nota > 35 && nota <= 60){
    console.log('C');
}
if(nota > 60 && nota <= 85){
    console.log('B');
}
if(nota > 85 && nota < 101){
    console.log('A');
}
