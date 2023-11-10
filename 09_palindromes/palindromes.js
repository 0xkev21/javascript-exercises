const palindromes = function (str) {
    const newStr = str.split('').filter(l => (/[a-zA-Z0-9]+/).test(l)).join('').toLowerCase();
    return newStr === newStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;