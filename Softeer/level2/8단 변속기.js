const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", (line)=>{    
    input = line.split(" ").map(x => +x);
    let result = input[0] === 1 ? "ascending" : input[0] === 8 ? "descending" : "mixed";
    if(result === "ascending" || result === "descending"){
        for(let i=0; i<input.length; i++){
            if(result === "ascending" && input[i] !== i+1){
                result = "mixed";
                break;
            }else if(result === "descending" && input[i] !== input.length-i){
                result = "mixed";
                break;
            }
        }
    }
    console.log(result);
    rl.close();
}).on("close", ()=>{

});