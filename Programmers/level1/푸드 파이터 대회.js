function solution(food) {
    const map = new Map();
    for (let i = 1; i < food.length; i++) {
        map.set(i, Math.floor(food[i] / 2));
    }
    return [
        [...map].map(([n, c]) => String(n).repeat(c)).join(""),
        0,
        [...map]
            .reverse()
            .map(([n, c]) => String(n).repeat(c))
            .join(""),
    ].join("");
}
console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));