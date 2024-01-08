function abc()
{
    console.log("hello")
}

abc()

console.log(typeof(abc())) //since function is not returning anything, so type of function is undefined



console.log('------- string return function --------')

function a()
{
    return 'string return function'
}

a()

console.log(typeof(a())) //string
console.log(a())  //string return function


console.log('------- assigning function to a variable --------')

var c = function def()
{
    console.log("hello def")
}

c()
console.log(typeof c) //function


console.log('------- passing function as parameter and return function within function --------')

function b(f)
{
    f();
    return function()
    {
        console.log('returned function')
    }
}

var a = b(function() {console.log("passed function as parameter")});
console.log(a());

console.log('---------------')


function x()
{
    console.log("x is real");
}
function x()
{
    console.log("x is not real");
}
x();
function x()
{
    console.log("both x is not real");
}

//output : both x is not real
//In JavaScript, when you declare multiple functions with the same name, the last declaration will override any previous declarations
//This is because the last declaration of the x function overwrites the previous ones, and when you call x(), it executes the last implementation, 
//which logs "both x is not real" to the console. The earlier declarations are effectively ignored.