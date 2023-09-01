var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let positivos = 0;

numPositivo(positivos);

function numPositivo(positivos){

for(let i = 0; i < 6; ++i){
    let numero = parseFloat(lines.shift().trim());

    if(numero > 0)  ++positivos;
}

console.log(`${positivos} valores positivos`);

}