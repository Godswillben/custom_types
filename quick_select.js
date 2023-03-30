const quickSelect = function (array, left, right, indexToFind){
    if(left < right){
        const partitionIdx = partion(array, left, right)
        if(partitionIdx === indexToFind){
            return array[partitionIdx]
        }else if (indexToFind < partitionIdx){
            return quickSelect(array, left, partitionIdx - 1, indexToFind)
        }else{
            return quickSelect(array, left, partitionIdx - 1, indexToFind)
        }
    }
}

const partion = function(array, left, right){
    const pivotElement = array[right];
    let partitionIdx = left;
    for (let j=left; j<right; j++){
        if(array[j]<pivotElement){
            swap(array, partitionIdx, j);
            partitionIdx++;
        }
    }
    swap(array, partitionIdx, right)
    return partitionIdx;
}

const swap = function(array, i, j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const getKthLargest = function(array, k){
    const indexToFind = array.length - k;
    quickSelect(array, 0, array.length-1, indexToFind);
    return array[indexToFind];
}