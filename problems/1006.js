export function problem (lines) {
    /*var a = Number(lines[0]);
    var b = Number(lines[1]);
    var c = Number(lines[2]);*/
    var [a, b, c] = lines
    var pesoa = 2;
    var pesob = 3;
    var pesoc = 5;

    var media = (a * pesoa + b * pesob + c * pesoc) / (pesoa + pesob + pesoc);
    console.log(`MEDIA = ${media.toFixed(1)}`)
}
