class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showPerson() {
        console.log(`Hello ${this.name}, you are ${this.age} years old`)
    }
}
class Car {
    constructor(brand, model, dateOfRelease, price, owner) {
        this.brand = brand;
        this.model = model;
        this.dateOfRelease = dateOfRelease;
        this.price = price;
        this.owner = owner;
    }
    showCar() {
        console.log("The car is", this.brand, this.model, this.dateOfRelease, this.price, "and it is owned by", this.owner.name)
    }
}
function getValidInput(message) {
    let input;
    do {
        input = prompt(message)
    } while (input === "" || input === null);
    return input;
}
const userName = getValidInput("Enter your name");
const userAge = getValidInput("Enter your age");
if (Number(userAge) < 18) {
    throw new Error(alert("You have to be 18 years old at least to own a car"));
}
const person1 = new Person(userName, userAge);
person1.showPerson();
const userCarBrand = getValidInput("Enter your car brand");
const userCarModel = getValidInput("Enter your car model");
const userCarDateOfRelease = getValidInput("What year was your car assembled?");
const userCarPrice = getValidInput("How much your car costs?");
const car1 = new Car(userCarBrand, userCarModel, userCarDateOfRelease, userCarPrice, person1);
car1.showCar();