function solve1() {
  const vowel = ["a", "e", "i", "o", "u"];

  function getCombination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((el) => [el]);

    arr.forEach((curr, index, origin) => {
      const rest = origin.slice(index + 1);
      const combination = getCombination(rest, selectNum - 1);
      const attached = combination.map((el) => [curr, ...el]);
      result.push(...attached);
    });
    return result;
  }

  const combinations = getCombination(cipherList, l).filter((el) => {
    let vowel_cnt = 0;
    let consonant_cnt = 0;
    for (const str of el) {
      if (vowel.includes(str)) vowel_cnt++;
      else consonant_cnt++;
    }
    if (vowel_cnt >= 1 && consonant_cnt >= 2) return true;
    return false;
  });
  combinations.forEach((combination) => console.log(combination.join("")));
}

function solve2() {
  const vowel = ["a", "e", "i", "o", "u"];

  function checkVowelNum(password) {
    let vowel_cnt = 0;
    let consonant_cnt = 0;
    for (const str of password) {
      if (vowel.includes(str)) vowel_cnt++;
      else consonant_cnt++;
    }

    if (vowel_cnt >= 1 && consonant_cnt >= 2) return true;
    return false;
  }

  function getCombination(password, cnt) {
    if (password.length === l) {
      if (checkVowelNum(password)) {
        console.log(password);
      }
      return;
    }

    if (cnt < cipherList.length) {
      getCombination(password + cipherList[cnt], cnt + 1);
      getCombination(password, cnt + 1);
    }
  }

  getCombination("", 0);
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/1759/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" "));
const [l, c] = input[0].map((el) => +el);
const cipherList = input[1].sort();
solve1();
solve2();
