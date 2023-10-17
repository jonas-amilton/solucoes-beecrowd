let listaCrescente = lines
  .shift()
  .split(" ")
  .map((x) => parseInt(x));
  
let listaDecrescente = [...listaCrescente];

listaDecrescente.sort((a, b) => a - b);

for (let i = 0; i < 3; ++i) {
  console.log(listaDecrescente[i]);
}
console.log();

for (let i = 0; i < 3; ++i) {
  console.log(listaCrescente[i]);
}
