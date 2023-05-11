function solution(my_string) {
    const result = Array(52).fill(0);
    [...my_string].map(x => {
        if(x.toLowerCase() === x){
            return result[x.charCodeAt()-71] = result[x.charCodeAt()-71] +1
        }else{
            return result[x.charCodeAt()-65] = result[x.charCodeAt()-65] +1
        }
    })
    return result;
}