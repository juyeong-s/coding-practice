function solution(lines) {
    lines = lines.map((line) => line.split(' ').slice(1));
    const arr = [];

    // 시작시간 구하기
    for(let i = 0; i < lines.length; i++){
        let [date, duration] = lines[i];
        const [hour, minute, second] = date.split(':');
        const endTime = Number(hour * 3600) + Number(minute * 60) + Number(second);
        duration = duration.substring(0, duration.length - 1);

        let startTime = endTime - duration + 0.001;
        if(startTime < 0) startTime = 0;
        arr.push([startTime, endTime]);
    }
    
    let answer = 1;
    if(arr.length === 1) return 1;
    for(let i = 0; i < arr.length; i++){ // 끝나는 시각 기준으로 비교
        const range = arr[i][1] + 1;
        let cnt = 1;
        for(let j = i + 1; j < arr.length; j++){ // 시작 시각이 range 내에 포함되는지
            if(arr[j][0] < range) cnt++;
        }
        answer = Math.max(cnt, answer);
    }
    return answer;
}
// 끝나는 시각 기준으로 1초씩 탐색. 계속해서 max값 반영해줌