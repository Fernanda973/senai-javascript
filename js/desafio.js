let botao = document.getElementById('interruptor');
botao.addEventListener('click', function() {
    mudarCor()
})

function mudarCor(){
    let inter = document.getElementById('interruptor');
    let lamp = document.getElementById('lampada');

    if (inter.className == 'desligado') {
        inter.classList.add('ligado');
        lamp.classList.add('ligada')
        inter.style.backgroundPosition = "312px";
        lamp.style.backgroundPosition = "right";
        inter.classList.remove('desligado');
        lamp.classList.remove('desligado');
    }else{
        inter.classList.add('desligado');
        lamp.classList.add('desligado');
        inter.style.backgroundPosition = "80px";
        lamp.style.backgroundPosition = "left";
        inter.classList.remove('ligado');
        lamp.classList.remove('ligado');
    }
    
}
