function solution(quiz) {
    return quiz.map(x => eval(x.split("=")[0]) == x.split("=")[1] ? "O" : "X");
}
console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));
console.log(solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]));