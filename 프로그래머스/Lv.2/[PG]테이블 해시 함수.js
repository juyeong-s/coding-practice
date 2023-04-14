function solution(data, col, row_begin, row_end) {
  return data
    .sort((a, b) => {
      const idx = col - 1;
      return a[idx] === b[idx] ? b[0] - a[0] : a[idx] - b[idx];
    })
    .reduce(
      (acc, tuple, idx) =>
        row_begin - 1 <= idx && idx < row_end
          ? acc ^ tuple.reduce((acc, cur) => acc + (cur % (idx + 1)), 0)
          : acc,
      0
    );
}

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);

// col번째 컬럼을 기준으로 튜플 오름차순 정렬, 만약에 컬럼에 중복된 값이 있다면 기본키가 큰거부터 정렬
// i번째 튜플의 각 컬럼을 i로 나눈 나머지 값들을 다 더해 => S_i
// row_begin ≤ i ≤ row_end 인 모든 S_i를 누적해서 XOR 한 값을 해시 값으로 반환
