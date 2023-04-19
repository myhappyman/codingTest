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
