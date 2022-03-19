function solve(){
    const dp = [0, 1, 2, 4];
    for(let i = 0; i < T; i++){
        const num = arr[i];
        for(let j = 4; j <= num; j++){
            dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
        }
        console.log(dp[num]);
    }
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/9095/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input[0];
const arr = input.slice(1).map(Number);
solve();