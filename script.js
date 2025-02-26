function calculaMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

var acabou = false;
var numeromedia = [];

while (numeromedia.length < 2) {
    var numero = parseInt(prompt("Digite um número para calcular a média (Digite dois números)"));
    
    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
    } else {
        numeromedia.push(numero);
    }
}

alert("A média dos dois números é: " + calculaMedia(numeromedia[0], numeromedia[1]));
