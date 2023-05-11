function solution(my_strings, parts) {
    return parts.map(([s,e], i) => my_strings[i].slice(s,e+1)).join("");
}
console.log(solution(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]]))
