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