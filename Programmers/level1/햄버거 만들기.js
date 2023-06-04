function solution(ingredient) {
    let cnt = 0;
    let str = ingredient.join("");
    while (str.length > 4) {
        const index = str.indexOf("1231");
        if (index === -1) {
            break;
        }

        str = str.slice(0, index) + str.slice(index + 4);
        cnt++;
    }
    return cnt;
}

// function solution(ingredient) {
//     let cnt = 0;
//     let arr = [];
//     for (let i = 0; i < ingredient.length; i++) {
//         const num = ingredient[i];
//         switch (num) {
//             case 1:
//                 if (arr.length === 0 || arr.length === 3) {
//                     arr.push(num);
//                     ingredient.splice(i--, 1);
//                 }
//                 break;
//             case 2:
//                 if (arr.length === 1) {
//                     arr.push(num);
//                     ingredient.splice(i--, 1);
//                 }
//                 break;
//             case 3:
//                 if (arr.length === 2) {
//                     arr.push(num);
//                     ingredient.splice(i--, 1);
//                 }
//                 break;
//         }

//         if (arr.length === 4) {
//             arr = [];
//             cnt++;
//             i = i > 4 ? i - 4 : 0;
//         }
//     }
//     return cnt;
// }
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
