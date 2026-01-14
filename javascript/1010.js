var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
// lines.shift(): shift() é um método que remove o primeiro elemento 
// de um array e retorna esse elemento. Neste caso, ele está removendo
//  e retornando a primeira linha do array lines.

// .trim(): trim() é um método que remove espaços em
//  branco do início e do fim de uma string.

// .split(" "): split(" ") é um método que divide uma string
//  em um array de substrings e retorna o novo array. Neste caso,
//  ele está dividindo a string sempre que encontra um espaço.

// let [codigo1, quantidade1, valor1] = ...: Isso é chamado de
//  desestruturação de array. Ele cria três novas variáveis codigo1, quantidade1,
//   e valor1 e atribui a elas os três primeiros elementos do array retornado por split(" ").

// Então, em resumo, essa linha de código está pegando a primeira linha
//  do array lines, removendo espaços em branco do início e do fim, dividindo-a
//   em substrings sempre que encontra um espaço, e então atribuindo essas substrings
//    às variáveis codigo1, quantidade1, e valor1.

let [codigo1, quantidade1, valor1] = lines.shift().trim().split(" ");
let [codigo2, quantidade2, valor2] = lines.shift().trim().split(" ");



quantidade1 = parseInt(quantidade1);
valor1 = parseFloat(valor1);

quantidade2 = parseInt(quantidade2);
valor2 = parseFloat(valor2);

let total = (quantidade1 * valor1) + (quantidade2 * valor2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);