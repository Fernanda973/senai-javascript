function primos(num) {
    
    let ret = "É primo";

    for (let cont = 2; cont <= num; cont++) {
        if (num % cont == 0) {
            ret = "Não é primo";
        }
    }
    return ret;
}

let retPrimos = primos(7);
console.log(retPrimos);