function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    return bfs(maps, n, m);
}

function bfs(arr, n, m) {
    let answer = -1;
    const needVisit = [[0, 0, 1]];
    
    while(needVisit.length > 0) {
        const [x, y, count] = needVisit.shift();
        if(x === n - 1 && y === m - 1) return count;
        
        if(x > 0 && arr[x - 1][y]) { // 위
            needVisit.push([x - 1, y, count + 1]);
            arr[x - 1][y] = 0;
        }
        if(x < n - 1 && arr[x + 1][y]) { // 아래
            needVisit.push([x + 1, y, count + 1]);
            arr[x + 1][y] = 0;
        }
        if(y < m - 1 && arr[x][y + 1]) { // 오른쪽
            needVisit.push([x, y + 1, count + 1]);
            arr[x][y + 1] = 0;
        }
        if(y > 0 && arr[x][y - 1]) { // 왼쪽
            needVisit.push([x, y - 1, count + 1]);
            arr[x][y - 1] = 0;
        }
    }
    return answer;
}