function solution(info, query) {    // 정확성 success, 효율성 success
    const result = [];
    const infoObj = {}
    
    function getCombinations(arr, score, start){
        const key = arr.join('');
        
        if(infoObj[key]) infoObj[key].push(score);
        else infoObj[key] = [score];
        
        for(let i = start; i < arr.length; i++){
            const copy = [...arr];
            copy[i] = '-';
            getCombinations(copy, score, i + 1);
        }
    }
    
    function binarySearch(arr, score){
        let start = 0;
        let end = arr.length;
        while(start < end){
            const mid = Math.floor((start + end) / 2);
            
            if(arr[mid] >= score) end = mid;
            else if(arr[mid] < score) start = mid + 1;
        }
        return arr.length - start;
    }
    
    for(const str of info){
        const arr = str.split(' ');
        const score = +arr.pop();
        getCombinations(arr, score, 0);
    }
    
     for (const key in infoObj) infoObj[key] = infoObj[key].sort((a, b) => a - b);
        
    for(const q of query){
        const splited = q.split(/ and | /g);
        const score = +splited.pop();
        const key = splited.join('');
        const numArr = infoObj[key]

        if(numArr) {    
            const len = binarySearch(numArr, score);
            result.push(len);
        }
        else result.push(0);
    }
    return result;
}

function solution(info, query) {    // 정확성 success, 효율성 fail
    const infoSplited = info.map((str)=>str.split(' '));
    const querySplited = query.map((str)=>str.split(/ and | /g));
    let result = new Array(query.length).fill(0);
    querySplited.forEach((arr, idx)=>{
        infoSplited.forEach((i)=>{
            const copyQuery = arr.slice(0, -1).filter((v)=>v!=='-');
            let intersection = copyQuery.filter(x=>i.includes(x)).length;
            intersection === copyQuery.length && Number(i[i.length-1]) >= Number(arr[arr.length-1]) ? result[idx] += 1 : null;
        })
    })
    return result;
}