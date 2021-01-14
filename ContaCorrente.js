import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta{
    // herdamos propriedades e métodos de Conta
    //aqui como a ContaCorrente herda da Conta podemos fazer com que ela use as propriedades privadas e protegidas da classe Conta porque ela é uma extensão da Conta faz sentido que ela possa acess _saldo
    //Aqui qdo herda ele precisa criar uma conta um obj conta para falar olha voce herda todas as propriedades na hora que vc for construir no seu construtor
    static numeroDeContas = 0; 
    // especifico da corrente
   // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    constructor(cliente, agencia){
        // estou dentro de uma classe entao chamar o new Conta () nao faz muito sentido
        super(0, cliente, agencia);
        //TEM QUE CHAMAR O SUPER QUANDO VAMOS DERIVAR UMA CLASSE, NA HORA DE ACESSAR O THIS
        //nem sempre esta chamando o constructor, essa palavra super faz uma referência à classe que ele esta estendendendo a sua classe mãe
        // neste caso o SUPER esta recebendo o CONSTRUCTOR da classe CONTA, se eu estivesse herdando de outra classe como a contaPoupança ele iria referenciar a classe contaPoupanca
        // vai chamar o constructor da classe pai estou chamando o construtor dentro do construtor. Passando o mouse em cima do super ele diz, Este super esta referenciando um constructor da classe Conta e esse precisa de um saldo inicial, cliente e agencia
        // super é uma referencia para a classe pai
        ContaCorrente.numeroDeContas += 1;
    }

   /*  teste(){
        super.teste(); AQUI EU CHAMEI O COMPORTAMENTO DA CLASSE MÃE UTILIZANDO O SUPER
        console.log("teste na classe conta corrente"); AQUI PODEMOS MELHORAR O COMPORTAMENTO OU SOBRESCREVER MUDAR
    }  NESTE CASO ESTOU SOBRESCREVENDO A CLASSE MAE */ 


    //SOBREESCREVENDO O COMPORTAMENTO DE SACAR  um método que sobrescreve o metodo da classe mãe
    sacar(valor){ // AQUI ESTOU SOBRESCREVENDO POR COMPLETO PEGANDO UM METODO DE MESMO NOME E NÃO CHAMA O SUPER DELE POIS ESTAMOS COLOCANDO UM COMPORTAMENTO NOVO
        let taxa = 1.1;
        return this._sacar(valor, taxa) // não deve ser usado fora da classe
        // aqui poderia escrever da mesma forma return super._sacar é a mesma coisa de usar o this pq não estou sobrescrevendo esse método, posso chamar ele como ele fosse da minha propria classe, ele simplismente vai chamar da propria classe mãe
        /* const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        } Retirei pq esta em Conta*/
        //especializando o comportamento
        //podedia colocar um sacar aqui com caracteristicas especificas para q apenas na conta corrente aplicassemos
    }

// como fiz extends Conta ele usa o sacar depositar transferir dele
// aqui tenho todo o comportamento que tinha antes do ContaCorrente e herdando de Conta
// HERANÇA estou herdando a minha classe
}
