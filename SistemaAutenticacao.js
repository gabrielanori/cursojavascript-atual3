export class SistemaAutenticacao{
    static login(funcionario, senha){
        //a logica é senha do funcionario for igual a senha recebida e retorna que esta logado verdadeiro ou falso pq eh exp igualdade
        return funcionario.senha == senha;
    }
}

//POLIMORFISMO
//USANDO CLASSES TANTO MEU GERENTE COMO MEU DIRETOR SÃO FUNCIONÁRIO
//COMO ELES TEM PROPRIEDADES SEMELHANTES EU CONSIGO USAR DE MANEIRA INTERCAMBIÁVEL
//const estaLogado = SistemaAutenticacao.login(gerente, "123") COLOCANDO MEU GERENTE AQUI OU MEU DIRETOR SEM PRECISAR MUDAR A AUTENTICAÇÃO
//ESSA PROPRIEDADE DOS OBJETOS DE TOMAREM VARIAS FORMAS RECEBENDO NA AUTENTICAÇÃO UM FUNCIONÁRIO MAIS GENERICO return funcionario.senha == senha; E CONSEGUIRMOS UTILIZAR ELE INDEPENDENTE DELE SER UM DIRETOR OU GERENTE É CHAMADO DE POLIMORFISMO