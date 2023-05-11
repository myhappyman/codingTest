const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
    const [A, B] = line.split(" ").map(x => +x);
  console.log(A === B ? "same" : A > B ? "A" : "B");
  rl.close();
}).on("close", function() {
  process.exit();
});