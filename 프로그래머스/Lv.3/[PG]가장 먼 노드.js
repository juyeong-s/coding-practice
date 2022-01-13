function bfs(n, graph) {
    const visited = [1];
    const needVisit = [1];
    const len = Array.from({ length: n }).fill(0);

    while(needVisit.length !== 0) {
        const currNode = needVisit.shift();
        const adjNodes = graph[currNode];
        for(let i = 0; i <  adjNodes.length; i++) {
            const node = adjNodes[i];
            if(!visited.includes(node)) {
                needVisit.push(node);
                visited.push(node);
                len[node - 1] = len[currNode - 1] + 1;
            }
        }
    }
    return len.filter((v) => v === Math.max(...len)).length;
}

function solution(n, edge) {
    const graph = Array.from({ length: n+1 }, () => Array());
    for(const e of edge) {
        const startNode = e[0];
        const endNode = e[1];
        graph[startNode].push(endNode);
        graph[endNode].push(startNode);
    }
    return bfs(n, graph);
}
