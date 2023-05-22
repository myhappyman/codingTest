function solution(X, Y) {
    let xObj = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
    let yObj = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
    let longLen = X.length > Y.length ? X.length : Y.length;
    for(let i=0; i<longLen; i++){
        if(i+1 <= X.length) xObj[X[i]] = xObj[X[i]]+1;
        if(i+1 <= Y.length) yObj[Y[i]] = yObj[Y[i]]+1;        
    }

    let str = "";
    for(let i=9; i>=0; i--){
        const [xNum, yNum] = [xObj[i], yObj[i]]
        if(xNum > 0 && yNum > 0){
            if(i === 0 && str === "") return "0";

            let min = xNum > yNum ? yNum : xNum;
            for(let j=0; j<min; j++){
                str += i+"";
            }
        }
    }
    return str === "" ? "-1" : str;
}
// console.log(solution("100", "2345"));
// console.log(solution("100", "203045"));
// console.log(solution("100", "123450"));
// console.log(solution("12321", "42531"));
// console.log(solution("5525", "1255"));
console.log(solution("99999999999999999999999999999999999998888888888888888888844444444111111111112202202222222220002222222222222222222222222222222222222222222222222222222222226666666666645465456789789789789789", 
"7112999999999999999945646546546574897897988888888878978978945612306594894263198097089049509807908940890189018966645465456789789789789789"));
