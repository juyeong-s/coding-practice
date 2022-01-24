function solution(n, computers) {
    let answer = 0;
    let visited = [false];
    
    function bfs(start) {
        const needVisit = [start];

        while(needVisit.length > 0){
            const node = needVisit.shift();
            if(!visited[node]) {
                visited[node] = true;
                const adj = computers[node];
                for(let i = 0; i < adj.length; i++) {
                    if(node !== i && adj[i]) needVisit.push(i);
                }
            }
        }
    } 
    
    for(let i = 0; i < computers.length; i++) {
        if(!visited[i]){
            bfs(i);
            answer++;
        }
    }
    return answer;
}