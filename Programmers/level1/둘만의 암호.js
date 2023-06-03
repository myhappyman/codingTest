function solution(s, skip, index) {
    const base = [..."abcdefghijklmnopqrstuvwxyz"];
    return [...s]
        .map((x) => {
            const idx = base.indexOf(x);
            let end = index + 1;
            let cnt = 1;
            while (end > cnt) {
                x = base[(idx + cnt) % 26];
                if (skip.includes(x)) {
                    end++;
                }
                cnt++;
            }
            return x;
        })
        .join("");
}
console.log(solution("aukks", "wbqd", 5));
