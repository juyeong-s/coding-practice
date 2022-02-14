function solution(tickets) {
    // ICN이 출발인 곳 찾기
    const startAirport = tickets.reduce((acc, curr, idx) => curr[0] === 'ICN' ? acc = [...acc, idx] : acc, []);
    console.log(startAirport);
}

function solution(tickets) {
    const obj = {};
    for(const path of tickets){
        const start = path[0];
        const end = path[1];
        if(!obj[start]) obj[start] = [end];
        else obj[start].push(end);
    }
    console.log(obj);
    for(const key in obj) obj[key].sort();
    console.log(obj);
    
    function bfs(){
        const visited = Array.from({ length: Object.keys(obj).length }, Array().fill(false));
        
    }
}