function getSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function solution1(elements) {
  const allSum = getSum(elements);
  const sumSet = new Set([...elements, allSum]);
  const len = elements.length;

  for (let i = 2; i < len; i++) {
    for (let j = 0; j < len; j++) {
      sequence =
        j + i > len
          ? [...elements.slice(j), ...elements.slice(0, i - (len - j))]
          : elements.slice(j, j + i);
      const sum = getSum(sequence);
      sumSet.add(sum);
    }
  }

  return sumSet.size;
}

function solution2(elements) {
  const circle = elements.concat(elements);
  const set = new Set();

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circle[i + j];
      set.add(sum);
    }
  }
  return set.size;
}

console.log(solution1([7, 9, 1, 1, 4]));
console.log(solution2([7, 9, 1, 1, 4]));
