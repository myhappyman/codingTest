function solution(a, b) {
    let number = factor(a, b);
    let n = 2;
    while (number >= n) {
        if (number % n === 0) {
            if (n !== 2 && n !== 5) {
                console.log(a, b, n);
                return 2;
            }
            number /= n;
            n = 2;
            continue;
        }
        n++;
    }
    return 1;
}

function factor(a, b) {
    let cnt = 2;
    while (a >= cnt) {
        if (a % cnt === 0 && b % cnt === 0) {
            a /= cnt;
            b /= cnt;
            cnt = 2;
        }
        cnt++;
    }
    return b;
}
// console.log(solution(7, 20));
// console.log(solution(11, 22));
// console.log(solution(12, 21));
console.log(solution(1, 16));
console.log(solution(1, 1024));
