function solution(numbers) {
    numbers.sort((a, b) => b-a);
    const result = numbers[0] * numbers[1];
    const result2 = numbers[numbers.length-1] * numbers[numbers.length-2];
    return result > result2 ? result : result2
}
console.log(solution([1,2,-3,4,-5]));