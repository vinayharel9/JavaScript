var a = {}; //internally line 1 is also doing new Object() as mentioned in line2
var b = new Object(); //Object() is constructor function of the class

console.log(typeof a);
console.log(typeof b);

var dog = {
    name:'sheru',
    breed: 'indie',
    bark : function()
    {
        console.log('bow bow')
    },
    owner:{
        name:'mark',
        age:28,
        talk:function(){
            console.log('owner talks')
        }
    }
}

console.log(typeof(dog.bark)) //function
console.log('-------------------');
let txt='';
for(let x in dog)
{
    if(typeof(dog[x])== 'function' )
    {
        console.log(dog[x]());    
    }
    else
    {
        console.log(dog[x]);
    }
    
}
console.log('-------------------');
//you can also put key name in string, it will not make difference
// var dog = {
//     'name':'sheru',
//     'breed': 'indie'
// }

console.log(dog.name + dog.breed);

//fetching object value using key
console.log(dog['breed']);

//fetching object value dynamically using variable - this is useful when key is send from backend
var c = 'name'
console.log(dog[c]); //whatever inside [] is converted to string implicitly i.e c.toString() or dog['name']

//fetching value of key that is function
console.log(dog['bark']());

var a={}, b={key:'b'}, c={key:'c'};
console.log(b.toString()) //[object Object]

a[b]=128; //a['[object Object]']=128
a[c]=456; //a['[object Object]']=456

console.log(a[b]) //456

var car = {
    name : 'audi',
    distance : 123,
    isPetrol : true
}

for(let key in car)
{
    console.log(key,' ',car[key])
}


function Dog(name, breed)
{
    this.name=name;
    this.breed=breed;
    this.barks=function()    //this is private method of contructor
    {
        console.log('barks method')
    }
}

var d1 = new Dog('pico','husky');
console.log(d1);

console.log(d1.barks())

//prototype is a object which is available in the constructor functions using which inheritance in JS can happen
//called as prototypical inheritance 
//prototype - type of prototype is object and can hold any property in it e.g function, number etc
//when you want to share a method/function across all instances of a contructor, then you will create a prototype
//prototype is public across all instances of that contructor

Dog.prototype.barks1 = function()
{
    console.log("woof woof");
}

var d2 = new Dog('pico1','husky1');

console.log(d2.barks1())

//proto - making use of other object by referring to that object using __proto__ . this is inheritance in JS
// so we are linking one object to another object to make available all things present in the referred object 
//inshort proto is a pointer to parent prototype

var t = {
    x: 10,
    calculate : function(z)
    {
        return this.x + this.y + z;
    }
};

var p = {
    y:20,
    __proto__ : t  //make available all the property of t to p
};

console.log(p.calculate(1));

var k = {
    y:20,
    __proto__ : t //make available all the property of t to k
};

console.log(k.calculate(2));

console.log("---------- de-structuring object in below 2 ways    ---------")

const {name, last} = {
    name : 'vinay',
    last : 'harel'
}

console.log(name);
console.log(last);

const {objName : on, objLast : ol} = {
    objName : 'vinay',
    objLast : 'harel'
}

console.log(on);
console.log(ol);

console.log("---------- spread operator in object    ---------")

const oj = {
    name : 'vinay',
    last : 'harel'
}

const oj1 = {
    age : 28,
    ...oj
}

console.log(oj1);


// if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables (i.e., variables only available inside the function body).

// Here's an example:

// function storeOrder(order) {
//   localStorage.setItem('id', order.id);
//   localStorage.setItem('currency', order.currency);
// }
// Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:

// function storeOrder({id, currency}) { // destructuring
//   localStorage.setItem('id', id);
//   localStorage.setItem('currency', currency);
// }
// The destructuring syntax is the same as taught in the previous lecture - just without creating a constant or variable manually.

// Instead, id and currency are "pulled out" of the incoming object (i.e., the object passed as an argument to storeOrder).

// It's very important to understand, that storeOrder still only takes one parameter in this example! It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.

// The function would still be called like this:

// storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!