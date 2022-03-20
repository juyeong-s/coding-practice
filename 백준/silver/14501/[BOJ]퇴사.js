function solve(){
    const dp = Array.from({ length: N+1 },() => 0);
    let max = 0;
    for(let i = 0; i < N; i++){
        const [t, p] = consult[i];
        max = Math.max(max, dp[i]);

        if(i + t <= N){
            dp[i+t] = Math.max(dp[i+t], max + p);
        }
    }
    return Math.max(...dp);
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/14501/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const consult = input.slice(1).map((date)=> date.split(' ').map(Number));
console.log(solve());