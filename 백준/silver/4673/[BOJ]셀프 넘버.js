const N = 10000;

function solve() {
  const arr = Array.from({ length: N }, () => true);

  for (let i = 1; i < N - 27; i++) {
    let sum = i;
    const str = String(i);
    for (let j = 0; j < str.length; j++) {
      sum += +str[j];
    }
    arr[sum] = false;
  }

  for (let i = 1; i < N; i++) {
    if (arr[i]) console.log(i);
  }
}
solve();
