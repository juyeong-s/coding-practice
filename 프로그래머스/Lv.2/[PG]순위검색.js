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