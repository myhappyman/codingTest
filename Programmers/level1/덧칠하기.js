function solution(n, m, section) {
    let cnt = 1, s = section[0];
    section.forEach(x => {
        if(x-s >= m){
            s = x;
            cnt++;
        }
    });
    return cnt;
}
console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));