import{Funcionario} from "./Funcionario.js"

export class Diretor extends Funcionario{
    constructor(nome, salario, cpf){
        //passando para minha instancia superior pelo Super
        super(nome, salario, cpf);
        this._bonificacao = 2;
       }
}
