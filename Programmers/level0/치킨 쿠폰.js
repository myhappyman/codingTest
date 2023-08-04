function solution(chicken) {
    let coupon = chicken % 10;
    let orders = Math.floor(chicken / 10);
    let res = orders;
    orders += coupon;
    while (true) {
        coupon = orders % 10;
        orders = Math.floor(orders / 10);
        res += orders;
        if (orders === 0) break;
        orders += coupon;
    }

    return res;
}
// console.log(solution(100));
console.log("======================");
// console.log(solution(1081));
console.log(solution(1999)); // 222
190; // 9
19; // 18
2; // 8
1; // 0
