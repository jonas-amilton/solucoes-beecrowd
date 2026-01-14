var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let X = parseInt(lines.shift());
let Y = parseInt(lines.shift());

let inicio = Math.min(X, Y);
let fim = Math.max(X, Y);

let soma = 0;

for (let i = inicio + 1; i < fim; i++) {
  if (i % 2 !== 0) {
    soma = soma + i;
  }
}

console.log(soma);
