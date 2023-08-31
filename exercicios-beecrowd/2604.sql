-- O setor financeiro da empresa precisa de um relatório que mostre o código e o nome dos produtos cujo preço são menores que 10 ou maiores que 100.


SELECT PRODUCTS.ID, PRODUCTS.NAME
FROM
PRODUCTS
WHERE
PRICE < 10 OR PRICE > 100
;
