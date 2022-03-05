function solution(sizes) {
    let mw = 0, mh = 0;
    for(const size of sizes){
        const [w, h] = size.sort((a, b) => b - a);
        if(mw < w) mw = w;
        if(mh < h) mh = h;
    }
    return mw * mh;
}

// 다른 사람 풀이
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}