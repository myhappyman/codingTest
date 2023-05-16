function solution(s) {
    let [l, r] = [s.indexOf("l"), s.indexOf("r")];
    if(l===-1 && r===-1) return [];
    else if(l===-1) return s.slice(r+1);
    else if(r===-1) return s.slice(0, l);
    return l > r ? s.slice(r+1) : s.slice(0, l);
}
console.log(solution(["u", "u", "l", "r"]));
console.log(solution(["l"]));
console.log(solution(["u","d"]));
console.log(solution(["u","l", "d"]));
console.log(solution(["u","r", "d"]));