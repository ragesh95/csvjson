module.exports = (x)=>{
	return parseInt((x + '')
    .replace(/[^01]/gi, ''), 2);
}