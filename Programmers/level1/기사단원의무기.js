function solution(number, limit, power) {
    return Array(number).fill().map((_, i) => {
        let num = i+1;
        let cnt = 0;
        for(let z=1; z*z<=num; z++){
            if(num%z === 0) {
                cnt++;
                if(z*z < num){
                    cnt++;
                }
            }
        }
        return cnt > limit ? power : cnt;
    }).reduce((a,b) => a+b, 0);
}
console.log(solution(5, 3, 2));