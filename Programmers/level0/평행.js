/**
 * 기울기의 비교는  y값의 증가량/x값의 증가량이다.
 * 해당 공식을 이용해서 a,b,c,d가 존재할때
 * |(by-ay)|/|(bx-ax)| 를 통해 각각의 선분들의 기울기를 구했다.
 * @param {*} dots 
 * @returns 
 */
function solution(dots) {
    const checker = [[0,1,2,3], [0,2,1,3], [0,3,2,1]];
    return checker.reduce((x, [a,b,c,d]) => {
        const [ax, ay] = dots[a];
        const [bx, by] = dots[b];
        const v = Math.abs(by-ay)/Math.abs(bx-ax);

        const [cx, cy] = dots[c];
        const [dx, dy] = dots[d];
        const v2 = Math.abs(dy-cy)/Math.abs(dx-cx);
        return v === v2 ? 1 : x;
    }, 0);
}
console.log(solution([[1, 4], [9, 2], [3, 8], [11, 6]]));