function solution(ms, is) {
    const arr = Array(ms.length).fill(ms).map((x,i) => x.slice(i)).filter(x => x === is)
    return arr.length > 0 ? 1 : 0;
}