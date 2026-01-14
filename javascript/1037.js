var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valorQualquer = parseFloat(lines.shift());

if (0 <= valorQualquer && valorQualquer <= 25) {
  console.log("Intervalo [0,25]");
} else if (25 < valorQualquer && valorQualquer <= 50) {
  console.log("Intervalo (25,50]");
} else if (50 < valorQualquer && valorQualquer <= 75) {
  console.log("Intervalo (50,75]");
} else if (75 < valorQualquer && valorQualquer <= 100) {
  console.log("Intervalo (75,100]");
} else {
  console.log("Fora de intervalo");
}
