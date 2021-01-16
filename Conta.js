//CLASSE CONTA È UMA CLASSE ABSTRATA não pode ser instanciada DIRETAMENTE, só funciona para SER HERDADA, nunca pode ser construida diretamente, nunca pode dar um new nela, nunca vai ter uma instancia dessa própria classe, mas ela pode ser herdada,  assim como nós temos a classe ContaCorrente que herda a Classe abstrata chamada Conta
export class Conta{
    constructor( saldoInicial, cliente, agencia){
        if(this.constructor == Conta){ // o this.constructor salva quem foi o constructor inicialmente chamado
            throw new Error("Voce não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata")
        }
        this._saldo = saldoInicial; // coloco as propriedades como privadas se tiver que abrir alguma faço por meio de um acessor
        this._cliente = cliente;
        this._agencia = agencia;
        console.log(this.constructor); // ele fala qual é, a classe instanciada e filha exemplo [Function: ContaPoupanca]
       

    }
    
    // atributos que existem são: Privados, Públicos e Protegidos
    //Privado - pode ser usado só por aquela classe
    //Publico - Ser usado por todo mundo
    //Protegido - ele pode ser usado por quem herda daquela classe mas tambem pela própria classe

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
//METODO ABSTRATO definir uma interface padrao, todo mundo vai ter esse método, mas devemos definir como cada um vai realmente executar ele
   sacar(valor){ // nao é feito para ser chamado diretamente assim como a classe Conta nao é pra ser instanciada diretamente, é feito pra ser sobrescrito,  MÉTODO ABSTRATO assim garantimos que todas as implemementações que herdam de Conta vão ter que implementar esse método sacar e vão ter que saber como vao chamar esse método e manipular ele para ter uma ter uma taxa para saber como uma conta tem q fazer seu saque ou não, então lanço um erro se eles nao especificarem
        throw new Error("O método Sacar da conta é abstrato")
       
    }
    
   /*  sacar(valor){
        let taxa = 1
        return this._sacar(valor, taxa); // para retornar o valor que puxa do _sacar

    } ESSA TAXA GERAL NÃO FAZ SENTIDO POIS O BANCO PEDE Q TODOS OS SAQUES TENHAM TAXAS E 1 NAO É TAXA ENTAO DEVEMOS FAZER UMA FORMA DE COLOCAR EM TODOS OU SE NÃO TEM Q PERGUNTAR
 */
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
     
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }


}