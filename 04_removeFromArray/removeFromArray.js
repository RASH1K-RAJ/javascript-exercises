const removeFromArray = function() {
    for (let j = 1; j< arguments.length; j++){
        for(let i = 0; i < arguments[0].length; i ++){
            if(arguments[j] === arguments[0][i]){
                arguments[0].splice(i, 1);
            }
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
