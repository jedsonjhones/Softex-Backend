# Instruções:
 

# RESPOSTA
CREATE DATABASE IF NOT EXISTS BlogDB;
USE BlogDB;

CREATE TABLE IF NOT EXISTS Autor (
    AutorID INT PRIMARY KEY AUTO_INCREMENT,
    NomeAutor VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Post (
    PostID INT PRIMARY KEY AUTO_INCREMENT,
    Titulo VARCHAR(255) NOT NULL,
    Conteudo TEXT,
    DataPublicacao DATE NOT NULL,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID)
);

CREATE TABLE IF NOT EXISTS Comentario (
    ComentarioID INT PRIMARY KEY AUTO_INCREMENT,
    TextoComentario TEXT NOT NULL,
    DataComentario DATE NOT NULL,
    AutorID INT,
    PostID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID),
    FOREIGN KEY (PostID) REFERENCES Post(PostID)
);
