const store = [
    {
        position: 1,
        name: "Keyboard",
        priceInUAH: 2000,
        color: "Black",
        type: "Mechanics"
    },
    {
        position: 2,
        name: "Mouse",
        priceInUAH: 600,
        color: "Yellow",
        DPI: 12000
    },
    {
        position: 3,
        name: "Monitor",
        priceInUAH: 5000,
        color: "Grey",
        quality: "full HD"
    },
    {
        position: 4,
        name: "PC",
        priceInUAH: 15000,
        color: "White",
        OS: "Windows"
    },
    {
        position: 5,
        name: "Headphones",
        priceInUAH: 400,
        color: "Yellow",
        Microphone: "Yes"
    }
];
function addOrder(productId) {
    const savedOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
    const date = new Date().toLocaleString();
    const product = store.find(item => item.position === productId);
    if (product) {
        const order = {
            date: date,
            productId: productId
        };
        savedOrders.push(order);
        localStorage.setItem("userOrders", JSON.stringify(savedOrders));
    }
}
function showOrders() {
    const savedOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
    const itemsToBuy = document.querySelector(".itemsToBuy");
    itemsToBuy.style.display = "none";
    const ordersContainer = document.createElement("div");
    ordersContainer.classList.add("ordersContainer");
    savedOrders.forEach(order => {
        const orderElement = document.createElement("div");
        orderElement.classList.add("order");
        const productId = order.productId;
        const product = store.find(item => item.position === productId);
        if (product) {
            const productName = product.name;
            const productPrice = product.priceInUAH;

            orderElement.innerHTML = `<p>Date: ${order.date}</p><p>Item: ${productName}</p><p>Price: ${productPrice} UAH</p>`;
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Remove";
            deleteButton.addEventListener("click", () => deleteOrder(order));
            orderElement.appendChild(deleteButton);

            ordersContainer.appendChild(orderElement);
        }
    });
    document.body.appendChild(ordersContainer);
}
function deleteOrder(order) {
    const savedOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
    const index = savedOrders.findIndex(savedOrder => savedOrder.productId === order.productId);
    if (index !== -1) {
        savedOrders.splice(index, 1);
        localStorage.setItem("userOrders", JSON.stringify(savedOrders));
    }
    const ordersContainer = document.querySelector(".ordersContainer");
    ordersContainer.remove();
    showOrders();
}
const ordersButton = document.querySelector(".ordersButton");
ordersButton.addEventListener("click", showOrders);
const buyButtons = document.querySelectorAll(".buyButton");
buyButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const productId = parseInt(event.target.dataset.id);
        addOrder(productId);
    });
});