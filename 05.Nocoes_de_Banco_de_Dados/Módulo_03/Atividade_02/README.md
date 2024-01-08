# Instruções:
 

# RESPOSTA

INSERT INTO Autores (Nome, Nacionalidade) VALUES
('Autor1', 'Nacionalidade1'),
('Autor2', 'Nacionalidade2'),
('Autor3', 'Nacionalidade3');

INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES
('Livro1', 2020, 1),
('Livro2', 2018, 2),
('Livro3', 2015, 1),
('Livro4', 2017, 3),
('Livro5', 2019, 2);


SELECT Autores.*, Livros.*
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;


SELECT Autores.Nome AS NomeAutor, Livros.Titulo, Livros.AnoPublicacao
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;


SELECT Autores.Nome AS NomeAutor, Livros.Titulo, Livros.AnoPublicacao
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;


SELECT Autores.Nome AS NomeAutor, Livros.Titulo, Livros.AnoPublicacao
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Nacionalidade1';


SELECT Autores.Nome AS NomeAutor, COUNT(Livros.LivroID) AS QuantidadeLivros
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.AutorID, Autores.Nome;


