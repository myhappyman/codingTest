function solution(polynomial) {
    let arr = polynomial.split(" ");
    const xRes = arr.filter(x => x.indexOf("x") > -1)
    .map(x => x.replace("x", ""))
    .reduce((a,b) => a+(b === "" ? 1 : +b), 0);
    
    const numRes = arr.filter(x => !isNaN(x)).map(x => +x).reduce((a,b) => a+b, 0);
    
    if(xRes && numRes){
        return `${xRes === 1 ? "" : xRes}x + ${numRes}`;
    }else if(xRes){
        return `${xRes === 1 ? "" : xRes}x`;
    }else if(numRes){
        return `${numRes}`;
    }
}
console.log(solution("x"));