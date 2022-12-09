var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");


function calculaAB(A, B){
    let calculo = A+B;
    console.log("X = " + calculo);
}

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
    

calculaAB(A, B);
