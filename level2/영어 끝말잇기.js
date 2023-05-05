function solution(n, words) {
    const map = new Map();
    let answer = [0,0];
    for(let i=0; i<words.length; i++){
        const x = words[i];
        const idx = i+1;
        if(map.get(x) > -1 ||
        (i > 0 && words[i-1][words[i-1].length-1] != x[0])){
            answer = [
                idx%n===0 ? n : idx%n,
                Math.ceil(idx/n)
            ];
            break;
        }else{
            map.set(words[i], i);
        }
    }
    return answer;
}
// console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
// console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]));