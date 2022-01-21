function solution(N, arr) {
    for(let i = 1; i < N; i++) {
        arr[i][0] += Math.min(arr[i - 1][1], arr[i - 1][2]);
        arr[i][1] += Math.min(arr[i - 1][0], arr[i - 1][2]);
        arr[i][2] += Math.min(arr[i - 1][0], arr[i - 1][1]);
    }
    console.log(Math.min(...arr[N-1]));
}
  
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0];
const arr = [];
for(let i = 1; i < input.length; i++) arr.push(input[i].split(' ').map((v) => +v));

solution(N, arr);