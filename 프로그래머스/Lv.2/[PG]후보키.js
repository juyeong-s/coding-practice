function getCombination(arr, num){
    const result = [];
    if(num === 1) return arr.map((v) => [v]);
    
    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combinations = getCombination(rest, num - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        result.push(...attached);
    });
    return result;
}

function isUnique(arr){
    let originLen = arr.length;
    const SetLen = new Set(arr).size;
    return originLen === SetLen ? true : false
}

function solution(relation) {
    const combination = [];
    const unique = [];
    const indexes = Array.from({ length: relation[0].length }, (_, i) => i);

    for(let i = 1; i <= indexes.length; i++){
        combination.push(getCombination(indexes, i));
    }
    // 유일성 검사
    for(let i = 0; i < combination.length; i++){
        const tuple = combination[i];
        for(let j = 0; j < combination[i].length; j++){
            if(!tuple.some((v) => unique.some((x) => x.includes(v))))
                isUnique(relation.map((arr) => arr.filter((_, idx) => tuple[j].includes(idx)).join(''))) ? unique.push(tuple[j]) : null;
        }
    }
    // 최소성 검사
    const answer = [];
    for(const u of unique){
        const sub = u;
        let check = true;
        for(const a of answer){
            if(a.filter((v) => !sub.includes(v)).length === 0) check = false;
        }
        if(check) answer.push(sub);
    }
    return answer.length;
}