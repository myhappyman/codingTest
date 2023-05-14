function solution(arr, k) {
    const dupl = [];
    arr.forEach(x => {
        if(dupl.indexOf(+x) === -1){
            dupl.push(+x);
        }
    });
    return Array(k).fill().map(_ => dupl.length > 0 ? dupl.shift() : -1);
}