// function solution(my_string, m, c) {
//     return Array(my_string.length/m).fill().map((x, i) => [...my_string.slice(i*m, i*m+m)][c-1]).join("");
// }
const solution=(s,m,c)=>s.match(new RegExp(`.{${m}}`,'g')).map(v=>v[c-1]).join('')
console.log(solution("ihrhbakrfpndopljhygc", 4, 2))
console.log(solution("programmers", 1, 1))