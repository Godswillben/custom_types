/**
 * Given a string containing only  parenthesis, determine if it is valid
 * The string is valid of the parentheses close.
 */

/**
 * Confirm our Constraint
 * Is an empty string counted as valid
 */

/**
 * Write out Test Cases
 * ""   -> True
 * "{([])}" -> True
 * "{([]"   -> false
 * "{[(])}" -> false
 */

const Parens = {
    '(':')',
    '[':']',
    '{': '}'
}

const isValidParentheses = function(s){
    if(s.length === 0) return true;
    const stack = [];
    for (let i=0; i<s.length; i++){
        if(params[s[i]]){
            stack.push(s[i]);
        }else{
            const leftBracket = stack.pop()
            const correctBracket = Parens[leftBracket]
            if(s[i] !== correctBracket) return false;
        }
    }
    return stack.length === 0;
}
