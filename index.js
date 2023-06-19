const store = [{
    position: 1,
    name: "Keyboard",
    priceInUAH: 2000,
    color: "Black",
    type: "Mechanics"
}, {
    position: 2,
    name: "Mouse",
    priceInUAH: 600,
    color: "Yellow",
    DPI: 12000
}, {
    position: 3,
    name: "Monitor",
    priceInUAH: 5000,
    color: "Grey",
    quality: "full HD"
}, {
    position: 4,
    name: "PC",
    priceInUAH: 15000,
    color: "White",
    OS: "Windows"
}, {
    position: 5,
    name: "Headphones",
    priceInUAH: 400,
    color: "Yellow",
    Microphone: "Yes"
}];
console.log(store[0], store[1], store[2], store[3], store[4]);
const cart = [];
const userChoice = prompt("Enter number of position you want to buy");
switch (userChoice) {
    case "1":
        cart.push(store[0].priceInUAH);
        break;
    case "2":
        cart.push(store[1].priceInUAH);
        break;
    case "3":
        cart.push(store[2].priceInUAH);
        break;
    case "4":
        cart.push(store[3].priceInUAH);
        break;
        case "5":
        cart.push(store[4].priceInUAH);
        break;
        default: console.log("You have to enter number of position (1, 2, 3, 4 or 5)");
}
console.log(cart);
const amount = prompt("How many of this item are you going to buy?");
/*if (isNaN(+amount)) {
    console.log("You have to enter a number");
    }
const fullCart = cart*amount;
if (fullCart > 10000) {
    console.log(`We made you a discount, your price is ${fullCart*0.8}`);
} else {
    console.log(`Your price is ${fullCart}`);
}*/
function countPrice(price, amount) {
    let finalPrice = cart*amount;
    if (finalPrice > 10000) {
    finalPrice = finalPrice*0.8;
    console.log(`We made you a discount, your price is ${finalPrice}`);
    } else {
    console.log(`Your price is ${finalPrice}`); 
    }
}
countPrice(userChoice, amount);