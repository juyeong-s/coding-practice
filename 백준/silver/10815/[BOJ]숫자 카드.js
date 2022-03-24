function solve(n, card, my_card){
    const answer = [];
    for(const num of my_card){
        let start = 0, end = n - 1;
        let state = false;
        while(start <= end){
            let mid = Math.floor((start + end) / 2);
            if(card[mid] > num) {
                end = mid - 1;
            }
            else if(card[mid] < num){
                start = mid + 1;
            }
            else{
                state = true;
                break;
            }
        }
        answer.push(state? 1 : 0);
    }
    console.log(answer.join(' '));
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/10815/testcase.txt';
const [N, origin, _, have] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(row => row.split(' ').map(el => +el));
solve(N[0], origin.sort((a, b) => a-b), have);