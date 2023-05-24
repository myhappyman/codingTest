function solution(spell, dic) {
    const word = spell.sort().join("");
    return dic
        .map((x) => [...x].sort().join(""))
        .filter((x) => x.includes(word)).length === 0
        ? 2
        : 1;
}
console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
console.log(
    solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
);
