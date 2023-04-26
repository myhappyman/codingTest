function solution(a, b) {
    if(a.length < 13 && b.length < 13){
        return +a + (+b) + "";
    }

    while(a.length !== b.length){
        a.length > b.length ? b="0"+b : a="0"+a;
    }
    const arrA = [];
    const arrB = [];
    let idx = 0;
    const slicing = 10;
    while(idx*slicing < a.length){
        arrA[idx] = a.slice(idx*slicing, idx*slicing+slicing);
        arrB[idx] = b.slice(idx*slicing, idx*slicing+slicing);
        idx++;
    }
    arrA.reverse();
    arrB.reverse();

    const result = arrA.map((x, i) => {        
        let value = String((+x) + (+arrB[i]));
        let valueLen = value.length;
        if(valueLen > String(arrB[i]).length &&
            i+1 !== arrA.length){
            arrA[i+1] = String(+arrA[i+1] + (+value.slice(0,1)));
            value = value.slice(1);
        }
        return value;
    });
    return result.reverse().join("");
}
console.log(solution("18446744073709551615", "287346502836570928366"))

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
