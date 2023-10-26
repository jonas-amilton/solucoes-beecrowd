let n1 = Number(lines.shift());
let n2 = Number(lines.shift());
let n3 = Number(lines.shift());
let n4 = Number(lines.shift());
let n5 = Number(lines.shift());

let listaAuxiliar = [n1, n2, n3, n4, n5];

let qtdPares = 0;

for(let i = 0; i < listaAuxiliar.length; i++){
    if(listaAuxiliar[i] % 2 === 0){
        qtdPares++;
    }
}

console.log(`${qtdPares} valores pares`);
