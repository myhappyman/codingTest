function solution(n) {
    let i=1;
    for(;;){
        if((6*i)%n === 0){
            break;
        }
        i++;
    }
    return i;
}