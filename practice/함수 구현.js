function solve(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) map.set(arr[i], 1);
    else map.set(arr[i], map.get(arr[i]) + 1);
  }
  const transArr = [...map.values()].filter((num) => num > 1);
  return transArr.length ? transArr : [-1];
}

console.log(solve([1, 2, 3, 3, 3, 3, 4, 4]));
console.log(solve([3, 2, 4, 4, 2, 5, 2, 5, 5]));
console.log(solve([3, 5, 7, 9, 1]));
