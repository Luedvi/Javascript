function calculator(num1, num2, operator){
    if (operator === "+"){
        console.log(num1+num2);}
    else if (operator === "-"){
        console.log(num1-num2);}
    else if (operator === "*"){
        console.log(num1*num2);}
    else if (operator === "/"){
        console.log(num1/num2);}}

let calculatorOn = true;
while (calculatorOn){
    let userNum1 = Number(prompt("type the first number:"));
    let userOperator = prompt("choose operator (+, -, *, /):");
    let userNum2 = Number(prompt("type the second number:"));
    calculator(userNum1, userNum2, userOperator);
    if (prompt("Do you want to do another operation? Type y or n:") === "n"){
        calculatorOn = false;}}
