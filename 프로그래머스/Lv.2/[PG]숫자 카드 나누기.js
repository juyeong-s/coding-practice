function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  const findMinInt = (curr, target) => {
    const min = curr[0];
    for (let i = min; i > 0; i--) {
      if (
        curr.every((num) => num % i === 0) &&
        !target.some((num) => num % i === 0)
      )
        return i;
    }
    return 0;
  };

  return Math.max(findMinInt(arrayA, arrayB), findMinInt(arrayB, arrayA));
}

console.log(solution([10, 17], [5, 20]));
console.log(solution([10, 20], [5, 17]));
console.log(solution([14, 35, 119], [18, 30, 102]));

// function solution(arrayA, arrayB) {  // 왜 안돼?
//   const findMinInt = (curr, target) => {
//     const min = Math.min(...curr);

//     for (let i = min; i > 0; i--) {
//       if (
//         curr.every((num) => num % i === 0) &&
//         !target.some((num) => num % i === 0)
//         // arrayB.every((num) => num % i !== 0)
//       )
//         return i;
//     }
//     return 0;
//   };

//   return Math.max(findMinInt(arrayA, arrayB), findMinInt(arrayB, arrayA));
// }
