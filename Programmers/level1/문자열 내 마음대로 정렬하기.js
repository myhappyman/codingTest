/**
 * n번째 위치한 문자열을 비교하여 정렬을 한다.
 * n번쨰의 위치한 문자열이 같다면 문자열 전체를 비교하여 사전순으로 정렬한다.
 * @param {*} strings 문자열이 담긴 배열
 * @param {*} n 문자열에서 각 비교할 인덱스
 * @returns 
 */
function solution(strings, n) {
  return [...strings].sort((a, b) => {
    if (a.charAt(n) === b.charAt(n)) {
      return a > b ? 1 : -1;
    } else {
      return a.charAt(n) > b.charAt(n) ? 1 : -1;
    }
  });
}
console.log(solution(["sun", "bed", "car"], 1));
