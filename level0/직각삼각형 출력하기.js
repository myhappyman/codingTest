const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    for(let i=1; i<=line; i++){
     input.push('*'.repeat(i))   
    }
}).on('close', function () {
    input.forEach(x => console.log(x));
});