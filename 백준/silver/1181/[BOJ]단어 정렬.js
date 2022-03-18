function solve(){
    const set = [...new Set(arr)];
    set.sort((a, b) => {
        if(a.length === b.length){
            if (b > a) return -1;
        }
        return a.length - b.length;
    });
    return set.join('\n');
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/1181/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = input[0];
const arr = input.slice(1);
console.log(solve(N));
