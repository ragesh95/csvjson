// function convertToFahrenheit(x){
// 	return parseInt(x);
// }

// function calculateInterest(){
// 	return 'tju';
// }

// module.exports = {
// 	convertToFahrenheit : convertToFahrenheit,
// 	calculateInterest : calculateInterest
// }
module.exports = (x)=>{
	x=parseInt(x);
	return parseInt(((x*9)/5)+32);
}