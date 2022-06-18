function solution1(s) {
  let count = 0;
  let zeroCount = 0;

  while (s !== "1") {
    const prevLen = s.length;
    const c = s.split("").filter((num) => num === "1").length;
    s = c.toString(2);
    zeroCount += prevLen - c;
    count++;
  }
  return [count, zeroCount];
}

function solution2(s) {
  let count = 0;
  let zeroCount = 0;

  while (s !== "1") {
    count++;
    zeroCount += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return [count, zeroCount];
}

console.log(solution1("110010101001"));
console.log(solution2("110010101001"));
