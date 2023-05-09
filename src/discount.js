
const products=[
    ["gucci round bucklet belt", 300],
    ["gucci round bucklet belt", 300],
    ["smiley tshirt", 50],
    ["smiley tshirt", 50],
    ["shinie nail paint", 10],
]

const calculateDiscountedPrice = discount =>{
    for(let i = 0; i<products.length; i++){
        products[i][1]= products[i][1] - products[i][1]*discount/100;
    }
}
///map array function
const calculateDiscounted = discout => products.map((i)=>[i[0], i[1]-i[1]*discout/100])


//calculateDiscountedPrice(10)
let discountedPrice = calculateDiscounted(10)

console.log(products)
console.log(discountedPrice)