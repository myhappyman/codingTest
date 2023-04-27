function solution(board) {
    const boom = [];
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] === 1){
                boom.push([i, j]);
            }           
        }
    }
    boom.forEach(([x, y]) => {
        const minX = x-1 < 0 ? 0 : x-1;
        const maxX = x+1 === board.length ? x : x+1;
        const minY = y-1 < 0 ? 0 : y-1;
        const maxY = y+1 === board[0].length ? y : y+1;
        for(let i=minX; i<=maxX; i++){
            for(let j=minY; j<=maxY; j++){
                if(x !== i || y !== j){
                    board[i][j] = 2;
                }
            }
        }
    });
   
    // console.log(board); // 지뢰 (3,2)
    //(2,1 2,2 2,3)
    //(3,1 지뢰 3,3)
    //(4,1 4,2 4,3)
    return board.flat().filter(x => x===0).length
}
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]))