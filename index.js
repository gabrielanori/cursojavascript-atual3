import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";


import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"


const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")

const gerente = new Gerente("Ricardo", 5000, 123456015483);
gerente.cadastrarSenha("123")
const cliente = new Cliente("Lais", 78945612379, "456")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(gerenteEstaLogado, diretorEstaLogado, cliente);

//const estaLogado = SistemaAutenticacao.login(gerente, "123"); // POLIMORFISMO  COLOCANDO MEU GERENTE AQUI OU MEU DIRETOR SEM PRECISAR MUDAR A AUTENTICAÇÃO
// quero um metodo estatico chamado login
// static serve tanto para propriedade quanto pra metodos

//POLIMORFISMO quer dizer que a gente pode ter diferentes objetos diferentes classes sendo tratadas da mesma maneira, um objeto que se transforma em várias formas
//POLIMORFISMO = TRATAR OBJ DIFERENTES DE MANEIRAS SIMILARES

//temos o Gerente e diretor derivando herdando da classe funcionario que tem a senha e a propriedade senha

const cliente1 = new Cliente("Ricardo", 11122233309);
const contaCorrenteRicardo = new ContaCorrente( 0, cliente1, 1001);
const contaPoupanca = new ContaPoupanca( 50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
//contaSalario.depositar(100);
//contaSalario.sacar(10);

// -> const conta = new Conta(0, cliente1, 1001); Exemplo não faz sentido criar  CONTA É UMA CLASSE QUE NAO FAZ SENTIDO SER INSTANCIADA NAO FAZ SENTIDO ELA TER UM OBJETO, EU CRIEI ELA PRA ELA SER SOMENTE HERDADA, PRA EU TER A ESPECIALIZAÇÃO DELA, ELA CONTEM CODIGO ELA É IMPORTANTE PARA O NOSSO SISTEMA MAS EU NAO QUERO QUE NINGUEM USE DESTA FORMA NO SISTEMA
//ELA É UMA CLASSE BASE
//PRECISO BLOQUEAR

console.log(clienteEstaLogado);

//console.log(contaSalario);
//console.log(contaPoupanca);
//console.log(contaCorrenteRicardo);