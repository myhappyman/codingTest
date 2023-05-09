function solution(n, t, m, p) {
    let answer = '';
    let text = '';
    for(let i=0; i<t*m+1; i++){        
        text += i.toString(n)+"";
    }
    text = text.toUpperCase();
    let i = p-1;
    while(answer.length != t){
        answer += text[i];
        i+=m;
    }
    return answer;
}
console.log(solution(2,4,2,1));
// console.log(solution(16, 16, 2, 1));
//0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1
//0, 1, 1, 0, 1, 1, 1, 0, 0, 
//0 1 0 1 1 1 0 0 1 0 1 1 1 0 1 1 1
//02468ACE10