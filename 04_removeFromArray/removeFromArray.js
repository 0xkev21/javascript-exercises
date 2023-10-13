const removeFromArray = function(arr, ...values) {
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === values[i]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;