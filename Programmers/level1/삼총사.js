function solution(number) {
    var answer = 0;
    for(let i=0; i<number.length; i++){
        for(let j=i+1; j<number.length; j++){
            for(let z=j+1; z<number.length; z++){
                let stu1 = number[i];
                let stu2 = number[j];
                let stu3 = number[z];
                if(stu1+stu2+stu3 === 0){
                    answer++;
                }                
            }
        }
    }
    return answer;
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));