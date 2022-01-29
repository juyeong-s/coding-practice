function solution(n, results) {
    let answer = 0;
    let win = {};
    let lose = {};
    for(let i = 1; i <= n; i++){
        win[i] = new Set();
        lose[i] = new Set();
    }
    
    for(const edge of results){
        const [winner, loser] = edge;
        win[winner].add(loser);
        lose[loser].add(winner);
    }
    
    for(let i = 1; i <= n; i++){
        for(const winner of lose[i]){
            for(const loser of win[i])
                win[winner].add(loser);
        }
        
        for(const loser of win[i]){
            for(const winner of lose[i])
                lose[loser].add(winner);
        }
    }
    
    for(let i = 1; i <= n; i++)
        if(win[i].size + lose[i].size === n - 1) answer++;
    
    return answer;
}

// floyd-Warshall 방법
function solution(n, results) {
    let answer = 0;
    let graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(Infinity));

    results.forEach((edge, idx) => {
        const [winner, loser] = edge;
        graph[winner][loser] = 1;
        graph[loser][winner] = -1;
        graph[winner][winner] = 0;
        graph[loser][loser] = 0;
    });
    
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            for(let k = 1; k <= n; k++){
                if(graph[j][i] === 1 && graph[i][k] === 1) graph[j][k] = 1;
                if(graph[j][i] === -1 && graph[i][k] === -1) graph[j][k] = -1;
            }
        }
    }
    
    for(let i = 1; i <= n; i++) if(!graph[i].slice(1).includes(Infinity)) answer++;
    return answer;
}