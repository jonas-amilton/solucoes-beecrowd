# Instruções para rodar exercícios do Beecrowd

## 1. Coloque as entradas no arquivo `stdin`

Crie um arquivo chamado `stdin` na raiz do projeto com os dados de entrada do exercício, exatamente como o Beecrowd fornece.

---

## 2. Escreva a solução em uma das linguagens abaixo

- `index.js` para JavaScript (Node.js)
- `index.php` para PHP
- `Main.java` para Java (classe principal deve se chamar `Main`)

---

## 3. Execute no terminal com redirecionamento do `stdin`

### JavaScript:
```
node index.js < stdin
```

### PHP:
```
php index.php < stdin
```

### Java:
```
javac Main.java
java Main < stdin
```