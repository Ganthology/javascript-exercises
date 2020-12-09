const caesar = function(string, shift) {
    // ASCII value
    // 65 - 90 uppercase letters
    // 97 - 122 lowercase letters

    // regex code
    // \d digit from 0-9
    // \w any letter, digit and underscore character
    // \w{5} matches any five letter word, five digit number
    // \s white space char, space, tab, newline
    // \ escapes a special character
    // [x-y] range from [A-Z] + x to y
    return string
        .split("") // split into array of char
        .map(char => shiftChar(char, shift)) // apply function to each char
        .join(""); // join back to string
};

// function to get baseline depends on the case of the letters
const baseline = charCode => (charCode < 97 ? 65 : 97);

// this function is just a fancy way of doing % so that it works with negative numbers
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
// the returned value wont be larger than m - 1
// so if m is 26, the add range will always be 0 ~ 25
const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    // the range are for capital letters and lowercase letters
    if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            mod(code + shift - baseline(code), 26) + baseline(code)
        );
    }
    return char;
};

module.exports = caesar
