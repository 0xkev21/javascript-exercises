const findTheOldest = function(arr) {
    let oldestAge = 0;
    return arr.reduce((acc, item) => {
        const age = (item.yearOfDeath || (new Date).getFullYear()) - item.yearOfBirth;
        if(age > oldestAge) {
            oldestAge = age;
            return item;
        }
        return acc;
    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
