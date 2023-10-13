const reverseString = function(str) {
    const arr = str.split('');
    const newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
        console.log(arr[i]);
    }
    return newArr.join('');
};

// Do not edit below this line
module.exports = reverseString;