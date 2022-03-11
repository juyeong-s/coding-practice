function solution(price, money, count) {
    let sum = price;
    for(let i = 2; i <= count; i++){
        sum += price * i;
    }
    return sum > money ? sum - money : 0;
}