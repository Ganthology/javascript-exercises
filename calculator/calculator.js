function add (number1, number2) {
	return number1 + number2;
}

function subtract (number1, number2) {
	return number1 - number2;
}

function sum (array) {
	return array.reduce((accumulator, item)=>{
		return accumulator += item;
	}, 0);
}

function multiply (array) {
	return array.reduce((accumulator, item)=>{
		return accumulator *= item;
	}, 1);
}

function power(number, power) {
	return number**power;
}

function factorial(number) {
	if(number == 0) return 1;
	const range = (number1, number2) => Array.from({length: Math.abs(number1 - number2) + 1},(_,i) => (Math.min(number1,number2) + i));
    let array = range(1, number);
    return array.reduce((accumulator, array) => accumulator * array, 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}