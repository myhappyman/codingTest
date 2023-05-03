function solution(s){
    let result = 0;
    for(let i=0; i<s.length; i++){
        result += s[i] === "(" ? 1 : -1;
        if(result < 0) return false;
    }
    return result === 0 ? true : false;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
console.log(solution("())(()"));

