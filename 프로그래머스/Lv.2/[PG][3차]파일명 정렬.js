function solution(files) {
    return files.sort((a, b) => {
        const aHead = a.match(/^\D+/)[0].toLowerCase();
        const bHead = b.match(/^\D+/)[0].toLowerCase();
        const aNumber = Number(a.match(/\d+/)[0]);
        const bNumber = Number(b.match(/\d+/)[0]);
        
        if(aHead > bHead) 
            return 1;
        
        if(aHead < bHead)
            return -1;
        
        if(aNumber > bNumber) 
            return 1;
        
        if(aNumber < bNumber)
            return -1;
    })
}