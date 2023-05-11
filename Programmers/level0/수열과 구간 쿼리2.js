function solution(arr, queries) {
    return queries.map(x=> arr.slice(x[0], x[1]+1).filter(y => y > x[2])).map(x=> x.length === 0 ? -1 : Math.min(...x));
}
console.log(solution([0, 1, 2, 4, 3], [[0, 4, 2],[0, 3, 2],[0, 2, 2]]))