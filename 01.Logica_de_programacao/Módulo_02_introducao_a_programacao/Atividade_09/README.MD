# Instruções do projeto:

Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos.

# RESPOSTA

### CÓDIGO EM JS

```JS
const prompt = require("prompt-sync")(); /* Para roda o prompt no node */
/*Foi usando objeto para simular uma enumeração, onde cada umas das propriedade do objeto recebeu o nome 
de um dos candidatos e também valores representando a descrição do candidato  */
const Candidatos = {
    CANDIDATO_X: "candidato_X",
    CANDIDATO_Y: "candidato_Y",
    CANDIDATO_Z: "candidato_Z",
    BRANCO: "branco",
};

function eleicao() {
    /*abaixo foi criado o objeto "votos", ele armazenará a quantidade de votos de cada candidato, e esta inicializando do 0 */
    let votos = {
        [Candidatos.CANDIDATO_X]: 0,
        [Candidatos.CANDIDATO_Y]: 0,
        [Candidatos.CANDIDATO_Z]: 0,
        [Candidatos.BRANCO]: 0,
    };
    /* Inicia o loop while para repetir a votação até que o usuário decida encerrar, respondendo "encerrar" apos o voto.
    O usuário é solicitado a digitar o número correspondente ao candidato ou 0 para voto em branco. */
    while (true) {
        const voto = prompt(`Digite o número do candidato:\n889 para candidato_x, 847 para candidato_y, 515 para candidato_z ou 0 para votar em branco: `);

        const numeroCandidato = parseInt(voto);

        if (isNaN(numeroCandidato)) {
            console.log("Voto inválido. Digite um número válido");
            continue; /* Pede para votar novamente se caso não seja numérico */
        }

        /* O swith vai adicionar os votos conforme o numero votado */
        switch (numeroCandidato) {
            case 889:
                votos[Candidatos.CANDIDATO_X]++;
                break;
            case 847:
                votos[Candidatos.CANDIDATO_Y]++;
                break;
            case 515:
                votos[Candidatos.CANDIDATO_Z]++;
                break;
            case 0:
                votos[Candidatos.BRANCO]++;
                break;
            default:
                console.log("Voto inválido. Digite um número válido");
        }

        const continuar = prompt(`Caso deseje encerrar a votação digite \"encerrar" , para continuar, apenas de enter: `);
        if (continuar === "encerrar") {
            break;
        }
    }

    /* Verifica se há vencedor, e também o candidato com mais votos */
    let vencedor = Candidatos.CANDIDATO_X;
    let maiorVotos = votos[Candidatos.CANDIDATO_X];

    if (votos[Candidatos.CANDIDATO_Y] > maiorVotos) {
        vencedor = Candidatos.CANDIDATO_Y;
        maiorVotos = votos[Candidatos.CANDIDATO_Y];
    }

    if (votos[Candidatos.CANDIDATO_Z] > maiorVotos) {
        vencedor = Candidatos.CANDIDATO_Z;
        maiorVotos = votos[Candidatos.CANDIDATO_Z];
    }


    /* Exibe os resultados */
    console.log("Resultados da eleição:");
    console.log(`${Candidatos.CANDIDATO_X}: ${votos[Candidatos.CANDIDATO_X]} votos`);
    console.log(`${Candidatos.CANDIDATO_Y}: ${votos[Candidatos.CANDIDATO_Y]} votos`);
    console.log(`${Candidatos.CANDIDATO_Z}: ${votos[Candidatos.CANDIDATO_Z]} votos`);
    console.log(`${Candidatos.BRANCO}: ${votos[Candidatos.BRANCO]} votos`);
    /* Nenhum candidato será eleito caso haja empate de votos, ou não haja votos ou votos brancos seja o vencedor */
    if (maiorVotos === 0 || maiorVotos === votos[Candidatos.CANDIDATO_X] && maiorVotos === votos[Candidatos.CANDIDATO_Y] ||
        maiorVotos === votos[Candidatos.CANDIDATO_X] && maiorVotos === votos[Candidatos.CANDIDATO_Z]
        || maiorVotos === votos[Candidatos.CANDIDATO_Y] && maiorVotos === votos[Candidatos.CANDIDATO_Z] || maiorVotos === votos[Candidatos.BRANCO]) {
        console.log("Nenhum candidato foi eleito.");
    } else {
        console.log(`O vencedor é ${vencedor} com ${maiorVotos} votos.`);
    }
}
/* Chamada da função */
eleicao();
```
