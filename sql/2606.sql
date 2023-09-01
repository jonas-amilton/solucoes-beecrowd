-- Quando os dados foram migrados de Banco de Dados, houve um pequeno mal-entendido por parte do antigo DBA.

-- Seu chefe precisa que você exiba o código e o nome dos produtos, cuja categoria inicie com 'super'.

SELECT
PRODUCTS.ID, PRODUCTS.NAME
FROM
PRODUCTS
JOIN
CATEGORIES
ON
PRODUCTS.ID_CATEGORIES = CATEGORIES.ID
WHERE
CATEGORIES.NAME LIKE 'super%'
;
