
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]) {
                const temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array;
}


function selectionSort(array) {
    const length = array.length;
    for(let i = 0; i < length; i++) {
        let min = i 
        let temp = array[i]
        for(let j = i+1; j < length; j++) {
            if(array[j] < array[min]) {
                min = j 
            }
        }
        array[i] = array[min]
        array[min] = temp;
    }
    return array
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // Element to be inserted
    let j = i - 1; // Pointer to the sorted part (left of i)

    // Move elements of arr[0..i-1], that are greater than current,
    // one position to the right to make space for insertion
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Shift larger element to the right
      j--;
    }

    arr[j + 1] = current; // Insert the current element
  }

  return arr;
}

function merge(left, right) {
    const result = []
    let i = 0, j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i])
            i++
        }else {
            result.push(right[j])
            j++
        }
    }

    return result.concat(left.slice(i), right.slice(j))
}

function mergeSort(array) {
    if(array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}


function quickSort(array) {
    if(array.length <= 1) {
        return array
    }

    const pivot = array[array.length - 1]
    const right = []
    const left = []

    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] < pivot) {
            left.push(array[i])
        }else {
            right.push(array[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}


console.log(quickSort(numbers))