/*(for (let contagem = 0; contagem < 5; contagem++) {
    if (contagem == 3) {
        console.log(contagem);
        break
    }
    console.log(contagem);
}*/

/*
for (let contagem = 0; contagem <= 10; contagem++) {
    console.log(contagem);
    if (contagem == 5) {
        for (let cont = 4; cont >= 0; cont--) {
            console.log(cont);
        }
        break;
    }
}
*/

/*CONDIÇÃO NORMAL
let num1 = 5;
let num2 = 7;
let resul = 0;

if (num2 > num1) {
    resul = num2 + num1;
}else{
    resul = num2 - num1;
}

console.log(resul);
*/

/*CONDIÇÃO TERNÁRIA
let num1 = 5;
let num2 = 7;
let resul = (num2 > num1) ? (num2 + num1) : (num2 - num1);

console.log(resul);
*/

/*WHILE
let contador = 0;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
*/

/*DO WHILE

let contador = 0;

do{
    console.log(contador);
    contador++;

}while (contador <= 5);
*/

/*FOR OF(FAROFA) - DESTRINCHA ARRAYS

let frutas = ['Banana', 'Maçã', 'Uva'];

for (const fruta of frutas) {
    console.log(fruta);
}
*/

/* FOR IN - LEITURA DO OBJETO

let pessoa = {nome: "Fernanda", idade: 15, cidade: "Bauru"};

for (const key in pessoa) {
    //console.log(key);
    if (key == "nome") {
        pessoa[key] = "Leléo";     
    }
    console.log(pessoa[key]);
}
*/

/* forEach - RESOLVE TUDO*/

const produtos = [
    { nome: "Banana", preco: 3 },
    { nome: "Uva", preco: 5 },
    { nome: "Pão", preco: 6 }
];

produtos.forEach(item => {
    console.log(item.nome);
});