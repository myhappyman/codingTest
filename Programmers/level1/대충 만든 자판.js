function solution(keymap, targets) {
    const map = new Map();
    keymap.forEach((x) =>
        [...x].forEach((xx, i) => {
            if (!map.get(xx)) {
                map.set(xx, i + 1);
            } else if (map.get(xx) > i + 1) {
                map.set(xx, i + 1);
            }
        })
    );
    return targets.map((x) =>
        [...x].reduce(
            (a, b) => (a === -1 ? -1 : map.get(b) ? a + map.get(b) : -1),
            0
        )
    );
}
console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
console.log(solution(["AA"], ["B"]));
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"]));
