const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
      for(let i=1; i<input.length; i++){
          const line = input[i].split(" ");
          const value = Number(line[0]) + Number(line[1]);
          console.log(`Case #${i}: ${value}`);
      }
});