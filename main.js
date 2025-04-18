// Single line comments start with //
/* Multi-line comments start with /* and end with */
/* some keywords used in javascript: break, case, catch, class, const, continue, debugger, default, delete, do, else, enum (in TypeScript), eval, export, extends, finally, for, function,
goto (not used in JavaScript, but reserved), if, import, in, instanceof, let, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield (used with generators) */

// In javascript we use the semicolon ";" to indicate the end of a line
alert("end of line");
//JavaScript has an automatic semicolon insertion (ASI) feature that can sometimes make semicolons optional.
var a = 10
var b = 20
console.log(a + b)
// Despite this, it's generally a best practice to explicitly use semicolons to avoid unexpected behavior and make the code clearer.
var c = 5
var d = 8
var result = 
  c + d
  console.log(result)  // JS assumes this is a continuation of the previous line and it gives "Error: Unexpected console.log"

var c = 5
var d = 8
var result = 
  c + d;
  console.log(result)

return
{
  name: 'Alice'
} // Without semicolon, JavaScript inserts a semicolon after `return` and the block is not returned.

return 
{
  name: 'wonderland'
};

/* to create variables we use the keyword "var". var is legacy from older versions of JavaScript and has some quirky behavior that can lead to bugs (such as its function-scoping and hoisting behavior).
While var is still supported, it’s best to avoid using it in modern JavaScript. Use let or const for better scoping and less error-prone code.*/
var k = "apple";
var MyAge = 30;
var Email = 'mail' + '@mymail.com';
Email += "mx"
alert(Email)
var 1234 = 999+1
var days = 7;
var hours = 24;
var minutes = 60;
var seconds =60;
var week_seconds = days * hours * minutes * seconds;
alert(week_seconds);
/* var: Variables declared with var are function-scoped. This means that if var is used inside a function, it’s only accessible within that function.
If used outside of a function, it's globally scoped. Variables declared with let are block-scoped.
This means they are only accessible within the block (e.g., within loops, conditionals, or functions) in which they’re defined.*/
if (true) {
    var x = 10;
    let y = 20;
}
console.log(x); // 10 (because x is function or global scoped)
console.log(y); // ReferenceError: y is not defined (because y is block scoped)

/* "const" in JavaScript is used to declare variables whose values are immutable (cannot be reassigned) after the initial assignment.
Just like let, variables declared with const are block-scoped. This means that the variable is only accessible within the block (or statement) where it is defined.*/
if (true) {
    const x = 10;
}
console.log(x); // ReferenceError: x is not defined

//  A const variable must be initialized at the time of declaration. You cannot declare a const variable without assigning a value.
const y; // SyntaxError: Missing initializer in const declaration
// A let variable can be declared without assigning a value
let sasha;
sasha = "puppy";
let myth;
console.log(myth);
myth = "sup";
console.log(myth);

/* const ensures that the binding (reference) to the variable cannot be changed once it’s been assigned. However, if the variable holds an object or an array,
the content of the object or array can still be modified. So, while you cannot reassign the object, you can modify its properties.*/
const x = 10;
x = 20; // TypeError: Assignment to constant variable.

const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed, we can mutate the object's properties
console.log(obj.name); // "Bob"

const numbers = [1, 2, 3];
numbers.push(4); // Allowed: mutating the array
console.log(numbers); // [1, 2, 3, 4]
numbers = [5, 6, 7]; // TypeError: Assignment to constant variable

/* var declarations are hoisted to the top of their scope and initialized with undefined. This means you can reference a var variable before its declaration,
but its value will be undefined until the assignment happens. let and const are also hoisted, but they don't get initialized until the code execution reaches the line of its declaration.
Accessing them before declaration results in a ReferenceError due to the "temporal dead zone."*/
console.log(a); // undefined (due to hoisting)
var a = 5;
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(x); // ReferenceError: Cannot access 'x' before initialization
const x = 10;

/* You can re-declare a variable within the same scope using var, and it won’t throw an error.
You cannot re-declare a variable within the same scope using let or const. Attempting to do so will result in a SyntaxError.*/
var a = 1;
var a = 2; // No problem, it's re-declared.

let b = 1;
let b = 2; // SyntaxError: Identifier 'b' has already been declared

const a = 10;
const a = 20; // SyntaxError: Identifier 'a' has already been declared

