let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());
let d = Number(lines.shift());
let e = Number(lines.shift());

let listaDeNumeros = [a, b, c, d, e];

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

for(let i = 0; i < listaDeNumeros.length; i++){
    
   
    if(listaDeNumeros[i] > 0){
        positivos++
    }
    if(listaDeNumeros[i] < 0){
        negativos++
    }

    if(listaDeNumeros[i] %2 === 0){
        pares++
    }else{
        impares++
    }
    
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);