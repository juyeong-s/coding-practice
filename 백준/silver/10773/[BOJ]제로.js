function solve(){
    const stack = [];
    for(const n of arr){
        n ? stack.push(n) : stack.pop();
    }
    return stack.reduce((acc, curr) => acc + curr, 0);
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/10773/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr = input.slice(1).map(Number);
console.log(solve());