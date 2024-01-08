# Instruções:
 

# RESPOSTA
INSERT INTO Produtos (NomeDoProduto, Preco, QuantidadeEmEstoque)
VALUES
('Smartphone', 799.99, 20),
('Tablet', 349.99, 10),
('Fone de Ouvido', 49.99, 50);


UPDATE Produtos
SET QuantidadeEmEstoque = 25, Preco = 849.99
WHERE ProdutoID = 1;


UPDATE Produtos
SET QuantidadeEmEstoque = QuantidadeEmEstoque - 5
WHERE ProdutoID = 2;

UPDATE Produtos
SET QuantidadeEmEstoque = QuantidadeEmEstoque - 10
WHERE ProdutoID = 3;

