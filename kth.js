const quickSelect = function (array, left, right){
    if (left < right){
        const partitionIdx = partion(array, left, right)
        quickSelect(array, left, partitionIdx - 1)
        quickSelect(array, partitionIdx + 1, right)
    }
}

const partition = function(array, left, right){
    const pivotElement = array[right]
    let partitionIdx = left;
    for(let j = left; j<right; j++){
        if(array[j]<pivotElement){
            swap(array, partitionIdx, j);
            partitionIdx++;
        }
    }
    swap(array, partitionIdx, right);
    return partitionIdx;
}

const swap = function(array, i, j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const getKthLargest = function(array, k){
    const indexToFind = array.length - k
    quickSelect(array, 0, array.length)
    return array[indexToFind];
}
