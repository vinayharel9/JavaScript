var a = 10;
var b = 20;
var c = 30;
var d = 40;

console.log(`addition of ${a} and ${b} is `,a+b);
console.log(`subtraction of ${a} and ${b} is `,a-b);
console.log(`multiplication of ${a} and ${b} is `,a*b);
console.log(`division of ${a} and ${b} is `,a/b);
console.log(`Is ${a} greater than ${b} `,a>b);
console.log(`Is ${b} greater than ${a} `,b>a);
console.log(`Remainder when ${d} is divided by ${c} `,d%c);

console.log('-------------------------')

//JS is loosely typed langauge i.e values are assigned at run time

//convert string to number, just add + infront of string
console.log(typeof(+"1")) //number

console.log(1=="1") //true, it checks only value and not data type [internally it converts string to number and equates i.e 1==+"1"] 
console.log(1==="1") //false, it checks both value and data type
console.log(1===1) //true

console.log('------------- a  -------------')
console.log(false=='0')  //0==0
console.log(false==='0')

//concatenation
console.log('abc' + 'def') //abcdef
console.log(2+'2') //22
console.log('2'+2) //22
console.log(2+2) //4

console.log(+'2'+2) //4 [+'2' is converted to number 2]
console.log(-'2'+2) //0 [-'2' is converted to number -2], minus does same thing as plus i.e convert string to number but retains minus sign
console.log(+'abc'+2) //NaN , since + will convert string to number and abc is not a number so we get NaN
console.log(+'def') //NaN, since + will convert string to number and def is not a number so we get NaN
console.log(2+'abc') //2abc

console.log(typeof NaN) //number
console.log(typeof +'abc') //number