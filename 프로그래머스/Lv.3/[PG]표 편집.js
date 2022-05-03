function solution(n, k, cmd) {
  const stack = [];
  const state = Array.from({ length: n }, () => true);
  const list = Array.from({ length: n }, (_, index) => [index - 1, index + 1]);
  list[n - 1][1] = -1;

  function upNode(k, row) {
    for (let i = 0; i < row; i++) k = list[k][0];
    return k;
  }

  function downNode(k, row) {
    for (let i = 0; i < row; i++) k = list[k][1];
    return k;
  }

  function deleteNode(k) {
    let [prev, next] = list[k];
    stack.push([k, prev, next]);
    state[k] = false;

    if (next === -1) {
      if (prev !== -1) list[prev][1] = next;
      k = prev;
    } else {
      list[next][0] = prev;
      if (prev !== -1) list[prev][1] = next;
      k = next;
    }
    return k;
  }

  function restoreNode() {
    const [node, prev, next] = stack.pop();
    if (prev !== -1) list[prev][1] = node;
    if (next !== -1) list[next][0] = node;
    state[node] = true;
  }

  for (const item of cmd) {
    const [direct, row] = item.split(" ");
    switch (direct) {
      case "D":
        k = downNode(k, +row);
        break;
      case "U":
        k = upNode(k, +row);
        break;
      case "C":
        k = deleteNode(k);
        break;
      case "Z":
        restoreNode();
        break;
    }
  }

  let answer = "";
  for (const value of state) {
    if (value) answer += "O";
    else answer += "X";
  }
  return answer;
}

console.log(
  solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
);
console.log(
  solution(8, 2, [
    "D 2",
    "C",
    "U 3",
    "C",
    "D 4",
    "C",
    "U 2",
    "Z",
    "Z",
    "U 1",
    "C",
  ])
);