/* When you declare a variable with var in the global scope, it becomes a property of the global object (window in browsers).
A global let declaration does not attach to the global object.*/
var a = 1;
console.log(window.a); // 1
let b = 2;
console.log(window.b); // undefined

/* In modern JavaScript, the best practice is to use let and const over var. Use const by default for values that won’t change (such as constants or references that shouldn’t be reassigned).
const makes your code more predictable and ensures that the variable’s reference cannot be changed (although the object it points to can still be mutated)*/
const pi = 3.14;
const user = { name: "Alice" };
user.name = "Bob"; // allowed: mutating the object // user = {}; // TypeError: Assignment to constant variable.
/* For variables that might change their value during the execution of your code, use let. This is commonly used for counters, flags, and temporary variables within loops or conditionals.
This means we can't re-declare a "let" variable but we can reassign it.*/
let counter = 0;
counter++; // allowed: variable can be reassigned
let name = "Alice";
name = "Bob"; // allowed: reassignment
name = 23
name = true

// we can use strings, numbers and the "$" and "_" symbols, no other symbol is allowed
var $ = 49
var _ = 50
// we can also create variables without keyword
y = 10;
x = 20;
// we can create many variables in one line
var days=7, hours=24, minutes=60, seconds=60;
var days = 7; var hours = 24; var minutes = 60;

// we can't start a variable name with a number
var 1wrong = "wrong";
var right1 = 'right';

// Arithmetic operators
2 + 3;
2 - 3;
2 * 3;
2 / 3;
2 ** 3;
2 % 3;

//Assignment operators
y = x;
y += x;
y -= x;
y *= x;
y /= x;
y %= x;
y **= x;
// The ++ increment operator increases the value of a variable by one
var num1 = 5;
console.log(num1++); // The value of the variable is increased after the current operation.
console.log(num1);

var num2 = 10;
console.log(++num2); // The value of the variable is increased before the current operation.
console.log(num2);

// The -- decrement operator decreases the value of a variable by one.
var num3 = 20;
console.log(num3--); // The value of the variable is decreased after the current operation.
console.log(num3);

var num4 = 10;
console.log(--num4); // The value of the variable is decreased before the current operation.
console.log(num4);
// Comparison operators
2 != 1; // not equal
2 !== 1 // strict not equal
2 > 1; // greater than
2 >= 1; // greater or equal than
2 < 1; // less than
2 <= 1; // less or equal than

// the strict equality operator: It is used to compare two values both in terms of value and type. This means that for the comparison to return true, the values must be of the same type and have the same value. Unlike the == (loose equality) operator, === does not perform type coercion. This means that if the operands are of different types, the comparison will return false even if their values are loosely equal.
2 === 1;
console.log(5 === 5);       // true (same type and value)
console.log("hello" === "hello");  // true (same type and value)
console.log(5 === "5");  // false (different types: number vs. string)
console.log(true === 1); // false (different types: boolean vs. number)
// When comparing objects (arrays, objects, etc.), === checks if both operands reference the same object in memory, not if they are structurally identical.
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2);  // false (they are different objects in memory)
// == (loose equality): Compares values after type coercion.
2 == 1;
5 == "5" // returns true because JavaScript converts the string "5" to the number 5 before comparing.
console.log(0 == false);  // true (because 0 is loosely equal to false)
console.log(0 === false); // false (because 0 is a number and false is a boolean)
console.log(null == undefined); // true (they are considered loosely equal)
console.log(null === undefined); // false (different types: null vs undefined)

// logic operators
"milk" && "shake" // and
"lemon" || "lime" // or
! "vegetable" // not

// Data types in javascript

// Strings: are created by enclosing characters in single quotes ('), double quotes ("), or backticks (`)
let str1 = "Hello, World!";
let str2 = 'JavaScript';
let str3 = `Template literal`;
// String(): To explicitly convert any value to a string
let num = 123;
let str = String(num); // Converts number to string "123"
console.log(str); // "123"
// .toString(): Every JavaScript object can be converted to a string using this method
let num = 123;
let str = num.toString(); // Converts number to string "123"
console.log(str); // "123"

// Number: represents both integer and floating-point numbers. JavaScript has one type for numbers (there is no separate integer type).
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point number
let num3 = -100; // Negative number
//Number(): To convert a value to a number
let str = "123";
let num = Number(str); // Converts string to number 123
console.log(num); // 123
// parseInt(): To convert a string to an integer
let str = "123px";
let num = parseInt(str); // Converts string to integer 123
console.log(num); // 123
// parseFloat(): To convert a string to a floating-point number
let str = "123.45abc";
let num = parseFloat(str); // Converts string to floating-point number 123.45
console.log(num); // 123.45

