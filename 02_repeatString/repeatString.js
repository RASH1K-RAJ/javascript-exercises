const repeatString = function(word='', no=0) {
    let result = "";
    if(no<0) return "ERROR";
    for (let i = 1; i <= no; i++){
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
