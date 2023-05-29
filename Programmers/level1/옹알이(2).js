function solution(babbling) {
    const speak = ["aya", "ye", "woo", "ma"];
    let cnt = 0;
    for (let i = 0; i < babbling.length; i++) {
        let word = babbling[i];

        let flag = true;
        // 연속으로 말하는 중인지 먼저 체크
        for (let j = 0; j < speak.length; j++) {
            if (word.includes(speak[j] + speak[j])) {
                flag = false;
                break;
            }
        }

        //반복문을 계속해서 처음부터 끝까지 옹알이를 할때마다 체크한다.
        if (flag) {
            for (let j = 0; j < speak.length; j++) {
                const idx = word.indexOf(speak[j]);
                if (idx > -1) {
                    word =
                        word.slice(0, idx) +
                        " " +
                        word.slice(idx + speak[j].length);
                    j = -1;
                }
            }
        }

        if (word.trim() === "") {
            cnt++;
        }
    }
    return cnt;
}
console.log(solution(["ayayeaya"])); //1
// console.log(solution(["ayayeye"])); //0
// console.log(solution(["ayayeayayeayaaya"])); //0

// console.log(solution(["ayyea"]));
// console.log(solution(["aya", "yee", "u", "maa"]));
// console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
