const fibonacci = function(number) {
    // Unary + makes the input becomes number type
    number = +number;
    if (number <= 0) return "OOPS";
    else if (number == 1) return 1;
    else if (number == 2) return 1;
    else return fibonacci(number-1)+fibonacci(number-2);
}

module.exports = fibonacci
