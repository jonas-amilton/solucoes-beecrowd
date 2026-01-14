var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var F = [];

var Fibonacci = (n) => {
    if (F[n] === -1) {
        F[n] = Fibonacci(n - 2) + Fibonacci(n - 1);
    }
    return F[n];
}

F[0] = 0;
F[1] = 1;
for (var i = 2; i < 46; ++i) {
    F[i] = -1;
}

var N = parseInt(lines.shift());
Fibonacci(N);

var resposta = [];
for (var i = 0; i < N; ++i) {
    resposta.push(F[i]);
}

console.log(resposta.join(' '));
