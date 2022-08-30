const repeatString = function(str,num) {
    var repeat=''
    
    for (let i = 0; i < num; i++) {
        repeat = repeat.concat(str);
        
    }
    return repeat;
};
repeatString('hey',2)

// Do not edit below this line
module.exports = repeatString;
