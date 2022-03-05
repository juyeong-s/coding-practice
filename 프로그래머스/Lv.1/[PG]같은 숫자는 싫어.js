function solution(arr){
    const answer= [];
    arr.forEach((n) => {
        if(answer[answer.length-1] !== n) answer.push(n);
    })
    return answer;
}

// 다른사람 풀이
function solution(arr){
    return arr.filter((val, index) => val != arr[index+1]);
}