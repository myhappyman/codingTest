function solution(name, yearning, photo) {
    const m = new Map();
    name.forEach((n, i) => m.set(n, yearning[i]));
    return photo.map(x => x.reduce((a,b) => m.get(b) != null ? a+m.get(b):a,0));
}
console.log(
    solution(
        ["may", "kein", "kain", "radi"],
        [5, 10, 1, 3],
        [
            ["may", "kein", "kain", "radi"],
            ["may", "kein", "brin", "deny"],
            ["kon", "kain", "may", "coni"],
        ]
    )
);