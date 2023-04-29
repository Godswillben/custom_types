/** Question
 * Given a string containing only parenthesis, determine if it is valid.
 * The string is valid if all parentheses close.
 */

/** Verify Constraints
 * Does an empty count as valid
 * -> Yes an empty string count as valid
 */

/** Test Cases
 * "" -> True
 * "{([])}" -> True
 * "{([]"   ->  False
 * "{[(])}" -> False
 * "{[]()}" -> True
 */

/** Come up with a solution without thinking about the code */



const isValidParentheses = function(s){
    const parens = {
        "(" : ")",
        "[" : "]",
        "{" : "}",
    }
    if(s.length === 0) return true;
    const stack= [];
    for(let i=0; i<s.length;i++){
        if(parens[s[i]]){
            stack.push(s[i]);
        }else{
            const leftBracket = stack.pop()
            const correctBracket = parens[leftBracket]
            if(s[i] !== correctBracket) return false;
        }
    }
    return stack.length === 0;
}
