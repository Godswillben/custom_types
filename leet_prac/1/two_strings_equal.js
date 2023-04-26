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


/**
 * 
 */
