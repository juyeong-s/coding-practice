function solution(word) {   // 풀이 1
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

function solution(word) {   // 풀이 2
    const LEN = 5;
    let answer = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] === 'A'){
            answer += 1;
        } else if(word[i] === 'E'){
            answer += Math.floor((1 * Math.pow(LEN, LEN - i) - 1) / 4 + 1);
        } else if(word[i] === 'I'){
            answer += Math.floor((2 * Math.pow(LEN, LEN - i) - 1) / 4 + 1);
        } else if(word[i] === 'O'){
            answer += Math.floor((3 * Math.pow(LEN, LEN - i) - 1) / 4 + 1);
        } else if(word[i] === 'U'){
            answer += Math.floor((4 * Math.pow(LEN, LEN - i) - 1) / 4 + 1);
        }
    }
    return answer;
}

function solution(word) {   // 플이 3
    const dict = ['A', 'E', 'I', 'O', 'U'];
    const words = [];
    function getWords(vowel, depth){
        if(depth === 6) return;
        words.push(vowel);
        for(const next of dict){
            getWords(`${vowel}${next}`, depth + 1);
        }
    }
    for(const vowel of dict) {
        getWords(vowel, 1);
        if(words.indexOf(word) !== -1) break;
    }
    return words.indexOf(word) + 1;
}