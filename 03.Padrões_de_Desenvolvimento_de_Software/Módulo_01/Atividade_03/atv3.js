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