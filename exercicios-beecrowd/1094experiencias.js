var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var casosDeTeste = parseInt(lines.shift().trim());

var [coelhos, ratos, sapos] = [0, 0, 0];
for (var i = 0; i < casosDeTeste; ++i) {
    var [quantia, tipo] = lines.shift()
    .trim()
    .split(' ');
    quantia = parseInt(quantia);

    if (tipo === 'C') {
        coelhos += quantia;
    } else if (tipo === 'R') {
        ratos += quantia;
    } else if (tipo == 'S') {
        sapos += quantia;
    }
}
total = coelhos + ratos + sapos;

console.log('Total: ' + total + ' cobaias');
console.log('Total de coelhos: ' + coelhos);
console.log('Total de ratos: ' + ratos);
console.log('Total de sapos: ' +sapos);
console.log('Percentual de coelhos: ' 
             + (coelhos / total * 100).toFixed(2) + ' %');
console.log('Percentual de ratos: '
             + (ratos / total * 100).toFixed(2) + ' %');
console.log('Percentual de sapos: '
             + (sapos / total * 100).toFixed(2) + ' %');
