function solution(n) {
    const arr = [0, 1];
    while(arr.length < n+1){        
        arr.push(arr[arr.length-1] % 1234567 + arr[arr.length-2] % 1234567);
    }
    return arr[arr.length-1] % 1234567;
}
console.log(solution(3));
console.log(solution(5));