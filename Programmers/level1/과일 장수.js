// function solution(k, m, score) {
//     let answer = 0;
//     while(score.length >= m){
//         const arr = [];
//         while(arr.length != m){
//             if(score.indexOf(k) > -1){
//                 arr.push(...score.splice(score.indexOf(k), 1));
//             }else{
//                 k--;
//             }
//         }
//         answer += m * Math.min(...arr);
//     }    
//     return answer;
// }

function solution(k, m, score) {
    let answer = 0;
    let idx = 0;
    const len = score.length
    score.sort((a,b) => b-a);
    while(len >= idx*m+m){
        answer += m * Math.min(...score.slice(idx*m, idx*m+m));
        idx++;
    }    
    return answer;
}
console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
