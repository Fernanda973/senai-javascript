let vlNome = document.getElementById('nome');
console.log(vlNome.value);

let formulario = document.getElementById('formulario')
formulario.addEventListener('submit', function (e) {
    //PAREI
    e.preventDefault();

    //VALIDAÇÃO
    let valorNome = document.getElementById('nome');

    //tira os enters
    valorNome.value.trim();

    //é um método de string que verifica se o texto contém o caractere (ou sequência de caracteres)
    valorNome.value.includes('B');

    //TAMANHO DO Q FOI ESCRITO
    console.log(valorNome.value.length);
})