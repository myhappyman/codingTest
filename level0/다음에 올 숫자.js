function solution(common) {
    let cha = common[1] - common[0];
    let cha2 = common[2] - common[1];
    if(cha === cha2){
        return common[common.length-1]+cha;
    }else{
        const mul = cha > 1 ? (cha2-cha) : cha2;
        return common[common.length-1] * mul 
    }
}
console.log(solution([2,4,8]));