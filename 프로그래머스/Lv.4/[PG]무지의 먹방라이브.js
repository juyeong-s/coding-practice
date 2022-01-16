// 1
function solution(food_times, k) {
    let foods = food_times.map((time, i) => {return {index: i+1, time: time}});
    console.log(foods);
    for(let i = 0; i < foods.length; i++){
        if(foods[i].time === 1){
            foods = foods.splice(i, 1);
        }
        if(foods[i].time){
            foods[i].time -= 1;
        }
        k--;
        return foods[i].index;
    }
    return -1;
}

// 2
function solution(food_times, k) {
    let foods = food_times.map((time, i) => [i+1, time]).sort((a, b)=> a[1] - b[1]);
    // console.log(foods);
    for(let i = 0; i < foods.length; i++){
        const min = foods[0][1];
        const foodsLen = foods.filter(([_, v]) => v).length;
        console.log(foodsLen * min);
        if(k >= foodsLen * min){
            foods = foods.map(([_, v]) => [_, v -= min]);
        }
        console.log(foods);
    }
}