function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    words.splice(words.indexOf(target), 1); // 우선 순위 target이 먼저 오도록
    words.unshift(target);

    function getAdj(word){ // 한 문자만 다른 문자열 추출
        const adj = [];
        for(const el of words){
            const difIdx = [...el].reduce((acc, curr, idx) => curr !== word[idx] ? acc += 1 : acc, 0);
            if(difIdx === 1) adj.push(el);
        }
        return adj;
    }
    
    function dfs(){
        const visited = new Set();
        let queue = [begin];
        
        while(queue.length > 0){
            const word = queue.shift();
            if(word === target) return visited;
            
            if(!visited.has(word)){
                visited.add(word);
                queue = [...getAdj(word), ...queue];
            }
        }
        return 0;
    }
    return dfs().size;
}