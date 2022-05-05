function solution(nodeinfo) {
  const sorted = nodeinfo
    .map((el, index) => [...el, index + 1])
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));

  function order(sorted, preAnswer, postAnswer) {
    const [x, y, node] = sorted[0];
    const leftChild = [];
    const rightChild = [];

    for (let i = 1; i < sorted.length; i++) {
      const row = sorted[i];
      if (row[0] < x) leftChild.push(row);
      else rightChild.push(row);
    }

    preAnswer.push(node);
    if (leftChild.length) order(leftChild, preAnswer, postAnswer);
    if (rightChild.length) order(rightChild, preAnswer, postAnswer);
    postAnswer.push(node);
  }

  const preAnswer = [];
  const postAnswer = [];
  order(sorted, preAnswer, postAnswer);
  return [preAnswer, postAnswer];
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);
