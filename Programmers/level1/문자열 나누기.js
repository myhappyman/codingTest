function solution(s) {
    let result = 0;
    let cnt1 = 0;
    let cnt2 = 1;
    let i = 0;
    while (s !== "") {
        if (s[0] === s[i]) {
            cnt1++;
        } else {
            if (cnt1 === cnt2) {
                result++;
                s = s.slice(cnt1 + cnt2);
                cnt1 = 0;
                cnt2 = 1;
                i = 0;
                continue;
            } else {
                cnt2++;
            }
        }
        i++;
    }
    return result;
}
console.log(solution("banana"));
console.log(solution("abracadabra"));
console.log(solution("aaabbaccccabba"));
