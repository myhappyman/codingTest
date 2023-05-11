function solution(array) {
    const obj = array.reduce((a, b) => {
        a[b] > -1 ? a[b] += 1 : a[b] = 1;
        return a;
    }, {});
    
    let max = 0;
    let saveKey = 0;
    for(key of Object.keys(obj)){
        if(obj[key] > max){
            max = obj[key];
            saveKey = key
        }
    }

    let cnt = 0;
    for(key of Object.keys(obj)){
        if(obj[key] === max){
            cnt++;
        }
    }
    return cnt > 1 ? -1 : parseInt(saveKey);
}

console.log(solution([1, 2, 2, 2, 3, 4]));
console.log(solution([1, 1, 2, 2, 3, 4]));
console.log(solution([1, 1, 1]));
console.log(solution([1]));
console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 3, 3, 3, 4]));
// console.log(solution([1,2,3,4,5]));
// console.log(solution([2,2,3,3]));
