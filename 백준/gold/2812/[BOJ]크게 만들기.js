function solve(){
    const stack = [];
    let delt = K;
    for(const curr of num){
        while(stack.length && delt && stack[stack.length - 1] < curr){
            stack.pop();
            delt--;
        }
        stack.push(curr);
    }
    return stack.slice(0, stack.length - delt).join('');
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/gold/2812/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const num = input[1];
console.log(solve());