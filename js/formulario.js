let formulario = document.getElementById('formulario');
let loading = document.getElementById('loading');

formulario.addEventListener('submit', function (parar){
    //PAREI
    parar.preventDefault();

    //VOLTEI O LOADING
    loading.style.display = 'flex';

    //CAMPOS
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confirmarSenha = document.getElementById('confirmarSenha').value;



    //VALIDANDO O NOME
    if (nome == '') {
        loading.style.display = 'none';
        erros.style.display = 'flex';
        erros.innerText = "Preencha certo o seu nome";
    }
    
    //VALIDANDO O EMAIL
    if (email == '') {
        loading.style.display = 'none';
        formulario.value.includes('@', '.');
        erros.style.display = 'flex';
        erros.innerText = "Preencha certo o seu email";
    }

})