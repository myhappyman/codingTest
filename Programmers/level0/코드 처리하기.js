function solution(code) {
    let mode = 0;
    let ret = "";
    for(let i=0; i<code.length; i++){        
        if(code[i] === "1"){
            if(mode === 0){
                mode = 1;
            }else{
                mode = 0;
            }
            continue;
        }

        if(mode){ // mode가 1
            if(i%2 === 1){
                ret += code[i];
            }
            
        }else{ // mode가 0
            if(i%2 === 0){
                ret += code[i];
            }
        }        
    }
    return ret === "" ? "EMPTY" : ret;
}
console.log(solution("abc1abc1abc"))