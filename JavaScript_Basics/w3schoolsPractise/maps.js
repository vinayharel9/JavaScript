// We can create a JavaScript Map by:

// 1. Passing an Array to new Map()
// 2. Create a Map and use Map.set()

//set : you can add elements (key,value) in map using set method
//The get() method gets the value of a key in a Map
//The size property returns the number of elements in a Map
//The delete() method removes a Map element
//The has() method returns true if a key exists in a Map

// 1. Passing an Array to new Map()

const map1 = new Map([
    ['name','vinay'],
    ['last','harel'],
    ['car','xyz'],
    ['city','pune'],
])

// 2. Create a Map and use Map.set()

const map2 = new Map();

map2.set('name','lampard');
map2.set('last', 'williams');
map2.set('car','abc');
map2.set('city','delhi');

console.log(map2.get('name'));
map2.delete('city');
console.log(map2.size);
console.log(map2.has('name'));

//Iterate the map using foreach() - The forEach() method calls a function for each key/value pair in a Map:

let text='';
map1.forEach(function(value,key){
  text+=key+' = '+value+' ';
}
)
console.log(text +' ');

//The entries() method returns an iterator object with the [key, values] in a Map:

let text2='';
const obj = map2.entries();
console.log(obj);

for(const x of map2.entries())
{
    text2+=x+' ';
}
console.log(text2);