console.log('------- for in loop in arrays ----------')

let arr = ['bmw', 'audi', 'mercedes', 'jaguar'];

let text = '';

for(let x of arr)
{
    text+=x+' ';
}

console.log(text)



console.log('------- for of loop in strings ----------')

let language = 'string';

let lang = '';

for(let x of language)
{
    lang+=x+' ';
}

console.log(lang);