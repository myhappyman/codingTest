function solution(n, t) {
    for(let i=0; i<t; i++){
        n *= 2;
    }
    return n;
}
console.log(solution(7, 15));