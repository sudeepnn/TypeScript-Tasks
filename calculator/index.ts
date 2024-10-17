type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

function calculate(operation: Operation, ...numbers: number[]): number | string {
    switch (operation) {
        case 'add':
            return numbers.reduce((acc, curr) => acc + curr, 0);
        case 'subtract':
            return numbers.reduce((acc, curr) => acc - curr);
        case 'multiply':
            return numbers.reduce((acc, curr) => acc * curr, 1);
        case 'divide':
            if (numbers.includes(0) && numbers.length > 1) {
                return 'Error: Division by zero';
            }
            return numbers.reduce((acc, curr) => {
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
