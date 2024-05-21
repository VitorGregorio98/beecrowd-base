export function problem (lines) {
    var raio = parseFloat(lines[0])
    var volume = (4.0/3) * 3.14159 * Math.pow(raio, 3)

    console.log(`VOLUME = ${volume.toFixed(3)}`)
 }

