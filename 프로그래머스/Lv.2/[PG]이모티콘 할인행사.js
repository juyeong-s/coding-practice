function getEmoticonSaleCombination(arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const permutations = getEmoticonSaleCombination(origin, selectNum - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}

function solution(users, emoticons) {
  let result = [0, 0];

  const saleCombination = getEmoticonSaleCombination([10, 20, 30, 40], emoticons.length).map(
    (combi) => combi.map((el, idx) => [el, Math.floor((100 - el) * 0.01 * emoticons[idx])])
  );

  saleCombination.forEach((emoticon) => {
    let plusCnt = 0;
    let costSum = 0;

    users.forEach(([ratio, price]) => {
      let cost = 0;

      emoticon.forEach(([sale, saledPrice]) => {
        if (sale >= ratio) cost += saledPrice;
      });

      cost >= price ? plusCnt++ : (costSum += cost);
    });

    if (result[0] < plusCnt) {
      result = [plusCnt, costSum];
    } else if (result[0] === plusCnt) {
      if (result[1] < costSum) {
        result = [plusCnt, costSum];
      }
    }
  });

  return result;
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
);

console.log(
  solution(
    [
      [40, 2900],
      [23, 10000],
      [11, 5200],
      [5, 5900],
      [40, 3100],
      [27, 9200],
      [32, 6900],
    ],
    [1300, 1500, 1600, 4900]
  )
);
