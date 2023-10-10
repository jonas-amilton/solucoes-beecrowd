var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


const pi = 3.14159;
// alem de desestruturar o array, estamos garantindo que os dados serão sempre float com map
let [a, b, c] = lines.shift().split(" ").map((n)=>parseFloat(n));


let areaTriangulo = (a * c) / 2;
let areaCirculo = pi * (c * c);
let areaTrapezio = ((a + b) * c) / 2;
let areaQuadrado = b * b;
let areaRetangulo = a * b;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);