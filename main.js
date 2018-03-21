import {concatAll,forEach,map,filter,reduce,zip} from './array.js'
var useless = [2,5,6,1,10];
let apressBooks = [
{
	name : "beginners",
	bookDetails : [
		{
			"id": 111,
			"title": "C# 6.0",
			"author": "ANDREW TROELSEN",
			"rating": [4.7],
			"reviews": [{good : 4 , excellent : 12}]
			},
		{
			"id": 222,
			"title": "Efficient Learning Machines",
			"author": "Rahul Khanna",
			"rating": [4.5],
			"reviews": []
		}
	]
},
{
	name : "pro",
	bookDetails : [
		{
			"id": 333,
			"title": "Pro AngularJS",
			"author": "Adam Freeman",
			"rating": [4.0],
			"reviews": []
		},
		{
			"id": 444,
			"title": "Pro ASP.NET",
			"author": "Adam Freeman",
			"rating": [4.2],
			"reviews": [{good : 14 , excellent : 12}]
		}
	]
}
];
let reviewDetails = [
{
"id": 111,
"reviews": [{good : 4 , excellent : 12}]
},
{
"id" : 222,
"reviews" : []
},
{
"id" : 333,
"reviews" : []
},
{
"id" : 444,
"reviews": [{good : 14 , excellent : 12}]
}
]
// let bookDetails = map(apressBooks,(book) => {return book.bookDetails})
// console.log(bookDetails)
// console.log(filter(bookDetails,(el)=>{
// 	return el.id > 111
// }))
// console.log(
	
// 			filter(concatAll(map(apressBooks,(book) => {return book.bookDetails})),(el)=>{
// 				return el.id > 111})				
// )

// console.log(concatAll(map(apressBooks,(book) => {return book.bookDetails})))
// console.log(map(apressBooks,(book) => {return book.bookDetails}))
// let bookDetails = concatAll(map(apressBooks,(book) => {return book.bookDetails}))

// console.log(
// 	reduce(bookDetails,(acc,bookDetails)=>{
// 		let goodReviews = bookDetails.reviews[0] != undefined ? bookDetails.reviews[0].good : 0
// 		let excellentReviews = bookDetails.reviews[0] != undefined ? bookDetails.reviews[0].excellent : 0
// 		return { good: acc.good + goodReviews,excellent: acc.excellent + excellentReviews }
// 	},{good:0,excellent:0})
// )
// var query = [{good:0,excellent:0}];
// for(var i = 0;i < apressBooks.length; i++)
// {
// 	for(var j = 0;j < apressBooks[i].bookDetails.length; j++)
// 	{	

// 		if(apressBooks[i].bookDetails[j].reviews[0] !== undefined){
// 			query[0].good += apressBooks[i].bookDetails[j].reviews[0].good
// 			query[0].excellent += apressBooks[i].bookDetails[j].reviews[0].excellent
// 		}
// 	}
// }
// console.log(query)
// console.log(
// zip([1,2,3],[4,5,6],(x,y)=>x+y)
// )
let bookDetails = concatAll(
	map(apressBooks,(book) => {
	return book.bookDetails
	})
)
//zip the results
let mergedBookDetails = zip(bookDetails,reviewDetails,(book,review) => {
if(book.id === review.id)
{
let clone = Object.assign({},book)
clone.ratings = review
return clone
}
})
console.log(mergedBookDetails)