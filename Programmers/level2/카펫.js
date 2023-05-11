function solution(brown, yellow) {
    const sum = brown + yellow;
    for(let i=3; i<=sum; i++){
        for(let j=3; j<=i; j++){
            if(i * j === sum && (i-2)*(j-2) === yellow){
                return [i, j];
            }
        }
    }
    return [3,3];
}
/**
 * 노란색은 감싸야하기때문에 위아래 두줄 
 * 양옆에 한줄씩 해서 2개씩 뺀걸 곱한값이 되어야한다.
 */


// console.log(solution(10, 2));
// console.log(solution(8, 1));
// console.log(solution(24, 24));
console.log(solution(18, 6));

/**
 * 1, 1, 1, 1, 1, 1, 1, 1
 * 1, 0, 0, 0, 0, 0, 0, 1
 * 1, 0, 0, 0, 0, 0, 0, 1
 * 1, 0, 0, 0, 0, 0, 0, 1
 * 1, 0, 0, 0, 0, 0, 0, 1
 * 1, 1, 1, 1, 1, 1, 1, 1
 */