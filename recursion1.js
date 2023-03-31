function findFactorialRecursive(number){
    if (number === 2){
        return 2;
    }

    return number * findFactorialRecursive(number-1)
}

findFactorialRecursive(5)

// fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
function fibonacciRecusive(n){
    if(n < 2){
        return n
    }
    return fibonacciRecusive(n-1)  + fibonacciRecusive(n-2)
}

// sorting 