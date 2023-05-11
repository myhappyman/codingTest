function solution(arr, queries) {    
    queries.forEach(([s,e,k]) => {
        for(let i=s; i<=e; i++){
            if(i%k === 0) arr[i] += 1;
        }
    });
    return arr;
}

// function solution(arr, queries) {    
//     queries.forEach(([s,e,k]) => {
//         arr = [
//             ...arr.slice(0, s),
//             ...arr.slice(s, e+1).map((x, i) => i%k === 0 ? x+1 : x),
//             ...arr.slice(e+1, arr.length)
//         ]
//     });
//     return arr;
// }
console.log(solution([0, 1, 2, 4, 3], 	[[0, 4, 1],[0, 3, 2],[0, 3, 3]]))