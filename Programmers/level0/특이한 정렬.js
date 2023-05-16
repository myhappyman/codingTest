function solution(numlist, n) {    
    // numlist.sort((a,b) => a-b);
    // const cha = numlist.map(x => Math.abs(x-n)).sort((a, b) => a-b)[0];
    // const idx = numlist.indexOf(n+cha) > -1 ? numlist.indexOf(n+cha) : numlist.indexOf(n-cha);
    // const s = numlist.slice(0, idx);
    // const b = numlist.slice(idx);
    // const answer = [b.shift()];
    // while(s.length > 0 || b.length > 0){
    //     if(b.length > 0 && s.length > 0){
    //         let [num1, num2] = [b[0], s[s.length-1]];
    //         num1 = Math.abs(num1-n);
    //         num2 = Math.abs(num2-n);
    //         if(num1 === num2){
    //             answer.push(b.shift());
    //             answer.push(s.pop());
    //         }else if(num1 > num2){
    //             answer.push(s.pop());
    //         }else{
    //             answer.push(b.shift());
    //         }
    //     }else if(b.length > 0){
    //         answer.push(b.shift());
    //     }else{
    //         answer.push(s.pop());
    //     }
    // }
    // return answer;
    return numlist.sort((a,b) => Math.abs(a-n) - Math.abs(b-n) || b-a);
}
console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000,20,36,47,40,6,10,7000], 30));