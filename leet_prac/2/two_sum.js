/** Question
 * Provide a list of integers return indices that
 * sums up to target
 */

/** Verify Constraints
 * Are all numbers going to be positive
 * -> Yes all numbers are positive no negative numbers
 * Are there going to be duplicates do we account for duplicates 
 * that might add up to the targets, depending on the target
 * -> No, there are no duplicates
 * Will there always be soultion... would two values always add up to the
 * Target
 * -> No, there may not always be a solution
 * What do we return if there is no solution
 * -> We return Null
 * Can there be multiple pair that sum up to the target?
 * -> No, only 1 pair of numbers will add up to the target
 */

/** Test Cases
 * [1,3,7,9,2]  t=11    [3,4]
 * [1,3,7,9,2]  t=25    null
 * []   t=1     null
 * [5]  t=5     null
 * [1,6]  t=7     [0,1]
 */

/** Try To Come up with solution without thinking about */

/** Brute Force Solution */

const  findTwoSum = function (nums, target){
    for (let p1=0; p1 < nums.length; p1++){
        const numberToFind = target - nums[p1]
        for (p2=p1 + 1; p2<nums.length; p2++){
            if(numberToFind === nums[p2]){
                return [p1, p2]
            }
        }
    }
    return null;
}

/** Double check for errors */
/** Can our code be optimized the one with less resources can
 *  be scraficed for a much better solution */


/** OPtimal solution */
/** OPtimal solution */
/** OPtimal solution */

const findTwoSumO= function (nums, target){
    const numsMap = {};
    for(let p=0; p < nums.length; p++){
        const currentMapVal = numsMap[p]
        if(currentMapVal >=0){
            return [currentMapVal, p]
        }else{
            const numberToFind = target - nums[p]
            numsMap[numberToFind] = p
        }
    }
}
