const sumAll = function(a, b) {
    if (a < 0 || b < 0) return 'ERROR';
    if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR';
    let sum = 0;
    const start = a < b ? a : b;
    const end = a > b ? a : b;
    for(let i = start; i <= end; i++) {
        sum+= i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;