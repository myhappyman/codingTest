function solution(n) {
    const len = [...n.toString(2)].filter(x => x === "1").length;
    let num = n+1;
    while(len != [...num.toString(2)].filter(x => x === "1").length){
        num++;
    }
    return num;
}
console.log(solution(78));