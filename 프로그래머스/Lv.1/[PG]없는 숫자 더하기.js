function solution(numbers) {
    let sum = 0;
    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) sum += i;
    }
    return sum;
}

// 다른 사람 풀이
function solution(numbers) {
    return 45 - numbers.reduce((acc, curr) => acc + cur, 0);
}