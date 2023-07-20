const counter = document.querySelectorAll(".counter");
function click(event) {
    if (event.target.tagName === "IMG") {
        const countElement = event.target.nextElementSibling;
        let count = countElement.innerHTML;
        count++;
        countElement.innerHTML = count;
    }
}
const images = document.querySelector(".container").addEventListener("click", click);
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(".container {display: flex; justify-content: center; gap: 10px}");
styleSheet.insertRule(".counter {display: flex; justify-content: center}")