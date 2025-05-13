/*
 Example: input = [0,8,0,12,3]
          output = [8,12,3,0,0]
*/


// function moveZeros(array) {
//     const result = []
//     let increment = 0;
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] !== 0) {
//             result.push(array[i])
//             increment++
//         }
//     }

//     for(let j = increment; j < array.length; j++) {
//         result.push(0)
//     }, 

//     return result
// }

function moveZeros(array) {
    let left = 0;
    for(let right = 0; right < array.length; right++) {
        if(array[right] !== 0) {
            [array[right], array[left]] = [array[left], array[right]]
            left++
        }
    }
    return array
}

console.log(moveZeros([0,8,0,12,3]))

