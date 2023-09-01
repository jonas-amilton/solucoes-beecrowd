/*
Neste problema, você deverá ler 3 palavras que 
definem o tipo de animal
 possível segundo o esquema abaixo, 
 da esquerda para a direita.
Em seguida conclua qual dos animais 
seguintes foi escolhido, através das três palavras
 fornecidas.
 */

 var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const data = {
  vertebrado: {
    ave: {
      carnivoro: "aguia",
      onivoro: "pomba",
    },
    mamifero: {
      onivoro: "homem",
      herbivoro: "vaca",
    },
  },
  invertebrado: {
    inseto: {
      hematofago: "pulga",
      herbivoro: "lagarta",
    },
    anelideo: {
      hematofago: "sanguessuga",
      onivoro: "minhoca",
    },
  },
};

const atributos = lines;

console.log(data[atributos[0]][atributos[1]][atributos[2]]);

