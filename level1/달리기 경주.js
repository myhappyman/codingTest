function solution(players, callings) {
  const playerMap = new Map();
  const playerNumberMap = new Map();

  players.forEach((p, idx) => {
    playerMap.set(p, idx);
    playerNumberMap.set(idx, p);
  });

  callings.forEach((call) => {
    const index = playerMap.get(call);
    const front = playerNumberMap.get(index - 1);
    console.log("index >", index, "   call >", call, "    front >", front);
    console.log("start", playerMap);
    playerMap.set(call, index - 1);
    playerMap.set(front, index);
    console.log("end", playerMap);
    playerNumberMap.set(index - 1, call);
    playerNumberMap.set(index, front);
  });

  const answer = [];
  for (let i = 0; i < players.length; i++) {
    answer.push(playerNumberMap.get(i));
  }
  return answer;
}
console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
