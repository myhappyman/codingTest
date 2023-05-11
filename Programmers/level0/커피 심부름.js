function solution(order) {
    return order.reduce((a, b) => a += b.indexOf("latte") > -1 ? 5000 : 4500 ,0)
}
console.log(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"]));