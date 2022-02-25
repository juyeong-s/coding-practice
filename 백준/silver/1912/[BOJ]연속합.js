function solve(n, arr){
    for(let i = 1; i < n; i++){
        arr[i] = Math.max(arr[i] + arr[i - 1], arr[i]);
    }
    return Math.max(...arr);
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : '백준/silver/1912/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map((n) => +n);
console.log(solve(n, arr));