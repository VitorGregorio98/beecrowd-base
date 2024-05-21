export function problem (lines) {

    var x = parseFloat(lines.shift());
    var y = parseFloat(lines.shift());

    var consumo = (x / y);

    console.log(`${consumo.toFixed(3)} km/l`)
}
   