/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
For Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
Given nums = [2, 2, 3], target = 6,
Return [].
*/

// sorted
function findSum(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const total = arr[left] + arr[right];
    if (total === target) {
      return [arr[left], arr[right]];
    } else if (total > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}

// Not sorted
function findSum2(array, target) {
  // make a set to save compliment of numbers
  const compliments = new Set();
  // loop through the array, subtract curr number from target and check if it's in hash return true
  // add the curr number to set
  for (let i = 0; i < array.length; i++) {
    const compliment = target - array[i];
    if (compliments.has(compliment)) {
      return [compliment, array[i]];
    }
    compliments.add(array[i]);
  }
  // return false if no compliment is found at the end of loop
  return [];
}

console.log(findSum2([2, 7, 11, 15, 6, 8], 12));
