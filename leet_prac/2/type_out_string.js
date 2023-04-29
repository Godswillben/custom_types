/** Question
 * 
 */

/** Verfy Constraints
 * What happens when we get two #'s
 * -> Delete the two val before the first
 * What happens to # when their is no character to delete
 * -> It deletes nothing then, just like backsapce would
 * Are two empty string equal
 * -> Yes, consider two empty strings as equal
 * Does cases sensitivity mater
 * Yes it does
 */

/** List test cases
 * "ab#z" "az#z" true
 * "abc##d" "acc#c"
 */

const buildString = function (string){
    const builtArray = [];
    for(let p=0; p<string.length; p++){
        if(string[p] !== "#"){
            builtArray.push(string[p])
        }else{
            builtArray.pop()
        }
    }
    return builtArray;
}

const backSpaceCompare = function(S, T){
    const finalS = buildString(S);
    const finalT = buildString(T)

    if(finalS.length !== finalT.length){
        return false;
    }else{
        for(let p=0; p< finalS.length; p++){
            if(finalS[p] !== finalT[p]){
                return false
            }
        }
    }
    return true
}

const backSpaceCompareO = function(S, T){
    let p1 = S.length-1, p2=T.length-1;
    while(p1 >= 0 || p2 >=0){
        if(S[p1]==="#" || T[p2] === "#"){
            if (S[p1] === "#"){
                let backCount = 2;
                while(backCount > 0){
                    p1--
                    backCount--
                    if (S[p1]==="#"){
                        backCount += 2
                    }
                }
            }
            if (T[p2] === "#"){
                let backCount = 2;
                while(backCount > 0){
                    p2--
                    backCount--
                    if (T[p2]==="#"){
                        backCount += 2
                    }
                }
            }
        }else{
            if(S[p1] !== T[p2]){
                return false;
            }else{
                p1--;
                p2--;
            }
        }
    }
    return true
}