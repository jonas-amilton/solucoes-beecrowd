var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

var entrada = lines.shift().trim().split(' ').map((x) => parseInt(x));

var menor = entrada[0];
var posicao = 0;
for (var i = 1; i < N; ++i) {
    if (entrada[i] < menor) {
        menor = entrada[i];
        posicao = i;
    }
}

console.log('Menor valor: ' + menor);
console.log('Posicao: ' + posicao);
