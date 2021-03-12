var fs = require('fs')

exports.day1 = async function(req, res)
{
    let filename = './assets/day1.txt';
    let file = fs.readFileSync(filename, 'utf8').toString().split("\n");
    let fileArray = file.map((line) => parseInt(line))

    let resultA = {};
    let resultB = {};
    // percorre cada linha
    for (const a of fileArray) {
        // em cada linha verifica se a condição é real
        for (const b of fileArray) {
            // se a somatória for 2020 retorna true
            if (a + b === 2020) {
                resultA = {
                    start: 1,
                    // number1: a,
                    // number2: b,
                    multiply: a * b,
                    sum: a + b === 2020
                };
            }
        }
    }

    // percorre cada linha
    for (const a of fileArray) {
        // em cada linha verifica se a condição é real
        for (const b of fileArray) {
            // se a somatória for 2020 retorna true
            for (const c of fileArray) {
                if (a + b + c === 2020) {
                    resultB = {
                        start: 2,
                        // number1: a,
                        // number2: b,
                        // number3: c,
                        multiply: a * b * c,
                        sum: a + b + c === 2020
                    };
                }
            }
        }
    }
    console.log( resultA, resultB )
}