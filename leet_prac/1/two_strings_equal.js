/**
 * Given two strings S and T, return if they equal, # represents backspace
 */

/**
 * VERIFY THE CONSTRAINTS
 * what happens when #'s are place next to each other 
 * -> They delete the two values before the first #
 * What happens to # when there is no character to remove
 * -> It delete nothing then, just like backspace would
 * Does case sensitivity matter
 * Yes it does, "a" does not equal A
 */

const buildString = function(string){
    const builtArray = [];
    for(let p=0; p<string; p++){
        if(string[p] !== "#"){
            builtArray.push(string[p]);
        }else {
            builtArray.pop()
        }
    }
    return builtArray;
}

const backSpaceCompare = function(s,t){
    const finalS = buildString(s);
    const finalT = buildString(t);
    if(finalS.length !== finalT.length){
        return false
    }else{
        for(let p=0; p< finalS.length; p++){
            if(finalS[p] !== finalT[p]){
                return false;
            }
        }
    }
    return true;
}



/**  
 * we create a variables that store counter of a and counter of b, and
 * similar character of string and b from the last
 * we create and infinity loop
 * check if a-counter or b counter is === 0
 * we return true if the items stored is greater than zero
 * 
 * then we check if last item of string A is not # 
 * we store last item then reduce a string counter by 1
 * else we move counter by one
 * if last item of string b is not a #
 * we check if last item stored is equal to the last item in string b
 * if the last item stored is equal to the last value of string b
 * we do nothing else we return false
 * if last item of b is # we reduce b counter by one
 * after checks we reduce b and a counter by one
 * 
*/

// my solution though wrong
// const backSpaceCompareO = function(s,t){
//     let sCounter = s.length - 1;
//     let tCounter = t.length - 1;
//     let similarString = [];
//     while(true){
//         if(sCounter < 0 && tCounter < 0){
//             return similarString.length === 0
//         }
//         if (s[sCounter] !== '#'){
//             console.log(s[sCounter])
//             similarString.push(s[sCounter])
//         sCounter--
//         }else {
//             sCounter=sCounter - 2
//         }
//         if(t[tCounter] !== "#"){
//             console.log(t[tCounter])
//             if (similarString[similarString.length -1] !== t[tCounter]){
//                 return false
//             }
//             tCounter--
//         }else {
//             tCounter = tCounter - 2
//         }

//         similarString.pop()
//     }
// }
const backSpaceCompareO = function(s,t){
    sPointer = s.length -1;
    tPointer = t.length -1;
    sHash = 0;
    tHash = 0;
    while(sPointer >= 0 || tPointer >= 0){
        if(s[sPointer] === "#" || t[tPointer] === "#"){
            if(s[sPointer] === "#"){
                let backCount =2;
                while(backCount > 0){
                    sPointer--;
                    backCount--;
                    if(s[sPointer] === "#"){
                        backCount += 2;
                    }
                }
            }
            if(t[tPointer] === "#"){
                let backCount =2;
                while(backCount > 0){
                    tPointer--;
                    backCount--;
                    if(t[tPointer] === "#"){
                        backCount += 2;
                    }
                }
            }
        }else{
            if(s[sPointer] !== t[tPointer]){
                return false
            }else {
                p1--;
                p2--;
            }
        }
    }
    return true
}

 
console.log(backSpaceCompareO("ab#c","az#c"))
console.log(backSpaceCompareO("abc#d","abzz##d"))
console.log(backSpaceCompareO("abc#d","abzz##d"))
console.log(backSpaceCompareO("abc#d","abzz##d"))

// 
// 
// return true or false
// if true we reduce counter of b by one

/**
 * can we optimize our solution;
 * Probably the space complexity
 */

