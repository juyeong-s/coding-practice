function solution(n, wires) {
    let graph = {};
    for(const edge of wires){
        const [node1, node2] = edge;
        if(!graph[node1]) graph[node1] = [];
        if(!graph[node2]) graph[node2] = [];
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    
    function calculate(node1, node2){
        let cnt = 0;
        const visited = [node1];
        const needVisit = [node1];
        
        while(needVisit.length > 0){
            const node = needVisit.shift();
            for(const el of graph[node]){
                if(!visited.includes(el) && el !== node2){
                    visited.push(el);
                    needVisit.push(el);
                }
            }
            cnt++;
        }
        return cnt;
    }
    
    let answer = Infinity;
    for(const edge of wires){
        const [node1, node2] = edge;
        const substract = Math.abs(calculate(node1, node2) - calculate(node2, node1));
        answer = Math.min(answer, substract);
    }
    return answer;
}