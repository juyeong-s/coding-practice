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