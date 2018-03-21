
const concatAll = (array,fn) => {
	let results = []
	for (const value of array)
			results.push.apply(results,value)
	return results
}
const forEach = (array,fn) => {
	for(const value of array)
		fn(value)
}
const map = (array,fn) => {
	let result = [];
	for(const value of array)
		result.push(fn(value))
	return result;
}
const filter = (array,fn) => {
	let result = []
	for(const value of array)
		(fn(value)) ? result.push(value) : undefined
	return result;
}


const reduce = (array,fn,initialValue) => {
	let accumlator;
	if(initialValue != undefined)
		accumlator = initialValue;
	else
		accumlator = array[0];
	if(initialValue === undefined)
		for(let i=1;i<array.length;i++)
			accumlator = fn(accumlator,array[i]);
	else
		for(const value of array)
			accumlator = fn(accumlator,value);
	return [accumlator];
}

const zip = (leftArr,rightArr,fn) => {
let index, results = [];
for(index = 0;index < Math.min(leftArr.length, rightArr.
length);index++)
results.push(fn(leftArr[index],rightArr[index]));
return results;
}
export { concatAll, forEach, map, filter, reduce,zip };
//console.log(reduce(useless,(acc,value)=>acc*value,1))
// console.log(map(apressBooks,(book) => {
// return book.bookDetails
// }))
// console.log(
// 	concatAll(map(apressBooks,(book) => {
// return book.bookDetails}))
// )

