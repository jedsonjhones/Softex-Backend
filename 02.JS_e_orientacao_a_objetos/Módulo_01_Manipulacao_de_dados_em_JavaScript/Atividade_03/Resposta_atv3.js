const prompt = require("prompt-sync")();

// Declaração das variaveis
let variavelBoolean;
let variavelBigint;
let variavelString;
let variavelSymbol;

// Exibindo os conteúdos com valores UNDEFINED
console.log("Variável 'boolean':", variavelBoolean);
console.log("Variável 'bigInt':", variavelBigint);
console.log("Variável 'string':", variavelString);
console.log("Variável 'symbol':", variavelSymbol);

// "Deixando" as variáveis com valores nulos
booleanVariable = null;
variavelBigint = null;
stringVariable = null;
variavelSymbol = null;

// Exibindo conteúdo das variáveis com valor nulo
console.log("Variável 'boolean' com valor nulo:", variavelBoolean);
console.log("Variável 'bigInt' com valor nulo:", variavelBigint);
console.log("Variável 'string' com valor nulo:", variavelString);
console.log("Variável 'symbol' com valor nulo:", variavelSymbol);

// Atribuindo valores para cada uma das variáveis
variavelBoolean = true; // Atribuindo um valor booleano
variavelBigint = 123456789123456789; // Atribuindo um valor bigint
variavelString = "uma string"; // Atribuindo uma string
variavelSymbol = Symbol("umsymbol"); // Atribuindo um symbol

// Exibindo conteúdos das variáveis com novos valores atribuídos
console.log("Variável 'boolean' com valor booleano:", variavelBoolean);
console.log("Variável 'bigint' com valor bigint:", variavelBigint);
console.log("Variável 'string' com valor string:", variavelString);
console.log("Variável 'symbol' com valor symbol:", variavelSymbol);