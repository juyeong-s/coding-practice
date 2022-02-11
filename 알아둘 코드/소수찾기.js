// 방법1
function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0)   //이 부분에서 num이 다른 수로 나눠떨어진다면 소수가 아님
          return false;
    }
   return num > 1;
}

// 방법 2
function isPrime(num) {
    if(num <= 1)    // 음수와 1은 소수가 아니다
      return false;
    
    if(num % 2 === 0)  // 2는 짝수 중 유일한 소수이다
      return num === 2 ? true : false;
    
    // 이제 num이 홀수 일때 다른 수에 나눠지는지 판별한다
    // Math.sqrt(num) 즉, √num까지 나눠 떨어지는지 검사한다
    const sqrt = parseInt(Math.sqrt(num));
    for(let i = 3; i <= sqrt; i += 2){
      if(num % i === 0)
        return false;
    }
    return true;
}