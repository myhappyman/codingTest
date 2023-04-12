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
