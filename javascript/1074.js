var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

for (var i = 0; i < N; ++i) {
    var X = parseInt(lines.shift());

    var retorno = "";
    if (X === 0) {
        retorno += "NULL";
    } else if (X > 0) {
        if (X % 2) {
            retorno += "ODD";
        } else {
            retorno += "EVEN";
        }
        retorno += " POSITIVE";
    } else {
        if (-X % 2) {
            retorno += "ODD";
        } else {
            retorno += "EVEN";
        }
        retorno += " NEGATIVE";
    }

    console.log(retorno);
}
