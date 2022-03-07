function getPermutation(arr, n){
    const results = [];
    if(n === 1) return arr.map((el) => [el]);
    
    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
        const permutation = getPermutation(rest, n-1);
        const attached = permutation.map((el) => [fixed, ...el]);
        results.push(...attached);
    });
    
    return results;
}

function solution(k, dungeons) {
    const len = dungeons.length;
    const idxArray = Array.from({ length: len }, (_, idx) => idx);
    const ableIdxs = [...getPermutation(idxArray, len)];
    
    let answer = 0;
    ableIdxs.forEach((indexs) => {
        let fatigue = k, cnt = 0;
        for(const index of indexs){
            const [minFatigue, useFatigue] = dungeons[index];
            if(fatigue < minFatigue) {
                answer = Math.max(answer, cnt);
                break;
            }
            fatigue -= useFatigue;
            cnt++;
        }
        answer = Math.max(answer, cnt);
    });
    return answer;
}

// 다른 사람 풀이
function solution(k, dungeons) {
    const N = dungeons.length;
    const visited = new Array(N).fill(0);
    let answer = 0;

    function dfs(k, cnt){
        answer = Math.max(cnt, answer); // cnt는 계속 반영되도록.

        for (let i = 0; i < N; i++){
            if (!visited[i] && k >= dungeons[i][0]){
                visited[i] = true;  // 방문 시키고
                dfs(k - dungeons[i][1], cnt + 1);   // 다음 dfs 호출 후
                visited[i] = false; // 방문 해제시켜서 다음 i로 dfs를 호출했을때 3->2(거꾸로)로도 방문이 가능하도록 함.
            }
        }
    }

    dfs(k, 0);
    return answer;
}