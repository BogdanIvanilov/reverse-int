module.exports = function reverse (n) {
	let a = String(n);
	let b = Array.from(a);
	if(b[0] == '-'){
		b.shift();
	}
	let c = b.reverse();
	let output = Number(c.join(''));
	return output;
}
