function solution(s) {
  let answer = 1;

  function isPalindrome(s) {
    const len = s.length;
    for (let i = 0; i < len; i++) {
      if (s[i] !== s[len - i - 1]) return false;
    }
    return true;
  }

  const len = s.length;
  for (let i = len; i > 1; i--) {
    for (let j = 0; j <= len - i; j++) {
      const cutStr = s.slice(j, j + i);
      if (isPalindrome(cutStr)) return i;
    }
  }
  return answer;
}

console.log(solution("abcdcba"));
console.log(solution("abacde"));
