const palindromes = function(string) {
    string = string.replace(/[\W_]/g,"").toLowerCase();
    let splitStr = string.split("");
    let palindrome = splitStr.reverse().join("");
    return (string === palindrome);
}

module.exports = palindromes
