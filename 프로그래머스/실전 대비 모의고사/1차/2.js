function solution(want, number, discount) {
  let result = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const tenList = discount.slice(i, i + 10);
    let state = true;

    for (let j = 0; j < want.length; j++) {
      const filter = tenList.filter((product) => product === want[j]);
      if (number[j] > filter.length) {
        state = false;
        break;
      }
    }
    if (state) result++;
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
