function solution1(topping) {
  const [c1Set, c1Arr, c2Set, c2Arr] = [new Set(), [], new Set(), []];

  topping.forEach((t1, idx) => {
    const t2 = topping.at(-idx);
    c1Set.add(t1);
    if (idx !== 0) c2Set.add(t2);

    c1Arr.push(c1Set.size);
    c2Arr.push(c2Set.size);
  });

  return c1Arr.reduce(
    (acc, cur, idx) => (cur === c2Arr.at(-idx - 1) ? acc + 1 : acc),
    0
  );
}

function solution2(topping) {
  const leftTopping = {};
  const rightTopping = topping.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  let result = 0;
  let leftCount = 0;
  let rightCount = new Set(topping).size;

  for (let i = 0; i < topping.length - 1; i++) {
    const t = topping[i];
    if (!leftTopping[t]) leftCount++;

    leftTopping[t] = (leftTopping[t] || 0) + 1;

    rightTopping[t]--;
    if (!rightTopping[t]) rightCount--;

    if (leftCount === rightCount) result++;
  }

  return result;
}

console.log(solution1([1, 2, 1, 3, 1, 4, 1, 2]));
console.log(solution1([1, 2, 3, 1, 4]));

console.log(solution2([1, 2, 1, 3, 1, 4, 1, 2]));
console.log(solution2([1, 2, 3, 1, 4]));
