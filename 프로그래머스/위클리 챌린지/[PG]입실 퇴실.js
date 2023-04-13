// Lv.2
function solution(enter, leave) {
  let answer = new Array(enter.length + 1).fill(0);
  let room = [];

  while (leave.length > 0) {
    const inId = enter.shift();
    if (inId) room.push(inId);
    if (room.length > 1) {
      room.forEach((id) => (answer[id] = id === inId ? room.length - 1 : answer[id] + 1));
    }

    if (inId === leave[0]) {
      leave.shift();
      room.pop();
    }

    while (room.includes(leave[0])) {
      room = room.filter((id) => leave[0] !== id);
      leave.shift();
    }
  }
  return answer.slice(1);
}

console.log(solution([1, 3, 2], [1, 2, 3]));
console.log(solution([1, 4, 2, 3], [2, 1, 3, 4]));
console.log(solution([3, 2, 1], [2, 1, 3]));
console.log(solution([3, 2, 1], [1, 3, 2]));
console.log(solution([1, 4, 2, 3], [2, 1, 4, 3]));
