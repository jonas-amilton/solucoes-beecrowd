var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var vendedor = lines.shift();
var salario = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());

var total = salario + 0.15 * vendas;

console.log("TOTAL = R$ " + total.toFixed(2));