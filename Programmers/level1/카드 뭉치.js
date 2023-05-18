function solution(cards1, cards2, goal) {
    for(let i=0; i<goal.length; i++){        
        const word1 = cards1.length > 0 ? cards1[0] : "";
        const word2 = cards2.length > 0 ? cards2[0] : "";
        if(word1 === goal[i]){
            cards1.shift();
        }else if(word2 === goal[i]){
            cards2.shift();
        }else{
            return "No"
        }
    }
    return "Yes";
}
console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]));

