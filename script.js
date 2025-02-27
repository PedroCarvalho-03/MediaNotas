function calculaMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function calculaCategoria(nota) {
    if (nota >= 0 && nota <= 4.5) {
        return "Reprovado";
    } else if (nota > 4.5 && nota <= 6.5) {
        return "Recuperação";
    } else if (nota > 6.5 && nota <= 10) {
        return "Aprovado";
    } else {
        return "Nota inválida"; 
    }
}

var numeromedia = [];

while (numeromedia.length < 2) {
    var numero = parseFloat(prompt("Digite uma nota (0 a 10) para calcular a média (Digite duas notas no total)"));
    
    if (isNaN(numero) || numero < 0 || numero > 10) {
        alert("Por favor, insira uma nota válida entre 0 e 10.");
    } else {
        numeromedia.push(numero);
    }
}

var media = calculaMedia(numeromedia[0], numeromedia[1]);

var categoria = calculaCategoria(media);

alert("Média: " + media.toFixed(2) + " - " + categoria);
