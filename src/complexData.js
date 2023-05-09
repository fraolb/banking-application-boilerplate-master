const products = [
  { productName: "gucci round bucklet belt", price: 400 },
  { productName: "gucci round bucklet belt", price: 450 },
  { productName: "gucci round bucklet belt", price: 300 },
  { productName: "smiley tshirt", price: 100 },
  { productName: "smiley tshirt", price: 250 },
  { productName: "smiley tshirt", price: 400 },
  { productName: "shinie nail paint", price: 10 },
  { productName: "shinie nail paint", price: 40 },
  { productName: "shinie nail paint", price: 140 },
];


let premiumProducts = products.filter(product => product.price > 300)
.map(i=>{
    return {
        productName: i.productName.toUpperCase(),
        price : i.price
    }
})
.reduce((stocks, currentProduct)=>{
    let stockItem = stocks.find(i => i.productName === currentProduct.productName)
    if(stockItem)
        ++stockItem.stock
    else
        stocks.push({
            productName: currentProduct.productName,
            stock: 1
        })
        return stocks;
},[])

console.log(premiumProducts)