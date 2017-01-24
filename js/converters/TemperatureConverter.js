module.exports = (x)=>{
	let s = parseInt(x, 0);
	let m = s * 9;
	m = m / 5;
	m = m + 32;
	return parseInt(m, 0);
};
