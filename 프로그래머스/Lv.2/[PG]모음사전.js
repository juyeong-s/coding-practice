function solution(word) {
    const LEN = 5;
    let allCase = 0;
    for(let i = 1; i <= LEN; i++) allCase += Math.pow(LEN, i);
    
    let answer = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] === 'A'){
            answer += 1;
        } else if(word[i] === 'E'){
            answer += Math.floor((allCase / Math.pow(LEN, i + 1)) * 1 + 1);
        } else if(word[i] === 'I'){
            answer += Math.floor((allCase / Math.pow(LEN, i + 1)) * 2 + 1);
        } else if(word[i] === 'O'){
            answer += Math.floor((allCase / Math.pow(LEN, i + 1)) * 3 + 1);
        } else if(word[i] === 'U'){
            answer += Math.floor((allCase / Math.pow(LEN, i + 1)) * 4 + 1);
        }
    }
    return answer;
}