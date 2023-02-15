function solution(numbers) {
  const result = Array.from({ length: numbers.length }, () => -1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    // 스택 마지막에 들어있는 인덱스에 있는 숫자가 현재 수보다 작을 경우 해당 인덱스의 result에 현재 수를 대입
    // 현재 수보다 크거나 같은 경우는 그냥 넘어가고 stack에 인덱스만 쌓아두게 됨
    while (stack.length && numbers[stack.at(-1)] < numbers[i]) {
      result[stack.pop()] = numbers[i];
    }
    stack.push(i); // 인덱스를 쌓음
  }
  return result;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
