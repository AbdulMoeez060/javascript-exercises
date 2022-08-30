const reverseString = function(str) {
    words = str.split('')
    str = ''
    for (let i = words.length-1; i >= 0; i--) {
        str = str.concat(words[i]);
        
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
