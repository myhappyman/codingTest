function solution(arr) {
    const max = Math.max(...arr);
    let result = max;
    while (true) {
        const cnt = arr
            .map((x) => (result % x === 0 ? true : false))
            .filter((x) => x).length;
        if (cnt === arr.length) {
            break;
        }
        result += max;
    }
    return result;
}
console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
