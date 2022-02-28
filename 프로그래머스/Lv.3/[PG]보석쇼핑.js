function solution(gems) {   // 정확성 success, 효율성 success
    const category = new Set(gems).size;
    const gemsMap = new Map();
    const len = gems.length;
    let result = [0, len];

    for(let i = 0; i < len; i++) {
        const gem = gems[i];
        gemsMap.delete(gem);
        gemsMap.set(gem, i);

        if (gemsMap.size === category) {
            const start = gemsMap.values().next().value;
            if (result[1] - result[0] > i - start)
                result = [start + 1, i + 1];
            
            gemsMap.delete(gems[start]);
        }
    }
    return result;
}

function solution(gems) {   // 정확성 success, 효율성 fail
    // 종류 개수 구하기
    const category = new Set(gems).size;
    const len = gems.length;
    // 진열대 번호 구하기
    let result = [0, len];
    for(let i = 0; i < len; i++){
        const set = new Set();
        for(let j = i; j < len; j++){
            set.add(gems[j])
            if(set.size === category) {
                const diff = result[1] - result[0];
                if(diff && j - i < diff) result = [i+1, j+1];
                break;
            }
        }
    }
    return result;
}