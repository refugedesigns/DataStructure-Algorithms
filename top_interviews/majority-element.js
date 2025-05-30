/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

// function majorityElement(array) {
//    const hash = {}
//    const majorityCount = Math.floor(array.length / 2)
//    for(const num of array) {
//      hash[num] = (hash[num] || 0) + 1

//      if(hash[num] > majorityCount) {
//         return num
//      }
//    }
// }

// Boyer More Agorithm
function majorityElement(array) {
    let count = 0;
    let candidate = null
    for(const num of array) {
        if(count === 0) {
            candidate = num
        }
        count += (num === candidate) ? 1 : -1
    }
    return candidate
}

console.log(majorityElement([2,2,1,1,1,2,2]))