const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
function generateKey(characters, length) {
    result = "";
    for (i = 0; i < length; i++) {
        let key = Math.floor(Math.random() * characters.length);
        result += characters[key];
    }
    return result;
}
console.log(generateKey(characters, 16));