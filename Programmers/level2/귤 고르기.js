function solution(k, tangerine) {
    let map = new Map();
    tangerine.forEach((t) => {
        if (map.has(t)) map.set(t, map.get(t) + 1);
        else map.set(t, 1);
    });
    map = [...map].sort((a, b) => b[1] - a[1]);
    let [frontCnt, frontTotal] = [0, 0];
    let [backCnt, backTotal] = [0, 0];

    for (let i = 0; i < map.length; i++) {
        if (frontTotal >= k && backTotal >= k) break;

        if (frontTotal < k) {
            frontTotal += map[i][1];
            frontCnt++;
        }
        if (backTotal < k) {
            backTotal += map[map.length - 1 - i][1];
            backCnt++;
        }
    }
    return frontCnt > backCnt ? backCnt : frontCnt;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); //3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); //2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); //1
