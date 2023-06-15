const calls = {
    numbers: [],
    cache: function(callback, ...addedNumbers) {
        const savedNumbers = this.numbers
        callback(savedNumbers, addedNumbers)
        if (savedNumbers.length > 10) {
            savedNumbers.splice(0, savedNumbers.length - 10)
        }
    }
}
function pushNumbers(arr, num) {
    arr.push(...num)
}
calls.cache(pushNumbers, 111, 222, 333, 444, 555);
console.log(calls, calls.numbers);