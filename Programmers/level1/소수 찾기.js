function solution(n) {
    const result = [2];
    for(let i=3; i<=n; i++){
        let flag = true;
        let rot = Math.floor(Math.sqrt(i));
        for(let j=0; j<result.length; j++){
            if(i%result[j] === 0){
                flag = false;
                break;
            }

            if(result[j] > rot){
                break;
            }
        }
        flag ? result.push(i) : null;
    }
    return result.length;
}
console.log(solution(100));