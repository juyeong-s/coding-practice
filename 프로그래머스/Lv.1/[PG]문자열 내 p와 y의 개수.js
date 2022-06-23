function solution(s) {
  const pLen = s.match(/p|P/g) || 0;
  const yLen = s.match(/y|Y/g) || 0;
  return pLen.length === yLen.length;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
console.log(solution("aaa"));
