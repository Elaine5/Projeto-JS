var Etanol, Gasolina;

do {

    var Etanol = prompt ("Digite o valor do Álcool: ")
    var Gasolina = prompt ("Digite o valor da Gasolina: ")

    x = Etanol / Gasolina;

    if (x > 0.7){
        prompt ("Abasteça com gasolina!");
    }
    else if (x < 0.7){
        prompt ("Abasteça com álcool!");
    }
    else if (fator = 0.7){
        prompt("Pode abastecer com gasolina ou álcool");
    }
    continuar = prompt("Você deseja realizar nova consulta? '1' para Sim e '2' para Não: ");

} while (continuar == 1)

alert ("Consulta Encerrada!")
