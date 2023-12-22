// Three ways to declare strings in js 
let name1 = 'sainath wankhede'; //by single quote
let name2 = "sainath wankhede"; //by double quote
let name3 = `sainath wankhede`; //by backticks.(template string.)

console.log(name1); //sainath wankhede
console.log(name2); //sainath wankhede
console.log(name3);  //sainath wankhede.

let statement = `Mithun said " Javascript is cool. "`;
console.log(statement);


// number variables.
let age = 21;
console.log(age);//21
console.log(typeof age);//typeof operators returns the type of value.(number)

let height = 6.2;
console.log(height); //6.2
console.log(typeof height);//number.


/////////////////// IMPORTANT FOR INTERVIEW //////////////////////////////
// NaN (Not a Number) the data type is number.
let values = NaN;
console.log(values); //NaN
console.log(typeof values); //Number

let values1 = Infinity;
console.log(values1); //Infinity
console.log(typeof values1); //Number

let age1 = undefined;
console.log(age1);//undefined
console.log(typeof age1); //undefined.

let discount = null;
console.log(discount);
console.log(typeof discount);
////////////////////////////////////////////////////////////////

// boolean variables.
const condition1 = true;
const condition2 = false;

console.log(condition1); //true
console.log(typeof condition1); //boolean.

// BigInt variables.
const veryBigNumber = 111n;
console.log(veryBigNumber); //111n
console.log(typeof veryBigNumber); //bigint.

// symbol variables --> this variables provide gaurantee of unique values.
let simplesymbol = Symbol("This is a symbol");
console.log(simplesymbol); // This is a symbol.
console.log(typeof simplesymbol); //symbol. 

// String Interpolation :
// string interpolation is a way to create a new string value from a mix of constants, variables, literals, and expressions. It can be used in both single-line and multiline string literals.

let name = 'sainath';
let age2 = 23;
console.log("Hello " + name + " You are " + age2 + "  yours old."); // String Concatination.
console.log(`Hello ${name} You are ${age2} Yours old.`); //String Interpolation.


/////////////////////Non Primitive Data Type///////////////////////

// Object

let studentdetails = {
    "name": "sainth",
    "age": 21,
    "place": "Banglore."
}
// Accessing of object elements by two ways

// 1. By (.) operator
console.log(studentdetails.name);//sainath
// 2. By []
console.log(studentdetails["name"]);//sainath.

// Arrays

let student = ['sainath', 'tushar', 'shubham', 123, true, 23.44];
console.log(student); //['sainath', 'tushar', 'shubham', 123, true, 23.44];
console.log(typeof student); //object.
// accessing of values 
console.log(student[0]);//'sainath'
console.log(student[1]);//'tushar'
console.log(student[2]);//'shubham'
console.log(student[3]);//123
console.log(student[4]);//true
console.log(student[5]);//23.44

//////////////////////////////OPERATORS ///////////////////////////////////

// Assignment operators (=)
let num = 5;
console.log(num);

// Arithmetic operators  ( basic math operations.)

let num1 = 4;
let num2 = 2;
console.log(num1 + num2);//Addition
console.log(num1 - num2);//Substraction
console.log(num1 * num2);//Multiply
console.log(num1 / num2);//division(result or quotient)
console.log(num1 % num2);//modulus (remainder)
console.log(num1 ** num2);//power or exponentian

// Relational operator : returns always boolean value (comparision.)

let num3 = 3;
let num4 = '3';
console.log(num3 == num4);//compare only values
console.log(num3 != num4);// not equal to  values
console.log(num3 === num4);//compare values as well as types
console.log(num3 !== num4);// not equal to values with types
console.log(num3 > num4); //greater than
console.log(num3 < num4);//less than
console.log(num3 <= num4);//greather than equal
console.log(num3 >= num4);//greater than equal to

// logical operators : (returns boolean operations.)

// 1) logical AND (&&) : BOTH CONDITIONS TRUE THEN ONLY RESULT WILL TRUE.AND
// 2) LOGICAL OR (||) : IF ONE OF THE CONDITION IS TRUE THEN RESULT WILL TRUE.
// 3) LOGICAL NOT (!) : IF CONDITION IS TRUE THEN RESULT IS FALSE.IF CONDITION IS FALSE THEN RESULT TRUE.

let condition3 = (num3 == num4);
let condition4 = (num1 > num2);
console.log(condition3 && condition4);//true 
console.log(condition3 || condition4);//true
console.log(!condition3);//false

// Conditional statments 
// It is used to check for conditions
// Decision making

// Write a program to check whether number is even or odd.

let number = 0;

if (number === 0) {
    console.log(`number is zero`);
} else if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}


// Ternary operator (easy way to demostrate to if else)

// (condition) ? true : false;

let num6 = 2;
let num7 = 4;
(num6 > num7) ? console.log("num6 is bigger") : console.log("num7 is bigger");