function solution(park, routes) {
  const Park_2D = [];
  let [y, x] = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].indexOf("S") > -1) [y, x] = [i, park[i].indexOf("S")];

    Park_2D.push([...park[i]]);
  }

  for (let i = 0; i < routes.length; i++) {
    const command = routes[i].split(" ");
    let [direction, cnt] = command;
    cnt = parseInt(cnt);

    if (direction === "N" || direction === "W") cnt = cnt * -1;

    if (direction === "N" || direction === "S") {
      const finish = y + cnt;
      if (finish < 0) continue;
      if (finish >= Park_2D.length) continue;

      let flag = false;
      let [j, check] = direction === "N" ? [finish, y] : [y, finish];
      for (j; j <= check; j++) {
        if (Park_2D[j][x] === "X") {
          flag = true;
          break;
        }
      }
      if (flag) continue;

      y = finish;
    } else {
      //W, E
      const finish = x + cnt;
      if (finish < 0) continue;
      if (finish >= Park_2D[y].length) continue;

      let flag = false;
      let [j, check] = direction === "W" ? [finish, x] : [x, finish];
      for (j; j <= check; j++) {
        if (Park_2D[y][j] === "X") {
          flag = true;
          break;
        }
      }
      if (flag) continue;

      x = finish;
    }
  }

  return [y, x];
}

// console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2,1]
// console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0,1]
// console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0,0]

// console.log(solution(["OSO", "OOO", "OOO", "OOO"], ["W 2"])); // [0,1]
// console.log(solution(["OSO", "OOO", "OOO", "OOO"], ["N 2"])); // [0,1]
// console.log(solution(["OSO", "OOO", "OOO", "OOO"], ["S 5"])); // [0,1]
// console.log(solution(["OSO", "OOO", "OOO", "OOO"], ["E 5"])); // [0,1]

// console.log(solution(["XXX", "XSX", "XXX"], ["E 1"])); // [1,1]
// console.log(solution(["XXX", "XSX", "XXX"], ["W 1"])); // [1,1]
// console.log(solution(["XXX", "XSX", "XXX"], ["S 1"])); // [1,1]
// console.log(solution(["XXX", "XSX", "XXX"], ["N 1"])); // [1,1]

// console.log(solution(["SOXOO", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["E 3"])); // [0, 0]
// console.log(solution(["SOOOX", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["E 3"])); // [0, 3]
// console.log(solution(["XOOOS", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["W 3"])); // [0, 1]
// console.log(solution(["OOXOS", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["W 3"])); // [0, 4]
// console.log(solution(["SOOOO", "OOOOO", "XOOOO", "OOOOO", "OOOOO"], ["S 3"])); // [0, 0]
// console.log(solution(["SOOOO", "OOOOO", "OOOOO", "OOOOO", "XOOOO"], ["S 3"])); // [3, 0]
// console.log(solution(["OOOOO", "OOOOO", "XOOOO", "OOOOO", "SOOOO"], ["N 3"])); // [4, 0]
// console.log(solution(["XOOOO", "OOOOO", "OOOOO", "OOOOO", "SOOOO"], ["N 3"])); // [1, 0]

console.log(solution(["SOOOO", "OOOOO", "XOOOO", "OOOOO", "OOOOO"], ["S 1"])); // [0, 1]
console.log(solution(["SOOOO", "OOOOO", "XOOOO", "OOOOO", "OOOOO"], ["S 2"])); // [0, 0]
