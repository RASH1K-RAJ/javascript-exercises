const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, item) => total+= item, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total *= item, 1);
};

const power = function(n, pow){
  if(pow == 0) return 1;
  let prod = n;
	for(let i=0; i<pow -1; i++){
    n*=prod;
  }
  return n;
};

const factorial = function(n) {
	if(n=== 0 || n===1) return 1;
  let factorial = 1;
  while(n > 0){
    factorial *= n;
    n -= 1;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
