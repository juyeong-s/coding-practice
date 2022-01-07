function solution(n){
    let result = 0;
    while(n){
        if(n % 2 === 0)
              n = n / 2;
        else{
            n = (n - 1) / 2;
            result++;
        }
    }
    return result;
}