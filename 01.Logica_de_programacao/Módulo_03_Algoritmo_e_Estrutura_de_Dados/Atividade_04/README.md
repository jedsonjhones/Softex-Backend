Instruções do projeto:

Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.

# RESPOSTA

# CÓDIGO EM JS

```JS
const prompt = require("prompt-sync")();
/*
Definição da classe Pessoa, a classe que representa o nó. O construtor dela recebe 3 parâmetros, que é nome, idade e filho que por padrão definimos
como null, pois o filho vai depender do encadeamento.
*/
class Pessoa {
    constructor(nome, idade, filho = null) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}
/*
 A classe ListaLigadaPessoas define a estrutura ligada com vários nós e as operações necessárias para a manipulação da lista. Esta
 classe tem um único atributo head, que é a referência para o primeiro nó da lista, onde cabeca será null se a lista estiver vazia.
 */
class ListaLigadaPessoas {
    constructor() {
        this.cabeca = null;
    }
    /* inserção no inicio (Push)
       Esse método 'addFirst' instancia um novo nó, que adiciona uma nova pessoa no início da lista. Esse método recebe nome e idade como parâmetros
       essa nova instancia vem com os valores passados e com a referência ao nó que era o primeiro da lista antes da inserção,Assim o novo nó é definido
       como o primeiro da lista, ou cabeça no caso.
    */
    addFirst(nome, idade) {
        const novaPessoa = new Pessoa(nome, idade, this.cabeca);
        this.cabeca = novaPessoa;
    }
    /* inserção no fim.
    Esse método 'addLast' instancia um novo nó pessoa, com um nome e idade que será adicionado. Se esse nó for o primeiro da lista, ele se tornará a nova cabeça.
    Caso contrário, a operação fica sendo executada até que o próximo de algum nó esteja vazio. Quando isso acontecer, o novo nó será
     definido como o filho deste último nó.
    */
    addLast(nome, idade) {
        const novaPessoa = new Pessoa(nome, idade);
        if (!this.cabeca) {
            this.cabeca = novaPessoa;
            return;
        }
        let atual = this.cabeca;
        while (atual.filho) {
            atual = atual.filho;
        }
        atual.filho = novaPessoa;
    }
    /* Busca (search)
    Esse método 'search' recebe o atributo Nome como parâmetro e a cabeça da lista é identificada, verificando se o nome do nó é igual ao que está sendo pesquisado.
    Se sim, retorna o nó encontrado. Caso contrário, vai para o próximo do nó e continua pesquisando. Se chegar ao fim da lista e ainda não ter encontrado
     o nó, o valor retornado é null.
   */
    search(nome) {
        let atual = this.cabeca;
        while (atual !== null) {
            if (atual.nome === nome) {
                return atual;
            }
            atual = atual.filho;
        }
        return null;
    }
    /* 
    Dentro desse método 'size', a cabeça da lista é identificada. O laço continua em execução até encontrar o fim da lista, ou seja, quando o próximo do nó for vazio.
    Enquanto isso não acontece, o contador recebe +1 por cada nó. Ao final, o total (count) é retornado com o número de nós.
    */
    size() {
        let count = 0;
        let atual = this.cabeca;
        while (atual !== null) {
            count++;
            atual = atual.filho;
        }
        return count;
    }
    /* 
    O método 'printList' é usado para exibir as informações das pessoas na lista, e tambem o nome de seus filhos, caso eles tenham. Ele percorre a lista,
    imprime o nome e a idade de cada pessoa e em seguida verifica se essa pessoa tem um filho. Se tiver, exibe o nome do filho.
    */
    printList() {
        let atual = this.cabeca;
        while (atual !== null) {
            console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
            if (atual.filho) {
                console.log(`Filho de ${atual.nome}: ${atual.filho.nome}`);
            } else {
                console.log(`${atual.nome} não tem filho.`);
            }
            console.log();
            atual = atual.filho;
        }
    }
}

// Criação da lista de pessoas
const listaLigadaPessoas = new ListaLigadaPessoas();

// Adicionando pessoas à lista
listaLigadaPessoas.addFirst("Dudu", 29);
listaLigadaPessoas.addLast("Rony", 28);
listaLigadaPessoas.addLast("Veiga", 25);
listaLigadaPessoas.addLast("Gomes", 27);
listaLigadaPessoas.addLast("Endrick", 16);

// Busca uma pessoa na lista
const pessoaBuscada = listaLigadaPessoas.search("Endrick");
console.log("Pessoa encontrada:", pessoaBuscada);

// Exibe a lista de pessoas
listaLigadaPessoas.printList();

// Exibe o tamano da lista
const tamanhoLista = listaLigadaPessoas.size();
console.log("Tamanho da lista:", tamanhoLista);
```