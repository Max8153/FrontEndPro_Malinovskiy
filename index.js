const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement (array, index) {
    array.splice(index - 1, 1);
    console.log(array);
    return;
}
removeElement(array, 5);