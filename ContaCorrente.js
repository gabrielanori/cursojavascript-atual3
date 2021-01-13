import { Cliente } from "./Cliente.js";
import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta{
    // herdamos propriedades e métodos de Conta
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
        // vai char o constructor da classe pai estou chamando o construtor dentro do construtor. Passando o mouse em cima do super ele diz, Este super esta referenciando um constructor da classe Conta e esse precisa de um saldo inicial, cliente e agencia
        // super é uma referencia para a classe pai
        ContaCorrente.numeroDeContas += 1;
    }
    sacar(valor){
        let taxa = 1.1;
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        //especializando o comportamento
        //podedia colocar um sacar aqui com caracteristicas especificas para q apenas na conta corrente aplicassemos
    }

// como fiz extends Conta ele usa o sacar depositar transferir dele
// aqui tenho todo o comportamento que tinha antes do ContaCorrente e herdando de Conta
// HERANÇA estou herdando a minha classe
}
