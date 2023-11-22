
/*
*round tonearest int then get sum 
*/

function calaculateNumber (a, b) {
	const an = Math.round(a);
	const bn = Math.round(b);
	const c = an + bn ;

	return c;
} 
module.exports = calaculateNumber;
