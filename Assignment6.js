var readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt('Enter the first number: ');
var secondNum = readlineSync.questionInt('Enter the second number: ');
var enteredOperator = readlineSync.question('Please enter the operation to perform: add, sub, mul, div: ');

function add(num1, num2){
    return (num1 + num2);
}
function sub(num1, num2){
    return (num1 - num2);
}
function mul(num1, num2){
    return (num1 * num2);
}
function div(num1, num2){
    return (num1 / num2);
}


function calculator(number1, number2, operator){
    if (operator == 'add'){
        console.log('Adding first number: ' + number1 + " with second number: " + number2 + " results in: " + add(number1, number2));
    }
    else if (operator == 'sub'){
        console.log('Subtracting first number: ' + number1 + " from second number: " + number2 + " results in: " + sub(number1, number2));
    }
    else if (operator == 'mul'){
        console.log('Multiplying first number: ' + number1 + " with second number: " + number2 + " results in: " + mul(number1, number2));
    }
    else if (operator == 'div'){
        console.log('Dividing first number: ' + number1 + " and second number: " + number2 + " results in: " + div(number1, number2));
    }   
    else
        console.log('Invalid operation')
}

calculator(firstNum, secondNum, enteredOperator);