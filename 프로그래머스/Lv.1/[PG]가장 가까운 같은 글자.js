function solution(s) {
  const result = [-1];
  const len = s.length;
  const splited = s.split("");

  for (let i = 1; i < len; i++) {
    const target = s[i];
    const prefixStr = splited.slice(0, i);
    const reversed = prefixStr.reverse();
    const index = reversed.indexOf(target);

    if (index !== -1) result.push(index + 1);
    else result.push(-1);
  }
  return result;
}

function solution(s) {
  return [...s].map((value, idx) => {
    const cnt = s.slice(0, idx).lastIndexOf(value);
    return cnt !== -1 ? idx - cnt : -1;
  });
}

console.log(solution("banana"));
console.log(solution("foobar"));
