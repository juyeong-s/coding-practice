function solution(s) {
  let minLen = s.length;

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let len = 0;
    let cnt = 1;
    for (let j = 0; j < s.length; j += i) {
      let currStr = s.substr(j, i);
      let nextStr = s.substr(j + i, i);

      if (currStr === nextStr) {
        cnt++;
      } else {
        cnt > 1 ? (len += i + cnt.toString().length) : (len += currStr.length);
        cnt = 1;
      }
    }
    minLen = Math.min(minLen, len);
  }
  return minLen;
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
console.log(solution("xxxxxxxxxxyyy"));
