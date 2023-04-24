function solution(a, b){
    const [centerA, lenA] = a.split(",");
    const [centerB, lenB] = b.split(",");
    const [halfA, halfB] = [Number(lenA)/2, Number(lenB)/2];    
    const minA = Number(centerA) - halfA;
    const maxA = Number(centerA) + halfA;
    const minB = Number(centerB) - halfB;
    const maxB = Number(centerB) + halfB;

    const start = minA > minB ? minB : minA;
    const end = maxA > maxB ? maxA : maxB;
    let arrA = [];
    let arrB = [];
    for(let i=start; i<=end; i++){
        i>=minA && i<=maxA ? arrA.push(1) : arrA.push(0);
        i>=minB && i<=maxB ? arrB.push(1) : arrB.push(0);
    }
    arrA = arrA.map((x, i) => x + arrB[i]);

    if(arrA.indexOf(2) === -1){
        return 0;
    }else if(arrA.indexOf(2) === arrA.lastIndexOf(2)){
        return 1;
    }else {
        return arrA.lastIndexOf(2) - arrA.indexOf(2);
    }
}
// console.log(solution("2,4", "4,8"));
console.log(solution("0, 2", "1,2"));