// return ture if parameter passed to function is palidrone
// if x is 121 return true cause 121 backwards is same thing
// if x is -121 return false cause -121 is not same thing

var isPalindrome = function(x) {
    // checks to see if value of x is integer if not int return error TODO: 
    // may not mater if value of x is string or not

    // we convert value of x to string
    let xValue = String(x)
    // we store value of reversed x \
    let reversedX = "";
    // loop through xValue 
    for (let i=xValue.length-1; i >= 0; i--){
        reversedX = reversedX + xValue[i];
    }
    // we compare x to reversed if true return true if false return false
    if (xValue === reversedX){
        console.log(true)
        return true
    }else{
        console.log(false)
        return false
    }
};

isPalindrome(121)
isPalindrome(-121)
isPalindrome("sms")
isPalindrome(10.01)
