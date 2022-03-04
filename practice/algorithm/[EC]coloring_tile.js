const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
rl.on("line", function (x) {
  arr.push(x.split(' ').map((el) => +el));
}).on("close", function () {
  arr.shift();
  solve();
  process.exit();
});

function solve(){
  for(let i = 0; i < arr.length; i++){
    const N = arr[i][0];
    const M = arr[i][1];
    console.log(coloring(i + 1, N, M));
    i += N;
  }
}

function coloring(start, N, M){
  const board = arr.slice(start, start + N);
  const visited = new Set();
  for(let i = 0; i < N - 1; i++){
    for(let j = 0; j < M - 1; j++){
        if(board[i][j]) {
          if(board[i][j+1] && board[i+1][j] && board[i+1][j+1]) {
            visited.add(`${i}${j}`)
              .add(`${i}${j+1}`)
              .add(`${i+1}${j}`)
              .add(`${i+1}${j+1}`);
            continue;
          }
          else {
            if(visited.has(`${i}${j}`)) continue;
            return "NO";
          }
        }
    }
  }
  return "YES";
}