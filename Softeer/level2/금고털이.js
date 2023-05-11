const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(line.split(" ").map((x) => +x));
}).on("close", () => {
    let weight = input[0][0];
    const arr = [...input.slice(1)];
    arr.sort((a, b) => b[1] - a[1]);
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (weight === 0) break;

        if (arr[i][0] <= weight) {
            weight -= arr[i][0];
            result += arr[i][0] * arr[i][1];
        } else {
            result += weight * arr[i][1];
            weight = 0;
        }
    }
    console.log(result);

    process.exit();
});

/**
 * 중복을 제거하면 안된다.
 * 100 3
 * 100 5
 * 100 3
 * 100 1
 * 
 * 이런식으로 주어지면 500이 나와야하지만,
 * 중복을 제거하고 마지막 100 1로세팅되면 100이 나와서 잘못된 값이 나온다.
 */