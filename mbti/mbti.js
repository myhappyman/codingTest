function solution(survey, choices) {
    const character_arr = [
        ["R", "T"],
        ["C", "F"],
        ["J", "M"],
        ["A", "N"]];
    const check_obj = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    
    survey.forEach((su, i) => {
        let word1 = su.substring(0, 1);
        let word2 = su.substring(1, 2);
        
        choices.forEach((ch, j) => {
            if(i == j){
                if(ch == 4){
                }else if(ch > 4){
                    check_obj[word2] += ch-4;
                }else{
                    check_obj[word1] += 4-ch;
                }
            }
        });
    });
    
    let answer = '';
    console.log(check_obj);
    character_arr.forEach(ch => {
        let tmp1 = check_obj[ ch[0] ];
        let tmp2 = check_obj[ ch[1] ];
        if(tmp1 === tmp2){
            answer += ch[0];
        }else if(tmp1 > tmp2){
            answer += ch[0];
        }else{
            answer += ch[1];
        }
    });    
    
    return answer;
}

let survey = ["AN", "CF", "MJ", "RT", "NA"];
let choices = [5, 3, 2, 7, 5];
//"TCMA"

// let survey = ["TR", "RT", "TR"];
// let choices = [7, 1, 3];
//"RCJA"

let res = solution(survey, choices);
console.log(res);