// BigInt: allows for representing very large integers that exceed the limits of the Number type (which can safely represent integers only up to 2^53 - 1).
let bigInt1 = 1234567890123456789012345678901234567890n;  // The 'n' denotes a BigInt
// BigInt(): converts to a BigInt data type
let bigger = 4214321432421341234124321535324;
let biggerNumber = BigInt(bigger);
console.log(biggerNumber);

// Boolean: represents a logical value, either true or false
let isActive = true;
let isComplete = false;
// Boolean(): To convert any value to a boolean
let value = 1;
let boolValue = Boolean(value); // Converts to true
console.log(boolValue); // true

let emptyStr = "";
let boolValue2 = Boolean(emptyStr); // Converts to false
console.log(boolValue2); // false

// Undefined: A variable that is declared but not assigned a value is of type undefined. Also, the return value of functions that don’t explicitly return a value is undefined.
let x;
console.log(x);  // Outputs: undefined
var milk;
alert(milk);
milk = 'delicious';
alert(milk);
let guf = undefined;
console.log(guf);
guf = 45;
console.log(guf);

function test() {}
console.log(test());  // Outputs: undefined

// null: represents the intentional absence of any object value. It is a special value that is explicitly assigned to a variable to represent "nothing" or "no value".
let person = null;
console.log(person);

// Symbol: is a unique and immutable value often used as an identifier for object properties. Each Symbol is guaranteed to be unique.
let sym1 = Symbol('same description');
let sym2 = Symbol('same description');
let sym3 = Symbol();
console.log(sym1 === sym2);  // Outputs: false
/* Symbols are typically used to create unique property keys in objects. This is especially useful when you want to avoid property name collisions
between different parts of a program, especially in larger codebases or when working with external libraries.*/
let sym5 = Symbol("id");
let obj = {
  [sym5]: 123
};
console.log(obj[sym5]); // Outputs: 123

// Object(): To explicitly convert a primitive value to an object
let str = "hello";
let obj = Object(str); // Converts string to an object
console.log(obj); // [String: 'hello']

// typeof operator: lets us know the data type of a variable
console.log(typeof str1);
console.log(typeof num2);
console.log(typeof isActive);

// Type Coercion (Implicit Casting)
// When using + with a string and another value
let num = 5;
let str = "The number is: ";
let result = str + num; // Implicitly converts the number to string
console.log(result); // "The number is: 5"
// Comparing values of different types
let num = 10;
let str = "10";
let result = num == str; // Coerces the string to a number
console.log(result); // true

// You can define a function using either a function declaration or a function expression
// function declaration
function myFunction(name) {
  console.log("Hello, " + name + "!");}
myFunction("ashley");

function cylinderAreaAndVolume(radius, height){
    const PI = 3.1416;
    let surfaceArea = 2 * PI * radius * (radius + height);
    let volume = PI * radius **2 * height;
    console.log("Cylinder surface area: " + surfaceArea + "\n" + "Cylinder volume: " + volume);}
cylinderAreaAndVolume(6, 13);
// function expression
const myFunction2 = function(name) {
  console.log("Hello, " + name + "!");};
myFunction2("pedro");
// Arrow Function (ES6+):
const myFunction3 = (name) => {
  console.log("Hello, " + name + "!");};
myFunction3("manuel");
// If the function body contains just one expression, you can omit the curly braces and return statement in an arrow function
const myFunction4 = name => console.log("Hello, " + name + "!");
myFunction4("carolina");

// In JavaScript, the preferred naming convention for variables and functions is camelCase. This means the first word is lowercase, and each subsequent word starts with an uppercase letter, without any spaces or underscores
let myVariableName = 10; // camelCase for variables, functions, and method names.
function calculateTotalPrice() {
  alert("price");}

const MAX_SIZE = 100; // UPPER_SNAKE_CASE (all uppercase letters with underscores between words) is used for constants that don't change.
class UserProfile { // PascalCase (which is like camelCase but starts with an uppercase letter) is often used for class names and constructors.
  constructor(name) {
    this.userName = name;
  }
}

