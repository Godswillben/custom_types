/* 
    Question
    give a list of integers returns indecies of values that
    add up to target
*/

// figure out the edge cases
/*
 no two value can return target
 an empty list or list with only one value returns null
*/

/* 
    Test Case
    [1, 3, 7, 9, 2];   t=11;    result=[3,4]
    [1, 3, 7, 9, 2];   t=25;    result=null
    [];   t=1;    result=null
    [5];   t=5;    result=null
    [1,6];   t=7;    result=[0,1]
*/

/** 
 * Come up with a solution logically without
 * thinking of the code
 * */ 

const findTwoSum = function(nums, target){
    for(let p1=0; p1 < nums.length; p1++){
        const numberToFind = target - p1;
        for(p2=p1+1; p2<nums.length; p2++){
            if(numberToFind === nums[p2]){
                return [p1, p2]
            }
        }
    }
    return null
}

/**
 * check for typo or mistke in code
 */

/**
 * Check if solution is optimal or if a more optimal soultion
 * can be gotten
 * [1, 3, 7, 9, 2]; 
 */

// comments on code one 
// comments on code two


const findTwoSumO= function(nums, target){
    // value checks
    // 
    if (nums.length < 2){
        return null
    }
    const numsMap = {};
    for(let p=0; p<nums.length; p++){
        const currentMapVal = numsMap[nums[p]]
        if(currentMapVal >= 0){
            return [currentMapVal, p]
        }else{
            const numberToFind = target - nums[p];
            numsMap[numberToFind] = p;
        }
    }
    return null;
}

