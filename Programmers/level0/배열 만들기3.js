function solution(arr, intervals) {
    return intervals.map(([s,e]) => [...arr.slice(s,e+1)]).reduce((a, b) => [...a, ...b]);
}
console.log(solution([1, 2, 3, 4, 5], 	[[1, 3], [0, 4]]))