function solution(N){
    let answer = -1;
    const div = Math.floor(N / 5);  // 5의 개수
    for(let i = 0; i <= div; i++){
        const remain = N - (i * 5);
        if(remain % 3 === 0) answer = i + Math.floor(remain / 3);
    }
    return answer;
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/bronze/2839/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
console.log(solution(N));