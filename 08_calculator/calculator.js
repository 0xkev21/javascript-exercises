const add = function(...args) {
  return args.reduce((a, b) => a + b, 0);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let f = 1;
	for(let i = a; i > 0; i--) {
    f *= i;
  }
  return f;
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
