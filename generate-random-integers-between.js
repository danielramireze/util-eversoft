const start = "02:20:00", end = "02:35:00";

let generateTimes = function (start, end, quantity) {
    let [shh, smm, sss] = start.split(":");
    let [fhh, fmm, fss] = end.split(":");
    let result = [];

    for (let index = 0; index < quantity; index++) {
        let hr1 = randomInteger(Number(shh), Number(fhh));
        let mm1 = randomInteger(Number(smm), Number(fmm));
        result.push(`${hr1 < 9 ? '0' + hr1 : hr1}:${mm1 < 9 ? '0' + mm1 : mm1}:00`)
    }

    return result;
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const result = generateTimes(start, end, 50);

console.log("result -> ", result);
console.log("result-> ", result.join("\n"));