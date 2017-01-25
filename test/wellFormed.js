<<<<<<< HEAD
module.exports = (x)=>{
	try{
		for(let y of x) {
			var t = JSON.stringify(y);
			JSON.parse(t);
		}
		return true;
	}
	catch(e){
		return e;
	}
=======
module.exports = (x)=>{
	try{
		for(let y of x) {
			var t = JSON.stringify(y);
			JSON.parse(t);
		}
		return true;
	}
	catch(e){
		return e;
	}
>>>>>>> 6b1aca1d3e35b6965ab4253b2b236d984f4b2143
};