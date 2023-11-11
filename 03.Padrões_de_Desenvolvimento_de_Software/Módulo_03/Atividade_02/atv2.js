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
   