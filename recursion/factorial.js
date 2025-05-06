function factorialRecursive(num) {
    if(num === 1) {
        return 1
    }

    return num * factorialRecursive(num - 1)
}

function factorialIterative(num) {
    let factorial = 1
    for(let i = 1; i <= num; i++) {
        factorial *= i
    }
    console.log(factorial)
    return factorial
}

console.log(factorialRecursive(8))