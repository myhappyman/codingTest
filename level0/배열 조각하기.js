function solution(arr, query) {
    query.forEach((q, i) => i%2===0 ? arr.splice(q+1, arr.length) : arr.splice(0, q));
    return arr;
}
console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2]));