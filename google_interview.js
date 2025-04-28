/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
For Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
Given nums = [2, 2, 3], target = 6,
Return [].
*/

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

const nums = [2, 7, 11, 15];
console.log(findSum(nums, 9));
