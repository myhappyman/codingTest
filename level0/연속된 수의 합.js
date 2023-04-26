function solution(num, total) {
    let even = num % 2 === 0
    let halfValue = num === 1 ? total : Math.floor(total/num);
    const result = even ? [halfValue, halfValue+1] : [halfValue];
    let cnt = 1;
    while(result.length !== num){
        result.unshift(halfValue - cnt);
        let add = halfValue + cnt++
        result.push(even ? add+1 : add);
    }
    return result;
}
console.log(solution(3, 12));
console.log(solution(4, 14));
console.log(solution(5, 15));
console.log(solution(5, 5));
// console.log(solution(5, 15));