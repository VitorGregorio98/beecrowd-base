export function problem (lines) {
  
  CERTO
  var input = require('fs').readFileSync('/dev/stdin', 'utf8');
  var lines = input.split(' ');

  var values = [3];

  values[0] = parseInt(lines.shift());
  values[1] = parseInt(lines.shift());
  values[2] = parseInt(lines.shift());

  var valorab = ((values[0] + values[1]) + Math.abs(values[0] - values[1])) / 2;
  var maiorvalor = ((valorab + values[2]) + Math.abs(valorab - values[2])) / 2;

  console.log(`${maiorvalor} eh o maior`)



  /*
  CERTO
  var input = require('fs').readFileSync('/dev/stdin', 'utf8');

  var [a, b, c] = input.split(' ').map((item) => parseInt(item))

  var maiorvalor = Math.max(a, b, c)

  console.log(`${maiorvalor} eh o maior`)
  */

}
 