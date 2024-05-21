export function problem (lines) {
    //.split() - pega uma string e transforma em uma array
    //.shift() - puxa e retira o primeiro valor

    // lines é uma array que tem 1 posição só e é uma string com os 3 valores
    //var [A, B, C] = lines[0].split(" ");


    /*
    var pi = 3.14159

    console.log(A);
   
    var triangulo = Number((A * B) / 2);
    var circulo = Number(pi * Math.pow(C, 2));
    var trapezio = Number(((A + B) * C) / 2);
    var quadrado = Number(B * B);
    var retangulo = Number(A * B)

    console.log({lines});
    console.log(lines);
    console.log(A);
    console.log({B});
    console.log({C})

    console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
    console.log(`CIRCULO: ${circulo.toFixed(3)}`);
    console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
    console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
    console.log(`RETANGULO: ${retangulo.toFixed(3)}`)*/

    /*var [a, b, c] = lines.splice(0, 3).map(Number);

    var [a, b, c] = input.split(" ").map(item => parseFloat(item));


    var pi = 3.14159

    console.log(a);
    console.log(b);
    console.log(c);
    
    var triangulo = a * c / 2;
    var circulo = 3.14159 * Math.pow(c, 2);
    var trapezio = ((a + b) * c) / 2;
    var quadrado = b * b;
    var retangulo = a * b

    console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
    console.log(`CIRCULO: ${circulo.toFixed(3)}`);
    console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
    console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
    console.log(`RETANGULO: ${retangulo.toFixed(3)}`)
    */

    
/*
    var values = [3];

    values[0]=parseFloat(lines.shift());
    values[1]=parseFloat(lines.shift());
    values[2]=parseFloat(lines.shift());

    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
    
    console.log(`TRIANGULO: ${((values[0] * values[2]) /2).toFixed(3)}`);
    console.log(`CIRCULO: ${((3.14159*(values[2] * values[2]))).toFixed(3)}`);
    console.log(`TRAPEZIO: ${((((values[0] + values[1])) * values[2]) / 2).toFixed(3)}`);
    console.log(`QUADRADO: ${(values[1] * values[1]).toFixed(3)}`);
    console.log(`RETANGULO: ${((values[0] * values[1])).toFixed(3)}`);
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' '); //antes estava("\n")

var values = [3];

values[0]=parseFloat(lines.shift());
values[1]=parseFloat(lines.shift());
values[2]=parseFloat(lines.shift());

console.log(`TRIANGULO: ${((values[0] * values[2]) /2).toFixed(3)}`);
console.log(`CIRCULO: ${((3.14159*(values[2] * values[2]))).toFixed(3)}`);
console.log(`TRAPEZIO: ${((((values[0] + values[1])) * values[2]) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(values[1] * values[1]).toFixed(3)}`);
console.log(`RETANGULO: ${((values[0] * values[1])).toFixed(3)}`);

}
