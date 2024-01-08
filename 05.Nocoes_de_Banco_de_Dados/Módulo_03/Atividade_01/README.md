# Instruções:
 

# RESPOSTA
SELECT *
FROM transacoes;


SELECT ID_Transacao AS ID_Transacao, Data AS Data, Valor AS Valor
FROM transacoes;


SELECT *
FROM transacoes
WHERE Valor > 100.00;

SELECT *
FROM transacoes
ORDER BY Valor DESC;


SELECT AVG(Valor) AS Media, MAX(Valor) AS Valor_Maximo, MIN(Valor) AS Valor_Minimo, COUNT(*) AS Total_Transacoes
FROM transacoes;

SELECT Produto, AVG(Valor) AS Media_Valor
FROM transacoes
GROUP BY Produto;


SELECT Categoria,
       COUNT(*) AS Quantidade_Total,
       SUM(Quantidade) AS Valor_Total_Vendas,
       AVG(Valor) AS Media_Valor_Transacao
FROM produtos
GROUP BY Categoria;