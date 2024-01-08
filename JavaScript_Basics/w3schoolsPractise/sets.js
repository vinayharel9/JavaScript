// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.
// If you add duplicate elements, only the first element will be saved

// We can create a JavaScript Set by:
// 1. Passing an Array to new Set()
// 2. Create a new Set and use add() to add values
// 3. Create a new Set and use add() to add variables

//add(): Adds a new element to the Set
//delete() : Removes an element from a Set
//has : Returns true if a value exists in the Set

// 1. Passing an Array to new Set()
const letters = new Set(['vinay','xyz','abc']);
console.log(letters);

// 2. Create a new Set and use add() to add values
const set2 = new Set();

set2.add('a');
set2.add('b');
set2.add('c');

set2.delete('c')
console.log(set2);

// 3. Create a new Set and use add() to add variables
const set3 = new Set();
const a = 'a';
const b = 'b';
const c = 'c';

set3.add(a);
set3.add(b);
set3.add(c);

console.log(set3);

console.log(set3.has('a'));

//The values() method returns a new iterator object containing all the values in a Set

const obj = letters.values();
console.log(obj);
console.log(typeof obj);


let text="";
for(const x of obj)
{
    text+=x;
}
console.log('--------  '+text+' '+typeof text);

// The forEach() method invokes (calls) a function for each Set element:
let text2='';
letters.forEach(function(value){ text2+=value });
console.log(text2);