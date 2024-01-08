//Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their 
//containing scope during the compilation phase. This means that you can use a variable or call a function before it has been declared in your code.
//Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. 
//This means that you can use a variable or call a function before it has been declared in your code.

//------------------variable hoisting ---------------------------------------------
var a = 10;

function abc()
{ 
  //var a;
  console.log(a); //undefined
  var a = 20; //a=20
  console.log(a);
}

abc()

//In this example, the declaration var a; is hoisted to the top, so the first console.log outputs undefined.
//The assignment a = 20 remains in place, so the second console.log outputs 20.

//------------------- function hoisting -------------------------------------------

mnc();

function mnc()
{
    console.log("function hoisting");
}

//In this case, the entire function mnc declaration is hoisted to the top. 
//You can call the function before its declaration in the code.