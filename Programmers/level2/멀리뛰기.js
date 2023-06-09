function solution(n) {
    let arr = Array(n).fill(1);
    let num = 1;
    for (let i = 1; i < n / 2; i++) {
        arr = [...arr.slice(0, n - i)];
        num += arr.length;
    }

    return num;
}
console.log(solution(4));
console.log(solution(3));
