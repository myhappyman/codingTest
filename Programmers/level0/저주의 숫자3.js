function solution(n) {
    const arr = Array(100).fill(0);
    for(let i=0; i<arr.length; i++){
        let num = i > 0 ? arr[i-1]+1 : 1;
        while(num%3 === 0 || String(num).includes(3)){
            num += 1;
        }
        arr[i] = num;
    }
    return arr[n-1];
}
console.log(solution(10));