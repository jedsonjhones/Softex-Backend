# Instruções:
 

# RESPOSTA

Entidades:

Livro (IDLivro, Título, ISBN, ...)
Autor (IDAutor, Nome, ...)
Usuário (IDUsuario, Nome, Endereço, ...)
Empréstimo (IDEmpréstimo, DataEmpréstimo, DataDevoluçãoPrevista, ...)
Devolução (IDDevolução, DataDevolução, ...)
Relacionamentos:

Um Livro é escrito por um ou mais Autores.
Um Usuário faz um ou mais Empréstimos.
Um Livro pode ser emprestado em um ou mais Empréstimos.
Um Empréstimo é associado a um Usuário e a um Livro.
Um Empréstimo pode ter uma ou mais Devoluções.
Uma Devolução é associada a um Empréstimo.
Modelo Lógico:

Livro (IDLivro PK, Título, ISBN, ...)
Autor (IDAutor PK, Nome, ...)
Usuário (IDUsuario PK, Nome, Endereço, ...)
Empréstimo (IDEmpréstimo PK, DataEmpréstimo, DataDevoluçãoPrevista, IDLivro FK, IDUsuario FK, ...)
Devolução (IDDevolução PK, DataDevolução, IDEmpréstimo FK, ...)
MySQL Workbench:

Tabela Livro:

IDLivro (PK)
Título
ISBN
...
Tabela Autor:

IDAutor (PK)
Nome
...

Tabela Usuário:

IDUsuario (PK)
Nome
Endereço
...

Tabela Empréstimo:

IDEmpréstimo (PK)
DataEmpréstimo
DataDevoluçãoPrevista
IDLivro (FK)
IDUsuario (FK)
...
Tabela Devolução:

IDDevolução (PK)
DataDevolução
IDEmpréstimo (FK)