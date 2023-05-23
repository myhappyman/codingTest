function solution(array) {
    return array.map(x => [...String(x)].filter(x => x==="7").length).reduce((a,b) => a+b,0);
}