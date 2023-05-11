function solution(n, k) {
    return Array(n).fill(1).map((x, i) => i+1).filter(x => x % k === 0);
}