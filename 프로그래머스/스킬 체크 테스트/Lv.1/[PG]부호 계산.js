function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, curr, index) => acc + (signs[index] ? curr : -curr),
    0
  );
}
