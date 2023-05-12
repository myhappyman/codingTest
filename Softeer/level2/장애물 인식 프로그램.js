const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let input = [];

rl.on("line", function(line){
    input.push(line);
}).on("close", function(){
    const n = +input[0];
    const arr = input.slice(1).map(x => [...x]);
    
    function dfs(x, y){
        if(x < 0 || x >= n || y < 0 || y >= n)
            return 0;

        if(arr[x][y] === "0"){
            return 0;
        }else{
            arr[x][y] = "0";
            let counts = 1;
            counts += dfs(x-1, y);
            counts += dfs(x+1, y);
            counts += dfs(x, y-1);
            counts += dfs(x, y+1);
            return counts;
        }        
    }
    
    const answer = [];
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[i][j] === "1"){
                let res = dfs(i, j);
                if(res){
                    answer.push(res);
                }
            }
        }
    }
    console.log(answer.length);
    answer.forEach(x => console.log(x));
});

