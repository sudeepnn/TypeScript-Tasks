function calculate(operation) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    switch (operation) {
        case 'add':
            return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
        case 'subtract':
            return numbers.reduce(function (acc, curr) { return acc - curr; });
        case 'multiply':
            return numbers.reduce(function (acc, curr) { return acc * curr; }, 1);
        case 'divide':
            if (numbers.includes(0) && numbers.length > 1) {
                return 'Error: Division by zero';
            }
            return numbers.reduce(function (acc, curr) {
                if (curr === 0) {
                    throw new Error('Division by zero');
                }
                return acc / curr;
            });
        default:
            return 'Invalid operation';
    }
}
console.log(calculate('add', 1, 2, 3, 4));
console.log(calculate('subtract', 10, 5, 2));
console.log(calculate('multiply', 2, 3, 4));
console.log(calculate('divide', 20, 4, 5));
console.log(calculate('divide', 20, 0));
