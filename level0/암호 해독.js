function solution(cipher, code) {
  return [...cipher].filter((x, idx) => (idx + 1) % code === 0).join("");
}
console.log(solution("dfjardstddetckdaccccdegk", 4));
