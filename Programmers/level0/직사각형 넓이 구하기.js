function solution(dots) {
    const [x1, y1] = dots[0];
    const [x2, y2] = dots[1];
    const [x3, y3] = dots[2];
    let res = 0;
    if (x1 === x2) {
        res = (x2 - x3) * (y2 - y1);
    } else if (y1 === y2) {
        res = (x1 - x2) * (y2 - y3);
    } else {
        res = (x1 - x2) * (y2 - y1);
    }
    return Math.abs(res);
}
console.log(
    solution([
        [1, 1],
        [2, 1],
        [2, 2],
        [1, 2],
    ])
); // 1
console.log(
    solution([
        [-1, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
    ])
); // 4
