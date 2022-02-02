function solution(N, K, arr){
    const knapsack = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));
    for(let n = 1; n < N + 1; n++){
        for(let k = 1; k < K + 1; k++){
            knapsack[n][k] = arr[n-1][0] > k ? knapsack[n - 1][k] : Math.max(knapsack[n - 1][k - arr[n-1][0]] + arr[n-1][1], knapsack[n-1][k]);
        }
    }
    return knapsack[N][K];
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/12865/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0].split(' ')[0];
const K = +input[0].split(' ')[1];
const arr = input.slice(1).map(el => el.split(' ').map(num => +num));
console.log(solution(N, K, arr));