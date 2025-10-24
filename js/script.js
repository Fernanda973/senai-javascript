/*SIMPLES PORÉM FUNCIONAL, NA BIBLIOTECA TEM PERSONALIZADO!! ;)
alert("Olá niggers!");
*/

/* O USUÁRIO CONSEGUE DIGITAR
let mens = prompt("Qual é seu utt??");
alert("De muito amor ao " + mens);
*/

/*
let retConf = conf("Deseja ir mesmo para o show?");
if (retConf) {
    alert("Boa Sorte Guerreira, aproveita bastante, vai passar mais rápido do que vc quer...");
}
*/

let mens = document.getElementById("mensagem");
// console.log(mens);

let nomeAl = document.getElementsByClassName("item");
//console.log(nomeAl);

let retTags = document.getElementsByTagName("div");
//console.log(retTags);

let selecItem = document.querySelector(".item");
//console.log(selecItem);

let todosSelet = document.querySelectorAll(".item");
//console.log(todosSelet);



/*
function mudarTexto(){
    let titulo = document.getElementById('titulo');
    titulo.innerText = "Olá mundo";
    titulo.style.color = "#003da7ff";
    titulo.style.background = "#000";
    titulo.style.fontSize = "5rem";
    titulo.style.fontWeight = "bold";
    titulo.style.fontFamily = "Gill Sans, sans-serif";
}
*/

//CLIQUE DO BOTÃO
let botao = document.getElementById('btn');
botao.addEventListener('click', function() {
    mudarTexto()
})

//MUDAR TEXTO
function mudarTexto(){
    let titulo = document.getElementById('titulo');

    //titulo.style.background = #009cb8ff;

    if (titulo.className == 'tituloPadrao') {
        titulo.classList.add('personalizado');
        titulo.classList.remove('tituloPadrao');
    }else{
        titulo.classList.add('tituloPadrao');
        titulo.classList.remove('personalizado');
    }
    
    titulo.setAttribute('title', 'Passe o mouse aí!');
    let ident = titulo.getAttribute('data-id');
    console.log(ident);
}