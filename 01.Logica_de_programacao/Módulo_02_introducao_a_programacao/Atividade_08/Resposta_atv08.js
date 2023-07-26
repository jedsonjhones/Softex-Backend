const prompt = require("prompt-sync")(); /* Para rodar o prompt no node  */
// Função
function calculaIdade() {
    const nomeCompleto = prompt("Digite o seu nome completo:");
    let anoNascimento;

    while (true) {
        try { /* Se o ano de nascimento for valido, o loop é interronpido no break. Se não sera lançado a exceção "Ano de nascimento inválido" */
            anoNascimento = parseInt(prompt("Digite seu ano de nascimento que seja entre 1922 e 2021:"));
            if (Number.isInteger(anoNascimento) && anoNascimento >= 1922 && anoNascimento <= 2021) {  /* Verifica se é um numero inteiro e se está entre 1922 e 2021  */
                break;
            }
            throw new Error("Ano de nascimento inválido.");
        } catch (error) { /* Captura e exibi a mensagem de erro no console  */
            console.log(error.message);
        }
    }

    // Cálcula a idade
    const idade = 2022 - anoNascimento;

    // Exibi os resultados
    console.log(`Nome: ${nomeCompleto}`);
    console.log(`Idade em 2022: ${idade} anos`);
}
// Chamada da função
calculaIdade();