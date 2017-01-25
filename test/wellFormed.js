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
};