function solution(n) {
    var answer = [];
    for(let i=0; i<n; i++){
        answer[i] = [];
        for(let j=0; j<n; j++){
            answer[i][j] = 0;
        }
    }

    let cnt = 1;
    let [s1, e1, s2, e2] = [0, answer.length, 0, answer[0].length];
    while(true){
        //right
        for(let i=s2; i<e2; i++){
            answer[s2][i] = cnt++;
        }
        s1++;
        if(s1 >= e1 || s2 >= e2) break;
    
        
        //down
        for(let i=s1; i<e1; i++){
            answer[i][e1-1] = cnt++;
        }
        e2--;
        if(s1 >= e1 || s2 >= e2) break;

        
        //left
        for(let i=e2-1; i>=s2; i--){
            answer[e2][i] = cnt++;
        }
        s2++;
        if(s1 >= e1 || s2 >= e2) break;

        
        //up
        for(let i=e2-1; i>=s1; i--){
            answer[i][s1-1] = cnt++;
        }
        e1--;
        if(s1 >= e1 || s2 >= e2) break;
    }    
    return answer;
}

console.log(solution(5))