function solution(numbers) {
  const len = numbers.length;
  const set = new Set();
  const used = Array.from({ length: len }, () => false);

  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

  function combine(num, index) {
    set.add(+num);

    for (let i = 0; i < len; i++) {
      if (i !== index && !used[i]) {
        used[i] = true;
        combine(num + numbers[i], i);
        used[i] = false;
      }
    }
  }

  for (let i = 0; i < len; i++) {
    used[i] = true;
    combine(numbers[i], i);
    used[i] = false;
  }

  let answer = 0;
  for (const num of set) {
    if (isPrime(num)) answer++;
  }

  return answer;
}
