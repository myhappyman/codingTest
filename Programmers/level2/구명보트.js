/**
 * 탐욕법 문제로 아래와 같은 방식으로 풀이를 진행하였다.
 * 먼저 정렬을해서 몸무게가 가벼운사람부터 무거운사람 순으로 처리 한 후
 * 제일 가벼운사람과 제일 무거운사람을 더했을때 limit안이라면 쌍으로 태운다.
 * limit를 초과한다면 제일 무거운사람만 태워서 보낸다.
 * @param {*} people 
 * @param {*} limit 
 * @returns 
 */
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