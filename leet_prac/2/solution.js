var solution = function (k){
    var sums = 0;

    for(let i = 0;i<k.length-2; i++){
        let sum = (k[k.length-1] * k[k.length-2]) - (k[i] * k[i+1]) ;
        if(sum >= sums){
            sums= sum
        }
    }

    return sums
    
}

console.log(solution([3,2,1,4,5,6]))