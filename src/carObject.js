function Engine(cylinders, size){
    this.cylinders = cylinders;
    this.size = size;
}

function Car(make, model, color, cylinders, size){
    this.make = make;
    this.model = model;
    this.color = color;

    this.engine = new Engine(cylinders, size);
}

let jackCar = new Car("Eagle", "Talon Tsi", "Silver", 4, 2.2);

console.log(jackCar)

jackCar.year= 2015
 
console.log(jackCar)


let myCar ={
    make:'honda',
    model:'zxi',
    color:'blue',
    engine:{
        cylinders: 4,
        size: 2.2
    }
}

console.log(myCar)