function solution(rank, attendance) {
    const map = new Map();
    const map2 = new Map();
    rank.forEach((x, i) => {
        map.set(x, attendance[i]);
        map2.set(x, i);
    });
    const [a, b, c] = [...map].sort((a, b) => a[0] - b[0]).filter(x => x[1]===true);
    return 10000 * map2.get(a[0]) + 100 * map2.get(b[0]) + map2.get(c[0]);
}
console.log(solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]));
console.log(solution([1, 2, 3], [true, true, true]));