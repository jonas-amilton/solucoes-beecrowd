// var input = require("fs").readFileSync("/dev/stdin", "utf8");
// var lines = input.split("\n");

// var A = parseInt(lines.shift());
// var B = parseInt(lines.shift());
// var C = parseInt(lines.shift());
// var D = parseInt(lines.shift());

// var diferenca = A * B - C * D;

// console.log("DIFERENCA = " + diferenca);

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var D = parseInt(lines.shift());

let diferenca = A * B - C * D;
calcDiferenca(A * B - C * D);

function calcDiferenca(){
    console.log("DIFERENCA = " + diferenca);

}