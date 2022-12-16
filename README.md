# BEECROWD - Guia de como enviar soluções com javascript
### Alguns exercicios aqui do repositorio tem mais de uma solução encontrada, sinta se a vontade para fazer um fork e contribuir

# Como enviar respostas com JS

<p align="center">
Primeiramente, crie um arquivo chamado 'stdin' em sua pasta. Iremos usar esse arquivo para ler os valores do nosso problema!
</p>

<p align="center">
  <img src="/assets/arq_stdin.png" width="350">
</p>

<p align="center">
Agora, vamos resolver o problema 1001 do Beecrowd. Para isso, temos que iniciar declarando o nosso input:
</p>

```
var input = require('fs').readFileSync('stdin', 'utf8')

```
<p align="center"> 
Para recebermos os valores da entrada, precisamos fazer uma requisição do módulo conhecido como 'fs'. Este módulo fornece operações de I/O (Input/Output ou E/S, Entrada/Saída).
<br>
Iremos usar apenas a função readFileSync do 'fs', essa função permite a leitura de forma síncrona do arquivo que iremos passar como parâmetro da função, junto com seu tipo de arquivo 'utf8'.
</p>

<p align="center">
Ok, nosso input está pronto! Vamos testar? Entre no arquivo stdin e digite 10 e 9 um em cada linha, em seguida digite `console.log(input)` no código.
</p>

<p align="center">
  <img src="/assets/teste_stdin.png" width="800">
</p>

<p align="center">
  Perceba que foi impresso 10 e 9, conforme digitados no arquivo stdin! Pois o nosso input está lendo os valores digitados naquele arquivo.
</p>

```
var valoresRecebidos = input.split('\n')

```

<p align="center">
Digite isso no seu código. Perceba que declaramos uma variável chamada valoresRecebidos, essa variável irá receber os valores do input e armazena-los. Mas, por que usar o método .split? A resposta é simples, o nosso input esta retornando uma string, então o método split irá criar uma lista ordenada de substrings de acordo com o nosso divisor, que no caso foi o "\n", pois precisamos quebrar linha na hora de receber os valores conforme o beecrowd pede.
<br>
Vamos imprimir a variável valoresRecebidos para acompanhar o processo:
</p>

<p align="center">
  <img src="/assets/codigo.png" width="800">
</p>

<p align="center">
Perceba que foi retornada uma lista com os valores de acordo como nos separamos eles! No caso usando uma quebra de linhas igual o problema pede.
<br>
Agora ficou fácil! Só precisamos armazenar os valores 10 e 9 em suas respectivas variáveis, no caso A e B.
</p>

```
var A = parseInt(valor.shift())
var B = parseInt(valor.shift())
```
<p align="center">
Ok... vamos entender o que foi feito! O método shift em JavaScript remove o primeiro elemento de um array e retorna esse elemento. Ou seja, estamos pegando o primeiro elemento do array valoresRecebidos e jogando na variável A, em seguida pegamos o segundo elemento e jogamos na variável B. Mas não acabou por aí, perceba que temos que receber valores inteiros da entrada/inputs, ou seja, temos que converter o elemento que estamos recebendo do array para valores inteiros, para isso basta usarmos a função parseInt(), essa função retorna um valor inteiro do elemento que estamos passando!
<br>
Pronto! Agora é só a gente criar a variável X e fazer a soma entre A e B!
</p>

```
var X = A + B

```

<p align="center">
Por fim, nosso código ficará assim:
</p>

```
var input = require('fs').readFileSync('stdin', 'utf8')

var valoresRecebidos = input.split('\n')

var A = parseInt(valoresRecebidos.shift())
var B = parseInt(valoresRecebidos.shift())

var X = A + B

console.log('X = ' + X)
```

# Vamos testa-lo para ver se ta funcionando conforme o beecrowd deseja!

<p align="center">
  <img src="/assets/teste.png" width="600">
</p>

<p aligm="center">
Aeee! Você conseguiu resolver o problema 1001 do beecrowd, Mas ainda falta um detalhe. Sabe a nosso input que ta lendo o arquivo 'stdin'? Esse arquivo tem o mesmo nome do arquivo que compila e verifica as entradas no própio beecrowd! Ou seja, com esse comando vamos estar acessando as pastas do beecrowd e receber os valores da entrada. Só que o diretório do arquivo stdin do beecrowd é diferente do nosso! Se enviarmos assim, nossa solução irá dar Runtime error. Para resolver esse problema, devemos apenas adicionar o "/dev/stdin" no nosso parâmetro da função.
<br>
Veja:
</p>

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8')
```

## resultado final:

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var valoresRecebidos = input.split('\n')

var A = parseInt(valoresRecebidos.shift())
var B = parseInt(valoresRecebidos.shift())

var X = A + B

console.log('X = ' + X)
```
<p align="center">
Parabéns!! Você conseguiu resolver o problema 1001 do beecrowd com JavaScript, a melhor linguagem da internet 😜.
<br>
"O TRABALHO DURO VENCE O DOM NATURAL." - Rock Lee
</p>


# Lista de métodos úteis para as soluções:

### 16 Métodos de array JavaScript que todo bom Desenvolvedor Web deve saber
### https://terminalroot.com.br/2021/09/16-metodos-de-array-javascript-que-todo-bom-desenvolvedor-web-deve-saber.html

### Como manipular arrays em JavaScript
### https://www.freecodecamp.org/portuguese/news/como-manipular-arrays-em-javascript/amp/

### Metodo Reducer
### https://medium.com/swlh/javascript-reduce-with-examples-570f1b51e854
<br>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>
