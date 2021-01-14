import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);


const contaCorrenteRicardo = new ContaCorrente( 0, cliente1, 1001);
const contaPoupanca = new ContaPoupanca( 50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

// -> const conta = new Conta(0, cliente1, 1001); Exemplo não faz sentido criar  CONTA É UMA CLASSE QUE NAO FAZ SENTIDO SER INSTANCIADA NAO FAZ SENTIDO ELA TER UM OBJETO, EU CRIEI ELA PRA ELA SER SOMENTE HERDADA, PRA EU TER A ESPECIALIZAÇÃO DELA, ELA CONTEM CODIGO ELA É IMPORTANTE PARA O NOSSO SISTEMA MAS EU NAO QUERO QUE NINGUEM USE DESTA FORMA NO SISTEMA
//ELA É UMA CLASSE BASE
//PRECISO BLOQUEAR


console.log(contaSalario);
//console.log(contaPoupanca);
//console.log(contaCorrenteRicardo);