const products = [
    ["gucci round bucklet belt", 400],
    ["gucci round bucklet belt", 450],
    ["gucci round bucklet belt", 300],
    ["smiley tshirt", 500],
    ["smiley tshirt", 50],
    ["smiley tshirt", 250],
    ["shinie nail paint", 100],
    ["shinie nail paint", 250],
  ];

  
const nonPremiumProducts = products.filter(product => product[1] <= 300)
  .map((prod)=>[prod[0].toUpperCase(), prod[1] ])
  .reduce((stocks, currentProduct)=>{
    let stockItem = stocks.find(item => item[0] == currentProduct[0]);
    if(!stockItem)
        stocks.push([currentProduct[0],1]);
    else
        stockItem == ++ stockItem[1];
    return stocks;
  },[])

  console.log(nonPremiumProducts)