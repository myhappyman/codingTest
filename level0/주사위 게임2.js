function solution(a, b, c) {
    let res = a+b+c;
    let end = 2;
    if(a === b && b === c && a === c) end=4;        
    else if(a === b || b === c || a === c) end=3;
     
    for(let i=2; i<end; i++){
        res *= Math.pow(a, i)+Math.pow(b, i)+Math.pow(c, i);
    }
    return res;
}
console.log(solution(2,6,1));
console.log(solution(5,3,3));
console.log(solution(2,6,1));