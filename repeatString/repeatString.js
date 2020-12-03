const repeatString = function(string, repeat = Math.floor(Math.random() * 1000)) {
    // set default times to random
    let result = '';
    // return ERROR if repeat is negative
    if (repeat < 0) return 'ERROR';
    // use for loop to repeat
    for (let i = 0; i < repeat; i++) {
        result += string;
    }
    return result;
}

module.exports = repeatString
