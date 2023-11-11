# Instruções:

Aplique o padrão de projeto <i>Observer</i> para criar um simples editor de texto. Considere a solução apresentada no Hipertexto 6 e utilize o código visto para implementar novas classes. Os requisitos para avaliar o projeto são: 
 - implementar uma subclasse da classe <b>Editor</b>  chamada <b>TextEditor</b>
- aplicar o método <b>insertLine</b> , que recebe os parâmetros <b> lineNumber</b>  e  <b>text</b>
- inserir o texto na ordem correspondente a lineNumber  e deslocar as linhas posteriores se necessário; 
- aplicar o método <b>removeLine</b> , que recebe <b>lineNumber</b>  como parâmetro, deleta o texto da linha correspondente e desloca as linhas posteriores se necessário; 
- instanciar um <b>TextEditor</b> e disparar o evento “<i>open</i>";
- receber as linhas de texto, que serão inseridas no objeto <b>textEditor</b>, do usuário até que ele envie o texto “EOF”, que não deve ser inserido no objeto <b>textEditor</b>
- por fim, o <b>textEditor</b> deve disparar o evento “<i>save</i>” para que o conteúdo seja salvo no arquivo configurado e imprimir todo o conteúdo do arquivo na tela. 

# RESPOSTA

## CÓDIGO EM JS

```JS
const prompt = require("prompt-sync")();

class Observer {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notify(event, data) {
    this.observers.forEach(observer => observer.update(event, data));
  }
}

class Editor {
  constructor() {
    this.content = [];
    this.observers = new Observer();
  }

  insertLine(lineNumber, text) {
    this.content.splice(lineNumber - 1, 0, text);
    this.observers.notify("insertLine", { lineNumber, text });
  }

  removeLine(lineNumber) {
    this.content.splice(lineNumber - 1, 1);
    this.observers.notify("removeLine", { lineNumber });
  }

  open() {
    this.observers.notify("open");
  }

  save() {
    this.observers.notify("save", { content: this.content.join("\n") });
  }
}

class TextEditor extends Editor {
  constructor() {
    super();
  }
}

const textEditor = new TextEditor();

textEditor.observers.addObserver({
  update(event, data) {
    console.log(`Event: ${event}`, data);
  },
});

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Digite as linhas de texto. Digite 'EOF' para encerrar.");

rl.on("line", (input) => {
  if (input.trim().toLowerCase() === "eof") {
    textEditor.save();
    rl.close();
  } else {
    textEditor.insertLine(textEditor.content.length + 1, input);
  }
});

textEditor.open();

   
```



