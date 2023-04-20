function solution(a, d, included) {
    return Array(included.length).fill(a).map((x, idx) => x+idx*d).map((x, idx) => included[idx] ? x : 0).reduce((a, b) => a+b);
}