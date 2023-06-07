function solution(n) {
    let res = 0;
    while (n !== 0) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            res++;
            n -= 1;
        }
    }
    return res;
}
console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
