var fs = require('fs')

exports.day1 = async function(req, res)
{
    let filename = './assets/day2.txt';
    let file = fs.readFileSync(filename, 'utf8').toString().split("\n");
    let fileArray = file.map((line) => parseInt(line))

}