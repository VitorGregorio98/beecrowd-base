export function problem (lines) {
    var raio = Number(lines[0]);

    var pi = 3.14159;

    var area = pi * raio ** 2;

    console.log(`A=${area.toFixed(4)}`)
}