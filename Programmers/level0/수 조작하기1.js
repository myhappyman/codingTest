function solution(n, control) {
    return [...control].map(x => setValue(x)).reduce((a, b) => a+b, n);
}
function setValue(s){
    return s==="w" ? 1 : s==="s" ? -1 : s==="d" ? 10 : -10;
}