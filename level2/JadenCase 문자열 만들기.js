function solution(s) {
    const arr = s.split(" ");
    return arr.map(x => {
        return [...x].map((xx, i) => {
            if(i === 0) return isNaN(xx) ? xx.toUpperCase() : xx;            
            else return isNaN(xx) ? xx.toLowerCase() : xx;
        }).join("");
    }).join(" ");
}
console.log(solution("3people unFollowed me"));