function solve(){
    for(const N of input.slice(1)){
        const dp = [0, 1];
        for(let i = 2; i <= N; i++){
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        
        if(N == 0) console.log(1, 0);
        else if(N == 1) console.log(0, 1);
        else console.log(dp[N-1], dp[N]);
    }
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/1003/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
solve();