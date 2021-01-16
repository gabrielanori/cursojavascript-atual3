/* 
Ser autenticável significa ter a propriedade "senha" (isso antes)
Ser autenticável é ter o método autenticar
senha é um atriburo particular
Se eu tenho no sistema alguma coisa que é autenticável Seria melhor se tivessemos uma propriedade autenticar e a propria classe o proprio objeto verifica se a senha que eu passei por esse método dele que é interno é igual a senha que ele tem guardado lá dentro, pq ai não preciso expor essa senha em algum lugar
fica mais seguro ter uma propriedade autenticar do que senha
ao inves de ter a propriedade senha exposta vou chamar o metodo autenticar
 */

// O sistema de autenticação se preocupa muito mais com a interface que os objetos expoe, ou entao o que a gente pode manusear e manipular deles, metodos e propriedades do que com qual o tipo dele de fato
//Não interessa para o Sistema de autenticação se sou um cliente diretor gerente funcionario se sou uma conta, se eu tiver o metodo autenticar quer dizer que sou autenticável então eu posso executar aqui



export class SistemaAutenticacao{
    static login(autenticavel, senha){
        //a logica é senha do funcionario for igual a senha recebida e retorna que esta logado verdadeiro ou falso pq eh exp igualdade
       //nova camada de proteção com o if
       // AQUI ELE NÃO SE IMPORTA SE ELE SERA  instanceof Cliente Diretor.. ele diz autenticavel este parametro q estou recebendo aqui interessa se ele tem o comportamento e as propriedades especificas que eu to utilizando, me intessa q ele tenha o metodo autenticar
       //UNICA VERIFICAÇÃO QUE ESTOU FAZENDO, BAIXA TIPAGEM
       //***DUCK TYPING*** ---MUITO COMUM EM LIGUAGENS FRACAMENTE TIPADAS -- NAO SE IMPORTAS DE VERDADE COM  O TIPO DAQUELE OBJETO, interesse se ele anda como pato se comporta como pato e nao necessariamente é um pato, não interessa o tipo dele e sim o consegue fazer, se ele tem a presença de determinados metodos e propriedades
       if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
           return autenticavel.autenticar(senha);
           //quando o js vai acessar uma classe "chama esse metodo autenticar" ele vai pegar esse método autenticar q vai reconhecer ele como uma chave. Autenticar esta me apontando para esse endereço de memório "altenticavel", ai eu pego o que esta nesse endereço de memoria para executar

       } 
        return false;
        //aqui o método autenticar tem q existir na minha classe autenticavel, 
    }

    // método estatico, nao preciso de uma instancia para chamar ele, posso chamar diretamente da mesma maneira que estpu fazendo com o meus SistemaAutenticação com o metodo login, nao precisei criar uma instancia pra chamar esse metodo, eu só falo que ele pertentce ao sistema de autenticação e chamo ele direto pq ele eh um metodo estatico

    static ehAutenticavel(autenticavel){
       return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
       // AQUI AINDA NÃO ERA UM MÉTODO QUE EU PODERIA CHAMAR
       // ALI EU PODERIA TER COLOCADO INSTANCEOF CLIENTE OU QUALQUER OBJETO Q TENHA DEFINIDO  ali deixou função pq quero de verdade chamar uma função
       // este operador in vai verificar se essa chave "autenticar" existe dentro deste objeto, se for verdade ele vai me retornar um valor verdadeiro
       //  o metodo quando ele esta dentro de um objeto tambem é um objeto  ELE É UM OBJETO DENTRO DO OUTRO
       //NESTE CASO PARA NAO DAR NEW ELE JA CRIOU ALI DIZENDO QUE SERÁ UMA FUNÇÃO
       //ESTA É UMA MANEIRA SINTATICA E FACIL DE CRIAR ELES, DE CRIAR UMA FUNÇÃO DENTRO DE UM OBJETO

    }
}

//POLIMORFISMO
//objetos diferentes tratados de forma similar
//USANDO CLASSES TANTO MEU GERENTE COMO MEU DIRETOR SÃO FUNCIONÁRIO
//COMO ELES TEM PROPRIEDADES SEMELHANTES EU CONSIGO USAR DE MANEIRA INTERCAMBIÁVEL
//const estaLogado = SistemaAutenticacao.login(gerente, "123") COLOCANDO MEU GERENTE AQUI OU MEU DIRETOR SEM PRECISAR MUDAR A AUTENTICAÇÃO
//ESSA PROPRIEDADE DOS OBJETOS DE TOMAREM VARIAS FORMAS RECEBENDO NA AUTENTICAÇÃO UM FUNCIONÁRIO MAIS GENERICO return funcionario.senha == senha; E CONSEGUIRMOS UTILIZAR ELE INDEPENDENTE DELE SER UM DIRETOR OU GERENTE É CHAMADO DE POLIMORFISMO
//CONSEGUIMOS PASSAR QUALQUER PROPRIEDADE QUE DERIVE DE FUNCIONARIO E ELE VAI ACEITAR NO SISTEMA DE AUTENTICAÇÃO, POR ENQUANTO ACEITA QUALQUER PESSOA/OBJ QUE TENHA UMA SENHA, SE TIVER A PROPRIEDADE SENHA, NOSSO SISTEMA DE AUTENTICAÇÃO ESTA FUNCIONANDO

//ENCAPSULAMENTO --- QUANDO EU QUERO PROTEGER O MAXIMO POSSIVEL ESSAS PROPRIEDADES ESSES ATRIBUTOS QUE SÃO SENSIVEIS NA NOSSA CLASSE, ACESSORIOS GET E SET OS METODOS QUE FAZEM O MANUSEIO DESTAS PROPRIEDADES INTERNAS DO MEUS OBJ SEM A GENTE PRECISAR EXPOR PRA OUTRAS CLASSES, ENCAPSULAR O COMPORTAMENTO É OUTRA COISA MUITO IMPORTANTE DA ORIENTAÇÃO A OBJETO

// antes era static login(funcionario, senha){  depois ficou static login(autenticavel, senha){
    // cliente tem a propriedade senha mas ele nao herda da classe Funcionário
    //herança não é a unica maneira da gente compartilhar comportamento