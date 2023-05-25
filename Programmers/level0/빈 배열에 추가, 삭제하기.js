function solution(arr, flag) {
    let X = [];
    flag.forEach((x, i) =>
        x
            ? (X = [...X, ...Array(arr[i] * 2).fill(arr[i])])
            : (X = X.slice(0, X.length - arr[i]))
    );
    return X;
}
console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
