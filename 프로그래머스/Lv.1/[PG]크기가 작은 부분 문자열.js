function solution(t, p) {
  const tLen = t.length;
  const pLen = p.length;
  const pNum = +p;

  let result = 0;

  for (let i = 0; i <= tLen - pLen; i++) {
    const slicedT = t.substr(i, pLen);
    if (slicedT <= pNum) result++;
  }
  return result;
}

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));
