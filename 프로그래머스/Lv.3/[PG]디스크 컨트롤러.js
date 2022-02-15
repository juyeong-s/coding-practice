function solution(jobs) {
    const len = jobs.length;
    let sum = 0;
    let current = 0;
    jobs.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    while(jobs.length > 0){
        const [enter, work] = jobs.shift();
        const time = Math.abs(current - enter) + work;
        if(enter <= current){
            current += work;
            sum += time;
        }
        else {
            current += time;
            sum += work;
        }
        jobs.sort((a, b) => a[0] <= current && b[0] <= current ? a[1] - b[1] : true);
    }
    return Math.floor(sum / len);
}