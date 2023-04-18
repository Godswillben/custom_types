// valid parentheses
// brute force approach
// var isValid = function (s) {
//     // checks if not string
//     if (typeof s !== "string") {
//         return "Argument(s) can only be string"
//     }
//     // parentheses = { "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", }
//     parentheses = { ")": "(", "]": "[", "}": "{", }
//     // we loop through s
//     for (i = 0; i < s.length; i++) {
//         // we get current index and currentIndex + 1
//         if (s[i] === parentheses[s[i+1]]) {
//             // if s currentIndex is equal to object of currentIndex value return true
//             console.log(true)
//             return true
//         }
//     }
//     // if loop get's here then no matching parentheses return false
//     console.log(false)
//     return false
// };

// isValid("()")
// isValid("(]")
// isValid("()[]{}")

// leet anser
var isValid = function (s) {
    const parentheses = { ")": "(", "]": "[", "}": "{" }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (parentheses[s[i]]) {
            if (stack.length === 0 || stack.pop() !== parentheses[s[i]]) {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }
    console.log(stack.length === 0)
    return stack.length === 0
};

isValid("()")
isValid("(]")
isValid("()[]{}")
isValid("(){}}{")
