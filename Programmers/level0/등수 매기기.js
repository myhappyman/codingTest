function solution(score) {
    let order = [];
    for (let i = 0; i < score.length; i++) {
        let ranking = 1;
        let sum = score[i][0] + score[i][1];
        for (let j = 0; j < score.length; j++) {
            let sum2 = score[j][0] + score[j][1];
            if (i != j && sum2 > sum) {
                ranking++;
            }
        }
        order.push(ranking);
    }
    return order;
}

// console.log(
//     solution([
//         [80, 70],
//         [90, 50],
//         [40, 70],
//         [50, 80],
//     ])
// );
// console.log(
//     solution([
//         [80, 70],
//         [70, 80],
//         [30, 50],
//         [90, 100],
//         [100, 90],
//         [100, 100],
//         [10, 30],
//     ])
// );
console.log(
    solution([
        [80, 70],
        [70, 80],
        [50, 100],
        [30, 50],
        [90, 100],
        [100, 90],
        [100, 100],
        [10, 30],
    ])
);
//[4, 4, 4, 7, 2, 2, 1, 8]
