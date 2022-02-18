function solution(n) {
    let arr = [0, 1, 2];
    for(let i = 3; i <= n; i++){
        arr.push((arr[i - 1] + arr[i - 2]) % 1000000007);
    }
    return arr[n];
}