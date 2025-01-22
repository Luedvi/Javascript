// Single line comments start with //
/* Multi-line comments start with /* and end with */
/* this is
a multiline comment*/

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

// to create variables we use the keyword "var"
var k = "apple";
var MyAge = 30;
var Email = 'mail@mymail.com';
var 1000 = 999+1
var days = 7;
var hours = 24;
var minutes = 60;
var seconds =60;
var week_seconds = days * hours * minutes * seconds;
alert(week_seconds);
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

// Data types in javascript

// Strings: are created by enclosing characters in single quotes ('), double quotes ("), or backticks (`)
let str1 = "Hello, World!";
let str2 = 'JavaScript';
let str3 = `Template literal`;
// Number: represents both integer and floating-point numbers. JavaScript has one type for numbers (there is no separate integer type).
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point number
let num3 = -100; // Negative number
// BigInt: allows for representing very large integers that exceed the limits of the Number type (which can safely represent integers only up to 2^53 - 1).
let bigInt1 = 1234567890123456789012345678901234567890n;  // The 'n' denotes a BigInt
// Boolean: represents a logical value, either true or false
let isActive = true;
let isComplete = false;
// Undefined: A variable that is declared but not assigned a value is of type undefined. Also, the return value of functions that don’t explicitly return a value is undefined.
let x;
console.log(x);  // Outputs: undefined

function test() {}
console.log(test());  // Outputs: undefined
// we can create a variable and then assign it a value in another line. The variable has an "undefined" value until we assign some value
var milk;
alert(milk);
milk = 'delicious';
alert(milk);
// null: represents the intentional absence of any object value. It is a special value that is explicitly assigned to a variable to represent "nothing" or "no value".
let person = null;
// Symbol: is a unique and immutable value often used as an identifier for object properties. Each Symbol is guaranteed to be unique.
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2);  // Outputs: false
