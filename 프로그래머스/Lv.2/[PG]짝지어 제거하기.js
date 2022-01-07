function solution(s)
{
    if(s.length % 2 !== 0) return 0;
    const stack = [];
    const arr = [...s];

    for(let i = 0; i < arr.length; i++) {        
        if(arr[i] === stack[stack.length-1]) {
            stack.pop();
            continue;
        }
        stack.push(arr[i]);
    }
    return stack.length ? 0 : 1;
}