/*FUNÇÕES

          nome     parâmetros
function saudacao(nome) {
    let mensagem = "Olá " + nome + ", seja bem vindo/a!";
    console.log(mensagem);
}

saudacao("Rafa");
*/

function saudacao(nome, idade) {
    let mensagem = "Oi meu nome é " + nome + " e eu trabalho no " + idade;
    return mensagem;
}

let retSaud = saudacao("CAE", "Zambon");
console.log(retSaud);
