const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (x) {
  rl.close();
}).on("close", function () {
  console.log(solve(x));
  process.exit();
});

function solve(x){
  return x.match(/\(/g).length === x.match(/\)/g).length ? "YES" : "NO";
}
