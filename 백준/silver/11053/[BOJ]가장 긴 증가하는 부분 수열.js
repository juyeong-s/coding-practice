function solve(){
    const dp = [];
    for(let i = 0; i < N; i++){
        let max = 0;
        for(let j = 0; j < i; j++){
            if(seq[i] > seq[j] && max < dp[j]){
                max++;
            }
        }
        dp[i] = max + 1;
    }
    return Math.max(...dp);
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/11053/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const seq = input[1].split(' ').map(Number);
console.log(solve());


// 다른 사람 풀이
function solve(){
    const dp = [];
    for(let i = 0; i < N; i++){
        dp[i] = 1;
        for(let j = 0; j < i; j++){
            if(seq[i] > seq[j] && dp[j] + 1 > dp[i]){
                dp[i] = dp[j] + 1;
            }
        }
    }
    return Math.max(...dp);
}
