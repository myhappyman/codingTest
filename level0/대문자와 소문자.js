function solution(my_string) {
  return [...my_string]
    .map((x) => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
    .join("");
}
console.log(solution("cccCCC"));
