function solution(players, callings) {
  const player_obj = {};
  const rank_obj = {};

  players.forEach((name, idx) => {
    player_obj[name] = idx;
    rank_obj[idx] = name;
  });

  callings.forEach((name) => {
    const rank = player_obj[name];
    const prev_player = rank_obj[rank - 1];

    player_obj[name] -= 1;
    player_obj[prev_player] += 1;

    rank_obj[rank] = prev_player;
    rank_obj[rank - 1] = name;
  });

  return Array.from({ length: players.length }, (_, idx) => rank_obj[idx]);
}

console.log(
  solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])
);
