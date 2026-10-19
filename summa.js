// Summerar alla tal i en lista.
function f(x) {
	let s = 0;
	for (let i = 1; i < x.length; i++) {
		s = s + x[i];
	}
	return s;
}
