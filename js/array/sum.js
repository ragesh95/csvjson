module.exports = (x)=>{
	let map = new Map();
	for(let i = 0; i < x.length; i = i + 1) {
		map[i + 1] = 0;
		for(let j = 0; j < x[i].length; j = j + 1) {
			map[i + 1] = map[i + 1] + x[i][j];
		}
	}
	return map;
};
