function solution(dirs) {
    let answer = 0;
    const move = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };
    let location = [0, 0];
    const flat = new Set();
    
    for(const d of dirs){
        const len = flat.size;
        const currX = location[0] + move[d][0];
        const currY = location[1] + move[d][1];

        if(currX > 5 || currX < -5 || currY > 5 || currY < -5) continue;
        
        flat.add("" + location[0] + location[1] + currX + currY);
        flat.add("" + currX + currY + location[0] + location[1]);
        
        if(len !== flat.size) answer++;
        
        location[0] = currX;
        location[1] = currY;
    }
    return answer;
}