var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = parseFloat(lines.shift());
let r = raio;
areaCirculo(r);

function areaCirculo(r){
    const pi = 3.14159;
    var area = pi * (r * r);
    console.log(`A=${area.toFixed(4)}`);
}