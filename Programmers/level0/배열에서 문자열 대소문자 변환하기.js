function solution(strArr) {
    return strArr.map((x, i) =>
        i % 2 === 0 ? x.toLowerCase() : x.toUpperCase()
    );
}
console.log(solution(["AAA", "BBB", "CCC", "DDD"])); //["aaa","BBB","ccc","DDD"]
console.log(solution(["aBc", "AbC"])); //["abc","ABC"]
