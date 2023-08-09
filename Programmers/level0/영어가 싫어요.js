function solution(numbers) {
    const obj = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
    };
    let res = "";
    while (numbers.length > 0) {
        let i = 3;
        for (let j = 3; j < 6; j++) {
            if (obj[numbers.slice(0, j)]) {
                i = j;
                break;
            }
        }
        res += obj[numbers.slice(0, i)];
        numbers = numbers.slice(i);
    }
    return +res;
}
console.log(solution("onetwothreefourfivesixseveneightnine"));
console.log(solution("onefourzerosixseven"));
