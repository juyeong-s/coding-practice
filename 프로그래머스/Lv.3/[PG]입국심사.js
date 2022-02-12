function solution(n, times) {
    times.sort((a, b) => a - b);
    let min = times[0];
    let max = n * times[times.length -1];

    while(min <= max){
        const mid = Math.floor((min + max) / 2);
        const count = times.reduce((acc, curr) => acc + Math.floor(mid / curr), 0); // 한 사람당 몇명 할 수 있는지
        if (count >= n) max = mid - 1;
        else min = mid + 1;
    }
    return min;
}