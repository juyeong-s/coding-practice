function solution(s) {
  return (s.length === 4 || s.length === 6) && !/\D/g.test(s);
}

console.log(solution("a234"));
console.log(solution("1234"));
