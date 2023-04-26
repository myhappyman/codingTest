function solution(num, total) {
    let answer = [num];
    let sum = num;
    let cnt = 1;
    while(sum <= total){
        sum += num + cnt;
        num.push(num + cnt++);
    }
    
    if(sum === total){
        return answer;
    }else{
        answer = [num];
        sum = num;
        cnt = -1;
        while(sum === total){
            sum += num + cnt;
            num.push(num + cnt--);
        }
    }
    return answer;
}