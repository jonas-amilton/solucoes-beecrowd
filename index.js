// Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares,
// quantos valores digitados foram ímpares, quantos valores digitados foram
// positivos e quantos valores digitados foram negativos.

// Entrada
// O arquivo de entrada contém 5 valores inteiros quaisquer.

// Saída
// Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha,
// não esquecendo o final de linha após cada uma.

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let listaNumeros = [
  Number(lines.shift()),
  Number(lines.shift()),
  Number(lines.shift()),
  Number(lines.shift()),
  Number(lines.shift()),
];

for (let i = 0; i < listaNumeros.length; i++) {
  if (listaNumeros[i] % 2 === 0) {
    let par = i++;

    if (par > 1) {
      console.log(par, " valor(es) par(es)");
    }
  }
  if (listaNumeros[i] < 0) {
    let negativo = i++;

    if (negativo > 1) {
      console.log(negativo + 1, " valor(es) negativo(s)");
    }
  }
}
