function solution(tickets) {
    const answer = [];
    const visited = [];
    tickets.sort();
    
    function dfs(airport, depth){
        if(!depth) {
            answer.push(airport);
            return true;
        }

        for(let i = 0; i < tickets.length; i++) {
            if(!visited[i] && tickets[i][0] === airport) {
                visited[i] = true;
                answer.push(airport);
                if(dfs(tickets[i][1], depth - 1)) return true;
                visited[i] = false; 
            } 
        }
        answer.pop();
        return false;
    }

    dfs("ICN", tickets.length);
    return answer;
}