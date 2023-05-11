function solution(my_string, indices) {
    const arr = [...my_string];
    indices.forEach(x => arr[x] = "");
    return arr.join("");
}
console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
