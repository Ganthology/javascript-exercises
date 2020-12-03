const reverseString = function(string) {
    // Split the string to array
    let letters = string.split("");
    let length = letters.length;
    // Let a new variable
    let newString = [];
    // Use for loop to reverse
    for (let i = 0; i < length; i++) {
        newString[i] = letters[length - 1 - i];
    }
    return newString.join("");
}

module.exports = reverseString
