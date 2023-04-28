function solution(s) {
    const map = new Map();
    return [...s].map((x, i) => {
        let idx = map.get(x) != null ? i - map.get(x) : -1;
        map.set(x, i);
        return idx;
    });
}
console.log(solution("bananab"));
// console.log(solution("foobar"));