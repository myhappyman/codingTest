function solution(n) {
    const res = [n];
    while(n !== 1){
        n = n%2 === 0 ? n/2 : 3*n+1;        
        res.push(n);
    }
    return res;
}