// if keyword: Parentheses () are required around the condition. {} Curly braces define the code block that will be executed if the condition is true. They are highly recommended, even for single-line statements (to prevent errors and improve readability).
/* Truthy and Falsy Values: In JavaScript, values other than true or false can also be evaluated in a conditional. These are called "truthy" and "falsy" values.
Falsy values include false, 0, null, undefined, NaN, and an empty string ("").All other values are truthy.*/
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}

let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive.");
}
// else keyword: This provides an alternative block of code to execute when the if condition is false.
let temperature = 15;
if (temperature > 20) {
  console.log("It's warm!");
} else {
  console.log("It's a bit chilly.");
}
// else if keyword: This lets you check multiple conditions in sequence. It's executed only if the preceding if or else if conditions are false.
let score = 75;

if (score >= 90) {
  console.log("Excellent!");// Code to execute if condition1 is TRUE
} else if (score >= 80) {
  console.log("Good job!");// Code to execute if condition1 is FALSE and condition2 is TRUE
} else if (score >= 70) {
  console.log("Okay.");// Code to execute if condition1 and condition2 are FALSE, and condition3 is TRUE
} else {
  console.log("Needs improvement.");
}
// Ternary Operator "?" (A shorthand for simple if...else)
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome!" : "Please log in.";// condition ? expressionIfTrue : expressionIfFalse;
console.log(message); // Output: Welcome!
// its equivalent would be
let isLoggedIn = true;
let message;
if (isLoggedIn) {
  message = "Welcome!";
} else {
  message = "Please log in.";
}
console.log(message); // Output: Welcome!

//examples
function calculateTotal(pizza, couponNumber){
    let coupon
    let price
    if (couponNumber === 1){
        coupon = .10;
    } else if (couponNumber === 2){
        coupon = .20;
    } else {
        coupon = 0;
    }
    if (pizza === "pepperoni"){
        price = 15;
    } else if (pizza === "margherita"){
        price = 20;
    } else {
        price = 25;
    }
    let discount = price * coupon;
    let total = price - discount;
    console.log("Your order is a " + pizza + " pizza and you have a discount of $" + discount + "\n Total: $" + total);
}
calculateTotal("pepperoni", 2);

function calcularTotal(pizza, cupon) {
  // Definir precios de pizzas
  const precios = {
    "pepperoni": 15,
    "margarita": 20,
    "hawaiana": 25
  };
  // Verificar si la pizza es válida
  if (!(pizza in precios)) {
    return "Pizza no válida.";
  }
  // Obtener precio de la pizza
  let precio = precios[pizza];
  // Calcular descuento según el cupón
  let descuento = 0;
  if (cupon === 1) {
    descuento = 0.10;
  } else if (cupon === 2) {
    descuento = 0.20;
  }
  // Calcular precio final
  let precioFinal = precio * (1 - descuento);
  // Crear mensaje de salida
  let mensaje = `Su orden es una pizza ${pizza} con un precio de $${precio.toFixed(2)}.`;
  if (descuento > 0) {
    mensaje += `\nHa recibido un descuento del ${descuento * 100}%.`;
  } else {
    mensaje += "\nNo ha utilizado ningún cupón de descuento.";
  }
  mensaje += `\nEl precio final es de $${precioFinal.toFixed(2)}.`;
  return mensaje;
}
console.log(calcularTotal("pepperoni", 1));
console.log(calcularTotal("margarita", 2));
console.log(calcularTotal("hawaiana", 0));
console.log(calcularTotal("vegetariana", 1)); // Pizza no válida

// The prompt() function: displays a dialog box that prompts the user for input. It's simpler than forms but less flexible.
let name = prompt("Please enter your name:");
let age = prompt("enter your age:", "100");// it can take an optional default value
if (name !== null) { // Check if the user clicked "Cancel"
  console.log("Hello, " + name + "!" + "your age is" + age);
} else {
  console.log("User cancelled the prompt.");
}

// for loop: is used when you know in advance how many times you want to execute a statement or a block of statements.
// for (initialization; condition; increment/decrement) {Code to execute}
for (let i = 0; i < 5; i++) {
    console.log(i); // Prints 0, 1, 2, 3, 4
}

let summation = 0;
let total = 0;
for (let number = 1; total <= 100; number ++){
    summation += number;
    total += summation;
    if (total <= 100){
        console.log("iteration" + number + ": " + summation + " total: " + total);}}

