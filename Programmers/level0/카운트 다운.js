function solution(s, e) {
    return Array(s-e+1).fill(s).map((x,i) => x-i)
}