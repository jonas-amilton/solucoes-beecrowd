var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());
var percentual;

if (salario <= 400.00){
    percentual = 15;
    reajusteGanho = salario * percentual/100;
    var novoSalario = salario + reajusteGanho;
}else if (salario <= 800.00){
    percentual = 12;
    reajusteGanho = salario * percentual/100;
    var novoSalario = salario + reajusteGanho;
}else if (salario <= 1200.00){
    percentual = 10;
    reajusteGanho = salario * percentual/100;
    var novoSalario = salario + reajusteGanho;
}else if (salario <= 2000.00){
    percentual = 7;
    reajusteGanho = salario * percentual/100;
    var novoSalario = salario + reajusteGanho;
}else{
    percentual = 4;
    reajusteGanho = salario * percentual/100;
    var novoSalario = salario + reajusteGanho;
}

console.log('Novo salario: ' + novoSalario.toFixed(2));
console.log('Reajuste ganho: ' + reajusteGanho.toFixed(2));
console.log('Em percentual: ' + percentual + ' %');
