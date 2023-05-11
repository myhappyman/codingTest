function solution(dartResult) {
    let answer = [];
    let value = 0;
    const keywords = ['S', 'D', 'T'];
    for(let i=0; i<dartResult.length; i++){
        if(dartResult[i] === "*"){
            answer[answer.length-1] = answer[answer.length-1] * 2;
            if(answer.length > 1)
                answer[answer.length-2] = answer[answer.length-2] * 2;

        }else if(dartResult[i] === "#"){
            answer[answer.length-1] = answer[answer.length-1] * -1;
        }else if(keywords.indexOf(dartResult[i]) > -1){
            answer.push(Math.pow(value, keywords.indexOf(dartResult[i])+1));
        }else{
            if(i+1 != dartResult.length &&
                !isNaN(dartResult[i+1])){
                value = Number(dartResult[i]+dartResult[i+1]);
                i++;
            }else{
                value = Number(dartResult[i]);
            }
        }        
    }
    return answer.reduce((a,b) => a+b);
}
console.log(solution("1D2S#10S", 9))