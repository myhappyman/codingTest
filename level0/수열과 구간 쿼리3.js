function solution(arr, queries) {
    queries.forEach(x=> {
        const [i, j] = x;
        [arr[i],arr[j]] = [arr[j],arr[i]];
    })
    return arr;
}