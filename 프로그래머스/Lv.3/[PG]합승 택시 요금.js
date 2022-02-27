function solution(n, s, a, b, fares) {
    let graph = Array.from({ length: n }, () => Array(n).fill());
    graph = graph.map((fees, idx1) => fees.map((_, idx2) => idx1 === idx2 ? 0 : Infinity));
    fares.forEach(([from, to, fee]) => {
        graph[from - 1][to - 1] = fee;
        graph[to - 1][from - 1] = fee;
    });
    
    function floydWarshall(){
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                for(let k = 0; k < n; k++){
                    graph[j][k] = Math.min(graph[j][k], graph[j][i] + graph[i][k]);
                }
            }
        }
    }
    floydWarshall();
    
    let min = Infinity;
    for(let i = 0; i < n; i++){
        let sum = graph[s-1][i] + graph[i][a-1] + graph[i][b-1];
        min = Math.min(min, sum);
    }
    return min;
}