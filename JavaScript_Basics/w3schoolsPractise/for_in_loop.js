
const obj = {
    name:'vinay',
    last:'harel',
    mob:9999999999,
    city:'pune'
}

let text="";
for(let x in obj)
{
    text+=obj[x];
}

console.log(text);