const car = {
    name : 'honda',
    model : 'honda city',
    age : 4,
    isCNG : false,
    colour : 'red',
    details : function()
    {
        return this.name+'*'+this.model+'*'+this.age+'*'+this.colour+'*'+this.isCNG;
    }
}


console.log(car.name);

console.log(car['model']);

let p = 'age'
console.log(p);

console.log(car.details());

console.log('----------------');

for(let x in car)
{
    if(typeof(car[x])=='function')
    {
       console.log(car[x]());
    }
    else
    {
        console.log(car[x]);
    }
}


//Object can have value as array and array can have value as object

const bike = {
    brand : [
        {
            name : 'royal enfield',
            color : 'red',
            model : ['himalayan','meteor','classic350','interceptor']
        },
        {
            name : 'honda',
            color : 'black',
            model : ['shine','cb350','hness']
        }
    ]
}

for(let x in bike.brand)
{
    for(let y in bike.brand[x].model)
    {
        console.log(bike.brand[x].name+'*'+bike.brand[x].color+'*'+bike.brand[x].model[y]);
    }
}