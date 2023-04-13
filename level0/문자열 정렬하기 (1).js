function solution(my_string) {
    return [...my_string].filter(x => x > -1).map(x => parseInt(x)).sort((a,b) => a-b)
}