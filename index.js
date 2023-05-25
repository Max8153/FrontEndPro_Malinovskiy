let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let posElemSum = arr.reduce(function(accum, elem) {
	if (elem > 0) {
		return accum + elem;
	} else {
		return accum;
	}
}, 0);
console.log("Сумма позитивных элементов", posElemSum);
let posElemNumber = arr.filter(function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});
console.log("Количество позитивных элементов", posElemNumber.length);
console.log("Минимальный элемент", Math.min(...arr));
console.log("Порядковый номер минимального элемента", arr.indexOf(Math.min(...arr)) + 1);
console.log("Максимальный элемент", Math.max(...arr));
console.log("Подярковый номер максимального элемента", arr.indexOf(Math.max(...arr)) + 1);
let negElemNumber = arr.filter(function(elem) {
	if (elem < 0) {
		return true;
	} else {
		return false;
	}
});
console.log("Количество негативных элементов", negElemNumber.length);
let oddPosElemNumber = arr.filter(elem => elem % 2 == 1 && elem > 0);
console.log("Количество нечетных позитивных элементов", oddPosElemNumber.length);
let evenPosElemNumber = arr.filter(elem => elem % 2 == 0 && elem > 0);
console.log("Количество четных позитивных элементов", evenPosElemNumber.length);
let evenPosElemSum = arr.reduce(function(accum, elem) {
	if (elem % 2 == 0 && elem > 0) {
		return accum + elem;
	} else {
		return accum;
	}
}, 0);
console.log("Сумма четных позитивных элементов", evenPosElemSum);
let oddPosElemSum = arr.reduce(function(accum, elem) {
	if (elem % 2 == 1 && elem > 0) {
		return accum + elem;
	} else {
		return accum;
	}
}, 0);
console.log("Сумма нечетных позитивных элементов", oddPosElemSum);
let posElem = arr.filter(elem => (elem > 0));
let posElemMult = posElem.reduce((accum, elem) => accum * elem);
console.log("Произведение позитивных элементов", posElemMult);
let maxElem = Math.max(...arr);
let finalResult = arr.map(x => x == maxElem ? x : 0);
console.log("Наибольший элемент массива оставить, остальные = 0", finalResult);