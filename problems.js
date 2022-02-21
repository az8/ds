/* 1 | Two Sum | Easy
 
Return indices of 2 numbers from array adding to given sum.
 
console.log(twoSum([2, 7, 11, 15],9)); // [ 0, 1 ] */
 
// A-I
 
let twoSum = (arr, sum) => {
    const seen = {};
 
    for (let i = 0; i < arr.length; i++) {
      const number = arr[i];
      if (seen[sum - number] !== undefined) {
        return [seen[sum - number], i];
      }
      seen[number] = i;
    }
  };
 
// console.log(twoSum([2,8,3,7],9)); // [ 0, 3 ]
 
// A-II
 
let twoSum2 = function(nums, target) {
  const seenNums = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (seenNums.has(target - num)) {
      return [nums.indexOf(target - num), i]
    }
    seenNums.add(num);
  }
};
 
// console.log(twoSum2([2,8,3,7],9)); // [ 0, 3 ]
