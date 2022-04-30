function solution1(n, t, m, timetable) {
    const transTime = timetable.map(time => {
        const [hour, minute] = time.split(':').map(el => +el);
        return hour * 60 + minute;
    }).sort((a, b) => a - b);
    
    let currTime = 540;
    for(let i = 1; i < n; i++){
        let currNum = 0;
        while(currNum < m && transTime.length){
            if(transTime[0] > currTime) break;
            transTime.shift();
            currNum++;
        }
        currTime += t;
    }
    
    let lastTime = 0;
    let answer = 0;
    for(const time of transTime){
        if(time <= currTime){
            m--;
            lastTime = time;
        }
        if(!m) break;
    }
    if(!m) answer = lastTime - 1;
    else answer = currTime;
    
    return String(Math.floor(answer / 60)).padStart(2, '0') + ":" + String(answer % 60).padStart(2, '0');
}

function solution2(n, t, m, timetable) {
    const transTime = timetable.map(time => {
        const [hour, minute] = time.split(':').map(el => +el);
        return hour * 60 + minute;
    }).sort((a, b) => a - b);
    
    let currTime = 540;
    for(let i = 0; i < n; i++){
        const crewNum = transTime.filter(time => time <= currTime).length;

        if(i !== n - 1){
            transTime.splice(0, crewNum > m ? m : crewNum);
            currTime += t;
        } else {
            if(crewNum >= m) currTime = transTime[m-1] - 1;
        }
    }
    
    return String(Math.floor(currTime / 60)).padStart(2, '0') + ":" + String(currTime % 60).padStart(2, '0');
}