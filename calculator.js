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

let parkingLot = [];
parkingLot.push("Red", "gray", "blue", "yellow", "green");

// prints a list of the cars' color and spot
function parkingList(){
    for (let spot in parkingLot){
        console.log("the car is "+ parkingLot[spot] + " and has the spot " + spot);}
    console.log("there are " + parkingLot.length + " cars in total");}

parkingList();
parkingLot.push("white");
parkingList();
parkingLot[parkingLot.indexOf("blue")] = "black";
parkingLot.shift();
parkingList();
parkingLot.pop();
parkingList();
console.log("the yellow car is in the position " + parkingLot.indexOf("yellow"));

// searches for a specific car
function searchCar(userCar){
    let found = false;
    let carPosition;
    for (let spot in parkingLot){
        if (parkingLot[spot] === userCar){
            found = true;
            carPosition = spot;
            break;}}
    if (found){
        console.log("The " + userCar + " car was found in position " + carPosition);}
    else {
        console.log("The " + userCar + " car wasn't found");}}

searchCar("yellow");
searchCar("blue");
searchCar("green");
