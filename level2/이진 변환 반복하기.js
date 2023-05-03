function solution(s) {
    let [cycle, zeroCnt] = [0,0];
    while(s.length != 1){
        zeroCnt += [...s].filter(x => x === "0").length;
        s = [...s].filter(x => x === "1").length.toString(2);
        cycle++;
    }
    return [cycle, zeroCnt];
}
console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));