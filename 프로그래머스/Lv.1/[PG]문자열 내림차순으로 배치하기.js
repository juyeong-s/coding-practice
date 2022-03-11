function solution(s) {
    return s.split('').sort((a, b) => (a < b) - (b < a)).join('');
}

// 다른사람 풀이
function solution(s) {
    return s.split('').sort().reverse().join('');
}

