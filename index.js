const images = [
    "https://c-cl.cdn.smule.com/smule-gg-uw1-s-6/arr/44/63/0cf7fc99-748e-4dcf-8dba-1805c5ada101.jpg",
    "https://image1.thematicnews.com/uploads/topics/preview/00/09/42/07/bed4955196_256crop.jpg",
    "https://www.visitdubai.com/-/media/images/leisure/campaigns/dubai-presents/itineraries/nature/nature-header-2.jpg?&cw=256&ch=256",
    "https://avatar.rf4game.com/rf4game.ru/wp-content/uploads/avatar/256/0037/37960.jpg"
]
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const image = document.querySelector("img");
let index = 0;
image.src = images[index];
hideButtons();
prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);
function prevImg() {
    index = index-1;
    image.src = images[index];
    hideButtons();
}
function nextImg() {
    index = index+1;
    image.src = images[index];
    hideButtons();
}
function hideButtons() {
    prevBtn.style.display = index === 0 ? "none" : "inline";
    nextBtn.style.display = index === images.length - 1 ? "none" : "inline";
}