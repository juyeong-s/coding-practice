function attachedMusic(musicinfos) {    // 음악 이어붙이기
    for(let i = 0; i < musicinfos.length; i++){
        const startTime = musicinfos[i].start.split(':');
        const endTime = musicinfos[i].end.split(':');
        const interval = (endTime[0] - startTime[0]) * 60 + (endTime[1] - startTime[1]);
        musicinfos[i].interval = interval;

        const scoreLen = musicinfos[i].score.length;
        const repeatCnt = Math.floor(interval / scoreLen);
        const remain = interval - (repeatCnt * scoreLen);

        musicinfos[i].score = musicinfos[i].score.repeat(repeatCnt) + musicinfos[i].score.substr(0, remain);
    }
}

function findMusic(musicinfos, m) { // 음악 찾기
    const result = [];
    for(let i = 0; i < musicinfos.length; i++){
        const isCorrect = musicinfos[i].score.match(m);
        if(isCorrect !== null) result.push(i);
    }
    return result;
}

function selectMusic(musicinfos, result) {  // 음악 하나만 추출
    let maxIdx = 0;
    let maxLen = 0;
    for(const idx of result){
        if(musicinfos[idx].interval > maxLen){
            maxLen = musicinfos[idx].interval;
            maxIdx = idx;
        }
    }
    return musicinfos[maxIdx].title;
}

function solution(m, musicinfos) {
    m = m.replace(/(C#)/g, 'c')
        .replace(/(D#)/g, 'd')
        .replace(/(F#)/g, 'f')
        .replace(/(G#)/g, 'g')
        .replace(/(A#)/g, 'a')
        .replace(/(B#)/g, 'b');
    
    musicinfos = musicinfos.map((str) => {
        const array = str.split(',');
        return {
            start: array[0],
            end: array[1],
            title: array[2],
            score: array[3].replace(/(C#)/g, 'c')
                    .replace(/(D#)/g, 'd')
                    .replace(/(F#)/g, 'f')
                    .replace(/(G#)/g, 'g')
                    .replace(/(A#)/g, 'a')
                    .replace(/(B#)/g, 'b')
        }
    });
    
    attachedMusic(musicinfos);
    
    const result = findMusic(musicinfos, m);
    if(!result.length) return "(None)";
    
    return selectMusic(musicinfos, result);
}