function solution(balls, share) {
    if(share === balls) return 1;
    return Math.round(fac(balls) / (fac(balls-share) * fac(share)));
}

function fac(n){
    return n * (n === 1 ? 1 : fac(n-1));
}
console.log(solution(3, 3))