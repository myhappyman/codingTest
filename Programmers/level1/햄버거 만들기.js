function solution(ingredient) {
    let cnt = 0;
    let str = ingredient.join("");
    for (let i = 0; i < str.length - 3; i++) {
        if (str.slice(i, i + 4) === "1231") {
            str = str.slice(0, i) + str.slice(i + 4);
            cnt++;
            i -= 4;
        }
    }
    return cnt;
}
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
