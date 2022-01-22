function getWeight(from, to) {
    if(from === to) return 1;
    else if(from === 0) return 2;
    else if(Math.abs(from - to) === 2) return 4;
    else return 3;
}

function solution(arr){
    const dp = Array.from({ length: arr.length }, () => Array.from({ length: 5 }, () => Array(5).fill(Infinity)));
    dp[0][0][0] = 0;

    for(let i = 0; i < arr.length-1; i++){
        const move = arr[i + 1];
        for(let j = 0; j < 5; j++){
            for(let k = 0; k < 5; k++){
                const now = dp[i][j][k];
                if(move !== k){
                    weight = getWeight(j, move);
                    dp[i + 1][move][k] = Math.min(dp[i + 1][move][k], now + weight);
                }

                if(move !== j){
                    weight = getWeight(k, move);
                    dp[i + 1][j][move] = Math.min(dp[i + 1][j][move], now + weight);
                }
            }
        }
    }
    let answer = Math.min(...dp[arr.length - 1].flat());
    return answer;
}

const fs = require('fs');
const input = fs.readFileSync('백준/2342/testcase.txt').toString().trim().split('\n');
const arr = input[0].split(' ').map((v) => +v).slice(0, input.length - 2);
arr.unshift(0);
console.log(solution(arr));