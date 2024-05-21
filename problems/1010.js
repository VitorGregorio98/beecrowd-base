export function problem (lines) {

    //[12 1 5.30]

    /*var totalValores1 = lines.shift().split(" ") //["12", "1", "5.30"]
    var totalValores2 = lines.shift().split(" ")

    var cod1 = totalValores1.shift()
    var pec1 = totalValores1.shift()
    var vunit1 =  totalValores1.shift()
    var valorTotal1 = pec1 * vunit1
    
    var cod2 = totalValores2.shift()
    var pec2 = totalValores2.shift()
    var vunit2 =  totalValores2.shift()
    var valorTotal2 = pec2 * vunit2

    var totalPagar = valorTotal1 + valorTotal2

    console.log(`VALOR A PAGAR: R$${totalPagar.toFixed(2)}`)*/
///

    var linhas = input.split("\n"); 
    // dividiu os 6 números em 2 linhas, especifica a na quebra de linha
    
    //o "shift()" puxa e retira o primeiro valor

    var infoItem1 = linhas.shift().split(" ");
    var infoItem2 = linhas.shift().split(" ");

    var idItem1 = infoItem1.shift();
    var qtdItem1 = infoItem1.shift();
    var valorUnitarioItem1 = infoItem1.shift();
    var valorTotalItem1 = qtdItem1 * valorUnitarioItem1;

    var idItem2 = infoItem2.shift();
    var qtdItem2 = infoItem2.shift();
    var valorUnitarioItem2 = infoItem2.shift();
    var valorTotalItem2 = qtdItem2 * valorUnitarioItem2;

    var valorTotalCompra = valorTotalItem1 + valorTotalItem2;

    console.log(`VALOR A PAGAR: R$ ${valorTotalCompra.toFixed(2)}`)
 }