// for...of loop: is used to iterate over the values of iterable objects like arrays, strings, etc.
// for (let value of iterable) {Code to execute}
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number); // Prints 1, 2, 3, 4, 5
}
// for...in loop: is used to iterate over the keys (or properties) of an object.
// for (let key in object) {Code to execute}
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key, person[key]); // Prints name John, age 30, city New York
}
// while loop runs as long as a specified condition evaluates to true.
// while (condition) {Code to execute}
let i = 0;
while (i < 5) {
    console.log(i); // Prints 0, 1, 2, 3, 4
    i++;
}

summation = 0;
total = 0;
let number = 1;
while (total <= 100){
    summation += number;
    total += summation;
    number ++;
    if (total <= 100){
        console.log("iteration" + number + ": " + summation + " total: " + total);}}
// do...while loop: is similar to the while loop, but it guarantees that the block of code will execute at least once, even if the condition is false initially.
// do {Code to execute} while (condition);
let i = 0;
do {
    console.log(i); // Prints 0, 1, 2, 3, 4
    i++;
} while (i < 5);

/* array: is a special type of object used to store multiple values or objects in a single variable.
Indexed: Arrays are ordered collections, meaning each element has an index starting from 0.
Mutable: You can modify the contents of an array after it is created.
Flexible: Arrays can store values of any data type (numbers, strings, objects, etc.),
and even other arrays (creating multidimensional arrays).*/

//You can create arrays using Array Literal (Recommended)
let fruits = ["apple", "banana", "cherry"];

// Or using the `Array` Constructor
let fruits1 = new Array("apple", "banana", "cherry");

// You access array elements using their index, where the index starts from `0` for the first element
console.log(fruits[0]);  // Output: "apple"
console.log(fruits[2]);  // Output: "cherry"

// The `length` property returns the number of elements in the array
console.log(fruits.length);  // Output: 3

indexNum = 0;
while (indexNum < fruits.length){
    console.log("The value is: " + fruits[indexNum]);
    indexNum++;}

let myNumbers = [500,500,500,500,500];
let total = 0;
for (let koala = 0; koala < myNumbers.length; koala++){
    total += myNumbers[koala];}
console.log("total is: " + total);

// You can change an array element by assigning a new value to a specific index
fruits[1] = "orange";  // Modifies the second element
console.log(fruits);  // Output: ["apple", "orange", "cherry"]

// push(): Adds an element to the end of an array.
fruits.push("grape");  // Adds "grape" to the end

// pop(): Removes the last element from the array.
fruits.pop();  // Removes "grape"

// shift(): Removes the first element from the array.
fruits.shift();  // Removes "apple"

// unshift(): Adds an element to the beginning of the array.
fruits.unshift("mango");  // Adds "mango" to the start

// slice(): Returns a shallow copy of a portion of the array.
let slicedFruits = fruits.slice(1, 3);  // Returns elements at index 1 and 2

// splice(): Adds/removes elements from any position in the array.
fruits.splice(1, 1, "pear");  // Removes 1 element at index 1 and adds "pear"

// forEach(): Executes a provided function once for each array element.
fruits.forEach(function(fruit){
  console.log(fruit);});

// map(): Transforms an array by applying a function to each element.
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());

/// filter(): Filters elements based on a condition.
let longFruits = fruits.filter(fruit => fruit.length > 5);

// find(): Returns the first element that passes a test.
let foundFruit = fruits.find(fruit => fruit === "banana");

// reduce(): Reduces the array to a single value based on a function.
let sum = [1, 2, 3, 4].reduce((acc, current) => acc + current, 0);
console.log(sum);  // Output: 10

// indexOf(): Returns the first index of the value, or -1 if not found.
let index = fruits.indexOf("banana");
let myArray = [101,102,103,104,105,106];
console.log(myArray.indexOf(103, 3));  // Start searching from index 3, Outputs -1 (since 103 is before index 3)

for (let number of myArray){
    console.log("the element of index "+ myArray.indexOf(number) + " is " + number + " and its final value is " + (number+5));}

// sort(): orders the array
console.log(myArray.sort());

// reverse(): inverts the order of the array
console.log(myArray.reverse());

// Arrays can contain other arrays, allowing for the creation of multidimensional arrays (like matrices).
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];
console.log(matrix[1][2]);  // Output: 6

// https://www.w3schools.com/jsref/jsref_obj_array.asp
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
