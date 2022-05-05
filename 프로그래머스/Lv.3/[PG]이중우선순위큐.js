function solution(operations) {
  const heap = [];
  for (const op of operations) {
    const [cmd, num] = op.split(" ");
    switch (cmd) {
      case "I":
        heap.push(+num);
        break;
      case "D":
        if (num == 1) heap.pop();
        else if (num == -1) heap.shift();
        break;
    }
    heap.sort((a, b) => a - b);
  }
  return heap.length ? [heap[heap.length - 1], heap[0]] : [0, 0];
}

console.log(solution(["I 16", "D 1"]));
console.log(solution(["I 7", "I 5", "I -5", "D -1"]));
