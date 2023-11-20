# Instruções:

Você é um agente secreto altamente treinado da organização inglesa MI7 e recebeu uma missão crítica: proteger a Base Secreta contra invasões inimigas. O local contém informações vitais para a segurança mundial e só pode ser acessado por um único sistema de segurança confiável.
A sua tarefa é implementar um sistema de segurança para a Base Secreta usando o padrão Singleton em TypeScript. A ideia é que apenas uma instância do sistema de segurança possa ser criada, garantindo que o local esteja bem protegido.
Instruções:</b></div><div><b>1);</b>Crie uma classe chamada SistemaSeguranca. Ela deve implementar o padrão Singleton. Certifique-se de que apenas uma instância da classe possa ser criada;&nbsp;</div><div><b>2)&nbsp;</b>A classe SistemaSeguranca deve ter um método chamado acessarBaseSecreta. Ele verifica se a senha inserida pelo agente coincide com a da Base Secreta. Se estiver correta, o acesso é concedido. Caso contrário, é negado;&nbsp;</div><div><span><b>3)</b> Crie um programa principal que demonstre o uso do Singleton SistemaSeguranca. No programa, um agente secreto tentará acessar a Base Secreta inserindo uma senha. Se a senha estiver correta, o acesso será concedido. Caso contrário, será negado.</span><br></div><div><span><br></span></div><div><b>Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.</b><span><br></span></div></div>

# RESPOSTA

## CÓDIGO EM JS

```typescript
class SistemaSeguranca {
  private static instancia: SistemaSeguranca | null = null;
  private senhaBaseSecreta: string = "senhaSuperSecreta";

  private constructor() {}

  public static getInstance(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta. Bem-vindo, agente secreto!");
    } else {
      console.log("Acesso negado. Senha incorreta. Intruso detectado!");
    }
  }
}

const sistemaSeguranca = SistemaSeguranca.getInstance();

sistemaSeguranca.acessarBaseSecreta("senhaIncorreta"); // Acesso negado
sistemaSeguranca.acessarBaseSecreta("senhaSuperSecreta"); // Acesso concedido

```



