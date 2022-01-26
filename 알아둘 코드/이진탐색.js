function binarySearch(sortedArray, target) {
    let start = 0;
    let end = sortedArray.length - 1;
  
    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2);

      if (sortedArray[mid] === target)
        return mid;

      if (sortedArray[mid] < target)
        start = mid + 1;
      else
        end = mid - 1;
    }
  
    return -1;
}
  
const nums = [10, 40, 50, 30, 60, 70, 80, 90, 20];
const sortedNums = nums.sort();

console.log(binarySearch(sortedNums, 30));
// > 2

console.log(binarySearch(sortedNums, 100));
// > -1