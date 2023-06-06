function solution(n, a, b) {
    let arr = Array(n / 2)
        .fill()
        .map((_, i) => [i * 2 + 1, i * 2 + 2]);

    let cnt = 0;
    while (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            const [user1, user2] = arr[i];
            if ((user1 === a && user2 === b) || (user1 === b && user2 === a)) {
                arr = [];
                break;
            }

            if (user2 === a || user2 === b) arr[i] = user2;
            else arr[i] = user1;
        }

        //배열 재정렬
        for (let i = 0; i < arr.length / 2; i++) {
            arr[i] = [arr[i * 2], arr[i * 2 + 1]];
        }
        arr = arr.slice(0, arr.length / 2);
        cnt++;
    }
    return cnt;
}
console.log(solution(8, 4, 7));
