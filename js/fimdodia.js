let horas = 24;
let min = 60;
let horasAtual = 4;
let minAtual = 37;

let totalMinutosDia = horas * min;
let minutosAtual = (horasAtual * min) + minAtual;
let restanteMin = totalMinutosDia - minutosAtual;

let resulMin = restanteMin % 60;
let resulH = (restanteMin - resulMin) / 60;

// O SINAL "+" É PARA CONCATENAÇÃO
console.log("Faltam " + resulH + " horas e " + resulMin + " minutos para o fim do dia!");