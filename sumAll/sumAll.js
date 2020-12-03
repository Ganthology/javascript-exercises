const sumAll = function(number1, number2) {
    // return ERROR if negative number
    if (number1 < 0 || number2 < 0) return 'ERROR';
    // return ERROR if the number types are not number
    if (typeof number1 != "number" || typeof number2 != "number") return 'ERROR';
    // Sum numbers within the range
    // By default will be smaller number to larger number
    const range = (number1, number2) => Array.from({length: Math.abs(number1 - number2) + 1},(_,i) => (Math.min(number1,number2) + i));
    let array = range(number1, number2);
    let total = array.reduce((accumulator, array) => accumulator + array, 0);
    return total;
}

module.exports = sumAll
