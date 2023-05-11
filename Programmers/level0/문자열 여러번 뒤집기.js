function solution(my_string, queries) {
    let answer = [...my_string];
    for(let z=0; z<queries.length; z++){
        const [i, j] = queries[z];
        answer = [
            ...answer.slice(0, i),
            ...answer.slice(i, j+1).reverse(),
            ...answer.slice(j+1, my_string.length),
        ];
    }
    return answer.join("");
}
console.log(solution("rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]]))