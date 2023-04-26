function solution(lines) {
    let [minL, maxL] = lines[0];
    for(let i=1; i<lines.length; i++){
        let [min, max] = lines[i];
        min < minL ? minL = min : null;
        max > maxL ? maxL = max : null;
    }
    
    const LEN = maxL + Math.abs(minL);
    const result = Array(LEN+1).fill(0);
    lines.forEach(([min, max]) => {
        for(let i=minL; i<maxL; i++){
            if(i >= min && i < max){
                result[i-minL] += 1;
            }
        }
    });
    
    const r = [];
    let s=null, e=null;
    for(let i=0; i<result.length; i++){
        if(result[i] > 1){
            if(s===null && e===null){
                s = minL+i;
            }
        }else{
            if(s != null){
                e = minL+i;
                r.push([s, e]);
                s=null; e=null;
            }
        }
    }

    if(s != null){
        e = minL+i;
        r.push([s, e]);
    }
    return r.reduce((a, b) => a+=b[1]-b[0],0);
}


// console.log(solution([[0, 2], [-3, -1], [-2, 1]]))
console.log(solution([[0, 1], [2, 5], [3, 9]]));
console.log(solution([[-1, 1], [1, 3], [3, 9]]));
console.log(solution([[0, 5], [3, 9], [1, 10]]));
