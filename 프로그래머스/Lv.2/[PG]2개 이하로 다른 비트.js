function solution(numbers) {
    const answer = [];
    for(const num of numbers){
        const bit = '0' + num.toString(2);
        if(num % 2 === 0) answer.push(num + 1);
        else{
            for(let i = bit.length; i >= 0; i--){
                if(bit[i] === '0'){
                    const change = parseInt(bit.substring(0, i) + '10' + bit.substring(i+2, bit.length), 2);
                    answer.push(change);
                    break;
                }
            }
        }
    }
    return answer;
}