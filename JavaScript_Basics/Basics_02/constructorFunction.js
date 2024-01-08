//foo is a constructor function
function foo(y)
{
    this.y=y;
}

// we are extending property of constructor function using prototype
foo.prototype.x=25;
foo.prototype.calculate = function (z) {
    return this.x + this.y + z;
};

//instantiate m and n 
var m = new foo(15);
var n = new foo(5);

console.log(m.calculate(4));
console.log(m.calculate(3));

