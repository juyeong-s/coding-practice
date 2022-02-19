function solution(user_id, banned_id) {
    const candidate = {}
    for(const b_id of banned_id){
        if(!candidate[b_id]) candidate[b_id] = [];
        for(const u_id of user_id){
            let state = true;
            if(u_id.length !== b_id.length) continue;
            
            for(let i = 0; i < b_id.length; i++){
                if(b_id[i] !== '*' && b_id[i] !== u_id[i]) {
                    state = false;
                    break;
                }
            }
            state && !candidate[b_id].includes(u_id)? candidate[b_id].push(u_id) : null;
        }
    }

    const answer = new Set();
    function dfs(idx = 0, visited = []){
        if(idx === banned_id.length) {
            visited.sort();
            answer.add(visited.join(''));
            return;
        }

        const b_id = banned_id[idx];
        for(const u_id of candidate[b_id]){
            if(!visited.includes(u_id)) dfs(idx+1, [...visited, u_id]);
        }
    }
    dfs();
    return answer.size;
}

solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"]);