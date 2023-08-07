/**
 * 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다.
 * 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.
 * @param {*} M
 * @param {*} N
 * @returns
 */
function solution(M, N) {
    return M * N === 1 ? 0 : M * N - 1;
}
console.log(solution(2, 2));
console.log(solution(2, 5));
console.log(solution(1, 1));
