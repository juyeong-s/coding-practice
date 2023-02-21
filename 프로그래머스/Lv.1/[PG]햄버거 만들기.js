function solution(ingredient) {
  let result = 0,
    index = 0;

  while (index < ingredient.length - 3) {
    if (ingredient[index] === 1) {
      const slice = ingredient.slice(index, index + 4).join("");
      if (slice === "1231") {
        ingredient.splice(index, 4);
        index -= 3;
        result++;
        continue;
      }
    }
    index++;
  }

  return result;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
