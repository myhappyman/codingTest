function solution(l) {
    return l.length > 10
        ? l.reduce((a, b) => a + b, 0)
        : l.reduce((a, b) => a * b, 1);
}
