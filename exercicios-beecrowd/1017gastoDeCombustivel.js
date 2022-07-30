var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempoGasto = parseInt(lines.shift());
var velocidadeMedia = parseInt(lines.shift());

var litrosNecessarios = (tempoGasto * velocidadeMedia) / 12;

console.log(litrosNecessarios.toFixed(3));