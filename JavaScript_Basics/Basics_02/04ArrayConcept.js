//Array in JS is a class which we call as constructor function
const a = [1,2,'abc',true]
console.log(a.toString()+'---------')

const a1 = new Array(40);
console.log(a1); //creates 40 undefined elements in array 

const a2 = [40];
console.log(a2); //just one element : 40

console.log(a[2]) 
console.log(a.length)
console.log(typeof a) //object

a.length=1 //reducing array size to 1
console.log(a)

console.log('empty any array')

var e = [1,2,3,4,5,6]
//ways to 
e.length = 0;

console.log('--------------------')

var c = [1,2,3]
var d = c;
d.length = 2;
c = [];
console.log(c) //[]
console.log(d) //[1,2,3]

console.log('--------------------')

var f = [1,2,3]
var g = f;
// f.length = 0;
f = []
console.log(f) //[]
console.log(g) //[] if f.length = 0 , [1,2,3] if f=[]

console.log('----- value of array element is undefined if it is not assigned ---')

var h = [1,2,3];
h.length = 100;
console.log(h)
console.log(h[10]) //value if undefined
console.log(typeof h[10]) //type is undefined

console.log('---- adding element at start and end of array ----')

var i = [1,2,3,4]
i.push(5)  //add element at end of array
i.unshift(0)  //add element at start of array
console.log(i)

const arrayUd = ['working','eating','playing'];
const anotherArrayUd = arrayUd.map((item)=>item+'!');
console.log(anotherArrayUd);

const anotherArrayUd1 = arrayUd.map((item)=>({text:item}));
console.log(anotherArrayUd1);

console.log("---------- de-structuring array as below    ---------")

const [nameFirst, nameLast] = ['vinay','harel'];
console.log(nameFirst);
console.log(nameLast);


console.log("---------- spread operator ---------")
const hobbies = ['cricket','football','golf'];
const extraHobbies = ['tennis'];
const mergeArray = [hobbies,extraHobbies]
console.log(mergeArray);

const mergeArray1 = [...hobbies, ...extraHobbies]
console.log(mergeArray1);

