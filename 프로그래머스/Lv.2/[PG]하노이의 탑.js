function solution(n) {
  const result = [];

  function hanoi(n, from, to, aux) {
    if (n === 1) {
      result.push([from, to]); // 1. 마지막 1에 왔을 때 원판 하나를 이동을 시키고,
      return;
    }

    hanoi(n - 1, from, aux, to); // n-1개를 from -> 보조로 옮기고 to를 보조로 사용.
    result.push([from, to]); // 2. 1.의 이전 단계를 푸시
    hanoi(n - 1, aux, to, from); // n-1개를 보조 -> to로 옮기고 from을 보조로 사용.
  }
  hanoi(n, 1, 3, 2); // n개를 1 -> 3으로 옮길건데 2를 보조로 사용.
  return result;
}

console.log(solution(3));
