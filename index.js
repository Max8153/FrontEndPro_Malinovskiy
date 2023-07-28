const createHouseBtn = document.querySelector(".createHouseBtn").addEventListener("click", showHouseForm);
const createHouseForm = document.querySelector(".createHouseForm");
function showHouseForm(event) {
    event.preventDefault();
    createHouseForm.style.display = "block";
}
const numberOfFlats = document.querySelector("#flats");
const peapleInEachFlat = document.querySelector("#peaple");
const create = document.querySelector("#create").addEventListener("click", showResult);
let flats;
let peaple;
let house1;
const totalPeaple = () => flats*peaple;
function showResult(event) {
    event.preventDefault();
    flats = parseInt(numberOfFlats.value);
    peaple = parseInt(peapleInEachFlat.value);
    house1 = new House(flats, peaple);
    house1.showHouse();
    console.log(`And in this house live ${totalPeaple()} peaple at all.`)
}
class House {
    constructor(flats, peaple) {
        this.flats = flats;
        this.peaple = peaple;
    }
    showHouse() {
        console.log(`Ok, here is(are) ${flats} flat(s) it the house with ${peaple} peaple(person) in each flat.`);
    }
}