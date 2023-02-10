function solution(want, number, discount) {
  let result = 0;

  for (let i = 0; i < discount.length; i++) {
    let isSatisFied = true;
    const itemsPeriod10Day = discount.slice(i, i + 10);

    for (let j = 0; j < want.length; j++) {
      const targetItem = want[j];
      const targetCount = number[j];
      const count = itemsPeriod10Day.filter(
        (item) => item === targetItem
      ).length;

      if (targetCount > count) {
        isSatisFied = false;
        break;
      }
    }
    if (isSatisFied) result++;
  }
  return result;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);
