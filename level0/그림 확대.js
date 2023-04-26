function solution(picture, k) {
    return picture.map(x => [...x].map(xx=> xx.repeat(k)).join("")).map(x => Array(k).fill(x)).flat();
}
console.log(solution([".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."], 2));
