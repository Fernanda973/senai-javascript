let camiseta = 39.90;
let bone = 19.90;
let meia = 9.90;
let blusa = 99.90;
let calca = 79.90;
let tenis = 149.90;

let compra = blusa;

if(compra > 100){
    let desconto = compra * 0.10;
    let compraT = compra - desconto;
    console.log( "Você recebeu o desconto de 10%, portanto o total de sua compra foi de: " + compraT);
}else if(compra >= 50 && compra <= 100){
    let desconto = compra * 0.05;
    let compraT = compra - desconto;
    console.log( "Você recebeu o desconto de 5%, portanto o total de sua compra foi de: " + compraT);
}else{
    let desconto = compra * 0.02;
    let compraT = compra - desconto;
    console.log( "Você recebeu o desconto de 2%, portanto o total de sua compra foi de: " + compraT);
}