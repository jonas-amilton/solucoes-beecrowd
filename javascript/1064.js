let n1 = Number(lines.shift());
let n2 = Number(lines.shift());
let n3 = Number(lines.shift());
let n4 = Number(lines.shift());
let n5 = Number(lines.shift());
let n6 = Number(lines.shift());

let qtdPositivos = 0;
let listaPositivos = [];

let listaAuxiliar = [n1, n2, n3, n4, n5, n6];

for(let i = 0; i < listaAuxiliar.length; i++){
    if(listaAuxiliar[i] > 0){
        qtdPositivos++
        listaPositivos.push(listaAuxiliar[i]);
    }
}

console.log(`${qtdPositivos} valores positivos`);
console.log((listaPositivos.reduce((a,b)=>a+b)/qtdPositivos).toFixed(1));
