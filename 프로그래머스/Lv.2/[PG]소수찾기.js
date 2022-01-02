function solution(numbers) {
    let arr = numbers.split('');
    let numSet = new Set();
    let answer = 0;
    for(let i=1; i<=arr.length; i++){
        const num = getPermutations(arr, i).map((v)=>Number(v.join('')));
        num.forEach((n)=>numSet.add(n))
    }
    numSet.forEach((n)=>answer+=isPrime(n))

    function getPermutations(arr, n){
        const results = [];
        if (n === 1) return arr.map((el) => [el]);
        
        arr.forEach((fixed, index, origin) => {
          const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
          const permutations = getPermutations(rest, n - 1);
          const attached = permutations.map((el) => [fixed, ...el]);
          results.push(...attached);
        });
    
        return results;
    }

    function isPrime(num){
        if(num <= 1)
          return 0;
        
        if(num % 2 === 0)
          return num === 2 ? 1 : 0;
    
        const sqrt = parseInt(Math.sqrt(num));
        for(let i = 3; i <= sqrt; i += 2){
          if(num % i === 0)
            return 0;
        }
        return 1;
    }
    return answer;
}