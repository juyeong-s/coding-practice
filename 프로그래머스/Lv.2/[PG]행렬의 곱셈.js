function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((_, i) => row.reduce((acc, curr, j) => acc + (curr * arr2[j][i]), 0)));
}