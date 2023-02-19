function solution(order) {
  let result = 0;
  let currBox = 1;
  const stack = [];

  for (const num of order) {
    let isDelivered = false;
    while (true) {
      if (stack.length === 0 || num > stack.at(-1)) {
        stack.push(currBox++);
      } else if (num === stack.at(-1)) {
        stack.pop();
        result++;
        isDelivered = true;
        break;
      } else break;
    }
    if (!isDelivered) break;
  }

  return result;
}

console.log(solution([4, 3, 1, 2, 5]));
console.log(solution([5, 4, 3, 2, 1]));
