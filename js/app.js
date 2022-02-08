"use strict";
const arr = [63, 4, 12, 9, 8]
arr.sort(compareNum)
console.log(arr);
function compareNum(a, b) {
	return a - b
}
let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of iterable) {
	console.log(entry);
}
// ['a', 1] ['b', 2] ['c', 3]

for (let [key, value] of iterable) {
	console.log(key);
}
// arr.pop()
// arr.push(10)
// console.log(arr);
// for (const value of arr) {
// 	console.log(value);
// }
// arr.forEach(function(item, i, arr){
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt()
// const products = str.split(", ")
// products.sort()
// console.log(products.join("; "));