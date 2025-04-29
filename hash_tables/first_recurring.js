// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

function firstRecurring(array) {
  // check to see if input is not an array or it's empty return undefined
  if (!Array.isArray(array) || array.length < 1) {
    return undefined;
  }
  // save looped numbers inside a hash
  const hashMap = {}
  // looping, i will check to see if number already in hash, then return that number
  for(let i = 0; i < array.length; i++) {
    if(hashMap[array[i]]) {
        return array[i]
    }
    hashMap[array[i]] = true
  }
  // if no number found then return undefined
  return undefined
}

console.log(firstRecurring());