var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines
            .shift()
            .split(" ").map((item) => parseInt(item));
            
var inicial = horaInicial * 60 + minutoInicial;
var final = horaFinal * 60 + minutoFinal;

if (final <= inicial) {
    final += 24 * 60;
} 

console.log('O JOGO DUROU ' + Math
       .floor((final - inicial) / 60) +' HORA(S) E '
       + (final - inicial) % 60 + ' MINUTO(S)');
