function solution(t, p) {
    const LEN = p.length;
    let i = 0;
    let result = 0;
    while(i+LEN <= t.length){
        if(+p >= +(t.slice(i, LEN+(i++)))){
            result++;
        }
    }
    return result;
}
// console.log(solution("3141592", "271"))
console.log(solution("500220839878", "7"))
