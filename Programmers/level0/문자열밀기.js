function solution(A, B) {
    let answer = -1;
    for(let i=0; i<A.length; i++){
        if(A === B){
            answer = i;
            break;
        }

        const arr = [...A];
        arr.unshift(arr.pop());
        A = arr.join("");
    }
    return answer;
}

console.log(solution("hello", "ohell"));
console.log(solution("apple", "elppa"));
console.log(solution("atat", "tata"));
console.log(solution("abc", "abc"));
console.log(solution("abc", "bca"));