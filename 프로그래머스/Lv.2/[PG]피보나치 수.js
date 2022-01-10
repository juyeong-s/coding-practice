function solution(n) {
    const fibonacci = (n) => {
        let numArr = [0, 1];

        if (n < 2) return n;
        for (let i = 2; i <= n; i++) {
            numArr[i] = (numArr[i-2] + numArr[i-1]) % 1234567;
        }  
        return numArr[n];
    }
    return fibonacci(n);
}