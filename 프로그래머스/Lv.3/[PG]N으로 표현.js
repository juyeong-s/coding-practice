function solution(N, number) {
    const caculate = Array.from({ length: 9 }, () => new Set());

    for(let i = 1; i <= 8; i++){
        caculate[i].add(+("" + N).repeat(i));
        for(let j = 1; j < i; j++){
            for(const num1 of caculate[j]){
                for(const num2 of caculate[i-j]){
                    caculate[i].add(num1 + num2);
                    caculate[i].add(num1 - num2);
                    caculate[i].add(num1 * num2);
                    if(num2 !== 0) caculate[i].add(num1 / num2);
                }
            }
        }
        if(caculate[i].has(number)) return i;
    }
    return -1;
}