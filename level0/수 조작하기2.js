function solution(numLog) {
    const input = [];
    for(let i=1; i<numLog.length; i++){
        input.push(numLog[i]-numLog[i-1]);
    }
    return input.map(x => valueToInput(x)).join("");
}

function valueToInput(n){
    if(n === 1){
        return "w";
    }else if(n === -1){
        return "s";
    }else if(n === 10){
        return "d";
    }else {
        return "a";
    }
}
console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
//[0, 1, -1, 10, -10, 1, -1, 10, -10, 10, -1, -1, 1]