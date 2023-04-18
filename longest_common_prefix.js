// find longest prefix

// brute force
var longestCommonPrefix = function (strs) {
    // check if argument is not list: return ""
    if (!Array.isArray(strs) ) {
        return ""
    }
    output = ""
    // we loop through the first object 
    for (i = 0; i < strs[0].length; i++) {
        // we loop through all object
        for (j = 1; j < strs.length; j++) {
            // we check if current index of first object
            if (strs[0][i] !== strs[j][i]) {
                console.log(output)
                return output
            }
        }
        // if it get's here add currentIndex to output
        output = output + strs[0][i];
    }
    console.log(output)
    return output
};

longestCommonPrefix(["flower","flow","flight"])
longestCommonPrefix(["dog","racecar","car"])
