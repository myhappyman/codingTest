function solution(arr) {
    const two = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
    const min = Math.min(...two.filter((x) => x >= arr.length));
    return arr.concat(Array(min - arr.length).fill(0));
}
console.log(solution([1, 2, 3, 4, 5, 6]));
