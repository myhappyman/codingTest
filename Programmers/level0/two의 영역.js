function solution(arr) {
    const s = arr.indexOf(2);
    if(s === -1) return [-1];
    
    const e = arr.length - arr.reverse().indexOf(2);
    return arr.reverse().slice(s, e);    
}
console.log(solution([1, 2, 1, 4, 5, 2, 9]));
console.log(solution([1, 2, 1]));
console.log(solution([1, 1, 1]));