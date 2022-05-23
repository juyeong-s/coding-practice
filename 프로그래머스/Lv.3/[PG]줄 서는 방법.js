function solution(n, k) {
  let answer = [];
  let num = Array.from({ length: n }, (_, idx) => idx + 1);
  let fac = num.reduce((acc, curr) => acc * curr, 1);
  k--;

  while (answer.length !== n) {
    fac = Math.floor(fac / num.length);
    const temp = num[Math.floor(k / fac)];
    answer.push(temp);

    k = k % fac;
    num = num.filter((el) => el !== temp);
  }
  return answer;
}

console.log(solution(3, 5));
