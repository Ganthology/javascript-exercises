const palindromes = function(string) {
    // \W match any non-word character [^a-zA-Z0-9_]
    // The regex will keep the string only letters and numbers
    // The letters are toLowerCase() for the ease of comparison
    string = string.replace(/[\W_]/g,"").toLowerCase(); 
    // The string are split into array of chars
    let splitStr = string.split("");
    // The array of chars are reversed then joined again to string
    let palindrome = splitStr.reverse().join("");
    // Compare the input and reversed string
    return (string === palindrome);
}

module.exports = palindromes
