function solution(a, b, n) {
    let result = 0;
    while(n >= a){
        result += Math.floor(n/a)*b;
        n = Math.floor(n/a)*b + n%a;
    }
    return result;
}
console.log(solution(2,1,20));
console.log(solution(3,1,20));