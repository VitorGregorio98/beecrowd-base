export function problem (lines) {
    var nome = Number(lines[0]);
    var fixo = Number(lines[1]);
    var vendas = Number(lines[2]);

    /*var comissao = vendas * 0.15;
    var sal = fixo + comissao;*/

    var sal = fixo + (vendas * 0.15);

    console.log(`TOTAL = R$ ${sal.toFixed(2)}`)
 }
 