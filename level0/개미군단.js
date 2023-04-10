function solution(hp) {
  const g = Math.floor(hp / 5);
  const b = Math.floor((hp % 5) / 3);
  const il = Math.floor((hp % 5) % 3);
  return g + b + il;
}
console.log(solution(23));
