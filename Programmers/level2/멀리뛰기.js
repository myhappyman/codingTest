function solution(n) {
    const result = [1, 2, 3];
    if(n > result.length){
        for(let i=3; i<n; i++){
            result.push((result[i-2] + result[i-1])%1234567);
        }        
    }
    return result[n-1]%1234567;
}
// console.log(solution(20))
// console.log(solution(7)); //21 //8
// console.log(solution(6)); //13 //5
// console.log(solution(5)); //8 //3
// console.log(solution(4)); //5 //2
// console.log(solution(3)); //3 //1
//2 //2  //1
//1 //1  //0

//1 1 3 5

// function solution(n){
//     return n <= 1 ? n%1234567 : solution(n-1)%1234567+solution(n-2)%1234567;
// }
// console.log(solution(3))