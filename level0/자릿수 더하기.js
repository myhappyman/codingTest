function solution(n) {
  return [...(n + "")].map((x) => Number(x)).reduce((a, b) => a + b);
}
console.log(solution(930211));
