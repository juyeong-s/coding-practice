const changeToNumArr = (arr) => arr.map((el) => +el);

function solution(today, terms, privacies) {
  const result = [];
  const [todayYear, todayMonth, todayDay] = changeToNumArr(today.split("."));
  const termsObj = {};

  terms.forEach((info) => {
    const [term, validity] = info.split(" ");
    termsObj[term] = +validity;
  });

  privacies.forEach((info, index) => {
    let [collectedDate, term] = info.split(" ");
    let [yyyy, mm, dd] = changeToNumArr(collectedDate.split("."));

    const validity = termsObj[term];
    mm += +validity;
    dd--; // 하루 전날까지만 유효

    // 더한 달이 12보다 클 경우
    if (mm > 12) {
      const dividedMM = Math.floor(mm / 12);

      // 12월달 일 경우
      if (mm % 12 === 0) {
        yyyy += dividedMM - 1;
        mm = 12;
      } else {
        yyyy += dividedMM;
        mm %= 12;
      }
    }

    // 일자가 0일 경우 이전 달로 넘기고 28일로 만듦
    if (dd === 0) {
      mm--;
      dd = 28;

      // 이전 달로 넘긴 달이 0 일 경우 12월달로 보내고 연도도 이전 연도로 보냄
      if (mm === 0) {
        yyyy--;
        mm = 12;
      }
    }

    // 연도가 작을 경우
    if (yyyy < todayYear) return result.push(index + 1);

    // 같은 연도일 경우
    if (yyyy === todayYear) {
      // 오늘보다 달이 작으면
      if (mm < todayMonth) return result.push(index + 1);
      // 오늘과 같은 달일 경우
      if (mm === todayMonth) {
        // 오늘보다 작은 일자일 경우
        if (dd < todayDay) return result.push(index + 1);
      }
    }
  });

  return result;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);
// console.log(
//   solution(
//     "2022.12.01",
//     ["A 6", "B 28", "C 3"],
//     ["2021.05.02 A", "2021.12.01 B", "2022.02.01 C", "2022.02.02 C"]
//   )
// );
