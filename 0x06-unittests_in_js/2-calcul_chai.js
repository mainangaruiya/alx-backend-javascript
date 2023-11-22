
/*
*round tonearest int then get sum 
*/

function calaculateNumber (type, a, b) {
	const an = Math.round(a);
	const bn = Math.round(b);
	
	switch(type) {
		case 'SUM':
			return an + bn;
		case 'SUBTRACT':
			return an - bn;
		case 'DIVIDE':
			if (bn === 0){
				return'Error'
			}
			return an/bn;
		default:
			throw new Error('Invalid operation type');
	}
} 
module.exports = calaculateNumber;
