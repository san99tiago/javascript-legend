// OBJECTS IN JAVASACRIPT
// Santiago Garcia Arango

// ----------------------------------------------------------------------------
// Create our first object with manual attributes and methods
var my_car_1 = {
    owner: "Santiago Garcia",
    brand: "Ferrari",
    model: "Enzo",
    year: 2004,
    designer: "Ken Okuyama de Pininfarina",
    type: "Super-Sport",
    color: "Red",
    price: 700000,
    motor: "V12 - F140B 6000cm3",
    car_details: function() {
        console.log("*CAR DETAILS*");
        console.log(`Owner --> ${this.owner}`);
        console.log(`Car --> ${this.brand}, ${this.model}, ${this.year}`);
        console.log(`Details --> ${this.designer}, ${this.type}, ${this.color}`);
    }
};

// Show oject general and specific information
console.log("\n-------GENERAL CAR INFO-------");
console.log(my_car_1);
console.log("\n-------SPECIFIC CAR INFO-------");
console.log("car.owner = ", my_car_1.owner);
console.log("car.brand = ", my_car_1.brand);
console.log("car.year = ", my_car_1.year);
console.log("car.type = ", my_car_1.type);
console.log("car.color = ", my_car_1.color);
console.log("car.price = ", my_car_1.price);
my_car_1.car_details();


// ----------------------------------------------------------------------------
// Create objects with a constructor approach
class general_car_object {
    constructor(owner, brand, model, year, color, motor, type, price, designer) {
        this.owner = owner;
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.year = year;
        this.designer = designer;
        this.color = color;
        this.price = price;
        this.motor = motor;
    };
    car_details = function () {
        console.log("*CAR DETAILS*");
        console.log(`Owner --> ${this.owner}`);
        console.log(`Car --> ${this.brand}, ${this.model}, ${this.year}`);
        console.log(`Details --> ${this.designer}, ${this.type}, ${this.color}`);
    };
}

// Use general class for object creation with constructor
var my_car_2 = new general_car_object("Monica", "Bugatti", "Veyron", 2012,
    "Black", "W16 Turbo", "Super-Sport", 1500000, "Jozef Kaban");

// Show oject general and specific information
console.log("\n-------GENERAL CAR INFO-------");
console.log(my_car_2);
console.log("\n-------SPECIFIC CAR INFO-------");
console.log("car.owner = ", my_car_2.owner);
console.log("car.brand = ", my_car_2.brand);
console.log("car.year = ", my_car_2.year);
console.log("car.type = ", my_car_2.type);
console.log("car.color = ", my_car_2.color);
console.log("car.price = ", my_car_2.price);
my_car_2.car_details();
