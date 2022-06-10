function solution(s, n) {
  const splited = s.split("");

  for (let i = 0; i < s.length; i++) {
    const curr = splited[i];
    if (curr === " ") continue;
    const code = curr.charCodeAt(0);
    if ((code + n > 90 && code <= 90) || code + n > 122)
      splited[i] = String.fromCharCode(code + n - 26);
    else splited[i] = String.fromCharCode(code + n);
  }
  return splited.join("");
}

console.log(solution("AaZz", 25));
