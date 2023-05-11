function solution(numer1, denom1, numer2, denom2) {
    let commonNum = 0;
    let i = 2;
    while(commonNum === 0){
        if(i % denom1 === 0 && i % denom2 === 0 ){
            commonNum = i;
        }
        i++;
    }

    let num1 = commonNum/denom1;
    let num2 = commonNum/denom2;
    let result = numer1*num1 + numer2*num2;

    
    for(let j=commonNum; j>0; j--){
        if(result % j === 0 && commonNum % j === 0){
            commonNum /= j;
            result /= j;
            break;
        }
    }

    return [result, commonNum];
}
console.log(solution(1,2,3,4))