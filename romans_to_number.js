var romanToInt = function(s) {
    // check if it's not string 
    if (typeof s !== "string"){
        return "Value can only be string"
    }
    // store romain numerals and value they represent 
    let romanValue = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    // variable to store converted numberals
    let numeralsToInt = 0
    // loop through value of s 
    for (i=0; i < s.length; i++){
        let indexValue = romanValue[s[i]]
        let indexNextValue = romanValue[s[i+1]]
        // check if current index value is less than currentIndex + 1
        if (indexValue < indexNextValue){
            numeralsToInt -= indexValue;
        }else{
            numeralsToInt += indexValue
        }
        // else we add current-index-value to converted numerals
    }
    // return converted numerals
    console.log(numeralsToInt)
    return numeralsToInt
};

romanToInt("III")
romanToInt("LVIII")
romanToInt("IV")
romanToInt("MCMXCIV")