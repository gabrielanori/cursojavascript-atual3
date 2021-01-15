export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1; // 100%
         // autenticar funcionarios
        this._senha; // vai ser cadastrada depois
    }
    get senha(){ // para expor de maneira segura com o acessor get senha, mantenho o encapsulamento dessa classse expondo somente o que precisa, com essa propriedade senha aqui ninguem consegue atribuir ela, eu só consigo atribuir ela atravéz do cadastrar senha     
        return this._senha;
    }
    cadastrarSenha(senha){
        this._senha = senha;
    }
}
