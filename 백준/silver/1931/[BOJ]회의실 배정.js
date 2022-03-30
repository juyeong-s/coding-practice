function solve(n){
    conference.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
    let answer = 1;
    let end = conference[0][1];
    for(let i = 1; i < n; i++){
        const [startTime, endTime] = conference[i];
        if(startTime >= end){
            answer++;
            end = endTime;
        }
    }
   return answer;
}
const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/1931/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = input.shift();
const conference = input.map(row => row.split(' ').map(el => +el));
console.log(solve(+n));
