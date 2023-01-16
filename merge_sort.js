// 

function mergeSort(array){
    if (array.length === 1){
        return array
    }
    // split Array into right and left
    const length = array.length;
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right){
    //
}

const answer = mergeSort(numbers);
