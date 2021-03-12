var fs = require('fs')

exports.exec = async function(req, res)
{
    let filename = './assets/day2.txt';
    let file = fs.readFileSync(filename, 'utf8').split('\n');

    let valid = 0;
    const regex = /^(\d+)-(\d+) (\w): (\w+)$/;

    for(const entry of file){
        const match = regex.exec(entry);

        // se não passar no teste do regex passa para o próximo
        if(!match){
            continue;
        }

        const min = parseInt(match[1]);
        const max = parseInt(match[2]);
        const character = match[3];
        const password = match[4];
        
        // retorna a quantidade de caracteres encontrados
        const count = [...password].filter((c) => c === character).length;
        
        // se estiver fora do range pula para o próximo
        if (count < min || count > max) {
          continue;
        }
      
        valid++;
    }
    

}