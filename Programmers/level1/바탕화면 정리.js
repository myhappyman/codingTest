function solution(wallpaper) {
    wallpaper = wallpaper.map((x) => [...x]);
    const xArr = [];
    const yArr = [];
    wallpaper.forEach((x, i) => {
        x.forEach((xx, j) => {
            if (xx === "#") {
                if (xArr.length === 0 && yArr.length === 0) {
                    xArr[0] = i;
                    xArr[1] = i;
                    yArr[0] = j;
                    yArr[1] = j;
                } else {
                    if (xArr[0] > i) xArr[0] = i;
                    if (xArr[1] < i) xArr[1] = i;
                    if (yArr[0] > j) yArr[0] = j;
                    if (yArr[1] < j) yArr[1] = j;
                }
            }
        });
    });
    return [xArr[0], yArr[0], xArr[1] + 1, yArr[1] + 1];
}
// console.log(solution([".#...", "..#..", "...#."])); //[0, 1, 3, 4]
// console.log(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."])); //[1, 3, 5, 8]
// console.log(
//     solution([
//         ".##...##.",
//         "#..#.#..#",
//         "#...#...#",
//         ".#.....#.",
//         "..#...#..",
//         "...#.#...",
//         "....#....",
//     ])
// ); //[0, 0, 7, 9]
// console.log(solution(["..", "#."])); //[1, 0, 2, 1]
console.log(solution(["...#"])); //[0, 0, 1, 4]
