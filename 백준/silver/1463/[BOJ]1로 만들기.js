function solve(N){
    const dp = [0, 0];
    for(let i = 2; i <= N; i++){
        dp[i] = dp[i-1] + 1;
        if(i % 2 === 0)
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        if(i % 3 === 0)
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    return dp[N];
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/1463/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];

// 다른사람 풀이
const numSet = new Set();
let count = 0;
let queue = [+input];

function solve(x) {
    while(queue.length) {
        const newQueue = [];
        for(const num of queue) {
            if(num === 1) {
                return count;
            }
            if(!(num % 3) && !numSet.has(num / 3)) {
                newQueue.push(num / 3);
                numSet.add(num / 3);
            }
            if(!(num % 2) && !numSet.has(num / 2)) {
                newQueue.push(num / 2);
                numSet.add(num / 2);
            }
            if(!numSet.has(num - 1)) {
                newQueue.push(num - 1);
                numSet.add(num / 3);
            }
        }
        queue = newQueue;
        count++;
    }
}

console.log(solve(N));