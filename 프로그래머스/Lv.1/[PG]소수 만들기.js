function getCombination(arr, n){
    const results = [];
    if (n === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = getCombination(rest, n - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });
    return results;
}

function isPrime(sum){
    if(sum % 2 === 0) return false;
    for(let i=2; i<sum; i++)
        if(sum % i === 0) return false;
    return true;
}

function solution(nums) {
    return getCombination(nums, 3).filter((arr)=>isPrime(arr.reduce((acc, curr)=>acc+curr, 0))).length;
}