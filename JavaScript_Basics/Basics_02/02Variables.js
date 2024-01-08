//Primitive data types
//string
//number
//boolean
//Null
//Undefined

// variables can be declared in 4 ways
// 1.automatically
// 2.var - The var keyword should only be used in code written for older browsers.
// 3.let - Introduced in ES6 (2015). Only use let if you can't use const
// 4.const - Introduced in ES6 (2015). always use const if the value and type (Arrays and Objects) should not be changed

//automatically declared variables
m1=8;
m2=16;
m3=65;
console.log(m1+m2+m3);

//declare variables using const and let
const x1 = 5;
const y1 = 6;
let z1 = x1 + y1;
console.log(z1);

//A variable declared without a value will have the value undefined.
let yacht;
console.log(yacht); //undefined
console.log(typeof yacht); //undefined

//mutiple variable declaration in single line
let name1 = 'xyz', age1 = 5, car1 = 'honda';
console.log(name1+age1+car1) //xyz5honda

//If you re-declare a JavaScript variable declared with var, it will not lose its value. 
//You cannot re-declare a variable declared with let or const.
var name2 = 'mno';
var name2;
console.log(name2);

//hoisting with var 
console.log(x3);
var x3=10;

//hoisting with let
// console.log(x6); //ReferenceError: Cannot access 'x6' before initialization
// let x6=6; 

var name = "vinay";
var age = 28;
var userid = "vinayharel@xyz.com";
var isCitizen = true;
var d = null; //null value is assigned
var e;       //if we do not assign value then it is undefined

console.log(d) //null
console.log(e) //undefined [value is undefined]

console.log(typeof(name)); //string
console.log(typeof(age));  //number
console.log(typeof(isCitizen)); //boolean
console.log(typeof(d));  //object [null is datatype but its type is object]
console.log(typeof(e));  //undefined [data type is undefined]
console.log(typeof(typeof(e))); //string 

console.log(`
user with name : ${name},
age: ${age},
userid:  ${userid},
and citizen: ${isCitizen},
`);