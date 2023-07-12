function solution(arr, n) {
    let num = arr.length % 2 === 0 ? 1 : 0;
    return arr.map((x, i) => (i % 2 === num ? x + n : x));
}
console.log(solution([49, 12, 100, 276, 33], 27));
console.log(solution([444, 555, 666, 777], 100));
