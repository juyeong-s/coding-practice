function solution(fees, records) {
    const car = {};
    
    function time_to_min(time){
        const c_time = time.split(':').map((el) => +el);
        const minute = (c_time[0] * 60) + c_time[1];
        return minute;
    }

    function getFees(sum){
        if(sum < fees[0]) return fees[1];
        return fees[1] + Math.ceil((sum - fees[0]) / fees[2]) * fees[3];
    }
    
    for(const info of records){
        const [time, car_num, state] = info.split(' ');
        if(!car[car_num]) car[car_num] = ['', '', 0]; // [IN 시간, OUT 시간, 총 시간]

        if(state === 'IN'){
            car[car_num][0] = time;
            car[car_num][1] = '';
        }
        else if(state === 'OUT'){
            car[car_num][1] = time;
            car[car_num][2] += time_to_min(time) - time_to_min(car[car_num][0]);
        }
    }

    const result = [];
    for(const key in car){
        const [inTime, outTime] = car[key];
        if(outTime === ''){ // OUT 시간이 없는 경우
            const dif = time_to_min('23:59') - time_to_min(inTime);
            car[key][2] += dif;
        }
        const fee = getFees(car[key][2]);
        result.push([key, fee]);
    }
    return result.sort().map((v) => v[1]);
}