// 풀이 1
function isEqual(arr){
    const num = arr.reduce((acc, curr) => acc + curr.filter((n) => n).length, 0);
    return num === 0 || num === (arr.length * arr.length) ? true : false;
}

let zero = 0;
let one = 0;

function solution(arr) {
    const initNum = arr[0][0];

    if(arr.length === 1) initNum ? one++ : zero++;
    else{
        if(isEqual(arr)) {
            initNum ? one++ : zero++;
        } else {
            const n = arr.length / 2;
            let first = Array.from({ length: n }, () => new Array(n));
            let second = Array.from({ length: n }, () => new Array(n));
            let third = Array.from({ length: n }, () => new Array(n));
            let four = Array.from({ length: n }, () => new Array(n));
            
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < arr[i].length; j++){
                    const value = arr[i][j];
                    if(i < n){
                        if(j < n) first[i][j] = value;
                        else second[i][j - n] = value;
                    }
                    else{
                        if(j < n) third[i - n][j] = value;
                        else four[i - n][j - n] = value;
                    }
                }
            }
            solution(first);
            solution(second);
            solution(third);
            solution(four);
        }
    }
    return [zero, one];
}

// 풀이 2
let zero = 0;
let one = 0;

function solution(arr) {
    function isEqual(len, x, y){
        const first = arr[x][y];
        for (let i = x; i < x + len; i++) {
            for(let j = y; j < y + len; j++) {
                if(first !== arr[i][j]) return false;
            }
        }
        return true;
    }

    function quad(len, position){
        const x = position[0];
        const y = position[1];
        const initNum = arr[x][y];
        const half = len / 2;

        if(len === 1) initNum ? one++ : zero++;
        else if(isEqual(len, x, y)) initNum ? one++ : zero++;
        else{
            quad(half, position);
            quad(half, [x, y + half]);
            quad(half, [x + half,y]);
            quad(half, [x + half, y + half]);
        }
    }

    quad(arr.length, [0, 0]);
    return [zero, one];
}