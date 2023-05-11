const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function(line){
    input.push(line);
}).on("close", function(){
    input = input.map(x => {
        const arr = x.split(" ");
        const sTime = arr[0].split(":");
        const eTime = arr[1].split(":");
        const hour = (eTime[0]-sTime[0])*60;
        const min = (eTime[1]-sTime[1]);
        return hour+min;
    });
    console.log(input.reduce((a, b)=>a+b,0));
});