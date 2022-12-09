var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let p = 0;
let N = parseInt(lines[p++]);

tempoAtras(p, N);

function tempoAtras(p, N){
    
for (let i = 0; i < N; ++i) {
    let T = parseInt(lines[p++]);

    T = 2015 - T;

    if (T <= 0) {
        console.log(`${1 - T} A.C.`);
    } else {
        console.log(`${T} D.C.`);
    }
}

}