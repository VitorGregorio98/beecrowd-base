export function problem (lines) {
    var notaa = Number(lines[0]);
    var notab = Number(lines[1]);
    var pesoa = 3.5;
    var pesob = 7.5;
    

    var media = (notaa * pesoa + notab * pesob) / (pesoa + pesob);
    console.log(`MEDIA = ${media.toFixed(4)}`)
}
