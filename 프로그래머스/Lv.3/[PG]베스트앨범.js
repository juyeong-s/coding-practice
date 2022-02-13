function solution(genres, plays) {
    const combine = [];
    let music = [];
    
    for(let i = 0; i < genres.length; i++){
        const genre = genres[i];
        const play = plays[i];
        const index = music.findIndex((info) => info.genre === genre);
        combine.push([i, genre, play]);
        
        if(index === -1) music.push({'genre': genre, 'playCnt': play});
        else music[index]['playCnt'] += play;
    }
    
    combine.sort((a, b) => b[2] - a[2]);
    music.sort((a, b) => b.playCnt - a.playCnt);
    
    const answer = [];
    for(let i = 0; i < music.length; i++){
        for(let j = 0; j < 2; j++){
            const genre = music[i].genre;
            const index = combine.findIndex((info) => info[1] === genre);

            if(index !== -1){
                answer.push(combine[index][0]);
                combine.splice(index, 1);
            }
        }
    }
    return answer;
}