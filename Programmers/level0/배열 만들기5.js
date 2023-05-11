function solution(intStrs, k, s, l) {
    return intStrs.map(x => parseInt(x.substring(s, s+l))).filter(x => x > k);
}
console.log(solution(["0123456789","9876543210","9999999999999"], 50000, 5, 5))