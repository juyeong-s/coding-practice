function solution(word, pages) {
    word = word.toLowerCase();
    const metaRe = '<meta property="og:url" content="\\S*';
    const linkRe = /<a href="\S*">/g;
    
    let linked = {};
    for(const page of pages){
        const url = page.match(metaRe)[0].slice(33).split(/"\/>|"/)[0];
        const base = page.split(/[^A-Za-z]/).filter(str => str.toLowerCase() === word).length;
        let exLink = page.match(linkRe);
        exLink = exLink ? exLink.map(tag => tag.slice(9, tag.length - 2)) : [];
        if(!linked[url]) linked[url] = {
            'base': base,
            'exLink': exLink,
            'match': base
        };
    }
    
    for(const key in linked){
        const obj = linked[key];
        for(const url of obj['exLink'])
            if(linked[url]) linked[url].match +=  obj['base'] / obj['exLink'].length;
    }
    
    let max = 0, idx = 0, answer = 0;
    for(const key in linked){
        const point = linked[key]['match'];
        if(point > max){
            max = point;
            answer = idx;
        }
        idx++;
    }
    return answer;
}