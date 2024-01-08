const products = [
    {
        title : "mobile",
        price : "rs 1000"
    },
    {
        title : "tv",
        price : "rs 2000"
    },
    {
        title : "ac",
        price : "rs 4000"
    }
]

const details = products.map((product) => {

    return product.title
}); 

console.log(details);