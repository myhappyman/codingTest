function solution(my_string) {
    return Array(my_string.length).fill(my_string).map((x, i) => x.substring(i)).sort((a, b) => a > b ? 1 : -1);
}
console.log(solution("banana"));