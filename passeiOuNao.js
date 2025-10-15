function situacao(nota1, nota2, nota3) {
    med = (nota1 + nota2 + nota3) / 3;
    
    if (med <= 3) {
        resul = "Reprovado";
    }else if (med <= 6) {
        resul = "Recuperação";
    } else {
        resul = "Aprovado";
    }

    return resul;
}

let retSit = situacao(9, 6, 7);
console.log(retSit);