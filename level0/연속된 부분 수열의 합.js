function solution(sequence, k) {
  let result = [0, sequence.length];
  // sequence.sort((a, b) => (sequence.length * 2 > k ? a - b : b - a));

  for (let i = 0; i < sequence.length; i++) {
    //혼자서 k를 만족하는 경우
    if (sequence[i] === k) return [i, i];

    let sum = 0;
    for (let j = i; j < sequence.length; j++) {
      sum += sequence[j];
      if (sum > k) {
        break;
      }

      if (sum === k && result[1] - result[0] > j) {
        result = [i, j];
        break;
      }
    }
  }
  return result;
}
console.log(solution([7, 5, 5, 1, 1, 50, 50], 100));
