function primos(num) {
    
    let div = 0;

    for (let cont = num; cont >= 1; cont--) {
        if (num % cont == 0) {
            div++;
        }
    }

    if (div == 2) {
        return "O número é primo.";
    } else {
        return "O número não é primo.";
    }
}

let retPrimos = primos(4);
console.log(retPrimos);