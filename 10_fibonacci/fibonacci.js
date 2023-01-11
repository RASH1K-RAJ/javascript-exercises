const fibonacci = function(count) {
    count = parseInt(count);
    if(count<1) return 'OOPS';
    if(count == 0) return 0;

    let a = 0;
    let b = 1;

    for(let i = 0; i< count; i++){
        const temp = b;
        b = b + a;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
