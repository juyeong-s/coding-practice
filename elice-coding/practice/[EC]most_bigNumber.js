const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
rl.on("line", function (x) {
    N = x;
}).on("close", function () {
  console.log(solve(N));
  process.exit();
});

function solve(N){
    if(N % 2 === 0) return '1'.repeat(N / 2);
    else return '7'+'1'.repeat((N / 2) - 1);
}
