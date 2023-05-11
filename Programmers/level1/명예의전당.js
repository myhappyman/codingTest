function solution(k, score) {    
    let answer = [];
    return score.map(x => {
        answer.push(x);
        answer = answer.sort((a, b) => b - a).slice(0, k)
        return answer[answer.length-1];
    });
}
// console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]))
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]))