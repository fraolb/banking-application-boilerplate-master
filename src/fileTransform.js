////create array

///array literal
let cars = [];
cars.push("nissan")
cars.push("bmw")
cars.push("ford")
cars.push("tata")

console.log(cars)

///array constructor
let trucks = new Array()

///push to the last postion
trucks.push("tata")
trucks.push("volvo")
trucks.push("sino")
///push to first
trucks.unshift("Isuzu")

console.log(trucks)

///remove element from the back
trucks.pop()

//remove from first

trucks.shift()

console.log(trucks)

///array operations
//reduce()....


///array of array
let cards = []
let name = "coca"
let color = "red"
let size = "normal"
let card = []
card.push(name)
card.push(color)
card.push(size)

cards.push(card)
console.log(cards)