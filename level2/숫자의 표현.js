function solution(n) {
    let cnt = 0;
    let start = 1;
    while(start < (n+1/2)){
        let result = 0;
        for(let i=start; i<=n; i++){
            result += i;
            if(result === n){
                cnt++;
                break;
            }else if(result > n){
                break;
            }
        }
        start++;        
    }
    return cnt;
}
console.log(solution(15));

/**
 * 1 = 1
 * 2 = 1 + 1
 * 3 = 1 + 2
 * 4 = 1 + 3
 * 5 = 1 + 2 + 3, 5
 */