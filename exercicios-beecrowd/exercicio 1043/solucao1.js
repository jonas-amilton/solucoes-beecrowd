var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift().trim().split(' ').map((x) => parseFloat(x));

calcPerimetroEarea(A, B, C);

function calcPerimetroEarea(){
    let Perimetro = (A + B + C);
    let Area = ((A + B)/2 * C);
    
imprimeConsole(Perimetro, Area);
}

function imprimeConsole(Perimetro, Area){
    if(A < B + C && B < A + C && C < A + B){
    console.log(`Perimetro = ${Perimetro.toFixed(1)}`);
}else{
    console.log(`Area = ${Area.toFixed(1)}`);
}
}