function solution(a, b, c, d) {
    const arr = [a,b,c,d].sort((a,b) => a-b);
    let cnt = 0;
    for(let i=0; i<arr.length; i++){
        let chk = 0;
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]) chk++;  
        }        
        if(chk > cnt) cnt = chk;
    }

    if(cnt === 3){
        return arr[0] * 1111;
    }else if(cnt === 2){
        if(arr[0] === arr[1]){
            return Math.pow(10 * arr[0] + arr[3], 2);    
        }else{
            return Math.pow(10 * arr[1] + arr[0], 2);
        }        
    }else if(cnt === 1){        
        if(arr[0] === arr[1] && arr[2] !== arr[3]){
            return arr[2] * arr[3];
        }else if(arr[1] === arr[2]&& arr[0] !== arr[3]){    
            return arr[0] * arr[3];
        }else if(arr[2] === arr[3] && arr[0] !== arr[1]){
            return arr[0] * arr[1];
        }else{
            return (arr[2] + arr[0]) * (arr[2] - arr[0]);
        }        
    }else {
        return arr[0];
    }
}
console.log(solution(1,1,1,1));
console.log(solution(2,2,2,2));
console.log(solution(3,3,3,3));
console.log(solution(4,4,4,4));
console.log(solution(5,5,5,5));
console.log(solution(6,6,6,6));
console.log();
console.log(solution(3,3,3,6)); //1296
console.log(solution(6,3,3,3)); //1296
console.log(solution(3,6,3,3)); //1296
console.log(solution(3,3,6,3)); //1296
console.log(solution(6,6,6,3)); //3969
console.log(solution(3,6,6,6)); //3969
console.log(solution(6,3,6,6)); //3969
console.log(solution(6,6,3,6)); //3969
console.log();
console.log(solution(1,1,1,2)); //144
console.log(solution(2,1,1,1)); //144
console.log(solution(1,1,2,1)); //144
console.log(solution(1,2,1,1)); //144
console.log(solution(6,6,6,1)); //3721
console.log(solution(1,6,6,6)); //3721
console.log(solution(6,1,6,6)); //3721
console.log(solution(6,6,1,6)); //3721
console.log();
console.log(solution(6,6,3,3)); //27
console.log(solution(3,3,6,6)); //27
console.log(solution(6,3,3,6)); //27
console.log(solution(3,6,6,3)); //27
console.log(solution(3,6,3,6)); //27
console.log(solution(6,3,6,3)); //27
console.log();
console.log(solution(6,6,3,2)); //6
console.log(solution(6,6,2,3)); //6
console.log(solution(3,2,6,6)); //6
console.log(solution(2,3,6,6)); //6
console.log(solution(2,6,6,3)); //6
console.log(solution(3,6,6,2)); //6
console.log();
console.log(solution(3,3,4,5)); //20
console.log(solution(3,3,5,4)); //20
console.log(solution(4,5,3,3)); //20
console.log(solution(5,4,3,3)); //20
console.log(solution(4,3,3,5)); //20
console.log(solution(5,3,3,4)); //20
console.log(solution(1,2,2,4)); //4
console.log(solution(4,2,2,1)); //4
console.log();
console.log(solution(6,5,4,3)); //3
console.log(solution(3,4,5,6)); //3
console.log(solution(5,6,3,4)); //3
console.log(solution(4,5,6,3)); //3
console.log(solution(1,2,3,4)); //1
console.log(solution(4,2,1,3)); //1