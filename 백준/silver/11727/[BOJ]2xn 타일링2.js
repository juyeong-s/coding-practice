function solve(){
    const dp = [0, 1, 3];
    for(let i = 3; i <= n; i++){
        dp[i] = (dp[i - 1] + dp[i - 2] * 2) % mod;
    }
    return dp[n];
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/11727/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const n = +input;
const mod = 10007;
console.log(solve());