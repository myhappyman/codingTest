function solution(elements) {
    let cnt = 0;
    for (let i = 1; i <= elements.length; i++) {
        let obj = {};
        for (let j = 0; j < elements.length; j++) {
            let sum = elements.slice(j, i).reduce((a, b) => a + b, 0);
            obj[sum] = obj[sum] > -1 ? obj[sum] + 1 : 1;
        }
        console.log(obj);
        cnt += Object.keys(obj).length;
    }
    return cnt;
}
console.log(solution([7, 9, 1, 1, 4]));
