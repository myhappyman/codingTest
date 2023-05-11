function solution(n) {
  const sqrtNum = Math.floor(Math.sqrt(n));
  return sqrtNum * sqrtNum === n ? 1 : 2;
}
console.log(solution(1));
