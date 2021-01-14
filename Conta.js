export class Conta{
    constructor( saldoInicial, cliente, agencia){
        this._saldo = saldoInicial; // coloco as propriedades como privadas se tiver que abrir alguma faço por meio de um acessor
        this._cliente = cliente;
        this._agencia = agencia;
       
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


    sacar(valor){
        let taxa = 1
        return this._sacar(valor, taxa); // para retornar o valor que puxa do _sacar

    }

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