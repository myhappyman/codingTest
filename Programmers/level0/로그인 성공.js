function solution(id_pw, db) {
    return db.find((x) => x[0] === id_pw[0] && x[1] === id_pw[1])
        ? "login"
        : db.find((x) => x[0] === id_pw[0])
        ? "wrong pw"
        : "fail";
}

console.log(
    ["meosseugi", "1234"],
    [
        ["rardss", "123"],
        ["yyoom", "1234"],
        ["meosseugi", "1234"],
    ]
);
console.log(
    ["programmer01", "15789"],
    [
        ["programmer02", "111111"],
        ["programmer00", "134"],
        ["programmer01", "1145"],
    ]
);
console.log(
    ["rabbit04", "98761"],
    [
        ["jaja11", "98761"],
        ["krong0313", "29440"],
        ["rabbit00", "111333"],
    ]
);
