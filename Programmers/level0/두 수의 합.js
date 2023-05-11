function solution(a, b) {
    if(a.length<13 && b.length<13) return +a+(+b)+"";
    else{
        if(a.length != b.length){
            while(a.length != b.length){
                a.length > b.length ? b="0"+b : a="0"+a;
            }
        }
        const arrA = [...a].reverse();
        const arrB = [...b].reverse();
        const arr = [];
        for(let i=0; i<arrA.length; i++){
            const sum = +arrA[i]+(+arrB[i])+"";
            if(i+1 != arrA.length && (sum.length != arrA[i].length
                || sum.length != arrB[i].length)){
                arrA[i+1] = +arrA[i+1]+1+"";
                arr.push(sum.slice(1));
            }else{
                arr.push(sum);
            }
        }
        return arr.reverse().reduce((a,b) => a+b, "");
    }
}
console.log(solution("18446744073709551615", "287346502836570928366"))
// console.log(solution("123456789", "987654321"))

// console.log(solution("19999999999999999999999999999998", "1"))

// let z = 9;    
// var testA = "188"+"88".repeat(z);
// var testB = "11"+"11".repeat(z)+"2";
// var resultValue = solution(testA, testB);
// console.log(resultValue);


// for(let z=100; z<110; z++){
//     console.log(z);
//     var testA = "188"+"88".repeat(z);
//     var testB = "11"+"11".repeat(z)+"2";
//     var resultValue = solution(testA, testB);
//     console.log(resultValue);
// }
