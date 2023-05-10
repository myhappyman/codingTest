function solution(people, limit) {
    const result = [];
    people.sort((a,b) => a-b);
    let j = 0;
    for(let i=0; i<people.length-j; i++){
        if(people[i] + people[people.length-1-j] > limit ){
            result.push(people[people.length-1-j]);
            i--;
        }else{
            result.push([people[i], people[people.length-1-j]]);
        }
        j++;
    }
    return result.length;
}
console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));