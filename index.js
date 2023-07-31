class Burger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = [];
    }
    static sizeSmall = {price: 50, calories: 20};
    static sizeBig = {price: 100, calories: 40};
    static withCheese = {price: 10, calories: 20};
    static withSalad = {price: 20, calories: 5};
    static withPotato = {price: 15, calories: 10};
    static toppingSpice = {price: 15, calories: 0};
    static toppingMayo = {price: 20, calories: 5};
    addTopping(topping) {
        this.topping.push(topping);
    }
    calcPrice() {
        const totalPrice = this.size.price + this.stuffing.price + this.topping.reduce((accum, topping) => accum + topping.price, 0);
        return totalPrice;
    }
    calcCalories() {
        const totalCalories = this.size.calories + this.stuffing.calories + this.topping.reduce((accum, topping) => accum + topping.calories, 0);
        return totalCalories;
    }
}
const burger1 = new Burger(Burger.sizeBig, Burger.withCheese);
burger1.addTopping(Burger.toppingSpice);
console.log("Price: " + burger1.calcPrice());
console.log("Calories: " + burger1.calcCalories());