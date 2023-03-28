function solution(commands) {
  const LEN = 51;
  let result = [];
  let values = Array.from({ length: LEN * LEN }, () => "EMPTY");
  let parent = Array.from({ length: LEN * LEN }, (_, idx) => idx);

  function find(x) {
    if (x !== parent[x]) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(x1, x2) {
    const root1 = find(x1);
    const root2 = find(x2);

    if (values[root1] === "EMPTY" && values[root2]) {
      parent[root1] = root2;
      values[root1] = values[root2];
    } else {
      parent[root2] = root1;
      values[root2] = values[root1];
    }
  }

  function unmerge(r1, c1) {
    const x = r1 * LEN + c1;
    const rootX = find(x);
    const valueX = values[rootX];

    const nodes = [];
    for (let i = 0; i < LEN * LEN; i++) {
      if (find(i) === rootX) nodes.push(i);
    }

    for (const node of nodes) {
      values[node] = "EMPTY";
      parent[node] = node;
    }

    values[x] = valueX;
  }

  function replace(value1, value2) {
    for (let i = 0; i < LEN * LEN; i++) {
      if (values[i] === value1) values[i] = value2;
    }
  }

  function update(r1, c1, value) {
    const x = r1 * LEN + c1;
    const rootX = find(x);
    values[rootX] = value;
  }

  function merge(r1, c1, r2, c2) {
    const x1 = r1 * LEN + c1;
    const x2 = r2 * LEN + c2;
    if (parent[x1] !== parent[x2]) union(x1, x2);
  }

  function print(r, c) {
    const x = r * LEN + c;
    const rootX = find(x);
    result.push(values[rootX]);
  }

  commands.forEach((command) => {
    const cmd = command.split(" ");
    const params = cmd.slice(1);
    const [p1, p2, p3, p4] = params;

    switch (cmd[0]) {
      case "UPDATE":
        if (params.length === 2) {
          replace(p1, p2);
        } else {
          update(+p1, +p2, p3);
        }
        break;
      case "MERGE":
        merge(+p1, +p2, +p3, +p4);
        break;
      case "UNMERGE":
        unmerge(+p1, +p2);
        break;
      case "PRINT":
        print(+p1, +p2);
        break;
      default:
        break;
    }
  });

  return result;
}

console.log(
  solution([
    "UPDATE 1 1 menu",
    "UPDATE 1 2 category",
    "UPDATE 2 1 bibimbap",
    "UPDATE 2 2 korean",
    "UPDATE 2 3 rice",
    "UPDATE 3 1 ramyeon",
    "UPDATE 3 2 korean",
    "UPDATE 3 3 noodle",
    "UPDATE 3 4 instant",
    "UPDATE 4 1 pasta",
    "UPDATE 4 2 italian",
    "UPDATE 4 3 noodle",
    "MERGE 1 2 1 3",
    "MERGE 1 3 1 4",
    "UPDATE korean hansik",
    "UPDATE 1 3 group",
    "UNMERGE 1 4",
    "PRINT 1 3",
    "PRINT 1 4",
  ])
);

console.log(
  solution([
    "UPDATE 1 1 a",
    "UPDATE 1 2 b",
    "UPDATE 2 1 c",
    "UPDATE 2 2 d",
    "MERGE 1 1 1 2",
    "MERGE 2 2 2 1",
    "MERGE 2 1 1 1",
    "PRINT 1 1",
    "UNMERGE 2 2",
    "PRINT 1 1",
  ])
);

console.log(
  solution([
    "UPDATE 1 1 menu",
    "MERGE 1 1 1 2",
    "MERGE 1 1 1 3",
    "MERGE 1 1 1 4",
    "MERGE 1 2 1 3",
    "UPDATE 1 1 hansik",
    "PRINT 1 1",
    "PRINT 1 2",
    "PRINT 1 3",
    "PRINT 1 4",
  ])
);
