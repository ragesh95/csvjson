module.exports = (x)=>{
	var map=new Map();
	for(var i=0;i<x.length;i++){
		map[i+1]=0;
		for(var j=0;j<x[i].length;j++){
			map[i+1]+=x[i][j];
		}
	}
	return map;
}