function solution(A, B){
    A.sort((a, b) => a-b);
    B.sort((a, b) => b-a);
    return A.reduce((acc, curr, idx) => acc += curr * B[idx], 0);
}

// 조합으로 가능한 경우의 수 별로 값을 도출해보려고 했으나 성공하지 못함. 왜인지 아직 모름..
function solution(A, B){
    let answer = Infinity;
    const idxArray = Array.from({ length: A.length }, (_, i) => i);    
    const combinations = getPermutations(idxArray, A.length);

    for(const arr of combinations) {
        const calculated = A.map((el, idx) => el * B[arr[idx]]);
        const sum = calculated.reduce((acc, curr) => acc + curr, 0);
        if(sum < answer) answer = sum;
    }
    return answer;
}

function getPermutations(arr, n) {
    const result = [];
    if(n === 1) return arr.map((el) => [el]);
    
    arr.forEach((curr, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
        const combinations = getPermutations(rest, n-1);
        const attached = combinations.map((el) => [curr, ...el]);
        result.push(...attached);
    });
    return result;
}