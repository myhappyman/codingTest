function solution(arr, i) {
    const idx = arr.slice(i).indexOf(1);
    return idx > -1 ? i+idx : -1;
}