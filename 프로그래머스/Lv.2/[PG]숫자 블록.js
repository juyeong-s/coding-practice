const MAX_NUM = 10000000;

function solution(begin, end) {
  function getGCD(num) {
    // 소수인지 아닌지에 따라
    // 소수가 아닌 경우 가장 작은 값으로 나눈 몫을 리턴, 소수인 경우 나눌 수 있는 수는 1뿐이므로 1리턴
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0 && num / i <= MAX_NUM) return num / i;
    }
    return 1;
  }

  const result = [];
  if (begin === 1) {
    result.push(0);
    begin++;
  }
  for (let i = begin; i <= end; i++) {
    result.push(getGCD(i));
  }
  return result;
}

console.log(solution(9, 12));
