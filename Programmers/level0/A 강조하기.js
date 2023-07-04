function solution(myString) {
    return [...myString]
        .map((x) =>
            x === "a" || x === "A" ? x.toUpperCase() : x.toLowerCase()
        )
        .join("");
}
